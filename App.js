import { Box, Button, NativeBaseProvider, View } from "native-base";
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
import ViewImage from "./src/screens/User/CreateTask/ViewImages";

//  STACK NAVIGATION CONFIG
import ViewMyTasks from "./src/screens/User/ViewTasks/ViewMyTasks";
import ExpertJobHistory from "./src/screens/Expert/ExpertJobHistory";
import ExpertViewExpertiseArea from "./src/screens/Expert/ExpertViewExpertiseArea";
import ViewTask from "./src/screens/User/ViewTasks/ViewMyTasks/ViewMyTask";
import ViewPastTasks from "./src/screens/User/ViewTasks/ViewPastTasks";
import ExpertViewSingleJobHistoryItem from "./src/screens/Expert/ExpertJobHistory/ExpertViewSingleJobHistoryItem";
import ViewJobs from "./src/screens/Expert/ViewJobs";
import Login from "./src/screens/Login/Login";
import Registration from "./src/screens/Login/Registration";
import AllExpertArea from "./src/screens/Expert/AllExpertArea";
import ViewSingleUpcommingJob from "./src/screens/Expert/ViewJobs/ViewSingleUpcommingJob";
import ExpertDashboard from "./src/screens/Expert/ExpertDashboard";
import UserDashboard from "./src/screens/User/UserDashboard";
import ViewSingleOngoingJob from "./src/screens/Expert/ViewJobs/ViewSingleOngoingJob";

// Expert screens
import ExpertChat from "./src/screens/Expert/Chat";

// Header Button
import { useNavigation } from "@react-navigation/native";

//  STACK NAVIGATION CONFIG
const TaskDashboardStack = createNativeStackNavigator();
const ExpertDashboardStack = createNativeStackNavigator();
const ExpertChatStack = createNativeStackNavigator();
const ExpertJobStack = createNativeStackNavigator();
const ExpertProfileStack = createNativeStackNavigator();
const UserDashboardStack = createNativeStackNavigator();
const UserTaskStack = createNativeStackNavigator();
const UserChatStack = createNativeStackNavigator();

function LogoutButtonHeader() {
  return (
    <Box>
      <Ionicons
        name='log-out-outline'
        size={38}
        color='#149873'
        onPress={() => {
          firebase.auth().signOut();
        }}
      />
    </Box>
  );
}

//EXPERT STACK NAVIGATION
function ExpertDashboardStackScreen() {
  return (
    <ExpertDashboardStack.Navigator>
      <ExpertDashboardStack.Screen
        name='Expert Dashboard'
        component={ExpertDashboard}
        options={{
          headerTitle: "Expert Dashboard",
          headerRight: () => <LogoutButtonHeader />,
        }}
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
      <ExpertJobStack.Screen name='All Jobs' component={ViewJobs} />
      <ExpertJobStack.Screen
        name='Upcoming Job'
        component={ViewSingleUpcommingJob}
      />
      <ExpertJobStack.Screen name='Ongoing Jobs' component={ViewOngoingJob} />
      <ExpertJobStack.Screen
        name='Ongoing Job'
        component={ViewSingleOngoingJob}
      />
    </ExpertJobStack.Navigator>
  );
}

function ExpertProfileStackScreen() {
  return (
    <ExpertProfileStack.Navigator>
      <ExpertProfileStack.Screen
        name='Expert Profile'
        component={ExpertProfile}
        options={{
          headerTitle: "Expert Profile",
          headerRight: () => <LogoutButtonHeader />,
        }}
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
      <ExpertProfileStack.Screen
        name='All Expert Area'
        component={AllExpertArea}
      />
    </ExpertProfileStack.Navigator>
  );
}

function ExpertChatStackScreen() {
  return (
    <ExpertChatStack.Navigator>
      <ExpertChatStack.Screen name='Expert Chat' component={ExpertChat} />
    </ExpertChatStack.Navigator>
  );
}

//USER STACK NAVIGATION
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
      <TaskDashboardStack.Screen name='View Task Image' component={ViewImage} />
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
    </TaskDashboardStack.Navigator>
  );
}

function UserDashboardStackScreen() {
  return (
    <UserDashboardStack.Navigator>
      <UserDashboardStack.Screen
        name='User Dashboard'
        component={UserDashboard}
        options={{
          headerTitle: "User Dashboard",
          headerRight: () => <LogoutButtonHeader />,
        }}
      />
    </UserDashboardStack.Navigator>
  );
}

function UserChatStackScreen() {
  return (
    <UserChatStack.Navigator>
      <UserChatStack.Screen name='User Chat' component={UserChat} />
      <UserChatStack.Screen
        name='Ongoing Job'
        component={ViewSingleOngoingJob}
      />
    </UserChatStack.Navigator>
  );
}

function UserTaskStackScreen() {
  return (
    <UserTaskStack.Navigator>
      <UserTaskStack.Screen name='Task Dashboard' component={TaskDashboard} />
      <UserTaskStack.Screen name='Create Task' component={CreateTaskCategory} />
      <UserTaskStack.Screen name='Task Details' component={CreateTaskDetails} />
      <UserTaskStack.Screen
        name='All Completed Tasks'
        component={AllCompletedWorks}
      />
      <UserTaskStack.Screen name='Task Image' component={CreateTaskImage} />
      <UserTaskStack.Screen name='Task Success' component={CreateTaskSuccess} />
      <UserTaskStack.Screen name='My Tasks' component={ViewMyTasks} />
      <UserTaskStack.Screen name='View Task' component={ViewTask} />
      <UserTaskStack.Screen name='View Past Tasks' component={ViewPastTasks} />
      <UserTaskStack.Screen name='View Past Task' component={ViewPastTask} />
      <UserTaskStack.Screen
        name='View Ongoing Task'
        component={ViewOngoingTask}
      />
      <UserTaskStack.Screen name='Add Feedback' component={AddFeedback} />
    </UserTaskStack.Navigator>
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

  //Login and Registration
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

  //Expert Tab Navigation
  if (userData.role == "expert") {
    return (
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName='Expert Dashboard Screen'
            screenOptions={({ route }) => ({
              tabBarStyle: {
                paddingTop: 12,
              },
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ focused, color, size }) => {
                const tabStyle = {
                  marginBottom: 12,
                  borderRadius: 12,
                  width: 44,
                  height: 44,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: focused ? "#149873" : "transparent",
                };
                const iconStyle = {
                  color: focused ? "white" : color,
                };
                let iconName;

                if (route.name === "Expert Dashboard Screen") {
                  iconName = "home-outline";
                } else if (route.name === "chats") {
                  iconName = "chatbubbles-outline";
                } else if (route.name === "Jobs") {
                  iconName = "md-calendar-outline";
                } else if (route.name === "Profile") {
                  iconName = "person-outline";
                }
                return (
                  <View style={tabStyle}>
                    <Ionicons
                      name={iconName}
                      size={size}
                      color={iconStyle.color}
                    />
                  </View>
                );
              },
            })}>
            <Tab.Screen
              name='Expert Dashboard Screen'
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

  //User Tab Navigation
  if (userData.role == "client") {
    return (
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName='User Dashboard Screen'
            screenOptions={({ route }) => ({
              tabBarStyle: {
                paddingTop: 12,
              },
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ focused, color, size }) => {
                const tabStyle = {
                  marginBottom: 12,
                  borderRadius: 12,
                  width: 44,
                  height: 44,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: focused ? "#149873" : "transparent",
                };
                const iconStyle = {
                  color: focused ? "white" : color,
                };
                let iconName;

                if (route.name === "User Dashboard Screen") {
                  iconName = "home-outline";
                } else if (route.name === "chats") {
                  iconName = "chatbubbles-outline";
                } else if (route.name === "Create Task") {
                  iconName = "create-outline";
                } else if (route.name === "Tasks") {
                  iconName = "hammer-outline";
                }
                return (
                  <View style={tabStyle}>
                    <Ionicons
                      name={iconName}
                      size={size}
                      color={iconStyle.color}
                    />
                  </View>
                );
              },
            })}>
            <Tab.Screen
              name='User Dashboard Screen'
              component={UserDashboardStackScreen}
            />
            <Tab.Screen name='chats' component={UserChatStackScreen} />
            <Tab.Screen name='Create Task' component={CreateTaskCategory} />
            <Tab.Screen name='Tasks' component={UserTaskStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}
