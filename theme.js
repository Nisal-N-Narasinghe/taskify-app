import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    primary: {
      green: "#149873",
      grey: "#EFEFEF",
      black: "#000000",
      white: "#FFFFFF",
      orange: "#EF7D41",
    },
    secondary: {
      grey: "#787878",
    },
    emerald: {
      100: "#149873",
    },
    darkBlack: {
      100: "#000000",
    },
  },
  config: {
    // initialColorMode: "dark",
  },
});
