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
      <body className={montserrat.className}>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between px-8 md:px-[7.5rem]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
