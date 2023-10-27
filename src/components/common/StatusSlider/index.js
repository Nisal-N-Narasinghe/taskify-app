import { Box, Slider, Stack, HStack } from "native-base";
import React, { useState } from "react";
import { Text } from "react-native";

const StatusSlider = ({ disableStatus, statusValue }) => {
  const [disabled, isDisabled] = useState(true);
  const [sliderValue, setSliderValue] = useState();

  const [onChangeValue, setOnChangeValue] = React.useState(0);
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(0);
  return (
    <Box alignItems="center" w="100%">
      <HStack space={4} maxW="300" justifyContent="space-between">
        <Slider
          defaultValue={statusValue}
          isDisabled={disableStatus}
          colorScheme="orange"
          onChange={(v) => {
            setOnChangeValue(Math.floor(v));
          }}
          onChangeEnd={(v) => {
            v && setOnChangeEndValue(Math.floor(v));
          }}
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
        <Text textAlign="center">{onChangeValue}%</Text>
        {/* <Text textAlign="center">{onChangeEndValue}%</Text> */}
      </HStack>
    </Box>
  );
  // return (
  //   <Box alignItems="center" w="100%">
  //     <Slider
  //       w="3/4"
  //       maxW="300"
  //       defaultValue={statusValue}
  //       minValue={0}
  //       maxValue={100}
  //       accessibilityLabel="hello world"
  //       step={10}
  //       isDisabled={disableStatus}
  //       colorScheme="orange"
  //     >
  //       <Slider.Track>
  //         <Slider.FilledTrack />
  //       </Slider.Track>
  //       <Slider.Thumb />
  //     </Slider>
  //   </Box>
  // );
};

export default StatusSlider;
