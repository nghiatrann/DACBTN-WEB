import axiosService from "./../Commons/axiosService";
import { API_ENDPOINT } from "./../constants/index";

const url = "categories";

export const getCategories = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};
