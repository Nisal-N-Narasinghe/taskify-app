// ProfileScreen.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button, Card } from "native-base";
import { styles } from "../../../styles/Expert/ExpertViewExperticseArea";
import slideImage from "../../../../assets/cleaning.jpg";
import { ExpertDetails } from "../../../components/Expert/ExpertViewExperticseArea";

const ExpertViewExperticseArea = () => {
  return (
    <View style={styles.container}>
      <Image source={slideImage} style={styles.photoSlider} />

      {/* Middle: Card with Details */}
      <ExpertDetails
        name='John Doe'
        field='Developer'
        experience={5}
        location='New York'
        phone='(123) 456-7890'
      />

      {/* Bottom: Edit and Delete Buttons */}
      <View style={styles.buttonContainer}>
        <Button style={styles.button} onPress={() => handleEdit()}>
          <Text>Edit</Text>
        </Button>
        <Button style={styles.button} onPress={() => handleDelete()}>
          <Text>Delete</Text>
        </Button>
      </View>
    </View>
  );
};

export default ExpertViewExperticseArea;
