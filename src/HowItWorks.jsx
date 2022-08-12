import React from "react";
import Goals from "./Goals";



function HowWorks(props) {

  return (
    <>
    <div className="bg-gray-100 py-24">
    <div className="text-center">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent  bg-gradient-to-r  from-pink-600 via-purple-400 to-blue-600 ">
        HOW IT WORKS
        </h1>
        <div className="text-5xl font-bold ">
        <p >What to Expect At Your FIRST
            <p></p>
            IV Visit at VVYE Wellness…
            </p>
            </div>
            <div className="p-36 px-64">
                <div className="flex justify-between">
            <Goals img="https://assets.cdn.msgsndr.com/o4yMDdWvX9IjYu0LLupA/media/5938ac8a-ec9a-46c9-9f6e-df9f25dbe86b.png" text="Uncover Your Hydration Profile"para1="Take the guesswork out of the equation" para2="with our body composition and "para3="hydration profile report."></Goals><span></span></div>
             <div className="flex justify-between">
             <span></span>
            <Goals img="https://assets.cdn.msgsndr.com/o4yMDdWvX9IjYu0LLupA/media/da68e3b6-c31a-4631-aba9-9e268b3a46ad.png" text="Outline Your Wellness Goals"para1="Discuss your goals with our medical" para2="doctors and go beyond the benefits of IV "para3="therapy alone."></Goals></div>
            <div className="flex justify-between">
            <Goals img="https://assets.cdn.msgsndr.com/o4yMDdWvX9IjYu0LLupA/media/473db299-ed68-4a7d-8e3a-5295e6ffec3c.png" text="Explore Your Insurance Benefits"para1="Work with our staff and discover how to make" para2="the most of your insurance benefits. "para3="No insurance? We have cash pricing too."></Goals><span></span>
            </div>
            <div className="flex justify-between"><span></span>
            <Goals img="https://assets.cdn.msgsndr.com/o4yMDdWvX9IjYu0LLupA/media/d0ce0747-8c82-41e9-8b2f-0295c31a441c.png" text="Relax and Enjoy Your Infusion"para1="Prop your feet up and recline in our" para2="heated chairs. Take a nap or enjoy an "para3="InfraRed Light session."></Goals></div>
            </div>
    </div>
    </div>
    
    
    </>
     
  );
}

export default HowWorks;