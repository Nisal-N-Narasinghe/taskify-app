import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import ImageSlider from "../../../../components/common/ImageSlider";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import ImageSliderIndicator from "../../../../components/common/ImageSliderIndicator";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../../../styles/Expert/ViewUpcomingJobs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const ViewSingleOngoingJob = () => {
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(0);

  const images = [
    require("../../../../../assets/Expertimages/HousePlanning/housePlane3D2.jpg"),
  ];

  const handleSwiperIndexChanged = (index) => {
    setCurrentStep(index + 1);
  };

  return (
    <ScrollView padding={3} flex={1} showsVerticalScrollIndicator={true}>
      <Box safeArea>
        <Heading size='md'>
          House Planning
          {/* {taskTitle} */}
        </Heading>

        <HStack marginTop={6} marginBottom={6} justifyContent={"space-between"}>
          <HStack alignItems={"center"}>
            <Ionicons
              name='location-outline'
              size={24}
              color='black'
              marginRight={4}
            />
            <Text>
              Battaaramulla
              {/* location */}
            </Text>
          </HStack>
          <VStack>
            <HStack alignItems={"center"}>
              <Ionicons
                name='calendar-outline'
                size={24}
                color='black'
                marginRight={4}
              />
              <Text>
                28/10/2023
                {/* {postedDate} */}
              </Text>
            </HStack>
          </VStack>
        </HStack>
        <Box pl={4}>
          <ImageSlider
            images={images}
            onIndexChanged={handleSwiperIndexChanged}
          />

          <ImageSliderIndicator
            currentStep={currentStep}
            totalStep={images.length}
          />
        </Box>
        <HStack marginTop={6}>
          <Text style={styles.ratingsFrameText}>
            I need a house plan for my new house. I have a land of 20 perches. I
            need suitable plan for that land.
          </Text>
        </HStack>
        <Box style={styles.bottomBox}>
          <HStack justifyContent={"space-between"} marginTop={6}>
            <Text style={styles.bottomBoxHeddingText}>Budget</Text>
            <Text style={styles.bottomBoxText}>6,500 LKR</Text>
          </HStack>
          <HStack justifyContent={"space-between"} marginTop={6}>
            <Text style={styles.bottomBoxHeddingText}>Status</Text>
            <Text style={styles.bottomBoxText}>Ongoing</Text>
          </HStack>

          <Button
            style={styles.chatButton}
            onPress={() => navigation.navigate("Chat")}
            background={"#149873"}
            endIcon={<MaterialIcons name='chat' size={24} color='white' />}>
            <Text style={styles.buttonContent}>Chat</Text>
          </Button>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default ViewSingleOngoingJob;
