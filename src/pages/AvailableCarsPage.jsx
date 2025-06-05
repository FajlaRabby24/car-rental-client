import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router";
import AvvailbleCarCard from "../components/AvvailbleCarCard";

const AvailableCarsPage = () => {
  const initialAvailableCars = useLoaderData();
  const [availableCars, setAvailableCars] = useState(initialAvailableCars);
  const [isLayoutGrid, setIsLayoutGrid] = useState(true);

  const handleSort = (e) => {
    const selected = e.target.value.toLowerCase();
    console.log(selected);
    let setCars;

    if (selected === "low") {
      setCars = [...availableCars].sort(
        (a, b) => a.rentalPrice - b.rentalPrice
      );
    } else {
      setCars = [...availableCars].sort(
        (a, b) => b.rentalPrice - a.rentalPrice
      );
    }

    setAvailableCars(setCars);
  };
  return (
    <div className="pt-12 pb-40">
      <div className="flex items-center justify-between mb-3">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>

        {/* sort option  */}
        <div className="flex items-center gap-3">
          <select
            name="sort"
            onChange={handleSort}
            defaultValue="Sort by price"
            className="select"
          >
            <option disabled={true}>Sort by price</option>
            <option value={"low"}>Lowest first</option>
            <option value={"high"}>Highest first</option>
          </select>
          {/* toggle to view  */}
          <button
            onClick={() => setIsLayoutGrid((prev) => !prev)}
            className="btn"
          >
            Toggle to {isLayoutGrid ? "List" : "Grid"}
          </button>
        </div>
      </div>
      {availableCars.length ? (
        <div
          className={`grid grid-cols-1 ${
            isLayoutGrid && `md:grid-cols-2 lg:grid-cols-3`
          } gap-4`}
        >
          {availableCars.map((car) => (
            <AvvailbleCarCard
              isLayoutGrid={isLayoutGrid}
              car={car}
              key={car._id}
            />
          ))}
        </div>
      ) : (
        <NoCars>
          <h1 className="text-2xl font-semibold text-center mb-1">
            You have no Cars!
          </h1>
          <p className="font-semibold">
            Please add a car from{" "}
            <Link to={"/add-cars"} className="text-warning hover:underline">
              add-cars
            </Link>{" "}
            page
          </p>
        </NoCars>
      )}
    </div>
  );
};

export default AvailableCarsPage;
