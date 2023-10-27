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
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import ImageSliderIndicator from "../../../../../components/common/ImageSliderIndicator";
import { Ionicons } from "@expo/vector-icons";
import StatusSlider from "../../../../../components/common/StatusSlider";
import { firebase } from "../../../../../../config";
import { useEffect } from "react";

const ViewTask = () => {
  const route = useRoute();
  const taskId = route.params.taskId;
  console.log("Task ID", taskId);

  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(0);

  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [createdDate, setCreatedDate] = useState("");

  const [task, setTask] = useState([]);

  useEffect(() => {
    const fetchTaskData = async () => {
      try {
        // Fetch the task data using taskId
        const taskDoc = await firebase
          .firestore()
          .collection("tasks")
          .doc(taskId)
          .get();

        if (taskDoc.exists) {
          const taskData = taskDoc.data();
          setTask(taskData);
        } else {
          console.log("Task not found");
        }
      } catch (error) {
        console.error("Error fetching task data:", error);
      }
    };

    if (taskId) {
      fetchTaskData();
    }
  }, [taskId]);

  const images = [
    require("../../../../../../assets/cleaning.jpg"),
    require("../../../../../../assets/computer.jpg"),
    require("../../../../../../assets/gardening.jpg"),
    require("../../../../../../assets/plumber.jpg"),
    require("../../../../../../assets/dog.jpg"),
  ];

  const handleViewOffer = () => {
    navigation.navigate("Expert Area");
  };

  const handleSwiperIndexChanged = (index) => {
    setCurrentStep(index + 1);
  };

  return (
    <ScrollView padding={3} flex={1} showsVerticalScrollIndicator={true}>
      <Box safeArea>
        {/* Render task item here */}

        <Heading size="lg">{task.title}</Heading>

        <HStack marginTop={6} marginBottom={6} justifyContent={"space-between"}>
          {/* location */}
          <HStack alignItems={"center"}>
            <Ionicons
              name="location-outline"
              size={24}
              color="black"
              marginRight={4}
            />
            <Text fontSize={"lg"}>{task.location}</Text>
          </HStack>
          {/* created date */}
          <VStack>
            <HStack alignItems={"center"}>
              <Ionicons
                name="calendar-outline"
                size={24}
                color="black"
                marginRight={4}
              />
              <Text fontSize={"lg"}>{task.createdDate}</Text>
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
          <Text fontSize={"lg"}>{task.description}</Text>
        </HStack>
        <HStack justifyContent={"space-between"} marginTop={6}>
          <Text fontSize={"lg"}>Min Budget:</Text>
          <Text fontSize={"lg"}>{task.minBudget}</Text>
        </HStack>
        <HStack justifyContent={"space-between"} marginTop={6}>
          <Text fontSize={"lg"}>Max Budget:</Text>
          <Text fontSize={"lg"}>{task.maxBudget}</Text>
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
          <StatusSlider disableStatus={true} statusValue={0} />
        </HStack>
        <Box>
          <Button
            justifyContent={"center"}
            h={10}
            rounded={100}
            p={0}
            px={6}
            colorScheme={"emerald"}
            endIcon={<Ionicons name="arrow-forward" size={24} color="white" />}
            onPress={handleViewOffer}
            marginTop={1}
          >
            {/* Navigate to offers list sent by Experts */}
            <Text fontSize={17} fontWeight="semibold" color={"primary.white"}>
              View Offers
            </Text>
          </Button>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default ViewTask;
