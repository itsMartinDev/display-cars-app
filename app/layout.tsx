import './globals.css'
import type { Metadata } from 'next'
import { arsenal } from '@/app/fonts'
import Navbar from '@/components/Navbar'


export const metadata: Metadata = {
  title: 'Virtual Garage',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={arsenal.className}>
        
        <Navbar></Navbar>
        {children}
        </body>
    </html>
  )
}
