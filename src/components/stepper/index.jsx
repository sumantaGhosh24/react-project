import BackHome from "../back-home";
import CheckoutStepper from "./checkout-stepper";
import "./style.css";

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your contact details.</div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div>Enter your shipping address.</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Complete payment for your order.</div>,
  },
  {
    name: "Delivered",
    Component: () => <div> Your order has been delivered.</div>,
  },
];

const Stepper = () => {
  return (
    <>
      <BackHome title="Stepper" />
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
    </>
  );
};

export default Stepper;
