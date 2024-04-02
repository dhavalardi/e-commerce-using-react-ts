import React from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import OfferToster from "./OfferToster";
import GlobalSearch from "./GlobalSearch";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col	h-24 bg-white border-b-2 w-full ">
        <div >
          <OfferToster /> 
        </div>
        <div className="flex justify-between w-full mt-4 max-w-7xl	 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex">
          <Logo />
        </div>
        <div className="flex">
          <NavMenu />
          </div>
          <div className="flex">
            <GlobalSearch />
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Navbar;
