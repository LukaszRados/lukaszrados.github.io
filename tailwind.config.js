module.exports = {
    variants: {
        width: ['responsive', 'hover'],
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
                '96': '24rem'
            },
            inset: {
                '-100': '-100%',
                '1/2': '50%',
                '100': '100%'
            },
            maxWidth: {
                '1200': '1200px'
            },
            width: {
                '96': '24rem',
                '120': '30rem'
            }
        }
    }
}
