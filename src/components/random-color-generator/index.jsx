import {useState, useEffect} from "react";

import BackHome from "../back-home";
import "./index.css";

const RandomColorGenerator = () => {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const generateRandomColorUtility = (val) => {
    return Math.floor(Math.random() * val);
  };

  const generateRandomHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[generateRandomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };

  const generateRandomRgbColor = () => {
    const red = generateRandomColorUtility(256);
    const green = generateRandomColorUtility(256);
    const blue = generateRandomColorUtility(256);
    setColor(`rgb(${red}, ${green}, ${blue})`);
  };

  useEffect(() => {
    if (type === "rgb") generateRandomRgbColor();
    else generateRandomHexColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return (
    <>
      <BackHome title="Random Color Generator" />
      <div style={{background: color}} className="color__container">
        <div className="color__buttons">
          <button
            onClick={() => setType("hex")}
            className={`color__button ${
              type === "hex" && "color__button--active"
            }`}
          >
            Generate Hex Color
          </button>
          <button
            onClick={() => setType("rgb")}
            className={`color__button ${
              type === "rgb" && "color__button--active"
            }`}
          >
            Generate Rgb Color
          </button>
          <button
            onClick={
              type === "rgb" ? generateRandomRgbColor : generateRandomHexColor
            }
            className="color__button color__button--active"
          >
            Generate Color
          </button>
        </div>
        <div className="color__content">
          <h3 className="color__content__title">
            {type === "rgb" ? "Rgb Color Generator" : "Hex Color Generator"}
          </h3>
          <p className="color__content__description">{color}</p>
        </div>
      </div>
    </>
  );
};

export default RandomColorGenerator;
