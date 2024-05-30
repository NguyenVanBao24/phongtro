import React from "react";
import { SearchItem } from "../../components";
import icon from "../../ultils/icon";

const {
  FaRegBuilding,
  FaLocationDot,
  GiPriceTag,
  LiaExternalLinkSquareAltSolid,
  FaAngleRight,
  FaSearch,
  BiSolidTagX,
} = icon;

const Search = () => {
  return (
    <div className="w-8/12 mt-2.5 mb-1 p-2.5 bg-[#febb02] rounded-lg flex items-center justify-around gap-1.5">
      <SearchItem
        iconBefore={<FaRegBuilding />}
        text="Phòng trọ nhà trọ"
        iconAfter={<BiSolidTagX />}
      />
      <SearchItem
        iconBefore={<FaLocationDot />}
        text="Toàn quốc"
        iconAfter={<FaAngleRight />}
      />
      <SearchItem
        iconBefore={<GiPriceTag />}
        text="Chọn giá"
        iconAfter={<FaAngleRight />}
      />
      <SearchItem
        iconBefore={<LiaExternalLinkSquareAltSolid />}
        text="Chọn diện tích"
        iconAfter={<FaAngleRight />}
      />
      <div className="w-full flex gap-1.5 items-center justify-center bg-secondary1 p-2 text-[13px] rounded-md  text-white">
        <FaSearch />
        <span>Tìm kiếm</span>
      </div>
    </div>
  );
};

export default Search;
