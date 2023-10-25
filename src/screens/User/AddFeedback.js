import {
  Box,
  Image,
  Text,
  HStack,
  VStack,
  ScrollView,
  Button,
  Card,
} from "native-base";
import { View } from "react-native";
import React, { useState } from "react";
import AddRatings from "../../components/common/StarRatings";
import UpperImg from "../../../assets/upperWidget.png";
/* import {
  getDatabase,
  ref,
  push,
  set,
  child,
} from '@react-native-firebase/database'; */

const AddFeedback = () => {
  const [qualityRating, setQualityRating] = useState(0);
  const [cleanlinessRating, setCleanlinessRating] = useState(0);
  const [timelinessRating, setTimelinessRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [satisfactionRating, setSatisfactionRating] = useState(0);

  const submitFeedback = () => {
    const database = getDatabase();
    const feedbackRef = ref(database, "feedback"); // Change 'feedback' to your desired path

    // Create a new feedback object
    const newFeedback = {
      quality: qualityRating,
      cleanliness: cleanlinessRating,
      timeliness: timelinessRating,
      communication: communicationRating,
      satisfaction: satisfactionRating,
    };

    // Push the new feedback to the database
    push(feedbackRef, newFeedback)
      .then(() => {
        console.log("Feedback submitted successfully");
        // Optionally, you can reset the ratings here
        setQualityRating(0);
        setCleanlinessRating(0);
        setTimelinessRating(0);
        setCommunicationRating(0);
        setSatisfactionRating(0);
      })
      .catch((error) => {
        console.error("Error submitting feedback:", error);
      });
  };

  return (
    <ScrollView>
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
        w="90%"
        maxW="400px"
        mx="auto"
        marginTop={3}
        borderColor="coolGray.200"
        borderRadius={15}
        borderWidth={1}
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _light={{
          backgroundColor: "gray.50",
        }}>
        <Box p={1}>
          <HStack space={1} mt={1}>
            <VStack space={4} flex={1}>
              <Text fontWeight={400}>Quality Of Work</Text>
              {/*  <Heading size="md">Details</Heading> */}
            </VStack>
            <VStack flex={1} marginRight={15}>
              <AddRatings
                onRatingChange={(rating) => setQualityRating(rating)}
              />
            </VStack>
          </HStack>
        </Box>
      </Card>
      <Card
        w="90%"
        maxW="400px"
        mx="auto"
        marginTop={3} // Adjust this value based on your design
        borderColor="coolGray.200"
        borderRadius={15}
        borderWidth={1}
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _light={{
          backgroundColor: "gray.50",
        }}>
        <Box p={1}>
          <HStack space={1} mt={1}>
            <VStack space={4} flex={1}>
              <Text fontWeight={400}>Cleanliness</Text>
              {/*  <Heading size="md">Details</Heading> */}
            </VStack>
            <VStack flex={1} marginRight={15}>
              <AddRatings
                onRatingChange={(rating) => setCleanlinessRating(rating)}
              />
            </VStack>
          </HStack>
        </Box>
      </Card>
      <Card
        w="90%"
        maxW="400px"
        mx="auto"
        marginTop={3} // Adjust this value based on your design
        borderColor="coolGray.200"
        borderRadius={15}
        borderWidth={1}
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _light={{
          backgroundColor: "gray.50",
        }}>
        <Box p={1}>
          <HStack space={1} mt={1}>
            <VStack space={4} flex={1}>
              <Text fontWeight={400}>Timeliness</Text>
              {/*  <Heading size="md">Details</Heading> */}
            </VStack>
            <VStack flex={1} marginRight={15}>
              <AddRatings
                onRatingChange={(rating) => setTimelinessRating(rating)}
              />
            </VStack>
          </HStack>
        </Box>
      </Card>
      <Card
        w="90%"
        maxW="400px"
        mx="auto"
        marginTop={3} // Adjust this value based on your design
        borderColor="coolGray.200"
        borderRadius={15}
        borderWidth={1}
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _light={{
          backgroundColor: "gray.50",
        }}>
        <Box p={1}>
          <HStack space={1} mt={1}>
            <VStack space={4} flex={1}>
              <Text fontWeight={400}>Communication</Text>
              {/*  <Heading size="md">Details</Heading> */}
            </VStack>
            <VStack flex={1} marginRight={15}>
              <AddRatings
                onRatingChange={(rating) => setCommunicationRating(rating)}
              />
            </VStack>
          </HStack>
        </Box>
      </Card>
      <Card
        w="90%"
        maxW="400px"
        mx="auto"
        marginTop={3} // Adjust this value based on your design
        borderColor="coolGray.200"
        borderRadius={15}
        borderWidth={1}
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _light={{
          backgroundColor: "gray.50",
        }}>
        <Box p={1}>
          <HStack space={1} mt={1}>
            <VStack space={4} flex={1}>
              <Text fontWeight={400}>Satisfaction</Text>
              {/*  <Heading size="md">Details</Heading> */}
            </VStack>
            <VStack flex={1} marginRight={15}>
              <AddRatings
                onRatingChange={(rating) => setSatisfactionRating(rating)}
              />
            </VStack>
          </HStack>
        </Box>
      </Card>
      <Button
        onPress={submitFeedback}
        margin={5}
        borderRadius={25}
        color={"green"}>
        Publish Feedback
      </Button>
    </ScrollView>
  );
};

export default AddFeedback;
