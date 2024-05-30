import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { path } from "../../ultils/constants";
import { apiGetCategories } from "../../services/category";
import { formatVietnameseString } from "../../ultils/Common/formatVietnameseString";

const active =
  "hover:bg-secondary2 bg-secondary2  px-2 h-full flex items-center";
const notActive = "hover:bg-secondary2 px-2 h-full flex items-center ";

function Navigate() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await apiGetCategories();
      if (response?.data.err === 0) {
        setCategories(response.data.response);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="w-full h-[40px] bg-secondary1 flex items-center justify-center">
      <div className="w-8/12 h-full flex items-center test-sm font-medium">
        <NavLink
          to={``}
          className={({ isActive }) => (isActive ? active : notActive)}
        >
          Trang chủ
        </NavLink>
        {categories?.length > 0 &&
          categories.map((item) => (
            <div className="h-full flex items-center" key={item.code}>
              <NavLink
                to={`${formatVietnameseString(item.value)}`}
                className={({ isActive }) => (isActive ? active : notActive)}
              >
                {item.value}
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Navigate;
