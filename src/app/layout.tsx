import type { Metadata } from 'next'
import { Syne, Figtree } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
})

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-figtree',
})

export const metadata: Metadata = {
  title: 'iGV – Gamer Value',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  )
}
