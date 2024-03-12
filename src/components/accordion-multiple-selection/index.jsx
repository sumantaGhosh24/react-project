import {useState} from "react";
import {FaPlus, FaMinus} from "react-icons/fa";

import BackHome from "../back-home";
import {accordionData} from "../../constants/accordion";
import "./index.css";

const AccordionMultipleSelection = () => {
  const [actives, setActives] = useState([]);

  const handleAccordion = (id) => {
    let copyActives = [...actives];
    const findIndex = copyActives.indexOf(id);
    if (findIndex === -1) copyActives.push(id);
    else copyActives.splice(findIndex, 1);
    setActives(copyActives);
  };

  return (
    <>
      <BackHome title="Accordion Multiple Selection" />
      <div className="accordion">
        {accordionData.map((data) => (
          <div className="accordion-item" key={data.id}>
            <div
              className="accordion-action"
              onClick={() => handleAccordion(data.id)}
            >
              <h3>{data.question}</h3>
              <span>
                {actives.indexOf(data.id) !== -1 ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
            {actives.indexOf(data.id) !== -1 && (
              <div className="accordion-content">{data.answer}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default AccordionMultipleSelection;
