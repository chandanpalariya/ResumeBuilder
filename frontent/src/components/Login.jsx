import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContex"; // fixed import
import axiosInstance from "../utils/axiosInstance";
import { API_PATH } from "../utils/apiPath";
import { validateEmail } from "../utils/helper";
import Input from "../components/Input"; // ✅ make sure path is correct

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter a password");
      return;
    }

    setError(null);

    try {
      const response = await axiosInstance.post(API_PATH.AUTH.LOGIN, {
        email,
        password,
      });
      const { token } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(response.data);
        navigate("/dashboard");
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Something went wrong, please try again"
      );
    }
  };

  return (
    <div className="w-[90vw] md:w-[400px] p-8 bg-gradient-to-br from-white to-violet-50 rounded-3xl border border-violet-100 shadow-2xl">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-900">Welcome Back</h3>
        <p className="text-slate-600 font-medium">
          Sign in to continue building amazing resumes
        </p>
      </div>

      {/* form */}
      <form onSubmit={handleLogin} className="space-y-6">
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email"
          placeholder="mail@example.com"
          type="email"
        />

        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="min 8 characters"
          type="password"
        />

        {error && (
          <div className="text-red-500 text-sm font-medium bg-red-50 border border-red-200 px-4 py-3 rounded-xl">
            {error}
          </div>
        )}

        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-black rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-violet-200 transition-all text-lg"
        >
          Sign In
        </button>

        <p className="text-center text-sm text-slate-600 font-medium">
          Don&apos;t have an account{" "}
          <button
            type="button"
            className="font-black text-violet-600 hover:text-fuchsia-600 transition-colors"
            onClick={() => setCurrentPage("signup")}
          >
            Sign Up
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
