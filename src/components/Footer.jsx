import React, { useState } from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";
import FooterModal from "./FooterModal";

const Footer = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='fixed flex flex-col md:flex-row justify-between gap-4 bottom-0 py-3 bg-white border-t-[1px] w-full px-10'>
      <div className='flex gap-4'>
        © 2023 Airbnb, Inc.
        <a
          href='#'
          className='hidden md:flex hover:underline hover:underline-offset-1'
        >
          Terms
        </a>
        <a
          href='#'
          className='hidden md:flex hover:underline hover:underline-offset-1'
        >
          Sitemap
        </a>
        <a
          href='#'
          className='hidden md:flex hover:underline hover:underline-offset-1'
        >
          Sitemap
        </a>
        <a href='#' className='hover:underline hover:underline-offset-1'>
          Privacy
        </a>
        <a
          href='#'
          className='hidden md:flex hover:underline hover:underline-offset-1'
        >
          Your Privacy
        </a>
        <a
          href='#'
          className='hidden md:flex hover:underline hover:underline-offset-1'
        >
          Choices·
        </a>
        <a href='#' className='hover:underline hover:underline-offset-1'>
          Destinations
        </a>
      </div>
      <div className='hidden flex-col md:flex md:flex-row gap-3'>
        <a
          href='#'
          className='hover:underline hover:underline-offset-1 flex gap-2 items-center'
        >
          <AiOutlineGlobal />
          <span>English(US)</span>
        </a>
        <a href='#' className='hover:underline hover:underline-offset-1'>
          $<span> USD</span>
        </a>
        <a href='#' className='hover:underline hover:underline-offset-1'>
          Support & Resources
        </a>
        <button>
          <MdOutlineKeyboardArrowUp size={22} />
        </button>
        {/* <FooterModal /> */}
      </div>
    </div>
  );
};

export default Footer;
