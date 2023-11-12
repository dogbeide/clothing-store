import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/user.context.jsx'
import App from './App.jsx'
import './index.scss'
import { ShopProvider } from './contexts/shop.context.jsx'
import { CartProvider } from './contexts/cart.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ShopProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ShopProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
