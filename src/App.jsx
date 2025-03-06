import ShortenForm from "./components/ShortenForm"
import { DarkModeProvider } from "./context/DarkmodeContext"
import DarkMode from "./components/DarkMode"
import Navbar from "./components/Navbar"
function App() {
  

  return (
    <>
    <DarkModeProvider>
      <div className="">
        <Navbar />
    <ShortenForm />
    </div>
    </DarkModeProvider>
      
    </>
  )
}

export default App
