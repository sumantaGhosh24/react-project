import {useState, useEffect} from "react";

import BackHome from "../back-home";
import "./index.css";

const ScrollIndicator = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scroll, setScroll] = useState(0);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users?limit=50");
      const data = await response.json();
      if (data && data.users && data.users.length > 0) {
        setData(data.users);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleScroll() {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScroll((scrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <BackHome title="Scroll Indicator" />
      <div className="scroll">
        <div className="scroll__container">
          <h3>Scroll</h3>
          <div style={{width: `${scroll}%`}}></div>
        </div>
        <div className="users">
          {data &&
            data.map((item) => (
              <div key={item.id} className="user">
                <h3 className="user__name">
                  {item.firstName} {item.lastName}
                </h3>
                <h4 className="user__age">{item.age}</h4>
                <h5 className="user__gender">{item.gender}</h5>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ScrollIndicator;
