import React from "react";

const Book = ({ setShowModal }) => {
  // const [show, setShow] = useState(false);
  return (
    <div
      className='absolute w-[70px] h-20 bg-neutral-100 text-white rounded-r-md left-2 bottom-12 group-hover:bottom-14 group-hover:left-3 transition-all duration-300'
      // onClick={() => {
      //   setShowModal(true);
      //   setShow(!show);
      // }}
    >
      <div className='flex items-center justify-center'>
        <img
          src='https://a0.muscache.com/im/pictures/user/a910392f-02d4-4ed0-96a9-52d6ee997cc1.jpg?im_w=240'
          alt='host'
          className='h-10 w-10 rounded-full mt-5'
        />
      </div>
    </div>
  );
};

export default Book;
