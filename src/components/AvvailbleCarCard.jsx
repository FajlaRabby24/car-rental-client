import React from "react";
import { FaCar, FaCarSide, FaCheckSquare } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";

const AvvailbleCarCard = ({ car, isLayoutGrid }) => {
  const { _id, model, bookingCount, location, rentalPrice, image, owner } = car;

  return (
    <div
      className={`flex ${
        isLayoutGrid ? "flex-col" : "flex-row"
      }  border border-[#ddd] rounded-xl`}
    >
      <figure className="rounded-t-xl">
        <img
          className={`max-h-[277px] min-w-[415px] rounded-xl w-full object-cover`}
          src={image}
          alt="car image"
        />
      </figure>
      <div className="px-4 py-2 space-y-1">
        <h2 className="card-title">
          <FaCar size={30} />{" "}
          <span className="text-2xl font-semibold">{model}</span>
        </h2>
        <p className="flex items-center gap-1">
          <MdOutlineAttachMoney size={25} />{" "}
          <span className="text-[#6a6a6a] font-semibold">
            Rental price: {rentalPrice}/day
          </span>
        </p>
        <p className="flex items-center gap-1">
          <IoLocationOutline size={25} />{" "}
          <span className="text-[#6a6a6a] font-semibold">
            Location: {location}
          </span>
        </p>
        <p className="flex items-center gap-1">
          <FaCheckSquare size={25} color="#00d26a" />{" "}
          <span className="text-[#6a6a6a] font-semibold">Available</span>
        </p>
        <p className="flex items-center gap-1">
          <FaCarSide size={25} />{" "}
          <span className="text-[#6a6a6a] font-semibold">
            Booking: {bookingCount}
          </span>
        </p>
        <div
          className={`card-actions ${isLayoutGrid ? "justify-end " : "mt-3"}`}
        >
          <Link to={`/car/${_id}`}>
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AvvailbleCarCard;
