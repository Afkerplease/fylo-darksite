import "./App.css";
import NavBar from "./Components/NavBar";
import illustrationIntro from "./images/illustration-intro.png";
import acces from "./images/icon-access-anywhere.svg";
import security from "./images/icon-security.svg";
import collab from "./images/icon-collaboration.svg";
import store from "./images/icon-any-file.svg";
import productivity from "./images/illustration-stay-productive.png";
import arrow from "./images/icon-arrow.svg";
import satish from "./images/profile-1.jpg";
import bruce from "./images/profile-2.jpg";
import Eva from "./images/profile-3.jpg";
import quote from "./images/bg-quotes.png";
import Form from "./Components/Form";
import logo from "./images/logo.svg";
import location from "./images/icon-location.svg";
import phone from "./images/icon-phone.svg";
import email from "./images/icon-email.svg";

import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function App() {
  return (
    <main className=" bg-DarkBlue2   ">
      <header className=" relative  ">
        <NavBar />
        <div className=" lg:h-[830px] bg-DarkBlue4 w-[100%] h-[400px]  relative  ">
          <img
            src={illustrationIntro}
            className="mx-auto lg:bottom-[40%]  lg:w-[40%] lg:left-[30%]  absolute bottom-[27%] left-[15%] md:w-[60%]   z-10 w-[73%]  "
            alt=""
          />
          <div className="  absolute bg-no-repeat bg-cover bg-top lg:bg-top  lg:right-[10%]  w-[100%] h-[10rem] bottom-0 lg:h-[20rem] lg:bottom-0  lg:bg-[url('./images/bg-curvy-desktop.svg')]  bg-[url('./images/bg-curvy-mobile.svg')] "></div>
        </div>
        <div className=" absolute lg:top-[70%] lg:left-[15%] top-[80%]  font-Open  flex flex-col items-center  gap-8">
          <h1 className="  lg:text-4xl lg:w-[50%]   text-White text-3xl text-center  w-[80%] font-[700]  ">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className=" text-[18px] lg:mt-0 lg:w-[42%] lg:text-center  text-center text-gray-300 w-[80%] ">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className=" font-Raleway lg:w-[20%] font-[700] hover:contrast-125  text-White bg-gradient-to-r from-Cyan to-Blue w-[55%] py-4 rounded-full  ">
            Get Started
          </button>
        </div>
      </header>
      {/* section features */}
      <section className=" lg:grid lg:grid-cols-2 lg:mt-[15rem] mt-[23rem] ">
        <div className=" flex flex-col gap-20  ">
          <div className=" flex flex-col font-Open gap-4 items-center">
            <img src={acces} alt="" />
            <h2 className=" text-2xl font-Raleway lg:text-3xl font-[700] text-White">
              Access your files, anywhere
            </h2>
            <p className="  text-[18px] text-center lg:w-[48%] w-[80%] text-gray-300 ">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
          <div className=" flex flex-col font-Open gap-4 items-center">
            <img src={security} alt="" />
            <h2 className=" text-2xl font-[700] font-Raleway lg:text-3xl  text-White">
              Security you can trust
            </h2>
            <p className=" text-[18px] text-center lg:w-[52%] w-[75%] text-gray-300">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:mt-0 gap-20 mt-20">
          <div className=" flex flex-col font-Open gap-4 items-center">
            <img src={collab} alt="" />
            <h2 className=" text-2xl font-Raleway lg:text-3xl font-[700] text-White">
              Real-time collaboration
            </h2>
            <p className=" text-[18px] text-center w-[82%] lg:w-[55%] text-gray-300 ">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          <div className=" flex flex-col font-Open gap-4 items-center">
            <img src={store} alt="" />
            <h2 className="  font-Raleway lg:text-3xl  text-2xl font-[700] text-White">
              Store any type of file
            </h2>
            <p className=" text-[18px] text-center w-[85%] lg:w-[50%] text-gray-300 ">
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </div>
        </div>
      </section>
      {/* end of section features */}
      {/* section works */}
      <section className=" lg:grid lg:grid-cols-2 lg:mt-[15rem] lg:place-items-center  font-Open mt-[9rem] ">
        <div className=" ">
          <img
            src={productivity}
            className="w-[80%] lg:w-[80%] mx-auto "
            alt=""
          />
        </div>
        <div className="   gap-4 lg:mt-20 mt-10 flex flex-col items-start px-8">
          <h2 className="  lg:text-start font-Raleway font-[700] text-White lg:text-4xl lg:w-[40%] text-2xl">
            Stay productive, wherever you are
          </h2>
          <p className=" text-gray-300 font-[400] text-[18px] lg:w-[70%] ">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="text-gray-300 font-[400] text-[18px] lg:w-[70%] ">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <div className="border-b flex gap-2 hover:text-white hover:border-white border-Cyan ">
            <a className=" text-Cyan hover:text-White   " href="#">
              See how Fylo works{" "}
            </a>
            <img src={arrow} className="  cursor-pointer w-5  " alt="" />{" "}
          </div>
        </div>
      </section>
      {/*  end of section works */}
      {/* section testimonials */}
      <section className=" lg:mt-[15rem] lg:grid lg:grid-cols-3  pb-[10rem] mb-[10rem] relative font-Open mt-[9rem] px-10 flex flex-col gap-10 ">
        <img
          src={quote}
          className=" md:w-[5%] lg:w-[2%] lg:left-10  w-[8%] bottom-[99%] absolute"
          alt=""
        />

        <div className=" bg-DarkBlue4 px-5    py-8 lg:py-[3.5rem]   shadow-2xl rounded-[10px] ">
          <p className=" text-gray-300   ">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className=" flex gap-2 mt-8 items-center ">
            <img src={satish} className="rounded-full w-[50px] " alt="" />
            <div>
              <h3 className=" text-White font-[700] ">Satish Patel</h3>
              <p className=" text-[12px] text-white ">Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
        <div className=" bg-DarkBlue4 px-5 py-8  shadow-2xl   rounded-[10px]">
          <p className=" text-gray-300">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className=" flex gap-2 mt-8 items-center ">
            <img src={bruce} className="rounded-full w-[50px] " alt="" />
            <div>
              <h3 className=" text-White font-[700] ">Bruce McKenzie</h3>
              <p className=" text-[12px] text-white ">Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
        <div className=" bg-DarkBlue4 px-5 py-8   shadow-2xl rounded-[10px] ">
          <p className=" text-gray-300">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className=" flex gap-2 mt-8 items-center ">
            <img src={Eva} className="rounded-full w-[50px] " alt="" />
            <div>
              <h3 className=" text-White font-[700] ">Iva Boyd</h3>
              <p className=" text-[12px] text-white ">Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
      </section>
      {/* end of section testimonials */}
      <footer className=" relative lg:grid lg:grid-cols-5   pt-[20rem] w-[100%] bg-DarkBlue3 py-8 px-6 ">
        <Form />
        <div className="flex flex-col items-start gap-4">
          <img src={logo} alt="" />
          <div className=" flex items-start justify-start gap-4 lg:mt-0  mt-8 ">
            <img src={location} className=" w-[5%]" alt="" />
            <p className="w-[60%] self-start text-gray-300 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
        <ul className=" flex flex-col gap-4 mt-4 lg:mt-0 items-start">
          <li className=" flex items-center gap-4">
            {" "}
            <img src={phone} alt="" />{" "}
            <a href="#" className=" text-gray-300">
              {" "}
              +1-543-123-4567
            </a>{" "}
          </li>
          <li className=" items-center flex gap-4">
            {" "}
            <img src={email} alt="" />{" "}
            <a className=" text-gray-300" href="">
              {" "}
              example@fylo.com
            </a>{" "}
          </li>
        </ul>

        <ul className=" flex flex-col items-start mt-20  lg:mt-0   gap-2">
          <li>
            <a className="text-gray-300 hover:text-White font-[700]" href="#">
              About Us
            </a>
          </li>
          <li>
            <a className="text-gray-300 hover:text-White font-[700]" href="#">
              Jobs
            </a>
          </li>
          <li>
            <a className="text-gray-300 hover:text-White font-[700]" href="#">
              Press
            </a>
          </li>
          <li>
            <a className="text-gray-300 hover:text-White font-[700]" href="#">
              Blog
            </a>
          </li>
        </ul>
        <ul className=" flex flex-col items-start mt-10 lg:mt-0 text-white gap-2">
          <li>
            <a className="text-gray-300 hover:text-White font-[700]" href="#">
              Contact Us
            </a>
          </li>
          <li>
            <a className="text-gray-300 hover:text-White font-[700]" href="#">
              Terms
            </a>
          </li>
          <li>
            <a className="text-gray-300 hover:text-White font-[700]" href="#">
              Privacy
            </a>
          </li>
        </ul>
        <div className=" mt-10 flex gap-4 items-center justify-center lg:mt-0 lg:justify-start lg:items-start  w-[100%] ">
          <button className=" border-[1px] p-2 rounded-full">
            <FaFacebookF className="hover:text-Cyan text-white h-5 w-5" />
          </button>
          <button className=" border-[1px] p-2 rounded-full">
            <BsTwitter className=" hover:text-Cyan text-white h-5 w-5" />
          </button>
          <button className=" border-[1px] p-2 rounded-full">
            <BsInstagram className="hover:text-Cyan text-white h-5 w-5" />
          </button>
        </div>
      </footer>
    </main>
  );
}

export default App;
