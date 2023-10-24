import React from "react";
import { View, StyleSheet } from "react-native";

const StepIndicator = ({ currentStep }) => {
  const totSteps = 5;
  const circles = [];

  for (let i = 0; i < totSteps; i++) {
    //add background color
    const circleStyle = {
      ...styles.circle,
      backgroundColor: i < currentStep ? "black" : "grey",
    };

    circles.push(<View key={i} style={circleStyle} />);
  }

  return <View style={styles.container}>{circles}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    margin: 10, // Adjust the spacing between circles as needed
  },
});

export default StepIndicator;
