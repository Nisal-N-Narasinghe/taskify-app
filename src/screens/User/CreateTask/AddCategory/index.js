import {
  AspectRatio,
  Box,
  Image,
  HStack,
  Heading,
  VStack,
  ScrollView,
  Center,
} from "native-base";
import React from "react";
import StepIndicator from "../../../../components/common/StepIndicators";
import CleanImg from "../../../../../assets/cleaning.jpg";
import PlumberImg from "../../../../../assets/plumber.jpg";
import ElectricImg from "../../../../../assets/electrician.jpg";
import GardenImg from "../../../../../assets/gardening.jpg";
import ComputerImg from "../../../../../assets/computer.jpg";
import DogImg from "../../../../../assets/dog.jpg";
import UpperImg from "../../../../../assets/upperWidget.png";
import { TouchableOpacity } from "react-native";
import SearchBar from "../../../../components/common/SearchBar";
import { CategoryItem } from "../../../../components/User/CreateTask/AddCategory";

const CreateTaskCategory = ({ navigation }) => {
  const handleClick = (category) => {
    navigation.navigate("Task Details", { category });
    console.log(category);
  };

  return (
    <Box padding={3}>
      <ScrollView>
        <Box marginTop={6}>
          <StepIndicator totalSteps={4} currentStep={1} />
        </Box>
        <Center>
          <Heading marginTop={3} size='lg' marginBottom={4}>
            Create Your Task Now
          </Heading>
        </Center>
        <Heading size='md'>Select your task catagory</Heading>
        <Box>
          <AspectRatio w='100%' ratio={30 / 10} marginTop={3}>
            <Image
              source={UpperImg}
              alt='image'
              width='100%'
              height='auto'
              rounded='lg'
              opacity='70'
            />
          </AspectRatio>
        </Box>

        <SearchBar marginTop={4} marginBottom={4} />

        <VStack space={3}>
          <HStack space={3}>
            {/* First Box */}
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => {
                handleClick("Cleaning");
              }}>
              <CategoryItem image={CleanImg} category='Cleaning' />
            </TouchableOpacity>

            {/* second box*/}
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => {
                handleClick("Plumbing");
              }}>
              <CategoryItem image={PlumberImg} category={"Plumbing"} />
            </TouchableOpacity>
          </HStack>
          <HStack space={3}>
            {/* First Box */}
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => {
                handleClick("Electric Work");
              }}>
              <CategoryItem image={ElectricImg} category={"Electric Work"} />
            </TouchableOpacity>

            {/* second box*/}
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => {
                handleClick("Landscaping");
              }}>
              <CategoryItem image={GardenImg} category={"Landscaping"} />
            </TouchableOpacity>
          </HStack>
          <HStack space={3}>
            {/* First Box */}
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => {
                handleClick("Computer Repair");
              }}>
              <CategoryItem image={ComputerImg} category={"Computer Repair"} />
            </TouchableOpacity>

            {/* second box*/}
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => {
                handleClick("Pet Care");
              }}>
              <CategoryItem image={DogImg} category={"Pet Care"} />
            </TouchableOpacity>
          </HStack>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default CreateTaskCategory;
