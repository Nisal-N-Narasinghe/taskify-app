import React, { useState, useEffect } from "react";
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
import "firebase/firestore";
import { firebase } from "../../../../config";
import {
  ExpertCard,
  RatingCard,
} from "../../../components/Expert/ExpertProfile";
import { TouchableOpacity } from "react-native";
const ExpertProfileScreen = ({ navigation }) => {
  const [completedWorks, setCompletedWorks] = useState([]);
  const id = 123;
  const [userData, setUserData] = useState("");

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setUserData(snapshot.data());
        } else {
          console.log("User does not exist");
        }
      });
  }, []);

  console.log(userData);

  const handleHistoryButton = () => {
    navigation.navigate("Expert Job History");
  };
  const handleAddExpertiseArea = () => {
    navigation.navigate("Add New Expert");
  };

  const ratingsData = [
    { review: "Quality", rating: 3.2 },
    { review: "Cleanliness", rating: 4.0 },
    { review: "Timeliness", rating: 3.8 },
    { review: "Communication", rating: 4.5 },
    { review: "Satifaction", rating: 4.0 },
  ];
  /* const expertiseAreas = [
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
  ]; */
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
    <ScrollView
      flex={1}
      showsVerticalScrollIndicator={true}
      background={"white"}>
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
            {userData.firstName} {userData.lastName}
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
          {completedWorks.map((work) => (
            <TouchableOpacity
              key={work.id}
              onPress={() =>
                navigation.navigate("Expert Area", { expertId: work.id })
              }>
              <ExpertCard
                title={work.service}
                JobDiscription={work.location}
                jobcount={`Working Days : ${work.days}`}
                experience={`Description : ${work.name}`}
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
