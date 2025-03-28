import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        sky: "#74BDE8",
        darkSky: "#5BAEDF",
      },
      colors: {
        skyblue: {
          background: "#74BDE8",
          text: "#000000",
        },
        dune: {
          background: "#FF8C39",
          text: "#2F2F2F",
        },
        forest: {
          background: "#13AE70",
          text: "#000000",
        },
        light: {
          background: "#000000",
          text: "#2F2F2F",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        brand: {
          DEFAULT: "hsl(var(--brand))",
          foreground: "hsl(var(--brand-foreground))",
        },
        highlight: {
          DEFAULT: "hsl(var(--highlight))",
          foreground: "hsl(var(--highlight-foreground))",
        },
      },
      fontFamily: {
        honerThose: ["var(--font-honer-those)"],
        freesentation: ["var(--font-freesentation)"],
      },
      fontSize: {
        title: "130px",
        mobileTitle: "100px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        "main-hover": {
          raw: "(hover: hover)",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "#000000",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;

export default config;
