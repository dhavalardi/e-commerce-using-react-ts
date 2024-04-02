import RegisterPage from "./RegisterPage";

const SignUp = () => {

  return (
    <>
      <div className="flex h-screen bg-grey">
        {/* <!-- Left Pane --> */}
        <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
          <div className="max-h-md  text-center">
            <img
              src="/images/ShoppingMockUp.jpeg"
              className="h-full w-full"
              alt=""
            />
          </div>
        </div>
        {/* <!-- Right Pane --> */}
        <div className="w-full lg:w-2/5	flex items-center justify-center">
          <RegisterPage />
        </div>
      </div>
    </>
  );
};

export default SignUp;
