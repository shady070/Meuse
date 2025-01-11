"use client";
import { useState } from "react";
import Image from "next/image";
import Form from "./Form";

const SignUp = () => {
  const [activeButton, setActiveButton] = useState("Business");

  return (
    <div className="flex justify-end bg-night bg-no-repeat bg-cover w-full pt-[98px]">
      <div className="px-[120px] py-[55px] bg-secondary-white flex flex-col items-center rounded-l-[30px]">
        <h3 className="text-primary font-semibold leading-[65px]">Sign up!</h3>
        <p className="text-primary mb-[26px]">Start collecting food per-order quickly.</p>
        <div className="bg-secondary-offWhite rounded-full flex items-center justify-between p-1">
          <button
            onClick={() => setActiveButton("Personal")}
            className={`px-[38px] py-[9px] h-full rounded-full text-[16px] flex items-center justify-center ${
              activeButton === "Personal" ? "bg-secondary-pink text-white" : "bg-transparent text-secondary-gray3"
            }`}
          >
            Personal
          </button>
          <button
            onClick={() => setActiveButton("Business")}
            className={`px-[38px] py-[9px] h-full rounded-full text-[16px] flex items-center justify-center ${
              activeButton === "Business" ? "bg-secondary-pink text-white" : "bg-transparent text-secondary-gray3"
            }`}
          >
            Business
          </button>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default SignUp;
