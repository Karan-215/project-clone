import React from "react";

function Button({children,pxx}) {
  return (
   <>
   <button class={"rounded-full py-2 bg-pink-400 text-white px-3"  }>{children}</button>
   
   </>
  );
}

export default Button;
