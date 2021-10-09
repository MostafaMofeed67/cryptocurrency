import React, { useState } from "react";

import { iconDropdown1, iconDropdown2 } from "./Icons";

const SelectDropdown = ({ name, placeholder, onClick }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(`${placeholder}`);

  const toggleDropdownHandler = () => setIsActive((prevState) => !prevState);

  const selectHandler = (option) => {
    setSelected(option);
    onClick(option.toLowerCase());
    setIsActive(false);
  };

  return (
    <div className="max-w-sm w-full   relative select-none">
      <div
        className="bg-white py-3 px-4 shadow-lg flex justify-between items-center cursor-pointer"
        onClick={toggleDropdownHandler}
      >
        <h5 className="font-extrabold "> {selected}</h5>
        {isActive ? iconDropdown1 : iconDropdown2}
      </div>
      {isActive && (
        <div className="absolute font-bold shadow-lg  p-3 bg-white top-[120%] w-full max-h-60 overflow-y-scroll dropdown">
          {name?.map((coin) => (
            <div
              key={coin.name}
              className="p-2 hover:bg-gray-200/40 transition-all duration-300 ease-in-out text-sm cursor-pointer"
              onClick={() => selectHandler(coin.name)}
            >
              {coin.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectDropdown;
