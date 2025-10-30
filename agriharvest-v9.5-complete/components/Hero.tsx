'use client'
import { motion } from 'framer-motion'
export default function Hero(){
  return (
    <section className='hero-wrapper'>
      <div className='hero-fixed-bg' aria-hidden='true'></div>
      <div className='container py-10 relative z-10'>
        <div className='grid md:grid-cols-2 gap-6 items-center'>
          <motion.div initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} className='space-y-4'>
            <h1 className='text-4xl font-bold' style={{color:'var(--accent)'}}>Fresh microgreens — delivered sustainably</h1>
            <p className='text-[var(--muted)] max-w-lg'>Nutrient-dense microgreens and sprouts sourced from local farms. Packed fresh and delivered to your door.</p>
            <div className='flex gap-3'>
              <a href='/products' className='btn btn-primary'>Shop Fresh</a>
              <a href='/about' className='btn btn-neon'>Learn more</a>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,scale:0.98}} animate={{opacity:1,scale:1}} className='p-4 card'>
            <img src='https://picsum.photos/seed/hero/1200/800.webp' alt='hero' className='w-full rounded-lg' />
          </motion.div>
        </div>
      </div>
      <div className='hero-backdrop' aria-hidden='true'></div>
    </section>
  )
}
