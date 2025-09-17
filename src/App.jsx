import { Routes, Route } from 'react-router-dom'
import Shell from './layouts/Shell'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Shell><Home/></Shell>} />
      <Route path="/cart" element={<Shell><Cart/></Shell>} />
      <Route path="/checkout" element={<Shell><Checkout/></Shell>} />
    </Routes>
  )
}
