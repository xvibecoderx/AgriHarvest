'use client'
import { useCart } from '@/contexts/cart'
import { Product } from '@/data/products'
import { motion, useAnimation } from 'framer-motion'
import toast from 'react-hot-toast'
export default function AddToCartButton({product}:{product:Product}){ const { addItem } = useCart(); const controls = useAnimation(); async function handle(){ await controls.start({ scale:[1,1.08,1], transition:{duration:0.35} }); addItem(product); toast.success('Added to cart') } return <motion.button onClick={handle} animate={controls} whileTap={{scale:0.98}} className='btn btn-primary'>Add</motion.button> }
