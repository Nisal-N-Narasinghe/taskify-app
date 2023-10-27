import { View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { HStack, Text, VStack } from "native-base";
import ChatBubble from "./ChatBubble";
import ChatHeader from "./ChatHeader";
import { firebase } from "../../../../config";

const ChatContainer = () => {
  const [chatStream, setChatStream] = useState([]);

  useEffect(() => {
    // Fetch messages when the component is mounted
    fetchChatMessages();

    // Set up a real-time listener for new messages
    const chatPath = "/conversations/gnAGmx7ZEJVffUr85V8W/stream"; // Replace with your chat path
    const listener = firebase
      .firestore()
      .collection(chatPath)
      .orderBy("createdAt") // Order by a field in your messages
      .onSnapshot((querySnapshot) => {
        const messages = [];
        querySnapshot.forEach((doc) => {
          const messageData = doc.data();
          messages.push(messageData);
        });
        setChatStream(messages);
      });

    // Clean up the listener when the component unmounts
    return () => {
      listener();
    };
  }, []);

  const fetchChatMessages = () => {
    // Step 2: Fetch chat messages from Firebase
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
          <ChatItemHandler key={index} chatItem={chatItem} />
        ))}

        <HStack></HStack>
      </VStack>
    </View>
  );
};

export default ChatContainer;
