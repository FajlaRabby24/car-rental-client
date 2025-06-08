import { differenceInDays, format } from "date-fns";
import { useState } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
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

const BookingUpdateDiolog = ({
  isModalOpen,
  setIsModalOpen,
  car,
  handleUpdateUi,
}) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [startDateState, setStartDateState] = useState("");
  const [endDateState, setEndDateState] = useState("");
  const [totalDays, setTotalDays] = useState(0);

  const { _id, perdayPrice, startDate, endDate, totalPrice, ...rest } = car;

  function closeModal() {
    setIsModalOpen(false);
  }
  // handle  update booking
  const handleUpdateBooking = (e) => {
    e.preventDefault();
    const updateBooking = {
      startDate: startDateState,
      endDate: endDateState,
      totalPrice: totalDays * perdayPrice,
    };

    const updatedUiObj = {
      _id,
      perdayPrice,
      ...rest,
      ...updateBooking,
    };

    // axios api
    axiosSecure
      .patch(
        `${import.meta.env.VITE_root_api_url}/update-booking/${_id}?email=${
          user.email
        }`,
        updateBooking
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Your booking updated successfully!");
          handleUpdateUi(updatedUiObj);
          closeModal();
        }
      });
  };

  // calculate total booking price
  const handleCalculateBookingPrice = (type, value) => {
    const parsedDate = new Date(value);
    const formatted = format(parsedDate, "yyyy-MM-dd hh:mm a");

    if (type === "start") {
      setStartDateState(formatted); // raw value
      if (endDateState) {
        const days = differenceInDays(new Date(endDateState), parsedDate);
        setTotalDays(days > 0 ? days : 0);
      }
    } else {
      setEndDateState(formatted);
      if (startDateState) {
        const days = differenceInDays(parsedDate, new Date(startDateState));
        setTotalDays(days > 0 ? days : 0);
      }
    }
  };

  return (
    <Modal isOpen={isModalOpen} style={customStyles} className={""}>
      <div className="bg-base-100 px-6 py-3">
        <h1 className="text-lg  font-semibold ">Modify Booking dates</h1>
        <form onSubmit={handleUpdateBooking}>
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
            Total cost: {totalDays * perdayPrice}
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
              Confirm
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default BookingUpdateDiolog;
