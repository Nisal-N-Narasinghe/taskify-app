import React from "react";
import { Box, Text } from "native-base";
import { styles } from "../../../styles/Expert/ExpertViewExpertiseArea";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export const ExpertDetails = ({ name, field, experience, location, phone }) => {
  return (
    <Box style={styles.ExpertDetails}>
      <Box style={styles.row}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{name}</Text>
      </Box>
      <Box style={styles.row}>
        <Text style={styles.label}>Field:</Text>
        <Text style={styles.value}>{field}</Text>
      </Box>
      <Box style={styles.row}>
        <Text style={styles.label}>Experience:</Text>
        <Text style={styles.value}>{experience} years</Text>
      </Box>
      <Box style={styles.row}>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.value}>{location}</Text>
      </Box>
      <Box style={styles.row}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>{phone}</Text>
      </Box>
    </Box>
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
      <Box style={{ flexDirection: "row" }}>
        <MaterialIcons
          name='timer'
          size={30}
          color='gray'
          style={{ marginRight: 10 }}
        />
        <Text style={{ marginTop: 5 }}>Availability: {availability}</Text>
      </Box>
    </Box>
  );
};
