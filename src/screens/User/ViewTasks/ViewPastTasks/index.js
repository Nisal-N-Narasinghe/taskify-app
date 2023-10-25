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
import CleaningJob from "../../../../../assets/cleaning.jpg";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { ViewPastTaskItem } from "../../../../components/User/ViewTasks/ViewPastTasks";

const ViewPastTasks = () => {
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

      <ScrollView>
        <Box padding={3}>
          <Heading paddingX={2}>Past Tasks</Heading>
          <VStack>
            {/* Render your job history items here */}
            <TouchableOpacity onPress={handleClick}>
              <ViewPastTaskItem
                title="Need to get my garden lawn mowed "
                location="Malabe"
                category="Gardening"
                postedTime="3 pm"
                postedDate="postttttttttttttttt"
                completedTime="4 pm"
                completedDate="comp"
                amount="Rs. 5000"
              />
            </TouchableOpacity>

            <ViewPastTaskItem
              title="Need to get my garden lawn mowed"
              location="Colombo"
              category="Cleaning"
              postedTime="3 pm"
              postedDate="post"
              completedTime="4 pm"
              completedDate="comp"
              amount="Rs. 5000"
            />
            <ViewPastTaskItem
              title="Need to get my garden lawn mowed"
              location="Malabe"
              category="Gardening"
              postedTime="3 pm"
              postedDate="post"
              completedTime="4 pm"
              completedDate="comp"
              amount="Rs. 5000"
            />
            <ViewPastTaskItem
              title="Need to get my garden lawn mowed"
              location="Malabe"
              category="Gardening"
              postedTime="3 pm"
              postedDate="post"
              completedTime="4 pm"
              completedDate="comp"
              amount="Rs. 5000"
            />
          </VStack>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default ViewPastTasks;
