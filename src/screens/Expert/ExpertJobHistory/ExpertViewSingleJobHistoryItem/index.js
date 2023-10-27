import React, { useState } from "react";
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
  Text,
  HStack,
} from "native-base";

import { Ionicons } from "@expo/vector-icons";

import { RatingCards } from "../../../../components/Expert/ExpertProfile";
import { TouchableOpacity } from "react-native";

import ImageSlider from "../../../../components/common/ImageSlider";
import ImageSliderIndicator from "../../../../components/common/ImageSliderIndicator";
import { styles } from "../../../../styles/Expert/ExpertJobHistory/ExpertViewSingleJobHistoryItem";
import { truncateText } from "../../../../utils/helpers/components/common/truncateText";
const ExpertViewSingleJobHistoryItem = ({ navigation }) => {
  const handleAddExpertiseArea = () => {
    navigation.navigate("Add New Expert");
  };
  const images = [
    require("../../../../../assets/Expertimages/HousePlanning/housePlanSketch.jpg"),
    require("../../../../../assets/Expertimages/HousePlanning/housePlanSketch2.jpg"),
    require("../../../../../assets/Expertimages/HousePlanning/housePlane3D.jpg"),
    require("../../../../../assets/Expertimages/HousePlanning/housePlane3D2.jpg"),
  ];
  const [currentStep, setCurrentStep] = useState(0);

  const handleSwiperIndexChanged = (index) => {
    setCurrentStep(index + 1);
  };
  const ratingData = [
    { heading: "Quality", rating: 4.0 },
    { heading: "Cleanliness", rating: 3.2 },
    { heading: "Timeliness", rating: 3.8 },
    { heading: "Communication", rating: 3.0 },
    { heading: "Satisfaction", rating: 4.5 },
  ];

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={true}>
      <Box safeArea flex={1} style={styles.container} background={"white"}>
        <Heading m={4}>Cleaning Job</Heading>
        <Box flex={1} pl={4}>
          <ImageSlider
            images={images}
            onIndexChanged={handleSwiperIndexChanged}
          />
          <ImageSliderIndicator
            currentStep={currentStep}
            totalStep={images.length}
          />
        </Box>
        <Box style={styles.ratingsFrame} shadow={2}>
          <Heading m={4} fontSize={18}>
            Ratings
          </Heading>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Flex flex={1} flexDirection='row' width='auto'>
              {ratingData.map((data, index) => (
                <RatingCards
                  key={index}
                  heading={data.heading}
                  rating={data.rating}
                />
              ))}
            </Flex>
          </ScrollView>

          <Text style={styles.ratingsFrameText}>
            Outstanding house planning service! Mr Kamal exceeded expectations
            with their professionalism, innovative designs, on-time completion,
            and budget adherence. Highly recommended for turning dreams into
            reality.
          </Text>
        </Box>
      </Box>
      <Box flex={1} pt={4} background={"white"}>
        <Box pb={4} pl={4}>
          <HStack>
            <Icon as={Ionicons} name='alarm-outline' size={6} mr={2} ml={2} />
            <Text style={styles.dateAndTimeText} pb={1}>
              Start: 9.00 AM - 26/10/2023
            </Text>
          </HStack>
        </Box>
        <Box pb={8} pl={4}>
          <HStack>
            <Icon as={Ionicons} name='alarm-outline' size={6} mr={2} ml={2} />
            <Text style={styles.dateAndTimeText} pb={1}>
              End: 12.10 PM - 27/10/2023
            </Text>
          </HStack>
        </Box>
        <Box alignItems='center' pb={8}>
          <Text style={styles.jobAmount}>8,000 LKR</Text>
        </Box>
      </Box>
    </ScrollView>
  );
};
export default ExpertViewSingleJobHistoryItem;
