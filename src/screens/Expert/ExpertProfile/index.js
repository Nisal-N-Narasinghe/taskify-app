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
      <Box flexDirection='row'>
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

      <Box>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pt={4}
          mb={4}>
          <Flex flexDirection='row' width='auto' pl={1}>
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
        <VStack paddingX={4} paddingY={2}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Expert Area", { id })}>
            <ExpertCard
              title='Electrician'
              JobDiscription='Description expert area'
              jobcount='Jobs Done : 3'
              experience='Experience : 5 years'
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Expert Area", { id })}>
            <ExpertCard
              title='Electrician'
              JobDiscription='Description expert area'
              jobcount='Jobs Done : 3'
              experience='Experience : 5 years'
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Expert Area", { id })}>
            <ExpertCard
              title='Electrician'
              JobDiscription='Description expert area'
              jobcount='Jobs Done : 3'
              experience='Experience : 5 years'
            />
          </TouchableOpacity>
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
