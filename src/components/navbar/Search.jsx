import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
      <div className='flex flex-row items-center justify-between'>
        <div className='text-md font-semibold pl-5 pr-4'>Anywhere</div>
        <div className='hidden sm:block text-md font-semibold px-4 border-x-[1px] flex-1'>
          Any week
        </div>
        <div className='text-sm pl-4 pr-2 text-gray-500 flex flex-row items-center gap-3'>
          <div className='hidden sm:block text-md font-semibold'>
            Add guests
          </div>
          <div className='p-2 bg-rose-500 rounded-full text-white'>
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
