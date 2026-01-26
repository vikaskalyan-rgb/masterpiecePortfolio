import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "MasterPiece Interiors | Premium Interior Design in Chennai",
  description: "Expert interior design services in Chennai. Modular kitchens, wardrobes, TV units, and complete home interiors. 600+ successful projects.",
  keywords: "interior design chennai, modular kitchen, home interiors, wardrobe design, tv unit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
