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
export default ExpertProfileScreen;