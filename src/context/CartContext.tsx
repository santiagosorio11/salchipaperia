'use client'

import React, { createContext, useContext, useReducer, ReactNode } from 'react'
import { Producto, formatPrice } from '@/data/menu'

export interface CartItem {
    producto: Producto
    cantidad: number
    adiciones: { nombre: string; precio: number }[]
    combo: boolean
    opcion?: string
    total: number
}

interface CartState {
    items: CartItem[]
    sedeSlug: string | null
    count: number
    subtotal: number
}

type CartAction =
    | { type: 'ADD_ITEM'; payload: CartItem }
    | { type: 'REMOVE_ITEM'; payload: string }
    | { type: 'UPDATE_QTY'; payload: { id: string; qty: number } }
    | { type: 'SET_SEDE'; payload: string }
    | { type: 'CLEAR_CART' }

function calcItemTotal(item: CartItem): number {
    const adicionesTotal = item.adiciones.reduce((s, a) => s + a.precio, 0)
    const comboTotal = item.combo ? 9900 : 0
    return (item.producto.precio + adicionesTotal + comboTotal) * item.cantidad
}

function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case 'ADD_ITEM': {
            const existing = state.items.findIndex(i => i.producto.id === action.payload.producto.id)
            let newItems: CartItem[]
            if (existing >= 0) {
                newItems = state.items.map((item, idx) =>
                    idx === existing
                        ? { ...item, cantidad: item.cantidad + action.payload.cantidad, total: calcItemTotal({ ...item, cantidad: item.cantidad + action.payload.cantidad }) }
                        : item
                )
            } else {
                newItems = [...state.items, { ...action.payload, total: calcItemTotal(action.payload) }]
            }
            const count = newItems.reduce((s, i) => s + i.cantidad, 0)
            const subtotal = newItems.reduce((s, i) => s + i.total, 0)
            return { ...state, items: newItems, count, subtotal }
        }
        case 'REMOVE_ITEM': {
            const newItems = state.items.filter(i => i.producto.id !== action.payload)
            const count = newItems.reduce((s, i) => s + i.cantidad, 0)
            const subtotal = newItems.reduce((s, i) => s + i.total, 0)
            return { ...state, items: newItems, count, subtotal }
        }
        case 'UPDATE_QTY': {
            const newItems = state.items
                .map(i => i.producto.id === action.payload.id
                    ? { ...i, cantidad: action.payload.qty, total: calcItemTotal({ ...i, cantidad: action.payload.qty }) }
                    : i
                )
                .filter(i => i.cantidad > 0)
            const count = newItems.reduce((s, i) => s + i.cantidad, 0)
            const subtotal = newItems.reduce((s, i) => s + i.total, 0)
            return { ...state, items: newItems, count, subtotal }
        }
        case 'SET_SEDE':
            return { ...state, sedeSlug: action.payload }
        case 'CLEAR_CART':
            return { items: [], sedeSlug: state.sedeSlug, count: 0, subtotal: 0 }
        default:
            return state
    }
}

interface CartContextType {
    state: CartState
    addItem: (item: CartItem) => void
    removeItem: (id: string) => void
    updateQty: (id: string, qty: number) => void
    setSede: (slug: string) => void
    clearCart: () => void
    formatPrice: (price: number) => string
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(cartReducer, {
        items: [],
        sedeSlug: null,
        count: 0,
        subtotal: 0,
    })

    const addItem = (item: CartItem) => dispatch({ type: 'ADD_ITEM', payload: item })
    const removeItem = (id: string) => dispatch({ type: 'REMOVE_ITEM', payload: id })
    const updateQty = (id: string, qty: number) => dispatch({ type: 'UPDATE_QTY', payload: { id, qty } })
    const setSede = (slug: string) => dispatch({ type: 'SET_SEDE', payload: slug })
    const clearCart = () => dispatch({ type: 'CLEAR_CART' })

    return (
        <CartContext.Provider value={{ state, addItem, removeItem, updateQty, setSede, clearCart, formatPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const ctx = useContext(CartContext)
    if (!ctx) throw new Error('useCart must be used within CartProvider')
    return ctx
}
