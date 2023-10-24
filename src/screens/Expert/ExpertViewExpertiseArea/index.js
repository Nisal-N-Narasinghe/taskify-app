import React, { useState } from "react";
import { Box, Button, Text, Image, ScrollView, VStack } from "native-base";
import { styles } from "../../../styles/Expert/ExpertViewExpertiseArea";
import {
  Availability,
  ExpertDetails,
  ExpertDiscription,
} from "../../../components/Expert/ExpertViewExpertiseArea";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import StepIndicator from "../../../components/common/StepIndicators";
import Swiper from "react-native-swiper"; // Import Swiper component
import ImageSlider from "../../../components/common/ImageSlider";
import ImageSliderIndicator from "../../../components/common/ImageSliderIndicator";
const ExpertViewExpertiseArea = () => {
  const images = [
    require("../../../../assets/cleaning.jpg"),
    require("../../../../assets/computer.jpg"),
    require("../../../../assets/gardening.jpg"),
    require("../../../../assets/plumber.jpg"),
    require("../../../../assets/dog.jpg"),
  ];
  const [currentStep, setCurrentStep] = useState(0);

  const handleEdit = () => {
    //console.log("Edit button pressed");
  };
  const handleDelete = () => {
    //console.log("Delete button pressed");
  };
  const handleSwiperIndexChanged = (index) => {
    setCurrentStep(index + 1);
  };

  return (
    <Box style={styles.container}>
      <ScrollView flex={1} showsVerticalScrollIndicator={true}>
        <Box safeArea flex={1}>
          <VStack>
            <ImageSlider
              images={images}
              onIndexChanged={handleSwiperIndexChanged}
            />
            <ImageSliderIndicator currentStep={currentStep} />
            <ExpertDiscription discription='sample discription' />
            <ExpertDetails
              name='John Doe'
              field='Developer'
              experience={5}
              location='New York'
              phone='(123) 456-7890'
            />
            <Availability availability='Monday | Tuesday | Wednesday ' />
          </VStack>

          <Box justifyContent='center' alignItems='center'>
            <Button
              style={styles.button}
              onPress={handleEdit}
              background={"#149873"}
              startIcon={<MaterialIcons name='edit' size={24} color='white' />}>
              <Text style={styles.buttonContent}>Edit</Text>
            </Button>
            <Button
              style={styles.button}
              onPress={handleDelete}
              background={"red.500"}
              startIcon={
                <MaterialIcons name='delete' size={24} color='white' />
              }>
              <Text style={styles.buttonContent}>Delete</Text>
            </Button>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default ExpertViewExpertiseArea;
