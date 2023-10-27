import {
  AspectRatio,
  Box,
  Image,
  Text,
  Stack,
  HStack,
  Heading,
  VStack,
  Input,
  Icon,
  Center,
  Select,
  CheckIcon,
  Radio,
  NativeBaseProvider,
  extendTheme,
  StackDivider,
  Button,
  Pressable,
  Flex,
  Spacer,
  Badge,
  Alert,
  Menu,
  HamburgerIcon,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { firebase } from "../../../config";

const Dashboard = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setFirstName(snapshot.data());
        } else {
          console.log("User does not exist");
        }
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
        Hello {firstName.firstName}
      </Text>
      <Box w='90%' alignItems='flex-start'>
        <Menu
          w='190'
          trigger={(triggerProps) => {
            return (
              <Pressable
                accessibilityLabel='More options menu'
                {...triggerProps}>
                <HamburgerIcon />
              </Pressable>
            );
          }}>
          <Button
            onPress={() => {
              firebase.auth().signOut();
            }}>
            Sign Out
          </Button>
        </Menu>
      </Box>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.heading}>Main Dashboard</Text>
        <VStack>
          <View style={styles.cardContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Add New Expert")}
              style={styles.card}>
              <Ionicons name='person-add' size={40} color='#3498db' />
              <Text style={styles.cardTitle}>Add New Expert</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Expert Profile")}>
              <Ionicons name='person-circle' size={40} color='#2ecc71' />
              <Text style={styles.cardTitle}>Expert Profile</Text>
            </TouchableOpacity>
          </View>
        </VStack>
        <VStack>
          <View style={styles.cardContainer}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Upcoming Jobs")}>
              <Ionicons name='calendar' size={40} color='#2ecc71' />
              <Text style={styles.cardTitle}>Upcoming Jobs</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("User Chat")}>
              <Ionicons name='chatbubble-sharp' size={40} color='#2ecc71' />
              <Text style={styles.cardTitle}>User Chat</Text>
            </TouchableOpacity>
          </View>
        </VStack>
        <VStack>
          <View style={styles.cardContainer}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Ongoing Job")}>
              <Ionicons name='watch' size={40} color='#2ecc71' />
              <Text style={styles.cardTitle}>Ongoing Job</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Expert Dashboard")}>
              <Ionicons name='watch' size={40} color='#2ecc71' />
              <Text style={styles.cardTitle}>Expert Dashboard</Text>
            </TouchableOpacity>
          </View>
        </VStack>
      </ScrollView>
      {/*       <TouchableOpacity
        onPress={() => {
          firebase.auth().signOut();
        }}
        style={styles.button}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Sign Out</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 0,
    backgroundColor: "#ffffff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#3498db",
    textAlign: "center",
  },
  contentContainer: {
    flexGrow: 1,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  card: {
    flex: 1,
    height: 150,
    backgroundColor: "#d8e4fa",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#f1f1f1",
    padding: 15,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#2c3e50",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "#3498db",
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

export default Dashboard;
