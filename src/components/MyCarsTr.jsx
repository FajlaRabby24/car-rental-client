import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { MdDelete } from "react-icons/md";

import { FaCheckSquare, FaEdit } from "react-icons/fa";
import CarUpdateDiolog from "./CarUpdateDiolog";

const MyCarsTr = ({ car, handleUpdateUi }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { image, model, bookingCount, rentalPrice, availability, date } = car;
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
        <p>${rentalPrice}</p>
      </td>
      <td>
        {availability === `available` ? (
          <FaCheckSquare size={20} color="#00d26a" />
        ) : (
          <ImCross size={20} color="red" />
        )}
      </td>
      <td>
        <p>{bookingCount}</p>
      </td>
      <td>{date}</td>
      <td className="space-x-2">
        <button className="btn p-2" onClick={() => setIsModalOpen(true)}>
          <FaEdit size={20} />
        </button>
        <button className="btn p-2">
          <MdDelete size={20} color="" />
        </button>
      </td>
      {isModalOpen && (
        <CarUpdateDiolog
          isModalOpen={isModalOpen}
          car={car}
          handleUpdateUi={handleUpdateUi}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </tr>
  );
};

export default MyCarsTr;
