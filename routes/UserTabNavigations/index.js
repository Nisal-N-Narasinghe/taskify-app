import { Box } from "native-base";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { firebase } from "../../config";
import React from "react";

import TaskDashboard from "../../src/screens/User/TaskDashboard";

// Task Screens
import CreateTaskCategory from "../../src/screens/User/CreateTask/AddCategory";
import CreateTaskDetails from "../../src/screens/User/CreateTask/AddDetails";
import UserChat from "../../src/screens/User/Chat";
import CreateTaskImage from "../../src/screens/User/CreateTask/AddImages";
import CreateTaskSuccess from "../../src/screens/User/CreateTask/SuccessView";

import AddFeedback from "../../src/screens/User/AddFeedback";

import AllCompletedWorks from "../../src/screens/User/AllCompletedWorks";
import ViewOngoingTask from "../../src/screens/User/ViewTasks/ViewOngoingTasks/ViewOngoingTask";

import ViewPastTask from "../../src/screens/User/ViewTasks/ViewPastTasks/ViewPastTask";
import ViewImage from "../../src/screens/User/CreateTask/ViewImages";

//  STACK NAVIGATION CONFIG
import ViewMyTasks from "../../src/screens/User/ViewTasks/ViewMyTasks";

import ViewTask from "../../src/screens/User/ViewTasks/ViewMyTasks/ViewMyTask";
import ViewPastTasks from "../../src/screens/User/ViewTasks/ViewPastTasks";

import UserDashboard from "../../src/screens/User/UserDashboard";
import ViewSingleOngoingJob from "../../src/screens/Expert/ViewJobs/ViewSingleOngoingJob";

//  STACK NAVIGATION CONFIG
const TaskDashboardStack = createNativeStackNavigator();
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

//USER STACK NAVIGATION
export function TaskDashboardStackScreen() {
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

export function UserDashboardStackScreen() {
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

export function UserChatStackScreen() {
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

export function UserTaskStackScreen() {
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
