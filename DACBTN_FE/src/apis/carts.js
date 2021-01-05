import axiosService from "../Commons/axiosService";
import { API_ENDPOINT } from "../constants/index";
import qs from "query-string";

const url = "carts";

export const getCarts = (params = {}) => {
  // console.log(params)
  let queryParams = "";
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }

  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};

export const addCart = (payload = {}) => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, payload);
};

export const updateCart = (id = "", payload = 1) => {
  return axiosService.put(`${API_ENDPOINT}/${url}/${id}`, {
   ...payload,
  });
};

export const deletCart=(id="")=>{
  return axiosService.delete(`${API_ENDPOINT}/${url}/${id}`);
}
