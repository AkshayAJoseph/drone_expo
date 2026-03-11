/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./register.html", "./**/*.html"],
  theme: {
    extend: {
      colors: {
        deepDark: '#08090d',
        surface: '#0e1117',
        surfaceLight: '#161a24',
        accentPrimary: '#7B5EA7',
        accentSecondary: '#00D4FF',
        textMuted: '#8b8fa3',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        ceoruse: ['Ceoruse', 'serif'],
      },
    }
  },
  plugins: [],
}