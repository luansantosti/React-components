import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../card'
import Chip from '../chip'
import Dropdown from '../dropdown'

storiesOf('Card', module)
.add('with data', () => {
  const data = {
    link: 'https://github.com/',
    image: 'https://avatars0.githubusercontent.com/u/6179731?v=4',
    title: 'Card default',
    description: 'Lorem ipsum text',
    price: '23.40'
  }

  return <Card {...data}/>
})

storiesOf('Chip contact', module)
.add('with data', () => {

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

  return <Chip 
    avatar='https://jovemnerd.com.br/wp-content/uploads/2017/12/terry-crews-capas-variantes-quadrinhos-760x428.jpg' 
    name='Terry Crews'
    numbers={Numbers}
    emails={Emails}
    address='Rua Irmão Miguel Fidelis, Centro, São Miguel do Oeste/SC' /> 
}) 

storiesOf('Dropdown', module)
.add('with links', () => {
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

  return <Dropdown options={optionsDropdown} label='Menu' />
})