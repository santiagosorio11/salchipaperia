import type { Metadata } from 'next'
import Script from 'next/script'
import { Bangers, Permanent_Marker, Nunito } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/Navbar'

const bangers = Bangers({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bangers',
  display: 'swap',
})

const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-marker',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'La Salchipaperia D.C. | La Salchipapa con Más Style',
  description: 'El marketplace oficial de La Salchipaperia D.C. Pide en cualquiera de nuestras 12 sedes. Salchipapas, Burgers, Perros, Alitas y más con el estilo más pesado de Bogotá.',
  keywords: ['salchipapas', 'burgers', 'perros calientes', 'Bogotá', 'domicilios', 'La Salchipaperia'],
  openGraph: {
    title: 'La Salchipaperia D.C.',
    description: 'La Salchipapa con más Style. 12 sedes en Bogotá.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${bangers.variable} ${permanentMarker.variable} ${nunito.variable}`}>
      <body>
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69ca85f22dff72509de852ea"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
