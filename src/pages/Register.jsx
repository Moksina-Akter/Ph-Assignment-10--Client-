import { useAuth } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Register = () => {
  const [show, setShow] = useState(false);
  const { register, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      return alert(
        "Password must have one uppercase, one lowercase and minimum 6 characters"
      );
    }

    await register(name, email, password, photo);
    navigate("/");
  };

  const handleGoogleLogin = async () => {
    await loginWithGoogle();
    navigate("/");
  };

  return (
    <div className="card bg-base-100 mx-auto my-8 w-full max-w-sm shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-purple-900 text-center mb-4">
          Register Now!
        </h1>
        <form onSubmit={handleRegister}>
          <fieldset className="space-y-3">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input border-purple-900 w-full"
              required
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input border-purple-900 w-full"
              required
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input border-purple-900 w-full"
              required
            />
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="input border-purple-900 w-full"
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-3 top-3 cursor-pointer"
              >
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>
            <button
              type="submit"
              className="btn w-full bg-[#693382] text-[#efd8ed] mt-4"
            >
              Register
            </button>
          </fieldset>
        </form>

        <div className="flex items-center justify-center gap-2 my-4">
          <div className="h-px w-16 bg-gray-400"></div>
          <span className="text-gray-700">or</span>
          <div className="h-px w-16 bg-gray-400"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="btn w-full flex items-center justify-center gap-3 bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-700 hover:text-blue-900 font-bold underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
