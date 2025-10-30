import './globals.css'
import React from 'react'
import ThemeProvider from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CartProvider } from '@/contexts/cart'
import { AuthProvider } from '@/contexts/auth'
import { Toaster } from 'react-hot-toast'
export const metadata = { title:'AgriHarvest', description:'Fresh microgreens & by-products' }
export default function RootLayout({ children }:{children:React.ReactNode}){ return (<html lang='en'><body><AuthProvider><ThemeProvider><CartProvider><Navbar /><main className='min-h-[60vh] py-6'>{children}</main><Footer /><Toaster /></CartProvider></ThemeProvider></AuthProvider></body></html>) }
