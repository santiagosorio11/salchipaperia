import { sedes } from '@/data/sedes'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock, Phone, Truck, ArrowLeft } from 'lucide-react'
import { Suspense } from 'react'
import MenuPageContent from '@/components/MenuPageContent'

export async function generateStaticParams() {
    return sedes.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const sede = sedes.find(s => s.slug === slug)
    if (!sede) return {}
    return {
        title: `${sede.nombre} | La Salchipaperia D.C.`,
        description: `Pide en nuestra sede de ${sede.nombre}. ${sede.direccion}`,
    }
}

export default async function SedePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const sede = sedes.find(s => s.slug === slug)
    if (!sede) notFound()

    return (
        <main className="min-h-screen">
            {/* Hero Banner */}
            <section className="relative h-72 md:h-96 overflow-hidden">
                <Image src={sede.imagen} alt={sede.nombre} fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-brand-black" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-7xl mx-auto">
                    <Link href="/#sedes" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-body mb-4 transition-colors w-fit">
                        <ArrowLeft size={16} />
                        Todas las sedes
                    </Link>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-xs font-bold uppercase px-3 py-1 rounded-full text-black"
                            style={{ backgroundColor: sede.color }}>
                            {sede.zona}
                        </span>
                        {sede.delivery && (
                            <span className="text-xs font-bold px-3 py-1 rounded-full border border-tertiary text-tertiary flex items-center gap-1">
                                <Truck size={12} /> Delivery disponible
                            </span>
                        )}
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl text-white tracking-widest"
                        style={{ textShadow: `3px 3px 0 ${sede.color}` }}>
                        {sede.nombre.toUpperCase()}
                    </h1>
                </div>
            </section>

            {/* Info Strip */}
            <section className="bg-brand-card border-y-4 border-brand-gray py-6 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                        <MapPin className="text-secondary shrink-0" size={24} />
                        <div>
                            <p className="text-gray-500 text-xs font-body uppercase tracking-wider">Dirección</p>
                            <p className="text-white font-body text-sm">{sede.direccion}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Clock className="text-primary shrink-0" size={24} />
                        <div>
                            <p className="text-gray-500 text-xs font-body uppercase tracking-wider">Horario</p>
                            <p className="text-white font-body text-xs whitespace-pre-line">{sede.horarioFull}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="text-tertiary shrink-0" size={24} />
                        <div>
                            <p className="text-gray-500 text-xs font-body uppercase tracking-wider">Teléfono</p>
                            <a href={`tel:${sede.telefono}`} className="text-white font-body text-sm hover:text-tertiary transition-colors">
                                {sede.telefono}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Menu Section */}
            <section className="bg-brand-black pt-4 pb-16">
                <div className="text-center py-8">
                    <h2 className="font-display text-5xl text-primary tracking-widest"
                        style={{ textShadow: '-2px 2px 0 #FF1493' }}>
                        PIDE EN {sede.nombre.toUpperCase()}
                    </h2>
                    <p className="font-marker text-gray-500 mt-1">Selecciona tus productos favoritos</p>
                </div>
                <Suspense fallback={<div className="text-center text-white font-display text-2xl">CARGANDO MENÚ...</div>}>
                    <MenuPageContent hideHeader />
                </Suspense>
            </section>

            {/* Map Placeholder */}
            <section className="bg-brand-card border-t-4 border-brand-gray py-12 px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="font-display text-4xl text-white tracking-wider mb-4">¿CÓMO LLEGAR?</h3>
                    <div className="bg-brand-gray rounded-2xl h-48 flex items-center justify-center border-4 border-brand-gray"
                        style={{ boxShadow: `4px 4px 0 ${sede.color}` }}>
                        <div className="text-center">
                            <MapPin size={40} className="mx-auto mb-2" style={{ color: sede.color }} />
                            <p className="font-body text-gray-400">{sede.direccion}</p>
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(sede.direccion + ', Bogotá')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-block font-display text-lg tracking-wider text-black px-6 py-2 rounded-full"
                                style={{ backgroundColor: sede.color }}>
                                VER EN GOOGLE MAPS
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
