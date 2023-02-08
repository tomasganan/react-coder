import React from 'react'
import Container from './Container'

const AppIndex = () => {

  const data = [
    {id: 1, name: 'Nicolas'},
    {id: 2, name: 'Rodolfo'},
    {id: 3, name: 'Franco'},
    {id: 4, name: 'Luis'}
  ]

  return (
    <Container data={data} />
  )
}

export default AppIndex