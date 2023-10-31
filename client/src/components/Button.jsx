import React from "react";
import  { toast } from 'sonner';

const Button = ({ event,id ,state}) => {

  const vote= async ()=>{
      try {
        const voterId = Number(await state.contract.checkVoterID());
        console.log(id,voterId)
        await state.contract.vote.send(voterId,id)
        toast.success("You have successfully Voted")
      } catch (error){
        console.error(error);
        toast.error(error.reason)
      }
  }

  return (
    <button onClick={vote} className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-normal rounded-2xl transition-all hover:shadow-[0_3px_10px_rgb(0.4,0.4,0.4,0.4)] dark:hover:shadow-cyan-500/50 duration-700">
      {event}
    </button>
  );
};

export default Button;
// hover:shadow-[0_3px_10px_rgb(0.4,0.4,0.4,0.4)
