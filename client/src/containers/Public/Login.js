import React, { useState, useEffect, startTransition } from "react";
import { Button, InputForm } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import * as actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, msg, update } = useSelector((state) => state.auth);
  const [isRegister, setIsRegister] = useState(location?.state?.flag);
  const [invalidFields, setInvalidFields] = useState([]);
  const [payload, setpayload] = useState({
    name: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    setIsRegister(!location?.state?.flag);
  }, [location?.state?.flag]);

  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn]);

  useEffect(() => {
    msg && Swal.fire("Opps", msg, "error");
  }, [update]);

  const handleChangeForm = () => {
    setIsRegister(!isRegister);
    setpayload({ name: "", phone: "", password: "" });
    // setInvalidFields([]);
  };

  const handleSubmit = async () => {
    console.log("update", update);
    let invalids = validate(payload);
    console.log("invalids", invalids);
    console.log("invalidFields", invalidFields);
    console.log("msg", msg);
    isRegister
      ? dispatch(actions.register(payload))
      : dispatch(actions.login(payload));
  };

  const validate = (payload) => {
    let invalids = 0;
    let fields = Object.entries(payload);
    fields.forEach((item) => {
      if (item[1] === "") {
        setInvalidFields((prev) => [
          ...prev,
          {
            name: item[0],
            message: "Bạn không được bỏ trống trường này.",
          },
        ]);
        invalids++;
      }
    });
    fields.forEach((item) => {
      switch (item[0]) {
        case "password":
          if (item[1].length < 6) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: "Mật khẩu phải có tối thiểu 6 kí tự.",
              },
            ]);
            invalids++;
          }
          break;
        case "phone":
          if (!+item[1]) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: "Số điện thoại không hợp lệ.",
              },
            ]);
            invalids++;
          }
          break;

        default:
          break;
      }
    });
    return invalids;
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm ">
        <h3 className="font-semibold text-2xl mb-3">
          {isRegister ? "ĐĂNG KÍ" : "ĐĂNG NHẬP"}
        </h3>
        <div className="w-full flex flex-col gap-5">
          {isRegister && (
            <InputForm
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
              label={"HỌ TÊN"}
              value={payload.name}
              setValue={setpayload}
              keyObject={"name"}
            />
          )}
          <InputForm
            setInvalidFields={setInvalidFields}
            invalidFields={invalidFields}
            label={"SỐ ĐIỆN THOẠI"}
            value={payload.phone}
            setValue={setpayload}
            keyObject={"phone"}
          />
          <InputForm
            setInvalidFields={setInvalidFields}
            invalidFields={invalidFields}
            label={"MẬT KHẨU"}
            value={payload.password}
            setValue={setpayload}
            keyObject={"password"}
            type={"password"}
          />
          <Button
            text={isRegister ? "Đăng kí" : "Đăng nhập"}
            bgColor={"bg-secondary1"}
            textColor={"text-white"}
            fullWidth
            onClick={handleSubmit}
          />
        </div>

        <div className="mt-7 flex items-center justify-between">
          {isRegister ? (
            <small>
              Bạn đã có tài khoản?{" "}
              <span
                className="text-[blue] hover:text-[red] cursor-pointer"
                onClick={handleChangeForm}
              >
                Đăng nhập ngay
              </span>
            </small>
          ) : (
            <>
              <small className="text-[blue] hover:text-[red] cursor-pointer">
                Bạn quên mật khẩu?
              </small>
              <small
                className="text-[blue] hover:text-[red] cursor-pointer"
                onClick={handleChangeForm}
              >
                Tạo tài khoản mới
              </small>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
