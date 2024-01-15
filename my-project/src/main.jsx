import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header.jsx'
import Corpo from './conteudo.jsx'
import './index.css'
import { SpeedInsights } from '@vercel/speed-insights/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Corpo />
    <SpeedInsights/>
  </React.StrictMode>,
)