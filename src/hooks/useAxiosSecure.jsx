import axios from "axios";
import { toast } from "react-toastify";
import useAuth from "./useAuth";

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
