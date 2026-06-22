export const tokens = {
  colors: {
    backgroundPrimary: "#F7F5F0",
    backgroundSecondary: "#ECE8DF",
    backgroundDark: "#191A18",
    surfacePrimary: "#FFFFFF",
    surfaceMuted: "#F1EEE7",
    textPrimary: "#191A18",
    textSecondary: "#5F625C",
    textInverse: "#FFFFFF",
    border: "#D8D2C6",
    accentPrimary: "#2F3A32",
    accentSecondary: "#A66F3F",
    accentSoft: "#D8C4A8",
    success: "#2F6B4F",
    error: "#B84A3A"
  },
  typography: {
    family: {
      heading: "Inter",
      body: "Inter"
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
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    full: "999px"
  },
  shadows: {
    sm: "0 2px 8px rgba(25, 26, 24, 0.08)",
    md: "0 8px 24px rgba(25, 26, 24, 0.1)",
    lg: "0 16px 48px rgba(25, 26, 24, 0.14)"
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
