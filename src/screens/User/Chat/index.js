import { View } from "react-native";
import React from "react";
import ChatContainer from "../../../components/common/Chat/ChatContainer";
import {
  Box,
  Button,
  HStack,
  Icon,
  Input,
  ScrollView,
  Text,
} from "native-base";
import { Feather } from "@expo/vector-icons";

const UserChat = () => {
  return (
    <>
      <ScrollView
        bg="primary.white"
        px={3}
        ref={(ref) => {
          this.scrollView = ref;
        }}
        onContentSizeChange={() =>
          this.scrollView.scrollToEnd({ animated: true })
        }>
        <ChatContainer />
      </ScrollView>
      <HStack bg="primary.white" p={3} justifyContent="space-between">
        <Input
          placeholder="Enter a message"
          placeholderTextColor="primary.black"
          bgColor="primary.grey"
          outlineColor="transparent"
          rounded={100}
          fontSize={16}
          py={2.5}
          focusOutlineColor="transparent"
          w={"80%"}
        />
        <Button
          width=""
          variant="solid"
          bgColor="primary.green"
          rounded={100}
          w={10}>
          <Feather name="send" size={20} color="white" />
        </Button>
      </HStack>
    </>
  );
};

export default UserChat;
