import React from "react";

const Slider = () => {
  return (
    <div className="my-8">
      <div className="carousel w-full h-[380px]">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://as1.ftcdn.net/v2/jpg/06/63/00/50/1000_F_663005079_K4T9yivRAmfrbLY90L7maQ5HH9KOjVf0.jpg"
            className="  w-full"
          />
        </div>
        <div id="item2" className=" carousel-item w-full">
          <img
            src="https://as1.ftcdn.net/v2/jpg/00/74/44/28/1000_F_74442850_C0PsTWPFlOfwcPA3AybYefXDBmnWVsWX.jpg"
            className=" w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://as2.ftcdn.net/v2/jpg/07/12/27/63/1000_F_712276384_EIiJBAMqjeQ7BhXbf7USJDsuCfvRVqwA.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Slider;
