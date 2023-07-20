import React, { useEffect, useState } from "react";
import { Book } from "./index";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";
import Carousel from "./Carousel";
import moment from "moment/moment";

const Card = ({ item, i }) => {
  const [liked, setLiked] = useState(false);
  const [arr, setArr] = useState([]);

  const handleLiked = (like) => {
    let newArr = arr.some((el) => (el = i));

    if (newArr) {
      setArr(arr.filter((item) => item !== like));
      setLiked(!liked);
      return;
    } else if (i === like) {
      setLiked(!liked);
      setArr([...arr, i]);
    }
  };

  // useEffect(() => {
  //   console.log(arr);
  // }, [arr]);
  return (
    <div className='cursor-pointer p-0'>
      <div className='relative group bg-slate-40 w-full '>
        <Carousel>
          {item?.image?.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt=''
              className='object-cover rounded-lg h-[285px] duration-300 transition-all'
            />
          ))}
        </Carousel>
        <span
          className='absolute right-3 top-3 z-10'
          onClick={() => handleLiked(i)}
        >
          <AiTwotoneHeart
            size={24}
            className={`${liked ? "text-red-500" : "text-neutral-500 "}`}
          />
        </span>
        <Book />
      </div>
      <div className='my-2'>
        <div className='flex items-center justify-between'>
          <h2 className='font-semibold'>{item?.city + ", " + item?.country}</h2>
          <div className='flex justify-between items-center'>
            <span>
              <BsStarFill className='text-[12px] mr-2' />
            </span>
            <span>{item?.averageRating}</span>
          </div>
        </div>
        <h2 className='font-light'>
          Stay with {item?.host + ", " + item?.workType}
        </h2>
        <h2 className='font-light'>
          {item?.nights +
            " nights. " +
            moment(item?.startDate).format("ll") +
            " - " +
            moment(item?.endDate).format("ll")}
        </h2>
        <div className='flex gap-1 underline underline-offset-1'>
          <span className='space-x-0 font-semibold'>
            ${item?.costPerNight}
            <span className='font-light'> total before taxes</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
