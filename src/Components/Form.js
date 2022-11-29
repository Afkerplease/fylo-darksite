import React, { useState } from "react";

function Form() {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!text.includes("@")) {
      setError(true);
    } else {
      setError(false);
    }
  };
  console.log(error);
  const changeHandler = (event) => {
    setText(event.target.value);
  };
  return (
    <div className=" bg-DarkBlue lg:-top-[15%] lg:w-[50%] lg:left-[25%] shadow-lg w-[85%] pt-[4rem] shadow-black pb-10 rounded-[10px]   left-8 -top-[20%]    absolute">
      <form
        action=""
        onSubmit={submitHandler}
        className="px-4 flex flex-col items-center gap-4 "
      >
        <h2 className=" font-Raleway font-[700] text-white text-2xl ">
          Get early access today
        </h2>
        <p className=" font-Open text-gray-300 text-center w-[85%] ">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className=" lg:px-10 relative flex flex-col lg:flex-row items-center w-[100%] gap-10 mt-4 ">
          <input
            className=" w-[80%]  px-3 text-gray-400     py-3 rounded-full font-Raleway "
            type="text"
            onChange={changeHandler}
            value={text}
            name=""
            placeholder="example@example.com"
            id=""
          />
          {error && (
            <p className=" font-Open font-[700] top-[35%] text-[12px] right-[32%]  absolute text-LightRed">
              {" "}
              please enter a valid email address{" "}
            </p>
          )}
          <button className=" lg:w-[30%]  font-Raleway font-[700] text-White  hover:contrast-125   bg-gradient-to-r  from-Cyan to-Blue w-[80%] py-4 rounded-full  ">
            Get Started For Free
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
