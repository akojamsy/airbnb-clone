import React, { useEffect, useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import {
  MdOutlineBedroomParent,
  MdOutlineCabin,
  MdOutlineHomeWork,
  MdOutlineRepartition,
  MdOutlineSportsCricket,
} from "react-icons/md";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { LuHome } from "react-icons/lu";
import {
  GiTheaterCurtains,
  GiModernCity,
  GiBaseDome,
  GiIsland,
  GiMountaintop,
  GiPalmTree,
  GiDoubleStreetLights,
  GiSkier,
  GiWatchtower,
  GiVines,
} from "react-icons/gi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RiShipLine, RiHomeOfficeLine } from "react-icons/ri";
import { FiKey } from "react-icons/fi";
import { TbChefHat, TbTopologyStarRing3 } from "react-icons/tb";
import {
  PiFire,
  PiBuildingsLight,
  PiCoffee,
  PiBoat,
  PiCactus,
  PiParkThin,
} from "react-icons/pi";
import { twMerge } from "tailwind-merge";
import categories from "../utils/data.json";
import { IconContext } from "react-icons";

const DraggableSdivder = ({ setCategory }) => {
  const tabBoxRef = useRef();
  const leftBtnContainer = useRef();
  const rightBtnContainer = useRef();
  const [activeCategory, setActiveCategory] = useState(0);
  // let dragging = false;

  // local state
  const [activeBtn, setActiveBtn] = useState("right");
  const [active, setActive] = useState("");

  const manageIcons = () => {
    if (tabBoxRef?.current?.scrollLeft >= 1) {
      setActive("flex");
    } else {
      setActive("");
    }
    let maxScrollValue =
      tabBoxRef?.current?.scrollWidth - tabBoxRef.current?.clientWidth;
    if (tabBoxRef?.current?.scrollLeft >= maxScrollValue) {
      rightBtnContainer?.current?.classList.remove("active");
    } else {
      rightBtnContainer?.current?.classList.add("active");
    }
  };

  const handleScrollLeft = () => {
    if (tabBoxRef.current) {
      tabBoxRef.current.scrollLeft -= 500; // set the scroll distance
      manageIcons();
    }
  };

  const handleScrollRight = () => {
    if (tabBoxRef.current) {
      tabBoxRef.current.scrollLeft += 500; // set the scroll distance
      manageIcons();
    }
  };

  // const drag = (e) => {
  //   if (!dragging) return;
  //   tabBoxRef.current.scrollLeft -= e.movementX;
  //   tabBoxRef.current.classList.remove("scroll-smooth");
  //   tabBoxRef.current.classList.add("scroll-auto");
  // };

  // useEffect(() => {
  //   document.addEventListener("mouseup", () => {
  //     dragging = false;
  //     tabBoxRef.current.classList.remove("scroll-auto");
  //     tabBoxRef.current.classList.add("scroll-smooth");
  //   });
  // }, []);

  const categories = [
    {
      icon: (
        <MdOutlineBedroomParent className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Rooms",
    },
    {
      icon: (
        <LiaSwimmingPoolSolid className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Amazing pools",
    },
    {
      icon: (
        <PiFire className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Trending",
    },
    {
      icon: (
        <MdOutlineSportsCricket className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Play",
    },
    {
      icon: (
        <FiKey className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "New",
    },
    {
      icon: (
        <GiTheaterCurtains className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Amazing Views",
    },
    {
      icon: (
        <HiOutlineBuildingOffice2 className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Mansions",
    },
    {
      icon: (
        <GiModernCity className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Iconic cities",
    },
    {
      icon: (
        <RiShipLine className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "OMG!",
    },
    {
      icon: (
        <PiBuildingsLight className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Design",
    },
    {
      icon: (
        <PiCoffee className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Beg & Breakfasts",
    },
    {
      icon: (
        <GiBaseDome className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Domes",
    },
    {
      icon: (
        <PiBoat className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Boats",
    },
    {
      icon: (
        <TbChefHat className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Chef's kitchens",
    },
    {
      icon: (
        <PiCactus className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Desert",
    },
    {
      icon: (
        <RiHomeOfficeLine className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Earth homes",
    },
    {
      icon: (
        <RiShipLine className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "OMG!",
    },
    {
      icon: (
        <GiIsland className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Islands",
    },
    {
      icon: (
        <GiMountaintop className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Top of the world",
    },
    {
      icon: (
        <LuHome className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Cycliadic homes",
    },
    {
      icon: (
        <GiPalmTree className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Tropical",
    },
    {
      icon: (
        <MdOutlineHomeWork className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Historical homes",
    },
    {
      icon: (
        <GiDoubleStreetLights className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Country side",
    },
    {
      icon: (
        <PiParkThin className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "National parks",
    },
    {
      icon: (
        <MdOutlineRepartition className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Casas particulares",
    },
    {
      icon: (
        <GiSkier className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Ski-in/out",
    },
    {
      icon: (
        <MdOutlineCabin className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Cabins",
    },
    {
      icon: (
        <GiWatchtower className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Towers",
    },
    {
      icon: (
        <TbTopologyStarRing3 className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Arctic",
    },
    // {
    //   icon: (
    //     <FaBuildingWheat className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
    //   ),
    //   name: "Farms",
    // },
    {
      icon: (
        <GiVines className='text-[25px] text-[#666666] group-hover:text-black duration-300 transition-all' />
      ),
      name: "Vineyards",
    },
  ];

  return (
    <div className='bg-white relative ml-10 mr-6'>
      <div
        ref={leftBtnContainer}
        className={twMerge(
          `hidden flex-row justify-start items-center absolute h-full w-[100px] left-0 top-0 bg-gradient-to-r from-white to-transparent transition-all duration-300 pointer-events-none  ${
            active ?? ""
          }`
        )}
      >
        <BiChevronLeft
          size={16}
          className={` bg-neutral-50 h-7 w-7 text-center text-[#333] border-[1px] border-[#999] rounded-full cursor-pointer pointer-events-auto hover:scale-105 hover:shadow-lg `}
          onClick={handleScrollLeft}
        />
      </div>
      <div className='flex justify-center items-center gap-3 w-full'>
        <ul
          className={`flex flex-row gap-12 py-5 overflow-x-scroll no-scrollbar scroll-smooth `}
          ref={tabBoxRef}
          onScroll={() => manageIcons()}
          // onMouseMove={(e) => drag(e)}
          // onMouseDown={() => (dragging = true)}
        >
          {categories.map((category, index) => (
            <li
              key={index}
              className={`flex flex-col whitespace-nowrap gap-y-1.5 cursor-pointer text-[#555] hover:text-black  hover:border-b-[2px] items-center py-3 ${
                activeCategory === index
                  ? "border-b-[2px] border-b-black text-black"
                  : "hover:border-[#ccc]"
              }`}
              onClick={() => {
                setActiveCategory(index);
                setCategory(category?.name);
              }}
            >
              {/* <IconContext.Provider value={{ size: "25px" }}>
                {React.createElement(eval(category.icon))}
              </IconContext.Provider> */}
              {category?.icon}
              <span className='text-[12px] font-semibold'>{category.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div
        ref={rightBtnContainer}
        className={twMerge(
          `hidden justify-end items-center bg-gradient-to-r to-white from-transparent absolute h-full w-[100px] top-0 right-0 pointer-events-none active`
        )}
      >
        <BiChevronRight
          className={` bg-neutral-50 h-7 w-7 text-center text-[#333] border-[1px] border-[#999] rounded-full cursor-pointer pointer-events-auto hover:scale-105 hover:shadow-lg `}
          onClick={handleScrollRight}
        />
      </div>
    </div>
  );
};

export default DraggableSdivder;
