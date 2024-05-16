import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ProductProvider } from './context/products.tsx'
import { CartContextProvider } from './context/cart.tsx'
import { Toaster } from './components/ui/toaster.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductProvider>
      <CartContextProvider>
        <Toaster />
        <App />
      </CartContextProvider>
    </ProductProvider>
  </React.StrictMode>,
)
