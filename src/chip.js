import React from 'react'
import styled, { css } from 'styled-components'
import { Icon } from 'react-icons-kit'
import {phone, envelope, home} from 'react-icons-kit/fa/'

const Container = styled.div`
  width: 100%; 
  max-width: 400px;
  background: #fff;
  padding-bottom: 15px;
`
const Header = styled.div`
  max-height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
  position: relative;
`
const Image = styled.img`
  max-width: 100%;
`
const Title = styled.h1`
  color: #fff;
  text-shadow: 1px 2px 2px rgba(0,0,0, 0.5);
  text-align: center;
  padding: 0px 15px;
  font-size: 1.5em;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  bottom: 15px;
  margin: 0px;
`
const BoxItems = styled.div`
  padding: 10px 15px 0px 15px;
  display: flex;
  align-items: normal;
`
const BoxItem = styled.div`
  border-bottom: 1px solid #e6e6e6;
  margin-left: 15px;
  padding-bottom: 15px;
  width: 100%;
  color: #525252
  p {
    margin: 0px 0px 5px 0px;
    display: flex;
    flex-direction: column;
  }
  ${props => 
    props.noBorder && css`
      border-bottom: 0px;
    `  
  }
`
const SubItem = styled.span`
  font-size: 0.8em;
  color: #969696;
`
const CustomIcon = styled(Icon)`
  color: #285cc1;
  svg {
    width: 25px;
    height: 25px;
  }
`
const Chip = (props) => (
  <Container>
    <Header>
      <Image src={props.avatar} />
      <Title>{props.name}</Title>
    </Header>
    <BoxItems>
      <CustomIcon icon={phone} /> 
      <BoxItem>
        {props.numbers.map( (item, i) => {
            return (
              <p key={i}>
                <span>{item.number}</span> 
                <SubItem>{item.type}</SubItem>
              </p>
            )
          })}
      </BoxItem>
    </BoxItems>
    <BoxItems>
      <CustomIcon icon={envelope} />
      <BoxItem>
        {props.emails.map( (item, i) => {
          return (
            <p key={i}>
              <span>{item.email}</span>
              <SubItem>{item.type}</SubItem>
            </p>
          )
        })}
      </BoxItem>
    </BoxItems>
    <BoxItems>
      <CustomIcon icon={home} />
      <BoxItem noBorder>{props.address}</BoxItem>
    </BoxItems>
  </Container>
)

export default Chip