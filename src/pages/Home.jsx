import products from '../data/products.json'
import ProductCard from '../components/ProductCard'
export default function Home(){
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Loja</h1>
      <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(p=> <ProductCard key={p.id} p={p}/>)}
      </section>
    </div>
  )
}
