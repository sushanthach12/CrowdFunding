import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import ProviderSession from '@/utils/ProviderSession'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Crowd Funding',
  description: 'Crowd Funding is platform for your loss funding',
}

export default function RootLayout({ children, session }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className} >
      <ProviderSession session={session}>
        <Navbar />
        <main className='min-h-screen'>
        {children}
        </main>
        <Footer />
        </ProviderSession>
      </body>
    </html>
  )
}
