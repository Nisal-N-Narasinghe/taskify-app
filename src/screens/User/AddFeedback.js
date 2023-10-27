import {
  Box,
  Image,
  Text,
  HStack,
  VStack,
  ScrollView,
  Button,
  Card,
  Heading,
  IconButton,
  CloseIcon,
} from "native-base";
import { View, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CleaningJob from "../../../assets/cleaning.jpg";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React, { useState } from "react";
import AddRatings from "../../components/common/StarRatings";
import UpperImg from "../../../assets/upperWidget.png";
import { FeedbackTopCard } from "../../components/User/FeedbackPageTopCard";
import { FontAwesome } from "@expo/vector-icons";
/* import {
  getDatabase,
  ref,
  push,
  set,
  child,
} from '@react-native-firebase/database'; */

const AddFeedback = ({ navigation }) => {
  const [qualityRating, setQualityRating] = useState(0);
  const [cleanlinessRating, setCleanlinessRating] = useState(0);
  const [timelinessRating, setTimelinessRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [satisfactionRating, setSatisfactionRating] = useState(0);

  const submitFeedback = () => {
    // Create a new feedback object
    const newFeedback = {
      quality: qualityRating,
      cleanliness: cleanlinessRating,
      timeliness: timelinessRating,
      communication: communicationRating,
      satisfaction: satisfactionRating,
    };
    // Display an alert message
    Alert.alert("Feedback Submitted", "Thank you for your feedback!", [
      { text: "OK", onPress: () => navigation.navigate("Dashboard") },
    ]);
  };

  return (
    <ScrollView>
      <Box padding={3}>
        <FeedbackTopCard
          title="Need to get my garden lawn mowed"
          location="Malabe"
          countFromPostedDate="2 days ago"
          category="Gardening"
          image={UpperImg}
          Amount="Rs. 5000"
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
        justifyContent={"center"}
        h={10}
        rounded={100}
        p={0}
        px={6}
        colorScheme={"emerald"}
        endIcon={
          <FontAwesome name="pencil-square-o" size={24} color="white" />
        }>
        Publish Feedback
      </Button>
    </ScrollView>
  );
};

export default AddFeedback;
