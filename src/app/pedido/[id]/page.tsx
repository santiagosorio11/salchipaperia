import { CheckCircle, Package, Bike, SmilePlus } from 'lucide-react'

export default async function PedidoPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    const steps = [
        { icon: CheckCircle, label: 'Confirmado', done: true, color: 'text-primary' },
        { icon: Package, label: 'Preparando', done: true, color: 'text-primary', active: true },
        { icon: Bike, label: 'En Camino', done: false, color: 'text-gray-500' },
        { icon: SmilePlus, label: '¡Disfrutalo!', done: false, color: 'text-gray-500' },
    ]
    const activeStep = 1

    return (
        <main className="min-h-screen pt-24 pb-16 px-4 bg-brand-black">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="font-display text-6xl text-secondary tracking-widest"
                        style={{ textShadow: '4px 4px 0 #000' }}>
                        ¡PEDIDO CONFIRMADO!
                    </h1>
                    <p className="font-body text-gray-500 mt-2 text-lg">Pedido <span className="font-bold text-primary">#{id}</span> · Preparando tu festín...</p>
                </div>

                {/* Timeline */}
                <div className="bg-brand-card rounded-2xl border-4 border-brand-gray p-8 mb-8"
                    style={{ boxShadow: '6px 6px 0 #FF1493' }}>
                    <div className="relative pt-4 pb-12">
                        {/* Track bg */}
                        <div className="absolute top-1/2 left-0 w-full h-4 bg-brand-gray rounded-full -translate-y-1/2" />
                        {/* Track progress */}
                        <div className="absolute top-1/2 left-0 h-4 bg-primary rounded-full -translate-y-1/2 transition-all duration-1000"
                            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}>
                            {/* Drips */}
                            {[15, 35, 55, 75].map((p, i) => (
                                <div key={i} className="absolute top-full bg-primary rounded-b-full"
                                    style={{ left: `${p}%`, width: '8px', height: `${10 + i * 5}px` }} />
                            ))}
                        </div>
                        {/* Steps */}
                        <div className="relative z-10 flex justify-between">
                            {steps.map((step, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center ${i <= activeStep ? 'bg-primary border-brand-black' : 'bg-brand-gray border-gray-600'
                                        } ${i === activeStep ? 'ring-4 ring-primary/50' : ''}`}>
                                        <step.icon size={22} className={i <= activeStep ? 'text-black' : 'text-gray-600'} />
                                    </div>
                                    <span className={`mt-3 font-display text-sm tracking-wider ${i <= activeStep ? 'text-primary' : 'text-gray-600'}`}>
                                        {step.label}
                                    </span>
                                    {i === activeStep && (
                                        <span className="w-2 h-2 bg-secondary rounded-full animate-ping mt-1" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ETA + Map */}
                <div className="bg-brand-card rounded-2xl border-4 border-tertiary overflow-hidden mb-8"
                    style={{ boxShadow: '6px 6px 0 #00E5FF' }}>
                    <div className="flex items-center justify-between p-4 bg-brand-black border-b border-brand-gray">
                        <div className="font-display text-xl text-tertiary tracking-wider">ETA ESTIMADO</div>
                        <div className="bg-primary text-black font-display text-3xl px-6 py-2 rounded-full tracking-wider">
                            ~20 MIN
                        </div>
                    </div>
                    {/* Map Placeholder */}
                    <div className="relative h-64 bg-brand-gray flex items-center justify-center">
                        <div className="text-center">
                            <Bike size={48} className="text-primary mx-auto mb-2 animate-bounce" />
                            <p className="font-display text-2xl text-primary tracking-wider">EN CAMINO...</p>
                            <p className="text-gray-500 font-body text-sm">Tu pedido está siendo preparado</p>
                        </div>
                        {/* Animated dash route */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 400 250" preserveAspectRatio="none">
                            <path d="M 50 200 Q 150 100, 250 120 T 360 60" fill="none" stroke="#FF1493" strokeWidth="3" strokeDasharray="8" className="animate-pulse" />
                            <circle cx="360" cy="60" r="6" fill="#FFD700" />
                            <circle cx="50" cy="200" r="6" fill="#FF1493" />
                        </svg>
                    </div>
                </div>

                {/* Order summary */}
                <div className="bg-brand-card rounded-2xl border-4 border-primary p-6 text-center">
                    <h3 className="font-display text-3xl text-primary tracking-wider mb-4">¿NECESITAS AYUDA?</h3>
                    <p className="text-gray-400 font-body text-sm mb-4">Si tienes algún problema con tu pedido contáctanos:</p>
                    <a href="tel:3100000000" className="btn-secondary font-display text-xl tracking-wider px-10 py-3 inline-block">
                        LLAMAR A LA SEDE
                    </a>
                </div>
            </div>
        </main>
    )
}
