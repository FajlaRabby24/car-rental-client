import React from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router";
import AvvailbleCarCard from "../components/AvvailbleCarCard";
import { useEffect } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import NoCars from "../sections/My cars/NoCars";

const AvailableCarsPage = () => {
  const initialAvailableCars = useLoaderData();
  const [availableCars, setAvailableCars] = useState(initialAvailableCars);
  const [isLayoutGrid, setIsLayoutGrid] = useState(true);

  const [query, setQuery] = useState("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (!query.trim()) {
        setAvailableCars(initialAvailableCars);
        return;
      }

      fetch(`${import.meta.env.VITE_root_api_url}/car?search=${query}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length) {
            setAvailableCars(data);
          } else {
            setAvailableCars([]);
          }
        })
        .catch((err) => {
          setAvailableCars([]);
        });
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query, initialAvailableCars]);

  // handlesort
  const handleSort = (e) => {
    const selected = e.target.value.toLowerCase();
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
    <div className="pt-5 md:pt-12 pb-40 px-2">
      <div className="flex items-center justify-between gap-3 mb-3">
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
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search something.."
          />
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
            className="btn hidden md:block"
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
            There is no car with this name{" "}
            <span className="text-yellow-500 underline">{query}</span>
          </h1>
          <p className="font-semibold text-center">
            Please search with another name.
          </p>
        </NoCars>
      )}
    </div>
  );
};

export default AvailableCarsPage;
