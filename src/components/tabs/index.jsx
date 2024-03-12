import {useState} from "react";

import BackHome from "../back-home";
import {tabsData} from "../../constants/tabs";
import "./index.css";

const Tabs = () => {
  const [active, setActive] = useState(1);

  return (
    <>
      <BackHome title="Tabs" />
      <div className="tabs">
        <div className="tabs__nav">
          {tabsData.map((tab) => (
            <h3
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`tabs__nav__item ${
                tab.id === active && "tabs__nav__item--active"
              }`}
            >
              {tab.title}
            </h3>
          ))}
        </div>
        <div className="tabs__content">
          {tabsData.map((tab) => {
            return (
              tab.id === active && (
                <p key={tab.id} className="tabs__content__item">
                  {tab.data}
                </p>
              )
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tabs;
