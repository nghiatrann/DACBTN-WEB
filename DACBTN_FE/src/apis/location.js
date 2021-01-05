import axiosService from "./../Commons/axiosService";
import { API_LOCATION } from "./../constants/index";
import qs from "query-string";

export const getProvinces = () => {
  return axiosService.get(`${API_LOCATION}/province`, {
    headers: {
      token: "630821db-2bfc-11eb-b36a-0e2790f48b9c",
    },
  });
};

export const getDistrict = (params = {}) => {
  let queryParams = "";
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_LOCATION}/district${queryParams}`, {
    headers: {
      token: "630821db-2bfc-11eb-b36a-0e2790f48b9c",
    },
  });
};
