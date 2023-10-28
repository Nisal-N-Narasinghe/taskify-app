import {
  Button,
  Center,
  HStack,
  Input,
  Modal,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import { firebase } from "../../../config";

const SendOfferPopup = ({ isOpen, onClose }) => {
  const [offer, setOffer] = useState(null);

  const handleSendOffer = () => {
    const data = {
      type: "offer",
      offerValue: offer,
      createdAt: new Date(),
      status: "pending",
    };

    setOffer("");

    const chatPath = "/conversations/gnAGmx7ZEJVffUr85V8W/stream"; // Replace with your chat path

    firebase
      .firestore()
      .collection(chatPath)
      .add(data)
      .then((docRef) => {
        // console.log("Message written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding message: ", error);
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
      }}>
      <Modal.Content maxWidth="400px" rounded={24}>
        <Modal.Body>
          <VStack space={2}>
            <HStack alignItems="center">
              <Feather name="zap" size={22} color="black" />
              <Text ml={1} fontSize={17} fontWeight="semibold">
                Create an offer (LKR)
              </Text>
            </HStack>
            <Input
              // defaultValue="8,000"
              value={offer}
              onChange={(e) => {
                setOffer(e.nativeEvent.text);
              }}
              flex={1}
              rounded={18}
              h="70"
              placeholder="Your offer"
              //   p={4}
              textAlign="center"
              fontSize={32}
              fontWeight="bold"
              color="primary.green"
              backgroundColor="primary.grey"
              // outlineColor="transparent"
              focusOutlineColor="transparent"
              justifyContent="center"
              alignItems="center"
            />
            <Button
              justifyContent={"center"}
              h={10}
              rounded={100}
              p={0}
              px={6}
              colorScheme={"emerald"}
              endIcon={
                <Ionicons name="checkmark-sharp" size={24} color="white" />
              }
              onPress={() => {
                handleSendOffer();
                onClose();
              }}>
              <Text fontSize={17} fontWeight="semibold" color={"primary.white"}>
                Send offer
              </Text>
            </Button>
            <Button
              justifyContent={"center"}
              h={10}
              rounded={100}
              p={0}
              px={6}
              backgroundColor={"primary.black"}
              _pressed={{ backgroundColor: "#404040" }}
              endIcon={<Ionicons name="close-sharp" size={24} color="white" />}
              onPress={() => {
                onClose();
              }}>
              <Text fontSize={17} fontWeight="semibold" color={"primary.white"}>
                Cancel
              </Text>
            </Button>
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default SendOfferPopup;
