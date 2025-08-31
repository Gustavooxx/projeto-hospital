import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.scss'
import Site from './pages/home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Site/>
    </BrowserRouter>
  </StrictMode>,
)
