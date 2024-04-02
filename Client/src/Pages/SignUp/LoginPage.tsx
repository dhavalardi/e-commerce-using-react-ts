import React, { useEffect, useState } from "react";
import Input from "../../Component/Form/Input";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { URL } from "../../constant";
import { useAuth } from "../../Context/AuthContext";


interface FormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>(); // Specify FormData as the form data type
  const [error, setError] = useState<string | null>(null); // State to store the error message
  const navigate = useNavigate();
  const { login } = useAuth();


  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(`${URL}/login`, data);
      console.log("Data being sent to the backend:", response);

      if (response.status === 200) {
        console.log("user Login successfully");
        setValue("email", "");
        setValue("password", "");
        setError(null);
        localStorage.setItem("token", response.data.token);
        login(true)
        navigate("/");
      } else {
        // Handle error, maybe show an error message to the user
      }
    } catch (error: any) {
      console.error("Error occurred during login", error);
      if (error.response && error.response.data.error) {
        // Set the error message received from the backend
        setError(error.response.data.error);
      } else {
        // Set a generic error message if no specific error message is received
        setError("Login failed. Please try again later.");
      }
    }
  };

  // console.log(error, "Errrrrrroooooooooooorrrrrrrrrrsssssssssssssssss");

  return (
    <>
      <div className="w-2/3 p-6">
        <h1 className="text-3xl  mb-6 text-black text-left">
          Log in to Exclusive
        </h1>
        <h1 className="text-sm font-semibold mb-8 text-gray-500 text-left">
          Enter your details below{" "}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* <!-- Your form elements go here --> */}

          <div className="mb-6">
            <Input
              label="Email or Phone Number"
              {...register("email", { required: true })}
              value={watch("email")}
              onChange={(e) => setValue("email", e.target.value)}
            />
            {errors.email && (
              <span className="text-xs text-red-500">Email is required</span>
            )}
          </div>
          <div className="">
            <Input
              label="Password"
              {...register("password", { required: true })}
              value={watch("password")}
              onChange={(e) => setValue("password", e.target.value)}
            />
            {errors.password && (
              <span className="text-xs text-red-500">Password is required</span>
            )}
          </div>

          {error && <div className="text-red-500">{error}</div>}

          <div className="flex mt-10 justify-between items-center">
            <div>
              <button
                type="submit"
                className="w-32	 bg-red-600 h-14  text-white p-2 rounded-md hover:bg-orange-400 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
              >
                Log In
              </button>
            </div>
            <div className="flex items-center">
              <Link to={""}>
                <h1 className="text-base text-red-600 text-right">
                  Forget Password ?
                </h1>
              </Link>
            </div>
          </div>
        </form>
        <div className="mt-4 text-sm text-gray-600 text-center">
          <p>
            Don't have an account?{" "}
            <a href="/" className="text-black hover:underline">
              Register here
            </a>
          </p>
        </div>  
      </div>
    </>
  );
};

export default LoginPage;
