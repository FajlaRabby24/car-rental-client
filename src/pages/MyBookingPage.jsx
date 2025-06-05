import React from "react";
import { useEffect } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import NoCars from "../sections/My cars/NoCars";
import { Link } from "react-router";
import MyBookingCarsTr from "../components/MyBookingCarsTr";

const MyBookingPage = () => {
  const [myBookings, setMyBookings] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(
        `${import.meta.env.VITE_root_api_url}/my-bookings?email=${user.email}`
      )
      .then((res) => {
        console.log(res.data);
        setMyBookings(res.data);
      });
  }, [axiosSecure, user]);

  // handle update ui
  const handleUpdateUi = (updatedCar) => {
    setMyBookings((prevCars) =>
      prevCars.map((car) => (car._id === updatedCar._id ? updatedCar : car))
    );
  };

  return (
    <div className="pt-16 pb-20">
      {myBookings.length ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Modal</th>
                <th>Booking Date</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Total price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myBookings.map((car) => (
                <MyBookingCarsTr
                  key={car._id}
                  car={car}
                  handleUpdateUi={handleUpdateUi}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <NoCars>
          <h1 className="text-2xl font-semibold text-center mb-1">
            You have no booking!
          </h1>
          <p className="font-semibold">
            Please add a booking from{" "}
            <Link
              to={"/available-cars"}
              className="text-warning hover:underline"
            >
              available-cars
            </Link>{" "}
            page
          </p>
        </NoCars>
      )}
    </div>
  );
};

export default MyBookingPage;
