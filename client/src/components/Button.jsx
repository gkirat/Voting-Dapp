import React from "react";
import { useState } from "react";

const Button = ({ event }) => {
  return (
    <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-normal rounded-2xl transition-all hover:shadow-[0_3px_10px_rgb(0.4,0.4,0.4,0.4)] dark:hover:shadow-cyan-500/50 duration-700">
      {event}
    </button>
  );
};

export default Button;
// hover:shadow-[0_3px_10px_rgb(0.4,0.4,0.4,0.4)
