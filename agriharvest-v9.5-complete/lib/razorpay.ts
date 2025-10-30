export const isRazorpayEnabled = false
export const loadRazorpay = () => Promise.resolve(false)
export const openPaymentModal = async () => { alert('Razorpay is disabled in this build (test mode).') }
