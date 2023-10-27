import React, { useState } from "react";
import { Box, Heading, ScrollView, VStack } from "native-base";
import CleaningJob from "../../../../assets/cleaning.jpg";
import ComputerJob from "../../../../assets/computer.jpg";
import { TouchableOpacity } from "react-native";
import { ViewUpcomingJobItem } from "../../../components/Expert/ViewUpcomingJobs";

const ViewUpcomingJobs = ({ navigation }) => {
  const id = 123;
  const upcomingJobItems = [
    {
      title: "Cleaning Job",
      location: "Malabe",
      countFromPostedDate: "In 2 days",
      image: [CleaningJob, ComputerJob, CleaningJob],
      Amount: "Rs. 5000",
    },
    {
      title: "Computer Job",
      location: "Malabe",
      countFromPostedDate: "In 2 days",
      image: [ComputerJob, CleaningJob, CleaningJob],
      Amount: "Rs. 5000",
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
