/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        pop: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#CA38ED',
        secondary: '#000000',
        complement: '#3E1149',
        grayCustom: 'rgba(255, 255, 255, 0.47)',
        redCustom: '#AD3C40',
        pinkCustom: '#E487FB'
      },
      screens: {
        xs: '320px'
      }
    }
  },
  plugins: []
}
