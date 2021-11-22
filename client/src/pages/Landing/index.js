import Navbar from "../../component/Navbar";
import Hero from "./Hero/Hero";
import bg from "../../assets/bg.png";

const index = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: " center",
      }}
    >
      <Navbar />
      <Hero />
    </div>
  );
};

export default index;
