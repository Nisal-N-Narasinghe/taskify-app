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
import PROImg from "../../../../assets/Expertimages/expertPRO.jpg";
import CleaningJob from "../../../../assets/cleaning.jpg";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { JobHistoryItem } from "../../../components/Expert/ExpertJobHistory";

const ExpertJobHistory = () => {
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);

  const toggleFilterModal = () => {
    setIsFilterModalVisible(!isFilterModalVisible);
  };
  return (
    <Box>
      {/* Top Section */}
      <Box backgroundColor='white' pb={10} pt={12}>
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

      <ScrollView showsVerticalScrollIndicator={true} height={400}>
        <Box safeArea>
          <VStack paddingX={4} paddingY={2}>
            {/* Render your job history items here */}
            <JobHistoryItem
              title='Cleaning'
              location='Arangala'
              startTime='8:00 AM'
              startDate={new Date().toDateString()}
              endTime='12:00 PM'
              endDate={new Date().toDateString()}
              rating={4.5}
              image={CleaningJob}
              countFromEndDate='2 days ago'
              Amount='Rs. 5000'
            />

            <JobHistoryItem
              title='Cleaning'
              location='Arangala'
              startTime='8:00 AM'
              startDate={new Date().toDateString()}
              endTime='12:00 PM'
              endDate={new Date().toDateString()}
              rating={4.5}
              image={CleaningJob}
              countFromEndDate='2 days ago'
              Amount='Rs. 5000'
            />
            <JobHistoryItem
              title='Cleaning'
              location='Arangala'
              startTime='8:00 AM'
              startDate={new Date().toDateString()}
              endTime='12:00 PM'
              endDate={new Date().toDateString()}
              rating={4.5}
              image={CleaningJob}
              countFromEndDate='2 days ago'
              Amount='Rs. 5000'
            />
            <JobHistoryItem
              title='Cleaning'
              location='Arangala'
              startTime='8:00 AM'
              startDate={new Date().toDateString()}
              endTime='12:00 PM'
              endDate={new Date().toDateString()}
              rating={4.5}
              image={CleaningJob}
              countFromEndDate='2 days ago'
              Amount='Rs. 5000'
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

export default ExpertJobHistory;
