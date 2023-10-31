import React from "react";
import ChatBubble from "./ChatBubble";
import OfferCard from "../OfferCard.js";
import ExpertOfferCard from "../OfferCard.js/expertOfferCard";

const ChatItemHandler = ({ chatItem, isExpert, navigation }) => {
  if (chatItem.type === "text" || chatItem.type === "image") {
    if (chatItem.sentBy === "client") {
      return <ChatBubble alignLeft={isExpert} message={chatItem} />;
    }
    if (chatItem.sentBy === "expert") {
      return <ChatBubble alignLeft={!isExpert} message={chatItem} />;
    }
  } else if (chatItem.type === "offer") {
    if (isExpert) {
      return (
        <ExpertOfferCard
          id={chatItem.id}
          offer={chatItem.offerValue}
          status={chatItem.status}
          taskID={chatItem.taskID}
          navigation={navigation}
        />
      );
    }
    return (
      <OfferCard
        id={chatItem.id}
        offer={chatItem.offerValue}
        status={chatItem.status}
        taskID={chatItem.taskID}
        navigation={navigation}
      />
    );
  }
};

export default ChatItemHandler;
