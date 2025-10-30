'use client'
import { motion } from 'framer-motion'
export default function PaymentSuccess(){ return (<div className='min-h-[60vh] flex items-center justify-center'><motion.div initial={{scale:0.8,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.5}} className='text-center'><h1 className='text-3xl font-bold'>Payment successful 🎉</h1><p className='mt-3'>Thank you for your purchase.</p></motion.div></div>) }
