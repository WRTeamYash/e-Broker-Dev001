import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'e Broker',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>


    </html>
  )
}
