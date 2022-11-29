import "./App.css";
import NavBar from "./Components/NavBar";
import illustrationIntro from "./images/illustration-intro.png";

function App() {
  return (
    <main className=" bg-DarkBlue2 h-[100vh] ">
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
    </main>
  );
}

export default App;
