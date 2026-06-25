export const tokens = {
  colors: {
    backgroundPrimary: "#F2EFE8",
    backgroundSecondary: "#E5E0D8",
    backgroundDark: "#151719",
    surfacePrimary: "#F9F7F2",
    surfaceMuted: "#E0DCD5",
    textPrimary: "#1C1F21",
    textSecondary: "#6A655F",
    textInverse: "#F8F4EC",
    border: "#C7C0B6",
    accentPrimary: "#25292B",
    accentSecondary: "#98784D",
    accentSoft: "#D0B88F",
    success: "#56634C",
    error: "#994F43"
  },
  typography: {
    family: {
      heading: "Inter Tight",
      body: "Manrope"
    },
    sizes: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "24px",
      "2xl": "32px",
      "3xl": "44px",
      "4xl": "56px"
    }
  },
  spacing: {
    0: "0",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    8: "32px",
    10: "40px",
    12: "48px",
    16: "64px",
    20: "80px",
    24: "96px"
  },
  radius: {
    sm: "2px",
    md: "4px",
    lg: "6px",
    xl: "8px",
    full: "999px"
  },
  shadows: {
    sm: "0 8px 24px rgba(24, 26, 27, 0.06)",
    md: "0 18px 48px rgba(24, 26, 27, 0.1)",
    lg: "0 32px 80px rgba(24, 26, 27, 0.14)"
  },
  breakpoints: {
    xs: "360px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1440px"
  }
} as const;
