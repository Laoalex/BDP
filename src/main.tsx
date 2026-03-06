import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './index.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { CartProvider } from './context/CartProvider'
import { ProductsProvider } from './context/ProductsProvider'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Index />
  </StrictMode>,
)
