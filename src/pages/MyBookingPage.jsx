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
        setMyBookings(res.data);
      });
  }, [axiosSecure, user]);

  // handle update ui after booking
  const handleUpdateUi = (updatedCar) => {
    setMyBookings((prevCars) =>
      prevCars.map((car) => (car._id === updatedCar._id ? updatedCar : car))
    );
  };

  // handle Update Ui After Canceled
  const handleUpdateUiAfterCanceled = (updateBooking) => {
    setMyBookings((prev) =>
      prev.map((book) =>
        book._id === updateBooking._id ? updateBooking : book
      )
    );
  };

  // handlesort
  const handleSort = (e) => {
    const selected = e.target.value.toLowerCase();
    let setCars;
    // console.log(myBookings);
    if (selected === "low") {
      setCars = [...myBookings].sort((a, b) => a.totalPrice - b.totalPrice);
    } else {
      setCars = [...myBookings].sort((a, b) => b.totalPrice - a.totalPrice);
    }

    setMyBookings(setCars);
  };

  return (
    <div className="pt-12 pb-20">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold md:font-semibold mb-6">
          My Bookings
        </h1>
        {/* sorting option */}
        <select
          name="sort"
          onChange={handleSort}
          defaultValue="Sort by price"
          className="select w-fit"
        >
          <option disabled={true}>Sort by price</option>
          <option value={"low"}>Lowest first</option>
          <option value={"high"}>Highest first</option>
        </select>
      </div>
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
                  handleUpdateUiAfterCanceled={handleUpdateUiAfterCanceled}
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
