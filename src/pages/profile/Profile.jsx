import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={user?.photoURL}
            className="w-56 h-56 rounded-full shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{user?.displayName}</h1>
            <p className="py-6">{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
