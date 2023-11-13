import { Box } from "native-base";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { firebase } from "../../config";
import React from "react";

import AddNewExpert from "../../src/screens/Expert/AddNewExpert";
import ViewSingleExpert from "../../src/screens/Expert/ViewSingleExpert";

import ExpertProfile from "../../src/screens/Expert/ExpertProfile";

import ViewOngoingJob from "../../src/screens/Expert/ViewOngoingJobs/ViewOngoingJob";

import ExpertJobHistory from "../../src/screens/Expert/ExpertJobHistory";
import ExpertViewExpertiseArea from "../../src/screens/Expert/ExpertViewExpertiseArea";

import ExpertViewSingleJobHistoryItem from "../../src/screens/Expert/ExpertJobHistory/ExpertViewSingleJobHistoryItem";
import ViewJobs from "../../src/screens/Expert/ViewJobs";
import AllExpertArea from "../../src/screens/Expert/AllExpertArea";
import ViewSingleUpcommingJob from "../../src/screens/Expert/ViewJobs/ViewSingleUpcommingJob";
import ExpertDashboard from "../../src/screens/Expert/ExpertDashboard";

import ViewSingleOngoingJob from "../../src/screens/Expert/ViewJobs/ViewSingleOngoingJob";

// Expert screens
import ExpertChat from "../../src/screens/Expert/Chat";

const ExpertDashboardStack = createNativeStackNavigator();
const ExpertChatStack = createNativeStackNavigator();
const ExpertJobStack = createNativeStackNavigator();
const ExpertProfileStack = createNativeStackNavigator();

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

export function ExpertDashboardStackScreen() {
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

export function ExpertJobStackScreen() {
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

export function ExpertProfileStackScreen() {
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

export function ExpertChatStackScreen() {
  return (
    <ExpertChatStack.Navigator>
      <ExpertChatStack.Screen name='Expert Chat' component={ExpertChat} />
    </ExpertChatStack.Navigator>
  );
}
