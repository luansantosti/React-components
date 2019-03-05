import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import { caretDown } from 'react-icons-kit/fa/'

const Button = styled.button`
  background: #285cc1;
  color: #fff;
  padding: 5px 15px;
  border-radius: 5px;
  border: 0px;
  font-size: 1em;
  outline: none;
  cursor: pointer;
  -webkit-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
  &:hover {
    background: #1e4694;
  }
`
const DropdownList = styled.ul`
  list-style: none;
  padding: 0px;
  display: ${props => props.visible ? 'block' : 'none'};
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  -webkit-box-shadow: 0px 5px 16px -7px rgba(0,0,0,0.57);
  -moz-box-shadow: 0px 5px 16px -7px rgba(0,0,0,0.57);
  box-shadow: 0px 5px 16px -7px rgba(0,0,0,0.57);
  width: 100%;
  max-width: 160px;
  margin-top: 3px;
  overflow: hidden;
  li {
    a {
      display: block;
      padding: 8px 20px;
      color: #212325;
      text-decoration: none;
      &:hover {
        background: #f7f7f7;
      }
    }
  }
`

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    }
  }
  
  render() {
    return (
      <div>
        <Button onClick={() => { this.setState({ isVisible: !this.state.isVisible })} }>
          {this.props.label} <Icon icon={caretDown}/>
        </Button>
        <DropdownList visible={this.state.isVisible}>
          {
            this.props.options.map( (item, i) => {
              return (
                <li key={i}><a href={item.value}>{item.label}</a></li>
              )
            })
          }
        </DropdownList>
      </div>
    )
  }
}

export default Dropdown;