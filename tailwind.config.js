/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        maxWidth: {
        'xs': '20rem',
        'sm': '30rem',
        'md': '40rem',
        'lg': '50rem',
        'xl': '60rem',
        '2xl': '70rem',
        '3xl': '80rem',
        '4xl': '90rem',
        '5xl': '100rem'
    },

        screens: {
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
    },
        fontFamily: {
            sans: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ],
            mono: [
      'Menlo',
      'Monaco',
      'Consolas',
      'Liberation Mono',
      'Courier New',
      'monospace',
    ],
            serif: [
      'Volkhov',
      'Constantia',
      'Lucida Bright',
      'Lucidabright',
      'Lucida Serif',
      'Lucida',
      'DejaVu Serif',
      'Bitstream Vera Serif',
      'Liberation Serif',
      'Georgia',
      'serif',
    ]
    },
        extend: {
            fontFamily: {
                heading: [
      'Ultra'
    ],
            subheading: [
      'Unica One'
    ],
    },
            colors: {
                'transparent': 'transparent',
                'black': '#222b2f',
                'darkish': 'rgba(0,0,0,.75)',
                'grey-darkest': '#364349',
                'grey-darker': '#483B49',
                'grey-dark': '#70818a',
                'grey': '#9babb4',
                'grey-light': '#dae4e9',
                'grey-lighter': '#f3f7f9',
                'grey-lightest': '#fafcfc',
                'white': '#ffffff',
                'whitish': 'rgba(255,255,255,.75)',
                'pale': '#FBFAFB',

                'purple': '#8649d6',
                'hot-pink': '#fd2d78',

                'red-darkest': '#420806',
                'red-darker': '#6a1b19',
                'red-dark': '#cc1f1a',
                'red': '#e3342f',
                'red-light': '#ef5753',
                'red-lighter': '#f9acaa',
                'red-lightest': '#fcebea',

                'orange-darkest': '#542605',
                'orange-darker': '#7f4012',
                'orange-dark': '#de751f',
                'orange': '#f6993f',
                'orange-light': '#faad63',
                'orange-lighter': '#fcd9b6',
                'orange-lightest': '#fff5eb'
    },
            height: {
                'screen-1/2': '50vh'
    }
                }
                },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
