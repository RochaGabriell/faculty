import React from 'react'

import {CardWrapper, Descricao, Imagem} from './styles'

const Card = ({ docente }) => {
  return (
    <CardWrapper>
      <Descricao>
        <h1>{docente.nome}</h1>
        <p>{docente.formacao}</p>
        <a href={docente.link} target="_blank" rel="noopener noreferrer">Currículo Lattes</a>
      </Descricao>
      <Imagem>
        <img src={docente.foto} alt={docente.nome} />
      </Imagem>
    </CardWrapper>
  )
}

export default Card