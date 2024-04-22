import Star from "../components/Star";
import sun from "../assets/sun.png";
``;
import img1 from "../assets/mercury.png";
import img2 from "../assets/venus.png";
import img3 from "../assets/world.png";
import img4 from "../assets/mars.png";
import img5 from "../assets/jupiter.png";
import img6 from "../assets/saturn.png";
import img7 from "../assets/uranus.png";
import img8 from "../assets/neptune.png";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const generateStars = (numStars) => {
    let stars = [];
    for (let i = 0; i < numStars; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      };
      stars.push(<Star key={i} style={style} />);
    }
    return stars;
  };
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="flex items-center justify-center h-screen bg-[#000] ">
        <div className="">
          {/* <div
            onClick={() => {
              navigate("/details/sun");
            }}
            className="absolute top-1/2 left-1/2 bg-[#FFA500] rounded-full w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 z-20"
          /> */}
          <img
            src={sun}
            onClick={() => {
              navigate("/details/sun");
            }}
            alt=""
            className="absolute top-1/2 left-1/2 border border-dashed rounded-full w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 z-20"
            // className="w-10 h-10 absolute left-[52%] z-20 animate-on-the-orbit"
          />
          <img
            src={img1}
            onClick={() => {
              navigate("/details/mercury");
            }}
            alt=""
            className="absolute top-[52%] left-[51.5%] w-10 h-10  rounded-full   z-20 "
            // className="w-10 h-10 absolute left-[52%] z-20 animate-on-the-orbit"
          />
          <div className="absolute border-dashed top-1/2 left-1/2 w-[600px] h-[600px] border border-gray-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />

          <img
            onClick={() => {
              navigate("/details/venus");
            }}
            src={img2}
            alt=""
            className=" w-12 top-[40%] absolute left-[53.2%]  z-20"
          />
          <div className="absolute border-dashed top-1/2 left-1/2 w-[530px] h-[530px] border border-gray-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          <img
            onClick={() => {
              navigate("/details/earth");
            }}
            src={img3}
            alt=""
            className=" w-14  top-[32%] absolute left-[46%]  z-20"
          />
          <div className="absolute border-dashed top-1/2 left-1/2 w-[460px] h-[460px] border border-gray-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          <img
            onClick={() => {
              navigate("/details/mars");
            }}
            src={img4}
            alt=""
            className=" w-14  top-[55%] absolute left-[38%]  z-20"
          />
          <div className="absolute border-dashed top-1/2 left-1/2 w-[390px] h-[390px] border border-gray-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          <img
            onClick={() => {
              navigate("/details/jupiter");
            }}
            src={img5}
            alt=""
            className=" w-14  top-[70%] absolute left-[50%]  z-20"
          />
          <div className="absolute border-dashed top-1/2 left-1/2 w-[320px] h-[320px] border border-gray-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          <img
            onClick={() => {
              navigate("/details/saturn");
            }}
            src={img6}
            alt=""
            className=" w-24  top-[55%] absolute left-[62%]  z-20"
          />
          <div className="absolute border-dashed top-1/2 left-1/2 w-[250px] h-[250px] border border-gray-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          <img
            onClick={() => {
              navigate("/details/uranus");
            }}
            src={img7}
            alt=""
            className=" w-16  top-[25%] absolute left-[61.5%]  z-20"
          />
          <div className="absolute border-dashed top-1/2 left-1/2 w-[180px] h-[180px] border border-gray-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          <img
            onClick={() => {
              navigate("/details/neptune");
            }}
            src={img8}
            alt=""
            className=" w-24 rounded-full top-[12%] absolute left-[52.5%]  z-20"
          />
          <div className="absolute border-dashed top-1/2 left-1/2 w-[110px] h-[110px] border border-gray-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
      {generateStars(150)}
    </React.Fragment>
  );
}
