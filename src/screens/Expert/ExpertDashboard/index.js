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

import styles from "../../../styles/Expert/ExpertDashboard";
import housePlane3d from "../../../../assets/Expertimages/HousePlanning/housePlane3D.jpg";
import shopPlane from "../../../../assets/Expertimages/ShopPlanning/shopPlanning1.jpeg";
import gradenPlane from "../../../../assets/Expertimages/GardenPlanning/gardenPlanning.jpeg";
import gradenPlane1 from "../../../../assets/Expertimages/GardenPlanning/gardenPlanning1.jpeg";
import gradenPlane2 from "../../../../assets/Expertimages/GardenPlanning/gardenPlanning2.jpeg";

import { JobHistoryItem } from "../../../components/Expert/ExpertJobHistory";
import { firebase } from "../../../../config";
import { TouchableOpacity } from "react-native";
import { FindAJobCard } from "../../../components/Expert/ExpertDashboard";

const ExpertDashboard = ({ navigation }) => {
  const id = 123;
  const jobHistoryItems = [
    {
      title: "House Planning Job",
      location: "Arangala",
      startTime: "9:00 AM",
      startDate: "26-10-2023",
      endTime: "12:10 PM",
      endDate: "27-10-2023",
      rating: 3.8,
      images: [housePlane3d],
      countFromEndDate: "1 days ago",
      Amount: "Rs.8000",
    },
    {
      title: "Backyard Planning Job",
      location: "Kaduwela",
      startTime: "8:30 AM",
      startDate: "25-10-2023",
      endTime: "2:45 PM",
      endDate: "25-10-2023",
      rating: 4.5,
      images: [gradenPlane2],
      countFromEndDate: "3 days ago",
      Amount: "Rs.6000",
    },
    {
      title: "Frontyard Planning Job",
      location: "Malabe",
      startTime: "8:15 AM",
      startDate: "20-10-2023",
      endTime: "1:30 PM",
      endDate: "20-10-2023",
      rating: 50,
      images: [gradenPlane1],
      countFromEndDate: "7 days ago",
      Amount: "Rs. 4000",
    },
  ];

  const findAJobData = [
    { jobText: "Garden Planning", image: gradenPlane },
    { jobText: "House Planning", image: housePlane3d },
    { jobText: "Shop Planning", image: shopPlane },
  ];

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={true}>
      <Box backgroundColor="white" pt={8} p={4}>
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
      <Box backgroundColor="white">
        <Heading pl={4} pb={2} pt={4}>
          Explore Jobs
        </Heading>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pt={4}
          mb={4}>
          <Flex flexDirection="row" width="auto" pl={1}>
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
