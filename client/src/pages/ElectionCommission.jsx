import React from 'react'
import Navigation from "./Navigation"

const ElectionCommission = ({state}) => {

    const handleElection = async (event)=>{
        event.preventDefault()
        const start = document.querySelector("#startT").value
        const end = document.querySelector("#endT").value
        try{
          const tx =  await state.contract.voteTime.send(start,end)
          const electionCommission = await state.contract.electionCommission();
          await tx.wait()
          alert("Voting has been initialised")
        }catch(error){
          console.error(error)
        }

        console.log(start,end)
    }

    const handleEmergency = async()=>{

      try{
        await state.contract.emergency()
        alert("Emergency has been declared")
      }catch(error){
        alert(error)
      }
    }


    const handleResult =async()=>{
      try{
        await state.contract.result()
      }catch(error){
        alert(error)
      }
    }

    async function cal(){
      const stats = await state.contract.votingStatus()
      // const bal =  await ethers.getBalance()
      console.log(stats)
    }
    cal()

return (
    <div className='flex  h-[100%]  space-x-12 '>
        <Navigation />
        
        <div className="w-[60%] h-[70%]">
        
        <div className="flex flex-col justify-center items-center mt-[10%] space-y-10" >
        <h1 className='p-2 px-6 font-semibold text-[#F784AD] shadow rounded-md dark:bg-slate-900 dark:shadow-[#f784ac76]'>Enter election start and end time</h1>
            <form className="grid grid-rows-3 grid-flow-col gap-10" onSubmit={handleElection}>
                <input className="dark:bg-slate-950 shadow-xl dark:shadow-cyan-500/50 dark:text-slate-200 rounded-md p-2 w-96 h-10" placeholder="Start time " name="" id="startT" ></input>
                <input className="dark:bg-slate-950 shadow-xl dark:shadow-cyan-500/50 dark:text-slate-200 rounded-md p-2 w-96 h-10" placeholder="End time" name="" id="endT" ></input>
                <button className=" bg-[#4263EB] p-3 ml-32 w-[30%] rounded-md text-white hover:bg-[#4e6dec] shadow-2xl  transition-all ease-in-out" type='submit'>Voting Start</button>
            </form>

            <div className='flex justify-center items-center space-x-44'>
                <button onClick={handleEmergency} className=" bg-red-600 p-3 text-center w-[30%] px-5 rounded-md text-white hover:bg-red-400 shadow-2xl transition-all ease-in-out" type='submit'>Emergency</button>
                <button onClick={handleResult} className=" bg-[#4263EB] p-3 text-center w-[30%] px-10  rounded-md text-white hover:bg-[#6c83de] shadow-2xl  transition-all ease-in-out" type='submit'>Result</button>
            </div>
            
        </div>
      </div>


        </div>
    
    
  )
}

export default ElectionCommission
