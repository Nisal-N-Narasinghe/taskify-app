import { View } from "react-native";
import React from "react";
import { Box, HStack, Text } from "native-base";

const ChatBubble = ({ message: { text, sentBy, sentTime, id }, alignLeft }) => {
  function wrapText(text, maxLength) {
    const words = text.split(" ");
    let currentLine = "";
    const lines = [];

    for (const word of words) {
      if (currentLine.length + word.length <= maxLength) {
        currentLine += (currentLine.length > 0 ? " " : "") + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }

    if (currentLine.length > 0) {
      lines.push(currentLine);
    }

    return lines.join("\n");
  }

  return (
    <View>
      <HStack justifyContent={alignLeft ? "flex-start" : "flex-end"}>
        <Box
          position="relative"
          rounded={15}
          py={3}
          px={5}
          pb={6}
          bgColor={alignLeft ? "primary.grey" : "primary.green"}>
          <Text
            color={alignLeft ? "primary.black" : "primary.white"}
            textAlign="left"
            fontWeight={400}>
            {wrapText(text, 35)}
          </Text>
          <Text
            fontSize={10}
            position="absolute"
            right="0%"
            bottom="0%"
            pb={2}
            pr={3}
            color={alignLeft ? "secondary.grey" : "primary.white"}
            fontWeight={500}
            // style={{
            //   fontSize: "10",
            //   position: "absolute",
            //   right: "6%",
            //   bottom: "12%",
            //   color: "#d1d1d1",
            // }}
          >
            00:58
          </Text>
        </Box>
      </HStack>
    </View>
  );
};

export default ChatBubble;
