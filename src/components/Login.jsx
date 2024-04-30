import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../authProvider/AuthProvider";

const Login = () => {
  const {signInUser, signInGoogle, signInGithub} = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Logged in successfully");
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Wrong email or password");
      });
  };

  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInGoogle(googleProvider)
      .then((result) => {
        console.log("Login with google", result.user);
        toast.success("Logged in successfully with google");
        navigate("/");
      })
      .catch((error) => {
        console.log("Login with google  failed", error.message);
      });
  };

  const handleGithubSignIn = () => {
    const githubProvider = new GithubAuthProvider();
    signInGithub(githubProvider)
      .then((result) => {
        console.log("Login with github", result.user);
        toast.success("Logged in successfully with github");

        navigate("/");
      })
      .catch((error) => {
        toast.error("Error occured, try with another email.");
        console.log("Login with github  failed", error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-l from-[#A8D26D] to-[#007F5F]">
      <Helmet>
        <title>Login </title>
      </Helmet>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white w-4/5 lg:w-1/3 rounded-lg mx-auto p-10 h-5/6 ">
          <h3 className="text-center font-bold text-4xl mb-10 text-[#007F5F]">
            Login
          </h3>
          <form onSubmit={handleLogin}>
            <label htmlFor="email" className="block mt-6">
              Email
            </label>
            <input
              className="block px-5 py-2  border-b-2 w-full mt-2 "
              name="email"
              type="email"
              placeholder="Type email address"
              required
            />

            <label htmlFor="password" className="block mt-6">
              Password
            </label>
            <div className="flex relative">
              <input
                className="block px-5 py-2 border-b-2 w-full mt-2"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Type password"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="hover:cursor-pointer absolute right-3 top-5 text-gray-500"
              >
                {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </span>
            </div>
            <a className="text-right mt-2 hover:cursor-pointer hover:underline hover:text-blue-600">
              Forgot Password?
            </a>
            <div className="flex mt-4 justify-center">
              <input
                type="submit"
                value="LOGIN"
                className="bg-gradient-to-l hover:bg-gradient-to-r from-from-[#A8D26D] to-[#007F5F] w-3/4 py-2 rounded-xl font-bold text-white"
              />
            </div>
          </form>

          <div className="flex flex-col items-center justify-center  mt-6">
            <p>Or</p>

            <div className="flex gap-4 mt-4">
              <FcGoogle
                className="text-4xl hover:text-5xl hover:cursor-pointer"
                onClick={handleGoogleSignIn}
              ></FcGoogle>
              <FaGithub
                className="text-4xl hover:text-5xl hover:cursor-pointer"
                onClick={handleGithubSignIn}
              ></FaGithub>
            </div>
            <ToastContainer />
            <p className="mt-4">
              Are you new here?{" "}
              <span className="text-[#007F5F] hover:font-semibold">
                <Link to="/register">Create an account.</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
