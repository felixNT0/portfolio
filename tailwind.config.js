module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f7ff",
          100: "#ebf0fe",
          200: "#dce5fe",
          300: "#c2d2fd",
          400: "#9db4fb",
          500: "#6366f1", // Indigo
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        secondary: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6", // Teal/Cyan
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        dark: {
          bg: "#0B1121", // Deep Rich Navy/Black
          card: "#151E32", // Slightly lighter for contrast
          border: "rgba(255, 255, 255, 0.08)",
        },
      },
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui"],
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
};
