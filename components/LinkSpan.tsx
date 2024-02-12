"use client";

import { useState } from "react";

type LinkSpanProps = {
    text: string;
    variant: "purple" | "green" ;
}

const LinkSpan = ({ text, variant}: LinkSpanProps) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div
      onMouseOver={()=> setToggle(false)}
      onMouseOut={() => setToggle(true)}
      className='flex gap-2'>
      <div className="w-5 flex"> 
          {toggle ? 
            <div className={`${variant === "green" ? "bg-green-20" : "bg-purple-30"} mt-[10px] h-1 w-5 rounded-full hover:transition-all duration-300`}/> :
            <div className={`${variant === "green" ? "bg-green-20" : "bg-purple-30"} w-1 h-5 ml-3 rounded-full hover:transition-all duration-300`}/> 
          }
        </div> 
        <span className={`font-[500] ${variant === "green" ? "text-green-20" : "text-purple-30"}`}> {text}</span>
    </div>
  )
}

export default LinkSpan
