import Navbar from "./components/Navbar"
import Rsidebar from "./components/Rsidebar"
import Lsidebar from "./components/Lsidebar"
import AppRoute from "./route/AppRoute"
import UseScreenWidth from "./Hooks/UseScreenWidth"
import './App.css'
import { useEffect, useState } from "react"
import { DataContext } from "./context/DataContext"
import { useContext } from 'react';

const App = () => {
  const screenWidth = UseScreenWidth()
  const [showSideNav,setshowNav] = useState(true)
  
 /* window.addEventListener("resize", () => {
   if(screenWidth < 800){
   
   }else{
    setshowNav(true)

   }
 }) */
 useEffect(() =>{
  (screenWidth < 800)?setshowNav(false):setshowNav(true)
 },[screenWidth])
 
  

  return (
    <div className="h-full flex relative bg-app-bg sm:mx-200px">
       {showSideNav && screenWidth < 800 && <div className="fixed w-full h-screen bg-black/90 z-30"></div>}
       {showSideNav && <Lsidebar setshowNav={setshowNav} showSideNav={showSideNav}/>}
       {/* {!HideSideNav < 800 && <Lsidebar/>} */}
        <div className="w-full px-3 h-screen overflow-y-auto" style={{marginLeft: !(screenWidth < 800)? '250px' : '0px'}}>
          <Navbar showSideNav={showSideNav} setshowNav={setshowNav}/>
          <div className="flex justify-between mt-6">
            <AppRoute/>
           {!(screenWidth < 800) && <Rsidebar/>}
          </div>
        </div>
    </div>
  )
}

export default App