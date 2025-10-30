'use client'
import ProductGrid from './ProductGrid'
import products from '@/data/products'
import ProductCard from './ProductCard'
export default function ProductsPreview(){ const preview = products.slice(0,6); return (<section className='mt-10'><div className='flex items-center justify-between'><h2 className='text-2xl font-bold'>Popular Products</h2></div><div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6'>{preview.map(p=>(<ProductCard key={p.id} product={p} />))}</div></section>) }
