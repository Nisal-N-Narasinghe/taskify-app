import { useNavigation } from "@react-navigation/native";
import { HStack, Text, VStack } from "native-base";
import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import the icon library

const TaskDashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Task Dashboard</Text>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <VStack>
          <View style={styles.cardContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Create Task")}
              style={styles.card}>
              <Icon name="plus-circle" size={40} color="#2ecc71" />
              <Text style={styles.cardTitle}>Create Task</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("My Tasks")}
              style={styles.card}>
              <Icon name="plus-circle" size={40} color="#2ecc71" />
              <Text style={styles.cardTitle}>View My Tasks</Text>
            </TouchableOpacity>
          </View>
        </VStack>
        <VStack>
          <View style={styles.cardContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("View Past Tasks")}
              style={styles.card}>
              <Icon name="plus-circle" size={40} color="#2ecc71" />
              <Text style={styles.cardTitle}>View Past Tasks</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Add Feedback")}
              style={styles.card}>
              <Icon name="plus-circle" size={40} color="#2ecc71" />
              <Text style={styles.cardTitle}>Add Feedback</Text>
            </TouchableOpacity>
          </View>
        </VStack>
        <VStack>
          <View style={styles.cardContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("All Completed Tasks")}
              style={styles.card}>
              <Icon name="plus-circle" size={40} color="#2ecc71" />
              <Text style={styles.cardTitle}>Completed Task</Text>
            </TouchableOpacity>
          </View>
        </VStack>
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

export default TaskDashboard;
