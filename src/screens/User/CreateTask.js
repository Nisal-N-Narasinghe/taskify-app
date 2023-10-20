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
} from "native-base";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import StepIndicator from "../../components/stepIndicators/step1";
import CleanImg from "../../../assets/cleaning.jpg";
import PlumberImg from "../../../assets/plumber.jpg";
import ElectricImg from "../../../assets/electrician.jpg";
import GardenImg from "../../../assets/gardening.jpg";
import ComputerImg from "../../../assets/computer.jpg";
import DogImg from "../../../assets/dog.jpg";
import UpperImg from "../../../assets/upperWidget.png";
import { StyleSheet, TouchableOpacity } from "react-native";

function CreateTask() {
  return (
    <Box padding={3}>
      <ScrollView w={["100vw", "100vw"]} minHeight="100vw">
        <StepIndicator />
        <Heading marginTop={3} size="md">
          Create Your Task Now
        </Heading>
        <Heading size="md">Select your task catagory</Heading>
        <Box>
          <AspectRatio w="100%" ratio={30 / 10} marginBottom={4} marginTop={3}>
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

        <Input
          placeholder="Search Tasks"
          width="100%"
          borderRadius="16"
          py="2"
          px="1"
          fontSize="16"
          marginBottom={4}
          InputLeftElement={
            <Icon
              m="2"
              ml="3"
              size="6"
              color="gray.400"
              as={<MaterialIcons name="search" />}
            />
          }
        />
        <VStack space={3}>
          <HStack space={3}>
            {/* First Box */}
            <TouchableOpacity>
              <Box
                id="clean"
                maxW="1/2"
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
                }}
              >
                <Box>
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <Image
                      // style={styles.imgCard}
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
            <Box
              maxW="1/2"
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
              }}
            >
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
          </HStack>
          <HStack space={3}>
            {/* First Box */}
            <Box
              maxW="1/2"
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
              }}
            >
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

            {/* second box*/}
            <Box
              maxW="1/2"
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
              }}
            >
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
          </HStack>
          <HStack space={3}>
            {/* First Box */}
            <Box
              maxW="1/2"
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
              }}
            >
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

            {/* second box*/}
            <Box
              maxW="1/2"
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
              }}
            >
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
          </HStack>
        </VStack>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  imgCard: {
    width: 200,
    height: 300,
  },
});

export default CreateTask;
