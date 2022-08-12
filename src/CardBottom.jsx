import React from "react";
import Card from "./ReviewCard";


function CardTwo(props) {

  return (
    <>
       <h1 className="font-bold text-5xl mt-28 text-center">What Our Charlotte Patients Say<br></br>
About IV Hydration at VYVE</h1>
    <div className="mt-56 flex flex-col  bg-white">
      <Card className="bg-white"></Card>
      <div className="space-x-3 text-center pb-20 -mt-24">
      <span className=" h-6 w-6 bg-pink-400 rounded-full inline-block"></span>
      <span className=" h-6 w-6 bg-gray-300  rounded-full inline-block"></span>
      <span className=" h-6 w-6 bg-gray-300  rounded-full inline-block"></span>
      <span className=" h-6 w-6 bg-gray-300  rounded-full inline-block"></span>
      <span className=" h-6 w-6 bg-gray-300  rounded-full inline-block"></span>
      <span className=" h-6 w-6 bg-gray-300  rounded-full inline-block"></span>
      <span className=" h-6 w-6 bg-gray-300  rounded-full inline-block"></span>
      </div>
      <div className="text-center -mt-12 ">
      <a href="#" className="  rounded-full  py-2 px-20 text-2xl text-center  bg-pink-400 text-white ">Join the VYVE Family</a>
    </div>
    <div>
      
    </div>
  
    </div>
    

    </>
  );
}

export default CardTwo;