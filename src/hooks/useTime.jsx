import { format } from "date-fns";

const useTime = () => {
  const currentTime = format(new Date(), "p");
  return currentTime;
};

export default useTime;
