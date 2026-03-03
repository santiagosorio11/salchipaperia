import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#FFD700',       // Amarillo marca
                secondary: '#FF1493',     // Rosa/Magenta
                tertiary: '#00E5FF',      // Cyan
                'brand-black': '#09090B',
                'brand-dark': '#1A1A1A',
                'brand-card': '#2A2A2A',
                'brand-gray': '#3F3F46',
            },
            fontFamily: {
                display: ['var(--font-bangers)', 'cursive'],
                marker: ['var(--font-marker)', 'cursive'],
                body: ['var(--font-nunito)', 'sans-serif'],
            },
            boxShadow: {
                'graffiti': '4px 4px 0px 0px rgba(0,0,0,1)',
                'graffiti-lg': '6px 6px 0px 0px rgba(0,0,0,1)',
                'graffiti-yellow': '4px 4px 0px 0px #FFD700',
                'graffiti-pink': '4px 4px 0px 0px #FF1493',
            },
            animation: {
                'drip': 'drip 2s ease-in-out infinite alternate',
                'float': 'float 3s ease-in-out infinite',
                'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                drip: {
                    '0%': { transform: 'scaleY(1)' },
                    '100%': { transform: 'scaleY(1.2)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            backgroundImage: {
                'doodle': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
            },
        },
    },
    plugins: [],
}
export default config
