import React, { useState } from "react";
import { Box, Heading, ScrollView, VStack } from "native-base";
import CleaningJob from "../../../../assets/cleaning.jpg";
import ComputerJob from "../../../../assets/computer.jpg";
import housePlan from "../../../../assets/Expertimages/HousePlanning/housePlane3D2.jpg";
import gardenPlan1 from "../../../../assets/Expertimages/GardenPlanning/gardenPlanning1.jpeg";
import gardenPlan2 from "../../../../assets/Expertimages/GardenPlanning/gardenPlanning2.jpeg";
import { TouchableOpacity } from "react-native";
import { ViewUpcomingJobItem } from "../../../components/Expert/ViewUpcomingJobs";

const ViewUpcomingJobs = ({ navigation }) => {
  const id = 123;

  const onGoingJobItems = [
    {
      title: "House Planning",
      location: "Battaaramulla",
      countFromPostedDate: "Today",
      image: [housePlan],
      Amount: "Rs. 6500",
    },
  ];

  const upcomingJobItems = [
    {
      title: "Garden Planning",
      location: "Kottawa",
      countFromPostedDate: "In 2 days",
      image: [gardenPlan1],
      Amount: "Rs. 5000",
    },
    {
      title: "Garden Planning",
      location: "Malabe",
      countFromPostedDate: "In 4 days",
      image: [gardenPlan2],
      Amount: "Rs. 3000",
    },
  ];

  return (
    <Box>
      <ScrollView>
        <Box safeArea background={"white"}>
          <Heading pl={2} size='md'>
            Ongoing Jobs
          </Heading>
          <VStack paddingX={4}>
            {onGoingJobItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate("Ongoing Job", { id })}>
                <ViewUpcomingJobItem
                  title={item.title}
                  location={item.location}
                  countFromPostedDate={item.countFromPostedDate}
                  image={item.image[0]}
                  Amount={item.Amount}
                />
              </TouchableOpacity>
            ))}
          </VStack>
        </Box>
        <Box safeArea background={"white"}>
          <Heading pl={2} size='md'>
            Upcoming Jobs
          </Heading>
          <VStack paddingX={4}>
            {upcomingJobItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate("Upcoming Job", { id })}>
                <ViewUpcomingJobItem
                  title={item.title}
                  location={item.location}
                  countFromPostedDate={item.countFromPostedDate}
                  image={item.image[0]}
                  Amount={item.Amount}
                />
              </TouchableOpacity>
            ))}
          </VStack>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default ViewUpcomingJobs;
