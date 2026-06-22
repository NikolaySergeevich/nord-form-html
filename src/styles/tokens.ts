export const tokens = {
  colors: {
    backgroundPrimary: "#E9E2D6",
    backgroundSecondary: "#D8D0C3",
    backgroundDark: "#151714",
    surfacePrimary: "#F6F1E8",
    surfaceMuted: "#DED6C9",
    textPrimary: "#171915",
    textSecondary: "#55564D",
    textInverse: "#FFFFFF",
    border: "#BDB2A3",
    accentPrimary: "#242824",
    accentSecondary: "#B9783E",
    accentSoft: "#D7B57D",
    success: "#4F6540",
    error: "#A44E3F"
  },
  typography: {
    family: {
      heading: "System UI",
      body: "System UI"
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
    sm: "0 2px 8px rgba(21, 23, 20, 0.1)",
    md: "0 8px 24px rgba(21, 23, 20, 0.14)",
    lg: "0 16px 48px rgba(21, 23, 20, 0.18)"
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
