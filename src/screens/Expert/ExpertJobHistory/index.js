import React, { useState } from "react";
import {
  Box,
  Center,
  Heading,
  Image,
  ScrollView,
  VStack,
  Input,
  Icon,
  Flex,
  Modal,
  Button,
  HStack,
  Text,
  Divider,
  InputLeftAddon,
  Select,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import PROImg from "../../../../assets/Expertimages/expertPRO.jpg";
import CleaningJob from "../../../../assets/cleaning.jpg";
import ComputerJob from "../../../../assets/computer.jpg";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { JobHistoryItem } from "../../../components/Expert/ExpertJobHistory";
import { TouchableOpacity } from "react-native";

const ExpertJobHistory = ({ navigation }) => {
  const id = 123;
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);

  const [priceSortingOrder, setPriceSortingOrder] = useState("");
  const [timeSortingOrder, setTimeSortingOrder] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const toggleFilterModal = () => {
    setIsFilterModalVisible(!isFilterModalVisible);
  };

  const jobHistoryItems = [
    {
      title: "Cleaning",
      location: "Arangala",
      startTime: "9:00 AM",
      startDate: "2023-10-25",
      endTime: "12:00 PM",
      endDate: "2023-10-25",
      rating: 4.5,
      images: [CleaningJob, ComputerJob, CleaningJob],
      countFromEndDate: "2 days ago",
      Amount: "Rs.5000",
    },
    {
      title: "Computing",
      location: "Kuliyapitiya",
      startTime: "8:30 AM",
      startDate: "2023-10-24",
      endTime: "11:45 AM",
      endDate: "2023-10-24",
      rating: 4.5,
      images: [ComputerJob, CleaningJob, CleaningJob],
      countFromEndDate: "3 days ago",
      Amount: "Rs.4000",
    },
    {
      title: "Computing",
      location: "Malabe",
      startTime: "10:15 AM",
      startDate: "2023-10-23",
      endTime: "1:30 PM",
      endDate: "2023-10-23",
      rating: 4.5,
      images: [ComputerJob, CleaningJob, CleaningJob],
      countFromEndDate: "4 days ago",
      Amount: "Rs. 4000",
    },
  ];

  const sortItems = (priceOrder, timeGapOrder, location) => {
    const filteredItems = jobHistoryItems.filter((item) => {
      if (!location) return true;
      return item.location === location;
    });

    return filteredItems.sort((a, b) => {
      // Sort by Price
      const priceA = parseFloat(a.Amount.replace("Rs.", ""));
      const priceB = parseFloat(b.Amount.replace("Rs.", ""));

      if (!priceOrder) {
        return 0;
      } else if (priceOrder === "highToLow") {
        // High to Low for Price
        if (priceA < priceB) return 1;
        if (priceA > priceB) return -1;
      } else {
        // Low to High for Price
        if (priceA < priceB) return -1;
        if (priceA > priceB) return 1;
      }

      // Calculate time gaps
      const startTimeA = parseFloat(a.startTime.replace(":", ""));
      const startTimeB = parseFloat(b.startTime.replace(":", ""));

      const endTimeA = parseFloat(a.endTime.replace(":", ""));
      const endTimeB = parseFloat(b.endTime.replace(":", ""));

      const timeGapA = endTimeA - startTimeA;
      const timeGapB = endTimeB - startTimeB;

      if (!timeGapOrder) {
        return 0;
      }
      if (timeGapOrder === "highToLow") {
        // High to Low for Time Gap
        if (timeGapA < timeGapB) return 1;
        if (timeGapA > timeGapB) return -1;
      } else {
        // Low to High for Time Gap
        if (timeGapA < timeGapB) return -1;
        if (timeGapA > timeGapB) return 1;
      }
      console.log("Time Gap A:", timeGapA);
      console.log("Time Gap B:", timeGapB);
      return 0;
    });
  };

  const sortedJobHistoryItems = sortItems(
    priceSortingOrder,
    timeSortingOrder,
    locationFilter
  );
  // console.log("Sorted Job History Items:", sortedJobHistoryItems);

  return (
    <Box>
      <ScrollView showsVerticalScrollIndicator={true}>
        <Box backgroundColor='white' pb={10} pt={12} safeArea>
          <Center>
            <Image
              source={PROImg}
              alt='Profile Picture'
              size='100px'
              borderRadius='full'
              borderWidth={2}
              borderColor='gray.200'
              mt={2}
            />
          </Center>
          <Center>
            <Heading pt={2} pb={16} fontSize={16}>
              Jone Doe
            </Heading>
          </Center>
          <Center>
            <Flex flexDirection='row' alignItems='center'>
              {/* Search Bar */}
              <Box
                flexDirection='row'
                alignItems='center'
                borderRadius='full'
                background='gray.200'
                w={"70%"}
                px={3}>
                <Icon
                  as={Ionicons}
                  name='search-outline'
                  size={5}
                  color='gray.500'
                />
                <Input
                  w={"98%"}
                  placeholder='Search'
                  borderRadius='full'
                  borderLeftWidth={0}
                  borderColor={"transparent"}
                />
              </Box>
              {/* Filter Icon */}
              <Button variant='unstyled' onPress={toggleFilterModal}>
                <MaterialIcons name='tune' size={32} ml={2} />
              </Button>
            </Flex>
          </Center>
        </Box>

        <ScrollView showsVerticalScrollIndicator={true} flex={1}>
          <Box safeArea flex={1}>
            <VStack paddingX={4} paddingY={2}>
              {/* Render your job history items here */}
              {sortedJobHistoryItems.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate("Completed Jobs", { id })}>
                  <JobHistoryItem
                    title={item.title}
                    location={item.location}
                    startTime={item.startTime}
                    startDate={item.startDate}
                    endTime={item.endTime}
                    endDate={item.endDate}
                    rating={item.rating}
                    image={item.images[0]}
                    countFromEndDate={item.countFromEndDate}
                    Amount={item.Amount}
                  />
                </TouchableOpacity>
              ))}
            </VStack>
          </Box>
        </ScrollView>

        <Modal
          isOpen={isFilterModalVisible}
          onClose={toggleFilterModal}
          borderLeftRadius={16}
          borderWidth={2}
          borderColor={"gray"}>
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Filters</Modal.Header>
            <Modal.Body>
              <VStack space={4}>
                <HStack space={5}>
                  <HStack space={2}>
                    <Icon
                      as={Ionicons}
                      name='location-outline'
                      size={5}
                      color='gray.500'
                    />
                    <Text>Location</Text>
                  </HStack>
                  <Select
                    borderRadius={10}
                    w={"150px"}
                    placeholder='Select Location'
                    onValueChange={(value) => {
                      setLocationFilter(value);
                    }}>
                    <Select.Item label='Arangala' value='Arangala' />
                    <Select.Item label='Malabe' value='Malabe' />
                    <Select.Item label='Kuliyapitiya' value='Kuliyapitiya' />
                  </Select>
                </HStack>
                <HStack space={10}>
                  <HStack space={2}>
                    <Icon
                      as={Ionicons}
                      name='time-outline'
                      size={5}
                      color='gray.500'
                    />
                    <Text>Time</Text>
                  </HStack>
                  <Select
                    w={"150px"}
                    borderRadius={10}
                    placeholder='Sort by Time'
                    onValueChange={(value) => {
                      setTimeSortingOrder(value);
                    }}>
                    <Select.Item label='High to Low' value='highToLow' />
                    <Select.Item label='Low to High' value='lowToHigh' />
                  </Select>
                </HStack>
                <HStack space={6}>
                  <HStack space={2}>
                    <Icon
                      as={Ionicons}
                      name='cash-outline'
                      size={5}
                      color='gray.500'
                    />
                    <Text>Income</Text>
                  </HStack>

                  <Select
                    w={"150px"}
                    borderRadius={10}
                    placeholder='Sort by Price'
                    onValueChange={(value) => {
                      setPriceSortingOrder(value);
                    }}>
                    <Select.Item label='High to Low' value='highToLow' />
                    <Select.Item label='Low to High' value='lowToHigh' />
                  </Select>
                </HStack>
              </VStack>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </ScrollView>
    </Box>
  );
};

export default ExpertJobHistory;
