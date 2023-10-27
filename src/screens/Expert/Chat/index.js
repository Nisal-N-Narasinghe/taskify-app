// import { View } from "react-native";
import React, { useEffect, useState } from "react";
import ChatContainer from "../../../components/common/Chat/ChatContainer";
import { Box, HStack, Input, ScrollView, useDisclose } from "native-base";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import ChatOptionsActionSheet from "../../../components/common/Chat/ChatOptionsActionSheet";
import SendOfferPopup from "../../../components/Offer/SendOfferPopup";
import { firebase } from "../../../../config";

const UserChat = () => {
  const [showChatOptions, setShowChatOptions] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclose();

  const [showOfferPopup, setShowOfferPopup] = useState(false);

  const [messageToSend, setMessageToSend] = useState("");

  const sendMessage = () => {
    const data = {
      type: "text",
      textValue: messageToSend,
      sentBy: "expert",
      createdAt: new Date(),
    };

    setMessageToSend("");

    const chatPath = "/conversations/gnAGmx7ZEJVffUr85V8W/stream"; // Replace with your chat path

    firebase
      .firestore()
      .collection(chatPath)
      .add(data)
      .then((docRef) => {
        // console.log("Message written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding message: ", error);
      });
  };

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
        <ChatContainer isExpert={true} />
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
          value={messageToSend}
          onChangeText={(text) => setMessageToSend(text)}
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
        <TouchableOpacity onPress={sendMessage}>
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
