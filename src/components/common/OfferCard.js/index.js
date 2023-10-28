import { View, Text, HStack, VStack, Button } from "native-base";
import React from "react";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { firebase } from "../../../../config";

const OfferCard = (props) => {
  const handleAcceptOffer = (offerId) => {
    const offerPath = `/conversations/gnAGmx7ZEJVffUr85V8W/stream/${offerId}`;

    firebase
      .firestore()
      .doc(offerPath)
      .update({ status: "accepted" })
      .then(() => {
        alert("Offer accepted successfully.");
        // console.log("Offer accepted successfully.");
      })
      .catch((error) => {
        // console.error("Error accepting offer:", error);
      });
  };

  if (props.status === "pending") {
    return (
      <LinearGradient
        style={{ borderRadius: 18 }}
        colors={["#149873", "#14DCA4"]}
        start={[0, 0]}
        end={[1, 0]}>
        <VStack p={4} space={2} alignItems="center">
          <HStack alignItems="center">
            <Feather name="zap" size={22} color="white" />
            <Text ml={1} fontSize={17} color="white" fontWeight="semibold">
              You received an offer
            </Text>
          </HStack>
          <Text mt="-1" color="white" fontSize="36" fontWeight="bold">
            {props.offer} LKR
          </Text>
          <Button
            w="full"
            justifyContent={"center"}
            h={10}
            rounded={100}
            p={0}
            px={6}
            backgroundColor={"primary.white"}
            _pressed={{ backgroundColor: "#EFEFEF" }}
            endIcon={
              <Ionicons name="checkmark-sharp" size={24} color="#149873" />
            }
            onPress={() => handleAcceptOffer(props.id)}>
            <Text fontSize={17} fontWeight="semibold" color={"primary.green"}>
              Accept
            </Text>
          </Button>
          <Button
            w="full"
            justifyContent={"center"}
            h={10}
            rounded={100}
            p={0}
            px={6}
            backgroundColor={"primary.black"}
            _pressed={{ backgroundColor: "#404040" }}
            endIcon={<Ionicons name="close-sharp" size={24} color="white" />}
            onPress={() => {}}>
            <Text fontSize={17} fontWeight="semibold" color={"primary.white"}>
              Decline
            </Text>
          </Button>
          <HStack alignItems="center" mt={1}>
            <MaterialCommunityIcons name="timer-sand" size={22} color="white" />
            <Text ml={1} fontSize={17} color="white" fontWeight="normal">
              Expires in 1 day
            </Text>
          </HStack>
        </VStack>
      </LinearGradient>
    );
  } else if (props.status === "accepted") {
    return (
      <LinearGradient
        style={{ borderRadius: 18 }}
        colors={["#149873", "#14DCA4"]}
        start={[0, 0]}
        end={[1, 0]}>
        <VStack p={4} space={2} alignItems="center">
          <Text color="white" fontSize="36" fontWeight="bold">
            {props.offer} LKR
          </Text>
          <HStack mt="-1" mb="1" alignItems="center">
            <Text mr={1} fontSize={17} color="white" fontWeight="semibold">
              You accepted this offer
            </Text>
            <MaterialCommunityIcons
              name="checkbox-marked-circle-outline"
              size={24}
              color="white"
            />
          </HStack>

          <Button
            w="full"
            justifyContent={"center"}
            h={10}
            rounded={100}
            p={0}
            px={6}
            backgroundColor={"primary.white"}
            _pressed={{ backgroundColor: "#EFEFEF" }}
            endIcon={
              <Ionicons name="arrow-forward-sharp" size={24} color="#149873" />
            }
            onPress={() => {}}>
            <Text fontSize={17} fontWeight="semibold" color={"primary.green"}>
              View Progress
            </Text>
          </Button>
        </VStack>
      </LinearGradient>
    );
  } else if (props.status === "rejected") {
    return (
      <LinearGradient
        style={{ borderRadius: 18 }}
        colors={["#EF7D41", "#FBA071"]}
        start={[0, 0]}
        end={[1, 0]}>
        <VStack p={4} space={2} alignItems="center">
          <Text
            textDecorationLine="line-through"
            mt="-1"
            color="white"
            fontSize="36"
            fontWeight="bold">
            {props.offer} LKR
          </Text>
          <HStack alignItems="center">
            <Text mr={1} fontSize={17} color="white" fontWeight="semibold">
              You declined this offer
            </Text>
            <Ionicons name="close-sharp" size={22} color="white" />
          </HStack>
        </VStack>
      </LinearGradient>
    );
  }
};

export default OfferCard;
