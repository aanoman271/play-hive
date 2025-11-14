import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const { createuser, setalert, alert, errr, setErr } = useContext(AuthContext);
  const navigate = useNavigate();
  const RegisterHandle = (e) => {
    e.preventDefault();
    setErr("");
    setalert("");
    const rx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/; // min length 6
    const message =
      "Password must contain at least one uppercase, one lowercase and one number (min 6 characters).";

    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!rx.test(password)) {
      return setErr(message);
    }
    createuser(email, password)
      .then((result) => {
        setalert("Account created successfully");
        setErr("");
        navigate("/");
        console.log(result.user);
      })

      .catch((err) => {
        setErr(err.message);
        setalert("");
      });
    e.target.reset();
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={RegisterHandle}
        className=" fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <label className="label">Name</label>
        <input
          type="text"
          className="input"
          name="name"
          placeholder="Your name"
          required
        />

        <label className="label">photo Url</label>
        <input
          type="url"
          name="photo"
          className="input"
          placeholder="photoUrl"
        />

        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          name="email"
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
          Register
        </button>
        <p className="font-semibold">
          Already Have an account?{" "}
          <Link className="text-blue-500" to="/login">
            Login
          </Link>
        </p>
        {alert && <p className="text-green-500">{alert}</p>}
        {errr && <p className="text-red-500">{errr}</p>}
      </form>
    </div>
  );
};

export default Register;
