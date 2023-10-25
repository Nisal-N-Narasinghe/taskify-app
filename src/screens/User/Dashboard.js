import { useNavigation } from "@react-navigation/native";
import { Box, Button, Stack, Text, VStack } from "native-base";
import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.heading}>Main Dashboard</Text>
        <VStack>
          <View style={styles.cardContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Add New Expert")}
              style={styles.card}>
              <Ionicons name="person-add" size={40} color="#3498db" />
              <Text style={styles.cardTitle}>Add New Expert</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Expert Profile")}>
              <Ionicons name="person-circle" size={40} color="#2ecc71" />
              <Text style={styles.cardTitle}>Expert Profile</Text>
            </TouchableOpacity>
          </View>
        </VStack>
        <VStack>
          <View style={styles.cardContainer}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Upcoming Jobs")}>
              <Ionicons name="calendar" size={40} color="#2ecc71" />
              <Text style={styles.cardTitle}>Upcoming Jobs</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("User Chat")}>
              <Ionicons name="chatbubble-sharp" size={40} color="#2ecc71" />
              <Text style={styles.cardTitle}>User Chat</Text>
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

export default Dashboard;
