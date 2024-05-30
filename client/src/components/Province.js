import React, { memo } from "react";
import ProvinceButton from "./ProvinceButton";
import { location } from "../ultils/constants";

const Province = () => {
  return (
    <div className="flex gap-8 justify-center mb-8">
      {location.map((item) => (
        <ProvinceButton name={item.name} key={item.id} image={item.image} />
      ))}
    </div>
  );
};

export default memo(Province);
