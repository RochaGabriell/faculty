import React from 'react'
import ReactDOM from 'react-dom/client'

import Base from './pages/Base/index'
import GlobalStyle from './styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Base />
  </React.StrictMode>,
)