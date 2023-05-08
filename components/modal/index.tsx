import React from "react";

interface SimpleModalProps {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
}

const SimpleModal = ({ children, open, handleClose }: SimpleModalProps) => {
  return (
    <>
      {open ? (
        <div
          className="tw-fixed tw-left-0 tw-top-0 tw-w-screen tw-h-screen tw-bg-[#1D1616] tw-bg-opacity-70 tw-z-[21]"
          onClick={(e) => handleClose()}
        >
          <div
            className=" tw-z-[2] tw-w-max tw-mx-auto"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SimpleModal;
