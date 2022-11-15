import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";

const ForgetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // reset password

  const handleReset = (data) => {
    resetPassword(data.email)
      .then(() => {
        toast.success("Reset link has been sent, please check email");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h1 className="text-xl text-center">Forget Password</h1>
        <form onSubmit={handleSubmit(handleReset)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>

          <input
            type="submit"
            className="btn btn-accent w-full mt-4"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
