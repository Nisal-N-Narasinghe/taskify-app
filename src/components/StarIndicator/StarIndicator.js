import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // You can use any icon library you prefer

const StarIndicator = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Icon
        name={i <= rating ? "star" : "star-o"} // Use solid or outline star icons based on the rating
        size={20}
        color='gold' // Color of the stars
        key={i}
      />
    );
  }

  return <View style={styles.container}>{stars}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default StarIndicator;
