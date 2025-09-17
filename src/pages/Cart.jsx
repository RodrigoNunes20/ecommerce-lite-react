import { useMemo } from 'react'
import { useCart } from '../store'
export default function Cart(){
  const { items, inc, dec, remove, clear } = useCart()
  const total = useMemo(()=> items.reduce((s,i)=> s + i.price*i.qty, 0), [items])
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Carrinho</h1>
      {items.length===0 ? <p>Seu carrinho está vazio.</p> : (
        <div className="rounded-2xl overflow-hidden shadow-sm border border-zinc-200/50 dark:border-zinc-800/50">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 dark:bg-zinc-800/50">
              <tr><th className="text-left p-3">Produto</th><th className="text-left p-3">Preço</th><th className="text-left p-3">Qtd</th><th className="text-right p-3">Subtotal</th><th className="p-3"></th></tr>
            </thead>
            <tbody>
              {items.map(i=> (
                <tr key={i.id} className="border-t border-zinc-200/50 dark:border-zinc-800/50">
                  <td className="p-3">{i.name}</td>
                  <td className="p-3">R$ {i.price.toFixed(2)}</td>
                  <td className="p-3">
                    <div className="inline-flex items-center gap-2">
                      <button onClick={()=>dec(i.id)} className="rounded-lg border px-2">-</button>
                      <span>{i.qty}</span>
                      <button onClick={()=>inc(i.id)} className="rounded-lg border px-2">+</button>
                    </div>
                  </td>
                  <td className="p-3 text-right">R$ {(i.price*i.qty).toFixed(2)}</td>
                  <td className="p-3 text-right"><button onClick={()=>remove(i.id)} className="rounded-lg border px-2 py-1">Remover</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="flex items-center justify-between">
        <button onClick={clear} className="rounded-xl border px-3 py-2">Esvaziar</button>
        <div className="text-right">
          <div className="text-sm opacity-70">Total</div>
          <div className="text-2xl font-semibold">R$ {total.toFixed(2)}</div>
        </div>
      </div>
    </div>
  )
}
