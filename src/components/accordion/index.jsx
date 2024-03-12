import {useState} from "react";
import {FaPlus, FaMinus} from "react-icons/fa";

import BackHome from "../back-home";
import {accordionData} from "../../constants/accordion";
import "./index.css";

const Accordion = () => {
  const [active, setActive] = useState(null);

  const handleAccordion = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <>
      <BackHome title="Accordion" />
      <div className="accordion">
        {accordionData.map((data) => (
          <div className="accordion-item" key={data.id}>
            <div
              className="accordion-action"
              onClick={() => handleAccordion(data.id)}
            >
              <h3>{data.question}</h3>
              <span>{active === data.id ? <FaMinus /> : <FaPlus />}</span>
            </div>
            {active === data.id && (
              <div className="accordion-content">{data.answer}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;
