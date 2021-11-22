import React from "react";
import "./Box.css";
import twitter from "../../../assets/twitter.png";
import linkedin from "../../../assets/ln.png";

const Box = (props) => {
  return (
    <div className="outside_container">
      <img src={props.src} alt="" width="100" height="100" style={{ borderRadius: "50%" }} />
      <span>{props.name}</span>
      <caption style = {{color:"#8C30F5" , fontWeight:"600"}}>{props.caption}</caption>
      <div className="socials">
        <a href = {props.linkedin}><img src={linkedin} alt="" width="40" height="40" style={{ borderRadius: "50%" }} /></a>
        <a href = {props.twitter}><img src={twitter} alt="" width="40" height="40" style={{ borderRadius: "50%" }} /></a>
      </div>
    </div>
  );
};

export default Box;
