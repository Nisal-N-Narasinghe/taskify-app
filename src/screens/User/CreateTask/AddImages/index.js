import {
  Box,
  Button,
  Heading,
  Icon,
  Stack,
  Text,
  Alert,
  Image,
  View,
  ScrollView,
} from "native-base";
import React, { useState } from "react";
import StepIndicator from "../../../../components/common/StepIndicators";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { firebase } from "../../../../../config";
import { useEffect } from "react";

const CreateTaskImage = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const routeCategory = route.params.category;
  const routeTitle = route.params.title;
  const routeDescription = route.params.description;
  const routeLocation = route.params.location;
  const routeMinBudget = route.params.minBudget;
  const routeMaxBudget = route.params.maxBudget;
  const routeDueDate = route.params.dueDate;

  console.log(maxBudget);

  const [category, setCategory] = useState(routeCategory);
  const [title, setTitle] = useState(routeTitle);
  const [description, setDescription] = useState(routeDescription);
  const [location, setLocation] = useState(routeLocation);
  const [minBudget, setMinBudget] = useState(routeMinBudget);
  const [maxBudget, setMaxBudget] = useState(routeMaxBudget);
  const [dueDate, setDueDate] = useState(routeDueDate);

  const [userId, setUserId] = useState(null);

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const currentUser = firebase.auth().currentUser.uid;

    if (currentUser) {
      setUserId(currentUser);
    } else {
      console.log("No user is currently signed in");
    }
  }, []);

  console.log("USER ID", userId);

  const pickImage = async () => {
    //no permission request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All, //All, images, videos
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }

    // navigation.navigate("View Task Image", { imageUri: result.assets[0].uri });
  };

  //upload media files
  // const uploadMedia = async () => {
  //   setUploading(true);

  //   try {
  //     const { uri } = await FileSystem.getInfoAsync(image);
  //     const blob = await new Promise((resolve, reject) => {
  //       const xhr = new XMLHttpRequest();
  //       xhr.onload = () => {
  //         resolve(xhr.response);
  //       };
  //       xhr.onerror = (e) => {
  //         reject(new TypeError("Network Request Failed"));
  //       };
  //       xhr.responseType = "blob";
  //       xhr.open("GET", uri, true);
  //       xhr.send(null);
  //     });

  //     const filename = image.substring(image.lastIndexOf("/") + 1);
  //     const ref = firebase.storage().ref().child(filename);

  //     await ref.put(blob);
  //     setUploading(false);
  //     alert("Photo Selected!");
  //     setImage(null);
  //     navigation.navigate("Task Success");
  //   } catch (error) {
  //     console.log(error);
  //     setUploading(false);
  //   }
  // };

  const createTask = async (
    category,
    title,
    description,
    location,
    minBudget,
    maxBudget,
    dueDate
  ) => {
    try {
      setUploading(true);

      try {
        const { uri } = await FileSystem.getInfoAsync(image);
        const blob = await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = () => {
            resolve(xhr.response);
          };
          xhr.onerror = (e) => {
            reject(new TypeError("Network Request Failed"));
          };
          xhr.responseType = "blob";
          xhr.open("GET", uri, true);
          xhr.send(null);
        });

        const filename = image.substring(image.lastIndexOf("/") + 1);
        const ref = firebase.storage().ref().child(filename);

        await ref.put(blob);
        setUploading(false);
        alert("Photo Selected!");
        setImage(null);
      } catch (error) {
        console.log(error);
        setUploading(false);
      }

      //get current date
      const currentDate = new Date();
      const createdDate = currentDate.toDateString();

      const taskState = "Pending";

      await firebase.firestore().collection("tasks").add({
        category,
        title,
        description,
        location,
        minBudget,
        maxBudget,
        dueDate,
        createdDate,
        userId,
        taskState,
      });

      // console.log(taskState);

      navigation.navigate("Task Success");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <ScrollView>
      <Box padding={3}>
        <StepIndicator totalSteps={5} currentStep={3} />
        <Heading marginTop={6} size="md" alignSelf="center">
          Please Upload an Image
        </Heading>
        <Text fontWeight="500" marginBottom={6} alignSelf="center">
          Upload images related to task
        </Text>

        <Box alignItems="center">
          <Box
            // w="100%"
            w="full"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              // backgroundColor: "gray.50",
              backgroundColor: "#E0E0E0",
            }}
            marginBottom={"4"}
          >
            <Stack alignItems="center">
              <Stack space={2}>
                <Heading
                  size="md"
                  ml="-1"
                  marginTop={6}
                  marginBottom={4}
                  alignSelf="center"
                >
                  Upload Image
                </Heading>
                <Icon
                  alignSelf="center"
                  //   m="2"
                  //   ml="3"
                  size="10"
                  color="gray.400"
                  as={<MaterialIcons name="image" />}
                  marginBottom={4}
                />
                <Text alignSelf="center" fontWeight="500">
                  Click here to pick the image
                </Text>
                <Button
                  marginBottom={6}
                  bgColor={"#272727"}
                  rounded={100}
                  onPress={pickImage}
                >
                  <Text
                    fontSize={17}
                    fontWeight="semibold"
                    color={"primary.white"}
                  >
                    Pick Image
                  </Text>
                </Button>
                <View>
                  {image && (
                    <Image
                      source={{ uri: image }}
                      style={{ width: 200, height: 200 }}
                      alt="image"
                      marginBottom={6}
                    />
                  )}
                </View>
              </Stack>
            </Stack>
          </Box>

          <Text alignSelf="center" fontWeight="500">
            Click here to Create the Task
          </Text>
          <Button
            marginBottom={6}
            colorScheme={"emerald"}
            rounded={100}
            endIcon={<Ionicons name="arrow-forward" size={24} color="white" />}
            onPress={() => {
              createTask(
                category,
                title,
                description,
                location,
                minBudget,
                maxBudget,
                dueDate
              );
            }}
            w={"80"}
          >
            <Text fontSize={17} fontWeight="semibold" color={"primary.white"}>
              Next
            </Text>
          </Button>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default CreateTaskImage;
