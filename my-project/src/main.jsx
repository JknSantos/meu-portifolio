import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header.jsx'
import Corpo from './conteudo.jsx' // descomentado
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Corpo />
  </React.StrictMode>,
)