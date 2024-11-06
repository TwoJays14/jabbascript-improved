/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "koding-kombat": "url('/assets/background.webp')"
      }
    },
  },
  plugins: [require('daisyui')],
}

