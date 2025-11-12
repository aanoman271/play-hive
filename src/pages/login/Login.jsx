import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { setalert, alert, errr, setErr, userLogin } = useContext(AuthContext);

  const signinHAndle = (e) => {
    e.preventDefault();
    setErr("");
    setalert("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    userLogin(email, password)
      .then((result) => {
        setalert("Login succesfull");
        console.log(result.user);
        setErr("");
      })
      .catch((err) => {
        setalert("");
        setErr(err.message);
      });
    e.target.reset();
  };
  return (
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
  );
};

export default Login;
