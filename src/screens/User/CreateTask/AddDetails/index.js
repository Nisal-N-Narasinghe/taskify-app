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
  Select,
} from "native-base";
import React from "react";
import StepIndicator from "../../../../components/common/StepIndicators";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CreateTaskDetails = ({ selectedCategory }) => {
  const navigation = useNavigation();

  const [service, setService] = React.useState("");

  const handleContinue = () => {
    navigation.navigate("Task Image");
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
                defaultValue={selectedCategory}
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
                bgColor="#E0E0E0"
                rounded={"100"}
                marginBottom={3}
              />

              <FormControl.Label>Description</FormControl.Label>
              <TextArea
                h={"32"}
                placeholder="Task Description"
                bgColor="#E0E0E0"
                borderRadius={"25"}
                marginBottom={3}
              />

              <FormControl.Label>Location</FormControl.Label>
              <Select
                selectedValue={service}
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
                onValueChange={(itemValue) => setService(itemValue)}
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
              {/* <Input
              type="text"
              defaultValue=""
              placeholder="Location"
              bgColor="#E0E0E0"
              borderRadius={10}
            /> */}

              <HStack justifyContent={"space-between"} marginBottom={3}>
                <VStack>
                  <FormControl.Label>Min Budget</FormControl.Label>
                  <Input
                    type="text"
                    defaultValue=""
                    placeholder="LKR"
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
                bgColor="#E0E0E0"
                rounded={"100"}
                marginBottom={3}
              />
            </Stack>
          </FormControl>

          {/* <Button onPress={handleContinue}>Continue</Button> */}
          <Button
            justifyContent={"center"}
            h={10}
            rounded={100}
            p={0}
            px={6}
            colorScheme={"emerald"}
            endIcon={<Ionicons name="arrow-forward" size={24} color="white" />}
            onPress={() => {
              handleContinue();
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

const styles = StyleSheet.create({
  imgCard: {
    width: 200,
    height: 300,
  },
});

export default CreateTaskDetails;
