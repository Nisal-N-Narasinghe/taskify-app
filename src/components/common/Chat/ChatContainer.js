import { View, Text } from "react-native";
import React from "react";
import { HStack, VStack } from "native-base";
import ChatBubble from "./ChatBubble";

const ChatContainer = () => {
  const message = {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    sentBy: "user",
    sentTime: "2021-10-11T16:22:00.000Z",
    id: 1,
  };
  const message1 = {
    text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. ",
    sentBy: "user",
    sentTime: "2021-10-11T16:22:00.000Z",
    id: 1,
  };
  return (
    <View>
      <VStack space={2}>
        <HStack></HStack>
        <ChatBubble message={message} alignLeft={true} />
        <ChatBubble message={message1} alignLeft={false} />
        <ChatBubble message={message} alignLeft={false} />
        {/* <ChatBubble message={message1} alignLeft={true} /> */}
        <ChatBubble message={message1} alignLeft={true} />
        <ChatBubble message={message1} alignLeft={true} />
        <ChatBubble message={message1} alignLeft={true} />
        <ChatBubble message={message1} alignLeft={true} />
        <ChatBubble message={message1} alignLeft={true} />
        <HStack></HStack>
      </VStack>
    </View>
  );
};

export default ChatContainer;
