import API from "./api";

export const createOrder = async (data) => {
  return API.post("/orders", data);
};