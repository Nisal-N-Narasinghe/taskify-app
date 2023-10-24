import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  ScrollView,
  Stack,
  Text,
} from "native-base";
import React from "react";
import StepIndicator from "../../../../components/common/StepIndicators";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const CreateTaskImage = () => {
  const navigation = useNavigation();

  const handleUpload = () => {
    navigation.navigate("CreateTaskSuccessPage");
  };

  return (
    <Box padding={3}>
      <StepIndicator currentStep={3} />
      <Heading marginTop={6} size="md" alignSelf="center">
        Please Upload an Image
      </Heading>
      <Text fontWeight="500" marginBottom={6} alignSelf="center">
        Upload images related to task
      </Text>
      <Box alignItems="center">
        <Box
          // w="100%"
          w="full"
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
          <Stack alignItems="center">
            <Stack space={2}>
              <Heading size="md" ml="-1" marginTop={6} marginBottom={4}>
                Upload Image
              </Heading>
              <Icon
                alignSelf="center"
                //   m="2"
                //   ml="3"
                size="10"
                color="gray.400"
                as={<MaterialIcons name="image" />}
                marginBottom={4}
              />
              <Button onPress={handleUpload} marginBottom={6}>
                Upload
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateTaskImage;
