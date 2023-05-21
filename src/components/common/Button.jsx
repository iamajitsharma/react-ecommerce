import React from "react";

const Button = ({ outline, small, title, className, onClick }) => {
  return (
    <button
      className={`${outline ? "bg-transperent" : "bg-green-600/80"}
         ${outline ? "border-2" : "border-none"}
         ${outline ? "border-slate-600/80" : "border-none"}
         ${outline ? "py-2" : "py-1"}
         ${outline ? "px-3" : "px-2"}
         ${outline ? "text-base" : "text-sm"}
         ${outline ? "text-slate-600/80" : "text-white"}
        
        max-w-fit font-medium shadow-md ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
