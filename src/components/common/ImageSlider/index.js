import React from "react";
import { Image } from "native-base";
import Swiper from "react-native-swiper";
import { styles } from "../../../styles/Expert/ExpertViewExpertiseArea";

const ImageSlider = ({ images, onIndexChanged }) => {
  return (
    <Swiper
      height={220}
      showsPagination={false}
      onIndexChanged={onIndexChanged}>
      {images.map((image, index) => (
        <Image
          key={index}
          source={image}
          alt={`slideImage-${index}`}
          style={styles.photoSlider}
        />
      ))}
    </Swiper>
  );
};

export default ImageSlider;
