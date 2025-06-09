import { FaArrowLeft } from "react-icons/fa";
import Modal from "react-modal";
import { toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const CarUpdateDiolog = ({
  isModalOpen,
  setIsModalOpen,
  car,
  handleUpdateUi,
}) => {
  const {
    _id,
    bookingCount,
    date,
    description,
    feturesToArr,
    image,
    location,
    model,
    owner,
    rentalPrice,
    registrationNum,
    availability,
  } = car;

  function closeModal() {
    setIsModalOpen(false);
  }

  const axiosSecure = useAxiosSecure();

  const handleUpdateCar = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { fetures, rentalPrice, ...rest } = Object.fromEntries(
      formData.entries()
    );
    const feturesToArr = fetures.split(",");
    const parseIntRentalPrice = parseInt(rentalPrice);
    const updateCar = {
      ...rest,
      feturesToArr,
      rentalPrice: parseIntRentalPrice,
      owner,
      date,
      bookingCount,
    };

    // update ui
    handleUpdateUi({ _id, ...updateCar });

    // axios api
    axiosSecure
      .put(`${import.meta.env.VITE_root_api_url}/update-car/${_id}`, updateCar)
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Car updated successfully!");
          closeModal();
          form.reset();
        }
      })
      .catch((err) => {
        toast.error("There was an error! Please try again!");
      });
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className="bg-base-100  rounded-lg w-[95vw] max-w-5xl p-4 md:p-6 overflow-y-auto max-h-[90vh]">
        <h1 className="text-2xl md:text-3xl pt-5 pb-6 font-semibold text-center">
          Update Car
        </h1>
        <form
          onSubmit={handleUpdateCar}
          className=" border border-[#cccccc9c] rounded-lg px-2 md:px-4 py-3 "
        >
          <div className="flex flex-col md:flex-row gap-5">
            <div className="bg-mber-100 md:w-1/2">
              {/* model  */}
              <legend className="fieldset-legend ">Car Model</legend>
              <input
                type="text"
                defaultValue={model}
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
                defaultValue={rentalPrice}
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
                defaultValue={registrationNum}
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
                defaultValue={feturesToArr
                  .map((item) => item.trim())
                  .join(", ")}
                name="fetures"
                className="input w-full"
                placeholder="Enter fetures separated by commas(,)"
              />
              {/* abailability */}
              <legend className="fieldset-legend ">Availability</legend>
              <select
                name="availability"
                defaultValue={availability}
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
                defaultValue={image}
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
                defaultValue={location}
                className="input w-full"
                placeholder="Enter location"
              />
              {/* description  */}
              <legend className="fieldset-legend mt-2">Description</legend>
              <textarea
                required
                defaultValue={description}
                name="description"
                className="textarea h-max w-full  "
                placeholder="write a brief description.."
              ></textarea>
            </div>
          </div>
          <button className="btn btn-block mt-5 btn-warning ">
            Update Car
          </button>
        </form>
        <button
          onClick={() => setIsModalOpen(false)}
          className="cursor-pointer bg-warning  btn  absolute top-13 left-10"
        >
          <FaArrowLeft size={20} />
        </button>
      </div>
    </Modal>
  );
};

export default CarUpdateDiolog;
