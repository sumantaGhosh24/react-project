import {useState} from "react";
import {FaPlus, FaMinus} from "react-icons/fa";
import propTypes from "prop-types";

const Menu = ({list}) => {
  const [active, setActive] = useState({});

  const handleToggle = (label) => {
    setActive({
      ...active,
      [label]: !active[label],
    });
  };

  return (
    <div className="menu">
      {list.map((item) => (
        <div key={item.label} className="menu__item">
          <div className="menu__link">
            <p>{item.label}</p>
            {item.children && item.children.length && (
              <p onClick={() => handleToggle(item.label)}>
                {active[item.label] ? (
                  <FaMinus size={16} />
                ) : (
                  <FaPlus size={16} />
                )}
              </p>
            )}
          </div>
          {item.children && item.children.length > 0 && active[item.label] && (
            <Menu list={item.children} />
          )}
        </div>
      ))}
    </div>
  );
};

Menu.propTypes = {
  list: propTypes.array,
};

export default Menu;
