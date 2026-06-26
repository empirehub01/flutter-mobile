import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Digital Daily Market - Crypto Trading Platform',
  description: 'Modern crypto trading platform with real-time charts and portfolio tracking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-white">{children}</body>
    </html>
  )
}
