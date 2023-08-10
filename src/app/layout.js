import { Navbar } from '@/components/Navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'
import { Footer } from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'FaceIT',
  description: 'End-To-End Software Development Company',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="">
      <body className={montserrat.className} id='top'>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between px-5 sm:px-10 md:px-14 lg:px-[7.5rem]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
