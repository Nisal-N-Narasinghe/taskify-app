import { NativeBaseProvider, View } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../theme";
import React, { useState, useEffect } from "react";
import { firebase } from "../config";
// Task Screens
import CreateTaskCategory from "../src/screens/User/CreateTask/AddCategory";

import {
  ExpertChatStackScreen,
  ExpertJobStackScreen,
  ExpertProfileStackScreen,
} from "./ExpertTabNavigations";
import {
  UserChatStackScreen,
  UserDashboardStackScreen,
  UserTaskStackScreen,
} from "./UserTabNavigations";

// TAB NAVIGATION CONFIG
const Tab = createBottomTabNavigator();

export function TabNavigations() {
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
