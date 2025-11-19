import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import PageTitle from "../titlePage/PageTitle";
import WishCard from "../wishcard/WishCard";
import NoWish from "../NoWish/NoWish";

const WishList = () => {
  const data = useLoaderData();
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    const storedId = JSON.parse(localStorage.getItem("wishList") || "[]");

    const filterdToy = data.filter((toy) => storedId.includes(toy.toyId));
    setWishList(filterdToy);
  }, [data]);

  return (
    <>
      <PageTitle title="WishList" />
      <div>
        <h3 className="font-bold text-3xl text-center text-yellow-500">
          Your Wish List
        </h3>
        {wishList.length === 0 ? (
          <NoWish></NoWish>
        ) : (
          wishList.map((toy) => (
            <WishCard
              setWishList={setWishList}
              wishList={wishList}
              key={toy.toyId}
              toy={toy}
            ></WishCard>
          ))
        )}
      </div>
    </>
  );
};

export default WishList;
