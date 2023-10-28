import React from "react";
import Button from "./Button";
import { useEffect, useState } from "react";

const List = ({ name, party, setValue }) => {
  const [fill, setFill] = useState();
  useEffect(() => {
    setFill(setValue);
  }, []);
  return (
    <>
      <div className="w-[100%]  rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 transition-all duration-700 hover:shadow-[0_3px_10px_rgb(0.4,0.4,0.4,0.4)] dark:hover:shadow-cyan-500/50 ">
        <div className="rounded-[calc(1.5rem-1px)] p-6 w-[100%] bg-white dark:bg-gray-900">
          {fill ? (
                <div className="flex gap-4 items-center justify-around">
                <div>
                    <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                    {name}
                    </h3>
                    <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400">
                    {party}
                    </span>
                </div>
                <Button event="Vote" />
                </div>
          ) : (
                <div className="flex gap-4 items-center justify-around">
                {/* <h3 className="text-lg font-medium text-gray-700 dark:text-white"></h3> */}
                <span className="text-md tracking-wide text-gray-600 dark:text-gray-400">
                    Candidates have not registered yet !!
                </span>
                </div>
          )}
        </div>
      </div>
    </>
  );
};

export default List;

// <div className="flex gap-4 items-center justify-around">
//     <div>
//         <h3 className="text-lg font-medium text-gray-700 dark:text-white">{name}</h3>
//         <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400">{party}</span>
//     </div>
//     <Button event="Vote" />
// </div>

// {/* <div class="max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 transition-all duration-1000  "   style={shadow:0 0 10px 2px linear-gradient(90deg, #3b82f6, #ec4899)}> */}
