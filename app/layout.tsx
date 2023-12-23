import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Navbar from './page'
import './globals.css'
 
 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
 
      <body className={inter.className}>
        <div className='outer-div'>
 

         {children}
         
         </div>
         </body>
    </html>
  )
}
