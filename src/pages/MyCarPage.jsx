import { useEffect, useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import MyCarsTr from "../components/MyCarsTr";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import NoCars from "../sections/My cars/NoCars";

const MyCarPage = () => {
  const [myCars, setMyCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  useEffect(() => {
    axiosSecure
      .get(`${import.meta.env.VITE_root_api_url}/my-cars?email=${user.email}`)
      .then((res) => {
        setMyCars(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("There was an error! Please try again!");
      });
  }, [user, axiosSecure]);

  // update ui
  const handleUpdateUi = (updateCar) => {
    setMyCars((prevCars) =>
      prevCars.map((car) => (car._id === updateCar._id ? updateCar : car))
    );
  };

  // update ui after car deleted
  const handleUpdateUiAfterCarDeleted = (id) => {
    setMyCars((prev) => prev.filter((car) => car._id !== id));
  };

  // handlesort
  const handleSort = (e) => {
    const selected = e.target.value.toLowerCase();
    let setCars;
    if (selected === "low") {
      setCars = [...myCars].sort((a, b) => a.rentalPrice - b.rentalPrice);
    } else {
      setCars = [...myCars].sort((a, b) => b.rentalPrice - a.rentalPrice);
    }

    setMyCars(setCars);
  };

  return (
    <div className="pt-12 pb-40 px-2">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold md:font-semibold mb-6">
          My Cars
        </h1>
        {/* sorting option */}
        <select
          name="sort"
          onChange={handleSort}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Sory by price"
          defaultValue="Sort by price"
          className="select w-fit"
        >
          <option disabled={true}>Sort by price</option>
          <option value={"low"}>Lowest first</option>
          <option value={"high"}>Highest first</option>
        </select>
      </div>
      {loading ? (
        <Loading />
      ) : myCars.length ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-base-300 rounded ">
                <th>Image</th>
                <th>Modal</th>
                <th>Price/day</th>
                <th>Avaibality</th>
                <th>BookingCount</th>
                <th>Data added</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myCars.map((car) => (
                <MyCarsTr
                  key={car._id}
                  car={car}
                  handleUpdateUi={handleUpdateUi}
                  handleUpdateUiAfterCarDeleted={handleUpdateUiAfterCarDeleted}
                />
              ))}
            </tbody>
          </table>
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

export default MyCarPage;
