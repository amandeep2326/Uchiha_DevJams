import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Inter', sans-serif",
        padding:"20px"
      }}
    >
      <AppBar
        position="static"
        style={{
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 50px",
          boxShadow: "none",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            style={{ color: "black" }}
          >
            LetsCode
          </IconButton>
        </Link>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <a className="nav-link" style={{ color: "white" }}>
              About Us
            </a>
          </Link>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <a className="nav-link" style={{ color: "white" }}>
              Create/Join Room
            </a>
          </Link>
        </div>
      </AppBar>
    </div>
  );
};

export default Navbar;
