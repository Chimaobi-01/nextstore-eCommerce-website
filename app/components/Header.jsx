"use client"
import { useState } from "react"
import '@/app/styles/header.css'
import MobileViewNavMenu from "./MobileViewNavMenu"


const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  return (
    <header className="p-6 flex flex-col gap-6">

      <nav className="flex items-center justify-center relative">

        <ul
          onClick={() => setShowMenu(!showMenu)}
          className="absolute left-0 w-8 cursor-pointer flex-col gap-y-1 flex"
        >
          <li className={`h-1 rounded-sm bg-gray-500 transform duration-200 ${showMenu && ' rotate-45 translate-x-1 translate-y-1'}`}></li>
          <li className={`h-1 rounded-sm bg-gray-500 ${showMenu && 'hidden'}`}></li>
          <li className={`h-1 rounded-sm bg-gray-500 transform duration-200 ${showMenu && ' -rotate-45 translate-x-1 -translate-y-1'}`}></li>
        </ul>


        <img src="/assets/Logo.png" alt="Next stores" className="w-24 object-cover" />

      </nav>

      <form className="search relative">
        <input className="w-full h-full outline-none border rounded p-3 ps-6" type="text" placeholder="Search" />
        <div className="absolute right-0 top-0 w-12 h-full bg-blue-500 rounded-r flex text-white justify-center items-center">
          <img src="/assets/search.png" alt="search icon" />
        </div>
      </form>



      <MobileViewNavMenu 
        showMenu={showMenu} 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn} 
        setShowMenu={setShowMenu}  
      />
      <div className={`${showMenu ? 'left-0' : '-left-full'} fixed inset-0 w-full bg-black/30 z-10`} />
    </header>
  )
}

export default Header

