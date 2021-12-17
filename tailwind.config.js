module.exports = {
    purge: {
        content: [
            'content/**/*.md',
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js',
        ],
        options: {
            safelist: ['underline', 'hover:no-underline', 'dark-mode']
        }
    },
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'gray-900': '#16181b',
                'white': '#fefcf6',
            },
            fontFamily: {
                'sans': ['Barlow', 'sans-serif']
            },
            fontSize: {
                '0': '0',
                'xs': '.75rem',
                'sm': '.875rem',
                'tiny': '.875rem',
                'base': '1rem',
                'lg': '1.125rem',
                'xl': '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '4rem',
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
    variants: {
        extend: {
            backgroundColor: ['dark'],
            borderColor: ['dark'],
            textColor: ['dark'],
            width: ['responsive', 'hover'],
        },
    },
    plugins: [],
}
