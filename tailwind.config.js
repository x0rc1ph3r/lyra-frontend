/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gs-eb': ['GrandstanderExtraBold'],
        'gs-b': ['GrandstanderBold'],
        'gs-sb': ['GrandstanderSemiBold'],
        'gs-m': ['GrandstanderMedium'],
        'gs': ['GrandstanderRegular']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#ffc714",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1436px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
