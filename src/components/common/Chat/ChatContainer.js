import { View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { HStack, Text, VStack } from "native-base";
import ChatHeader from "./ChatHeader";
import { firebase } from "../../../../config";
import ChatItemHandler from "./ChatItemHandler";

const ChatContainer = ({ isExpert, navigation }) => {
  const [chatStream, setChatStream] = useState([]);

  useEffect(() => {
    fetchChatMessages();

    const chatPath = "/conversations/gnAGmx7ZEJVffUr85V8W/stream";
    const listener = firebase
      .firestore()
      .collection(chatPath)
      .orderBy("createdAt")
      .onSnapshot((querySnapshot) => {
        const messages = [];
        querySnapshot.forEach((doc) => {
          const messageData = doc.data();
          const messageId = doc.id; // Get the document ID
          messages.push({ id: messageId, ...messageData }); // Include the ID in the message object
        });
        setChatStream(messages);
      });

    return () => {
      listener();
    };
  }, []);

  const fetchChatMessages = () => {
    const chatPath = "/conversations/gnAGmx7ZEJVffUr85V8W/stream";

    firebase
      .firestore()
      .collection(chatPath)
      .get()
      .then((querySnapshot) => {
        const messages = [];
        querySnapshot.forEach((doc) => {
          const messageData = doc.data();
          messages.push(messageData);
        });
        setChatStream(messages);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
      });
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
        {chatStream.map((chatItem, index) => (
          <ChatItemHandler
            isExpert={isExpert}
            key={index}
            chatItem={chatItem}
            navigation={navigation}
          />
        ))}

        <HStack></HStack>
      </VStack>
    </View>
  );
};

export default ChatContainer;
