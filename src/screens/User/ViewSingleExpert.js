import {
  AspectRatio,
  Box,
  Image,
  Text,
  Stack,
  HStack,
  Heading,
  VStack,
  Input,
  Icon,
  ScrollView,
  Center,
  Select,
  CheckIcon,
  Radio,
  NativeBaseProvider,
  extendTheme,
  StackDivider,
  Button,
  FlatList,
  Avatar,
  Spacer,
  Card,
  AlertDialog,
  Modal,
  FormControl,
} from "native-base";
import { View } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import UpperImg from "../../../assets/upperWidget.png";

const ViewSingleExpert = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Box padding={3}>
        <Image
          source={UpperImg}
          alt="image"
          width="100%"
          height={200}
          roundedTop="lg"
          opacity={0.7}
        />
      </Box>
      <Card
        w="85%"
        maxW="400px"
        mx="auto"
        marginTop={3} // Adjust this value based on your design
        borderColor="coolGray.200"
        borderWidth={1}
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _light={{
          backgroundColor: "gray.50",
        }}>
        <Box p={2}>
          <Heading size="md">Details</Heading>
          <HStack space={2} mt={4}>
            <VStack space={4} flex={1}>
              <Text fontWeight={400}>Name</Text>
              <Text fontWeight={400}>Field</Text>
              <Text fontWeight={400}>Experience</Text>
              <Text fontWeight={400}>Location</Text>
              <Text fontWeight={400}>Phone</Text>
              <Text fontWeight={400}>Working Days</Text>
            </VStack>
            <VStack space={4} flex={2} marginRight={-40}>
              <Text>Your Data Column</Text>
              <Text>Your Data Column</Text>
              <Text>Your Data Column</Text>
              <Text>Your Data Column</Text>
              <Text>Your Data Column</Text>
              <Text>Your Data Column</Text>
            </VStack>
          </HStack>
        </Box>
      </Card>
      <Center marginTop={5}>
        <HStack space={10}>
          <Button
            shadow={2}
            colorScheme="danger"
            onPress={() => setIsOpen(!isOpen)}>
            Delete Customer
          </Button>
          <AlertDialog
            leastDestructiveRef={cancelRef}
            isOpen={isOpen}
            onClose={onClose}>
            <AlertDialog.Content>
              <AlertDialog.CloseButton />
              <AlertDialog.Header>Delete Customer</AlertDialog.Header>
              <AlertDialog.Body>
                This will remove all data relating to Alex. This action cannot
                be reversed. Deleted data can not be recovered.
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button.Group space={2}>
                  <Button
                    variant="unstyled"
                    colorScheme="coolGray"
                    onPress={onClose}
                    ref={cancelRef}>
                    Cancel
                  </Button>
                  <Button colorScheme="danger" onPress={onClose}>
                    Delete
                  </Button>
                </Button.Group>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
          <>
            <Button shadow={2} onPress={() => setShowModal(true)}>
              Update
            </Button>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
              <Modal.Content maxWidth="450px">
                <Modal.CloseButton />
                <Modal.Header>Update Your Data</Modal.Header>
                <Modal.Body>
                  <FormControl>
                    <FormControl.Label>Name</FormControl.Label>
                    <Input />
                  </FormControl>
                  <FormControl>
                    <FormControl.Label>Name</FormControl.Label>
                    <Input />
                  </FormControl>
                  <FormControl>
                    <FormControl.Label>Name</FormControl.Label>
                    <Input />
                  </FormControl>
                  <FormControl>
                    <FormControl.Label>Name</FormControl.Label>
                    <Input />
                  </FormControl>
                  <FormControl>
                    <FormControl.Label>Name</FormControl.Label>
                    <Input />
                  </FormControl>
                  <FormControl>
                    <FormControl.Label>Name</FormControl.Label>
                    <Input />
                  </FormControl>
                </Modal.Body>
                <Modal.Footer>
                  <Button.Group space={2}>
                    <Button
                      variant="ghost"
                      colorScheme="blueGray"
                      onPress={() => {
                        setShowModal(false);
                      }}>
                      Cancel
                    </Button>
                    <Button
                      onPress={() => {
                        setShowModal(false);
                      }}>
                      Save
                    </Button>
                  </Button.Group>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
          </>
        </HStack>
      </Center>
    </>
  );
};

export default ViewSingleExpert;
