import React from "react";
import { Box, Image } from "native-base";

const ChatHeaderImage = ({ taskURL, profileURL }) => {
  return (
    <Box position="relative" mb={5}>
      <Box shadow={8}>
        <Image
          src={taskURL}
          w={100}
          h={100}
          rounded={16}
          borderColor={"primary.white"}
          borderWidth={2.5}
          alt=""
        />
      </Box>
      <Box
        shadow={4}
        position="absolute"
        right="0%"
        bottom="0%"
        mb="-5"
        mr="-5">
        <Image
          src={profileURL}
          w={12}
          h={12}
          rounded={100}
          borderColor={"primary.white"}
          borderWidth={2}
          alt=""
        />
      </Box>
    </Box>
  );
};

export default ChatHeaderImage;
