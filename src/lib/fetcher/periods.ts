import axios from "axios";

export const getPeriods = async (url: string) => {
  return axios.get(url).then((response) => response.data);
};
