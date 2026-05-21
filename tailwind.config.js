export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 20px 70px rgba(51, 111, 255, 0.18)'
      },
      backgroundImage: {
        frost: 'radial-gradient(circle at top left, rgba(56, 189, 248, 0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(124, 58, 237, 0.14), transparent 25%)'
      }
    }
  },
  plugins: []
};
