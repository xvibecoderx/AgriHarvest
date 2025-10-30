'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
const Ctx = createContext<any>(null)
export function AuthProvider({children}:{children:React.ReactNode}){ const [user,setUser]=useState(null); useEffect(()=>{ const r=localStorage.getItem('agri_user'); if(r) setUser(JSON.parse(r)) },[]); function signup(u:any){ const obj={id:Date.now(),...u}; localStorage.setItem('agri_user',JSON.stringify(obj)); setUser(obj) } function login(email:string,password:string){ const r=localStorage.getItem('agri_user'); if(!r) return false; const u=JSON.parse(r); if(u.email===email && u.password===password){ setUser(u); return true } return false } function logout(){ localStorage.removeItem('agri_user'); setUser(null) } return <Ctx.Provider value={{user,signup,login,logout}}>{children}</Ctx.Provider> }
export function useAuth(){ const ctx = useContext(Ctx); if(!ctx) throw new Error('useAuth must be used inside AuthProvider'); return ctx }
