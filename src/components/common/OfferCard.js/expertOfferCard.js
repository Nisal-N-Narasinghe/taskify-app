import { View, Text, HStack, VStack, Button } from "native-base";
import React from "react";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const ExpertOfferCard = (props) => {
  if (props.status === "pending") {
    return (
      <LinearGradient
        style={{ borderRadius: 14 }}
        colors={["#149873", "#14DCA4"]}
        start={[0, 0]}
        end={[1, 0]}>
        <VStack p={4} space={2} alignItems="center">
          <HStack alignItems="center">
            <Feather name="zap" size={22} color="white" />
            <Text ml={1} fontSize={17} color="white" fontWeight="semibold">
              You sent an offer
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
              <Ionicons name="create-outline" size={24} color="#149873" />
            }
            onPress={() => {}}>
            <Text fontSize={17} fontWeight="semibold" color={"primary.green"}>
              Edit offer
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
              Cancel
            </Text>
          </Button>
        </VStack>
      </LinearGradient>
    );
  } else if (props.status === "accepted") {
    return (
      <LinearGradient
        style={{ borderRadius: 14 }}
        colors={["#149873", "#14DCA4"]}
        start={[0, 0]}
        end={[1, 0]}>
        <VStack p={4} space={2} alignItems="center">
          <HStack alignItems="center">
            <Text mr={1} fontSize={17} color="white" fontWeight="semibold">
              Offer accepted by client
            </Text>
            <MaterialCommunityIcons
              name="checkbox-marked-circle-outline"
              size={24}
              color="white"
            />
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
              <Ionicons name="arrow-forward-sharp" size={24} color="#149873" />
            }
            onPress={() => {}}>
            <Text fontSize={17} fontWeight="semibold" color={"primary.green"}>
              Open job description
            </Text>
          </Button>
          <Button
            w="full"
            justifyContent={"center"}
            h={10}
            rounded={100}
            p={0}
            px={6}
            backgroundColor={"primary.white"}
            _pressed={{ backgroundColor: "#EFEFEF" }}
            endIcon={<Ionicons name="map-outline" size={24} color="#149873" />}
            onPress={() => {}}>
            <Text fontSize={17} fontWeight="semibold" color={"primary.green"}>
              Open location in Maps
            </Text>
          </Button>
        </VStack>
      </LinearGradient>
    );
  } else if (props.status === "cancelled") {
    return (
      <LinearGradient
        style={{ borderRadius: 14 }}
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
              <Ionicons name="arrow-forward-sharp" size={24} color="#149873" />
            }
            onPress={() => {}}>
            <Text fontSize={17} fontWeight="semibold" color={"primary.green"}>
              View Progress
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
  } else if (props.status === "rejected") {
    return (
      <LinearGradient
        style={{ borderRadius: 18 }}
        colors={["#EF7D41", "#FBA071"]}
        start={[0, 0]}
        end={[1, 0]}>
        <VStack p={4} space={2} alignItems="center">
          <HStack alignItems="center">
            <Text mr={1} fontSize={17} color="white" fontWeight="semibold">
              Offer declined by client
            </Text>
            <Ionicons name="close-sharp" size={22} color="white" />
          </HStack>
          <Text
            textDecorationLine="line-through"
            mt="-1"
            color="white"
            fontSize="36"
            fontWeight="bold">
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
              <Ionicons name="arrow-forward-sharp" size={24} color="#EF7D41" />
            }
            onPress={() => {}}>
            <Text fontSize={17} fontWeight="semibold" color={"primary.orange"}>
              Send new offer
            </Text>
          </Button>

          {/* <HStack alignItems="center" mt={1}>
            <MaterialCommunityIcons name="timer-sand" size={22} color="white" />
            <Text ml={1} fontSize={17} color="white" fontWeight="normal">
              Expires in 1 day
            </Text>
          </HStack> */}
        </VStack>
      </LinearGradient>
    );
  }
};

export default ExpertOfferCard;
