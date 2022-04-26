module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["IBM Plex Sans", "Montserrat", "sans-serif"],
      serif: ["Playfair Display", "Lora", "serif"],
      mono: ["Ubuntu Mono", "Roboto Mono", "monospace"],
    },
    extend: {
      colors: {
        "red-primary": "#C03540",
        "red-secondary": "#CBB3647",
        "red-highlight": "#F43F5E",
        "light-gray": "#FFFFFF33",
        "dark-gray": "#262626",
        "white-bg": "#EBE7E0",
      },
    },
  },
  plugins: [],
};
