module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-ibm)', 'Montserrat', 'sans-serif'],
      serif: ['var(--font-oswald)', 'Lora', 'serif'],
      mono: ['var(--font-ubuntu)', 'Ubuntu Mono', 'Roboto Mono', 'monospace'],
    },
    extend: {
      colors: {
        'red-primary': '#C03540',
        'red-secondary': '#CBB3647',
        'red-highlight': '#F43F5E',
        'light-gray': '#FFFFFF33',
        'dark-gray': '#262626',
        'white-bg': '#EBE7E0',
      },
    },
  },
  plugins: [],
};
