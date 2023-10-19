import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StepIndicator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <View style={styles.circle}></View>
      <View style={styles.circle}></View>
      <View style={styles.circle}></View>
      <View style={styles.circle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    height: 2,
    width: 80, // Adjust the length of the line as needed
    backgroundColor: "black",
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "black",
    margin: 10, // Adjust the spacing between circles as needed
  },
});

export default StepIndicator;
