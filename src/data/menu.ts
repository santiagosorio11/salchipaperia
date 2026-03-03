// MENU COMPLETO — La Salchipaperia D.C.
// Extraído del menú físico (imágenes de referencia)

export interface Adicion {
    nombre: string
    precio: number
}

export interface Producto {
    id: string
    nombre: string
    descripcion: string
    precio: number
    categoria: string
    subcategoria?: string
    imagen?: string
    badge?: string
    adiciones?: Adicion[]
    opciones?: string[]
}

// =====================
// SALCHIPAPAS
// =====================
export const salchipapas: Producto[] = [
    {
        id: 'sp-clasica',
        nombre: 'PAPICLÁSICA',
        descripcion: 'Papas, salchicha, queso, papita ripio y tocineta.',
        precio: 15900,
        categoria: 'Salchipapas',
        imagen: '/fotografias/IMG_4265.png',
    },
    {
        id: 'sp-carne',
        nombre: 'PAPICARNE',
        descripcion: 'Papas, salchicha, carne en tela criolla, papita ripio y queso.',
        precio: 27900,
        categoria: 'Salchipapas',
    },
    {
        id: 'sp-mexicana',
        nombre: 'PAPIMEXICANA',
        descripcion: 'Papas, salchicha, carne, guacamole, pico de gallo, nachos, papita ripio y sour cream (picante al gusto).',
        precio: 31900,
        categoria: 'Salchipapas',
        badge: 'PICANTE',
    },
    {
        id: 'sp-maduro',
        nombre: 'PAPIMADURO',
        descripcion: 'Papas, salchicha, tocineta, madurito, papita ripio, maíz dulce y queso.',
        precio: 27900,
        categoria: 'Salchipapas',
    },
    {
        id: 'sp-costilla',
        nombre: 'PAPICOSTILLA',
        descripcion: 'Papas, salchicha, costillas bbq, tocineta, papita ripio, piña caramelizada y queso.',
        precio: 36900,
        categoria: 'Salchipapas',
        badge: 'POPULAR',
        imagen: '/fotografias/IMG_4292.png',
    },
    {
        id: 'sp-casa',
        nombre: 'PAPICASA',
        descripcion: 'Papas, salchicha, pollo, chorizo, lechuga, aves estéril, papita ripio, salsa de ají, salsa de ajo.',
        precio: 38900,
        categoria: 'Salchipapas',
    },
    {
        id: 'sp-pollo',
        nombre: 'PAPIPOLLO',
        descripcion: 'Papas, salchicha, pollo, lechuga, queso costeño, papita ripio, salsa de ají.',
        precio: 32900,
        categoria: 'Salchipapas',
    },
    {
        id: 'sp-todo',
        nombre: 'PAPITODO',
        descripcion: 'Papas, salchicha, tocineta, pollo, carne, madurito, papita ripio, maíz, bañada en quesos de la casa.',
        precio: 39900,
        categoria: 'Salchipapas',
        badge: 'CHEF\'S PICK',
    },
    {
        id: 'sp-ranch',
        nombre: 'PAPIRANCH',
        descripcion: 'Papas, salchicha, carne en salsa criolla, chorizo, queso cheddar, papita ripio, huevo y cebollín.',
        precio: 31900,
        categoria: 'Salchipapas',
    },
    {
        id: 'sp-crispy',
        nombre: 'PAPICRISPY',
        descripcion: 'Papas, salchicha, pollo crispy, mermelada de pimentón, cebolla crispy, papita ripio, crema de queso y pepinillos agridulces.',
        precio: 31900,
        categoria: 'Salchipapas',
    },
    {
        id: 'sp-costera',
        nombre: 'PAPICOSTEÑA',
        descripcion: 'Papas, salchicha, pollo, carne, lechuga, chorizo, queso cheddar, papita ripio, suero y queso costeño.',
        precio: 41900,
        categoria: 'Salchipapas',
    },
    {
        id: 'sp-mix',
        nombre: 'PAPIMIX',
        descripcion: 'Papas, salchichas en salsa fría, pollo en salsa bechamel, madurito, papita ripio, lluvia de queso y guacamole.',
        precio: 46900,
        categoria: 'Salchipapas',
    },
    {
        id: 'sp-box',
        nombre: 'PAPIBOX',
        descripcion: 'Papas, salchichas, queso, chorizo, pulled pork, guacamole, maíz, chicharrón, papita ripio y madurito.',
        precio: 46900,
        categoria: 'Salchipapas',
        imagen: '/fotografias/IMG_4316.png',
    },
    {
        id: 'sp-grande',
        nombre: 'PAPICHAMPÉ',
        descripcion: 'Papa, papita ripio, salchicha, pollo, carne, madurito, tocineta, aneas costeñas, lechuga, maíz, bañado en quesos de la casa.',
        precio: 69900,
        categoria: 'Salchipapas',
        badge: 'GRANDE',
    },
    {
        id: 'sp-monda',
        nombre: 'PAPIMONDA',
        descripcion: 'Papa, papita ripio, salchicha, pollo, carne, lechuga, tocineta, queso coseño, cereza, kellitas, chicharrón bañada en quesos en la casa, salar de ají y salsa de piña.',
        precio: 76900,
        categoria: 'Salchipapas',
        badge: '🔥 HOT',
    },
    {
        id: 'sp-queen',
        nombre: 'PAPIQUEEN',
        descripcion: 'Papa, salchicha, papita ripio, pollo, carne, casesg, lechuga, carne, madurito, papita crispy, queso cheddar, maíz, tocineta y salsas de la casa.',
        precio: 105900,
        categoria: 'Salchipapas',
        badge: '👑 REINA',
        imagen: '/fotografias/LASALCHIPAPERIAURBAN0915.png',
    },
    {
        id: 'sp-kids',
        nombre: 'PAPIKIDS',
        descripcion: 'Papas, salchicha y nuggets y jugo en caja.',
        precio: 21900,
        categoria: 'Salchipapas',
        badge: 'KIDS',
    },
]

// =====================
// BURGERS ARTESANALES
// =====================
export const burgers: Producto[] = [
    {
        id: 'bg-clasica',
        nombre: 'CLÁSICA',
        descripcion: 'Pan de mantequilla, 160 grs de carne, vegetales, cebolla caramelizada y queso.',
        precio: 16900,
        categoria: 'Burgers',
        imagen: '/fotografias/IMG_4337.png',
    },
    {
        id: 'bg-criolla',
        nombre: 'CRIOLLA',
        descripcion: 'Pan de mantequilla, 160 grs de carne, vegetales, cebolla caramelizada, tocineta, madurito, maíz dulce y queso.',
        precio: 26900,
        categoria: 'Burgers',
    },
    {
        id: 'bg-bechamel',
        nombre: 'BECHAMEL',
        descripcion: 'Pan de mantequilla, 160 grs de carne, cebolla caramelizada, papita ripio crispy, vegetales, pollo en salsa bechamel.',
        precio: 26900,
        categoria: 'Burgers',
    },
    {
        id: 'bg-hawaiana',
        nombre: 'HAWAIANA',
        descripcion: 'Pan de mantequilla, 160 grs de carne, vegetales, cebolla caramelizada, madurito, tocineta, piña.',
        precio: 26900,
        categoria: 'Burgers',
    },
    {
        id: 'bg-mexicana',
        nombre: 'MEXICANA',
        descripcion: 'Pan de mantequilla, 160 grs de carne, vegetales, cebolla caramelizada, guacamole, queso cheddar, pico de gallo.',
        precio: 26900,
        categoria: 'Burgers',
    },
    {
        id: 'bg-porkosteña',
        nombre: 'PORKOSTEÑA',
        descripcion: 'Pan de mantequilla, 160 grs de carne, vegetales, pulled pork, queso americano, queso costeño y queso cheddar frito.',
        precio: 28900,
        categoria: 'Burgers',
    },
    {
        id: 'bg-cheese',
        nombre: 'CHEESEBURGER',
        descripcion: 'Pan de mantequilla, 160 grs de carne, vegetales, madurito, tocineta, bañada en quesos de la casa.',
        precio: 28900,
        categoria: 'Burgers',
    },
    {
        id: 'bg-doble',
        nombre: 'DOBLE CARNE',
        descripcion: 'Pan de mantequilla, 2 carnes de 160 grs, rellenos de queso, vegetales, cebolla caramelizada y tocineta.',
        precio: 29900,
        categoria: 'Burgers',
        badge: 'DOBLE',
    },
    {
        id: 'bg-pollo',
        nombre: 'POLLO CRISPY',
        descripcion: 'Pan de mantequilla, pollo crispy, mermelada de pimentón, crema de queso, cebolla crispy, y pepinillo agridulces.',
        precio: 26900,
        categoria: 'Burgers',
    },
]

// =====================
// QUE PERROS
// =====================
export const perros: Producto[] = [
    {
        id: 'pr-bechamel',
        nombre: 'BECHAMEL',
        descripcion: 'Pan de mantequilla, salchicha, cebolla caramelizada, papita ripio, queso, pollo en salsa bechamel.',
        precio: 21900,
        categoria: 'Perros',
    },
    {
        id: 'pr-hawaiano',
        nombre: 'HAWAIANO',
        descripcion: 'Pan de mantequilla, salchicha, cebolla caramelizada, tocineta, papita ripio, piña y queso.',
        precio: 21900,
        categoria: 'Perros',
    },
    {
        id: 'pr-criollo',
        nombre: 'CRIOLLO',
        descripcion: 'Pan de mantequilla, salchicha, cebolla caramelizada, papita ripio, queso, tocineta, crema de queso y madurito.',
        precio: 21900,
        categoria: 'Perros',
    },
    {
        id: 'pr-mexicano',
        nombre: 'MEXICANO',
        descripcion: 'Pan de mantequilla, salchicha, queso, nachos, carne desmechada, guacamole, papita ripio, pico de gallo y sour cream (Picante al gusto).',
        precio: 23900,
        categoria: 'Perros',
        badge: 'PICANTE',
    },
    {
        id: 'pr-costicrispy',
        nombre: 'COSTICRISPY',
        descripcion: 'Pan de mantequilla, salchicha, papita ripio, bañado de queso, costillitas en salsa bbq y cebolla crispy.',
        precio: 22900,
        categoria: 'Perros',
    },
]

// =====================
// ALITAS DE POLLO
// =====================
export const alitas: Producto[] = [
    {
        id: 'al-8',
        nombre: 'ALITAS 8 PIEZAS',
        descripcion: 'Papas + apio + zanahoria. Escoge tu salsa favorita: BBQ, Golding (BBQ y Mostaza), BBQ Miel Ajonjolí.',
        precio: 23900,
        categoria: 'Alitas',
        opciones: ['BBQ', 'Golding (BBQ + Mostaza)', 'BBQ Miel Ajonjolí'],
    },
    {
        id: 'al-20',
        nombre: 'ALITAS 20 PIEZAS',
        descripcion: 'Papas + apio + zanahoria. Escoge tu salsa favorita: BBQ, Golding (BBQ y Mostaza), BBQ Miel Ajonjolí.',
        precio: 42900,
        categoria: 'Alitas',
        badge: 'PARA COMPARTIR',
        opciones: ['BBQ', 'Golding (BBQ + Mostaza)', 'BBQ Miel Ajonjolí'],
    },
]

// =====================
// SANDWICH D.C.
// =====================
export const sandwiches: Producto[] = [
    {
        id: 'sw-dc',
        nombre: 'SANDWICH D.C.',
        descripcion: 'Pan artesanal, carne, pollo, papita ripio, vegetales y queso. (Salsa de ajo)',
        precio: 23900,
        categoria: 'Sandwiches',
        imagen: '/fotografias/IMG_4364.png',
    },
]

// =====================
// PAPITAS PARA QUE SE REPITA
// =====================
export const papitas: Producto[] = [
    {
        id: 'pt-queso',
        nombre: 'BOLAS DE QUESO',
        descripcion: 'Bollitos de queso bañados en queso cheddar, cebollín y tocineta.',
        precio: 13900,
        categoria: 'Papitas',
    },
    {
        id: 'pt-cheddar',
        nombre: 'PAPITAS CHEDDAR',
        descripcion: 'Papas, queso cheddar, tocineta y cebollín.',
        precio: 13900,
        categoria: 'Papitas',
    },
    {
        id: 'pt-costera',
        nombre: 'PAPITAS COSTEÑAS',
        descripcion: 'Papas, queso costeño, piña, salsa de ajo.',
        precio: 13900,
        categoria: 'Papitas',
    },
    {
        id: 'pt-chicharron',
        nombre: 'PAPICHARRÓN',
        descripcion: 'Papas criolla, chicharrún y guacamole.',
        precio: 22900,
        categoria: 'Papitas',
    },
]

// =====================
// BEBIDAS
// =====================
export const bebidas: Producto[] = [
    {
        id: 'be-gaseosa',
        nombre: 'GASEOSA',
        descripcion: 'Postobón',
        precio: 5900,
        categoria: 'Bebidas',
        subcategoria: 'Productos',
    },
    {
        id: 'be-hatsu',
        nombre: 'TÉ HATSU SIN CALORÍAS',
        descripcion: 'Hatsu',
        precio: 8900,
        categoria: 'Bebidas',
        subcategoria: 'Productos',
    },
    {
        id: 'be-mrt',
        nombre: 'MR. TÉ',
        descripcion: 'Postobón',
        precio: 5900,
        categoria: 'Bebidas',
        subcategoria: 'Productos',
    },
    {
        id: 'be-sodagas',
        nombre: 'SODAS HATSU CON GAS',
        descripcion: 'Hatsu con gas',
        precio: 6900,
        categoria: 'Bebidas',
        subcategoria: 'Productos',
    },
    {
        id: 'be-agua-sin',
        nombre: 'AGUA SIN GAS',
        descripcion: 'Agua sin gas',
        precio: 4900,
        categoria: 'Bebidas',
        subcategoria: 'Productos',
    },
    {
        id: 'be-limonada-nat',
        nombre: 'LIMONADA NATURAL',
        descripcion: 'Limonada natural de la casa.',
        precio: 6900,
        categoria: 'Bebidas',
        subcategoria: 'Limonadas',
    },
    {
        id: 'be-limonada-cer',
        nombre: 'LIMONADA DE CEREZA',
        descripcion: 'Limonada de cereza.',
        precio: 8900,
        categoria: 'Bebidas',
        subcategoria: 'Limonadas',
    },
    {
        id: 'be-limonada-man',
        nombre: 'LIMONADA DE MANGO',
        descripcion: 'Limonada de mango.',
        precio: 8900,
        categoria: 'Bebidas',
        subcategoria: 'Limonadas',
    },
    {
        id: 'be-limonada-coc',
        nombre: 'LIMONADA DE COCO',
        descripcion: 'Limonada de coco.',
        precio: 8900,
        categoria: 'Bebidas',
        subcategoria: 'Limonadas',
    },
    {
        id: 'be-limonada-pan',
        nombre: 'LIMONADA DE PANELA',
        descripcion: 'Limonada de panela.',
        precio: 7900,
        categoria: 'Bebidas',
        subcategoria: 'Limonadas',
    },
    {
        id: 'be-jugo-agua',
        nombre: 'JUGO NATURAL EN AGUA',
        descripcion: 'Feijoa, Fresa, Guanabana, Lulo, Mango, Maracuyá, Mora.',
        precio: 7900,
        categoria: 'Bebidas',
        subcategoria: 'Jugos',
        opciones: ['Feijoa', 'Fresa', 'Guanabana', 'Lulo', 'Mango', 'Maracuyá', 'Mora'],
    },
    {
        id: 'be-jugo-leche',
        nombre: 'JUGO NATURAL EN LECHE',
        descripcion: 'Feijoa, Fresa, Guanabana, Lulo, Mango, Maracuyá, Mora.',
        precio: 8900,
        categoria: 'Bebidas',
        subcategoria: 'Jugos',
        opciones: ['Feijoa', 'Fresa', 'Guanabana', 'Lulo', 'Mango', 'Maracuyá', 'Mora'],
    },
    {
        id: 'be-guanabana',
        nombre: 'GUANABANA ENFRESADA',
        descripcion: 'Guanabana especial.',
        precio: 9900,
        categoria: 'Bebidas',
        subcategoria: 'Jugos',
    },
    {
        id: 'be-cord',
        nombre: '3 CORDILLERAS',
        descripcion: 'Cerveza 3 Cordilleras.',
        precio: 9900,
        categoria: 'Bebidas',
        subcategoria: 'Cervezas',
    },
    {
        id: 'be-sol',
        nombre: 'SOL',
        descripcion: 'Cerveza Sol.',
        precio: 8900,
        categoria: 'Bebidas',
        subcategoria: 'Cervezas',
    },
    {
        id: 'be-heineken',
        nombre: 'HEINEKEN',
        descripcion: 'Cerveza Heineken.',
        precio: 7900,
        categoria: 'Bebidas',
        subcategoria: 'Cervezas',
    },
]

// =====================
// ADICIONES GLOBALES
// =====================
export const adicionesGlobales: Adicion[] = [
    { nombre: 'Queso costeño', precio: 9900 },
    { nombre: 'Cebolla crispy', precio: 6900 },
    { nombre: 'Pico de gallo', precio: 7900 },
    { nombre: 'Guacamole', precio: 7900 },
    { nombre: 'Salchicha', precio: 7900 },
    { nombre: 'Madurito', precio: 6900 },
    { nombre: 'Maíz dulce', precio: 6900 },
    { nombre: 'Tocineta BBO', precio: 7900 },
    { nombre: 'Piña calada', precio: 7900 },
    { nombre: 'Cebolla caramelizada', precio: 6900 },
    { nombre: 'Costillitas BBQ', precio: 13900 },
    { nombre: 'Baña de queso', precio: 12900 },
    { nombre: 'Porción de papas', precio: 7900 },
    { nombre: 'Nuggets (6)', precio: 7900 },
    { nombre: 'Taquitos (5)', precio: 7400 },
    { nombre: 'Yoyos (5)', precio: 7900 },
    { nombre: 'Huevo frito', precio: 5900 },
    { nombre: 'Huevos de codorniz', precio: 5900 },
    { nombre: 'Chicharrón', precio: 17900 },
    { nombre: 'Pollo crispy', precio: 12900 },
    { nombre: 'Queso cheddar', precio: 9900 },
    { nombre: 'Papeletas BBQ', precio: 5900 },
    { nombre: 'Bollana (2)', precio: 7900 },
    { nombre: 'Carne en salsa criolla o bechamel', precio: 13900 },
    { nombre: 'Pollo en salsa criolla o bechamel', precio: 13900 },
    { nombre: 'Pulled pork', precio: 13900 },
    { nombre: 'Tocineta', precio: 7900 },
]

// Todos los productos del menú
export const todosLosProductos = [
    ...salchipapas,
    ...burgers,
    ...perros,
    ...alitas,
    ...sandwiches,
    ...papitas,
    ...bebidas,
]

// Precio COP formateado
export const formatPrice = (price: number): string => {
    return `$${price.toLocaleString('es-CO')}`
}
