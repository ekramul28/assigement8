/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://img.freepik.com/free-photo/volunteers-holding-boxes-containing-donations-charity_23-2149230563.jpg?w=900&t=st=1695573747~exp=1695574347~hmac=4e2fbff570dcf00f3430bb171c5d7e72c333a0d63cb4fdabbc1aeef48870bcd9')",
      }
    },
  },
  plugins: [require("daisyui")],
}
