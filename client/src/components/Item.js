import React, { memo, useState } from "react";
import icon from "../ultils/icon";

const { FaStar, FaRegHeart, FaHeart, BsFillBookmarkStarFill } = icon;
const Item = ({ images, user, title, address, star, description, attributes }) => {
  const [isHoverHeart, setisHoverHeart] = useState(false);

  const indexes = [0, 1, 2, 3];
  return (
    <div className="flex center border-t border-orange-600 p-4">
      <div className="w-2/5">
        <div className="relative flex flex-wrap gap-[2px] items-center cursor-pointer">
          {images.length > 0 &&
            images
              .filter((i, index) => indexes.some((i) => i === index))
              ?.map((i, index) => {
                return (
                  <img
                    key={index}
                    src={i}
                    alt="preview"
                    className="w-[140px] h-[120px] object-cover"
                  />
                );
              })}

          <span className="bg-overlay-30 text-white px-2 rounded-md absolute bottom-2 left-2">{`${images.length} ảnh`}</span>
          <span
            className=" text-white px-2 absolute bottom-2 right-7"
            onMouseEnter={() => setisHoverHeart(true)}
            onMouseLeave={() => setisHoverHeart(false)}
          >
            {isHoverHeart ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
          </span>
        </div>
      </div>
      <div className="w-3/5">
        <div className="flex justify-between gap-4">
          <div className="text-red-600 font-medium ml-1 text-sm ">
            <FaStar size={16} className="mb-1 star-item text-yellow-200" />
            <FaStar size={16} className="mb-1 star-item text-yellow-200" />
            <FaStar size={16} className="mb-1 star-item text-yellow-200" />
            <FaStar size={16} className="mb-1 star-item text-yellow-200" />
            <FaStar size={16} className="mb-1 star-item text-yellow-200" />
            {title}
          </div>
          <div className="w-[10%] flex justify-end">
            <BsFillBookmarkStarFill size={24} color="orange" />
          </div>
        </div>

        <div className="my-2 flex items-center justify-between gap-2">
          <span className="flex-3 overflow-hidden whitespace-nowrap text-ellipsis font-bold text-green-600">
            {attributes?.price}
          </span>
          <span className="flex-1">{attributes?.acreage}</span>
          <span className="flex-3 overflow-hidden whitespace-nowrap text-ellipsis">{`${
            address.split(",")[address.split(",").length - 2]
          }, ${address.split(",")[address.split(",").length - 1]}`}</span>
        </div>

        <p className="text-gray-500 w-full h-[70px] text-ellipsis overflow-hidden">{description}</p>

        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-1 items-center">
            <img
              className="w-[30px] h-[30px] object-cover rounded-full"
              alt="avatar"
              src="https://scontent.fdad1-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFyqNIPBXQay9JOdc2h45i5so2H55p0AlGyjYfnmnQCUVI04dwAEuSqkLZEHliRvty4IGDd3T5_idZ1bKHNgB_A&_nc_ohc=3TYpdwQPWYkQ7kNvgEcvQl-&_nc_ht=scontent.fdad1-2.fna&oh=00_AYD076ixdSKO5ID1IRcMDVHu3tpD5uIc9a9epBuIXIyhFQ&oe=6665C278"
            />
            <p>{user?.name}</p>
          </div>
          <div className="flex items-center gap-1">
            <button className="bg-blue-700 text-white p-1 rounded-md">{`Gọi ${user.phone}`}</button>
            <button className="text-blue-700 border border-blue-700 rounded-md p-1">
              Nhắn Zalo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Item);
