import React from "react";
import { FaBangladeshiTakaSign, FaStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

const ToyCards = ({ hometoy }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="h-44">
          <img src={hometoy.pictureURL} alt="" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">
            {hometoy.toyName}
            <div className="badge bg-amber-300">
              <FaStarHalfStroke />
              {hometoy.rating}
            </div>
          </h2>
          <div className="flex items-center justify-between ">
            <small className="font-semibold text-[18px] ">
              Available:{" "}
              <span className="text-red-400">
                {hometoy.availableQuantity} pices
              </span>
            </small>
            <h5 className="font-bold text-[22px] flex items-center">
              <FaBangladeshiTakaSign />
              {hometoy.price}
            </h5>
          </div>
        </div>
        <Link
          to={`/toydeatail/${hometoy.toyId}`}
          className="btn btn-soft btn-warning"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default ToyCards;
