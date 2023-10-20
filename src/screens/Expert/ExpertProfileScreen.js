import { View, Text } from "react-native";
import React from "react";
import {
  Box,
  ScrollView,
  VStack,
  Center,
  Button,
  Flex,
  Icon,
  Heading,
  Image,
  Stack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import PROImg from "../../../assets/Expertimages/expertPRO.jpg";
import StarIndicator from "../../components/StarIndicator/StarIndicator";
const ExpertProfileScreen = () => {
  return (
    <Box safeArea flex={1}>
      <Box backgroundColor='white' pb={10}>
        <Center>
          <Image
            source={PROImg}
            alt='Profile Picture'
            size='100px'
            borderRadius='full'
            borderWidth={2}
            borderColor='gray.200'
          />
        </Center>
        <Center>
          <Heading pt={4} pb={2} fontSize={16}>
            Jone Doe
          </Heading>
        </Center>
      </Box>
      <Box flexDirection='row'>
        <Heading pl={3} fontSize={18} pr={4} pt={2}>
          History & Ratings
        </Heading>
        <Box style={styles.buttonHistoryContainer} pl='16'>
          <Button style={styles.buttonHistory}>View History</Button>
        </Box>
      </Box>

      {/* Upper Area (Horizontal Scroll) */}
      <Box flex={1}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pt={4}
          mb={4}>
          <Flex flex={1} flexDirection='row' width='auto' height={1} pl={1}>
            <RatingCard review='Review given by clients' rating={4.5} />
            <RatingCard review='Review given by clients' rating={3.8} />
            <RatingCard review='Review given by clients' rating={5.0} />
          </Flex>
        </ScrollView>
      </Box>
      <Heading pl={4} pb={4}>
        Expertise Areas
      </Heading>
      <Box flex={1}>
        <ScrollView flex={1} showsVerticalScrollIndicator={true}>
          <VStack paddingX={4} paddingY={2}>
            <ExpertCard
              title='Electrician'
              JobDiscription='Description expert area'
              jobcount='Jobs Done : 3'
              experience='Experience : 5 years'
            />
            <ExpertCard
              title='Electrician'
              JobDiscription='Description expert area'
              jobcount='Jobs Done : 3'
              experience='Experience : 5 years'
            />
            <ExpertCard
              title='Electrician'
              JobDiscription='Description expert area'
              jobcount='Jobs Done : 3'
              experience='Experience : 5 years'
            />

            <Center>
              <Button style={styles.buttonAdd}>
                <Icon
                  m='2'
                  ml='3'
                  size='16'
                  color='#149873' // Change the color to green
                  as={<MaterialIcons name='add' />}
                />
              </Button>
            </Center>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};
const RatingCard = ({ rating, review }) => {
  return (
    <Box
      style={styles.ratingCard}
      backgroundColor='white'
      borderRadius={8}
      shadow={1}
      p={2}
      mx={2}>
      <Stack alignItems='center' my={2}>
        <Text style={styles.ratintext}>Rating</Text>
        <StarIndicator rating={rating} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Flex flex={1} flexDirection='row' width='auto'>
            <Text style={styles.reviewtext}>{review}</Text>
          </Flex>
        </ScrollView>
      </Stack>
    </Box>
  );
};

const ExpertCard = ({ title, jobcount, experience, JobDiscription }) => {
  return (
    <Box
      style={styles.expertCard}
      backgroundColor='white'
      borderRadius={8}
      padding={4}
      marginY={2}
      shadow={1}>
      <Heading fontSize='18' fontWeight='bold' alignSelf='center'>
        {title}
      </Heading>

      <Text style={styles.expertCardDiscription} alignSelf='center'>
        {JobDiscription}
      </Text>
      <Text style={styles.expertCardText}>{jobcount}</Text>
      <Text style={styles.expertCardText}>{experience}</Text>
    </Box>
  );
};

const styles = {
  ratingCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 2,
    shadow: 1,
    width: 150,
    height: 100,
    borderWidth: 1,
    borderColor: "gray.200",
  },
  ratintext: {
    fontSize: 16,
    paddingBottom: 4,
    fontWeight: "bold",
  },
  reviewtext: {
    fontSize: 12,
    paddingBottom: 4,
  },
  buttonAdd: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 4,
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#149873",
  },
  buttonHistoryContainer: {
    alignItems: "flex-end",
    marginRight: 10,
  },
  buttonHistory: {
    backgroundColor: "#149873",
    borderRadius: 16,
    padding: 4,
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  expertCard: {
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "gray.200",
    padding: 4,
    marginY: 2,
    shadow: 1,
  },
  expertCardText: {
    fontWeight: "bold",
    fontSize: 12,
    paddingBottom: 4,
  },
  expertCardDiscription: {
    fontSize: 10,
    paddingBottom: 4,
  },
};

export default ExpertProfileScreen;
