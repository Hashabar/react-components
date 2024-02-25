/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    daisyui: {
      themes: [
        {
          mytheme: {
            "primary": "#0092ff",
            "secondary": "#fda4af",
            "accent": "#e879f9",
            "neutral": "#2e1d17",
            "base-100": "#1f2937",
            "info": "#0060ff",
            "success": "#4d9100",
            "warning": "#eab308",
            "error": "#e11d48",
          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
}

