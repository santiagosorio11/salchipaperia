'use client'

import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, Minus, Trash2, ShoppingBag, MapPin, CreditCard, Banknote, QrCode } from 'lucide-react'

export default function CarritoPage() {
    const { state, removeItem, updateQty, clearCart, formatPrice } = useCart()
    const router = useRouter()
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [direccion, setDireccion] = useState('')
    const [notas, setNotas] = useState('')
    const [pago, setPago] = useState<'tarjeta' | 'efectivo' | 'qr'>('tarjeta')
    const [loading, setLoading] = useState(false)

    const envio = 4500
    const total = state.subtotal + envio

    const handlePedido = async () => {
        if (!nombre || !telefono || !direccion) return
        setLoading(true)
        await new Promise(r => setTimeout(r, 1500))
        const orderId = Math.random().toString(36).substring(2, 8).toUpperCase()
        clearCart()
        router.push(`/pedido/${orderId}`)
    }

    if (state.items.length === 0) {
        return (
            <div className="min-h-screen pt-28 pb-16 flex flex-col items-center justify-center text-center px-4">
                <ShoppingBag size={80} className="text-brand-gray mb-6" />
                <h1 className="font-display text-5xl text-primary tracking-widest mb-3">TU CARRITO ESTÁ VACÍO</h1>
                <p className="text-gray-500 font-body mb-8">¿Qué esperas? ¡Pide algo rico!</p>
                <Link href="/menu" className="btn-primary text-xl font-display tracking-wider px-10 py-4">
                    IR AL MENÚ
                </Link>
            </div>
        )
    }

    return (
        <main className="min-h-screen pt-28 pb-16 px-4 bg-brand-black">
            <div className="max-w-6xl mx-auto">
                <h1 className="font-display text-6xl md:text-8xl text-center text-white tracking-widest mb-12"
                    style={{ textShadow: '2px 2px 0 #FF007F, -2px -2px 0 #00BFFF' }}>
                    TU PEDIDO
                </h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left: items + delivery */}
                    <div className="lg:w-2/3 space-y-6">
                        {/* Products */}
                        <div className="bg-brand-card rounded-2xl border-2 border-brand-gray p-6 relative overflow-hidden">
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-tertiary/20 rounded-full blur-xl pointer-events-none" />
                            <h3 className="font-display text-2xl text-tertiary tracking-wider mb-4 border-b border-brand-gray pb-2">PRODUCTOS</h3>
                            <div className="space-y-4">
                                {state.items.map(item => (
                                    <div key={item.producto.id} className="flex items-start gap-4 p-4 bg-brand-black/50 rounded-xl">
                                        {item.producto.imagen && (
                                            <div className="relative w-20 h-20 rounded-lg overflow-hidden border-2 border-secondary shrink-0">
                                                <Image src={item.producto.imagen} alt={item.producto.nombre} fill className="object-cover" />
                                            </div>
                                        )}
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-display text-lg text-secondary tracking-wider truncate">{item.producto.nombre}</h4>
                                            {item.combo && <p className="text-primary text-xs font-bold">+ COMBO (+$9.900)</p>}
                                            {item.adiciones.length > 0 && (
                                                <p className="text-gray-500 text-xs font-body">{item.adiciones.map(a => a.nombre).join(', ')}</p>
                                            )}
                                            <p className="text-white font-bold mt-1">{formatPrice(item.total)}</p>
                                        </div>
                                        <div className="flex flex-col items-end gap-2 shrink-0">
                                            <button onClick={() => removeItem(item.producto.id)}
                                                className="text-gray-600 hover:text-secondary transition-colors">
                                                <Trash2 size={16} />
                                            </button>
                                            <div className="flex items-center gap-2 bg-brand-card rounded-full border border-brand-gray px-2">
                                                <button onClick={() => updateQty(item.producto.id, item.cantidad - 1)} className="text-secondary">
                                                    <Minus size={14} />
                                                </button>
                                                <span className="font-display text-lg w-6 text-center">{item.cantidad}</span>
                                                <button onClick={() => updateQty(item.producto.id, item.cantidad + 1)} className="text-primary">
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Delivery Info */}
                        <div className="bg-brand-card rounded-2xl border-2 border-brand-gray p-6 relative overflow-hidden">
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl pointer-events-none" />
                            <h3 className="font-display text-2xl text-secondary tracking-wider mb-4 border-b border-brand-gray pb-2">DATOS DE ENTREGA</h3>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Nombre</label>
                                        <input value={nombre} onChange={e => setNombre(e.target.value)}
                                            placeholder="Juan Pérez"
                                            className="w-full bg-brand-black border-2 border-brand-gray rounded-xl px-4 py-3 text-white font-body placeholder-gray-600 focus:outline-none focus:border-secondary" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Teléfono</label>
                                        <input value={telefono} onChange={e => setTelefono(e.target.value)}
                                            placeholder="300 123 4567" type="tel"
                                            className="w-full bg-brand-black border-2 border-brand-gray rounded-xl px-4 py-3 text-white font-body placeholder-gray-600 focus:outline-none focus:border-secondary" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Dirección</label>
                                    <input value={direccion} onChange={e => setDireccion(e.target.value)}
                                        placeholder="Calle 123 # 45 - 67, Apto 801"
                                        className="w-full bg-brand-black border-2 border-brand-gray rounded-xl px-4 py-3 text-white font-body placeholder-gray-600 focus:outline-none focus:border-secondary" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Instrucciones (Opcional)</label>
                                    <textarea value={notas} onChange={e => setNotas(e.target.value)}
                                        placeholder="Dejar en portería, etc..." rows={2}
                                        className="w-full bg-brand-black border-2 border-brand-gray rounded-xl px-4 py-3 text-white font-body placeholder-gray-600 focus:outline-none focus:border-secondary resize-none" />
                                </div>
                            </div>
                        </div>

                        {/* Payment */}
                        <div className="bg-brand-card rounded-2xl border-2 border-brand-gray p-6">
                            <h3 className="font-display text-2xl text-primary tracking-wider mb-4 border-b border-brand-gray pb-2">MÉTODO DE PAGO</h3>
                            <div className="grid grid-cols-3 gap-3">
                                {([
                                    { id: 'tarjeta', label: 'Tarjeta', icon: <CreditCard size={28} /> },
                                    { id: 'efectivo', label: 'Efectivo', icon: <Banknote size={28} /> },
                                    { id: 'qr', label: 'QR / Transfer.', icon: <QrCode size={28} /> },
                                ] as const).map(opt => (
                                    <label key={opt.id} onClick={() => setPago(opt.id)}
                                        className={`flex flex-col items-center p-4 rounded-xl cursor-pointer border-2 transition-all ${pago === opt.id ? 'border-primary bg-primary/10' : 'border-brand-gray hover:border-gray-500'
                                            }`}>
                                        <span className={pago === opt.id ? 'text-primary' : 'text-gray-500'}>{opt.icon}</span>
                                        <span className="font-bold text-xs text-center mt-2 text-white">{opt.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-brand-card rounded-2xl border-t-8 border-primary p-6 sticky top-24"
                            style={{ boxShadow: '6px 6px 0 rgba(255,215,0,0.2)' }}>
                            <h3 className="font-display text-3xl text-white tracking-widest text-center mb-6">RESUMEN</h3>
                            <div className="space-y-3 text-gray-400 font-body mb-6">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="font-bold text-white">{formatPrice(state.subtotal)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Costo de Envío</span>
                                    <span className="font-bold text-white">{formatPrice(envio)}</span>
                                </div>
                            </div>
                            <div className="border-t-4 border-dashed border-brand-gray pt-4 mb-8 flex justify-between items-center">
                                <span className="font-display text-2xl text-white">TOTAL</span>
                                <span className="font-display text-4xl text-primary" style={{ textShadow: '2px 2px 0 #000' }}>
                                    {formatPrice(total)}
                                </span>
                            </div>
                            <button
                                onClick={handlePedido}
                                disabled={!nombre || !telefono || !direccion || loading}
                                className="w-full bg-primary hover:bg-yellow-400 disabled:bg-brand-gray disabled:text-gray-600 text-black font-display text-2xl tracking-wider py-4 rounded-xl transition-all"
                                style={{ boxShadow: '4px 4px 0 rgba(0,0,0,0.5)' }}>
                                {loading ? 'PROCESANDO...' : '¡HACER PEDIDO!'}
                            </button>
                            <p className="text-center text-xs text-gray-600 font-body mt-3">
                                Al hacer el pedido aceptas nuestros términos y condiciones.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
