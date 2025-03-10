import { useDarkMode } from "../context/DarkmodeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const DarkMode = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="  bg-green-500 text-white p-2 rounded-full shadow-lg"
    >
      {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
    </button>
  );
};

export default DarkMode;

