import React from "react";

const Button = ({ label, onClick, disabled, outline, small, large, icon }) => {
  return (
    <>
      <button
        onClick={onclick}
        disabled={disabled}
        className={`relative disabled:opacity-80 disabled:cursor-not-allowed rounded-lg hover:opacity-90 transition w-full
         ${
           outline
             ? "bg-white border-black text-black"
             : "bg-rose-500 border-rose-500 text-white"
         }
         ${
           small
             ? "text-sm border-[1px] py-1.5 "
             : "font-semibold border-[2px] text-md py-3"
         }`}
      >
        Sign In
      </button>
    </>
  );
};

export default Button;
