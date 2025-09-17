import { useCart } from '../store'
export default function ProductCard({ p }){
  const add = useCart(s=>s.add)
  return (
    <article className="rounded-2xl shadow-sm bg-white dark:bg-zinc-900 overflow-hidden">
      <img src={p.img} alt={p.name} className="w-full h-56 object-cover"/>
      <div className="p-4">
        <h3 className="font-semibold">{p.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="font-medium">R$ {p.price.toFixed(2)}</span>
          <button onClick={()=>add(p)} className="rounded-xl border px-3 py-1 hover:bg-gray-100 dark:hover:bg-zinc-800">Adicionar</button>
        </div>
      </div>
    </article>
  )
}
