import React from "react";
import { View, Text } from "react-native";
import { Box, Card } from "native-base";
import { styles } from "../../../styles/Expert/ExpertViewExperticseArea";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export const ExpertDetails = ({ name, field, experience, location, phone }) => {
  return (
    <View style={styles.ExpertDetails}>
      <View style={styles.row}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Field:</Text>
        <Text style={styles.value}>{field}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Experience:</Text>
        <Text style={styles.value}>{experience} years</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.value}>{location}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>{phone}</Text>
      </View>
    </View>
  );
};

export const ExpertDiscription = ({ discription }) => {
  return (
    <Box
      borderRadius={8}
      backgroundColor='gray.200'
      alignItems='center'
      justifyContent='center'
      style={styles.ExpertDiscription}>
      <Text>Discription: {discription}</Text>
    </Box>
  );
};

export const Availability = ({ availability }) => {
  return (
    <Box
      borderRadius={8}
      alignItems='center'
      justifyContent='center'
      style={styles.Availability}>
      <View style={{ flexDirection: "row" }}>
        <MaterialIcons
          name='timer'
          size={30}
          color='gray'
          style={{ marginRight: 10 }}
        />
        <Text style={{ marginTop: 5 }}>Availability: {availability}</Text>
      </View>
    </Box>
  );
};
