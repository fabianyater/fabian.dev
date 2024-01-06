import {Poppins} from 'next/font/google'
import './globals.css'

const poppins = Poppins({subsets: ['latin'], weight: ["500", "600", "700"]})

export const metadata = {
  title: 'Portafolio | Fabian Yate Ramirez',
  description: 'Este es el portafolio profesional de Fabian Yate Ramirez, ' +
    'donde se presenta su trabajo, habilidades y' +
    ' experiencias en el campo del desarrollo web.',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body className={poppins.className}>{children}</body>
    </html>
  )
}
