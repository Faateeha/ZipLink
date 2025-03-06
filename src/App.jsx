import ShortenForm from "./components/ShortenForm";
import { DarkModeProvider } from "./context/DarkmodeContext";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <DarkModeProvider>
        <div className="">
          <Navbar />
          <Features />
          <ShortenForm />
          <Pricing />
          <Contact />
        </div>
      </DarkModeProvider>
    </>
  );
}

export default App;
