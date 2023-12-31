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
import UpperImg from "../../../../assets/upperWidget.png";
import StatusSlider from "../../../components/common/StatusSlider";
import ImageSliderIndicator from "../../../components/common/ImageSliderIndicator";
import ImageSlider from "../../../components/common/ImageSlider";
import "firebase/firestore";
import { firebase } from "../../../../config";

const ViewSingleExpert = ({ route, navigation }) => {
  const [completedWorks, setCompletedWorks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const [currentStep, setCurrentStep] = useState(0);

  const expertId = route.params ? route.params.expertId : null;
  console.log("Expert ID:", expertId);
  console.log("Completed Works:", completedWorks);
  const expertDetails = completedWorks.find((work) => work.id === expertId);

  const images = [
    require("../../../../assets/download.jpeg"),
    require("../../../../assets/computer.jpg"),
    require("../../../../assets/gardening.jpg"),
    require("../../../../assets/plumber.jpg"),
  ];

  const handleSwiperIndexChanged = (index) => {
    setCurrentStep(index + 1);
  };

  useEffect(() => {
    const expertCollection = firebase.firestore().collection("experts");

    const fetchData = async () => {
      try {
        const snapshot = await expertCollection.get();
        const works = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCompletedWorks(works);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView>
      <>
        <Box padding={3}>
          <ImageSlider
            images={images}
            onIndexChanged={handleSwiperIndexChanged}
          />

          <ImageSliderIndicator
            currentStep={currentStep}
            totalStep={images.length}
          />
        </Box>

        {expertDetails && (
          <Card
            w="88%"
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
                  <Text fontWeight={400}>Title</Text>
                  <Text fontWeight={400}>Field</Text>
                  <Text fontWeight={400}>Experience</Text>
                  <Text fontWeight={400}>Location</Text>
                  <Text fontWeight={400}>Phone</Text>
                  <Text fontWeight={400}>Working Days</Text>
                </VStack>
                <VStack space={4} flex={2} marginRight={-40}>
                  <Text>{expertDetails.name}</Text>
                  <Text>{expertDetails.service}</Text>
                  <Text>25 Years</Text>
                  <Text>{expertDetails.location}</Text>
                  <Text>{expertDetails.phone}</Text>
                  <Text>{expertDetails.days}</Text>
                </VStack>
              </HStack>
            </Box>
          </Card>
        )}
        <Center marginTop={5}>
          <HStack space={10}>
            <Button
              shadow={2}
              colorScheme="danger"
              onPress={() => setIsOpen(!isOpen)}>
              Delete
            </Button>
            <AlertDialog
              leastDestructiveRef={cancelRef}
              isOpen={isOpen}
              onClose={onClose}>
              <AlertDialog.Content>
                <AlertDialog.CloseButton />
                <AlertDialog.Header>Delete Record</AlertDialog.Header>
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
                <Modal.Content maxWidth="500px">
                  <Modal.CloseButton />
                  <Modal.Header>Update Your Data</Modal.Header>
                  <Modal.Body>
                    <FormControl>
                      <FormControl.Label>Title</FormControl.Label>
                      <Input />
                    </FormControl>
                    <FormControl>
                      <FormControl.Label>Field</FormControl.Label>
                      <Input />
                    </FormControl>
                    <FormControl>
                      <FormControl.Label>Experience</FormControl.Label>
                      <Input />
                    </FormControl>
                    <FormControl>
                      <FormControl.Label>Location</FormControl.Label>
                      <Input />
                    </FormControl>
                    <FormControl>
                      <FormControl.Label>Phone</FormControl.Label>
                      <Input />
                    </FormControl>
                    <FormControl>
                      <FormControl.Label>Working Days</FormControl.Label>
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
    </ScrollView>
  );
};

export default ViewSingleExpert;
