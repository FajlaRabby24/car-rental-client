import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import BookingStatusUpdateDiolog from "./BookingStatusUpdateDiolog";
import BookingUpdateDiolog from "./BookingUpdateDiolog";

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
    <tr className="hover:bg-base-200">
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
        <p>${totalPrice}</p>
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
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Modify booking"
          onClick={() => setIsModalOpen(true)}
        >
          <SlCalender color="white" size={20} />
          Modify
        </button>
        <button
          className="btn p-2 btn-error"
          disabled={status !== "confirmed"}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Cancel booking"
          onClick={() => setIsDeleteModalOpen(true)}
        >
          <MdDelete size={20} />
          Cancel
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
