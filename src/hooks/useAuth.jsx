import { use } from "react";
import { AuthContext } from "../store/Auth/context";

const useAuth = () => {
  const authValue = use(AuthContext);
  return authValue;
};

export default useAuth;
