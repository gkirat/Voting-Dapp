import React from "react";
import { useEffect, useState } from "react";

const ElectionCard = ({ state, info }) => {
  const date = new Date().toLocaleTimeString();
//   const dat = new Date().getTime()
//   console.log(dat)

  const [startTime, setStartTime] = useState(date);
  const [endTime, setEndTime] = useState(date);
  const [pollEnded, setPollEnded] = useState();
  const [endTimeInUnix,setUnixTime] = useState()

  const getTime = async () => {
    try {
      const _startTime = Number(await state.contract.startTime());
      const _endTime = Number(await state.contract.endTime());
      setUnixTime(_endTime)
    //   console.log(_startTime,_endTime)

      let dateObj = new Date(_startTime * 1000);
      let start = dateObj.toLocaleTimeString();
      setStartTime(start);

      let dateObj1 = new Date(_endTime * 1000);
      let end = dateObj1.toLocaleTimeString();
      setEndTime(end);
      // console.log(`${start},${end},${date} GMT`)
    } catch (error) {
      console.error(error);
    }
  };

  const compare = async () => {
    let dte = new Date().getTime()
    dte = Math.floor(dte/1000)
    // console.log("EndTime in unix " + endTimeInUnix)
    // console.log("Current time " + dte)
    if (endTimeInUnix > dte) {
      console.log("Voting in progress");
      setPollEnded(false);
    } else {
      console.log("Voting has ended");
      setPollEnded(true);
    }
  };
//   console.log(pollEnded)
// compare()
  useEffect(() => {
    getTime();
    compare();
  }, [pollEnded,startTime]);

  return (
    <div className="w-[90%]  rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 transition-all duration-700 hover:shadow-[0_3px_10px_rgb(0.4,0.4,0.4,0.4)] dark:hover:shadow-cyan-500/50 ">
      <div className="rounded-[calc(1.5rem-1px)] p-6 w-[100%] bg-white dark:bg-gray-900">
        <div className=" items-center justify-start">
          <div className="grid grid-cols-2 gap-4 items-center ">
            <h1 className="text-md font-semibold tracking-wide whitespace-nowrap ">
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
          <div className="flex space-x-20 items-center">
            <div className="flex flex-col justify-center items-center font-extralight">
              <p className=" text-gray-500 p-2 text-sm whitespace-nowrap ">
                Start Time
              </p>
              <p className=" text-[#2ABB94] font-semibold text-xs ">
                {startTime} IST
              </p>
            </div>

            <div className="flex flex-col justify-center items-center font-extralight">
              <p className=" text-gray-500 p-2 text-sm whitespace-nowrap ">
                End Time
              </p>
              <p className=" text-[#F784AD] font-semibold text-xs ">
                {endTime} IST
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectionCard;
