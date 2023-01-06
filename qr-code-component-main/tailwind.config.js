/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {},
    colors: {
      primary: 'hsl(var(--color-primary) / <alpha-value>)',
      secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
      light: 'hsl(var(--color-light) / <alpha-value>)',
      dark: 'hsl(var(--color-dark) / <alpha-value>)'
    }
  },
  plugins: [require('flowbite/plugin')],
}

