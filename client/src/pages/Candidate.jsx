import React from 'react'
import Navigation from "./Navigation"



const Candidate = ({state,handleCase}) => {

    const handleInfo = async (event)=>{
        event.preventDefault()
        const candidatesInfo = {
          name: handleCase(document.querySelector("#name").value),
          party :(document.querySelector("#party").value).toUpperCase(),
          age: document.querySelector("#age").value,
          gender: handleCase(document.querySelector("#gender").value)
         }

        try{
          await state.contract.candidateRegister.send(candidatesInfo.name,candidatesInfo.party,candidatesInfo.age,candidatesInfo.gender)
          alert("Candidate registeration successful")
         //  window.location.reload()
       } catch(error){
           console.error(error)
        }
        // console.log(name,party,age,gender)
    }

  return (
    <div className="flex  h-[100%] space-x-32">
      <Navigation />
      <div className="w-[60%] h-[70%]">
        
        <div className="flex flex-col justify-center items-center mt-[10%]" >

            <form className="grid grid-rows-5 grid-flow-col gap-10" onSubmit={handleInfo}>
                <input className="dark:bg-slate-950 shadow-xl dark:shadow-cyan-500/50 dark:text-slate-200 rounded-md p-2 w-96 h-10" placeholder="Enter name " name="" id="name" ></input>
                <input className="dark:bg-slate-950 shadow-xl dark:shadow-cyan-500/50 dark:text-slate-200 rounded-md p-2 w-96 h-10" placeholder="Enter party" name="" id="party" ></input>
                <input className="dark:bg-slate-950 shadow-xl dark:shadow-cyan-500/50 dark:text-slate-200 rounded-md p-2 w-96 h-10" placeholder="Enter age" name="" id="age" ></input>
                <input className="dark:bg-slate-950 shadow-xl dark:shadow-cyan-500/50 dark:text-slate-200 rounded-md p-2 w-96 h-10" placeholder="Enter gender" name="" id="gender" ></input>
                <button className=" bg-[#4263EB] p-3 ml-32 w-[30%] rounded-md text-white hover:bg-[#4e6dec] shadow-2xl shadow-[#4e6dec] transition-all ease-in-out" type='submit'>Register</button>
            </form>
            
        </div>
      </div>

 
    </div>
  )
}

export default Candidate
