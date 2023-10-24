import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    primary: {
      green: "#149873",
      grey: "#EFEFEF",
      black: "#000000",
      white: "#FFFFFF",
    },
    secondary: {
      grey: "#787878",
    },
  },
  config: {
    // initialColorMode: "dark",
  },
});
