import React, { useCallback } from "react";
import logo from "../../assets/logo-header.png";
import { Button } from "../../components";
import icon from "../../ultils/icon";
import { useNavigate, Link } from "react-router-dom";
import { path } from "../../ultils/constants";
import { useSelector } from "react-redux";

const { CiCirclePlus } = icon;

function Header() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth);
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } });
  }, []);

  return (
    <div className="w-8/12 flex items-center justify-between">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="w-[240px] h-[70px] object-contain"></img>
      </Link>
      <div className="flex items-center gap-1">
        <small>{isLoggedIn ? "Tên !!!" : "Phòng trọ 123 xin chào"}</small>
        <Button
          text={"Đăng nhập"}
          textColor="text-white"
          bgColor="bg-[#3961fb]"
          onClick={() => goLogin(true)}
        ></Button>
        <Button
          text={"Đăng ký"}
          textColor="text-white"
          bgColor="bg-[#3961fb]"
          onClick={() => goLogin(false)}
        ></Button>
        <Button
          text={"Đăng tin mới"}
          textColor="text-white"
          bgColor="bg-secondary2"
          IcAfter={CiCirclePlus}
        ></Button>
      </div>
    </div>
  );
}

export default Header;
