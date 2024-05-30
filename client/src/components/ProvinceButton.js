import React from "react";

const ProvinceButton = ({ name, image }) => {
  return (
    <div className="shadow-md hover:shadow-lg text-secondary1 hover:text-secondary2">
      <img
        src={image}
        alt="name"
        className="w-[220px] h-[110px] rounded-tl-md rounded-tr-md object-cover"
      />
      <div className="text-center p-2 font-medium">{name}</div>
    </div>
  );
};

export default ProvinceButton;
