import {useState, useRef} from "react";
import propTypes from "prop-types";

const CheckoutStepper = ({stepsConfig = []}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const stepRef = useRef([]);

  if (!stepsConfig.length) {
    return <></>;
  }

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

  return (
    <div className="s__container">
      <div className="s__steps">
        {stepsConfig.map((step, index) => {
          return (
            <div
              key={step.name}
              ref={(el) => (stepRef.current[index] = el)}
              className={`step ${
                currentStep > index + 1 || isComplete
                  ? "s__step--complete"
                  : "s__step"
              } ${currentStep === index + 1 ? "s__step--active" : "s__step"} `}
            >
              <div>
                {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div>{step.name}</div>
            </div>
          );
        })}
      </div>
      <ActiveComponent />
      {!isComplete && (
        <button onClick={handleNext} className="s__btn">
          {currentStep === stepsConfig.length ? "Finish" : "Next"}
        </button>
      )}
    </div>
  );
};

CheckoutStepper.propTypes = {
  stepsConfig: propTypes.any,
};

export default CheckoutStepper;
