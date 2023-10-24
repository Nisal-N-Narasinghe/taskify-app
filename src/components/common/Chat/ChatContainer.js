import { View, TouchableOpacity } from "react-native";
import React from "react";
import { HStack, Text, VStack } from "native-base";
import ChatBubble from "./ChatBubble";
import ChatHeader from "./ChatHeader";

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

  const fetchMessages = () => {
    // TODO: Fetch messages from backend
  };

  const navigateToTaskListing = () => {
    alert("This should navigate to the relevant task listing");
  };

  return (
    <View>
      <VStack space={2}>
        <TouchableOpacity onPress={() => navigateToTaskListing()}>
          <ChatHeader
            texterName={"John Mayer"}
            texterProfileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNsOrgFUEOgQw7BtfBgmTEbwaLPssdYRloxw&usqp=CAU"
            taskThumbnailImage="https://assets.architecturaldigest.in/photos/622268cae66a108a6c6e5fa7/1:1/w_1080,h_1080,c_limit/12%20beautiful%20architectural%20gardens%20around%20the%20world%20.jpg"
            taskTitle="Example work listing here"
            taskStartDate="22 September 2023"
          />
        </TouchableOpacity>
        <ChatBubble message={message} alignLeft={true} />
        <ChatBubble message={message1} alignLeft={false} />
        <ChatBubble message={message} alignLeft={true} />
        <ChatBubble message={message} alignLeft={true} />
        <ChatBubble message={message} alignLeft={false} />
        {/* <ChatBubble message={message1} alignLeft={true} /> */}
        <ChatBubble message={message1} alignLeft={true} />
        <HStack></HStack>
      </VStack>
    </View>
  );
};

export default ChatContainer;
