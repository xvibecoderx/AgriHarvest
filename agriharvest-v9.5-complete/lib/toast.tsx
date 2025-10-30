'use client'
import toast from 'react-hot-toast'
export const success = (msg='Done') => toast.success(msg)
export const error = (msg='Error') => toast.error(msg)
export default toast
