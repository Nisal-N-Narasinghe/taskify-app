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
    const tasksRef = firebase.firestore().collection("tasks");

    // real-time listener for the tasks collection
    const unsubscribe = tasksRef.onSnapshot((snapshot) => {
      const tasksArray = [];

      snapshot.forEach((doc) => {
        tasksArray.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setTasks(tasksArray);
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleClick = (taskId) => {
    nav.navigate("View Task", { taskId });
    console.log(taskId);
  };

  const deleteTask = (taskId) => {
    const tasksRef = firebase.firestore().collection("tasks");

    // Delete task with the taskId
    tasksRef
      .doc(taskId)
      .delete()
      .then(() => {
        // The task successfully deleted
        console.log(`Task with ID ${taskId} deleted successfully.`);
      })
      .catch((error) => {
        // errors during the deletion
        console.error(`Error deleting task with ID ${taskId}:`, error);
      });
  };

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={true}>
      <Box backgroundColor='white'>
        <Heading pl={4} pb={2} pt={4}>
          Find An Expert
        </Heading>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pt={4}
          mb={4}>
          <Flex flexDirection='row' width='auto' pl={1}>
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
                  onPress={() => handleClick(task.id)}
                >
                  <ViewMyTaskItem
                    title={task.data.title}
                    location={task.data.location}
                    countFromPostedDate="2 days ago"
                    category={task.data.category}
                    countFromEndDate="5 days"
                    image={CleaningJob}
                    Amount={task.data.minBudget}
                    onDelete={() => deleteTask(task.id)}
                  />
                </TouchableOpacity>
              );
            }

            return null;
          })}
        </VStack>
      </Box>
    </ScrollView>
  );
};
export default UserDashboard;
