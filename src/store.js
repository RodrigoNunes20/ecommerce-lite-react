import { create } from 'zustand'
function read(k,f){try{return JSON.parse(localStorage.getItem(k))??f}catch{return f}}
function save(k,v){localStorage.setItem(k,JSON.stringify(v))}
export const useTheme = create((set)=>({ theme:'light', toggle:()=>set(s=>({theme:s.theme==='light'?'dark':'light'})) }))
export const useCart = create((set)=> ({
  items: read('cart', []),
  add: (p)=> set(s=>{ const i=s.items.find(x=>x.id===p.id); const items=i?s.items.map(x=>x.id===p.id?{...x,qty:x.qty+1}:x):[...s.items,{...p,qty:1}]; save('cart',items); return {items} }),
  remove: (id)=> set(s=>{ const items=s.items.filter(x=>x.id!==id); save('cart',items); return {items} }),
  inc: (id)=> set(s=>{ const items=s.items.map(x=>x.id===id?{...x,qty:x.qty+1}:x); save('cart',items); return {items} }),
  dec: (id)=> set(s=>{ const items=s.items.map(x=>x.id===id?{...x,qty:Math.max(1,x.qty-1)}:x); save('cart',items); return {items} }),
  clear: ()=> set(()=>{ save('cart',[]); return {items:[]} })
}))
