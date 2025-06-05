import React, { useState } from "react";
import { FaCar } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdOutlineRateReview } from "react-icons/md";
import { useLoaderData, useNavigate } from "react-router";
import BookingDiolog from "../components/BookingDiolog";
import useAuth from "../hooks/useAuth";

const CarDetailsPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const car = useLoaderData();
  const [carDetails, setCarDetails] = useState(car);

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
    owner,
  } = carDetails;

  // update ui
  const handleUpdateCarDetailsUi = (id) => {
    if (id) {
      const updatedCarDetails = carDetails;
      updatedCarDetails.bookingCount += 1;
      setCarDetails(updatedCarDetails);
    }
  };

  const { user } = useAuth();
  const isOwnCar = user.email === owner;

  return (
    <div className="px-3 pb-40  pt-10 ">
      <button
        onClick={() => navigate(-1)}
        className="btn btn-warning mb-4 gap-0 flex justify-start"
      >
        <MdKeyboardArrowLeft size={15} /> Back
      </button>
      <div className=" border border-[#cccccca0] rounded-lg  flex flex-col md:flex-row md:gap-2 8">
        <figure className="lg:w-1/3 ">
          <img
            src={image}
            className="md:max-w-[354px]  lg:min-w-full w-full  rounded-lg h-full l:max-h-[350px] md:min-w-[354px] min-h-[350px] object-cover "
            alt="recipe image"
          />
        </figure>
        <div className="lg:w-2/3 px-2 pt-5 pb-5 md:py-5  lg:pr-5 space-y-1 ">
          <div className="flex items-center flex-wrap gap-3 lg:gap-10">
            <h1 className="text-2xl font-semibold">{model}</h1>{" "}
            <p
              data-tooltip-id="my-tooltip"
              data-tooltip-content={`${
                bookingCount === 0 ? "No" : bookingCount
              } people booking in this car`}
              className="flex items-center gap-1"
            >
              <FaCar size={20} />
              <span>{bookingCount === 0 ? "No" : bookingCount}</span>
              <span> people booking this car</span>
            </p>
          </div>
          <p className="font-semibold">
            Price Per Day:{" "}
            <span className="font-normal text-[#787777]">${rentalPrice}</span>
          </p>
          <p className="font-semibold">
            Location:{" "}
            <span className="font-normal text-[#787777]">{location}</span>
          </p>
          <p className="font-semibold">
            Availability:{" "}
            <span className="font-normal text-[#787777]">
              {availability === "available" ? "✅Yes" : "❌No"}
            </span>
          </p>
          <p className="font-semibold">
            Description:{" "}
            <span className="font-normal text-[#787777]">{description}</span>
          </p>
          <p className="font-semibold">Fetures:</p>
          <ul className="pl-4 list-disc">
            {feturesToArr.map((feture, index) => (
              <li key={index}>{feture}</li>
            ))}
          </ul>

          <div className="flex items-center mt-4 gap-2">
            <button
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Like this recipe"
              disabled={isOwnCar}
              onClick={() => setIsModalOpen(true)}
              className="btn btn-error btn-outline"
            >
              <FaCar size={20} /> Book now
            </button>

            {isModalOpen && (
              <BookingDiolog
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                handleUpdateCarDetailsUi={handleUpdateCarDetailsUi}
                car={car}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
