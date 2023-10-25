import {
  AspectRatio,
  Box,
  Image,
  Text,
  Stack,
  HStack,
  Heading,
  VStack,
  Input,
  Icon,
  ScrollView,
  Center,
  Select,
  CheckIcon,
  Radio,
  NativeBaseProvider,
  extendTheme,
  StackDivider,
  Button,
  FlatList,
  Avatar,
  Spacer,
  Card,
  AlertDialog,
  Modal,
  FormControl,
} from "native-base";
import { View } from "react-native";
import React from "react";
import AddRatings from "../../components/common/StarRatings";
import UpperImg from "../../../assets/upperWidget.png";

const AddFeedback = () => {
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
              <Text fontWeight={400}>Quality Of Work</Text>
              {/*  <Heading size="md">Details</Heading> */}
            </VStack>
            <VStack flex={1} marginRight={15}>
              <AddRatings />
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
              <AddRatings />
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
              <AddRatings />
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
              <AddRatings />
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
              <AddRatings />
            </VStack>
          </HStack>
        </Box>
      </Card>
      <Button margin={5}>Publish Feedback</Button>
    </ScrollView>
  );
};

export default AddFeedback;
