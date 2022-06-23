module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem'
      },
      borderWidth: {
        '1': '1px'
      },
      maxWidth: {
        '80': '20rem',
        'xxs': '15rem'
      }
    },
    plugins: [],
  }
}
