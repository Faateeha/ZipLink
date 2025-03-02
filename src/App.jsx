import ShortenForm from "./components/ShortenForm"
import { DarkModeProvider } from "./context/DarkmodeContext"
import DarkMode from "./components/DarkMode"
function App() {
  

  return (
    <>
    <DarkModeProvider>
      <div className="">
        <DarkMode />
    <ShortenForm />
    </div>
    </DarkModeProvider>
      
    </>
  )
}

export default App
