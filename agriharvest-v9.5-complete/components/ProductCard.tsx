'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Product } from '@/data/products'
import AddToCartButton from './AddToCartButton'
export default function ProductCard({product}:{product:Product}){
  return (
    <motion.article whileHover={{scale:1.02}} className='product-card-hover'>
      <div className='product-vignette card overflow-hidden'>
        <img src={product.image} alt={product.name} className='product-img' />
        <div className='p-4'>
          <Link href={`/products/${product.slug}`}><h3 className='font-semibold'>{product.name}</h3></Link>
          <p className='text-sm text-[var(--muted)] mt-1'>{product.short}</p>
          <div className='mt-3 flex items-center justify-between'><div className='text-[var(--accent)] font-semibold'>₹{product.price}</div><AddToCartButton product={product} /></div>
        </div>
      </div>
    </motion.article>
  )
}
