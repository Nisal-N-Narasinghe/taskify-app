import React from "react";
import { View, Text } from "react-native";
import { Box, Card } from "native-base";
import { styles } from "../../../styles/Expert/ExpertViewExperticseArea";

export const ExpertDetails = ({ name, field, experience, location, phone }) => {
  return (
    <Box borderRadius={8} backgroundColor='white' style={styles.card}>
      <Text>Name: {name}</Text>
      <Text>Field: {field}</Text>
      <Text>Experience: {experience} years</Text>
      <Text>Location: {location}</Text>
      <Text>Phone: {phone}</Text>
    </Box>
  );
};
