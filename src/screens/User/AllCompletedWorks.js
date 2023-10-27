import { Box, Image, Text, HStack, VStack, Card, Badge } from "native-base";
import { TouchableOpacity, View } from "react-native";
import UpperImg from "../../../assets/upperWidget.png";
//import { getDatabase, ref, onValue } from '@react-native-firebase/database';

import React, { useState, useEffect } from "react";
import { styles } from "../../styles/User/ViewTasks/ViewMyTasks";

const AllCompletedWorks = ({ navigation }) => {
  const [completedWorks, setCompletedWorks] = useState([]);

  //sample useeffect code for fetch data from api

  /*   useEffect(() => {
    const database = getDatabase();
    const worksRef = ref(database, "works"); // 'works' is the path to your data in Firebase

    const fetchData = () => {
      onValue(
        worksRef,
        (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            const worksArray = Object.values(data);
            setCompletedWorks(worksArray);
          } else {
            console.log("No data available");
          }
        },
        (error) => {
          console.error("Error fetching data:", error);
        }
      );
    };

    fetchData();
  }, []); */

  //sample useeffect code for fetch data from api

  /*   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("your_api_endpoint");
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        setCompletedWorks(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
  
    fetchData();
  }, []); */

  useEffect(() => {
    // Sample data for testing
    const sampleWorks = [
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
        title: "Garden Interlocking",
        location: "Kalutara",
        category: "Gardening",
        image:
          "https://i.pinimg.com/550x/24/87/c1/2487c194deace5b685e7e2681f1975e9.jpg",
      },
      {
        id: 3,
        title: "Plumbing System Work",
        location: "Colombo",
        category: "ELECTRIC",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcbPgIyDg2DrE1StdmJUUUtk28fE4eqbg1SA&usqp=CAU",
      },
    ];

    setCompletedWorks(sampleWorks);
  }, []);

  return (
    <View>
      {completedWorks.map((work) => (
        <TouchableOpacity
          key={work.id} // Replace 'id' with the actual unique identifier of your work
          onPress={() => navigation.navigate("Add Feedback")}>
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
                    src={work.image}
                    alt="image"
                    size="lg"
                    rounded="lg"
                  />
                </VStack>
                {["solid"].map((key) => (
                  <VStack space={2} flex={2} marginRight={-45} key={key}>
                    <Text bold fontSize="lg">
                      {work.title}
                    </Text>
                    <Text fontSize="sm">{work.location}</Text>
                    <Text bold fontSize="lg">
                      <Box style={styles.categoryLabel}>
                        <Text style={styles.categoryText}>Category</Text>
                      </Box>
                    </Text>
                  </VStack>
                ))}
              </HStack>
            </Box>
          </Card>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default AllCompletedWorks;
