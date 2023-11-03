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
import React, { useState } from "react";
import ImageSlider from "../../../../components/common/ImageSlider";
import { useNavigation } from "@react-navigation/native";
import ImageSliderIndicator from "../../../../components/common/ImageSliderIndicator";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../../../styles/Expert/ViewUpcomingJobs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CustomSlider from "../../../../components/common/CustomeSlider";
const ViewSingleUpcommingJob = () => {
  const navigation = useNavigation();
  const statusOptions = ["Upcomming", "Ongoing"];
  const [selectedStatus, setSelectedStatus] = useState("UpComming");
  const handleStatusChange = (newStatus) => {
    setSelectedStatus(newStatus);
  };

  const [currentStep, setCurrentStep] = useState(0);
  const images = [
    require("../../../../../assets/Expertimages/GardenPlanning/gardenPlanning1.jpeg"),
  ];

  const handleSwiperIndexChanged = (index) => {
    setCurrentStep(index + 1);
  };

  return (
    <ScrollView
      padding={3}
      flex={1}
      showsVerticalScrollIndicator={true}
      background={"white"}>
      <Box safeArea background={"white"}>
        <Heading size='md'>
          Garden Planning Job
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
              Malabe
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
                30/10/2023
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
            I have a vision for my outdoor space and am seeking professional
            assistance to turn it into a beautiful and functional garden.{" "}
          </Text>
        </HStack>
        <Box style={styles.bottomBox}>
          <HStack justifyContent={"space-between"} marginTop={6}>
            <Text style={styles.bottomBoxHeddingText}>Budget</Text>
            <Text style={styles.bottomBoxText}>5000 LKR</Text>
          </HStack>
          <HStack justifyContent={"space-between"} marginTop={6}>
            <Text style={styles.bottomBoxHeddingText}>Job</Text>
            <Text style={styles.bottomBoxText}>In 2 days</Text>
          </HStack>
          <HStack justifyContent={"space-between"} marginTop={6}>
            <Text style={styles.bottomBoxHeddingText}>Status</Text>
            <Text style={styles.bottomBoxText}>{selectedStatus}</Text>
          </HStack>
          <CustomSlider
            options={statusOptions}
            initialValue={selectedStatus}
            onChange={handleStatusChange}
          />
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

export default ViewSingleUpcommingJob;
