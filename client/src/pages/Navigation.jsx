import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {


  return (
    <div className="flex h-[100%] -mt-20 ">

      <div className=" relative w-72 h-[100%] px-4 pt-4 bg-white dark:text-slate-50 dark:bg-slate-950 shadow-2xl rounded-r-lg   duration-200 " >

        <div className="flex space-x-2 items-center mb-4" >
           <img className="h-[80px] mb-2  " src="https://voting-dapp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fsvg%2Flogo.b954829cff7fddca2bb11cc74a1876a5.svg&w=384&q=75" alt=""></img>
           <p className=" text-[#4e6dec] md:text-2xl font-semibold ">Votechain</p>
        </div>

        <div className="grid grid-rows-5 grid-flow-col gap-4">

              <Link to="/Dashboard" >
                  <button  className=" flex p-2 items-center hover:bg-[#4e6dec] rounded-md w-56 h-14  ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                    <p className="ml-3">Dashboard</p>
                  </button>
              </Link>

              <Link to="/Candidate">
                 <button  className=" flex p-2 items-center hover:bg-[#4e6dec] rounded-md w-56 h-14   ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                    </svg>
                    <p className="ml-3">Candidate</p>
                  </button>
              </Link>


              <Link to="/Voter">
                  <button  className=" flex p-2 items-center hover:bg-[#4e6dec] rounded-md w-56 h-14  ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                      </svg>
                      <p className="ml-3">Voter</p>
                  </button>
              </Link>

              <Link to="/ElectionCommission">
                  <button  className=" flex p-2 items-center hover:bg-[#4e6dec] rounded-md w-56 h-14  ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                      </svg>
                      <p className="ml-3">Election Commission</p>
                  </button>
              </Link>
        </div>

        <div className="">
          {/* Author */}
            <div className="absolute bottom-5 left-5 flex flex-col">
            <p className="ml-4 font-extralight">Author</p>
              <div className="flex gap-4">
                <a href="https://www.github.com/gkirat" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg" width="32" height="32" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/gurkirat-singh-4b0652222" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" width="32" height="32" alt="LinkedIn" />
                </a>
              </div>
            </div>

        {/* Logout */}
          <div className=" absolute bottom-5 right-5 ">
            <Link to="/">
              <div className="flex gap-2">
                <p className=" font-extralight text-red-500" >Log out</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;


// {/* 
//             <div className="flex justify-start items-center space-x-3 hover:bg-[#4e6dec]   ease-in-out p-2 rounded-md h-14 w-60 ">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
//               </svg>
//               <button className="  text-white ">Dashboard</button>
//             </div> */}

//             {/* <div className="flex justify-start items-center space-x-3 hover:bg-[#4e6dec]   ease-in-out p-2 rounded-md h-14 w-60 ">
//             </div> */}



//             {/* <div className="flex justify-start items-center space-x-3 hover:bg-[#4e6dec]   ease-in-out p-2 rounded-md h-14 w-60 ">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
//               </svg>
//               <p>Candidate</p>
//             </div> */}
 
//            {/* <div className="flex justify-start items-center space-x-3 hover:bg-[#4e6dec]   ease-in-out p-2 rounded-md h-14 w-60 ">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> 
//               </svg>
//               <p>Voter</p>
//             </div> */}

//             {/* <div className="flex justify-start items-center space-x-3 hover:bg-[#4e6dec]   ease-in-out p-2 rounded-md h-14 w-60 ">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
//               </svg>
//               <p>Election Commission</p>  
//             </div>*/}

              
// {/* <button onClick={handleCand} className=" flex p-2 items-center hover:bg-[#4e6dec] rounded-md w-56 h-14 ">
// <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
// </svg>
// <p className="ml-3">Candidate</p>
// </button> */}

// {/* <button onClick={handleVoter} className=" flex p-2 items-center hover:bg-[#4e6dec] rounded-md w-56 h-14 ">
// <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
// </svg>

// <p className="ml-3">Voter</p>
// </button> */}


// {/* <button onClick={handleCom} className=" flex p-2 items-center hover:bg-[#4e6dec] rounded-md w-56 h-14">
// <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
// </svg>
//   <p className="ml-3">Election Commission</p>
// </button> */}