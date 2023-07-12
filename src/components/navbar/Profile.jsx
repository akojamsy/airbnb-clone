import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import Avatar from "./Avatar";
import DropdownMenuItem from "./DropdownMenuItem";

const Profile = ({ setShowModal }) => {
  const [show, setShow] = useState(false);
  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-2'>
        <div className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition-all cursor-pointer'>
          Airbnb your home
        </div>
        <div className='hidden md:block text-sm font-semibold py-2 px-2 rounded-full hover:bg-neutral-100 transition-all cursor-pointer'>
          <AiOutlineGlobal size='18' />
        </div>
        <div
          className='flex flex-row items-center  gap-2 rounded-full cursor-pointer hover:shadow-md p-3 md:py-1.5 md:px-2 border border-neutral-200 transition-all'
          onClick={() => setShow(!show)}
        >
          <MdOutlineMenu size='24' />
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>
      {show && (
        <div className='absolute rounded-xl shadow-md w-[20vw] md:3/4 bg-white overflow-hidden right-0 top-12 text-sm z-10'>
          <div className='flex flex-col cursor-pointer'>
            <DropdownMenuItem
              label={"Sign Up"}
              onClick={() => {
                setShowModal(true);
                setShow(!show);
              }}
            />
            <DropdownMenuItem label={"Log in"} onClick={() => {}} />
            <hr />
            <DropdownMenuItem label={"Airbnb your home"} onClick={() => {}} />
            <DropdownMenuItem label={"Help"} onClick={() => {}} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
