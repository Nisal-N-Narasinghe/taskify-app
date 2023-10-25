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
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import PROImg from "../../../../../assets/Expertimages/expertPRO.jpg";
// import PROImg from "../../../../../assets/Expertimages";
import CleaningJob from "../../../../../assets/cleaning.jpg";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import { JobHistoryItem } from "../../../components/Expert/ExpertJobHistory";
// import { JobHistoryItem } from "../../../../components/Expert/ExpertJobHistory";
import { ViewMyTaskItem } from "../../../../components/User/ViewTasks/ViewMyTasks";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const ViewMyTasks = () => {
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);

  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("View Task");
  };

  const toggleFilterModal = () => {
    setIsFilterModalVisible(!isFilterModalVisible);
  };
  return (
    <Box>
      {/* Top Section */}
      <Box backgroundColor="white" pb={4} pt={4}>
        <Center>
          <Flex flexDirection="row" alignItems="center">
            {/* Search Bar */}
            <Box
              flexDirection="row"
              alignItems="center"
              borderRadius="full"
              background="gray.200"
              w={"70%"}
              px={3}
            >
              <Icon
                as={Ionicons}
                name="search-outline"
                size={5}
                color="gray.500"
              />
              <Input
                w={"98%"}
                placeholder="Search"
                borderRadius="full"
                borderLeftWidth={0}
                borderColor={"transparent"}
              />
            </Box>
            {/* Filter Icon */}
            <Button variant="unstyled" onPress={toggleFilterModal}>
              <MaterialIcons name="tune" size={32} ml={2} />
            </Button>
          </Flex>
        </Center>
      </Box>

      <ScrollView>
        <Box safeArea>
          <VStack paddingX={4}>
            {/* Render your job history items here */}
            <TouchableOpacity onPress={handleClick}>
              <ViewMyTaskItem
                title="Need to get my garden lawn mowed"
                location="Malabe"
                countFromPostedDate="2 days ago"
                category="Gardening"
                countFromEndDate="1 day"
                image={CleaningJob}
                Amount="Rs. 5000"
              />
            </TouchableOpacity>

            <ViewMyTaskItem
              title="I need to clean my home"
              location="Malabe"
              countFromPostedDate="2 days ago"
              category="Cleaning"
              countFromEndDate="3 days"
              image={CleaningJob}
              Amount="Rs. 5000"
            />
            <ViewMyTaskItem
              title="I need to clean my home"
              location="Malabe"
              countFromPostedDate="2 days ago"
              category="Cleaning"
              countFromEndDate="3 days"
              image={CleaningJob}
              Amount="Rs. 5000"
            />
            <ViewMyTaskItem
              title="I need to clean my home"
              location="Malabe"
              countFromPostedDate="2 days ago"
              category="Cleaning"
              countFromEndDate="3 days"
              image={CleaningJob}
              Amount="Rs. 5000"
            />
          </VStack>
        </Box>
      </ScrollView>

      <Modal isOpen={isFilterModalVisible} onClose={toggleFilterModal}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Filter</Modal.Header>
          <Modal.Body>{/* Add your filter options here */}</Modal.Body>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default ViewMyTasks;
