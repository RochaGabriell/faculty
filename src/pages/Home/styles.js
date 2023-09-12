import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
  color: white;
  gap: 16px;
  overflow-y: scroll;

  &::-webkit-scrollbar{
    background-color: transparent;
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e8ebf5;
    border-radius: 4px;
  }
`

export default Container