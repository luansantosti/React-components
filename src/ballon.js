import React, { Component }  from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
`
const BoxBallon = styled.div`
  display: inline-block;
  width: auto;
`
const BallonItem = styled.div`
  background: #000;
  color: #fff;
  position: absolute;
  width: auto;
  display: inline-block;
  opacity: ${props => props.visible ? 1: 0};
  visibility: ${props => props.visible ? 'visible' : 'hidden'}
  padding: 3px 7px;
  border-radius: 5px;
  font-size: 0.7em;
  left: ${props => props.x + 20}px;
  top: calc(${props => props.y}px - 10px);
  &:after {
    right: 100%;
    top: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(0, 0, 0, 0);
    border-right-color: #000000;
    border-width: 4px;
    margin-top: -4px;
  }
`

class Ballon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      x: 0,
      y: 0
    }
    this.referral = React.createRef();
  }

  _onMouseMove(e) {
    this.setState({
      x: e.screenX - this.referral.current.getBoundingClientRect().left,
      y: e.nativeEvent.offsetY
    })
  }
  
  render() {
    return (
      <Container ref={this.referral}>
        <BallonItem visible={this.state.isVisible} x={this.state.x} y={this.state.y}>
          {this.props.text}
        </BallonItem>
        <BoxBallon 
          onMouseEnter={() => {this.setState({ isVisible: true })}}
          onMouseLeave={() => {this.setState({ isVisible: false })}}
          onMouseMove={this._onMouseMove.bind(this)}
          >
          {this.props.referral}
        </BoxBallon>
      </Container>
    )
  }
}

export default Ballon;