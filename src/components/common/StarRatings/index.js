import React, { useState } from "react";
import { View, Text } from "react-native";
import StarRating from "react-native-star-rating-widget";

const AddRatings = ({ onRatingChange }) => {
  const [starCount, setStarCount] = useState(0);

  const onStarRatingPress = (rating) => {
    setStarCount(rating);
    onRatingChange(rating);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StarRating
        disabled={false}
        maxStars={5}
        rating={starCount}
        onChange={(rating) => onStarRatingPress(rating)}
        starSize={30}
        fullStarColor={"gold"}
      />
      {/* <Text>{`You rated: ${starCount} stars`}</Text> */}
    </View>
  );
};

export default AddRatings;
