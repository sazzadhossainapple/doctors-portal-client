import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [createUserEmail, setCreateUserEmail] = useState("");
  const [token] = useToken(createUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  //sign up
  const handleSignUP = (data) => {
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        toast.success("User Created Successfully.");
        const userInfo = {
          displayName: data.name,
        };

        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        console.error(error);
        setSignUpError(error.message);
      });
  };

  // savedata
  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("https://doctors-portal-server-sandy.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCreateUserEmail(email);
      })
      .catch((err) => console.error(err));
  };

  // google signIn
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h1 className="text-xl text-center">Sign Up</h1>
        <form onSubmit={handleSubmit(handleSignUP)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
          </div>
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
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>

          <input
            type="submit"
            className="btn btn-accent w-full max-w-xs mt-6"
            value="Sign UP"
          />
          <div>
            {signUpError && <p className="text-red-600">{signUpError}</p>}
          </div>
        </form>
        <p className="mt-4">
          Already have an account{" "}
          <Link className="text-secondary" to="/login">
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
