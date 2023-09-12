import styled from 'styled-components'

const CardWrapper = styled.div`
  background-color: #d8d3d3;
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: 10px;
  height: 116px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: fit-content;
    gap: 16px;
  }
`

const Descricao = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  color: black;

  h1 {
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1rem;
  }

  a {
    color: green;
  }
`

const Imagem = styled.div`
  width: 90px;
  height: 90px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`

export {CardWrapper, Descricao, Imagem}