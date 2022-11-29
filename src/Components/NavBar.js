import React from "react";
import logo from "../images/logo.svg";
import illustrationIntro from "../images/illustration-intro.png";

function NavBar() {
  return (
    <div className="px-8  py-8 bg-DarkBlue4 ">
      <nav className=" font-Raleway flex justify-between  items-center text-White ">
        <img src={logo} className="w-[30%]" alt="" />
        <div>
          <ul className=" flex  gap-8 ">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Sign in</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
