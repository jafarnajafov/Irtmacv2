import React from "react";

const BredcumPages = ({ name, longtext, classesName = "" }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h3 className="text-[#002d74] text-[36px] lg:text-[25px]  font-semibold  mb-6">
        {name}
      </h3>
      <p
        className={`text-[#009ade] text-[24px] lg:text-[18px] md:text-[15px] lg:text-center ${classesName}`}
      >
        {longtext}
      </p>
    </div>
  );
};

export default BredcumPages;
