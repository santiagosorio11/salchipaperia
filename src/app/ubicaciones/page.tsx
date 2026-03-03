import { sedes } from '@/data/sedes'
import { SedeCard } from '@/components/SedeCard'

export const metadata = {
    title: 'Sedes | La Salchipaperia D.C.',
    description: 'Encuentra las 12 sedes de La Salchipaperia en Bogotá.',
}

export default function UbicacionesPage() {
    const zonas = [...new Set(sedes.map(s => s.zona))]

    return (
        <main className="min-h-screen pt-24 pb-16 bg-brand-black px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="font-display text-7xl md:text-9xl text-primary tracking-widest"
                        style={{ textShadow: '-4px 4px 0 #FF1493' }}>
                        NUESTRAS<br />SEDES
                    </h1>
                    <p className="font-marker text-xl text-gray-500 mt-2">12 puntos de sabor en Bogotá D.C.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sedes.map(sede => (
                        <SedeCard key={sede.id} sede={sede} />
                    ))}
                </div>
            </div>
        </main>
    )
}
