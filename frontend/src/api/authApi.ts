import axiosInstance from "./axiosInstance";

export const signUp = async (name: string, email: string, password: string) => {
  const response = await axiosInstance.post("/signup", { name, email, password });
  return response.data;
};

export const signIn = async (email: string, password: string) => {
  const response = await axiosInstance.post("/signin", { email, password });
  return response.data;
};
