import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem"
      },
      screens: {
        "2xl": "1440px"
      }
    },
    extend: {
      colors: {
        background: {
          primary: "hsl(var(--background-primary) / <alpha-value>)",
          secondary: "hsl(var(--background-secondary) / <alpha-value>)",
          dark: "hsl(var(--background-dark) / <alpha-value>)"
        },
        surface: {
          primary: "hsl(var(--surface-primary) / <alpha-value>)",
          muted: "hsl(var(--surface-muted) / <alpha-value>)",
          elevated: "hsl(var(--surface-elevated) / <alpha-value>)"
        },
        text: {
          primary: "hsl(var(--text-primary) / <alpha-value>)",
          secondary: "hsl(var(--text-secondary) / <alpha-value>)",
          inverse: "hsl(var(--text-inverse) / <alpha-value>)"
        },
        border: "hsl(var(--border) / <alpha-value>)",
        accent: {
          primary: "hsl(var(--accent-primary) / <alpha-value>)",
          secondary: "hsl(var(--accent-secondary) / <alpha-value>)",
          soft: "hsl(var(--accent-soft) / <alpha-value>)"
        },
        success: "hsl(var(--success) / <alpha-value>)",
        error: "hsl(var(--error) / <alpha-value>)",
        focus: "hsl(var(--focus) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-inter-tight)", "var(--font-manrope)", "system-ui", "sans-serif"]
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.55rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.5rem", { lineHeight: "2rem" }],
        "2xl": ["2rem", { lineHeight: "2.4rem" }],
        "3xl": ["2.75rem", { lineHeight: "3.2rem" }],
        "4xl": ["3.5rem", { lineHeight: "3.9rem" }]
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)"
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)"
      },
      keyframes: {
        "accordion-down": {
          from: { opacity: "0", transform: "translateY(-6px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        "accordion-up": {
          from: { opacity: "1", transform: "translateY(0)" },
          to: { opacity: "0", transform: "translateY(-4px)" }
        },
        "dialog-overlay-in": {
          from: { opacity: "0" },
          to: { opacity: "1" }
        },
        "dialog-content-in": {
          from: { opacity: "0", transform: "translate(-50%, -48%) scale(0.985)" },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.32s cubic-bezier(0.22, 1, 0.36, 1)",
        "accordion-up": "accordion-up 0.2s ease-out",
        "dialog-overlay-in": "dialog-overlay-in 0.28s ease-out",
        "dialog-content-in": "dialog-content-in 0.36s cubic-bezier(0.22, 1, 0.36, 1)"
      },
      screens: {
        xs: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px"
      }
    }
  },
  plugins: []
};

export default config;
