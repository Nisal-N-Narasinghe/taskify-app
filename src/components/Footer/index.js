import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Box, Center, HStack, Icon } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export const Footer = () => {
  const [selected, setSelected] = useState(1);
  return (
    <HStack
      pb={8}
      h="auto"
      pt={5}
      bg="primary.green"
      alignItems="center"
      shadow={6}>
      <Pressable
        cursor="pointer"
        opacity={selected === 0 ? 1 : 0.5}
        py="3"
        flex={1}
        onPress={() => setSelected(0)}>
        <Center>
          <Icon
            mb="1"
            as={
              <MaterialCommunityIcons
                name={selected === 0 ? "home" : "home-outline"}
              />
            }
            color="white"
            size="xl"
          />
        </Center>
      </Pressable>
      <Pressable
        cursor="pointer"
        opacity={selected === 1 ? 1 : 0.5}
        py="2"
        flex={1}
        onPress={() => setSelected(1)}>
        <Center>
          <Icon
            mb="1"
            as={<MaterialIcons name="search" />}
            color="white"
            size="xl"
          />
        </Center>
      </Pressable>
      <Pressable
        cursor="pointer"
        opacity={selected === 2 ? 1 : 0.6}
        py="2"
        flex={1}
        onPress={() => setSelected(2)}>
        <Center>
          <Icon
            mb="1"
            as={
              <MaterialCommunityIcons
                name={selected === 2 ? "cart" : "cart-outline"}
              />
            }
            color="white"
            size="xl"
          />
        </Center>
      </Pressable>
      <Pressable
        cursor="pointer"
        opacity={selected === 3 ? 1 : 0.5}
        py="2"
        flex={1}
        onPress={() => setSelected(3)}>
        <Center>
          <Icon
            mb="1"
            as={
              <MaterialCommunityIcons
                name={selected === 3 ? "account" : "account-outline"}
              />
            }
            color="white"
            size="xl"
          />
        </Center>
      </Pressable>
    </HStack>
  );
};

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
});
