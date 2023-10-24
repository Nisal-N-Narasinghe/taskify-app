import { View, Text } from "react-native";
import React from "react";
import ChatContainer from "../../../components/common/Chat/ChatContainer";
import { ScrollView } from "native-base";

const UserChat = () => {
  return (
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
  );
};

export default UserChat;
