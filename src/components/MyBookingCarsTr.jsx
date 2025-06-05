import React from "react";
import { useState } from "react";
import { FaCheckSquare, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import BookingUpdateDiolog from "./BookingUpdateDiolog";

const MyBookingCarsTr = ({ car, handleUpdateUi }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

      <td className="space-x-2">
        <button className="btn p-2" onClick={() => setIsModalOpen(true)}>
          <FaEdit size={20} />
        </button>
        <button className="btn p-2">
          <MdDelete size={20} color="" />
        </button>
      </td>
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
