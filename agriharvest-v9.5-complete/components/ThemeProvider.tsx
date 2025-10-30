'use client'
import React from 'react'
import { ThemeProvider as NextThemes } from 'next-themes'
export default function ThemeProvider({ children }:{children:React.ReactNode}){ return <NextThemes attribute='class' defaultTheme='system'>{children}</NextThemes> }
