import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { supabase } from '@/utils/supabase'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


export default function App({ Component, pageProps, }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        router.push('/login')
      } else {
        router.push('/')
      }
    })
  }, [])
  return (
    <Component {...pageProps} />
  )
}

