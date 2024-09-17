/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-yellow": "var(--primary-yellow)",
        "primary-orange": "var(--primary-orange)",
        "primary-blue": "var(--primary-blue)",
        "primary-teal": "var(--primary-teal)",
        "primary-dark-gray": "var(--primary-dark-gray)"
      },
    },
  },
  plugins: [],
}

