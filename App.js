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
import ViewOngoingTask from "./src/screens/User/ViewTasks/ViewOngoingTasks/ViewOngoingTask";
import ViewOngoingJob from "./src/screens/Expert/ViewOngoingJobs/ViewOngoingJob";
import ViewPastTask from "./src/screens/User/ViewTasks/ViewPastTasks/ViewPastTask";

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
import ViewSingleUpcommingJob from "./src/screens/Expert/ViewUpcomingJobs/ViewSingleUpcommingJob";
import ExpertDashboard from "./src/screens/Expert/ExpertDashboard";
import UserDashboard from "./src/screens/User/UserDashboard";

//  STACK NAVIGATION CONFIG
const DashboardStack = createNativeStackNavigator();
const TaskDashboardStack = createNativeStackNavigator();
const ProfileDashboardStack = createNativeStackNavigator();
const ExpertDashboardStack = createNativeStackNavigator();
const ExpertChatStack = createNativeStackNavigator();
const ExpertJobStack = createNativeStackNavigator();
const ExpertProfileStack = createNativeStackNavigator();

function ExpertDashboardStackScreen() {
  return (
    <ExpertDashboardStack.Navigator>
      <ExpertDashboardStack.Screen
        name='Expert Dashboard'
        component={ExpertDashboard}
      />
      <ExpertDashboardStack.Screen
        name='Completed Jobs'
        component={ExpertViewSingleJobHistoryItem}
      />
      {/* <ExpertDashboardStack.Screen name='Dashboard' component={Dashboard} /> */}
    </ExpertDashboardStack.Navigator>
  );
}

function ExpertJobStackScreen() {
  return (
    <ExpertJobStack.Navigator>
      <ExpertJobStack.Screen name='All Jobs' component={ViewUpcomingJobs} />
      <ExpertJobStack.Screen
        name='Upcoming Job'
        component={ViewSingleUpcommingJob}
      />
      <ExpertJobStack.Screen name='Ongoing Job' component={ViewOngoingJob} />
    </ExpertJobStack.Navigator>
  );
}

function ExpertProfileStackScreen() {
  return (
    <ExpertProfileStack.Navigator>
      <ExpertProfileStack.Screen
        name='Expert Profile'
        component={ExpertProfile}
      />
      <ExpertProfileStack.Screen
        name='Expert Job History'
        component={ExpertJobHistory}
      />
      <ExpertProfileStack.Screen
        name='Completed Jobs'
        component={ExpertViewSingleJobHistoryItem}
      />
      <ExpertProfileStack.Screen
        name='Expert Area'
        component={ExpertViewExpertiseArea}
      />
      <ExpertProfileStack.Screen
        name='Add New Expert'
        component={AddNewExpert}
      />
      <ExpertProfileStack.Screen
        name='View Single Expert'
        component={ViewSingleExpert}
      />
    </ExpertProfileStack.Navigator>
  );
}

function ExpertChatStackScreen() {
  return (
    <ExpertChatStack.Navigator>
      <ExpertChatStack.Screen name='User Chat' component={UserChat} />
    </ExpertChatStack.Navigator>
  );
}

function TaskDashboardStackScreen() {
  return (
    <TaskDashboardStack.Navigator>
      <TaskDashboardStack.Screen
        name='Task Dashboard'
        component={TaskDashboard}
      />
      <TaskDashboardStack.Screen
        name='Create Task'
        component={CreateTaskCategory}
      />
      <TaskDashboardStack.Screen
        name='Task Details'
        component={CreateTaskDetails}
      />
      <TaskDashboardStack.Screen
        name='All Completed Tasks'
        component={AllCompletedWorks}
      />
      <TaskDashboardStack.Screen
        name='Task Image'
        component={CreateTaskImage}
      />
      <TaskDashboardStack.Screen
        name='Task Success'
        component={CreateTaskSuccess}
      />
      <TaskDashboardStack.Screen name='My Tasks' component={ViewMyTasks} />
      <TaskDashboardStack.Screen name='View Task' component={ViewTask} />
      <TaskDashboardStack.Screen
        name='View Past Tasks'
        component={ViewPastTasks}
      />
      <TaskDashboardStack.Screen
        name='View Past Task'
        component={ViewPastTask}
      />
      <TaskDashboardStack.Screen
        name='View Ongoing Task'
        component={ViewOngoingTask}
      />
      <TaskDashboardStack.Screen name='Add Feedback' component={AddFeedback} />
      <TaskDashboardStack.Screen
        name='User Dashboard'
        component={UserDashboard}
      />
    </TaskDashboardStack.Navigator>
  );
}

// TAB NAVIGATION CONFIG

const Tab = createBottomTabNavigator();

export default function App() {
  const [user, setUser] = useState();
  const [userData, setUserData] = useState({});
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

  //get user data
  useEffect(() => {
    if (user) {
      firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .get()
        .then((snapshot) => {
          if (snapshot.exists) {
            setUserData(snapshot.data());
          } else {
            console.log("User does not exist");
          }
        });
    }
  }, [user]);
  //console.log("User Data:", userData.role);

  if (initializeing) return null;

  //console.log("User:", user);

  if (!user) {
    return (
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <ExpertDashboardStack.Navigator>
            <ExpertDashboardStack.Screen name='Login' component={Login} />
            <ExpertDashboardStack.Screen
              name='Registration'
              component={Registration}
            />
          </ExpertDashboardStack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }

  if (userData.role == "expert") {
    return (
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName='Expert Dashboard'
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Expert Dashboard") {
                  iconName = "home-outline";
                } else if (route.name === "chats") {
                  iconName = "chatbubbles-outline";
                } else if (route.name === "Jobs") {
                  iconName = "md-calendar-outline";
                } else if (route.name === "Profile") {
                  iconName = "person-outline";
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}>
            <Tab.Screen
              name='Expert Dashboard'
              component={ExpertDashboardStackScreen}
            />
            <Tab.Screen name='chats' component={ExpertChatStackScreen} />
            <Tab.Screen name='Jobs' component={ExpertJobStackScreen} />
            <Tab.Screen name='Profile' component={ExpertProfileStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }

  if (userData.role == "client") {
  }
}
