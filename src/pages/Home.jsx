import React from "react";
import ToyCards from "./toyCArds/ToyCards";
import Slider from "../slider/Slider";
import HomeBanner from "./HomeBanner/HomeBanner";
import SecBanner from "./HomeBanner/SecBanner";
import { useLoaderData } from "react-router";
import PageTitle from "./titlePage/PageTitle";

const Home = () => {
  const toys = useLoaderData();
  const slicestoy = toys.slice(0, 6);

  return (
    <>
      <PageTitle title="Home" />
      <SecBanner></SecBanner>
      <Slider></Slider>

      <div>
        <h1 className="text-3xl text-center font-bold mb-3 ">
          Our popular toys
        </h1>
      </div>
      <div className="grid grid-cols-3   gap-4">
        {slicestoy.map((hometoy) => (
          <ToyCards key={hometoy.toyId} hometoy={hometoy}></ToyCards>
        ))}
      </div>

      <HomeBanner></HomeBanner>
    </>
  );
};

export default Home;
