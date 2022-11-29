import React from "react";
import logo from "../images/logo.svg";

function NavBar() {
  return (
    <div className="px-8 lg:px-20  lg:py-10 py-8 bg-DarkBlue4 ">
      <nav className=" font-Raleway flex justify-between  items-center text-White ">
        <img src={logo} className="w-[30%] lg:w-[10%] " alt="" />
        <div>
          <ul className=" flex  gap-8 ">
            <li>
              <a
                className=" font-[700] text-gray-300 hover:text-White hover:underline "
                href="#"
              >
                Features
              </a>
            </li>
            <li>
              <a
                className=" font-[700] text-gray-300 hover:text-White hover:underline "
                href="#"
              >
                Team
              </a>
            </li>
            <li>
              <a
                className=" font-[700] text-gray-300 hover:text-White hover:underline "
                href="#"
              >
                Sign in
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
