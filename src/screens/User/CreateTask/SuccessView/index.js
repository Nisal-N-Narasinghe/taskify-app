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
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CreateTaskSuccess = () => {
  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate("Task Dashboard");
  };
  return (
    <Box alignItems="center" padding={3}>
      <StepIndicator currentStep={5} />
      <Box
        w="full"
        h={"lg"}
        rounded="lg"
        borderColor="coolGray.200"
        borderWidth="2"
        alignItems="center"
        marginTop={6}
        padding={6}
      >
        <Ionicons
          name="checkmark-done-circle-sharp"
          size={70}
          color="green"
          marginTop={50}
        />
        <Heading size="md" alignSelf="center" marginTop={"20"}>
          Task Created Successfuly
        </Heading>

        <Stack
          flex={1}
          alignItems={"center"}
          justifyContent="flex-end"
          marginBottom={6}
        >
          <Text fontWeight="500" marginBottom={"4"}>
            Click here to view the task
          </Text>
          <Button w={"48"} onPress={handleContinue}>
            Continue
          </Button>
        </Stack>
      </Box>
      {/* </Box> */}
    </Box>
  );
};

export default CreateTaskSuccess;
