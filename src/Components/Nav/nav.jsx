import { NavLink } from "react-router-dom";
import "./Nav.css";
import { useContext } from "react";

const Nav = () => {
  const navLinks = (
    <>
      <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
        <NavLink className="text-sm text-white lg:text-lg font-semibold" to="/">
          Home
        </NavLink>
        <NavLink className="text-sm text-white lg:text-lg font-semibold" to="/owner-dashboard">
        Dashboard
        </NavLink>
        <NavLink className="text-sm text-white lg:text-lg font-semibold" to="/login">
            Sign in
        </NavLink>
        <NavLink className="text-sm text-white lg:text-lg font-semibold" to="/registration">
            Registration
        </NavLink>
      </div>
    </>
  );

  return (
    <div className="navbar  top-0 z-10 mx-auto bg-[#F5CCA0] opacity-80 rounded-lg  ">
      <div className="navbar-start flex justify-center">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow  bg-[#6B240C] bg-opacity-100  rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex justify-center items-center gap-3">
          <img src="/house.png" className="h-8" alt="" />
          <p className="text-3xl font-bold text-[#6B240C]">House Hunter</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end flex justify-center">
        
 
          <div className="flex flex-col md:flex-row gap-7 items-center justify-center">
            
            <div className="flex flex-col items-center mr-5">
            <button
              className="text-white bg-opacity-0 hover:text-white"
            >
              Sign out
            </button>
            
            </div>
            
          </div>
      </div>
    </div>
  );
};

export default Nav;
