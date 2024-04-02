import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiUser, FiUserCheck, FiShoppingBag, FiPackage, FiStar, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const GlobalSearch = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logout(false)
    navigate('/signup')
  };

  const dropdownItems = [
    { text: "Manage My Account", icon: <FiUserCheck /> },
    { text: "My Orders", icon: <FiShoppingBag /> },
    { text: "My Cancellations", icon: <FiPackage /> },
    { text: "My Reviews", icon: <FiStar /> },
    { text: "Logout", icon: <FiLogOut />, onClick: handleLogout }
  ];


  return (
    <div className="flex  relative">
      <div className="relative">
        <input
          className="h-9 bg-gray-200 text-sm rounded-[4px] p-4"
          placeholder="What are you looking for?"
          type="text"
        />
        <div
          className="absolute inset-y-0 right-4 pl-3  
                    flex items-center   
                    pointer-events-none"
        >
          <i className=" text-black font-bold">
            <CiSearch  className="font-bold" size={25} />
            </i>
        </div>

      </div>
      {isAuthenticated && ( // Conditionally render the div based on isAuthenticated state
        <div className="flex items-center ml-6 gap-2">
          <div className="flex justify-center hover:bg-[#DB4444] hover:text-white rounded-full items-center w-9 h-9">
            <GoHeart size={24} />
          </div>
          <div className="flex justify-center rounded-full items-center hover:bg-[#DB4444] hover:text-white w-9 h-9">
            <HiOutlineShoppingCart size={24} />
          </div>
          <div
            className="flex justify-center rounded-full items-center hover:bg-[#DB4444] hover:text-white w-9 h-9 relative"
            onClick={toggleDropdown}
          >
            <FiUser size={24} />
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 w-60 text-white bg-gradient-to-r from-gray-900 to-zinc-600   rounded-lg shadow-lg z-10">
                {dropdownItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center px-4 py-2 cursor-pointer hover:bg-black"
                    onClick={item.onClick}
                  >
                    {item.icon}
                    <span className="ml-2">{item.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;
