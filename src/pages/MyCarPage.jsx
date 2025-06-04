import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import MyCarsTr from "../components/MyCarsTr";

const MyCarPage = () => {
  const [myCars, setMyCars] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  useEffect(() => {
    axiosSecure
      .get(`${import.meta.env.VITE_root_api_url}/my-cars?email=${user.email}`)
      .then((res) => setMyCars(res.data));
  }, [user, axiosSecure]);

  // update ui
  const handleUpdateUi = (updateCar) => {
    setMyCars((prevCars) =>
      prevCars.map((car) => (car._id === updateCar._id ? updateCar : car))
    );
  };

  return (
    <div className="pt-12 pb-40">
      <h1 className="text-2xl md:text-3xl font-bold md:font-semibold mb-6">
        My Cars
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Modal</th>
              <th>Price/day</th>
              <th>Avaibality</th>
              <th>BookingCount</th>
              <th>Data added</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myCars.map((car) => (
              <MyCarsTr
                key={car._id}
                car={car}
                handleUpdateUi={handleUpdateUi}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCarPage;
