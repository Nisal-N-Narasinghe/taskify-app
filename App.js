import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "./theme";
import { firebase } from "./config";
import React, { useState, useEffect } from "react";

// Dashboards
import Dashboard from "./src/screens/User/Dashboard";
import TaskDashboard from "./src/screens/User/TaskDashboard";

// Task Screens
import CreateTaskCategory from "./src/screens/User/CreateTask/AddCategory";
import CreateTaskDetails from "./src/screens/User/CreateTask/AddDetails";
import UserChat from "./src/screens/User/Chat";
import CreateTaskImage from "./src/screens/User/CreateTask/AddImages";
import CreateTaskSuccess from "./src/screens/User/CreateTask/SuccessView";
import AddNewExpert from "./src/screens/Expert/AddNewExpert";
import ViewSingleExpert from "./src/screens/Expert/ViewSingleExpert";
import AddFeedback from "./src/screens/User/AddFeedback";
import ExpertProfile from "./src/screens/Expert/ExpertProfile";
import AllCompletedWorks from "./src/screens/User/AllCompletedWorks";
//  STACK NAVIGATION CONFIG
import ViewMyTasks from "./src/screens/User/ViewTasks/ViewMyTasks";
import ExpertJobHistory from "./src/screens/Expert/ExpertJobHistory";
import ExpertViewExpertiseArea from "./src/screens/Expert/ExpertViewExpertiseArea";
import ViewTask from "./src/screens/User/ViewTasks/ViewMyTasks/ViewMyTask";
import ViewPastTasks from "./src/screens/User/ViewTasks/ViewPastTasks";
import ExpertViewSingleJobHistoryItem from "./src/screens/Expert/ExpertJobHistory/ExpertViewSingleJobHistoryItem";
import ViewUpcomingJobs from "./src/screens/Expert/ViewUpcomingJobs";
import Login from "./src/screens/Login/Login";
import Registration from "./src/screens/Login/Registration";
import AllExpertArea from "./src/screens/Expert/AllExpertArea";

//  STACK NAVIGATION CONFIG
const DashboardStack = createNativeStackNavigator();
const TaskDashboardStack = createNativeStackNavigator();
const ProfileDashboardStack = createNativeStackNavigator();
const ExpertDashboardStack = createNativeStackNavigator();

function ExpertDashboardStackScreen() {
  return (
    <ExpertDashboardStack.Navigator>
      <ExpertDashboardStack.Screen name="Dashboard" component={Dashboard} />
      <ExpertDashboardStack.Screen
        name="Add New Expert"
        component={AddNewExpert}
      />
      <ExpertDashboardStack.Screen name="User Chat" component={UserChat} />
      <ExpertDashboardStack.Screen
        name="Expert Profile"
        component={ExpertProfile}
      />
      <ExpertDashboardStack.Screen
        name="View Single Expert"
        component={ViewSingleExpert}
      />
      <ExpertDashboardStack.Screen
        name="Expert Job History"
        component={ExpertJobHistory}
      />
      <ExpertDashboardStack.Screen
        name="Expert Area"
        component={ExpertViewExpertiseArea}
      />
      <ExpertDashboardStack.Screen
        name="Completed Jobs"
        component={ExpertViewSingleJobHistoryItem}
      />
      <ExpertDashboardStack.Screen
        name="Upcoming Jobs"
        component={ViewUpcomingJobs}
      />
      <ExpertDashboardStack.Screen
        name="All Expert Area"
        component={AllExpertArea}
      />
    </ExpertDashboardStack.Navigator>
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
      <TaskDashboardStack.Screen
        name="All Completed Tasks"
        component={AllCompletedWorks}
      />
      <TaskDashboardStack.Screen
        name="Task Image"
        component={CreateTaskImage}
      />
      <TaskDashboardStack.Screen
        name="Task Success"
        component={CreateTaskSuccess}
      />
      <TaskDashboardStack.Screen name="My Tasks" component={ViewMyTasks} />
      <TaskDashboardStack.Screen name="View Task" component={ViewTask} />
      <TaskDashboardStack.Screen
        name="View Past Tasks"
        component={ViewPastTasks}
      />
      <TaskDashboardStack.Screen name="Add Feedback" component={AddFeedback} />
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
  const [user, setUser] = useState();
  const [initializeing, setInitializeing] = useState(true);

  //Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializeing) setInitializeing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializeing) return null;

  if (!user) {
    return (
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <ExpertDashboardStack.Navigator>
            <ExpertDashboardStack.Screen name="Login" component={Login} />
            <ExpertDashboardStack.Screen
              name="Registration"
              component={Registration}
            />
          </ExpertDashboardStack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }

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
          <Tab.Screen name="Dashboard" component={ExpertDashboardStackScreen} />
          <Tab.Screen name="Tasks" component={TaskDashboardStackScreen} />
          <Tab.Screen name="Profile" component={ProfileDashboardStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
