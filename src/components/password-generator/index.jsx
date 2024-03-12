import {useState} from "react";

import usePasswordGenerator from "../../hooks/use-password-generator";
import PasswordStrengthIndicator from "./password-strength-indicator";
import Button from "./button";
import Checkbox from "./checkbox";
import BackHome from "../back-home";
import "./style.css";

const PasswordGenerator = () => {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    {title: "Include Uppercase Letters", state: false},
    {title: "Include Lowercase Letters", state: false},
    {title: "Include Numbers", state: false},
    {title: "Include Symbols", state: false},
  ]);
  const [copied, setCopied] = useState(false);

  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckboxData(updatedCheckboxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const {password, errorMessage, generatePassword} = usePasswordGenerator();

  return (
    <>
      <BackHome title="Password Generator" />
      <div className="pg__container">
        {password && (
          <div className="pg__password">
            <h3>{password}</h3>
            <Button
              text={copied ? "Copied" : "copy"}
              onClick={handleCopy}
              customClass="pg__btn--copy"
            />
          </div>
        )}
        <div className="pg__range">
          <span>
            <label>Character Length</label>
            <label>{length}</label>
          </span>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className="pg__checkboxes">
          {checkboxData.map((checkbox, index) => {
            return (
              <Checkbox
                key={index}
                title={checkbox.title}
                onChange={() => handleCheckboxChange(index)}
                state={checkbox.state}
              />
            );
          })}
        </div>
        <PasswordStrengthIndicator password={password} />
        {errorMessage && <div>{errorMessage}</div>}
        <Button
          text="Generate Password"
          onClick={() => generatePassword(checkboxData, length)}
          customClass="pg__btn--submit"
        />
      </div>
    </>
  );
};

export default PasswordGenerator;
