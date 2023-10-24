import {
  AspectRatio,
  Box,
  Image,
  Text,
  Stack,
  HStack,
  Heading,
  VStack,
  Input,
  Icon,
  ScrollView,
  FormControl,
  TextArea,
  Button,
} from "native-base";
import React from "react";
import StepIndicator from "../../components/stepIndicators/stepIndicator";

import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function CreateTask() {
  const navigation = useNavigation();

  const navigateToCreateTaskDetails = () => {
    // Navigate to Expert profile component
    navigation.navigate("CreateTaskImage");
  };

  return (
    <Box padding={3}>
      <ScrollView w={["100vw", "100vw"]} minHeight="100vw">
        <StepIndicator currentStep={2} />
        <Heading marginBottom={3} marginTop={3} size="md">
          Please fill the below details
        </Heading>
        <Box w="100%">
          <FormControl isRequired>
            <Stack mx="4">
              <FormControl.Label fontSize={"lg"}>Title</FormControl.Label>
              <Input type="text" defaultValue="" placeholder="password" />

              <FormControl.Label>Description</FormControl.Label>
              <TextArea h={"32"} placeholder="Text Area Placeholder" w="100%" />

              <FormControl.Label>Location</FormControl.Label>
              <Input type="text" defaultValue="" placeholder="password" />

              <FormControl.Label>Budget</FormControl.Label>
              <Input type="text" defaultValue="" placeholder="password" />

              <FormControl.Label>Time Period</FormControl.Label>
              <Input type="text" defaultValue="" placeholder="password" />
            </Stack>
          </FormControl>
        </Box>
        <Button onPress={navigateToCreateTaskDetails}>Add Images</Button>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  imgCard: {
    width: 200,
    height: 300,
  },
});

export default CreateTask;
