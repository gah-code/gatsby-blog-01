// example theme file
const theme = {
  colors: {
    text: "#222",
    background: "#3566",
    primary: "#07c",
    secondary: "#0744",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 18, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  text: {
    default: {
      color: "text",
      fontSize: 2,
    },
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    display: {
      variant: "text.heading",
      fontSize: [5, 6],
      fontWeight: "display",
      letterSpacing: "-0.03em",
      mt: 3,
    },
  },

  badges: {
    primary: {
      color: "background",
      bg: "#eee",
    },
    outline: {
      color: "#748",
      bg: "transparent",
      boxShadow: "inset 0 0 0 1px",
    },
  },
  sizes: {
    container: 768,
  },
}

export default theme
