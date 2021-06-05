import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#181B23",
      "700": "#2D3748",
      "600": "#4A5568",
      "200": "#E2E8F0",
      "100": "#eeeef2",
      "50": "#F7FAFC",
    },
    blue: {
      "400": "#4299E1",
      "500": "#3182CE",
    }
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.900",
      }
    }
  }
});
