import { View } from "react-native";
import React from "react";
import { Box, HStack, Text } from "native-base";
import { wrapText } from "../../../utils/common/textUtils";
import { convertFirebaseTimestampToTime } from "../../../utils/common/dateTimeUtils";

const ChatBubble = ({
  message: { textValue, sentBy, createdAt },
  alignLeft,
  id,
}) => {
  return (
    <View key={id}>
      <HStack justifyContent={alignLeft ? "flex-start" : "flex-end"}>
        <Box
          position="relative"
          rounded={15}
          py={3}
          px={5}
          pb={6}
          minW={24}
          bgColor={alignLeft ? "primary.grey" : "primary.green"}>
          <Text
            color={alignLeft ? "primary.black" : "primary.white"}
            textAlign="left"
            fontSize={16}
            fontWeight={400}>
            {wrapText(textValue, 35)}
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
            {createdAt && convertFirebaseTimestampToTime(createdAt)}
          </Text>
        </Box>
      </HStack>
    </View>
  );
};

export default ChatBubble;
