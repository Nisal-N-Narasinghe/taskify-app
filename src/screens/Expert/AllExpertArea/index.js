import {
  Box,
  Image,
  Text,
  HStack,
  VStack,
  Card,
  Badge,
  Icon,
} from "native-base";
import { TouchableOpacity, View } from "react-native";
import UpperImg from "../../../../assets/upperWidget.png";
import { FeedbackTopCard } from "../../../components/User/FeedbackPageTopCard";
import { styles } from "../../../styles/User/ViewTasks/ViewMyTasks";
import { Ionicons } from "@expo/vector-icons";
import "firebase/firestore";
import { firebase } from "../../../../config";

import React, { useState, useEffect } from "react";

const AllExpertArea = ({ navigation }) => {
  const [completedWorks, setCompletedWorks] = useState([]);

  useEffect(() => {
    // Sample data for testing
    /*     const sampleWorks = [
      {
        id: 1,
        title: "Residential Electric Work",
        location: "Colombo",
        category: "ELECTRIC",
        image:
          "https://engineering-jobs.theiet.org/getasset/85bead92-2e44-4692-b579-3ddf03a9a84b/",
      },
      {
        id: 2,
        title: "Residential Electric Work",
        location: "Colombo",
        category: "ELECTRIC",
        image:
          "https://engineering-jobs.theiet.org/getasset/85bead92-2e44-4692-b579-3ddf03a9a84b/",
      },
      {
        id: 3,
        title: "Residential Electric Work",
        location: "Colombo",
        category: "ELECTRIC",
        image:
          "https://engineering-jobs.theiet.org/getasset/85bead92-2e44-4692-b579-3ddf03a9a84b/",
      },
    ];

    setCompletedWorks(sampleWorks); */
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
    <View>
      {completedWorks.map((work) => (
        <TouchableOpacity
          key={work.id} // Replace 'id' with the actual unique identifier of your work
          onPress={() =>
            navigation.navigate("Expert Area", { expertId: work.id })
          }>
          <Card
            w="90%"
            h="auto"
            maxW="400px"
            mx="auto"
            marginTop={5}
            borderColor="coolGray.200"
            borderRadius={20}
            borderWidth={1}
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _light={{
              backgroundColor: "gray.50",
            }}>
            <Box>
              <HStack>
                <VStack space={4} flex={1}>
                  {/* Replace the following line with the actual URL or source for the image */}
                  <Image
                    /* source={{ uri: work.image }} */
                    src={
                      "https://engineering-jobs.theiet.org/getasset/85bead92-2e44-4692-b579-3ddf03a9a84b/"
                    }
                    alt="image"
                    size="lg"
                    rounded="lg"
                  />
                </VStack>
                <VStack space={2} flex={2} marginRight={-45}>
                  <Text bold fontSize="lg">
                    {work.name}
                  </Text>
                  <HStack alignItems="center" pb={1}>
                    <Icon
                      as={Ionicons}
                      name="location"
                      size={6}
                      color="gray.500"
                      mr={2}
                    />
                    <Text fontSize="sm">{work.location}</Text>
                  </HStack>
                  <Text bold fontSize="lg">
                    <Box style={styles.categoryLabel}>
                      <Text style={styles.categoryText}>{work.service}</Text>
                    </Box>
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </Card>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default AllExpertArea;
