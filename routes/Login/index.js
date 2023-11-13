import { NativeBaseProvider, View } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { theme } from "../../theme";
import { firebase } from "../../config";
import React, { useState, useEffect } from "react";

import Login from "../../src/screens/Login/Login";
import Registration from "../../src/screens/Login/Registration";

const LoginStack = createNativeStackNavigator();

export function Login() {
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
          <LoginStack.Navigator>
            <LoginStack.Screen name='Login' component={Login} />
            <LoginStack.Screen name='Registration' component={Registration} />
          </LoginStack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}
