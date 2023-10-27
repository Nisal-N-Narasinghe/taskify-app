import { useRoute } from "@react-navigation/native";
import { Image, Text } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

const ViewImage = () => {
  const route = useRoute();
  const imageUri = route.params.image;

  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      // onPress={() => {
      //   handleClick("Plumbing");
      // }}
    >
      <Text>Image</Text>

      <Image
        source={imageUri}
        style={{ width: 300, height: 300 }}
        alt="image"
      />

      {/* <CategoryItem image={PlumberImg} category={"Plumbing"} /> */}
    </TouchableOpacity>
  );
};

export default ViewImage;
