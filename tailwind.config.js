/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#84EC8E",
        background: "#03090E",
        cardBackground : "#0A1319",
        footerBg : "#12181D",
        NavbarBg : "rgba(63, 66, 55, 0.20)",
      },
      backgroundImage: {
        "card" : "linear-gradient(360deg, rgba(56, 83, 98, 0.20) 0%, rgba(30, 37, 41, 0.00) 100%), #03090E",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "to-transparant" : "linear-gradient(180deg, rgba(3, 9, 14, 0.00) 0%, #03090E 100%)",
        "editors" : "linear-gradient(180deg, #161C21 0%, #03090E 100%)",
        "cards" : "linear-gradient(360deg, rgba(56, 83, 98, 0.20) 0%, rgba(30, 37, 41, 0.00) 100%)",
        "cardSuport" : "linear-gradient(90deg, #03090E 0%, rgba(3, 9, 14, 0.00) 100%)"
      },
      gap : {
        26 : "104px"
      }
    },
  },
  plugins: [],
}

