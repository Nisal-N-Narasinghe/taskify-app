// import { View } from "react-native";
import React, { useState } from "react";
import ChatContainer from "../../../components/common/Chat/ChatContainer";
import {
  Actionsheet,
  Box,
  Button,
  HStack,
  Input,
  PresenceTransition,
  ScrollView,
  Text,
  VStack,
  View,
  useDisclose,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import ChatOptionsActionSheet from "../../../components/common/Chat/ChatOptionsActionSheet";
import SendOfferPopup from "../../../components/Offer/SendOfferPopup";

const UserChat = () => {
  const [showChatOptions, setShowChatOptions] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclose();

  const [showOfferPopup, setShowOfferPopup] = useState(false);

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

      <HStack bg="primary.white" p={3} space={2}>
        <Input
          flex={1}
          placeholder="Enter a message"
          placeholderTextColor="primary.black"
          bgColor="primary.grey"
          outlineStyle="solid"
          rounded={100}
          fontSize={16}
          pl={4}
          pr={4}
          focusOutlineColor="transparent"
        />
        <TouchableOpacity
          _pressed={{ backgroundColor: "#404040" }}
          onPress={() => {
            setShowChatOptions(!showChatOptions);
            onOpen();
          }}>
          <Box bgColor="primary.green" p={2.5} rounded={100}>
            <Feather name="plus" size={20} color="white" />
          </Box>
        </TouchableOpacity>
        <TouchableOpacity>
          <Box bgColor="primary.green" p={2.5} rounded={100}>
            <Feather name="send" size={20} color="white" />
          </Box>
        </TouchableOpacity>
      </HStack>

      <ChatOptionsActionSheet
        isOpen={isOpen}
        onClose={() => {
          onClose();
        }}
        sendOfferPopup={() => {
          setShowOfferPopup(true);
        }}
        attachImagePopup={() => {
          alert("attach image");
        }}
      />

      <SendOfferPopup
        isOpen={showOfferPopup}
        onClose={() => {
          setShowOfferPopup(false);
        }}
      />
    </>
  );
};

export default UserChat;
