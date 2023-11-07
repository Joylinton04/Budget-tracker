import Navbar from "./components/Navbar"
import Rsidebar from "./components/Rsidebar"
import Lsidebar from "./components/Lsidebar"
import AppRoute from "./route/AppRoute"
import './App.css'

const App = () => {

  return (
    <div className="h-full flex relative bg-app-bg">
        <Lsidebar/>
        <div className="w-full px-8 h-screen overflow-y-auto">
          <Navbar/>
          <div className="flex justify-between mt-6">
            <AppRoute/>
            <Rsidebar/>
          </div>
        </div>
    </div>
  )
}

export default App