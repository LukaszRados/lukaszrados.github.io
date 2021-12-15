module.exports = {
    variants: {
        width: ['responsive', 'hover'],
    },
    purge: {
        options: {
            safelist: ['underline', 'hover:no-underline'],
        }
    },
    theme: {
        extend: {
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
    }
}
