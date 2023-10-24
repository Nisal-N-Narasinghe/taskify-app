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
  Row,
  Button,
} from "native-base";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import StepIndicator from "../../../../components/common/StepIndicators";
import CleanImg from "../../../../../assets/cleaning.jpg";
import PlumberImg from "../../../../../assets/plumber.jpg";
import ElectricImg from "../../../../../assets/electrician.jpg";
import GardenImg from "../../../../../assets/gardening.jpg";
import ComputerImg from "../../../../../assets/computer.jpg";
import DogImg from "../../../../../assets/dog.jpg";
import UpperImg from "../../../../../assets/upperWidget.png";
import styles from "../../../../styles/User";
import { TouchableOpacity } from "react-native";
import SearchBar from "../../../../components/common/SearchBar";
import { useNavigation } from "@react-navigation/native";

const CreateTaskCategory = () => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("CreateTaskDetailsPage");
  };
  return (
    <Box padding={3}>
      <ScrollView w={["100vw", "100vw"]} minHeight="100vw">
        <StepIndicator currentStep={1} />
        <Heading marginTop={3} size="md">
          Create Your Task Now
        </Heading>
        <Heading size="md">Select your task catagory</Heading>
        <Box>
          <AspectRatio w="100%" ratio={30 / 10} marginTop={3}>
            <Image
              source={UpperImg}
              alt="image"
              width="100%"
              height="auto"
              rounded="lg"
              opacity="70"
            />
          </AspectRatio>
        </Box>

        <SearchBar marginTop={4} marginBottom={4} />

        <VStack space={3}>
          <HStack space={3}>
            {/* First Box */}
            <TouchableOpacity style={{ flex: 1 }} onPress={handleClick}>
              <Box
                id="clean"
                maxW="100%"
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                  borderColor: "coolGray.600",
                  backgroundColor: "gray.700",
                }}
                _web={{
                  shadow: 2,
                  borderWidth: 0,
                }}
                _light={{
                  backgroundColor: "gray.50",
                }}>
                <Box>
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <Image
                      source={CleanImg}
                      alt="image"
                      width="100%"
                      height="auto"
                    />
                  </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      Cleaning
                    </Heading>
                  </Stack>
                </Stack>
              </Box>
            </TouchableOpacity>

            {/* second box*/}
            <TouchableOpacity style={{ flex: 1 }} onPress={handleClick}>
              <Box
                maxW="100%"
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                  borderColor: "coolGray.600",
                  backgroundColor: "gray.700",
                }}
                _web={{
                  shadow: 2,
                  borderWidth: 0,
                }}
                _light={{
                  backgroundColor: "gray.50",
                }}>
                <Box>
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <Image
                      source={PlumberImg}
                      alt="image"
                      width="100%"
                      height="auto"
                    />
                  </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      Plumbing
                    </Heading>
                  </Stack>
                </Stack>
              </Box>
            </TouchableOpacity>
          </HStack>
          <HStack space={3}>
            {/* First Box */}
            <TouchableOpacity style={{ flex: 1 }} onPress={handleClick}>
              <Box
                maxW="100%"
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                  borderColor: "coolGray.600",
                  backgroundColor: "gray.700",
                }}
                _web={{
                  shadow: 2,
                  borderWidth: 0,
                }}
                _light={{
                  backgroundColor: "gray.50",
                }}>
                <Box>
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <Image
                      source={ElectricImg}
                      alt="image"
                      width="100%"
                      height="auto"
                    />
                  </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      Electric Work
                    </Heading>
                  </Stack>
                </Stack>
              </Box>
            </TouchableOpacity>

            {/* second box*/}
            <TouchableOpacity style={{ flex: 1 }} onPress={handleClick}>
              <Box
                maxW="100%"
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                  borderColor: "coolGray.600",
                  backgroundColor: "gray.700",
                }}
                _web={{
                  shadow: 2,
                  borderWidth: 0,
                }}
                _light={{
                  backgroundColor: "gray.50",
                }}>
                <Box>
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <Image
                      source={GardenImg}
                      alt="image"
                      width="100%"
                      height="auto"
                    />
                  </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      Landscaping
                    </Heading>
                  </Stack>
                </Stack>
              </Box>
            </TouchableOpacity>
          </HStack>
          <HStack space={3}>
            {/* First Box */}
            <TouchableOpacity
              key={"Computer Repair"}
              style={{ flex: 1 }}
              onPress={handleClick()}>
              <Box
                maxW="100%"
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                  borderColor: "coolGray.600",
                  backgroundColor: "gray.700",
                }}
                _web={{
                  shadow: 2,
                  borderWidth: 0,
                }}
                _light={{
                  backgroundColor: "gray.50",
                }}>
                <Box>
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <Image
                      source={ComputerImg}
                      alt="image"
                      width="100%"
                      height="auto"
                    />
                  </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      Computer Repair
                    </Heading>
                  </Stack>
                </Stack>
              </Box>
            </TouchableOpacity>

            {/* second box*/}
            <TouchableOpacity style={{ flex: 1 }} onPress={handleClick}>
              <Box
                maxW="100%"
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                  borderColor: "coolGray.600",
                  backgroundColor: "gray.700",
                }}
                _web={{
                  shadow: 2,
                  borderWidth: 0,
                }}
                _light={{
                  backgroundColor: "gray.50",
                }}>
                <Box>
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <Image
                      source={DogImg}
                      alt="image"
                      width="100%"
                      height="auto"
                    />
                  </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      Pet Care
                    </Heading>
                  </Stack>
                </Stack>
              </Box>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default CreateTaskCategory;
