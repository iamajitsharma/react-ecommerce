import React, { useState } from "react";
import { plantCategory } from "../../data";

const CategoryMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div className="absolute flex flex-col p-2 gap-3 bg-white shadow-md rounded-md text-base font-medium">
          {plantCategory.map((item) => (
            <span key={item.id}>{item.category}</span>
          ))}
        </div>
      )}
    </>
  );
};

export default CategoryMenu;
