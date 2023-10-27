import {
  Box,
  Button,
  HStack,
  Heading,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import ImageSlider from "../../../../../components/common/ImageSlider";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import ImageSliderIndicator from "../../../../../components/common/ImageSliderIndicator";
import { Ionicons } from "@expo/vector-icons";
import StatusSlider from "../../../../../components/common/StatusSlider";

const ViewPastTask = () =>
  // taskTitle,
  // location
  // postedDate
  // description
  // minBudget
  // maxBudget
  // amount
  // timePeriod

  {
    const navigation = useNavigation();
    const [currentStep, setCurrentStep] = useState(0);

    const images = [
      require("../../../../../../assets/cleaning.jpg"),
      require("../../../../../../assets/computer.jpg"),
      require("../../../../../../assets/gardening.jpg"),
      require("../../../../../../assets/plumber.jpg"),
      require("../../../../../../assets/dog.jpg"),
    ];

    const handleChat = () => {
      navigation.navigate("User Chat");
    };

    const handleSwiperIndexChanged = (index) => {
      setCurrentStep(index + 1);
    };

    return (
      <ScrollView padding={3} flex={1} showsVerticalScrollIndicator={true}>
        <Box safeArea>
          <Heading size="lg">
            Title
            {/* {taskTitle} */}
          </Heading>

          <HStack
            marginTop={6}
            marginBottom={6}
            justifyContent={"space-between"}
          >
            <HStack alignItems={"center"}>
              <Ionicons
                name="location-outline"
                size={24}
                color="black"
                marginRight={4}
              />
              <Text fontSize={"lg"}>
                Location
                {/* location */}
              </Text>
            </HStack>
            <VStack>
              <HStack alignItems={"center"}>
                <Ionicons
                  name="calendar-outline"
                  size={24}
                  color="black"
                  marginRight={4}
                />
                <Text fontSize={"lg"}>
                  Posted date
                  {/* {postedDate} */}
                </Text>
              </HStack>
            </VStack>
          </HStack>
          <HStack>
            <ImageSlider
              images={images}
              onIndexChanged={handleSwiperIndexChanged}
            />
          </HStack>
          <ImageSliderIndicator
            currentStep={currentStep}
            totalStep={images.length}
          />
          <HStack marginTop={2}>
            <Text fontSize={"lg"}>
              Description
              {/* {description} */}
            </Text>
          </HStack>
          <HStack justifyContent={"space-between"} marginTop={6}>
            <Text fontSize={"lg"}>
              Min Budget:
              {/* {budget} */}
            </Text>
            <Text fontSize={"lg"}>
              2000 LKR
              {/* {amount} */}
            </Text>
          </HStack>
          <HStack justifyContent={"space-between"} marginTop={6}>
            <Text fontSize={"lg"}>
              Max Budget:
              {/* {budget} */}
            </Text>
            <Text fontSize={"lg"}>
              2000 LKR
              {/* {amount} */}
            </Text>
          </HStack>
          <HStack justifyContent={"space-between"} marginTop={6}>
            <VStack>
              <Text fontSize={"lg"}>Time Period:</Text>
            </VStack>
            <VStack>
              <Text fontSize={"lg"}>
                7 days
                {/* timePeriod */}
              </Text>
            </VStack>
          </HStack>
          <HStack marginTop={4} marginBottom={4}>
            <StatusSlider disableStatus={true} statusValue={30} />
          </HStack>
          <Box>
            <Button
              justifyContent={"center"}
              h={10}
              rounded={100}
              p={0}
              px={6}
              //   colorScheme={"emerald"}
              endIcon={
                <Ionicons name="arrow-forward" size={24} color="white" />
              }
              onPress={handleChat}
              marginTop={1}
              bgColor={"#272727"}
            >
              <Text fontSize={17} fontWeight="semibold" color={"primary.white"}>
                Chat with Expert
              </Text>
            </Button>
          </Box>
        </Box>
      </ScrollView>
    );
  };

export default ViewPastTask;
