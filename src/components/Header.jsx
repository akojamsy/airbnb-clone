import React, { useState } from "react";
import { Logo, Profile, Search } from ".";
import DraggableSlider from "./DraggableSlider";

const Header = ({ setShowModal, setCategory }) => {
  return (
    <>
      <div className='fixed w-full bg-white z-10 '>
        <div className='border border-neutral-100 py-2'>
          <div className='flex justify-between items-center bg-white mx-8'>
            <Logo />
            <Search />
            <Profile setShowModal={setShowModal} />
          </div>
        </div>
        <div className='flex mr-8 items-center'>
          <div className='grow overflow-x-hidden '>
            <DraggableSlider setCategory={setCategory} />
          </div>
          <div className='flex gap-2 items-center justify-center  w-[180px] bg-white border-[1px] p-[14px] rounded-xl cursor-pointer shadow-sm'>
            <img src='/images/filter.png' alt='' className='w-3 h-4' />
            <span className='text-[12px] font-semibold'>Filters</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
