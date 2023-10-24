import { useNavigation } from "@react-navigation/native";
import { Box, Button, Text } from "native-base";
import React from "react";

function Dashboard() {
  const navigation = useNavigation();

  const handleCreateTask = () => {
    navigation.navigate("CreateTaskCategoryPage");
  };

  return (
    <Box safeArea flex={1} justifyContent={"center"} alignItems={"center"}>
      <Text>Dashboard</Text>
      <Button onPress={handleCreateTask}>Create Task</Button>
    </Box>
  );
}

export default Dashboard;
