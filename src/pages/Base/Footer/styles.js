import styled from 'styled-components'

const FooterWrapper = styled.div`
  background-color: #25a25a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  font-size: 1.0rem;
`

const LinkText = styled.a`
  text-decoration: none;
  transition: all 0.3s ease-in-out;
`

export {FooterWrapper, TextBox, LinkText}