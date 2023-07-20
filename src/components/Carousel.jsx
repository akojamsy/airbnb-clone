import React, { useEffect, useRef, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Carousel = ({ children: slides }) => {
  const [current, setCurrent] = useState(0);
  const rightBtn = useRef();
  const leftBtn = useRef();

  const previous = () => {
    console.log(current);

    if (current < slides?.length) {
      rightBtn.current.classList.remove("hidden");
      rightBtn.current.classList.add("flex");
    }
    setCurrent((current) => (current === 0 ? slides?.length - 1 : current - 1));
  };

  const next = () => {
    if (current >= 0) {
      leftBtn.current.classList.add("flex");
      leftBtn.current.classList.remove("hidden");
    }
    setCurrent((current) =>
      current === slides?.length - 1 ? current : current + 1
    );
  };

  useEffect(() => {
    if (current === 0) {
      leftBtn.current.classList.remove("flex");
      leftBtn.current.classList.add("hidden");
      return;
    }
    if (current === slides?.length - 1) {
      rightBtn.current.classList.remove("flex");
      rightBtn.current.classList.add("hidden");
      return;
    }
  }, [current]);

  return (
    <div className='overflow-x-hidden relative'>
      <div
        className='flex transition-transform ease-out duration-500 '
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides}
      </div>
      <div className='flex '>
        <button
          className='absolute left-3 bottom-[153px] p-1 rounded-full shadow-sm bg-white/80 text-[#333] hover:bg-white cursor-pointer'
          onClick={previous}
          ref={leftBtn}
        >
          <MdOutlineKeyboardArrowLeft size={24} />
        </button>
        <button
          className='absolute right-3 bottom-[153px] p-1 rounded-full shadow-sm bg-white/80 text-[#333] hover:bg-white cursor-pointer'
          onClick={next}
          ref={rightBtn}
        >
          <MdOutlineKeyboardArrowRight size={24} />
        </button>
      </div>
      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {slides?.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-2 h-2 bg-white rounded-full ${
                current === i ? "p-1" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
