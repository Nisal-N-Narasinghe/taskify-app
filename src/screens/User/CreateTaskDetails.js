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
} from "native-base";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import StepIndicator from "../../components/stepIndicators/step2";
import CleanImg from "../../../assets/cleaning.jpg";
import PlumberImg from "../../../assets/plumber.jpg";
import ElectricImg from "../../../assets/electrician.jpg";
import GardenImg from "../../../assets/gardening.jpg";
import ComputerImg from "../../../assets/computer.jpg";
import DogImg from "../../../assets/dog.jpg";
import UpperImg from "../../../assets/upperWidget.png";
import { StyleSheet } from "react-native";

function CreateTask() {
  return (
    <Box padding={3}>
      <ScrollView w={["100vw", "100vw"]} minHeight="100vw">
        <StepIndicator />
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
