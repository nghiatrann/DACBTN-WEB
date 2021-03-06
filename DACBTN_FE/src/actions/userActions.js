import Axios from "axios";
import {
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from "../contants/userContant";

export const register = (name, email, password) => async (dispatch) => {
  // dispatch({
  //   type: USER_REGISTER_REQUEST,
  //   payload: { email, password },
  // });
  try {
    const { data } = await Axios.post("/api/users/register", {
      name,
      email,
      password,
    });
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
    dispatch({
        type: USER_SIGNIN_SUCCESS,
        payload: data,
      });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {}
};
///////////
export const signin = (email, password) => async (dispatch) => {
  // dispatch({
  //   type: USER_SIGNIN_REQUEST,
  //   payload: { email, password },
  // });
  try {
    const { data } = await Axios.post("/api/users/signin", { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {}
};
////////////////
export const signout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  // localStorage.removeItem('cartItems');

  dispatch({ type: USER_SIGNOUT });
};
//////////////////////
// export const detailUser=(userId)=> async(dispatch,getState)=>{
//   dispatch({
//     type: USER_DETAIL_REQUEST,
//     payload:userId
//   })
//   const {userSignin:{userInfo}}=getState();
//   try {
//     const {data}=Axios.get(`/api/users/${userId}`,{
//       headers:{Authorization:`Bearer ${userInfo.token}`}
//     });
//     dispatch({
//       type: USER_DETAIL_SUCCESS,
//       payload:data
//     })
//   } catch (error) {
    
//   }
// }
export const detailsUser = (userId) => async (dispatch, getState) => {
  dispatch({ type: USER_DETAIL_REQUEST, payload: userId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`/api/users/${userId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: USER_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    
  }
};