import React from "react";
import {
  Box,
  ScrollView,
  VStack,
  Center,
  Button,
  Flex,
  Icon,
  Heading,
  Image,
  HStack,
  Text,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import PROImg from "../../../../assets/Expertimages/expertPRO.jpg";
import styles from "../../../styles/Expert/ExpertDashboard";
import CleaningJob from "../../../../assets/cleaning.jpg";
import ComputerJob from "../../../../assets/computer.jpg";
import { JobHistoryItem } from "../../../components/Expert/ExpertJobHistory";
import { firebase } from "../../../../config";
import { TouchableOpacity } from "react-native";
import { FindAJobCard } from "../../../components/Expert/ExpertDashboard";

const ExpertDashboard = ({ navigation }) => {
  const id = 123;
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

  const findAJobData = [
    { jobText: "Cleaning", image: CleaningJob },
    { jobText: "Cleaning", image: CleaningJob },
    { jobText: "Cleaning", image: CleaningJob },
    { jobText: "Cleaning", image: CleaningJob },
    { jobText: "Computer", image: ComputerJob },
  ];

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={true}>
      <Box backgroundColor='white' pt={2} pr={2}>
        <Button
          alignSelf={"flex-end"}
          onPress={() => {
            firebase.auth().signOut();
          }}>
          Sign Out
        </Button>
      </Box>
      <Box backgroundColor='white' pt={8} p={4}>
        <VStack>
          <Box style={styles.totalEarningBox}>
            <Heading pl={4} pb={2} pt={4}>
              Total Earning
            </Heading>
            <Text pl={4} pb={2} pt={12} pr={4} style={styles.totalEarningText}>
              50,000 LKR
            </Text>
          </Box>
          <HStack space={2} pt={4}>
            <Box style={styles.weeklyEarningBox}>
              <Heading pl={4} pb={2} pt={4}>
                Weekly Earning
              </Heading>
              <Text
                pl={4}
                pb={2}
                pt={4}
                pr={4}
                style={styles.weeklyEarningText}>
                7500 LKR
              </Text>
            </Box>
            <Box style={styles.totalJobsCountBox}>
              <Heading pl={4} pb={2} pt={4}>
                Total Jobs Done
              </Heading>
              <Text
                pl={4}
                pb={2}
                pt={4}
                pr={4}
                style={styles.totalJobsCountText}>
                10 Jobs
              </Text>
            </Box>
          </HStack>
        </VStack>
      </Box>
      <Box backgroundColor='white'>
        <Heading pl={4} pb={2} pt={4}>
          Find A Job
        </Heading>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pt={4}
          mb={4}>
          <Flex flexDirection='row' width='auto' pl={1}>
            {findAJobData.map((findAJobData, index) => (
              <FindAJobCard
                key={index}
                jobText={findAJobData.jobText}
                image={findAJobData.image}
              />
            ))}
          </Flex>
        </ScrollView>
      </Box>
      <Box flex={1} background={"white"}>
        <Heading pl={4} pb={2} pt={4}>
          Recent Jobs
        </Heading>

        <VStack paddingX={4} paddingY={2}>
          {jobHistoryItems.map((item, index) => (
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
  );
};
export default ExpertDashboard;
