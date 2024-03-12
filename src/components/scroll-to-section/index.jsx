import {useRef} from "react";

import {sectionData} from "../../constants/section";
import BackHome from "../back-home";

const ScrollToSection = () => {
  const ref = useRef();

  const handleScrollSection = () => {
    let pos = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  };

  return (
    <>
      <BackHome title="Scroll To Section" />
      <div>
        <button onClick={handleScrollSection} className="stb-btn">
          Scroll
        </button>
        {sectionData.map((section, index) => (
          <div ref={index === 3 ? ref : null} style={section.style} key={index}>
            <h3>{section.label}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default ScrollToSection;
