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
import StepIndicator from "../../../../components/common/StepIndicators";
// components/common/stepIndicators/index";

import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function CreateTaskDetails() {
  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate("Task Image");
  };

  return (
    <ScrollView p={3}>
      <StepIndicator currentStep={2} />
      <Heading marginBottom={3} marginTop={3} size="md">
        Please fill the below details
      </Heading>
      <Box w="full">
        <FormControl isRequired marginBottom={3}>
          <Stack>
            <FormControl.Label fontSize={"lg"}>Task Category</FormControl.Label>
            <Input type="text" defaultValue="" placeholder="Title" readOnly />

            <FormControl.Label fontSize={"lg"}>Title</FormControl.Label>
            <Input type="text" defaultValue="" placeholder="Title" />

            <FormControl.Label>Description</FormControl.Label>
            <TextArea h={"32"} placeholder="Task Description" w="100%" />

            <FormControl.Label>Location</FormControl.Label>
            <Input type="text" defaultValue="" placeholder="Location" />

            <FormControl.Label>Budget</FormControl.Label>
            <Input type="text" defaultValue="" placeholder="Budget" />

            <FormControl.Label>Time Period</FormControl.Label>
            <Input type="text" defaultValue="" placeholder="Time Period" />
          </Stack>
        </FormControl>

        <Button onPress={handleContinue}>Continue</Button>
      </Box>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgCard: {
    width: 200,
    height: 300,
  },
});

export default CreateTaskDetails;
