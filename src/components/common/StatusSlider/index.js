import { Box, Slider } from "native-base";
import { useState } from "react";

const StatusSlider = ({ disableStatus, statusValue }) => {
  const [disabled, isDisabled] = useState(true);
  const [sliderValue, setSliderValue] = useState();

  return (
    <Box alignItems="center" w="100%">
      <Slider
        w="3/4"
        maxW="300"
        defaultValue={statusValue}
        minValue={0}
        maxValue={100}
        accessibilityLabel="hello world"
        step={10}
        isDisabled={disableStatus}
        colorScheme="orange"
      >
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </Box>
  );
};

export default StatusSlider;
