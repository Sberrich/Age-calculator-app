/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        PrimaryPurple: 'hsl(259, 100%, 65%)',
        Primaryred: 'hsl(0, 100%, 67%)',
        NeutralWhite: 'hsl(0, 0%, 100%)',
        Offwhite: 'hsl(0, 0%, 94%)',
        Lightgrey: 'hsl(0, 0%, 86%)',
        Smokeygrey: 'hsl(0, 1%, 44%)',
        OffBlack: 'hsl(0, 0%, 8%)',
      },
      fontFamily: {
        Poppins: ['Poppins','sans-serif'],
      }
    },
  },
  plugins: [],
}

