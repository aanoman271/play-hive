import React from "react";
import { FaBangladeshiTakaSign, FaStarHalfStroke } from "react-icons/fa6";
import { GiCrossedBones } from "react-icons/gi";
import { toast } from "react-toastify";

const WishCard = ({ toy, setWishList }) => {
  const handleRemove = () => {
    const stored = JSON.parse(localStorage.getItem("wishList") || "[]");
    const updated = stored.filter((item) => item !== toy.toyId);

    localStorage.setItem("wishList", JSON.stringify(updated));
    setWishList((prev) => prev.filter((t) => t.toyId !== toy.toyId));
    toast(`${toy.toyName} removed`);
  };
  return (
    <>
      <div className="flex items-center justify-between gap-3 rounded-4xl my-4 p-4 bg-gradient-to-r  from-yellow-300 via-amber-400 to-orange-500">
        <img
          className="ring-amber-50 ring-4 shadow-2xl rounded-4xl w-30 h-30 "
          src={toy.pictureURL}
          alt=""
        />
        <div>
          <h4 className="font-bold text-xl">{toy.toyName}</h4>
          <div className="flex items-center gap-5 my-4">
            <div className="badge bg-amber-300">
              <FaStarHalfStroke />
              {toy.rating}
            </div>
            <h5 className="font-bold text-[22px] text-green-500 flex items-center">
              <FaBangladeshiTakaSign />
              {toy.price}
            </h5>
          </div>
          <div>
            <p className="text-gray-500 fm">
              <span className="text-black font-semibold">Saller : </span>
              {toy.sellerName}
            </p>
            <p className="text-gray-500 fm">
              <span className="text-black font-semibold">Email : </span>
              {toy.sellerEmail}
            </p>
          </div>
        </div>
        <button onClick={handleRemove} className="btn btn-warning">
          <GiCrossedBones />
        </button>
      </div>
    </>
  );
};

export default WishCard;
