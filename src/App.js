import "./App.css";
import NavBar from "./Components/NavBar";
import illustrationIntro from "./images/illustration-intro.png";
import acces from "./images/icon-access-anywhere.svg";
import security from "./images/icon-security.svg";
import collab from "./images/icon-collaboration.svg";
import store from "./images/icon-any-file.svg";

function App() {
  return (
    <main className=" bg-DarkBlue2  ">
      <header className=" relative  ">
        <NavBar />
        <div className=" bg-DarkBlue4 w-[100%] h-[400px]  relative  ">
          <img
            src={illustrationIntro}
            className="mx-auto  absolute bottom-[27%] left-[15%]  z-10 w-[73%]  "
            alt=""
          />
          <div className=" absolute bg-no-repeat bg-cover bg-top   w-[100%] h-[10rem] bottom-0   bg-[url('./images/bg-curvy-mobile.svg')] "></div>
        </div>
        <div className=" font-Open flex flex-col items-center gap-8">
          <h1 className=" absolute top-[55%] text-White text-3xl text-center w-[80%] font-[700]  ">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className=" mt-20 text-center text-White w-[67%] ">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className=" font-Raleway font-[700] text-White bg-gradient-to-r from-Cyan to-Blue w-[55%] py-4 rounded-full  ">
            Get Started
          </button>
        </div>
      </header>
      {/* section features */}
      <section className=" mt-[9rem] ">
        <div className=" flex flex-col gap-20  ">
          <div className=" flex flex-col font-Open gap-4 items-center">
            <img src={acces} alt="" />
            <h2 className=" text-xl text-White">Access your files, anywhere</h2>
            <p className=" text-center w-[75%] text-White ">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
          <div className=" flex flex-col font-Open gap-4 items-center">
            <img src={security} alt="" />
            <h2 className=" text-xl text-White">Security you can trust</h2>
            <p className=" text-center w-[75%] text-White ">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-20 mt-20">
          <div className=" flex flex-col font-Open gap-4 items-center">
            <img src={collab} alt="" />
            <h2 className=" text-xl text-White">Real-time collaboration</h2>
            <p className=" text-center w-[75%] text-White ">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required
            </p>
          </div>
          <div className=" flex flex-col font-Open gap-4 items-center">
            <img src={store} alt="" />
            <h2 className=" text-xl text-White">Store any type of file</h2>
            <p className=" text-center w-[75%] text-White ">
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </div>
        </div>
      </section>
      {/* end of section features */}
      {/* section works */}
      <section></section>
      {/* section works */}
    </main>
  );
}

export default App;
