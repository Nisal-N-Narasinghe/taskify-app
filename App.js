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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Dashboard from "./src/screens/User/Dashboard";
import CreateTask from "./src/screens/User/CreateTask";
import CreateDetails from "./src/screens/User/CreateTaskDetails";
import CreateTaskImage from "./src/screens/User/CreateTaskImage";

import ExpertProfileScreen from "./src/screens/Expert/ExpertProfileScreen";

const DashStack = createNativeStackNavigator();
const TaskStack = createNativeStackNavigator();
const ExpertProfileStack = createNativeStackNavigator();
const CreateTaskSatck = createNativeStackNavigator();

function DashStackScreen() {
  return (
    <DashStack.Navigator>
      <DashStack.Screen name="Dashboard" component={Dashboard} />
    </DashStack.Navigator>
  );
}

function TaskStackScreen() {
  return (
    <TaskStack.Navigator>
      <TaskStack.Screen name="CreateTask" component={CreateTask} />
    </TaskStack.Navigator>
  );
}

function ExpertProfileStackScreen() {
  return (
    <ExpertProfileStack.Navigator>
      <ExpertProfileStack.Screen
        name="ExpertProfile"
        component={ExpertProfileScreen}
      />
    </ExpertProfileStack.Navigator>
  );
}
function CreateTaskDetailsStackScreen() {
  return (
    <ExpertProfileStack.Navigator>
      <ExpertProfileStack.Screen
        name="CreateTaskDetails"
        component={CreateDetails}
      />
    </ExpertProfileStack.Navigator>
  );
}
function TaskDetailsStackScreen() {
  return (
    <TaskStack.Navigator>
      <TaskStack.Screen
        name="CreateTaskDetails"
        component={CreateTaskDetails}
      />
    </TaskStack.Navigator>
  );
}
function TaskImgStackScreen() {
  return (
    <TaskStack.Navigator>
      <TaskStack.Screen name="CreateTaskImage" component={CreateTaskImage} />
    </TaskStack.Navigator>
  );
}

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
        <Tab.Navigator
          initialRouteName="Dashboard"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Dashboard") {
                iconName = "dashboard";
              } else if (route.name === "CreateTask") {
                iconName = "playlist-add";
              } else if (route.name === "ExpertProfile1") {
                iconName = "person";
              } else if (route.name === "CreateTaskDetailsPage") {
                iconName = "playlist-add-check";
              }

              return (
                <MaterialIcons name={iconName} size={size} color={color} />
              );
            },
          })}
        >
          <Tab.Screen name="Dashboard" component={DashStackScreen} />
          <Tab.Screen name="CreateTask" component={TaskStackScreen} />
          <Tab.Screen
            name="CreateTaskDetailsPage"
            component={CreateTaskDetailsStackScreen}
          />
          <Tab.Screen
            name="ExpertProfile1"
            component={ExpertProfileStackScreen}
          />
          <Tab.Screen
            name="CreateTaskDetails"
            component={TaskDetailsStackScreen}
          />
          <Tab.Screen name="CreateTaskImage" component={TaskImgStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
