// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Add your JSX or TSX files here
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark-blue': 'var(--bs-background)',  // Reference the CSS variable for primary color
        'primary-light-blue': '#1E90FF', // You can also define Tailwind colors directly here
        'light-gray': '#F2F2F2',         // Light Gray
        'gray': '#D3D3D3',               // Gray
        'dark-gray': '#333333',          // Dark Gray
        'yellow-gold': '#FFD700',        // Yellow/Gold
        'nav-bg': "var(--bs-nav)"
      }
    },
  },
  plugins: [],
}
