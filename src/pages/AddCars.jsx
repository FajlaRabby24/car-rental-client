import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useDate from "../hooks/useDate";

const AddCars = () => {
  const axiosSecure = useAxiosSecure();
  const currentDate = useDate();
  const { user } = useAuth();

  const handleAddCar = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { fetures, rentalPrice, ...rest } = Object.fromEntries(
      formData.entries()
    );
    const feturesToArr = fetures.split(",");
    rest.bookingCount = 0;
    const parseIntRentalPrice = parseInt(rentalPrice);
    const newCar = {
      ...rest,
      feturesToArr,
      rentalPrice: parseIntRentalPrice,
      date: currentDate,
      owner: user.email,
    };

    axiosSecure
      .post(
        `${import.meta.env.VITE_root_api_url}/add-car?email=${user.email}`,
        newCar
      )
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Car added successfully!");
          // form.reset()
        }
      });
  };

  return (
    <div className="pt-5 md:pt-16 px-2 pb-40">
      <h1 className="text-2xl md:text-3xl font-bold md:font-semibold text-center">
        Add Cars
      </h1>
      <p className="mt-2 mb-7  text-center max-w-4xl mx-auto">
        Easily add new rental cars with essential details like model, price,
        image, and availability to your fleet, keeping your car rental service
        organized and updated.
      </p>
      <form
        onSubmit={handleAddCar}
        className=" border border-[#cccccc9c] rounded-lg px-2 md:px-4 py-3 "
      >
        <div className="flex flex-col md:flex-row gap-5">
          <div className="bg-mber-100 md:w-1/2">
            {/* model  */}
            <legend className="fieldset-legend ">Car Model</legend>
            <input
              type="text"
              required
              name="model"
              className="input w-full"
              placeholder="Enter car model"
            />

            {/* rental price  */}
            <legend className="fieldset-legend ">Daily rental price</legend>
            <input
              type="text"
              required
              name="rentalPrice"
              className="input w-full"
              placeholder="Enter daily rental price"
            />
            {/* Vehicle Registration Number  */}
            <legend className="fieldset-legend ">
              Vehicle Registration Number
            </legend>
            <input
              type="text"
              required
              name="registrationNum"
              className="input w-full"
              placeholder="Enter Vehicle Registration Number"
            />
            {/* Features (e.g., GPS, AC, etc.)  */}
            <legend className="fieldset-legend ">
              Features (e.g., GPS, AC, etc.)
            </legend>
            <input
              type="text"
              required
              name="fetures"
              className="input w-full"
              placeholder="Enter fetures separated by commas(,)"
            />
            {/* abailability */}
            <legend className="fieldset-legend ">Availability</legend>
            <select
              name="availability"
              defaultValue="availability"
              className="select w-full"
            >
              {/* <option disabled={true}>Availability</option> */}
              <option value={"available"}>Available</option>
              <option value={"Not available"}>Not available</option>
            </select>
          </div>
          {/* cols 2 */}
          <div className="bgamber-100 md:w-1/2">
            {/* image  */}
            <legend className="fieldset-legend">Image</legend>
            <input
              type="url"
              name="image"
              required
              placeholder="https://"
              className="input w-full"
              pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
              title="Must be valid URL"
            />
            {/* location  */}
            <legend className="fieldset-legend ">Location</legend>
            <input
              type="text"
              required
              name="location"
              className="input w-full"
              placeholder="Enter location"
            />
            {/* description  */}
            <legend className="fieldset-legend mt-2">Description</legend>
            <textarea
              required
              name="description"
              className="textarea h-20 w-full resize-none "
              placeholder="write a brief description.."
            ></textarea>
          </div>
        </div>
        <button className="btn btn-block mt-5 btn-warning ">Add Car</button>
      </form>
    </div>
  );
};

export default AddCars;
