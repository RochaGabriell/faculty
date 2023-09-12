import { styled } from "styled-components"

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Container = styled.div`
  background-color: #292929;
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: calc(100% - 128px);
`

export { ContentWrapper, Container }