import {
  Box,
  Text,
  Stack,
  HStack,
  Heading,
  VStack,
  Input,
  ScrollView,
  FormControl,
  TextArea,
  Button,
  Select,
} from "native-base";
import React, { useState } from "react";
import StepIndicator from "../../../../components/common/StepIndicators";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { firebase } from "../../../../../config";

const CreateTaskDetails = () => {
  const route = useRoute();
  const selectedCategory = route.params.category;
  console.log("slected category", selectedCategory);

  const navigation = useNavigation();

  const [category, setCategory] = useState(selectedCategory);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [dueDate, setDueDate] = useState("");

  const createTask = async (
    category,
    title,
    description,
    location,
    minBudget,
    maxBudget,
    dueDate
  ) => {
    try {
      await firebase.firestore().collection("tasks").add({
        category,
        title,
        description,
        location,
        minBudget,
        maxBudget,
        dueDate,
      });

      navigation.navigate("Task Image");
    } catch (error) {
      co;
      nsole.error("Error creating task:", error);
    }
  };

  return (
    <Box p={4}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <StepIndicator totalSteps={5} currentStep={2} />
        <Heading marginBottom={3} marginTop={3} size="md">
          Please fill the below details
        </Heading>
        <Box w="full">
          <FormControl isRequired marginBottom={3}>
            <Stack>
              <FormControl.Label fontSize={"lg"}>
                Task Category
              </FormControl.Label>
              <Input
                type="text"
                defaultValue={category}
                onChangeText={(category) => setCategory(category)}
                placeholder="Title"
                bgColor="#E0E0E0"
                readOnly
                rounded={"100"}
                marginBottom={3}
              />

              <FormControl.Label fontSize={"lg"}>Title</FormControl.Label>
              <Input
                type="text"
                defaultValue=""
                placeholder="Title"
                onChangeText={(title) => setTitle(title)}
                bgColor="#E0E0E0"
                rounded={"100"}
                marginBottom={3}
              />

              <FormControl.Label>Description</FormControl.Label>
              <TextArea
                h={"32"}
                type="text"
                defaultValue=""
                placeholder="Task Description"
                onChangeText={(description) => setDescription(description)}
                bgColor="#E0E0E0"
                borderRadius={"25"}
                marginBottom={3}
              />

              <FormControl.Label>Location</FormControl.Label>
              <Select
                selectedValue={location}
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Choose Location"
                bgColor="#E0E0E0"
                marginBottom={3}
                rounded={"100"}
                _selectedItem={
                  {
                    // bg: "teal.600",
                    // endIcon: <CheckIcon size="5" />,
                  }
                }
                onValueChange={(itemValue) => setLocation(itemValue)}
              >
                <Select.Item label="Colombo" value="colombo" />
                <Select.Item label="Gampaha" value="gampaha" />
                <Select.Item label="Kalutara" value="kaluatara" />
                <Select.Item label="Galle" value="galle" />
                <Select.Item label="Matara" value="matara" />
                <Select.Item label="Kandy" value="kandy" />
                <Select.Item label="Kurunegala" value="kurunegala" />
                <Select.Item label="Kalutara" value="kaluatara" />
                <Select.Item label="Galle" value="galle" />
                <Select.Item label="Matara" value="matara" />
              </Select>

              <HStack justifyContent={"space-between"} marginBottom={3}>
                <VStack>
                  <FormControl.Label>Min Budget</FormControl.Label>
                  <Input
                    type="text"
                    defaultValue=""
                    placeholder="LKR"
                    onChangeText={(minBudget) => setMinBudget(minBudget)}
                    bgColor="#E0E0E0"
                    rounded={"100"}
                    w={"190"}
                  />
                </VStack>
                <VStack>
                  <FormControl.Label>Max Budget</FormControl.Label>
                  <Input
                    type="text"
                    defaultValue=""
                    placeholder="LKR"
                    onChangeText={(maxBudget) => setMaxBudget(maxBudget)}
                    bgColor="#E0E0E0"
                    rounded={"100"}
                    w={"190"}
                  />
                </VStack>
              </HStack>
              <FormControl.Label>Time Period</FormControl.Label>
              <Input
                type="text"
                defaultValue=""
                placeholder="Time Period"
                onChangeText={(dueDate) => setDueDate(dueDate)}
                bgColor="#E0E0E0"
                rounded={"100"}
                marginBottom={3}
              />
            </Stack>
          </FormControl>

          <Button
            justifyContent={"center"}
            h={10}
            rounded={100}
            p={0}
            px={6}
            colorScheme={"emerald"}
            endIcon={<Ionicons name="arrow-forward" size={24} color="white" />}
            onPress={() => {
              createTask(
                category,
                title,
                description,
                location,
                minBudget,
                maxBudget,
                dueDate
              );
            }}
            marginTop={1}
          >
            <Text fontSize={17} fontWeight="semibold" color={"primary.white"}>
              Next
            </Text>
          </Button>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default CreateTaskDetails;
