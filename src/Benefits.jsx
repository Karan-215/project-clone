import React from "react";
import Card from "./ReviewCard";
import Row from "./Rows";
import Button from "./Button";


function Benefits() {
  return (
    <>
    <div className=" px-36 bg-gray-100 pb-36" >
    <div className=" flex  bg-gray-100">
    <div className="space-y-4 bg-gray-100">
    <h1 className="font-bold text-4xl flex flex-col">
       <strong>Unlock the Benefits of
IV Nutrient Therapy</strong>

</h1>
<p className="text-xl font-normal ">
IV therapy is one of the quickest ways to rehydrate your body.

But, its also the most EFFICIENT way to absorb 100% of the nutrients

you need for optimal health, no matter your wellness goal.
        </p>
        <div className="flex">
          <div className="space-y-3">
            <Row>Reduce inflammation</Row>
            <Row>Boost energy levels</Row>
            <Row>Improve function</Row>

          </div>
          <div className="space-y-3">
          <Row>Optimize physique</Row>
          <Row>Support cognitive health</Row>
          <Row>…And much more!</Row>

          </div>
        </div>
        <Button className="mt-3">Check for Openings TODAY!</Button>
    </div>
    <div className="">
      <img src="https://assets.cdn.msgsndr.com/o4yMDdWvX9IjYu0LLupA/media/5f756f90-a603-43f0-bcc6-ff3a6fd1ad7a.jpeg" alt="" />
    </div>
   
    </div>
    
    </div>
    </>
  );
}

export default Benefits;
