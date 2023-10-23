import React from "react";
import { Box, Button, Text, Image, ScrollView, VStack } from "native-base";
import { styles } from "../../../styles/Expert/ExpertViewExpertiseArea";
import {
  Availability,
  ExpertDetails,
  ExpertDiscription,
} from "../../../components/Expert/ExpertViewExpertiseArea";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ExpertViewExpertiseArea = () => {
  const slideImage = require("../../../../assets/cleaning.jpg");

  const handleEdit = () => {
    //console.log("Edit button pressed");
  };
  const handleDelete = () => {
    //console.log("Delete button pressed");
  };

  return (
    <Box style={styles.container}>
      <ScrollView flex={1} showsVerticalScrollIndicator={true}>
        <Box safeArea flex={1}>
          <VStack>
            <Image
              source={slideImage}
              alt='slideImage'
              style={styles.photoSlider}
            />
            <ExpertDiscription discription='sample discription' />
            <ExpertDetails
              name='John Doe'
              field='Developer'
              experience={5}
              location='New York'
              phone='(123) 456-7890'
            />
            <Availability availability='Monday | Tuesday | Wednesday ' />
            <Box justifyContent={"center"} alignItems={"center"}>
              <Box style={styles.buttonContainer}>
                <Button
                  style={{ ...styles.button, backgroundColor: "#149873" }}
                  onPress={handleEdit}>
                  <Box style={styles.buttonContent}>
                    <Text style={{ color: "white", marginRight: 10 }}>
                      Edit
                    </Text>
                    <MaterialIcons name='edit' size={30} color='white' />
                  </Box>
                </Button>
                <Button
                  style={{ ...styles.button, backgroundColor: "red" }}
                  onPress={handleDelete}>
                  <Box style={styles.buttonContent}>
                    <Text style={{ color: "white", marginRight: 10 }}>
                      Delete
                    </Text>
                    <MaterialIcons name='delete' size={30} color='white' />
                  </Box>
                </Button>
              </Box>
            </Box>
          </VStack>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default ExpertViewExpertiseArea;
