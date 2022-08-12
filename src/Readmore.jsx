import React, { Children } from "react";

function Readmore ({first,last}){
    const [readMore,setReadMore]=React.useState(false);
  const extraContent=<div>
      <p >
      {last}
      </p>
  </div>
  const linkName=readMore?'Read Less << ':'Read More >> '

  return (
    <div>
        
        <p>{first}</p>
      <a className="text-blue-500 cursor-pointer " onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
      {readMore && extraContent}
    </div>
  );

}
export default Readmore;