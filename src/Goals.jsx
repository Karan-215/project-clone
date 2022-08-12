import React from "react";


function Goals({img ,text,para1,para2,para3}) {

  return (
    <>
   <div className="space-y-2 text-center flex flex-col justify-center items-center">
    <img src={img} alt="" />
    <h2 className="font-bold text-xl ">
{text}
    </h2>
    <div className="font-normal text-lg ">
    <p>
{para1}
    </p>
    <p>
{para2}
    </p>
    <p>
{para3}
    </p>
    </div>
   </div>


    </>
  );
}

export default Goals;
