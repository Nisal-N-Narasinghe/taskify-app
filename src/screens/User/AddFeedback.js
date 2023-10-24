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
    </ScrollView>
  );
};

export default AddFeedback;
