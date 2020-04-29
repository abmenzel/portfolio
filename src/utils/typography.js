import Typography from "typography"

const typography = new Typography({
  baseFontSize: "19px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Montserrat",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Quattrocento Sans", "Helvetica Neue", "sans-serif"],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '300',
        '400',
        '500',
        '600',
        '700',
      ],
    },
    {
      name: 'Quattrocento Sans',
      styles: [
        '400',
        '500',
        '600',
        '700',
      ],
    },
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'h1':{
        marginTop: '2.125rem',
        color: '#333',
        marginBottm: '0.725rem',
    },
    'h1,h2,h3,h4,h5': {
        fontWeight: 600,
    },
    a: {
      textDecoration: 'none',
    },
    '.sans': {
        fontFamily:'Montserrat',
    }
  }),
})


export default typography