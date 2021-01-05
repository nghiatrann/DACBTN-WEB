import axiosService from "./../Commons/axiosService";
import { API_ENDPOINT } from "./../constants/index";
import qs from "query-string";

const url = "users";

export const postUser = (body = {}) => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, body);
};

export const getUser = (params = {}) => {
  let queryParams = "";
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};

export const putUser = (id = "", body = {}) => {
  return axiosService.put(`${API_ENDPOINT}/${url}/${id}`, body);
};
