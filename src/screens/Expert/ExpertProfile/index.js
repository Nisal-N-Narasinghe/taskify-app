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
} from "native-base";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import PROImg from "../../../../assets/Expertimages/expertPRO.jpg";
import styles from "../../../styles/Expert/ExpertProfile";
import {
  ExpertCard,
  RatingCard,
} from "../../../components/Expert/ExpertProfile";
import { TouchableOpacity } from "react-native";
const ExpertProfileScreen = ({ navigation }) => {
  const id = 123;
  const handleHistoryButton = () => {
    navigation.navigate("Expert Job History");
  };
  const handleAddExpertiseArea = () => {
    navigation.navigate("Add New Expert");
  };

  const ratingsData = [
    { review: "Sample Review", rating: 4.5 },
    { review: "Sample Review", rating: 4.5 },
    { review: "Sample Review", rating: 4.5 },
    { review: "Sample Review", rating: 4.5 },
    { review: "Sample Review", rating: 4.5 },
  ];
  const expertiseAreas = [
    {
      title: "Electrician",
      description: "Description for Electrician",
      jobsDone: 3,
      experience: 5,
    },
    {
      title: "Electrician",
      description: "Description for Electrician",
      jobsDone: 3,
      experience: 5,
    },
    {
      title: "Electrician",
      description: "Description for Electrician",
      jobsDone: 3,
      experience: 5,
    },
    {
      title: "Electrician",
      description: "Description for Electrician",
      jobsDone: 3,
      experience: 5,
    },
  ];

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={true}>
      <Box backgroundColor='white' pb={10}>
        <Center>
          <Image
            source={PROImg}
            alt='Profile Picture'
            size='100px'
            borderRadius='full'
            borderWidth={2}
            borderColor='gray.200'
            mt={4}
          />
        </Center>
        <Center>
          <Heading pt={4} pb={2} fontSize={16}>
            Jone Doe
          </Heading>
        </Center>
      </Box>
      <Box flexDirection='row' backgroundColor='white'>
        <Heading pl={3} fontSize={18} pr={4} pt={2}>
          History & Ratings
        </Heading>
        <Box style={styles.buttonHistoryContainer} pl='16'>
          <TouchableOpacity onPress={handleHistoryButton}>
            <Button style={styles.buttonHistory} onPress={handleHistoryButton}>
              View History
            </Button>
          </TouchableOpacity>
        </Box>
      </Box>

      <Box backgroundColor='white'>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pt={4}
          mb={4}>
          <Flex flexDirection='row' width='auto' pl={1}>
            {ratingsData.map((ratingData, index) => (
              <RatingCard
                key={index}
                review={ratingData.review}
                rating={ratingData.rating}
              />
            ))}
          </Flex>
        </ScrollView>
      </Box>
      <Box flex={1} background={"white"}>
        <Heading pl={4} pb={4}>
          Expertise Areas
        </Heading>

        <VStack paddingX={4} paddingY={2}>
          {expertiseAreas.map((area, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("Expert Area", { id })}>
              <ExpertCard
                title={area.title}
                JobDiscription={area.description}
                jobcount={`Jobs Done : ${area.jobsDone}`}
                experience={`Experience : ${area.experience} years`}
              />
            </TouchableOpacity>
          ))}

          <Center>
            <Button style={styles.buttonAdd} onPress={handleAddExpertiseArea}>
              <Icon
                m='2'
                ml='3'
                size='16'
                color='primary.green'
                as={<MaterialIcons name='add' />}
              />
            </Button>
          </Center>
        </VStack>
      </Box>
    </ScrollView>
  );
};
export default ExpertProfileScreen;
