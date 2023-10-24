import React from "react";
import { VStack, Text, Heading, HStack } from "native-base";
import ChatHeaderImage from "./ChatHeaderImage";
import { truncateText } from "../../../utils/helpers/components/common/truncateText";

const ChatHeader = ({
  texterName,
  texterProfileImage,
  taskThumbnailImage,
  taskTitle,
  taskStartDate,
}) => {
  return (
    <VStack space={2} mb={6} mt={10} alignItems="center">
      <ChatHeaderImage
        taskURL={taskThumbnailImage}
        profileURL={texterProfileImage}
      />
      <HStack>
        <Text fontSize="16">{texterName}</Text>
        <Text fontSize="16"> · </Text>
        <Text fontSize="16" fontWeight="bold">
          {truncateText(taskTitle, 24)}
        </Text>
      </HStack>
      <Text
        textAlign="center"
        fontSize="14"
        fontStyle="italic"
        px={8}
        color="secondary.grey">
        {`You started a conversation with ${texterName} on ${taskStartDate}`}
      </Text>
    </VStack>
  );
};

export default ChatHeader;
