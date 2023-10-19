import {
  Box,
  Icon,
  NativeBaseProvider,
  VStack,
  extendTheme,
} from "native-base";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Footer } from "./src/components/Footer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Dashboard from "./src/screens/User/Dashboard";
import CreateTask from "./src/screens/User/CreateTask";

const Tab = createBottomTabNavigator();

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
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Dashboard">
          <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Dashboard") {
                  iconName = focused ? "home" : "home-outline";
                } else if (route.name === "Settings") {
                  iconName = focused ? "ios-list" : "ios-list-outline";
                }

                return (
                  <Icon
                    mb="1"
                    as={<MaterialCommunityIcons name={iconName} />}
                    color="white"
                    size="xl"
                  />
                );
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          />
          <Tab.Screen name="CreateTask" component={CreateTask} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
