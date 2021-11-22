import React from "react";
import Navbar from "../../component/Navbar";
import bg from "../../assets/bg.png";
import teltia from "../../assets/teltia.jpeg"
import adi from "../../assets/adi.jpeg"
import ansh from "../../assets/ansh.jpeg"
import amandeep from "../../assets/amandeep.jpeg"


import Typography from "@mui/material/Typography";
import Box from "./Box/Box"
import "./AboutUs.css";

const data = [
  {
    name: "Aditya Kumar" , 
    caption: "Blockchain",
    linkedin: "",
    twitter: "",
    src : adi
  },
  {
    name: "Aditya Teltia" , 
    caption: "Frontend and Backend",
    linkedin: "",
    twitter: "" ,
    src : teltia
  },
  {
    name: "Ansh Anurag" , 
    caption: "UI/UX and Frontend",
    linkedin: "",
    twitter: "" ,
    src : ansh

  },
  {
    name: "Amandeep Singh" , 
    caption: "Frontend and Backend",
    linkedin: "",
    twitter: "" ,
    src : amandeep

  },
]


const AboutUs = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: " center",
      }}
    >
      <Navbar />
      <h1
        style={{
          textAlign: "center",
          marginTop: "100px",
          fontFamily: '"Montserrat", sans-serif',
        }}
      >
        ABOUT US
      </h1>
      <div className="container">
        {data.map((val , idx)=>(
          <Box key = {idx} name = {val.name} caption = {val.caption} linkedin = {val.linkedin} twitter = {val.twitter} src = {val.src} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
