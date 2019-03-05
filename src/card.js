import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 5px;
  overflow: hidden;
`
const Link = styled.a`
  text-decoration: none;
  &:hover {
    h1 {
      color: #285cc1;
    }
  }
`
const BoxImage = styled.div`
  max-height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
`
const Image = styled.img`
  max-width: 100%;
`
const Info = styled.div`
  padding: 15px;
  background: #fff;
  text-align: center;
  h1 {
    font-size: 1.6em;
    margin-top: 0;
    color: #525252;
    margin-bottom: 10px;
    -webkit-transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    transition: all 300ms ease;
  }
  p {
    color: #808080;
    margin-top: 0px;
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 15px;
  }
  span {
    color: #285cc1;
    font-weight: bold;
  }
`
const Price = styled.span`
  font-size: 1.5em;
`


const Card = (props) => (
  <Container>
    <Link href={props.link}>
      <BoxImage>
        <Image src={props.image} />
      </BoxImage>
      <Info>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <span>$ <Price>{props.price}</Price></span>
      </Info>
    </Link>
  </Container>
)

export default Card