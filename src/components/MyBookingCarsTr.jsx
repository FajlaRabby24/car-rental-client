import React from "react";
import { useState } from "react";
import { FaCheckSquare, FaEdit } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdDelete } from "react-icons/md";
import BookingUpdateDiolog from "./BookingUpdateDiolog";
import BookingStatusUpdateDiolog from "./BookingStatusUpdateDiolog";

const MyBookingCarsTr = ({
  car,
  handleUpdateUi,
  handleUpdateUiAfterCanceled,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const {
    bookingDate,
    email,
    endDate,
    image,
    model,
    startDate,
    status,
    totalPrice,
    _id,
  } = car;

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-20 w-20">
              <img src={image} alt="car image" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <p>{model}</p>
      </td>
      <td>
        <p>{bookingDate}</p>
      </td>
      <td>
        <p>{startDate}</p>
      </td>
      <td>
        <p>{endDate}</p>
      </td>
      <td>
        <p>{totalPrice}</p>
      </td>
      <td>
        <p>
          {status === "confirmed" ? (
            <span className="bg-green-100 text-green-800 font-semibold px-2 py-1 rounded-md">
              Confirmed
            </span>
          ) : (
            <span className="bg-red-100 text-red-800 font-semibold px-2 py-1 rounded-md">
              Canceled
            </span>
          )}
        </p>
      </td>

      <td className="space-y-1 space-x-2">
        <button
          className="btn p-2 btn-info"
          disabled={status !== "confirmed"}
          onClick={() => setIsModalOpen(true)}
        >
          <SlCalender color="white" size={20} />
        </button>
        <button
          className="btn p-2 btn-error"
          disabled={status !== "confirmed"}
          onClick={() => setIsDeleteModalOpen(true)}
        >
          <MdDelete size={20} color="" />
        </button>
      </td>
      {isDeleteModalOpen && (
        <BookingStatusUpdateDiolog
          car={car}
          isDeleteModalOpen={isDeleteModalOpen}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          handleUpdateUiAfterCanceled={handleUpdateUiAfterCanceled}
        />
      )}

      {isModalOpen && (
        <BookingUpdateDiolog
          isModalOpen={isModalOpen}
          car={car}
          handleUpdateUi={handleUpdateUi}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </tr>
  );
};

export default MyBookingCarsTr;
