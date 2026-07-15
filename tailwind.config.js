module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        upa: {
          red: '#B22234',
          blue: '#000080',
          white: '#FFFFFF',
          gray: '#F3F4F6',
        },
      },
    },
  },
  plugins: [],
}