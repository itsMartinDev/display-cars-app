import './globals.css'
import type { Metadata } from 'next'
import { arsenal } from '@/app/fonts'


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
      <body className={arsenal.className}>{children}</body>
    </html>
  )
}
