import { FaBangladeshiTakaSign, FaStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

const ToyCards = ({ hometoy }) => {
  const handleWishList = () => {
    const stored = JSON.parse(localStorage.getItem("wishList") || "[]");
    if (stored.includes(hometoy.toyId)) {
      return toast("Alrady added to wish List");
    } else {
      stored.push(hometoy.toyId);
      localStorage.setItem("wishList", JSON.stringify(stored));
    }

    toast(`${hometoy.toyName} added to wish list`);
  };
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="h-44 ">
          <img className="w-full" src={hometoy.pictureURL} alt="" />
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
        <div className="flex justify-between items-center">
          <Link
            to={`/toydeatail/${hometoy.toyId}`}
            className="btn btn-soft btn-warning"
          >
            View More
          </Link>
          <button
            onClick={handleWishList}
            className="btn btn-warning text-green-500"
          >
            Add wish List
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToyCards;
