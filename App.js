import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "./theme";

// Dashboards
import Dashboard from "./src/screens/User/Dashboard";
import TaskDashboard from "./src/screens/User/TaskDashboard";

// Task Screens
import CreateTaskCategory from "./src/screens/User/CreateTask/AddCategory";
import CreateTaskDetails from "./src/screens/User/CreateTask/AddDetails";
import UserChat from "./src/screens/User/Chat";

//  STACK NAVIGATION CONFIG

const DashboardStack = createNativeStackNavigator();
const TaskDashboardStack = createNativeStackNavigator();
const ProfileDashboardStack = createNativeStackNavigator();

function DashboardStackScreen() {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="Dashboard" component={Dashboard} />
      <DashboardStack.Screen name="User Chat" component={UserChat} />
    </DashboardStack.Navigator>
  );
}

function TaskDashboardStackScreen() {
  return (
    <TaskDashboardStack.Navigator>
      <TaskDashboardStack.Screen
        name="Task Dashboard"
        component={TaskDashboard}
      />
      <TaskDashboardStack.Screen
        name="Create Task"
        component={CreateTaskCategory}
      />
      <TaskDashboardStack.Screen
        name="Task Details"
        component={CreateTaskDetails}
      />
    </TaskDashboardStack.Navigator>
  );
}

function ProfileDashboardStackScreen() {
  return (
    <ProfileDashboardStack.Navigator>
      {/* <ProfileDashboardStack.Screen
        name="Profile Dashboard"
        component={ProfileDashboard}
      /> */}
    </ProfileDashboardStack.Navigator>
  );
}

// TAB NAVIGATION CONFIG

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Dashboard"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Dashboard") {
                iconName = "home-outline";
              } else if (route.name === "Tasks") {
                iconName = "hammer-outline";
              } else if (route.name === "Profile") {
                iconName = "person-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}>
          <Tab.Screen name="Dashboard" component={DashboardStackScreen} />
          <Tab.Screen name="Tasks" component={TaskDashboardStackScreen} />
          <Tab.Screen name="Profile" component={ProfileDashboardStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
