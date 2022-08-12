import React from "react";
import Readmore from "./Readmore";
import Star from "./Star";



function Card() {
    
  return (
    <div className="p-36 flex justify-between bg-gray-100">
    <div className="shadow-lg bg-white rounded-lg w-[458px] p-8 -mt-60 space-y-3  ">
        <Star></Star>
        <div p-2>
        
<Readmore last="Tae, the front desk nurse/receptionist was also so helpful and personable during my visits. She really made me feel so welcomed during my IV sessions. She was simply amazing! Brent, one of the Lead Infusion staff members was very gentle and friendly during my IV treatment. He made sure I felt relaxed and comfortable. I appreciate the excellent customer service from VYVE Wellness!" first="I had a great experience at VYVE Wellness.

The facility is very clean and the overall design and ambience of the space is very calming and peaceful.

Dr. Haas was very knowledgeable about the health benefits of IV infusions. He really took the time to also address a few of my personal health concerns and wellness goals."></Readmore>

</div>
<div className="flex items-center">
    <img className="w-16 rounded-full" src="https://storage.googleapis.com/msgsndr/Qa1UvBVhJBvxby4hTfCc/media/620a6ff0c9c08c45e0d8864e.png" alt="" />
    
    <h2 className="font-bold ml-2 ">
    Kendra B
    </h2>
    </div>
     
    </div>

    <div className="shadow-lg rounded-lg w-[458px] bg-white p-8 -mt-60  space-y-3 ">
        <Star></Star>
        <div p-2>
        
<Readmore last=" Dr. Haas listened to my struggles and came up with multiple ways to work on thematic and didnt focus on my weight, but rather gave me goals on hydration and working up my muscle mass. There was no shame or guilt. We need more doctors like him. I cant thank you enough for your compassion." first="“My first meeting with Dr. Haas was so refreshing!

Finally a doctor who looks at you as a whole person and works with your abilities to implement realistic changes in your lifestyle to gain your health back.

As someone with diabetes, I am so used to being judged, scolded, and told to just eat better... "></Readmore>

</div>
<div className="flex items-center">
    <img className="w-16 rounded-full" src="https://storage.googleapis.com/msgsndr/Qa1UvBVhJBvxby4hTfCc/media/620a6ff0c9c08cc167d8864d.png" alt="" />
    
    <h2 className="font-bold ml-2 ">
    Heather M
    </h2>
    </div>
     
    </div>
    </div>

    
  );
 
}

export default Card;
