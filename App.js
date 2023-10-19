import { Box, NativeBaseProvider, VStack, extendTheme } from "native-base";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Footer } from "./src/components/Footer";

export default function App() {
  const theme = extendTheme({
    colors: {
      primary: {
        green: "#149873",
      },
    },
    config: {
      // initialColorMode: "dark",
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <VStack safeAreaTop flex={1} justifyContent={"space-between"}>
        <Box>
          <Text>Hello</Text>
        </Box>
        <Footer />
      </VStack>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
