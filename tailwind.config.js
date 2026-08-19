module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#FAF9F6', // Alabaster/Pearl
          100: '#F4F2EB', 
          200: '#E6E2D6',
          300: '#CFCAB8',
          400: '#B0A994',
          500: '#948D78',
          600: '#756E5C',
          700: '#5C5648',
          800: '#423E34',
          900: '#22201A', // Very dark bronze-charcoal
          950: '#14120E', // True luxury dark
        },
        gray: {
          50: '#FAF9F6', 
          100: '#F4F2EB', 
          200: '#E6E2D6',
          300: '#CFCAB8',
          400: '#B0A994',
          500: '#948D78',
          600: '#756E5C',
          700: '#5C5648',
          800: '#423E34',
          900: '#22201A', 
          950: '#14120E', 
        },
        indigo: {
          400: "#cdae78",
          500: "#be9755", // Map to Gold
          600: "#aa7f43",
        },
        teal: {
          400: "#cdae78",
          500: "#be9755", // Map to Gold
          600: "#aa7f43",
        },
        blue: {
          400: "#cdae78",
          500: "#be9755", 
          600: "#aa7f43",
        },
        green: {
          400: "#cdae78",
          500: "#be9755", 
          600: "#aa7f43",
        },
        purple: {
          400: "#cdae78",
          500: "#be9755", 
          600: "#aa7f43",
        },
        orange: {
          400: "#cdae78",
          500: "#be9755", 
          600: "#aa7f43",
        },
        primary: {
          50: "#fdfbf7",
          100: "#f6f2e8",
          200: "#eee3cf",
          300: "#e0cca8",
          400: "#cdae78",
          500: "#be9755", // Classic Gold
          600: "#aa7f43",
          700: "#8e6538",
          800: "#755232",
          900: "#60442c",
        },
        secondary: {
          50: "#f4f6f8",
          100: "#e4e8ec",
          200: "#c8cfd8",
          300: "#a1acbc",
          400: "#74849a",
          500: "#54657c",
          600: "#415064", // Slate Gray
          700: "#364152",
          800: "#2f3744",
          900: "#2a303b",
        },
        accent: {
          500: "#be9755", // Gold
          600: "#aa7f43",
        },
        dark: {
          bg: "#14120E", // Obsidian Black (Matches slate-950)
          card: "#22201A", // Very dark bronze-charcoal (Matches slate-900)
          border: "rgba(255, 255, 255, 0.05)",
        },
      },
    },
    fontFamily: {
      sans: ["Marcellus", "ui-sans-serif", "system-ui"],
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
};
