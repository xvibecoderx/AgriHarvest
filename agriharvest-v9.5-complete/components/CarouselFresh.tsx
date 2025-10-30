'use client'
import useEmblaCarousel from 'embla-carousel-react'
import products from '@/data/products'
import ProductCard from './ProductCard'
import { useEffect } from 'react'
export default function CarouselFresh(){ const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  useEffect(()=>{ if(!emblaApi) return; const timer = setInterval(()=> emblaApi.scrollNext(), 3000); return ()=> clearInterval(timer) },[emblaApi])
  return (<section><h2 className='text-2xl font-bold mb-4'>Fresh Arrivals</h2><div className='overflow-hidden' ref={emblaRef}><div className='flex gap-4'>{products.map(p=>(<div key={p.id} className='min-w-[260px]'><ProductCard product={p} /></div>))}</div></div></section>) }
