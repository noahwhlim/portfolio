"use client"
import './globals.css'
import Navbar from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ThemeProvider } from 'next-themes'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/favicon.ico" sizes="any" /></head>
      <body className='dark:bg-neutral-800'>
        <ThemeProvider enableSystem={true} attribute='class'>
        <Navbar />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
