import Header from "./Header"
import Home from '../Home/index'
import Footer from "./Footer"

import { ContentWrapper, Container } from "./styles"

function App() {

  return (
    <ContentWrapper>
      <Header />
      <Container>
        <Home />
      </Container>
      <Footer />
    </ContentWrapper>
  )
}

export default App