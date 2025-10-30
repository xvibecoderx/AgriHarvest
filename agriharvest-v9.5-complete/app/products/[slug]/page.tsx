import products from '@/data/products'
import { notFound } from 'next/navigation'
import AddToCartButton from '@/components/AddToCartButton'
export function generateStaticParams(){ return products.map(p=>({slug:p.slug})) }
export default function ProductPage({ params }:{params:{slug:string}}){ const product = products.find(p=>p.slug===params.slug); if(!product) return notFound(); return (<section className='container py-10 grid md:grid-cols-2 gap-8'><div className='card overflow-hidden'><img src={product.image} alt={product.name} className='w-full h-96 object-cover' /></div><div><h1 className='text-2xl font-bold'>{product.name}</h1><p className='text-[var(--muted)] mt-4'>{product.description}</p><div className='text-2xl font-semibold mt-4'>₹{product.price}</div><div className='mt-6'><AddToCartButton product={product} /></div></div></section>) }
