module.exports = {
    prefix: 'tw-',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontSize: {
                '8px': '8px',
                '12px': '12px',
                '16px': '16px',
                '20px': '20px',
                '24px': '24px',
            },
            colors: {
                'primary-black': '#3B454E',
                'secondary-black': '#5C6975',

                'primary-grey': '#8899A8',
                'secondary-grey': '#D3DCE4',

                'primary-brown': '#C89666',
                'secondary-brown': '#E1B382',

                'primary-white': '#ECEFF1',
                'secondary-white': '#F5F7F9',
                'fff-white': '#FFFFFF',

                'primary-blue': '#3884FF',
            },

            spacing: {
                '6px': '6px',
                '12px': '12px',
                '16px': '16px',
                '18px': '18px',
                '24px': '24px',
                '36px': '36px',
                '60px': '60px',
            },

            width: {
                '6px': '6px',
                '36px': '36px',
                '300px': '300px',
            },

            height: {
                '36px': '36px',
                '46px': '46px',
            },

        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}