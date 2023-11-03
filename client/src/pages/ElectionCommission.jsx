import React from 'react'
import Navigation from "./Navigation"
import  { toast } from 'sonner';


const ElectionCommission = ({state}) => {

  
    const handleElection = async(event)=>{
        event.preventDefault()
        const start = document.querySelector("#startT").value
        const end = document.querySelector("#endT").value
        const date  = new Date()
        try{
          const tx =  await state.contract.voteTime.send(start,end)
          await tx.wait()
          toast.success("Voting has been initialised" ,{description:`${date.toString().slice(0,3)}, ${date.toString().slice(4,7)} ${date.getDate()} at ${date.toLocaleTimeString()} `})
        
        }catch(error){
          console.error(error)
          toast.error(error.reason)
        }

        console.log(start,end)
    }

    const handleEmergency = async()=>{
      try{
        await state.contract.emergency()
        toast.success("Emergency has been declared")
      }catch(error){
        console.error(error)
        toast.error(error.reason)
      }
    }


    const handleResult = async()=>{
      try{
        await state.contract.result()
        toast.success("Result has been declared")
      }catch(error){
        console.error(error)
        toast.error(error.reason)
      }
    }

return (
    <div className='flex  h-[100%]  space-x-12 '>
        <Navigation />
        
        <div className="w-[60%] h-[70%]">


            <div className="flex flex-col justify-center items-center mt-[10%]">
                <h1 className="mb-10 tracking-wide text-gray-600 dark:text-gray-400 text-2xl ">
                    Enter Vote Timing (In seconds)
                </h1>
                {/* Form starts of Vote time */}
                <form className="grid grid-rows-2 grid-flow-col gap-10" onSubmit={handleElection}>

                    <div className="grid grid-rows-2 grid-flow-col gap-10">
                        <div className="w-[100%] col-span-10 rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 transition-all duration-700 hover:shadow-[0_3px_10px_rgb(0.4,0.4,0.4,0.4)] dark:hover:shadow-cyan-500/50 ">
                            <input className="rounded-[calc(1.5rem-1px)] p-6 w-[100%] bg-white dark:bg-gray-900 dark:text-slate-200  h-10" placeholder="Start time in seconds" name="" id="startT" ></input>
                        </div>

                        <div className="w-[100%] col-span-10 rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 transition-all duration-700 hover:shadow-[0_3px_10px_rgb(0.4,0.4,0.4,0.4)] dark:hover:shadow-cyan-500/50 ">
                            <input className="rounded-[calc(1.5rem-1px)] p-6 w-[100%] bg-white dark:bg-gray-900 dark:text-slate-200  h-10" placeholder="End time in seconds" name="" id="endT"  ></input>
                        </div>
                    </div>

                    <div className='rounded-3xl '>
                        <button className="relative inline-flex ml-32 items-center justify-center  p-0.5 rounded-full  mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-all  duration-200 shadow-[0_3px_10px_rgb(0.4,0.4,0.4,0.4)]" type='submit'>
                          <span className="relative px-5 py-2 transition-all rounded-calc(1.5rem- 1px)] ease-in-out duration-700 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                               Start Voting
                          </span>
                        </button> 
                    </div>
                </form>

                {/* Form ends here Of Vote Time  */}

                {/* Emergency and Result buttons starts here */}

                <div className='flex justify-around items-center'>
                  <button onClick={handleEmergency} className=" text-red-600 hover:text-white border border-red-600  focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 hover:bg-red-600 shadow-2xl transition-all ease-in-out" type='submit'>Emergency</button>

                  <div className='rounded-3xl '>
                          <button onClick={handleResult} className="relative inline-flex ml-32 items-center justify-center  p-0.5 rounded-full  mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-all  duration-200 shadow-[0_3px_10px_rgb(0.4,0.4,0.4,0.4)]" type='submit'>
                            <span className="relative px-5 py-2 transition-all rounded-calc(1.5rem- 1px)] ease-in-out duration-700 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                              Result
                            </span>
                          </button> 
                    </div>
                </div>

                {/* Emergency and Result buttons ends here */}
            
            </div>
            {/* voting  time ends */}

            
        </div>
      </div>
  )
}

export default ElectionCommission



// {/* <h1 className='p-2 px-6 font-semibold text-[#F784AD] shadow rounded-md dark:bg-slate-900 dark:shadow-[#f784ac76]'>Enter election start and end time</h1>
// <form className="grid grid-rows-3 grid-flow-col gap-10" onSubmit={handleElection}>
//     <input className="dark:bg-slate-950 shadow-xl dark:shadow-cyan-500/50 dark:text-slate-200 rounded-md p-2 w-96 h-10" placeholder="Start time " name="" id="startT" ></input>
//     <input className="dark:bg-slate-950 shadow-xl dark:shadow-cyan-500/50 dark:text-slate-200 rounded-md p-2 w-96 h-10" placeholder="End time" name="" id="endT" ></input>
//     <button className=" bg-[#4263EB] p-3 ml-32 w-[30%] rounded-md text-white hover:bg-[#4e6dec] shadow-2xl  transition-all ease-in-out" type='submit'>Voting Start</button>
// </form> */}


            // {/* <div className='grid grid-flow-col mt-[10%]'>
            //     <button onClick={handleEmergency} className=" bg-red-600 p-3 text-center w-[30%] px-5 rounded-full text-white hover:bg-red-400 shadow-2xl transition-all ease-in-out" type='submit'>Emergency</button>
            //     <button onClick={handleResult} className=" bg-[#4263EB] p-3 text-center w-[30%] px-10  rounded-md text-white hover:bg-[#6c83de] shadow-2xl  transition-all ease-in-out" type='submit'>Result</button>
            //     <div className='rounded-3xl '>
            //             <button onClick={handleResult} className="relative inline-flex ml-32 items-center justify-center  p-0.5 rounded-full  mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-all  duration-200 shadow-[0_3px_10px_rgb(0.4,0.4,0.4,0.4)]" type='submit'>
            //               <span class="relative px-5 py-2 transition-all rounded-calc(1.5rem- 1px)] ease-in-out duration-700 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
            //                  Result
            //               </span>
            //             </button> 
            //         </div>
            // </div> */}



            // async function cal(){
            //   const stats = await state.contract.votingStatus()
            //   // const bal =  await ethers.getBalance()
            //   console.log(stats)
            // }
            // cal()