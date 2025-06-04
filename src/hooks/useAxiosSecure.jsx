import axios from "axios";
import React from "react";
import useAuth from "./useAuth";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_root_api_url,
});

const useAxiosSecure = () => {
  const { user, signOutUser } = useAuth();

  // request
  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  //   response
  axiosInstance.interceptors.response.use(
    (res) => res,
    (err) => {
      console.log(err);
      if (err.status === 401 || err.status === 403) {
        signOutUser()
          .then(() => {
            toast.success("Sign out successfully!");
          })
          .catch(() => {
            toast.error("Something wrong! Please try again?");
          });
      }
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
