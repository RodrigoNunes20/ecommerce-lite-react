import { Link, NavLink } from 'react-router-dom'
import { useCart, useTheme } from '../store'
export default function Shell({ children }){
  const { items } = useCart()
  const { theme, toggle } = useTheme()
  return (
    <div className={theme==='dark'?'dark':''}>
      <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-100">
        <header className="sticky top-0 z-10 bg-white/70 dark:bg-zinc-900/70 backdrop-blur border-b border-zinc-200/50 dark:border-zinc-800/50">
          <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
            <Link to="/" className="font-semibold">E-Commerce</Link>
            <nav className="flex items-center gap-3">
              <NavLink to="/" end className="px-3 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800">Home</NavLink>
              <NavLink to="/cart" className="px-3 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800">Carrinho ({items.length})</NavLink>
              <NavLink to="/checkout" className="px-3 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800">Checkout</NavLink>
              <button onClick={toggle} className="px-3 py-1 rounded-lg border hover:bg-gray-100 dark:hover:bg-zinc-800">Tema: {theme}</button>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto p-4">{children}</main>
      </div>
    </div>
  )
}
