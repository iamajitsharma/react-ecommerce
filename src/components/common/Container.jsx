import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={`max-w-[2520px] mx-auto xl:px-24 md:px-10 sm:px-2 px-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
