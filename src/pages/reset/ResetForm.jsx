import { useContext } from "react";
import PageTitle from "../titlePage/PageTitle";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const ResetForm = () => {
  const navigate = useNavigate();
  const { state, setErr, errr } = useLocation();
  const email = state?.email;
  const { resetPassword } = useContext(AuthContext);
  const HandleReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    resetPassword(email)
      .then(() => {
        toast("sent verifation Email");
        navigate("/login");
      })
      .catch((err) => {
        setErr(err.message);
      });
  };
  return (
    <>
      <PageTitle title="Reset Password" />
      <div className="hero bg-base-200 min-h-screen">
        <div>
          <h3 className="text-2xl font-medium">Reset password</h3>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={HandleReset} className="fieldset">
                  <label className="label">Email</label>
                  <input
                    defaultValue={email}
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />

                  <button type="submit" className="btn btn-warning mt-4">
                    sent reset email
                  </button>
                  <p className="text-red-500 font-medium">{errr}</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetForm;
