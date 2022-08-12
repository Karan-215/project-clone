import React from "react";
import Button from "./Button";


function LandingPage() {
  return (
    <>
    <div className="flex justify-between py-40 px-32 h-screen">
        
    <div className=" py-4 space-y-5">
        <h1 className="font-bold text-4xl flex flex-col">
       <strong> Personalized IV Therapy Designed To Make Sure You Get The EXACT Nutrients</strong>
        <span><strong>You Need To Thrive</strong></span>

        </h1>
        <p className="text-xl font-normal">
        We don’t believe in randomly picking from those basic IV menus.

That’s why our board-certified Integrative Medicine specialists

craft our advanced IV therapy infusions specific to you!
        </p>
        <Button>Check for Openings TODAY!</Button>
       
    </div>
    <div className="p-16 ">
    <video class="w-screen ">
			<source class="w-30 h-30" src='https://www.w3schools.com/html/mov_bbb.mp4' type='video/mp4'/>
		
        </video>
    </div>

    </div>
    </>
  );
}

export default LandingPage;
