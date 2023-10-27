import React from "react";
import { Box, ScrollView, VStack, Flex, Heading, Button } from "native-base";

import CleaningJob from "../../../../assets/cleaning.jpg";
import GardenPlannerJob from "../../../../assets/gardening.jpg";
import ComputerJob from "../../../../assets/computer.jpg";

import { ViewMyTaskItem } from "../../../components/User/ViewTasks/ViewMyTasks";

import { TouchableOpacity } from "react-native";

import { FindAnExpertCard } from "../../../components/User/UserDashboard";
import { firebase } from "../../../../config";
import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import { useEffect } from "react";
const UserDashboard = ({ navigation }) => {
  const id = 123;

  // const ViewMyTaskItems = [
  //   {
  //     title: "Cleaning",
  //     location: "Malabe",
  //     category: "Cleaning",
  //     image: CleaningJob,
  //     countFromPostedDate: "2 days ago",
  //     countFromEndDate: "2 days left",
  //     Amount: "5000",
  //   },
  //   {
  //     title: "Garden Planner",
  //     location: "Malabe",
  //     category: "Gardening",
  //     image: GardenPlannerJob,
  //     countFromPostedDate: "2 days ago",
  //     countFromEndDate: "2 days left",
  //     Amount: "5000",
  //   },
  //   {
  //     title: "Computer Repair",
  //     location: "Malabe",
  //     category: "Computer",
  //     image: ComputerJob,
  //     countFromPostedDate: "2 days ago",
  //     countFromEndDate: "2 days left",
  //     Amount: "8000",
  //   },
  // ];

  const findAnExpertData = [
    { jobText: "Cleaner", image: CleaningJob },
    { jobText: "Garden Planner", image: GardenPlannerJob },
    { jobText: "Computer Repair", image: ComputerJob },
  ];

  const nav = useNavigation();

  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const taskCollection = await firebase
          .firestore()
          .collection("tasks")
          .get();
        const tasksArray = [];

        taskCollection.forEach((doc) => {
          tasksArray.push({
            id: doc.id,
            data: doc.data(),
          });

          // const taskData = doc.data();
          // if (taskData.taskState === "Active") {
          //   tasksArray.push({
          //     id: doc.id,
          //     data: taskData,
          //   });
          // }
        });

        setTasks(tasksArray);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (taskId) => {
    nav.navigate("View Ongoing Task", { taskId });
    console.log(taskId);
  };

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={true}>
      <Box backgroundColor="white" pt={2} pr={2}>
        <Button
          alignSelf={"flex-end"}
          onPress={() => {
            firebase.auth().signOut();
          }}
        >
          Sign Out
        </Button>
      </Box>
      <Box backgroundColor="white">
        <Heading pl={4} pb={2} pt={4}>
          Find An Expert
        </Heading>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pt={4}
          mb={4}
        >
          <Flex flexDirection="row" width="auto" pl={1}>
            {findAnExpertData.map((findAnExpertData, index) => (
              <FindAnExpertCard
                key={index}
                jobText={findAnExpertData.jobText}
                image={findAnExpertData.image}
              />
            ))}
          </Flex>
        </ScrollView>
      </Box>
      <Box flex={1} background={"white"}>
        <Heading pl={4} pb={2} pt={4}>
          Active Listings
        </Heading>

        <VStack paddingX={4} paddingY={2}>
          {/* Render task items here */}
          {tasks.map((task) => {
            if (task.data.taskState === "Active") {
              return (
                <TouchableOpacity
                  key={task.id}
                  onPress={() => handleClick(task.data.taskId)}
                >
                  <ViewMyTaskItem
                    title={task.data.title}
                    location={task.data.location}
                    countFromPostedDate="2 days ago"
                    category={task.data.category}
                    countFromEndDate="5 days"
                    image={CleaningJob}
                    Amount={task.data.minBudget}
                  />
                </TouchableOpacity>
              );
            }

            return null;
          })}
          {/* {ViewMyTaskItems.map((item, index) => (
            <TouchableOpacity key={index}>
              <ViewMyTaskItem
                title={item.title}
                location={item.location}
                category={item.category}
                image={item.image}
                countFromPostedDate={item.countFromPostedDate}
                countFromEndDate={item.countFromEndDate}
                Amount={item.Amount}
              />
            </TouchableOpacity>
          ))} */}
        </VStack>
      </Box>
    </ScrollView>
  );
};
export default UserDashboard;
