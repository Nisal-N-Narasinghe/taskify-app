import {
  AspectRatio,
  Box,
  Image,
  Text,
  HStack,
  Heading,
  VStack,
  Input,
  Center,
  Button,
  FormControl,
  Link,
} from "native-base";
import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { firebase } from "../../../config";
import { Ionicons } from "@expo/vector-icons";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  registerUser = async (email, password, firstName, lastName) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: "https://taskify-6ba79.firebaseapp.com",
          })
          .then(() => {
            alert("Email Verification Sent");
          })
          .catch((error) => {
            alert(error.message);
          })
          .then(() => {
            firebase
              .firestore()
              .collection("users")
              .doc(firebase.auth().currentUser.uid)
              .set({
                firstName: firstName,
                lastName: lastName,
                email: email,
                role: "user",
              });
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Center w="full">
      <Box safeArea p="2" w="full" padding={3}>
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold">
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs">
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>First Name</FormControl.Label>
            <Input
              placeholder="First Name"
              onChangeText={(firstName) => setFirstName(firstName)}
              autoCorrect={false}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Last Name</FormControl.Label>
            <Input
              placeholder="Last Name"
              onChangeText={(lastName) => setLastName(lastName)}
              autoCorrect={false}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              placeholder="Email"
              onChangeText={(email) => setEmail(email)}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              placeholder="Password"
              onChangeText={(password) => setPassword(password)}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
            />
          </FormControl>
          <Button
            // justifyContent={"left"}
            mt={6}
            h={10}
            rounded={100}
            p={0}
            px={6}
            colorScheme={"emerald"}
            endIcon={<Ionicons name="arrow-forward" size={24} color="white" />}
            onPress={() => registerUser(email, password, firstName, lastName)}>
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  Textinput: {
    paddingTop: 20,
    paddingBottom: 10,
    width: 400,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    marginTop: 50,
    width: 250,
    height: 70,
    backgroundColor: "#026efd",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
