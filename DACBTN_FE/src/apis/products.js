import axiosService from "./../Commons/axiosService";
import { API_ENDPOINT } from "./../constants/index";
import qs from "query-string";

const url = "products";

export const getProducts = (params = {}) => {
  let queryParams = "";
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};

export const getProduct = (id = "") => {
  return axiosService.get(`${API_ENDPOINT}/${url}/${id}`);
};
