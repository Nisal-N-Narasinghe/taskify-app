import { useNavigation } from "@react-navigation/native";
import { Box, Button, Stack, Text } from "native-base";
import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import the icon library

const Dashboard = ({ navigation }) => {
  const navigateToExpertProfile = () => {
    // Navigate to Expert profile component
    navigation.navigate("ExpertProfile1");
  };

  const navigateToCreateTask = () => {
    // Navigate to ApproveOrders component
    navigation.navigate("Create Task");
  };

  const navigateToAddNewExpert = () => {
    // Navigate to ApproveOrders component
    navigation.navigate("AddNewExpertPage");
  };

  const ViewSingleExpert = () => {
    // Navigate to ApproveOrders component
    navigation.navigate("ViewSingleExpertPage");
  };

  const navigateToAddFeedback = () => {
    // Navigate to ApproveOrders component
    navigation.navigate("AddFeedbackPage");
  };

  const navigateToUserChat = () => {
    navigation.navigate("User Chat");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.heading}>Main Dashboard</Text>
        <View style={styles.cardContainer}>
          <TouchableOpacity
            onPress={navigateToExpertProfile}
            style={styles.card}>
            <Icon name="user" size={40} color="#3498db" />
            <Text style={styles.cardTitle}>Expert Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToCreateTask} style={styles.card}>
            <Icon name="plus-circle" size={40} color="#2ecc71" />
            <Text style={styles.cardTitle}>Create Task</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToUserChat} style={styles.card}>
            <Icon name="plus-circle" size={40} color="#2ecc71" />
            <Text style={styles.cardTitle}>User Chat</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
});

export default Dashboard;
