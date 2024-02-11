"use client";

import { useState } from "react";

type LinkSpanProps = {
    text: string;
    variant: string;
}

const LinkSpan = ({ text, variant}: LinkSpanProps) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div
      onMouseOver={()=> setToggle(false)}
      onMouseOut={() => setToggle(true)}
      className='flex gap-2 items-center justify-center'>
      <div className="w-5"> 
          {toggle ? 
            <div className={`bg-${variant} h-1 w-5 rounded-full hover:transition-all duration-300`}/> :
            <div className={`bg-${variant} w-1 h-5 ml-3 rounded-full hover:transition-all duration-300`}/> 
          }
        </div> 
        <span className={`font-[500] text-${variant}`}> {text}</span>
    </div>
  )
}

export default LinkSpan
