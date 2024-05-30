import React, { memo } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const isActive = "px-[18px] py-[15px] bg-[#E13427] text-white cursor-pointer rounded-md";
const notActive = "px-[18px] py-[15px] bg-white hover:bg-gray-200 cursor-pointer rounded-md";
const PageNumber = ({ icon, number, currentNumber }) => {
  const navigate = useNavigate();

  const handleChangePage = () => {
    navigate({
      pathname: "/",
      search: createSearchParams({ page: number }).toString(),
    });
  };
  return (
    <div className={+number === +currentNumber ? isActive : notActive} onClick={handleChangePage}>
      {icon || number}
    </div>
  );
};

export default memo(PageNumber);
