import { Box, Text } from "native-base";
import React from "react";

function CreateTask() {
  return (
    <Box safeArea flex={1} justifyContent={"center"} alignItems={"center"}>
      <Text>Create a task</Text>
    </Box>
  );
}

export default CreateTask;
