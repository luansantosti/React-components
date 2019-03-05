import React, { Component } from 'react';
import styled from 'styled-components'

import Chip from './chip'
import Card from './card'
import Ballon from './ballon'
import Dropdown from './dropdown'

const Container = styled.div`
  padding: 15px 15px 200px 15px;
  background: #f7f7f7;
`
const ElementStyled = styled.div`
  background: #bbbbbb;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  display: inline-block;
  -webkit-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
  cursor: pointer;
  &:hover {
    background: #a7a7a7;
  }
`

class App extends Component {
  render() {
    return (
      <Container>

        <h2>1 -Create your own a contact chip component and style it.</h2>
        <Chip 
          avatar='https://jovemnerd.com.br/wp-content/uploads/2017/12/terry-crews-capas-variantes-quadrinhos-760x428.jpg' 
          name='Terry Crews'
          numbers={Numbers}
          emails={Emails}
          address='Rua Irmão Miguel Fidelis, Centro, São Miguel do Oeste/SC'
          />

        <h2>2 - Create your own Card component and style it.</h2>    
        <Card 
          image='https://cdn-images-1.medium.com/max/2000/1*y6C4nSvy2Woe0m7bWEn4BA.png'
          title='Lorem ipsum dolor sit amet'
          description='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et'
          link='/lorem-ipsum'
          price='23.55'
        />

        <h2>3 - Create your own Balloon component and style it.</h2>
        <Ballon referral={Element} text='Lorem ipsum dolor'/>

        <h2>4 - Create your own Dropdown component and style it.</h2>
        <Dropdown options={optionsDropdown} label='Menu' />

      </Container>
    );
  }
}

const Element = <ElementStyled>Hover here</ElementStyled>

const optionsDropdown = [
  {
    label: 'Link One',
    value: 1
  },
  {
    label: 'Link Two',
    value: 2
  },
  {
    label: 'Link Three',
    value: 3
  },
  {
    label: 'Link Four',
    value: 4
  }
]

const Numbers = [
  {
    number: '48 991484214',
    type: 'Personal'
  },
  {
    number: '49 993156216',
    type: 'Work'
  }
]

const Emails = [
  {
    email: 'terry@gmail.com',
    type: 'Personal'
  },
  {
    email: 'terry@company.com',
    type: 'Work'
  }
]

export default App;
