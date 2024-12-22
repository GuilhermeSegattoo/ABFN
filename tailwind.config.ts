import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-1': "url('/bg-1.png')",
        'bg-2': "url('/bg-2.png')",
        'bg-3': "url('/bg-3.png')",
        'bg-4': "url('/bg-4.png')",
      },
      colors: {
        primary: "#FF914D", // Cor principal personalizada
        secondary: "#18C76E", // Cor secundária
        third: "#009FD2", // Cor terceira
        yellow: "#E4B628", // Amarelo
        dark: "#1E1E1E", // Cor escura
        light: "#FFFFFF", // Branco
        gray: {
          100: "#F5F5F5",
          300: "#D1D5DB",
          500: "#6B7280",
          700: "#374151",
          900: "#111827",
        },
      },
      screens: {
        xs: "475px", // Personalizando breakpoints menores
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
export default config;
