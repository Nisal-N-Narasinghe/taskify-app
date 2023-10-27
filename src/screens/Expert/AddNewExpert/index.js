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
  Center,
  Select,
  CheckIcon,
  Radio,
  NativeBaseProvider,
  extendTheme,
  StackDivider,
  Button,
  Pressable,
  Flex,
  Spacer,
  Badge,
  Alert,
  AlertDialog,
} from "native-base";
import React, { useState, useRef } from "react";
import ExperiencePicker from "../../../components/common/ExperiencePicker/ExperiencePicker";
import { Ionicons } from "@expo/vector-icons";
import "firebase/firestore";
import { firebase } from "../../../../config";

const AddNewExpert = ({ navigation }) => {
  const handleClick = () => {
    navigation.navigate("All Expert Area");
  };
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [year, setYear] = useState("");
  const [location, setLocation] = useState("");
  const [days, setDays] = useState("");
  const [otherService, setOtherService] = useState("");
  const cancelRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleButtonClick = async () => {
    try {
      // Prepare data object
      const data = {
        name,
        phone,
        service: service === "Other" ? otherService : service,
        year,
        location,
        days,
      };

      const expertCollection = firebase.firestore().collection("experts");
      await expertCollection.add(data);
      navigation.navigate("All Expert Area");
    } catch (error) {
      console.error("Error saving data to Firebase:", error.message);
      Alert.alert("Error", "Failed to add expert. Please try again.");
    }
  };

  return (
    <ScrollView>
      <Stack space={4} w="85%" maxW="400px" mx="auto" marginTop={10}>
        <Input
          variant="rounded"
          placeholder="Title"
          onChangeText={(text) => setName(text)}
        />
        <Input
          variant="rounded"
          placeholder="Phone"
          onChangeText={(text) => setPhone(text)}
        />
        <Select
          selectedValue={service}
          minWidth="300"
          variant="rounded"
          accessibilityLabel="Field of Expertise"
          placeholder="Field of Expertise"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setService(itemValue)}>
          <Select.Item label="Electrician" value="Electrician" />
          <Select.Item label="Painting" value="Painting" />
          <Select.Item label="Plumbing" value="Plumbing" />
          <Select.Item label="Gardening" value="Gardening" />
          <Select.Item label="Pet Care" value="Pet Care" />
          <Select.Item label="Other" value="Other" />
        </Select>
        {service === "Other" && (
          <Input
            variant="rounded"
            placeholder="Specify Other Expertise"
            onChangeText={(text) => setOtherService(text)}
          />
        )}
        <ExperiencePicker onChangeValue={(text) => setYear(text)} />
        <Select
          selectedValue={location}
          minWidth="300"
          variant="rounded"
          accessibilityLabel="Location"
          placeholder="Location"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setLocation(itemValue)}>
          <Select.Item label="Colombo" value="Colombo" />
          <Select.Item label="Gampaha" value="Gampaha" />
          <Select.Item label="Kalutara" value="Kalutara" />
        </Select>
        <Select
          selectedValue={days}
          minWidth="300"
          variant="rounded"
          accessibilityLabel="WorkingDays"
          placeholder="Working Days"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setDays(itemValue)}>
          <Select.Item label="Weekdays" value="Weekdays" />
          <Select.Item label="Weekend" value="Weekend" />
          <Select.Item label="Both" value="Both" />
        </Select>

        <Button
          marginTop={2}
          marginBottom={3}
          justifyContent={"center"}
          h={100}
          borderStyle={"dotted"}
          borderWidth={4}
          borders
          borderColor={"green.800"}
          rounded={15}
          p={0}
          px={6}
          colorScheme={"teal.400"}
          endIcon={<Ionicons name="camera" size={30} color="grey" />}>
          <Text>Add Photos</Text>
        </Button>

        <Button
          marginTop={2}
          onPress={() => setIsOpen(!isOpen)}
          marginBottom={5}
          justifyContent={"center"}
          h={10}
          rounded={100}
          p={0}
          px={6}
          colorScheme={"emerald"}
          endIcon={
            <Ionicons
              name="checkmark-done-circle-outline"
              size={24}
              color="white"
            />
          }>
          Publish
        </Button>
        <AlertDialog
          leastDestructiveRef={cancelRef}
          isOpen={isOpen}
          onClose={onClose}>
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Publish Listning</AlertDialog.Header>
            <AlertDialog.Body>
              This will publish all data relating to that listning. Published
              data can be updated anytime.
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button.Group space={2}>
                <Button
                  variant="unstyled"
                  colorScheme="coolGray"
                  onPress={onClose}
                  ref={cancelRef}>
                  Cancel
                </Button>
                <Button colorScheme="emerald" onPress={handleButtonClick}>
                  Publish
                </Button>
              </Button.Group>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </Stack>
    </ScrollView>
  );
};

export default AddNewExpert;
