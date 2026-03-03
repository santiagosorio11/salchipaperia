import { Suspense } from 'react'
import MenuPageContent from '@/components/MenuPageContent'

export const metadata = {
    title: 'Menú | La Salchipaperia D.C.',
    description: 'Explora nuestro menú completo: Salchipapas, Burgers, Que Perros, Alitas, Bebidas y más.',
}

export default function MenuPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-brand-black flex items-center justify-center text-white font-display text-4xl">CARGANDO...</div>}>
            <MenuPageContent />
        </Suspense>
    )
}
