'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Sede } from '@/data/sedes'
import { MapPin, Clock, Truck, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export function SedeCard({ sede }: { sede: Sede }) {
    const [hovered, setHovered] = useState(false)

    return (
        <Link href={`/sede/${sede.slug}`} className="group block">
            <div
                className="relative overflow-hidden rounded-2xl border-4 border-brand-gray hover:border-primary transition-all duration-300"
                style={{ boxShadow: hovered ? `6px 6px 0px ${sede.color}` : 'none', transition: 'box-shadow 0.3s, border-color 0.3s' }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={sede.imagen}
                        alt={`Sede ${sede.nombre}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 to-transparent" />
                    <span className="absolute top-3 left-3 text-xs font-bold uppercase px-2 py-1 rounded-full text-black"
                        style={{ backgroundColor: sede.color }}>
                        {sede.zona}
                    </span>
                    {sede.delivery && (
                        <span className="absolute top-3 right-3 bg-brand-black/80 text-white text-xs font-bold flex items-center gap-1 px-2 py-1 rounded-full border border-tertiary">
                            <Truck size={12} className="text-tertiary" />
                            Delivery
                        </span>
                    )}
                </div>
                <div className="bg-brand-card p-4">
                    <h3 className="font-display text-2xl text-white tracking-wider group-hover:text-primary transition-colors">
                        {sede.nombre}
                    </h3>
                    <p className="text-gray-400 text-sm flex items-center gap-1 mt-1">
                        <MapPin size={12} className="text-secondary" />
                        {sede.direccion}
                    </p>
                    <p className="text-gray-500 text-xs flex items-center gap-1 mt-1">
                        <Clock size={12} className="text-primary" />
                        {sede.horario.split(' | ')[0]}
                    </p>
                    <div className="mt-3 pt-3 border-t border-brand-gray flex items-center justify-between">
                        <span className="text-primary font-display text-lg tracking-wider group-hover:text-white transition-colors">
                            PEDIR AQUÍ
                        </span>
                        <ArrowRight size={20} className="text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>
        </Link>
    )
}
