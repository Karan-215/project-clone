import React from "react";
import Button from "./Button";
import { BsTelephoneFill } from 'react-icons/Bs';

function Navbar() {
  return (
   <>

   <div className="flex justify-around items-center  fixed  w-full shadow-md bg-white   p-3">
<div className="flex flex-col ">
    <img src="https://assets.cdn.msgsndr.com/o4yMDdWvX9IjYu0LLupA/media/e1f8fedc-7199-4402-a933-86a4ae402594.png" alt="" />
</div>
<div>
    <h2 className="flex items-center"><BsTelephoneFill/>+1-704-396-5901</h2>
</div>
<div>
<Button>Check for Openings TODAY!</Button>
</div>
   </div>
   
   
   
   
   
   
   </>
  );
}

export default Navbar;
