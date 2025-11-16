import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import bgimg from "../../assets/vector-1758301600644-5f120e521b9a.avif";
import { FaBangladeshiTakaSign, FaStarHalfStroke } from "react-icons/fa6";

const ToyDeatail = () => {
  const [submit, setsubmit] = useState("");
  const HandleForm = (e) => {
    e.preventDefault();
    e.target.reset();
    setsubmit("Submited");
  };
  const { id } = useParams();
  const data = useLoaderData();
  console.log(id);

  const filtertoy = data.find((tdata) => tdata.toyId === parseInt(id));
  return (
    <div>
      <div
        className="  min-h-screen flex flex-col justify-center items-center gap-5"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" hero-content flex-col lg:flex-row">
          <img
            src={filtertoy.pictureURL}
            className=" max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold  drop-shadow-2xl">
              {filtertoy.toyName}
            </h1>
            <p className="py-3 text-[15px] font-medium">
              <span className="font-semibold ">Catageory :</span>
              {filtertoy.subCategory}
            </p>
            <p className="py-3 border-b border-gray-400">
              <span className="font-semibold">Describtion :</span>{" "}
              {filtertoy.description}
            </p>
            <div className="my-3 flex justify-between items-center text-green-600">
              <p className="flex items-center gap-1 font-extrabold text-xl">
                <FaStarHalfStroke />
                {filtertoy.rating}
              </p>
              <p className=" flex font-extrabold items-center gap-1 text-xl">
                <FaBangladeshiTakaSign></FaBangladeshiTakaSign>
                {filtertoy.price}
              </p>
            </div>
            <div className="flex flex-col items-center text-gray-700">
              <small>
                <span className="font-semibold">saller:</span>
                {filtertoy.sellerName}
              </small>
              <small>{filtertoy.sellerEmail}</small>
            </div>
          </div>
        </div>
        {/* form */}
        <form
          onSubmit={HandleForm}
          className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        >
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" required />

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" required />

          <button type="submit" className="btn btn-neutral mt-4">
            Try Now
          </button>
          <p className="text-green-500">{submit}</p>
        </form>
      </div>
    </div>
  );
};

export default ToyDeatail;
