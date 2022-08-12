import React from 'react';
import {BiPlusMedical}from 'react-icons/bi'

function Questions(props) {
    let iconStyles = { color: "	#FFC0CB", fontSize: "1.6em" };
  return (
    
    <>
   <div className="bg-gray-100 py-36">
    <div className="items-center text-center">
        <h1 className="text-6xl font-semibold">
        Frequently Asked Questions
        </h1>
        <p className="text-2xl pt-8">
        And because <span className="font-semibold">we want you to feel 100% confident in your investment,</span><br></br>

here are a few of the questions we commonly get asked:
        </p>
    </div>
    <div className="flex flex-col space-y-4 pt-12 mx-72">
        <button className="bg-white  text-left p-6 rounded-xl flex justify-between items-center ">
            <span className="text-2xl flex ">How Long Does The Visit Take?</span><span><BiPlusMedical style={iconStyles}/></span>
            
        </button>
        <button className="bg-white  text-left p-6 rounded-xl flex justify-between items-center ">
            <span className="text-2xl">Do You Accept Insurance?</span><span><BiPlusMedical style={iconStyles}/></span>
            
        </button>
        <button className="bg-white  text-left p-6 rounded-xl flex justify-between items-center ">
            <span className="text-2xl">Who Oversees My IV Treatments?</span><span><BiPlusMedical style={iconStyles}/></span>
            
        </button>
        <button className="bg-white  text-left p-6 rounded-xl flex justify-between items-center">
            <span className="text-2xl">How Often Do I Need To Come To See Results?</span><span><BiPlusMedical style={iconStyles}/></span>
            
        </button>
        <button className="bg-white p-6 text-left rounded-xl flex justify-between items-center">
            <span className="text-2xl">Do I Need Any Lab Tests to Get Started?</span><span><BiPlusMedical style={iconStyles}/></span>
            
        </button>
    </div>


    <div className=" mt-28 overflow-hidden rounded-xl flex m-16 bg-gradient-to-r  from-indigo-200 via-purple-200 to-pink-200">
      <div className="w-2/4">
      <img className="w-full " src="https://assets.cdn.msgsndr.com/o4yMDdWvX9IjYu0LLupA/media/ac2cd3ce-770b-47a6-926c-6b96894ebe59.png"></img>
      </div>
      <div className="flex flex-col px-12 mt-4 ">
        <h2 className="text-5xl font-bold">
        SECURE your no-obligation
consultation today!
        </h2>
        <p className="py-4 text-2xl">Whenever you’re ready, join our tribe of wellness enthusiasts</p>
        <h3 className=" text-2xl font-semibold">1st Infusion PLUS Custom IV Treatment Plan for JUST $97 today!</h3>
        <a className="rounded-full py-6 mr-48 text-2xl text-center mt-16   bg-pink-400 text-white px-2"  href="">I’m Ready for My Custom IV Experience</a>
      </div>
    </div>
    
    </div>

    </>
  );
}

export default Questions;