import { createTheme } from "@mui/material/styles";

export function getAppTheme({ direction = "ltr" } = {}) {
  return createTheme({
    direction,
    palette: {
      mode: "light",
      primary: { main: "#0B3D2E" },
      secondary: { main: "#C9A227" },
      background: { default: "#FFFFFF" },
    },
    typography: {
      fontFamily:
        'system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"',
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiContainer: {
        defaultProps: {
          maxWidth: "lg",
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            textAlign: "start",
          },
        },
      },
    },
  });
}

