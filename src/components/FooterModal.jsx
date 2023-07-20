import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import footerData from "../utils/footer.json";

const backdropVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  visible: {
    y: "45vh",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 18,
    },
  },
  hidden: { y: "100vh", opacity: 0 },
};

const FooterModal = ({ showModal, setShowModal }) => {
  return (
    <>
      <AnimatePresence>
        {showModal && (
          <motion.div
            variants={backdropVariant}
            initial='hidden'
            animate='visible'
            exit='hidden'
            className='fixed inset-0 w-full bg-black/60 z-20 '
          >
            <motion.div
              variants={modal}
              className='flex items-start bg-neutral-50 h-[60vh] rounded-t-lg p-5 z-10 '
            >
              <button
                className=' text-[#333] text-[20px] p-2 rounded-full hover:bg-neutral-200 hover:shadow-sm cursor-pointer transition-all duration-300'
                onClick={() => setShowModal(!showModal)}
              >
                <MdOutlineClose />
              </button>
              <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-20 mt-8 mx-5'>
                {footerData?.map((item, i) => {
                  return (
                    <div key={i} className='w-full'>
                      <div className='font-semibold'>{item?.title}</div>
                      {item?.links?.map((link) => (
                        <div className='flex flex-col gap-y-0 py-1.5 hover:underline hover:underline-offset-2'>
                          <Link to='/' className='font-normal text-gray-700'>
                            {link}
                          </Link>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FooterModal;
