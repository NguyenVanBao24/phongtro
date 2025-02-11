import { actionType } from "./actionType";
import { apiLogin, apiRegister } from "../../services/auth";

export const register = (payload) => async (dispatch) => {
  try {
    const response = await apiRegister(payload);
    console.log("7 auth action", response);
    if (response?.data.err === 0) {
      dispatch({
        type: actionType.REGISTER_SUCCESS,
        data: response.data.token,
      });
    } else {
      dispatch({
        type: actionType.REGISTER_FAIL,
        data: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionType.REGISTER_FAIL,
      data: null,
    });
  }
};

export const login = (payload) => async (dispatch) => {
  try {
    const response = await apiLogin(payload);
    console.log("70 auth action", response);
    if (response?.data.err === 0) {
      dispatch({
        type: actionType.LOGIN_SUCCESS,
        data: response.data.token,
      });
    } else {
      dispatch({
        type: actionType.LOGIN_FAIL,
        data: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionType.LOGIN_FAIL,
      data: null,
    });
  }
};

export const logout = () => ({ type: actionType.LOGOUT });
