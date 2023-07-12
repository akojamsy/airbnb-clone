import React from "react";
import image from "/images/airbnb.png";

const Logo = () => {
  return (
    <div className='flex justify-start items-center w-[250px]'>
      <img src={image} alt='logo' className='object-contain h-[67px]' />
    </div>
  );
};

export default Logo;
