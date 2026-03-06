import Navbar from "./components/navbar.tsx"
import "./index.css"
import { CartProvider } from './context/CartProvider'
import { ProductsProvider } from './context/ProductsProvider'
import App from './App'
import './index.css'

export default function Index() {
  return (
    <>
      <Navbar />
        <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
    </>
  )
}