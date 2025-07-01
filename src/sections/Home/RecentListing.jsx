import { useQuery } from "@tanstack/react-query";
import { memo } from "react";
import Loading from "../../components/Loading";
import RecentCarCard from "../../components/RecentCarCard";

const RecentListing = () => {
  const { data: recentCars, isLoading } = useQuery({
    queryKey: ["recent"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_root_api_url}/recent-list`).then((res) =>
        res.json()
      ),
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="px-2  ">
      <h1 className="font-semibold text-4xl mb-8">Recent List</h1>
      {recentCars.length ? (
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}
        >
          {recentCars.map((car) => (
            <RecentCarCard car={car} key={car._id} />
          ))}
        </div>
      ) : (
        <NoCars>
          <h1 className="text-2xl font-semibold text-center mb-1">
            Recently have no cars!
          </h1>
          <p className="font-semibold">
            Please add a car from{" "}
            <Link to={"/add-cars"} className="text-warning underline">
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
