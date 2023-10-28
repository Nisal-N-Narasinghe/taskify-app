import React from "react";
import { Actionsheet, View, Text, Button, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const ChatOptionsActionSheet = ({
  isOpen,
  onClose,
  sendOfferPopup,
  attachImagePopup,
  isExpert,
}) => {
  return (
    <Actionsheet
      isOpen={isOpen}
      onClose={() => {
        onClose();
      }}>
      <Actionsheet.Content>
        <VStack w="full" p={3} space={2}>
          <Text fontSize={16} fontWeight="semibold">
            Chat options
          </Text>
          {isExpert && (
            <Button
              justifyContent={"left"}
              h={10}
              rounded={100}
              p={0}
              px={6}
              colorScheme={"emerald"}
              endIcon={
                <Ionicons name="arrow-forward" size={24} color="white" />
              }
              onPress={() => {
                sendOfferPopup();
                onClose();
              }}>
              <Text fontSize={17} fontWeight="semibold" color={"primary.white"}>
                Send offer
              </Text>
            </Button>
          )}
          <Button
            justifyContent={"left"}
            h={10}
            rounded={100}
            p={0}
            px={6}
            backgroundColor={"primary.black"}
            _pressed={{ backgroundColor: "#404040" }}
            endIcon={<Ionicons name="image-outline" size={24} color="white" />}
            onPress={() => {
              attachImagePopup();
              onClose();
            }}>
            <Text fontSize={17} fontWeight="semibold" color={"primary.white"}>
              Attach image
            </Text>
          </Button>
        </VStack>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default ChatOptionsActionSheet;
