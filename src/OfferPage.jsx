import React from "react";
import Button from "./Button";
// import Check from "./Check";

function Offer() {

  return (
    <>
    <div className=" items-center text-center bg-gradient-to-r  from-indigo-400 via-purple-400 to-pink-400 mx-36 space-y-10 pt-16 pb-8 rounded-2xl">
     <h2 className="font-bold text-5xl text-white">
     NEW PATIENT SPECIAL OFFER
     </h2>
     <h3 className="font-bold text-4xl text-white">Enjoy your<span className="underline "> 1st Infusion</span> PLUS:</h3>
     <div className="flex space-x-10 justify-center">
     <p className="text-2xl   text-white">Hydration profile report</p>

<p className="text-2xl  text-white">
Custom IV treatment plan</p>

<p className=" text-2xl  text-white">B12 & Glutathione injections</p>
     </div>
     <div className="flex space-x-12 pt-8  justify-center ">
        <div className="w-24">
            <img className="w-full" src="https://assets.cdn.msgsndr.com/o4yMDdWvX9IjYu0LLupA/media/968a756e-3ce3-4af8-b10a-389984908028.png"></img>
        </div>
     <div className="text-center space-y-8">
     <p className="text-5xl text-white">JUST <span className="text-white font-bold">$97</span> TODAY!</p>
    <Button ><span className="text-2xl  px-16 font-medium">Secure My Spot</span></Button>
    </div>
    <div className="w-24">
<img className="w-full" src="https://assets.cdn.msgsndr.com/o4yMDdWvX9IjYu0LLupA/media/c95afcb4-fe76-46db-87b5-e282557029b3.png"></img>
    </div>
    </div>
    <p className="text-white font-medium ">HURRY! <span className="font-bold">ONLY 3 SPOTS REMAINING</span> FOR THIS MONTH</p>
    </div>
    <div>
        
    </div>


    </>
  );
}

export default Offer;