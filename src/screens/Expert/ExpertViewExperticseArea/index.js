import React from "react";
import { View, Text, Image, ScrollView } from "react-native"; // Import ScrollView
import { Box, Button, Card, VStack } from "native-base";
import { styles } from "../../../styles/Expert/ExpertViewExperticseArea";
import {
  Availability,
  ExpertDetails,
  ExpertDiscription,
} from "../../../components/Expert/ExpertViewExperticseArea";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ExpertViewExperticseArea = () => {
  const slideImage = require("../../../../assets/cleaning.jpg");

  const handleEdit = () => {
    //console.log("Edit button pressed");
  };
  const handleDelete = () => {
    //console.log("Delete button pressed");
  };

  return (
    <Box safeArea flex={1} style={styles.container}>
      <ScrollView
        flex={1}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.centeredContent}>
        <Image source={slideImage} style={styles.photoSlider} />
        <ExpertDiscription discription='sample discription' />
        <ExpertDetails
          name='John Doe'
          field='Developer'
          experience={5}
          location='New York'
          phone='(123) 456-7890'
        />
        <Availability availability='Monday | Tuesday | Wednesday ' />
        <View style={styles.buttonContainer}>
          <Button
            style={{ ...styles.button, backgroundColor: "#149873" }}
            onPress={handleEdit}>
            <View style={styles.buttonContent}>
              <Text style={{ color: "white", marginRight: 10 }}>Edit</Text>
              <MaterialIcons name='edit' size={30} color='white' />
            </View>
          </Button>
          <Button
            style={{ ...styles.button, backgroundColor: "red" }}
            onPress={handleDelete}>
            <View style={styles.buttonContent}>
              <Text style={{ color: "white", marginRight: 10 }}>Delete</Text>
              <MaterialIcons name='delete' size={30} color='white' />
            </View>
          </Button>
        </View>
      </ScrollView>
    </Box>
  );
};

export default ExpertViewExperticseArea;
