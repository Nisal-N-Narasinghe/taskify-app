import React, { useState } from "react";
import { Box, Heading, ScrollView, Text, VStack } from "native-base";
import CleaningJob from "../../../../assets/cleaning.jpg";
import ComputerJob from "../../../../assets/computer.jpg";
import housePlan from "../../../../assets/Expertimages/HousePlanning/housePlane3D2.jpg";
import gardenPlan1 from "../../../../assets/Expertimages/GardenPlanning/gardenPlanning1.jpeg";
import gardenPlan2 from "../../../../assets/Expertimages/GardenPlanning/gardenPlanning2.jpeg";
import { TouchableOpacity } from "react-native";
import { ViewUpcomingJobItem } from "../../../components/Expert/ViewUpcomingJobs";
import { firebase } from "../../../../config";
import { useEffect } from "react";

const ViewJobs = ({ navigation }) => {
  const id = firebase.auth().currentUser.uid;

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const jobsRef = firebase.firestore().collection("tasks");

    // real-time listener for jobs collection
    const unsubscribe = jobsRef.onSnapshot((snapshot) => {
      const jobsArray = [];

      snapshot.forEach((doc) => {
        jobsArray.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setJobs(jobsArray);
      console.log(jobs);
    });

    return () => unsubscribe();
  }, []);

  const dayCounter = (timestamp) => {
    // Convert Firebase Timestamp to JavaScript Date
    const jobDate = timestamp.toDate();

    // Get the current date
    const currentDate = new Date();

    // Calculate the time difference
    const timeDifference = jobDate - currentDate;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // You can return the time difference in a format you prefer, for example:
    // return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    return `In ${days} days, ${hours} hours `;
  };

  return (
    <Box>
      <ScrollView>
        <Box safeArea background={"white"}>
          <Heading pl={2} size='md'>
            Ongoing Jobs
          </Heading>
          <VStack paddingX={4}>
            {jobs.filter(
              (item) =>
                item.data.expertState === "accepted" &&
                item.data.taskState === "Ongoing" &&
                item.data.expertId === id &&
                dayCounter(item.data.jobDate).includes("In 0 days")
            ).length === 0 ? (
              <Text>No Jobs are Ongoing</Text>
            ) : (
              jobs
                .filter(
                  (item) =>
                    item.data.expertState === "accepted" &&
                    item.data.taskState === "Ongoing" &&
                    item.data.expertId === id &&
                    dayCounter(item.data.jobDate).includes("In 0 days")
                )
                .map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => navigation.navigate("Ongoing Job", item.id)}>
                    <ViewUpcomingJobItem
                      title={item.data.title}
                      location={item.data.location}
                      countToJobDate='Today'
                      Amount={item.data.confirmedBudget + "LKR"}
                    />
                  </TouchableOpacity>
                ))
            )}
          </VStack>
        </Box>
        <Box safeArea background={"white"}>
          <Heading pl={2} size='md'>
            Upcoming Jobs
          </Heading>
          <VStack paddingX={4}>
            {jobs
              .filter(
                (item) =>
                  item.data.expertState === "accepted" &&
                  item.data.expertId === id &&
                  (dayCounter(item.data.jobDate).includes("In 0 days") ||
                    dayCounter(item.data.jobDate).includes("In 1 days"))
              )
              .map((item) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => navigation.navigate("Upcoming Job", item.id)}>
                  <ViewUpcomingJobItem
                    title={item.data.title}
                    location={item.data.location}
                    countToJobDate={dayCounter(item.data.jobDate)}
                    // image={item.data.image[0]}
                    Amount={item.data.confirmedBudget + "LKR"}
                  />
                </TouchableOpacity>
              ))}
          </VStack>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default ViewJobs;
