import { format } from "date-fns";
import React from "react";

const useTime = () => {
  const currentTime = format(new Date(), "p");
  return currentTime;
};

export default useTime;
