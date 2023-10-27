import React, { useState } from "react";
import {
  Box,
  Center,
  ScrollView,
  VStack,
  Input,
  Icon,
  Flex,
  Modal,
  Button,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import CleaningJob from "../../../../../assets/cleaning.jpg";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { ViewMyTaskItem } from "../../../../components/User/ViewTasks/ViewMyTasks";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { firebase } from "../../../../../config";
import { useEffect } from "react";

const ViewMyTasks = () => {
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);

  const navigation = useNavigation();

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

    // real-time listener for tasks collection
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

    // Cleanup listener when the component unmounts
    return () => unsubscribe();
  }, []);

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

  const handleClick = (taskId) => {
    navigation.navigate("View Task", { taskId });
    console.log(taskId);
  };

  const toggleFilterModal = () => {
    setIsFilterModalVisible(!isFilterModalVisible);
  };

  return (
    <Box>
      {/* Top Section */}
      <Box backgroundColor="white" pb={4} pt={4}>
        <Center>
          <Flex flexDirection="row" alignItems="center">
            {/* Search Bar */}
            <Box
              flexDirection="row"
              alignItems="center"
              borderRadius="full"
              background="gray.200"
              w={"70%"}
              px={3}
            >
              <Icon
                as={Ionicons}
                name="search-outline"
                size={5}
                color="gray.500"
              />
              <Input
                w={"98%"}
                placeholder="Search"
                borderRadius="full"
                borderLeftWidth={0}
                borderColor={"transparent"}
              />
            </Box>
            {/* Filter Icon */}
            <Button variant="unstyled" onPress={toggleFilterModal}>
              <MaterialIcons name="tune" size={32} ml={2} />
            </Button>
          </Flex>
        </Center>
      </Box>

      <ScrollView>
        <Box safeArea>
          <VStack paddingX={4}>
            {/* Render task items here */}
            {tasks.map((task) => (
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
            ))}
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

export default ViewMyTasks;
