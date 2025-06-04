import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";

import { FaCheckSquare, FaEdit } from "react-icons/fa";
import CarUpdateDiolog from "./CarUpdateDiolog";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const MyCarsTr = ({ car, handleUpdateUi, handleUpdateUiAfterCarDeleted }) => {
  const axiosSecure = useAxiosSecure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { _id, image, model, bookingCount, rentalPrice, availability, date } =
    car;

  const handleDeleteCar = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleUpdateUiAfterCarDeleted(id);
        // axios api
        axiosSecure
          .delete(`${import.meta.env.VITE_root_api_url}/delete-car/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount) {
              toast.success("Car deleted successfully!");
            }
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your car has been deleted.",
          icon: "success",
        });
      }
    });
  };
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
        <button className="btn p-2" onClick={() => handleDeleteCar(_id)}>
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
