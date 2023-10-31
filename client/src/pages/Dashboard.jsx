import React from "react";
import Navigation from "./Navigation";
import List from "../components/List";
import UserCard from "../components/UserCard";
import ElectionCard from "../components/ElectionCard";
import Winner from "../components/Winner";
import { useEffect, useState } from "react";
import { createClient, cacheExchange, fetchExchange } from "@urql/core";
import { toast } from "sonner";
// import { Link } from "react-router-dom";


const Dashboard = ({ state, info, details, pIdEc, setinfo }) => {
  const [run, setRun] = useState(false);

  const queryUrl = "https://api.studio.thegraph.com/query/55899/testing/version/latest";
  const query = `{
    ecWinners(first: 10 where: {_electionCommission: "${pIdEc.EcAddress}"}) {
      id
      _info_pollId
      _info_winnerName
      _info_partyName
      _electionCommission
    }
    candidates(first: 100, where: {_pollId:  "${pIdEc.pollId}"}) {
      id
      _name
      _party
      _candidateId
      _electionCommission
      _pollId
    }
    voters(where: {_pollId:  "${pIdEc.pollId}"}, first: 100) {
      _name
      _voterAdd
      _votedTo
      _pollId
      _electionCommission
    }
  }
`


  const client = createClient({
    url: queryUrl,
    exchanges: [cacheExchange, fetchExchange],
  });

  const getPidEc = async () => {
    const pollId = Number(await state.contract.nextPollId());
    const electionCommission = await state.contract.electionCommission();
    details(pollId, electionCommission);
  };

  const setifo = async () => {
    const { data } = await client.query(query).toPromise();
    setinfo(data);
    // if (typeof data == "undefined" || info.candidates.length ===0 ) {
    if (typeof data == "undefined") {
      setRun(false);
    } else {
      setRun(true);
    }
  };

  useEffect(() => {
     getPidEc();
     setifo();
  }, []);

  // console.log(info.candidates.length)
  // console.log(info)
  // console.log(run)
  // console.log(typeof data)


  return (
    <div className="flex  h-[100%]  space-x-12 ">
      <Navigation />
      <div className=" p-4 w-full flex space-x-20 dark:text-slate-50">

        {/* Candidate detail cards starts */}
        <div className=" w-[60%] h-[100%] p-4 " id="UserVotingStatus">
          <h1 className="mb-10 tracking-wide text-gray-600 dark:text-gray-400 text-2xl ">Registered Candidates</h1>
          <div className=" w-[100%] gap-4">

            {/* Candidate detail cards start here */}
            {run ? (
                <div className="grid grid-rows-2 grid-flow-col gap-12 w-[90%] md:mb-10">
                  {info.candidates.map((candidate, index) => {
                    return (
                      <List
                        state={state}
                        key={index}
                        name={candidate._name}
                        party={candidate._party}
                        // when candidate id is also emmitted add here
                        id={candidate._candidateId}
                        setValue={true}
                      />
                    );
                  })}
                </div>
            ) : (
                <div className="grid grid-rows-1 grid-flow-col gap-12 w-[90%] md:mb-10">
                  <List setValue={false} />
                </div>
            )}
            {/* Candidate detail cards start here */}
          </div>
          
          {/* Winner starts here */} 
          <div className=" w-[90%] ">

            <h1 className="mb-10 tracking-wide text-gray-600 dark:text-gray-400 text-2xl ">Winner</h1>    
            <Winner state={state} />
          </div>
          {/* Winner ends here */}
          
        </div>
        {/* Candidate detail cards ends */}

        {/* Election and user detail cards starts */}
        <div className=" w-[35%] h-[100%] p-4 flex flex-col space-y-10 " id="UserVotingStatus">
            
          <ElectionCard state={state} info={info} />

          <UserCard state={state} />

        </div>
        {/* Election and user detail cards ends */}
        
      </div>
    </div>
  );
};

export default Dashboard;

// <div className="   w-[70%] h-[20%] rounded-md p-2 bg-white dark:bg-slate-950 dark:shadow-cyan-500/50 shadow">
// <h1>Hello world</h1>
// </div>

//             {/* <svg className=" w-16 top-0 shadow-inner " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
//               <path d="M55,7.5c-22,0-40.2,16.8-42.3,38.3h-6c-2.3,0-4.2,1.9-4.2,4.2c0,2.3,1.9,4.2,4.2,4.2h32.4c1.6,0,3-0.9,3.7-2.3l3.5-6.8 L57,65.8c0.7,1.4,2.1,2.3,3.7,2.3c1.6,0,3-0.9,3.7-2.3l6-11.7h6c2.3,0,4.2-1.9,4.2-4.2c0-2.3-1.9-4.2-4.2-4.2h-8.5 c-1.6,0-3,0.9-3.7,2.3l-3.5,6.8L50,34.2c-1.4-2.8-6-2.8-7.4,0l-6,11.7H21.1c2.1-16.9,16.5-30,33.9-30c18.8,0,34.2,15.3,34.2,34.2 S73.8,84.2,55,84.2c-14.2,0-26.5-8.8-31.6-21.2h-8.9 C20,80.1,36.1,92.5,55,92.5c23.4,0,42.5-19.1,42.5-42.5 C97.5,26.6,78.4,7.5,55,7.5z" fill="#2ABB94"/>
//             </svg> */}
//             {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
//   <path
//     d="M55,7.5c-22,0-40.2,16.8-42.3,38.3h-6c-2.3,0-4.2,1.9-4.2,4.2c0,2.3,1.9,4.2,4.2,4.2h32.4c1.6,0,3-0.9,3.7-2.3l3.5-6.8 L57,65.8c0.7,1.4,2.1,2.3,3.7,2.3c1.6,0,3-0.9,3.7-2.3l6-11.7h6c2.3,0,4.2-1.9,4.2-4.2c0-2.3-1.9-4.2-4.2-4.2h-8.5 c-1.6,0-3,0.9-3.7,2.3l-3.5,6.8L50,34.2c-1.4-2.8-6-2.8-7.4,0l-6,11.7H21.1c2.1-16.9,16.5-30,33.9-30c18.8,0,34.2,15.3,34.2,34.2 S73.8,84.2,55,84.2c-14.2,0-26.5-8.8-31.6-21.2h-8.9 C20,80.1,36.1,92.5,55,92.5c23.4,0,42.5-19.1,42.5-42.5 C97.5,26.6,78.4,7.5,55,7.5z"
//     fill="none"
//     stroke="#2ABB94"
//     stroke-width="2"
//   >
//     <animate
//       attributeName="stroke-dasharray"
//       values="200 100;0 100;0 100"
//       dur="3s"
//       repeatCount="indefinite"
//     />
//   </path>
// </svg> */}
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
//   <circle cx="50" cy="50" r="45" fill="none" stroke="#2ABB94" stroke-width="2" />
//   <path
//     d="M55,7.5c-22,0-40.2,16.8-42.3,38.3h-6c-2.3,0-4.2,1.9-4.2,4.2c0,2.3,1.9,4.2,4.2,4.2h32.4c1.6,0,3-0.9,3.7-2.3l3.5-6.8 L57,65.8c0.7,1.4,2.1,2.3,3.7,2.3c1.6,0,3-0.9,3.7-2.3l6-11.7h6c2.3,0,4.2-1.9,4.2-4.2c0-2.3-1.9-4.2-4.2-4.2h-8.5 c-1.6,0-3,0.9-3.7,2.3l-3.5,6.8L50,34.2c-1.4-2.8-6-2.8-7.4,0l-6,11.7H21.1c2.1-16.9,16.5-30,33.9-30c18.8,0,34.2,15.3,34.2,34.2 S73.8,84.2,55,84.2c-14.2,0-26.5-8.8-31.6-21.2h-8.9 C20,80.1,36.1,92.5,55,92.5c23.4,0,42.5-19.1,42.5-42.5 C97.5,26.6,78.4,7.5,55,7.5z"
//     fill="none"
//     stroke="none"
//   >
//     <animate
//       attributeName="stroke"
//       values="#2ABB94;transparent;transparent"
//       dur="3s"
//       repeatCount="indefinite"
//     />
//   </path>
// </svg>

// let counter = 0; // Initialize a counter to keep track of how many times the function has been called.
// const maxCalls = 3; // Set the maximum number of calls.
// const setifo = async()=>{
//   const {data}  =  await client.query(query).toPromise();
//   console.log(data.candidates)
//   setinfo(data)
// }
// const interval = setInterval(function () {
//   setifo(); // Call your function here.

//   counter++; // Increment the counter.

//   if (counter >= maxCalls) {
//     clearInterval(interval); // Stop the interval when the maximum number of calls is reached.
//   }
// }, 3000);

// while(runUntilTrue = false){
//   if(typeof info=="undefined"){
//     setifo()
//   }
//   else if(typeof info != "undefined"){
//     console.log(info)
//     runUntilTrue = true;
//   }
// }

// const checkinfo =async ()=>{
//   if(runUntilTrue === false){
//     await setifo()
//     checkinfo()
//   }
//   else{
//     runUntilTrue = true
//     console.log(info)
//   }
// }

// do{
//   checkinfo()
// }while(runUntilTrue ===false)

// setifo()
// const latest = ()=>{
//   if(typeof info=="undefined"){

//     return false
//   }
//   return true
// }

//   const checkinfo =async ()=>{
//   if(typeof info=="undefined"){
//     await setifo()
//     checkinfo()
//   }
//   else if(typeof info!="undefined"){
//     runUntilTrue = true
//     console.log(info)
//   }
// }
// checkinfo()

//  const checkInfo = async () => {
//   if (runUntilTrue === false) {
//     await setinfo();
//     checkInfo(); // Recursively call checkInfo until info is defined
//   } else {
//     console.log(info);
//     runUntilTrue = true;
//   }
// }

// for(let i=0;i<5;i++){
//   const checkInfo = async () => {
//     if (runUntilTrue === false) {
//       await setinfo();
//       checkInfo(); // Recursively call checkInfo until info is defined
//     } else {
//       console.log(info);
//       runUntilTrue = true;

//     }
//   }
//   checkInfo()
//   i++;
// }

// useEffect(()=>{

// checkInfo()
// },[])

// {
//   /* <h1>Name of person</h1>
//               Candidate id
//               <h1>Name of party</h1>
//               <h1>Name of id of the person</h1>
//               poll id  */
// }
// {
//   /* {run?   (<div>     {(info.candidates).map((candidate,index)=>{
//                 return(
//                 <List key={index} name = {candidate._name} party = {candidate._party} />
//                 )
//               })} </div>):null}   */
// }
// {
//   /* {(info.candidates).map((candidate,index)=>{
//                 return(
//                 <List key={index} name = {candidate._name} party = {candidate._party} />
//                 )
//               })}  */
// }



// THIS IS THE CARD COMPONENT WITH REGISTRED , 
// {/* <div className="w-[60%] h-[25%] overflow-hidden rounded-lg p-2 bg-white dark:bg-slate-950 dark:shadow-cyan-500/50 shadow">
// <div className="grid grid-rows-5 grid-flow-col gap-4 mt-3 ml-12 ">
//   <div className="flex w-[50%] justify-center items-center font-extralight">
//     <p className=" text-gray-500 p-2 text-sm whitespace-nowrap ">
//       Registred:
//     </p>
//     <p className=" text-[#F784AD] font-semibold text-xs "> No </p>
//   </div>

//   <div className="flex w-[50%] justify-center items-center font-extralight">
//     <p className=" text-gray-500 p-2 text-sm whitespace-nowrap ">
//       Voted:
//     </p>
//     <p className=" text-[#F784AD] font-semibold text-xs "> No </p>
//   </div>

//   <div className="flex w-[50%] justify-center items-center font-extralight">
//     <p className=" text-gray-500 p-2 text-sm whitespace-nowrap ">
//       Voted to:
//     </p>
//     <p className=" text-[#F784AD] font-semibold text-xs "> No </p>
//   </div>
// </div>
// </div> */}



        //   {/* <div className="w-[90%]  rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 transition-all duration-700 hover:shadow-[0_3px_10px_rgb(0.4,0.4,0.4,0.4)] dark:hover:shadow-cyan-500/50 ">
        //     <div className="rounded-[calc(1.5rem-1px)] p-6 w-[100%] bg-white dark:bg-gray-900">
        //     <div className="flex gap-4 items-center justify-around">
        //         <div>
        //             <h3 className="text-lg font-medium text-gray-700 dark:text-white">
        //             {info.candidates.name}
        //             </h3>
        //             <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400">
        //             world
        //             </span>
        //         </div>
                
        //         </div>
        //     </div>
        // </div> */}




      //   <div className="   w-[90%] h-[30%] rounded-lg p-4 bg-white dark:bg-slate-950  dark:shadow-cyan-500/50 space-x-3 shadow space-y-6   ">
      //   <div className="flex items-center ">
      //     <svg
      //       className="w-20 "
      //       xmlns="http://www.w3.org/2000/svg"
      //       width="100"
      //       height="100"
      //       viewBox="0 0 100 100"
      //     >
      //       <circle cx="50" cy="50" r="22" fill="#999" opacity="0.5" />

      //       <circle cx="50" cy="50" r="20" fill="#2ABB94">
      //         <animate
      //           attributeName="r"
      //           values="20;15;20"
      //           dur="4s"
      //           repeatCount="indefinite"
      //         />
      //       </circle>
      //     </svg>
      //     <h1 className=" text-xl font-medium ">Election Status</h1>
      //   </div>

      //   <div className="flex space-x-20 items-center">
      //     <div className="flex flex-col justify-center items-center font-extralight">
      //       <p className=" text-gray-500 p-2 text-sm whitespace-nowrap ">
      //         Start Time
      //       </p>
      //       <p className=" text-[#2ABB94] font-semibold text-xs ">
      //         {" "}
      //         {date}{" "}
      //       </p>
      //     </div>

      //     <div className="flex flex-col justify-center items-center font-extralight">
      //       <p className=" text-gray-500 p-2 text-sm whitespace-nowrap ">
      //         End Time
      //       </p>
      //       <p className=" text-[#F784AD] font-semibold text-xs ">
      //         {" "}
      //         {date}{" "}
      //       </p>
      //     </div>
      //   </div>
      // </div>