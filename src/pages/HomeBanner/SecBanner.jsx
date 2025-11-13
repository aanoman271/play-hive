import React from "react";

const SecBanner = () => {
  return (
    <div className="rounded-md gap-6 flex flex-col justify-center items-center py-12  bg-gradient-to-r  from-yellow-300 via-amber-400 to-orange-500">
      <h1 className="animate-pulse delay-200 text-4xl font-bold text-[#4A70A9]">
        Smart Toys for Bright Minds!
      </h1>
      <p className="text-[#8FABD4] font-semibold text-xl">
        Learning has never been so fun! Explore toys that teach, entertain, and
        grow with your child.
      </p>
    </div>
  );
};

export default SecBanner;
