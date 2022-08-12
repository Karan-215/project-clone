import React from "react";
import{RiStarSFill}from 'react-icons/ri'

function Star() {
    let iconStyles = { color: "#ffa500", fontSize: "1.2em" };
  return (
    <>
    <div className="flex">
    <RiStarSFill style={iconStyles}/>
    <RiStarSFill style={iconStyles}/>
    <RiStarSFill style={iconStyles}/>
    <RiStarSFill style={iconStyles}/>
    <RiStarSFill style={iconStyles}/>

    </div>
    </>
  );
}

export default Star;