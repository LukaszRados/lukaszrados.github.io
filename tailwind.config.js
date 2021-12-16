module.exports = {
    variants: {
        backgroundColor: ['dark'],
        borderColor: ['dark'],
        textColor: ['dark'],
        width: ['responsive', 'hover'],
    },
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js'
        ],
        options: {
            safelist: ['underline', 'hover:no-underline', 'dark-mode'],
        }
    },
    theme: {
        extend: {
            colors: {
                'gray-900': '#16181b',
                'white': '#f6f6ef',
            },
            fontFamily: {
                'sans': ['Barlow', 'sans-serif']
            },
            fontSize: {
                '0': '0'
            },
            height: {
                '15': '3.75rem',
                '96': '24rem',
                '112': '28rem'
            },
            inset: {
                '-100': '-100%',
                '1/2': '50%',
                '100': '100%'
            },
            maxWidth: {
                '1200': '1200px',
                'two-columns': '1400px'
            },
            width: {
                '96': '24rem',
                '120': '30rem'
            }
        }
    },
    plugins: [
        require('tailwindcss-dark-mode')()
    ],
}
