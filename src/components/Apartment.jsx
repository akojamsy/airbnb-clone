import React, { useCallback, useState } from "react";
import { GrFormCheckmark } from "react-icons/gr";
import { Card } from "./index";

const Apartment = ({ selected }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className='grid mx-10 mb-10 h-calc(100vh-2080px)'>
      <div className='flex items-center justify-center'>
        <div className='flex border-[1px] w-full md:w-[620px] p-3.5 rounded-xl'>
          <div className='flex flex-col md:flex-row flex-grow md:items-center md:gap-4'>
            <h4 className='font-semibold pr-4 md:border-r-[1px] text-[14px] md:text-md'>
              Display total price
            </h4>
            <span className='text-[14px] md:text-md'>
              Includes all fees, before taxes
            </span>
          </div>
          <label
            htmlFor='check'
            className={` relative w-12 h-8 rounded-full  ${
              checked ? "bg-neutral-800" : "bg-neutral-400 hover:bg-neutral-500"
            }`}
          >
            <input type='checkbox' id='check' className='sr-only peer' />
            <span
              className={`flex items-center justify-center w-7 h-7 bg-neutral-50 absolute rounded-full  top-[2px]  transition-all duration-200 cursor-pointer ${
                checked ? "left-[17.5px]" : "left-[2px] "
              }`}
              onClick={() => setChecked(!checked)}
            >
              <GrFormCheckmark
                className={`${!checked ? "hidden" : "block text-[18px] "}`}
              />
            </span>
          </label>
        </div>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-7 my-4'>
        {selected?.length > 0 &&
          selected?.map((item, i) => <Card key={i} item={item} i={i} />)}
      </div>
    </div>
  );
};

export default Apartment;
