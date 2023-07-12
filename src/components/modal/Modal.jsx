import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../../components";
import { IoMdClose } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionlabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
  className,
  overlayStyles,
  contentStyles,
  contentHeaderStyle,
  closeButtonStyle,
  closeIconStyle,
  contentTitleStyle,
}) => {
  const [showModal, setShowModal] = useState(isOpen);
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);

    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        div
        className={twMerge(
          `flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-20 outline-none focus:outline-none bg-neutral-800/80 ${
            overlayStyles ?? ""
          }`
        )}
      >
        <div
          className={twMerge(
            `relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto ${
              className ?? ""
            }`
          )}
        >
          {/* content goes here */}
          <div
            className={`translate duration-300 h-full ${
              showModal ? "translate-y-0" : "translate-y-full"
            } ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div
              className={twMerge(
                `translate h-full lg:full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ${
                  contentStyles ?? ""
                }`
              )}
            >
              {/* header */}
              <div
                className={twMerge(
                  `flex items-center px-6 py-3 rounded-t justify-center relative border-b-[1px] ${
                    contentHeaderStyle ?? ""
                  }`
                )}
              >
                <button
                  className={twMerge(
                    `p-1 border-0 hover:opacity-70 transition absolute right-9 ${
                      closeButtonStyle ?? ""
                    }`
                  )}
                  onClick={() => {
                    handleClose();
                  }}
                >
                  <IoMdClose
                    className={twMerge(` text-[18px] ${closeIconStyle ?? ""}`)}
                  />
                </button>
                <div
                  className={twMerge(
                    `text-lg font-semibold ${contentTitleStyle}`
                  )}
                >
                  {title}
                </div>
              </div>
              {/* body */}
              <div className='relative p-6 flex-auto'>{body}</div>
              {/* footer */}
              <div className='flex flex-col gap-2 p-6'>
                <div className='flex flex-row items-center gap-4 w-full'>
                  <Button
                    disabled={disabled}
                    onClick={onclick}
                    label={actionlabel}
                    small
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
