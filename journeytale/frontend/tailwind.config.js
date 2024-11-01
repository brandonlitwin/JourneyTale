module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tells Tailwind to scan all files in src
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#1a73e8",
        brandGreen: "#34d399",
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};
