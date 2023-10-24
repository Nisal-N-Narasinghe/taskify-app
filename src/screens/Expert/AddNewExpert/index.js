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
} from "native-base";
import React, { useState } from "react";

const AddNewExpert = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [year, setYear] = useState("");
  const [location, setLocation] = useState("");
  const [days, setDays] = useState("");

  const handleButtonClick = async () => {
    // Prepare data object
    const data = {
      name,
      phone,
      service,
      year,
      location,
      groupValue,
    };
    // Log the data to check if it's correct
    console.log("Data to be submitted:", data);
  };

  return (
    <ScrollView>
      <Stack space={4} w="85%" maxW="400px" mx="auto" marginTop={10}>
        <Input
          variant="rounded"
          placeholder="Name"
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
        </Select>
        <Select
          selectedValue={year}
          minWidth="300"
          variant="rounded"
          accessibilityLabel="Experience"
          placeholder="Experience"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setYear(itemValue)}>
          <Select.Item label="1 Year" value="1 Year" />
          <Select.Item label="2 Year" value="2 Year" />
          <Select.Item label="3+ Year" value="3+ Year" />
        </Select>
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

        <Pressable
          onPress={() => console.log("I'm Pressed")}
          rounded="8"
          overflow="hidden"
          borderWidth="1"
          borderColor="coolGray.300"
          maxW="96"
          shadow="3"
          bg="coolGray.100"
          p="5">
          <Center>
            <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
              Add Photos
            </Text>
          </Center>
        </Pressable>
        <Button marginBottom={5} onPress={handleButtonClick}>
          Next
        </Button>
      </Stack>
    </ScrollView>
  );
};

export default AddNewExpert;
