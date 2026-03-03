'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Producto, formatPrice, adicionesGlobales } from '@/data/menu'
import { useCart, CartItem } from '@/context/CartContext'
import { X, Plus, Minus, ShoppingCart } from 'lucide-react'

interface Props {
    producto: Producto
    onClose: () => void
}

export default function ProductModal({ producto, onClose }: Props) {
    const { addItem } = useCart()
    const [cantidad, setCantidad] = useState(1)
    const [combo, setCombo] = useState(false)
    const [opcion, setOpcion] = useState(producto.opciones?.[0] ?? '')
    const [adicionesSelected, setAdicionesSelected] = useState<{ nombre: string; precio: number }[]>([])

    const toggleAdicion = (ad: { nombre: string; precio: number }) => {
        setAdicionesSelected(prev =>
            prev.find(a => a.nombre === ad.nombre)
                ? prev.filter(a => a.nombre !== ad.nombre)
                : [...prev, ad]
        )
    }

    const adicionesTotal = adicionesSelected.reduce((s, a) => s + a.precio, 0)
    const comboExtra = combo ? 9900 : 0
    const total = (producto.precio + adicionesTotal + comboExtra) * cantidad

    const handleAdd = () => {
        const item: CartItem = {
            producto,
            cantidad,
            adiciones: adicionesSelected,
            combo,
            opcion,
            total,
        }
        addItem(item)
        onClose()
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className="bg-brand-card rounded-2xl border-4 border-primary overflow-hidden w-full max-w-2xl max-h-[90vh] flex flex-col"
                style={{ boxShadow: '8px 8px 0 #FFD700' }}>
                {/* Header */}
                <div className="relative">
                    {producto.imagen ? (
                        <div className="relative h-48 sm:h-64 overflow-hidden">
                            <Image src={producto.imagen} alt={producto.nombre} fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-card to-transparent" />
                        </div>
                    ) : (
                        <div className="h-20 bg-gradient-to-r from-secondary to-primary" />
                    )}
                    <button onClick={onClose} className="absolute top-3 right-3 bg-brand-black/80 text-white rounded-full p-2 hover:bg-secondary transition-colors">
                        <X size={20} />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex justify-between items-end">
                            <div>
                                <h2 className="font-display text-3xl text-primary tracking-wider text-outline">{producto.nombre}</h2>
                                {producto.badge && (
                                    <span className="badge-price text-xs">{producto.badge}</span>
                                )}
                            </div>
                            <span className="badge-price text-lg">{formatPrice(producto.precio)}</span>
                        </div>
                    </div>
                </div>

                {/* Scrollable content */}
                <div className="overflow-y-auto flex-1 p-5 space-y-5">
                    <p className="text-gray-400 font-body text-sm leading-relaxed">{producto.descripcion}</p>

                    {/* Opción (salsas/sabores) */}
                    {producto.opciones && producto.opciones.length > 0 && (
                        <div>
                            <h3 className="font-marker text-xl text-tertiary mb-3">Escoge tu Sabor</h3>
                            <div className="grid grid-cols-2 gap-2">
                                {producto.opciones.map(op => (
                                    <label key={op} className={`flex items-center gap-2 p-3 rounded-xl cursor-pointer border-2 transition-colors ${opcion === op ? 'border-primary bg-primary/10' : 'border-brand-gray hover:border-primary/50'
                                        }`}>
                                        <input type="radio" name="opcion" value={op} checked={opcion === op}
                                            onChange={() => setOpcion(op)} className="hidden" />
                                        <div className={`w-4 h-4 rounded-full border-2 ${opcion === op ? 'border-primary bg-primary' : 'border-gray-500'}`} />
                                        <span className="font-body text-sm text-white">{op}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Combo */}
                    <div className="bg-primary/10 border-2 border-primary rounded-xl p-4">
                        <label className="flex items-center justify-between cursor-pointer">
                            <div>
                                <p className="font-display text-xl text-primary tracking-wider">ARMA TU COMBO</p>
                                <p className="text-gray-400 text-xs font-body">Papas + Gaseosa/Té/Agua</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="font-bold text-primary">+$9.900</span>
                                <div onClick={() => setCombo(!combo)}
                                    className={`w-12 h-6 rounded-full transition-colors cursor-pointer ${combo ? 'bg-primary' : 'bg-brand-gray'}`}>
                                    <div className={`w-6 h-6 rounded-full bg-white border-2 border-black transition-transform ${combo ? 'translate-x-6' : 'translate-x-0'}`} />
                                </div>
                            </div>
                        </label>
                    </div>

                    {/* Adiciones */}
                    <div>
                        <h3 className="font-marker text-xl text-secondary mb-3">Adiciones</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {adicionesGlobales.slice(0, 12).map(ad => {
                                const selected = !!adicionesSelected.find(a => a.nombre === ad.nombre)
                                return (
                                    <label key={ad.nombre} onClick={() => toggleAdicion(ad)}
                                        className={`flex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-colors ${selected ? 'border-secondary bg-secondary/10' : 'border-brand-gray hover:border-secondary/50'
                                            }`}>
                                        <div className="flex items-center gap-2">
                                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${selected ? 'border-secondary bg-secondary' : 'border-gray-500'
                                                }`}>
                                                {selected && <span className="text-white text-xs">✓</span>}
                                            </div>
                                            <span className="font-body text-sm text-white">{ad.nombre}</span>
                                        </div>
                                        <span className="text-gray-400 text-xs font-bold">{formatPrice(ad.precio)}</span>
                                    </label>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Footer: cantidad + agregar */}
                <div className="p-5 border-t border-brand-gray bg-brand-black flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 bg-brand-card rounded-full px-3 py-1 border border-brand-gray">
                        <button onClick={() => setCantidad(Math.max(1, cantidad - 1))} className="text-secondary hover:text-white transition-colors">
                            <Minus size={20} />
                        </button>
                        <span className="font-display text-2xl text-white w-8 text-center">{cantidad}</span>
                        <button onClick={() => setCantidad(cantidad + 1)} className="text-primary hover:text-white transition-colors">
                            <Plus size={20} />
                        </button>
                    </div>
                    <button onClick={handleAdd}
                        className="flex-1 bg-primary text-black font-display text-xl tracking-wider py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-400 transition-colors"
                        style={{ boxShadow: '4px 4px 0 rgba(0,0,0,0.5)' }}>
                        <ShoppingCart size={22} />
                        AGREGAR · {formatPrice(total)}
                    </button>
                </div>
            </div>
        </div>
    )
}
