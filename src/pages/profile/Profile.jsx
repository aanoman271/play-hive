import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import PageTitle from "../titlePage/PageTitle";
import { toast } from "react-toastify";

const Profile = () => {
  const { setuser, errr, setErr, user, updateUser } = useContext(AuthContext);
  const HandleProfileUpdate = (e) => {
    e.preventDefault();
    const Name = e.target.name.value;
    const photo = e.target.photo.value;
    updateUser({ displayName: Name, photoURL: photo })
      .then(() => {
        setuser({ ...user, displayName: Name, photoURL: photo });
        toast("profile updated");
      })
      .catch((err) => {
        setErr(err.message);
      });
    e.target.reset();
  };
  return (
    <>
      <PageTitle title="My Profile" />

      <div>
        <div className=" min-h-scree flex-col md:flex-row flex">
          <div className="hero bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row">
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
          <div className="card-body">
            <form onSubmit={HandleProfileUpdate} className="fieldset ">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="w-full input"
                placeholder="Name"
                required
              />
              <label className="label">PhotoUrl</label>
              <input
                type="text"
                name="photo"
                className="w-full input"
                placeholder="PhotoUrl"
                required
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Save change
              </button>
              <div>
                <p className="text-red-400 link link-hover">{errr}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
