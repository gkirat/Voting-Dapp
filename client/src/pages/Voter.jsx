import React from 'react'
import Navigation from "./Navigation"

const Voter = ({state,handleCase}) => {

    const handleVoterInfo = async(event)=>{
        event.preventDefault()

        const voterInfo = {
            name: handleCase(document.querySelector("#nameV").value),
            age :handleCase(document.querySelector("#ageV").value),
            gender: handleCase(document.querySelector("#genderV").value)
        }

        try{
            await state.contract.voterRegister.send(voterInfo.name,voterInfo.age,voterInfo.gender)
            alert("Voter registered")

        }catch(error){
            console.error(error)
        }
        console.log(voterInfo.name,voterInfo.age,voterInfo.gender)

    }

    const handleVoting = async(event)=>{
        event.preventDefault()
        const voterId = document.querySelector("#voterId").value
        const candidateId = document.querySelector("#candidateId").value

        try{
            await state.contract.vote.send(voterId,candidateId)
            alert("Voting done")
        }catch(error){
            console.error(error)
        }

        // console.log(voterId,candidateId)
    }
  return (

    <div className="flex  h-[100%] space-x-32">
        <Navigation />

        <div className=" w-[60%]  h-[90%] flex justify-center items-center space-x-20">
            <div className="flex flex-col justify-center items-center  space-y-6">
                <h1 className='p-2 px-6 font-semibold text-[#F784AD] shadow rounded-md dark:bg-slate-900 dark:shadow-cyan-500/50'>Registration of voter</h1>
                <form className="grid grid-rows-5 grid-flow-col gap-10" onSubmit={handleVoterInfo}>
                    <input className='dark:bg-slate-950 shadow-xl dark:shadow-cyan-500/50 dark:text-slate-200 rounded-md p-2 w-96 h-10' placeholder='Enter name' name='nameV' id='nameV'></input>
                    <input className='dark:bg-slate-950 shadow-xl dark:shadow-cyan-500/50 dark:text-slate-200 rounded-md p-2 w-96 h-10' placeholder='Enter age' name='ageV' id='ageV'></input>
                    <input className='dark:bg-slate-950 shadow-xl dark:shadow-cyan-500/50 dark:text-slate-200 rounded-md p-2 w-96 h-10' placeholder='Enter gender' name='genderV' id='genderV'></input>
                    <button className=" bg-[#4263EB] p-3 ml-32 w-[30%] rounded-md text-white hover:bg-[#4e6dec] shadow-2xl shadow-[#4e6dec] transition-all ease-in-out" type='submit'>Register</button>
                </form>
            </div>

            <div className='flex  flex-col justify-center items-center space-y-6'>
                <h1 className='p-2 px-6  font-semibold text-[#F784AD] shadow rounded-md dark:bg-slate-900 dark:shadow-cyan-500/50'>Voting</h1>
                <form className='grid grid-rows-5 grid-flow-col gap-10' onSubmit={handleVoting}>
                     <input className='dark:bg-slate-950 shadow-xl dark:shadow-cyan-500/50 dark:text-slate-200 rounded-md p-2 w-96 h-10' placeholder='Enter Voter Id' name='voter Id' id='voterId' type='number'></input>
                     <input className='dark:bg-slate-950 shadow-xl dark:shadow-cyan-500/50 dark:text-slate-200 rounded-md p-2 w-96 h-10' placeholder='Enter Candidate Id' name='candidate Id' id='candidateId' type='number'></input>
                     <button className=" bg-[#4263EB] p-3 ml-32 w-[30%] rounded-md text-white hover:bg-[#4e6dec] shadow-2xl shadow-[#4e6dec] transition-all ease-in-out" type='submit'>Vote</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Voter
