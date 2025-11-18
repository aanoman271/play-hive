import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import PageTitle from "../titlePage/PageTitle";

const Login = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const message =
    "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.";

  const { setuser, setalert, alert, signInGoogle, errr, setErr, userLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const signinHAndle = (e) => {
    e.preventDefault();
    setErr("");
    setalert("");

    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!passwordRegex.test(password)) {
      return setErr(message);
    }
    userLogin(email, password)
      .then((result) => {
        setalert("Login succesfull");
        setuser(result.user);
        setErr("");
        navigate(location.state || "/");
      })
      .catch((err) => {
        setalert("");
        setErr(err.message);
      });
    e.target.reset();
  };
  const handleGoogleSignIn = (e) => {
    e.preventDefault();

    signInGoogle()
      .then((result) => {
        setuser(result.user);
        console.log(result.user);
        setalert("Account created successfully");
        navigate("/");
      })
      .catch((err) => {
        setErr(err.message);
      });
  };
  return (
    <>
      <PageTitle title="Login" />
      <div className="flex justify-center items-center h-screen ">
        <form
          onSubmit={signinHAndle}
          className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        >
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
          />

          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
          <div className="flex justify-center items-center">
            <p className="font-bold">or</p>
          </div>
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <div>
            <Link
              to="/resetPassword"
              state={{ email }}
              className="link link-primary link-hover text-blue-500"
            >
              forget password
            </Link>
          </div>
          <p className="font-semibold">
            New to our store?{" "}
            <Link className="text-blue-500" to="/register">
              Register Now
            </Link>
          </p>
          {alert && <p className="text-green-500">{alert}</p>}
          {errr && <p className="text-red-500">{errr}</p>}
        </form>
      </div>
    </>
  );
};

export default Login;
