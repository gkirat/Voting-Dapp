import React from "react";
import { useEffect, useState } from "react";

const ElectionCard = ({ state, info }) => {
  const date = new Date().toLocaleString();

  const [startTime, setStartTime] = useState(date);
  const [endTime, setEndTime] = useState(date);
  const [pollEnded, setPollEnded] = useState();
  const [endTimeInUnix,setUnixTime] = useState()
  const [status,setStatus] = useState()

  const getTime = async () => {
    try {
      const _startTime = Number(await state.contract.startTime());
      const _endTime = Number(await state.contract.endTime());
      setUnixTime(_endTime)
      // console.log(_startTime,_endTime)

      let dateObj = new Date(_startTime * 1000);
      let start = dateObj.toLocaleString();
      setStartTime(start);

      let dateObj1 = new Date(_endTime * 1000);
      let end = dateObj1.toLocaleString();
      setEndTime(end);
      // console.log(`${start},${end},${date} GMT`)
    } catch (error) {
      console.log(error);
    }
  };

  const compare = () => {
    let dte = new Date().getTime()
    dte = Math.floor(dte/1000)
    // console.log("EndTime in unix " + endTimeInUnix)
    // console.log("Current time " + dte)
    if (endTimeInUnix > dte) {
      // console.log("Voting in progress");
      setStatus("Voting in progress")
      setPollEnded(false);
    } else {
      setStatus("Voting has ended")
      // console.log("Voting has ended");
      setPollEnded(true);
    }
  };


  useEffect(() => {
       getTime();
  }, []);

  useEffect(()=>{
    if(!endTime){
      return 
    }

    let interval = setInterval(()=>{
      compare()
    },1000)
    return ()=>{clearInterval(interval)}
  },[endTime])

  // react life cycle
  return (

    <>
      {/* Election status starts */}
    <div className="grid grid-cols-2 gap-2 items-center ">
            <h1 className=" tracking-wide text-gray-600 dark:text-gray-400 text-2xl whitespace-nowrap ">
              Election Status
            </h1>
            {/* Svg starts here */}
            {pollEnded ? (
              <svg
                className="w-20 "
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="50" r="22" fill="#999" opacity="0.5" />
                <circle cx="50" cy="50" r="20" fill="#FF3131">
                  <animate
                    attributeName="r"
                    values="20;15;20"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            ) : (
              <svg
                className="w-20 "
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="50" r="22" fill="#999" opacity="0.5" />
                <circle cx="50" cy="50" r="20" fill="#2ABB94">
                  <animate
                    attributeName="r"
                    values="20;15;20"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            )}

            {/* Svg ends here */}
    </div>
    {/* Election status ends  */}
    
   {/* Box starts here */}
    <div className="w-[90%] rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 transition-all duration-700 hover:shadow-[0_3px_10px_rgb(0.4,0.4,0.4,0.4)] dark:hover:shadow-cyan-500/50 ">
      <div className="rounded-[calc(1.5rem-1px)] p-6 w-[100%] bg-white dark:bg-gray-900">

        <div className="  flex flex-col flex-wrap items-center justify-start gap-2">


          <p className="text-gray-600 font-light text-lg md:-mt-2 lg:-mt-2"> {status} </p>

          {/* <p className="text-gray-400 font-light text-md md:mt-2">Poll Timings</p>   */}

            

              {/* Current time starts */} 
            <div className="grid grid-cols-2 font-extralight items-center md:mt-2">
                <p className=" text-gray-500 text-sm whitespace-nowrap ">
                  Current Time:
                </p>
                <p className=" text- font-semibold text-xs whitespace-nowrap ">
                  {date}
                </p>
            </div>
              {/* Current time ends */}


              {/* POLL TIMINGS Starts here */}
          <div className="flex space-x-20 items-center">
        
              {/* Start time starts here */}
            <div className="grid grid-rows-2 gap-2 font-extralight items-center">
              <p className=" text-gray-500 text-sm whitespace-nowrap ">
               Poll Start
              </p>
              <p className=" text-[#2ABB94] font-semibold text-xs ">
                {startTime}
              </p>
            </div>
              {/* Start time ends here */}
              
              {/* END time starts here */}
            <div className="grid grid-rows-2 gap-2 font-extralight items-center">
              <p className=" text-gray-500 text-sm whitespace-nowrap ">
                Poll End
              </p>
              <p className=" text-[#F784AD] font-semibold text-xs ">
                {endTime}
              </p>
            </div>
              {/* END time finishes here */}
          </div>
              {/* POLL TIMINGS ends here */}

        </div>

      </div>
    </div>
    {/* Box ends here */}
    </>
  );
};

export default ElectionCard;
