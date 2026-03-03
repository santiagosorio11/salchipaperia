'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import { useState, useEffect } from 'react'
import { Menu, X, ShoppingCart, MapPin } from 'lucide-react'

export default function Navbar() {
    const { state } = useCart()
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileOpen ? 'bg-brand-black backdrop-blur-md shadow-lg border-b-4 border-primary' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logos/LOGOS SALCHIPAPERIA_Mesa de trabajo 1.png"
                        alt="La Salchipaperia DC"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                    <span className="font-display text-3xl text-primary tracking-widest hidden sm:block">
                        LA SALCHIPAPERIA
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 font-marker text-lg">
                    <Link href="/menu" className="text-gray-300 hover:text-primary transition-colors">
                        Menú
                    </Link>
                    <Link href="/ubicaciones" className="text-gray-300 hover:text-secondary transition-colors flex items-center gap-1">
                        <MapPin size={16} />
                        Sedes
                    </Link>
                    <Link href="/carrito" className="relative bg-primary text-black font-display tracking-wider text-xl py-2 px-5 rounded-full hover:-translate-y-1 transition-transform flex items-center gap-2"
                        style={{ boxShadow: '3px 3px 0px rgba(0,0,0,1)' }}>
                        <ShoppingCart size={20} />
                        <span>CARRITO</span>
                        {state.count > 0 && (
                            <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                                {state.count}
                            </span>
                        )}
                    </Link>
                </nav>

                {/* Mobile toggle */}
                <div className="flex md:hidden items-center gap-3">
                    <Link href="/carrito" className="relative text-primary">
                        <ShoppingCart size={26} />
                        {state.count > 0 && (
                            <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                {state.count}
                            </span>
                        )}
                    </Link>
                    <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white">
                        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-black border-t-2 border-primary px-6 py-6 flex flex-col gap-5">
                    <Link href="/menu" className="font-display text-3xl text-primary tracking-widest" onClick={() => setMobileOpen(false)}>MENÚ</Link>
                    <Link href="/ubicaciones" className="font-display text-3xl text-secondary tracking-widest" onClick={() => setMobileOpen(false)}>SEDES</Link>
                    <Link href="/carrito" className="font-display text-3xl text-tertiary tracking-widest" onClick={() => setMobileOpen(false)}>CARRITO</Link>
                </div>
            )}
        </header>
    )
}
