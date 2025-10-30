'use client'
import { useState } from 'react'
import { useAuth } from '@/contexts/auth'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
export default function SignupForm(){ const [name,setName]=useState(''); const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const {signup}=useAuth(); const r=useRouter(); function submit(e:any){ e.preventDefault(); signup({name,email,password}); toast.success('Account created'); r.push('/') } return (<motion.form initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} onSubmit={submit} className='space-y-4'><input className='w-full border p-2 rounded' placeholder='Full name' value={name} onChange={e=>setName(e.target.value)}/><input className='w-full border p-2 rounded' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/><input type='password' className='w-full border p-2 rounded' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/><motion.button whileTap={{scale:0.98}} className='btn btn-primary w-full'>Create account</motion.button></motion.form>) }
