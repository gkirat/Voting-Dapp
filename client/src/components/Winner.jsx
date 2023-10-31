import React from 'react'
import { useEffect, useState } from "react";

const Winner = ({state}) => {


    // const [endTime, setEndTime] = useState(date);
    const [pollEnded, setPollEnded] = useState();
    const [endTimeInUnix,setUnixTime] = useState()
    const [winnerInfo,setWinnerInfo] = useState({
        candidateId:null,
        name:null,
        party:null
    })
  
    const getTime = async () => {
      try {
        const _endTime = Number(await state.contract.endTime());
        setUnixTime(_endTime)
      } catch (error) {
        // console.log(error);
      }
    };
  
    const compare = async () => {
      await getTime()

      let dte = new Date().getTime()
      dte = Math.floor(dte/1000)
      if (endTimeInUnix > dte) {
        setPollEnded(false);
      } else {
        try{
          const val =  (await state.contract.EcPollInfo())
          const id = Number(val[0])
          const name = (val[1])
          const party = (val[2])
          setWinnerInfo({id,name,party})
          // console.log(val[0],val[1],val[2],val[3])
        }catch(error){
          console.log(error)
        }
        setPollEnded(true);
      }
    };
    // console.log(winnerInfo)

    useEffect(()=>{
        compare()
    },[])
  
  return (
        <>
      <div className="w-[100%]  rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 transition-all duration-700 hover:shadow-[0_3px_10px_rgb(0.4,0.4,0.4,0.4)] dark:hover:shadow-cyan-500/50 ">
            <div className="rounded-[calc(1.5rem-1px)] p-6 w-[100%] bg-white dark:bg-gray-900 ">
            <div className="flex gap-4 items-center justify-around">

                {/* party and name starts here  */}
                
                <div>
                    <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                    {winnerInfo.name}
                    </h3>

                </div>
                {/* party and name ends here  */}

                {/* candidate id starts here  */}
                <div>
                    <h3 className="text-lg font-light text-gray-700 dark:text-gray-600">
                    Party
                    </h3>
                    <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400">
                    {winnerInfo.party}
                    </span>
                </div>
                {/* candidate id ends here  */}
                </div>
            </div>
      </div>  
        </>
  )
}

export default Winner
