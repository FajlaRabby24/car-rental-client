import { memo, use, useEffect, useState } from "react";
import RecentCarCard from "../../components/RecentCarCard";
import NoCars from "../My cars/NoCars";
import { Link } from "react-router";
import Loading from "../../components/Loading";

const RecentListing = () => {
  const [recentCars, setRecentCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_root_api_url}/recent-list`)
      .then((res) => res.json())
      .then((data) => {
        setRecentCars(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="px-2  ">
      <h1 className="font-semibold text-4xl mb-8">Recent List</h1>
      {loading ? (
        <Loading />
      ) : recentCars.length ? (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}>
          {recentCars.map((car) => (
            <RecentCarCard car={car} key={car._id} />
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

export default memo(RecentListing);
