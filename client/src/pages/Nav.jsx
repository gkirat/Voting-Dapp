
import React from "react";
import { useState, useEffect } from "react";

const Nav = () => {
const [darkMode, setMode] = useState(() => {
  // Use local storage to initialize the theme
  const storedMode = localStorage.getItem('mode');
  return storedMode === 'dark';
});

    
  useEffect(() => {
    localStorage.setItem('mode', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
}, [darkMode]);

const toggleTheme = () => {
  // Toggle the theme when the button is clicked
  setMode((prevMode) => !prevMode);
};

  const handleProfile = ()=> {
      console.log("Profile")
  }

  return (
<nav className="sticky top-0 p-2 flex justify-end  h-20 items-center w-[10%] ml-[90%]  z-10 space-x-3 ">

        <button onClick={handleProfile} className="dark:text-slate-50 duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </button>

        <button
          // onClick={() => {
          //   setMode(!darkMode);
          // }}
          onClick={toggleTheme}
          title="Toggle Theme"
          className="
        w-12 
        h-6 
        rounded-full 
        p-1 
        bg-gray-400 
        dark:bg-gray-600 
        relative 
        transition-colors 
        duration-700 
        ease-in
        focus:outline-none 
        focus:ring-2 
        focus:ring-stone-700 
        dark:focus:ring-gray-400 
        focus:border-transparent
        shadow-inner 
        "
        >
          {" "}
          <div
            id="toggle"
            className="
            rounded-full 
            w-4 
            h-4 
            bg-[#4263EB] 
            dark:bg-blue-500 
            relative 
            ml-0 
            dark:ml-6 
            pointer-events-none 
            transition-all 
            duration-300 
            ease-out
        "
          ></div>
        </button>

        {/* <img className='h-[30px] w-8 ' src='../assets/user.png' alt='' ></img> */}
      </nav>
  )
}

export default Nav


// const [darkMode, setMode] = useState(true);
// localStorage.setItem("mode",true)
// console.log(!localStorage.getItem("mode"))
// console.log(localStorage.getItem("mode"))

// useEffect(() => {

//   if (darkMode) {
//     document.documentElement.classList.add("dark");
//   } else {
//     document.documentElement.classList.remove("dark");
//   }
// }, [darkMode]);


// const changeTheme =()=>{
//   (localStorage.getItem("mode") ? (
//     document.documentElement.classList.add("dark")
//     localStorage.setItem("mode",false)
//   ):(
//     document.documentElement.classList.remove("dark");
//     localStorage.setItem("mode",false);
//   ) )
// }