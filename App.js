import {
  Box,
  Icon,
  NativeBaseProvider,
  VStack,
  extendTheme,
} from "native-base";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Footer } from "./src/components/common/Footer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Dashboard from "./src/screens/User/Dashboard";
import CreateTask from "./src/screens/User/CreateTask";
import CreateDetails from "./src/screens/User/CreateTaskDetails";
import CreateTaskImage from "./src/screens/User/CreateTaskImage";

import ExpertProfileScreen from "./src/screens/Expert/ExpertProfile";
import AddNewExpert from "./src/screens/Expert/AddNewExpert";
import ViewSingleExpert from "./src/screens/Expert/ViewSingleExpert";
import AddRatings from "./src/components/common/StarRatings";
import AddFeedback from "./src/screens/User/AddFeedback";

const DashStack = createNativeStackNavigator();
const TaskStack = createNativeStackNavigator();
const ExpertProfileStack = createNativeStackNavigator();
const CreateTaskSatck = createNativeStackNavigator();
const CreateTaskImgStack = createNativeStackNavigator();
const AddNewExpertStack = createNativeStackNavigator();
const ViewSingleExpertStack = createNativeStackNavigator();
const AddRatingsStack = createNativeStackNavigator();
const AddFeedbackStack = createNativeStackNavigator();

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
    <CreateTaskSatck.Navigator>
      <CreateTaskSatck.Screen
        name="CreateTaskDetails"
        component={CreateDetails}
      />
    </CreateTaskSatck.Navigator>
  );
}
function CreateTaskImgStackScreen() {
  return (
    <CreateTaskImgStack.Navigator>
      <CreateTaskImgStack.Screen
        name="CreateTaskImage"
        component={CreateTaskImage}
      />
    </CreateTaskImgStack.Navigator>
  );
}

function AddNewExpertStackScreen() {
  return (
    <AddNewExpertStack.Navigator>
      <AddNewExpertStack.Screen name="AddNewExpert" component={AddNewExpert} />
    </AddNewExpertStack.Navigator>
  );
}

function ViewSingleExpertStackScreen() {
  return (
    <ViewSingleExpertStack.Navigator>
      <ViewSingleExpertStack.Screen
        name="ViewSingleExpert"
        component={ViewSingleExpert}
      />
    </ViewSingleExpertStack.Navigator>
  );
}

function AddRatingsStackScreen() {
  return (
    <AddRatingsStack.Navigator>
      <AddRatingsStack.Screen name="AddRatings" component={AddRatings} />
    </AddRatingsStack.Navigator>
  );
}

function AddFeedbackStackScreen() {
  return (
    <AddFeedbackStack.Navigator>
      <AddFeedbackStack.Screen name="AddFeedback" component={AddFeedback} />
    </AddFeedbackStack.Navigator>
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

              if (route.name === "DashboardPage") {
                iconName = "dashboard";
              } else if (route.name === "CreateTaskPage") {
                iconName = "playlist-add";
              } else if (route.name === "ExpertProfile1") {
                iconName = "person";
              } else if (route.name === "CreateTaskDetailsPage") {
                iconName = "playlist-add-check";
              } else if (route.name === "CreateTaskImage") {
                iconName = "image";
              }

              return (
                <MaterialIcons name={iconName} size={size} color={color} />
              );
            },
          })}>
          <Tab.Screen name="DashboardPage" component={DashStackScreen} />
          <Tab.Screen name="CreateTaskPage" component={TaskStackScreen} />
          <Tab.Screen
            name="CreateTaskDetailsPage"
            component={CreateTaskDetailsStackScreen}
          />
          <Tab.Screen
            name="ExpertProfile1"
            component={ExpertProfileStackScreen}
          />
          <Tab.Screen
            name="CreateTaskImage"
            component={CreateTaskImgStackScreen}
          />
          <Tab.Screen
            name="AddNewExpertPage"
            component={AddNewExpertStackScreen}
          />
          <Tab.Screen
            name="ViewSingleExpertPage"
            component={ViewSingleExpertStackScreen}
          />
          <Tab.Screen name="AddRatingsPage" component={AddRatingsStackScreen} />
          <Tab.Screen
            name="AddFeedbackPage"
            component={AddFeedbackStackScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
