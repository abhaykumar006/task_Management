import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa6";
import { loginUser } from "../api/auth";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/slices/authSlice";
import { routes } from "../routes/routes";
import { loading } from "../redux/slices/loadingSlice";
import { LoaderData } from "../utils/common-components";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.loading.loading);
  const wrapperRef = useRef(null);

  /* Navigating Authenticated User to inbox tab */
  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.inbox);
    }
  }, [isAuthenticated, navigate]);

  /* Hiding password if user clicked outside password input box */
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target) &&
        event.target.tagName !== "BUTTON"
      ) {
        setShowPassword(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  /* Toggling Password Visibility */
  const togglePasswordVisibility = (e) => {
    e.stopPropagation();
    setShowPassword(!showPassword);
  };

  /* Submitting User response */
  const handleSubmit = async (e) => {
    e.preventDefault();

    /* Loading Spinner untill server response is recieved */
    dispatch(loading(true));
    try {
      const result = await loginUser({
        email: email,
        password: password,
      });
      if (result.success) {
        dispatch(loginSuccess({ user: result.user }));
        dispatch(loading(false));
        /* Storing user's JWT token in local Storage */
        localStorage.setItem("token", result.user.token);
      }
    } catch (error) {
      dispatch(loading(false));
      console.log("Account not found", error);
    }
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-green-100 p-4">
      <div className="bg-white p-8 px-6 sm:px-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>

        <h3 className="my-5 text-sm text-gray-600">Guest Login: guest@user.com / Guest@123</h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6" aria-label="Login form">
          <div className="flex flex-col gap-y-2 ">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="username"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              aria-label="Email address"
            />
          </div>

          <div className="flex flex-col gap-y-2 font-[400]">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>

            <div className="relative" ref={wrapperRef}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                autoComplete="current-password"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                aria-label="Password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaRegEyeSlash /> : <FiEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition mt-6 font-bold focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Login"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-sm flex flex-row gap-2 items-center justify-center">
          <p className=" text-gray-600">Don&apos;t have an account? </p>
          <Link to={routes.signup} className="underline">
            Sign up
          </Link>
        </div>
      </div>
      
      <LoaderData isLoading={isLoading} />
    </main>
  );
};
