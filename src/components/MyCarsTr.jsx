import { useState } from "react";
import { ImCross } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

import { FaCheckSquare, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure";
import CarUpdateDiolog from "./CarUpdateDiolog";

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
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your car has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            toast.error("There was an error! Please try again!");
          });
      }
    });
  };
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
      <td className="space-y-1 space-x-2">
        <button
          className="btn btn-info p-2"
          onClick={() => setIsModalOpen(true)}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Update car"
        >
          <FaEdit size={20} className="white" />
        </button>
        <button
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Delete car"
          className="btn btn-error p-2"
          onClick={() => handleDeleteCar(_id)}
        >
          <MdDelete size={20} />
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
