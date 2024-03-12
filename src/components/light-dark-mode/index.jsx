import useLocalStorage from "../../hooks/use-local-storage";
import BackHome from "../back-home";
import "./style.css";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <BackHome title="Light Dark Mode" />
      <div className="light-dark-mode" data-theme={theme}>
        <div className="ldm__container">
          <p>Hello World !</p>
          <button onClick={handleToggleTheme}>Change Theme</button>
        </div>
      </div>
    </>
  );
};

export default LightDarkMode;
