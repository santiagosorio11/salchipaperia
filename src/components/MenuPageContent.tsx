'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { salchipapas, burgers, perros, alitas, sandwiches, papitas, bebidas, Producto, formatPrice } from '@/data/menu'
import ProductModal from '@/components/ProductModal'
import { ShoppingBag, Search, X } from 'lucide-react'
import { useSearchParams, useRouter } from 'next/navigation'
import { sedes } from '@/data/sedes'
import { useCart } from '@/context/CartContext'

const CATEGORIAS = [
    { id: 'Salchipapas', label: '🍟 SALCHIPAPAS', color: 'text-primary border-primary', items: salchipapas },
    { id: 'Burgers', label: '🍔 BURGERS', color: 'text-secondary border-secondary', items: burgers },
    { id: 'Perros', label: '🌭 QUE PERROS', color: 'text-pink-400 border-pink-400', items: perros },
    { id: 'Alitas', label: '🍗 ALITAS', color: 'text-orange-400 border-orange-400', items: alitas },
    { id: 'Sandwiches', label: '🥪 SANDWICH', color: 'text-yellow-300 border-yellow-300', items: sandwiches },
    { id: 'Papitas', label: '🧀 PAPITAS', color: 'text-amber-400 border-amber-400', items: papitas },
    { id: 'Bebidas', label: '🥤 BEBIDAS', color: 'text-tertiary border-tertiary', items: bebidas },
]

function ProductCard({ producto, onSelect }: { producto: Producto; onSelect: (p: Producto) => void }) {
    return (
        <div
            onClick={() => onSelect(producto)}
            className="bg-brand-card rounded-xl border-2 border-brand-gray hover:border-primary transition-all duration-200 cursor-pointer group flex flex-col overflow-hidden"
            style={{ boxShadow: 'none', transition: 'box-shadow 0.2s, border-color 0.2s', minHeight: '340px' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '4px 4px 0 #FFD700'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = 'none'}
        >
            <div className="relative h-44 overflow-hidden border-b-2 border-brand-gray shrink-0 bg-brand-black">
                <Image src={producto.imagen || '/fotografias/IMG_4292.png'} alt={producto.nombre} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card to-transparent" />
            </div>
            <div className="p-4 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-1 gap-2">
                    <h3 className="font-display text-xl text-primary tracking-wider leading-tight">{producto.nombre}</h3>
                    {producto.badge && (
                        <span className="text-[10px] font-bold bg-secondary text-white px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">
                            {producto.badge}
                        </span>
                    )}
                </div>
                <p className="text-gray-500 text-xs font-body leading-relaxed line-clamp-2 mb-4 flex-1">{producto.descripcion}</p>
                <div className="flex justify-between items-center mt-auto">
                    <span className="font-display text-xl text-white">{formatPrice(producto.precio)}</span>
                    <button className="bg-primary text-black font-bold text-xs px-3 py-2 rounded-full flex items-center gap-1 hover:bg-yellow-400 transition-colors">
                        <ShoppingBag size={14} />
                        AGREGAR
                    </button>
                </div>
            </div>
        </div>
    )
}

export default function MenuPageContent({ hideHeader = false }: { hideHeader?: boolean }) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const { state, setSede } = useCart()
    const initialCat = searchParams.get('cat') || 'Salchipapas'
    const [activeCategory, setActiveCategory] = useState(initialCat)
    const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null)
    const [search, setSearch] = useState('')
    const [showSedeModal, setShowSedeModal] = useState(false)

    const handleSelectProduct = (producto: Producto) => {
        if (!state.sedeSlug) {
            setShowSedeModal(true)
            return
        }
        setSelectedProduct(producto)
    }

    const handleSedeSelection = (slug: string) => {
        setSede(slug)
        setShowSedeModal(false)
    }

    useEffect(() => {
        const cat = searchParams.get('cat')
        if (cat) setActiveCategory(cat)
    }, [searchParams])

    const currentCategory = CATEGORIAS.find(c => c.id === activeCategory)
    const filteredItems = currentCategory?.items.filter(p =>
        p.nombre.toLowerCase().includes(search.toLowerCase()) ||
        p.descripcion.toLowerCase().includes(search.toLowerCase())
    ) ?? []

    return (
        <div className={`pb-16 px-4 bg-brand-black ${!hideHeader ? 'min-h-screen pt-24' : 'pt-0'}`}>
            <div className="max-w-7xl mx-auto">
                {/* Header conditionally rendered */}
                {!hideHeader && (
                    <div className="text-center mb-10">
                        <h1 className="font-display text-7xl md:text-9xl text-primary tracking-widest"
                            style={{ textShadow: '-4px 4px 0 #FF1493' }}>
                            MENÚ
                        </h1>
                        <p className="font-marker text-xl text-gray-400 mt-1">¡Pide tus papas con un show de explosión!</p>
                    </div>
                )}

                {/* Search */}
                <div className="relative mb-8 max-w-md mx-auto">
                    <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Buscar producto..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-full bg-brand-card border-2 border-brand-gray rounded-full py-3 pl-10 pr-4 text-white font-body placeholder-gray-600 focus:outline-none focus:border-primary"
                    />
                </div>

                {/* Category Tabs */}
                <div className="flex gap-2 overflow-x-auto pb-3 mb-10 scrollbar-none">
                    {CATEGORIAS.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => { setActiveCategory(cat.id); setSearch('') }}
                            className={`font-display text-lg tracking-wider whitespace-nowrap px-5 py-2 rounded-full border-2 transition-all duration-200 ${activeCategory === cat.id
                                ? `${cat.color} bg-white/5`
                                : 'text-gray-500 border-brand-gray hover:border-gray-400 hover:text-gray-300'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Items Grid */}
                {filteredItems.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {filteredItems.map(producto => (
                            <ProductCard key={producto.id} producto={producto} onSelect={handleSelectProduct} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="font-display text-4xl text-gray-600 tracking-wider">NO HAY RESULTADOS</p>
                        <p className="text-gray-500 font-body mt-2">Intenta con otro término de búsqueda</p>
                    </div>
                )}

                {/* Combo Banner */}
                {activeCategory !== 'Bebidas' && (
                    <div className="mt-12 bg-primary rounded-2xl p-6 border-4 border-black text-center"
                        style={{ boxShadow: '6px 6px 0 #FF1493' }}>
                        <p className="font-display text-4xl text-black tracking-widest">ARMA TU COMBO POR</p>
                        <p className="font-display text-6xl text-secondary tracking-widest" style={{ textShadow: '3px 3px 0 #000' }}>$9.900 ADICIONALES</p>
                        <p className="font-body text-black/80 text-sm mt-2">Papas + Gaseosa, Té o Agua · Selecciona al agregar cualquier producto</p>
                    </div>
                )}

                {/* Adiciones note */}
                <p className="text-center text-gray-600 text-xs font-body mt-6">
                    * Todo empaque para llevar tiene un costo de $1.000 · PROHIBIDO el consumo de bebidas y alimentos que no sean adquiridos en el establecimiento.
                </p>
            </div>

            {/* Product Modal */}
            {selectedProduct && (
                <ProductModal producto={selectedProduct} onClose={() => setSelectedProduct(null)} />
            )}

            {/* Sede Select Modal */}
            {showSedeModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-brand-card w-full max-w-lg rounded-2xl border-4 border-primary p-6 relative" style={{ boxShadow: '8px 8px 0 #FF1493' }}>
                        <button onClick={() => setShowSedeModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                            <X size={24} />
                        </button>
                        <div className="text-center mb-6">
                            <h2 className="font-display text-4xl text-primary tracking-wider mb-2">¡UPS! 😱</h2>
                            <p className="font-body text-gray-300">Olvidaste elegir tu sede. Selecciona una para poder realizar tu pedido.</p>
                        </div>
                        <div className="max-h-64 overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-primary scrollbar-track-brand-black">
                            {sedes.map(side => (
                                <button
                                    key={side.id}
                                    onClick={() => handleSedeSelection(side.slug)}
                                    className="w-full text-left bg-brand-black hover:bg-white/5 border-2 border-brand-gray hover:border-primary p-4 rounded-xl flex items-center justify-between transition-colors group"
                                >
                                    <div>
                                        <p className="font-display text-xl text-white group-hover:text-primary tracking-wider">{side.nombre}</p>
                                        <p className="text-xs text-gray-500 font-body">{side.direccion}</p>
                                    </div>
                                    <span className="text-[10px] font-bold uppercase rounded-full px-2 py-0.5 text-black" style={{ backgroundColor: side.color }}>
                                        {side.zona}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
