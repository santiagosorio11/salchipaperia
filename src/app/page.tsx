import Image from 'next/image'
import Link from 'next/link'
import { sedes } from '@/data/sedes'
import { ArrowRight, Utensils, Flame } from 'lucide-react'
import { SedeCard } from '@/components/SedeCard'

export default function Home() {
  const zonas = ['Todas', 'Norte', 'Noroccidente', 'Occidente', 'Sur', 'Suroriente', 'Centro', 'Norte-Centro']

  return (
    <main className="min-h-screen">

      {/* ========== HERO LOBBY ========== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/fotografias/LASALCHIPAPERIAURBAN0902.png"
            alt="La Salchipaperia"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/60 to-brand-black" />
        </div>

        {/* Doodle dots overlay */}
        <div className="absolute inset-0 opacity-30"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.08' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")" }}
        />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 rounded-full px-4 py-2 mb-6 text-primary font-marker text-sm">
            <Flame size={16} className="fill-primary" />
            <span>12 Sedes en Bogotá D.C.</span>
            <Flame size={16} className="fill-primary" />
          </div>

          {/* Main title */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight tracking-widest mb-4 text-primary whitespace-nowrap"
            style={{ textShadow: '-4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000, 4px 4px 0 #000' }}>
            LA SALCHIPAPERIA
          </h1>

          <p className="font-marker text-2xl md:text-3xl text-secondary -rotate-2 inline-block mb-10">
            ¡La Salchipapa con más Style! 🔥
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a href="#sedes"
              className="btn-primary text-2xl font-display tracking-wider flex items-center gap-2 px-10 py-4 text-black">
              ESCOGE TU SEDE
              <ArrowRight size={24} />
            </a>
            <Link href="/menu"
              className="btn-secondary text-2xl font-display tracking-wider flex items-center gap-2 px-10 py-4">
              VER MENÚ COMPLETO
              <Utensils size={24} />
            </Link>
          </div>
        </div>

        {/* Scroll arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-8 border-r-4 border-b-4 border-primary rotate-45" />
        </div>
      </section>

      {/* ========== DRIP DIVIDER ========== */}
      <div className="relative h-12 bg-primary" id="sedes">
        {[10, 22, 35, 50, 63, 75, 88].map((pos) => (
          <div
            key={pos}
            className="absolute top-full bg-primary rounded-b-full"
            style={{ left: `${pos}%`, width: '18px', height: `${20 + Math.random() * 30}px` }}
          />
        ))}
      </div>

      {/* ========== LOBBY DE SEDES ========== */}
      <section className="bg-brand-dark py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-white tracking-widest mb-4 whitespace-nowrap"
              style={{ textShadow: '-3px -3px 0 #FF1493, 3px 3px 0 #FFD700' }}>
              ESCOGE TU SEDE
            </h2>
            <p className="font-marker text-xl text-gray-400">Selecciona el restaurante más cercano a ti</p>
          </div>

          {/* Grid de Sedes — usa SedeCard (Client Component) por los hover handlers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sedes.map((sede) => (
              <SedeCard key={sede.id} sede={sede} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== MENÚ PREVIEW (TOP 3 CATEGORIAS) ========== */}
      <section className="py-20 px-4 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-6xl md:text-8xl text-primary tracking-widest transform -rotate-1"
              style={{ textShadow: '-3px 3px 0 #FF1493' }}>
              NUESTROS HITS
            </h2>
            <p className="font-marker text-xl text-gray-400 mt-2">Los más pedidos del barrio</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card Salchipapas */}
            <Link href="/menu?cat=Salchipapas" className="group relative overflow-hidden rounded-2xl border-4 border-primary hover:border-secondary transition-colors"
              style={{ boxShadow: '6px 6px 0 #FFD700' }}>
              <div className="relative h-64">
                <Image src="/fotografias/LASALCHIPAPERIAURBAN0915.png" alt="Salchipapas" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              </div>
              <div className="p-6 bg-brand-card">
                <h3 className="font-display text-4xl text-primary tracking-widest">SALCHIPAPAS</h3>
                <p className="text-gray-400 font-body text-sm mt-1">Desde $15.900 · 17 variedades</p>
                <span className="mt-3 inline-flex items-center gap-1 text-primary font-body font-bold text-sm group-hover:gap-2 transition-all">
                  VER TODAS <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* Card Burgers */}
            <Link href="/menu?cat=Burgers" className="group relative overflow-hidden rounded-2xl border-4 border-secondary hover:border-primary transition-colors"
              style={{ boxShadow: '6px 6px 0 #FF1493' }}>
              <div className="relative h-64">
                <Image src="/fotografias/IMG_4337.png" alt="Burgers" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              </div>
              <div className="p-6 bg-brand-card">
                <h3 className="font-display text-4xl text-secondary tracking-widest">BURGERS</h3>
                <p className="text-gray-400 font-body text-sm mt-1">Desde $16.900 · 9 variedades</p>
                <span className="mt-3 inline-flex items-center gap-1 text-secondary font-body font-bold text-sm group-hover:gap-2 transition-all">
                  VER TODAS <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* Card Perros */}
            <Link href="/menu?cat=Perros" className="group relative overflow-hidden rounded-2xl border-4 border-tertiary hover:border-primary transition-colors"
              style={{ boxShadow: '6px 6px 0 #00E5FF' }}>
              <div className="relative h-64">
                <Image src="/fotografias/LASALCHIPAPERIAURBAN0952.png" alt="Que Perros" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              </div>
              <div className="p-6 bg-brand-card">
                <h3 className="font-display text-4xl text-tertiary tracking-widest">QUE PERROS</h3>
                <p className="text-gray-400 font-body text-sm mt-1">Desde $21.900 · 5 variedades</p>
                <span className="mt-3 inline-flex items-center gap-1 text-tertiary font-body font-bold text-sm group-hover:gap-2 transition-all">
                  VER TODAS <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link href="/menu" className="btn-primary text-2xl font-display tracking-widest px-12 py-4 inline-flex items-center gap-3">
              VER MENÚ COMPLETO
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== COMBO PROMO ========== */}
      <section className="bg-primary py-16 px-4 border-y-4 border-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-black/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="font-marker text-2xl text-black/70 -rotate-2 inline-block mb-2">No te quedes con hambre</p>
          <h2 className="font-display text-6xl md:text-8xl text-black tracking-widest leading-none mb-4"
            style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.3)' }}>
            ARMA TU<br />
            <span className="text-secondary" style={{ textShadow: '3px 3px 0 #000' }}>COMBO</span> POR
          </h2>
          <div className="inline-block bg-black text-primary font-display text-4xl tracking-wider px-8 py-4 rounded-2xl border-4 border-white mb-6"
            style={{ boxShadow: '6px 6px 0 rgba(0,0,0,0.3)' }}>
            $9.900 ADICIONALES
          </div>
          <p className="font-body font-bold text-black/80 text-lg">
            Escoge tus papas: Francesa, Cascos, Criolla o Yuquitas + Gaseosa, Té o Agua
          </p>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-brand-black border-t-4 border-secondary py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logos/LOGOS SALCHIPAPERIA_Mesa de trabajo 1.png" alt="Logo" width={60} height={60} className="rounded-full" />
              <h3 className="font-display text-3xl text-primary tracking-widest">LA SALCHIPAPERIA</h3>
            </div>
            <p className="text-gray-500 font-body text-sm">El sabor de la calle elevado a otro nivel. 12 sedes en Bogotá para que nunca te falte el flow.</p>
          </div>
          <div>
            <h4 className="font-display text-2xl text-white tracking-wider mb-4">NAVEGACIÓN</h4>
            <ul className="space-y-2 font-body text-gray-400">
              <li><Link href="/menu" className="hover:text-primary transition-colors">Menú completo</Link></li>
              <li><Link href="/ubicaciones" className="hover:text-secondary transition-colors">Nuestras sedes</Link></li>
              <li><Link href="/carrito" className="hover:text-tertiary transition-colors">Mi carrito</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-2xl text-white tracking-wider mb-4">CONTÁCTANOS</h4>
            <p className="text-gray-400 font-body text-sm">Síguenos en redes como <span className="text-secondary font-bold">@lasalchipaperia.dc</span></p>
            <p className="text-gray-500 text-xs mt-4">PROHIBIDO EL CONSUMO DE BEBIDAS Y ALIMENTOS QUE NO SEAN ADQUIRIDOS EN EL ESTABLECIMIENTO.</p>
          </div>
        </div>
        <div className="text-center mt-12 pt-6 border-t border-brand-gray text-gray-600 text-xs font-body">
          © 2026 La Salchipaperia D.C. · Todos los derechos reservados. · Todo empaque para llevar tiene un costo de $1.000
        </div>
      </footer>
    </main>
  )
}
