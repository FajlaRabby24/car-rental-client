import React from "react";
import { format } from "date-fns";

const useDate = () => {
  const currentDate = format(new Date(), "P");
  return currentDate;
};

export default useDate;
