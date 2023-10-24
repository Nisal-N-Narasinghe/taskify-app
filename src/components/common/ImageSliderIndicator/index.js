import React from "react";
import StepIndicator from "../StepIndicators";

const ImageSliderIndicator = ({ currentStep, totalStep }) => {
  return <StepIndicator currentStep={currentStep} totalSteps={totalStep} />;
};

export default ImageSliderIndicator;
