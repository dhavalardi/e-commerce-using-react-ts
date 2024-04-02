import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const NavMenu = () => {
  const { isAuthenticated } = useAuth();



  return (
    <>
      <div className="flex items-baseline space-x-4">
        <Link
          to="/"
          className="text-black hover:underline font-normal text-base px-3 py-2 "
        >
          Home
        </Link>
        <Link
          to="/contact"
          className="text-black hover:underline font-normal text-base px-3 py-2 "
        >
          Contact
        </Link>
        <Link
          to="/aboutus"
          className="text-black hover:underline font-sans font-normal text-base px-3 py-2 "
        >
          About
        </Link>
       
        {!isAuthenticated && ( <Link
          to="/signup"
          className="text-black hover:underline font-sans font-normal text-base px-3 py-2 "
        >
          Sign Up
        </Link>
        )}
      </div>
    </>
  );
};

export default NavMenu;
