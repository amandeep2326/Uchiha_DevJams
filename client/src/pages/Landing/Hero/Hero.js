import Container from "@mui/material/Container";
import heroimg from "../../../assets/CoCode.svg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import "./Hero.css";

const Hero = () => {
  const containerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
  };
  return (
    <div className="hero">
      <Container style={containerStyles}>
        <div className="text">
          <Typography
            variant="h2"
            component="div"
            style={{
              color: "#23272A",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
            className = "Heading"
          >
            Code along with<br/>your friends and batchmates
          </Typography>
          <h4 style={{ color: "black" }}>
            Peer coding made easy and handy.
          </h4>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
            className="btns"
          >
            <Link to = "/home" style = {{textDecoration:"none"}}><Button variant = "contained" style = {{background: "#8C30F5"}}>CREATE/JOIN ROOM</Button></Link>
            <Link to = "/room/public-room" style = {{color: "white" , textDecoration:"none"}}><Button variant = "contained" style = {{background: "#8C30F5"}}>Login as Guest</Button></Link>
          </div>
        </div>
        <div className="Image">
          <img src={heroimg} alt="Hero" width = "600px"/>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
