import { differenceInDays, differenceInMilliseconds, format } from "date-fns";
import { useState } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";
import useTime from "../hooks/useTime";
import useDate from "../hooks/useDate";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "400px",
    padding: "0",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const BookingDiolog = ({
  isModalOpen,
  setIsModalOpen,
  car,
  handleUpdateCarDetailsUi,
}) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalDays, setTotalDays] = useState(0);
  const currentTime = useTime();
  const currentDate = useDate();
  const {
    _id,
    model,
    bookingCount,
    availability,
    location,
    rentalPrice,
    image,
    feturesToArr,
    description,
  } = car;

  function closeModal() {
    setIsModalOpen(false);
  }
  // handle booking
  const handleBooking = (e) => {
    e.preventDefault();
    const newBooking = {
      email: user.email,
      bookingDate: `${currentDate} ${currentTime}`,
      startDate,
      endDate,
      totalPrice: totalDays * rentalPrice,
      image,
      model,
      status: "confirmed",
    };

    axiosSecure
      .post(
        `${import.meta.env.VITE_root_api_url}/booking/${_id}?email=${
          user.email
        }`,
        newBooking
      )
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Your booking added successfully!");
          handleUpdateCarDetailsUi(_id);
          closeModal();
        }
      });
  };

  // calculate total booking price

  const handleCalculateBookingPrice = (type, value) => {
    const parsedDate = new Date(value);
    const formatted = format(parsedDate, "yyyy-MM-dd hh:mm a");

    if (type === "start") {
      setStartDate(formatted); // raw value
      if (endDate) {
        const days = differenceInDays(new Date(endDate), parsedDate);
        setTotalDays(days > 0 ? days : 0);
      }
    } else {
      setEndDate(formatted);
      if (startDate) {
        const days = differenceInDays(parsedDate, new Date(startDate));
        setTotalDays(days > 0 ? days : 0);
      }
    }
  };

  return (
    <Modal
      isOpen={isModalOpen}
      // onRequestClose={closeModal}
      style={customStyles}
      className={""}
    >
      <div className="bg-base-100 px-6 py-3">
        <div className="space-y-1">
          <h1 className="text-lg  font-semibold ">Booking confirmation</h1>
          <h1 className=" font-">You are booking: {model}</h1>
          <p className="font-">
            Price Per Day:{" "}
            <span className="font-normal text-[#010101]">${rentalPrice}</span>
          </p>
          <p className="font-">
            Availability:{" "}
            <span className="font-normal text-[#000000]">
              {availability === "available" ? "✅Yes" : "❌No"}
            </span>
          </p>
        </div>
        <form onSubmit={handleBooking}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Start date:</legend>
            <input
              type="datetime-local"
              name="startDate"
              required
              onChange={(e) =>
                handleCalculateBookingPrice("start", e.target.value)
              }
              className="input w-full"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">End date:</legend>
            <input
              type="datetime-local"
              name="endDate"
              required
              onChange={(e) =>
                handleCalculateBookingPrice("end", e.target.value)
              }
              className="input w-full"
            />
          </fieldset>
          <h1 className="mt-1 font-semibold ">
            Total cost: {totalDays * rentalPrice}
          </h1>
          <div className="flex gap-2 pt-5 justify-end">
            <button
              onClick={closeModal}
              type="button"
              className="btn btn-warning btn-outline "
            >
              Cancel
            </button>
            <button type="submit" className="btn  btn-success ">
              Add booking
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default BookingDiolog;
