import {useState, useEffect} from "react";
import BackHome from "../back-home";

import Progress from "./progress-bar";

const ProgressBar = () => {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 0.1);
    }, 20);
  }, []);

  return (
    <>
      <BackHome title="Progress Bar" />
      <Progress value={value} onComplete={() => setSuccess(true)} />
      <span>{success ? "Complete!" : "Loading..."}</span>
    </>
  );
};

export default ProgressBar;
