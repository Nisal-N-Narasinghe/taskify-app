import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomSlider = ({ options, onChange, initialValue }) => {
  const [selectedOption, setSelectedOption] = useState(initialValue);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onChange(option); // Notify the parent component of the selected option
  };

  return (
    <View style={styles.sliderContainer}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleOptionChange(option)}
          style={[
            styles.option,
            {
              backgroundColor:
                selectedOption === option ? "#149873" : "lightgray",
            },
          ]}>
          <Text
            style={{
              color: selectedOption === option ? "white" : "black",
            }}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  option: {
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 16,
  },
});

export default CustomSlider;
