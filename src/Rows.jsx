import React from "react";


function Row(props) {

  return (
    <>
    <div className="flex ">
        <img src="https://storage.googleapis.com/msgsndr/Qa1UvBVhJBvxby4hTfCc/media/620b33b145985522ee075347.svg+xml" alt="" />
        <h3 className="text-xl ml-1 font-normal">{props.children}</h3>
    </div>
    

    </>
  );
}

export default Row;
