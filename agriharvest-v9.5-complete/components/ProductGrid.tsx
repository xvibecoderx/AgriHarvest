'use client'
import products from '@/data/products'
import ProductCard from './ProductCard'
export default function ProductGrid(){ return (<div className='mt-8'><h2 className='text-2xl font-bold mb-4'>All Products</h2><div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>{products.map(p=>(<ProductCard key={p.id} product={p} />))}</div></div>) }
