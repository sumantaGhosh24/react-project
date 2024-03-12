import {useState} from "react";
import QRCode from "react-qr-code";

import BackHome from "../back-home";
import "./index.css";

const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleQrCode = () => {
    setQrCode(input);
    setInput("");
  };

  return (
    <>
      <BackHome title="QR Code Generator" />
      <div className="qr__container">
        <div className="qr__form">
          <input
            type="text"
            name="qr-code"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a value..."
            className="qr__input"
          />
          <button
            disabled={!input}
            onClick={handleQrCode}
            className="qr__button"
          >
            Generate
          </button>
        </div>
        <div className="qr__preview">
          <QRCode id="qr-code-value" value={qrCode} size={400} />
        </div>
      </div>
    </>
  );
};

export default QrCodeGenerator;
