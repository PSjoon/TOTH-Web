import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'Bem Vindo',
  description: 'Main page',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
