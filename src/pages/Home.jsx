import React, { useContext } from "react";
import ToyCards from "./toyCArds/ToyCards";
import Slider from "../slider/Slider";
import HomeBanner from "./HomeBanner/HomeBanner";
import SecBanner from "./HomeBanner/SecBanner";
import { useLoaderData } from "react-router";
import PageTitle from "./titlePage/PageTitle";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { allToy, handleAllToy } = useContext(AuthContext);
  const toys = useLoaderData();
  const slicestoy = toys.slice(0, 6);

  return (
    <>
      <PageTitle title="Home" />
      <SecBanner></SecBanner>
      <Slider></Slider>

      <div className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
        {allToy ? (
          <h1 className="text-3xl text-center font-bold mb-3 ">Our All Toys</h1>
        ) : (
          <h1 className="text-3xl text-center font-bold mb-3 ">
            Our Popular Toys
          </h1>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center   gap-5">
        {(allToy ? toys : slicestoy).map((hometoy) => (
          <ToyCards key={hometoy.toyId} hometoy={hometoy}></ToyCards>
        ))}
      </div>
      <div
        className="flex justify-center items-center mt-6 h-20 animate-pulse delay-1000 bg-gradient-to-b from-gray-200 to-gray-500
"
      >
        <button onClick={handleAllToy} className="btn btn-warning">
          {allToy ? "Hide All " : " show more"}
        </button>
      </div>
      <HomeBanner></HomeBanner>
    </>
  );
};

export default Home;
