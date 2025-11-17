import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import PageTitle from "../titlePage/PageTitle";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <PageTitle title="My Profile" />

      <div>
        <div className="hero bg-base-200 min-h-screen ">
          <div className="hero-content justify-center flex-col lg:flex-row">
            <img
              src={user?.photoURL}
              className="w-36 h-36 rounded-full shadow-2xl"
            />

            <div>
              <h1 className="text-3xl font-bold">{user?.displayName}</h1>
              <p className="py-6">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
