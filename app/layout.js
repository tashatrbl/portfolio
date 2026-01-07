import { Instrument_Serif, Inter } from 'next/font/google'

const instrumentSerif = Instrument_Serif({ subsets: ['latin'], weight: ['400'], style: ['normal', 'italic'] })
const inter = Inter({ subsets: ['latin'], weight: ['400','700'], style: ['normal', 'italic'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${instrumentSerif.className} ${inter.className} text-pink-dark 
        antialiased leading-8 overflow-x-hidden`}>
        {children}
        </body>
    </html>
  )
}
