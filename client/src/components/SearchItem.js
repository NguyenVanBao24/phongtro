import React, { memo } from "react";

const SearchItem = ({ text, iconAfter, iconBefore }) => {
  return (
    <div className="text-black p-2 rounded-md bg-white gap-1.5 w-full text-[13px] flex items-center justify-between">
      <div className="flex gap-1.5 items-center">
        {iconBefore}
        <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
          {text}
        </span>
      </div>
      {iconAfter}
    </div>
  );
};

export default memo(SearchItem);
