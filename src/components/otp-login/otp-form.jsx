import {useState} from "react";

import OtpInput from "./otp-input";

const OtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePhoneSubmit = (event) => {
    event.preventDefault();
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }
    setShowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("Login Successful", otp);
  };

  return (
    <div className="otp__container">
      {!showOtpInput ? (
        <form onSubmit={handlePhoneSubmit} className="otp__form">
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
            className="otp__input"
          />
          <button type="submit" className="otp__button">
            Submit
          </button>
        </form>
      ) : (
        <div className="otp__submit">
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default OtpForm;
