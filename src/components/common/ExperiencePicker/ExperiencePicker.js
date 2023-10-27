import { Box, Text, Stack, Slider, FormControl } from "native-base";
import { View } from "react-native";
import React, { useState } from "react";

const ExperiencePicker = () => {
  const [onChangeValue, setOnChangeValue] = useState(0);
  const [onChangeEndValue, setOnChangeEndValue] = useState(30);
  return (
    <Box alignItems="center" w="100%">
      <Stack space={4} alignItems="center" w="75%" maxW="300">
        {/*   <Text textAlign="center">Experience In Years - {onChangeValue}</Text> */}
        <FormControl.Label>
          Experience In Years {onChangeValue}
        </FormControl.Label>
        <Slider
          size="md"
          minValue={0}
          maxValue={30}
          colorScheme={"emerald"}
          onChange={(v) => {
            setOnChangeValue(Math.floor(v));
          }}
          onChangeEnd={(v) => {
            v && setOnChangeEndValue(Math.floor(v));
          }}>
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </Stack>
    </Box>
  );
};

export default ExperiencePicker;
