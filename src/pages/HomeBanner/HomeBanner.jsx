import React from "react";
import bannerimg from "../../assets/photo-1558877385-81a1c7e67d72.avif";
const HomeBanner = () => {
  return (
    <div
      className=" h-72 overflow-hidden flex justify-center items-center"
      //   style={{
      //     backgroundImage: `url(${bannerimg})`,
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //     height: "400px", // adjust as needed
      //     width: "100%",
      //   }}
    >
      <img className="w-[100%]  hover:w-[95%] " src={bannerimg} alt="" />
    </div>
  );
};

export default HomeBanner;
