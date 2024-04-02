import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../Component/Form/Input";
import LoginPage from "./LoginPage";
import axios from "axios"; // Import axios for making HTTP requests
import { URL } from "../../constant";


interface FormData {  
  userName: string;
  email: string;
  password: string;
}

const RegisterPage = () => {

  const { register,watch, handleSubmit, formState: { errors }, setValue } = useForm<FormData>(); // Specify FormData as the form data type
  const [showLoginPage, setShowLoginPage] = useState(false);
 

  const onSubmit = async (data: FormData) => { // Use FormData as the type for data
    
    try {
      const response = await axios.post(`${URL}/register`, data); // Use Axios to send POST request
      console.log("Data being sent to the backend:", response); // Log the data being sent to the backend
    
      if (response.status === 200) {
        // Handle success, maybe redirect user or show a success message
        console.log("user Register successfully");
        setValue("userName", ""); // Clear the value of the userName field
        setValue("email", ""); // Clear the value of the email field
        setValue("password", ""); // Clear the value of the password field
        setShowLoginPage(!showLoginPage);
      } else {
        // Handle error, maybe show an error message to the user
      }
    } catch (error) {
      console.error("Error occurred during form submission:", error);
    }
  };

  
  const toggleLoginPage = () => {
    setShowLoginPage(!showLoginPage);
  };

  return (
    <>
      {!showLoginPage ? (
        <div className="w-2/3 p-6">
          <h1 className="text-3xl mb-6 text-black text-left">
            Create an account
          </h1>
          <h1 className="text-sm font-semibold mb-6 text-gray-500 text-left">
            Enter your details below{" "}
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* <!-- Your form elements go here --> */}
            <div className="">
            <Input 
                label="Name" 
                {...register("userName", { required: true })} 
                value={watch("userName")} 
                onChange={(e) => setValue("userName", e.target.value)} 
              />
              {errors.userName && <span className="text-xs text-red-500">Name is required</span>}
            </div>
            <div className="">
              <Input  label="Email or Phone Number" {...register("email", { required: true })}
              value={watch("email")} 
              onChange={(e) => setValue("email", e.target.value)} 
              />
              {errors.email && <span className="text-xs text-red-500">Email is required</span>}

            </div>
            <div className="">
              <Input  
               label="Password" 
               {...register("password", { required: true })}
               value={watch("password")} 
               onChange={(e) => setValue("password", e.target.value)}/>
              {errors.password && <span className="text-xs text-red-500">Password is required</span>}
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-red-600 h-14  text-white p-2 rounded-md hover:bg-orange-400 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
              >
                Create Account
              </button>
            </div>
            <div className="w-full mb-2 lg:mb-0">
              <button
              
                className="w-full flex justify-center h-14 items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4"
                  id="google"
                  width={40}
                >
                  <path
                    fill="#fbbb00"
                    d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
                  ></path>
                  <path
                    fill="#518ef8"
                    d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
                  ></path>
                  <path
                    fill="#28b446"
                    d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
                  ></path>
                  <path
                    fill="#f14336"
                    d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
                  ></path>
                </svg>{" "}
                Sign Up with Google{" "}
              </button>
            </div>
          </form>
          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>
              Already have an account?{" "}
              <a href="#" className="text-black hover:underline" onClick={toggleLoginPage}>
                Login here
              </a>
            </p>
          </div>
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default RegisterPage;
