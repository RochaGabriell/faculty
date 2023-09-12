import React, { useEffect, useState } from 'react'

import Card from '../../components/Card'

import Container from './styles'

const Home = () => {

  const [corpoDocente, setCorpoDocente] = useState([])

  useEffect(() => {
    const consumer = async () => {
      try {
        const consume = await fetch('/src/db/docente.json')
        const data = await consume.json() 
        setCorpoDocente(data)
      } catch (error) {
        console.error(error)
      }
    }

    consumer()
  }, [])

  return (
    <Container>
      {corpoDocente.map((value, index) => (
        <Card key={index} docente={value}></Card>
      ))}
    </Container>
  )
}

export default Home