import {
  Box,
  Heading,
  Image,
  VStack,
  Icon,
  HStack,
  Text,
  Divider,
  Button,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../../../styles/User/ViewTasks/ViewMyTasks";
import { Feather } from "@expo/vector-icons";
import { AlertDialog } from "native-base";
import { useState } from "react";

export const ViewMyTaskItem = ({
  title,
  location,
  category,
  image,
  countFromPostedDate,
  countFromEndDate,
  Amount,
  onDelete,
}) => {
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const openDeleteConfirmation = () => {
    setDeleteDialogOpen(true);
  };

  return (
    <Box style={styles.viewMyTaskItem} shadow={2}>
      <HStack space={4} p={2}>
        {/* Left Section */}
        <VStack flex={1}>
          <Box>
            <Image
              source={image}
              alt="job Image"
              // size="100px"
              w={"full"}
              h={"100"}
              borderRadius="10px"
            />
          </Box>
        </VStack>
        {/* Right Section */}
        <VStack flex={2}>
          <Heading fontSize="lg" fontWeight="bold" pb={2}>
            {title}
          </Heading>
          <HStack alignItems="center" pb={2}>
            <Icon
              as={Ionicons}
              name="location"
              size={6}
              color="gray.500"
              mr={2}
            />
            <Text fontSize="sm">
              {location} - {countFromPostedDate}
            </Text>
          </HStack>
          <HStack alignItems="center" pb={2} justifyContent={"space-between"}>
            <VStack>
              <Box style={styles.categoryLabel}>
                <Text style={styles.categoryText}>{category}</Text>
              </Box>
            </VStack>
            <VStack>
              <HStack alignItems="center">
                <Ionicons name="stopwatch-outline" size={24} color="black" />
                <Text fontSize="sm">{countFromEndDate}</Text>
              </HStack>
            </VStack>
          </HStack>
        </VStack>
      </HStack>
      <Divider bg="gray.400" />
      <HStack justifyContent="space-between" padding={1}>
        <Text style={styles.Amount}>{Amount} LKR</Text>
        <HStack space={4}>
          {/* edit */}
          <Feather name="edit" size={24} color="black" />
          {/* delete */}
          <Feather
            name="trash-2"
            size={24}
            color="black"
            onPress={openDeleteConfirmation}
          />

          <AlertDialog
            isOpen={isDeleteDialogOpen}
            onClose={() => setDeleteDialogOpen(false)}
          >
            <AlertDialog.Content>
              <AlertDialog.Header>Delete Task</AlertDialog.Header>
              <AlertDialog.Body>
                Are you sure you want to delete this task?
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <HStack space={4}>
                  <Button.Group space={2}>
                    <Button
                      variant="unstyled"
                      colorScheme="coolGray"
                      onPress={() => setDeleteDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      colorScheme="danger"
                      // onPress={() => {
                      //   onDelete; // Call the onDelete prop to perform the actual deletion
                      //   setDeleteDialogOpen(false);
                      // }}
                      onPress={
                        onDelete // Call the onDelete prop to perform the actual deletion
                      }
                    >
                      Delete
                    </Button>
                  </Button.Group>
                </HStack>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
        </HStack>
      </HStack>
    </Box>
  );
};
