import { View, Text } from "react-native";
import React from "react";
import ChatBubble from "./ChatBubble";

const ChatItemHandler = ({ chatItem, isExpert }) => {
  if (chatItem.sentBy === "client") {
    return <ChatBubble alignLeft={isExpert} message={chatItem} />;
  }

  if (chatItem.sentBy === "expert") {
    return <ChatBubble alignLeft={!isExpert} message={chatItem} />;
  }
};

export default ChatItemHandler;
