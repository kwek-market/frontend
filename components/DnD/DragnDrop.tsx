import React, { useState, useEffect, useRef } from "react";

export type DragnDropProps = {
  handleFileDrop: (files: FileList) => void;
  children: React.ReactNode;
};

function DragnDrop({ children, handleFileDrop }: DragnDropProps) {
  const dropRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [dragCounter, setDragCounter] = useState(0);

  function handleDragIn(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter(dragCounter + 1);
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  }

  function handleDragOut(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter(dragCounter - 1);
    setDragging(false);
  }

  function handleDrag(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileDrop(e.dataTransfer.files);
      e.dataTransfer.clearData();
      setDragCounter(0);
    }
  }

  useEffect(() => {
    let div = dropRef.current;
    // in
    div.addEventListener("dragenter", handleDragIn);
    div.addEventListener("dragleave", handleDragOut);
    div.addEventListener("dragover", handleDrag);
    div.addEventListener("drop", handleDrop);
    // out
    return () => {
      div.removeEventListener("dragenter", handleDragIn);
      div.removeEventListener("dragleave", handleDragOut);
      div.removeEventListener("dragover", handleDrag);
      div.removeEventListener("drop", handleDrop);
    };
  }, []);

  return (
    <div className="tw-relative" ref={dropRef}>
      {dragging && (
        <div className="tw-border-4 tw-border-gray-kwek100 tw-border-dotted tw-bg-white-100 tw-absolute tw-top-0 tw-right-0 tw-bottom-0 tw-left-0 tw-z-[9999] tw-flex tw-justify-center tw-items-center">
          <div className="tw-flex tw-justify-center tw-items-center">
            <div className="tw-text-black-kwek100 tw-text-xl tw-font-bold">
              Drop here :)
            </div>
          </div>
        </div>
      )}
      {children}
    </div>
  );
}

export default DragnDrop;
