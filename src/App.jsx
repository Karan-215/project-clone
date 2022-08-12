import React from "react";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import Star from "./Star";
import Card from "./ReviewCard";
import Benefits from "./Benefits";
import Poster from "./Poster";
import Questions from "./Questions";
import Map from "./Map";
import CardTwo from "./CardBottom";
import Offer from "./OfferPage";
import HowWorks from "./HowItWorks";
import Experience from "./Experience";
function App() {

  return (
    <>
    <Navbar></Navbar>
    <LandingPage></LandingPage>
    
    <Card></Card>
    
    
    <Benefits></Benefits>
    <Experience></Experience>
    <Poster></Poster>
    <HowWorks></HowWorks>
    <Offer></Offer>
    
    <CardTwo></CardTwo>
    <Questions></Questions>
    <Map></Map>

    </>
  );
}

export default App;
