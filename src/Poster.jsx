import React from "react";
import Button from "./Button";
// import Check from "./Check";

function Poster() {

  return (
    <>
    <div className="my-10">
    <div className=" items-center text-center bg-gradient-to-r  from-indigo-400 via-purple-400 to-pink-400 mx-56 space-y-4 pt-4 pb-8 ">
     <h2 className="font-bold text-4xl text-white">
     Don’t settle for the standard IV drip service...
     </h2>
     <div className="text-white text-2xl text-center font-normal">
        <p className="">
     Join our tribe today of wellness-seekers TODAY </p>

      <p>and enjoy a personalized & integrative </p>

        <p>approach to IV nutrient therapy!</p>

     </div>
     <div className="flex space-x-12  justify-center ">
        <div className="w-16">
            <img className="w-full" src="https://assets.cdn.msgsndr.com/o4yMDdWvX9IjYu0LLupA/media/968a756e-3ce3-4af8-b10a-389984908028.png"></img>
        </div>
     <div className="text-center space-y-8 mt-8">
     
    <Button ><span className="text-2xl   px-8 font-medium">Check For Openings
</span></Button>
    </div>
    <div className="w-16">
<img className="w-full" src="https://assets.cdn.msgsndr.com/o4yMDdWvX9IjYu0LLupA/media/c95afcb4-fe76-46db-87b5-e282557029b3.png"></img>
    </div>
    </div>
    <p className="text-white font-medium ">HURRY! <span className="font-bold">ONLY 3 SPOTS REMAINING</span> FOR THIS MONTH</p>
    </div>
    <div>
        
    </div>

    </div>
    </>
  );
}

export default Poster;