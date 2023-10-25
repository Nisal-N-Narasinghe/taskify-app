import React, { useState } from "react";
import { Box, ScrollView, VStack } from "native-base";
import CleaningJob from "../../../../assets/cleaning.jpg";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { ViewUpcommingJobItem } from "../../../components/Expert/ViewUpcommingJobs";

const ViewUpcomingJobs = () => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("");
  };
  return (
    <Box>
      <ScrollView>
        <Box safeArea>
          <VStack paddingX={4}>
            <TouchableOpacity onPress={handleClick}>
              <ViewUpcommingJobItem
                title='Cleaning Job'
                location='Malabe'
                countFromPostedDate='In 2 days'
                image={CleaningJob}
                Amount='Rs. 5000'
              />
            </TouchableOpacity>

            <ViewUpcommingJobItem
              title='Cleaning Job'
              location='Malabe'
              countFromPostedDate='In 2 days'
              image={CleaningJob}
              Amount='Rs. 5000'
            />
            <ViewUpcommingJobItem
              title='Cleaning Job'
              location='Malabe'
              countFromPostedDate='In 2 days'
              image={CleaningJob}
              Amount='Rs. 5000'
            />
            <ViewUpcommingJobItem
              title='Cleaning Job'
              location='Malabe'
              countFromPostedDate='In 2 days'
              image={CleaningJob}
              Amount='Rs. 5000'
            />
            <ViewUpcommingJobItem
              title='Cleaning Job'
              location='Malabe'
              countFromPostedDate='In 2 days'
              image={CleaningJob}
              Amount='Rs. 5000'
            />
            <ViewUpcommingJobItem
              title='Cleaning Job'
              location='Malabe'
              countFromPostedDate='In 2 days'
              image={CleaningJob}
              Amount='Rs. 5000'
            />
          </VStack>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default ViewUpcomingJobs;
