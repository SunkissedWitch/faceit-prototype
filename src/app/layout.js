import { Navbar } from '@/components/Navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'
import { Footer } from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={montserrat.className}>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between p-24 border border-yellow-200">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
