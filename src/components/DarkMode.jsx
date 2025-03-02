import { useDarkMode } from "../context/DarkmodeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const DarkMode = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 bg-gray-700 text-white p-2 rounded-full shadow-lg"
    >
      {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
    </button>
  );
};

export default DarkMode;

