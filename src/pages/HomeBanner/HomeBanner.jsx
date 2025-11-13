import React from "react";
import bannerimg from "../../assets/fRI66vMbGOTxQyftARGTetGE3.jpg";
const HomeBanner = () => {
  return (
    <div
      className="w-full flex justify-center items-center"
      //   style={{
      //     backgroundImage: `url(${bannerimg})`,
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //     height: "400px", // adjust as needed
      //     width: "100%",
      //   }}
    >
      <img className="hover:w-[95%] " src={bannerimg} alt="" />
    </div>
  );
};

export default HomeBanner;
