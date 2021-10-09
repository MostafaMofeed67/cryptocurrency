import React, { useEffect, useRef, useState } from "react";

const Exchanges = ({
  description,
  rank,
  name,
  imgUul,
  volume,
  markets,
  change,
}) => {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleActiveHandler = () => {
    setActive(!active);
  };
  return (
    <div className="accordion">
      <div
        className="flex p-4 border  border-gray-200 bg-white/30 min-w-max cursor-pointer"
        onClick={toggleActiveHandler}
      >
        <h6 className="min-w-[150px] w-full flex items-center gap-2">
          <span className="text-sm select-none"> {rank}.</span>
          <img src={imgUul} alt={name} className="w-5 h-5 select-none" />
          <span className="font-bold text-gray-600 select-none">{name}</span>
        </h6>
        <h6 className="min-w-[150px] w-full select-none">${volume}</h6>
        <h6 className="min-w-[150px] w-full select-none">{markets}</h6>
        <h6 className="min-w-[150px] w-full select-none">{change}%</h6>
      </div>
      <div
        className={`space-y-3  bg-white/70 overflow-hidden transition-all w-full  min-w-[634px]`}
        ref={contentRef}
      >
        <div
          className="p-3"
          dangerouslySetInnerHTML={{
            __html:
              description === null
                ? `We will add information about  ${name} soon.`
                : description,
          }}
        />
      </div>
    </div>
  );
};

export default Exchanges;
