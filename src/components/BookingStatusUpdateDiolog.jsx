import Modal from "react-modal";
import useAxiosSecure from "../hooks/useAxiosSecure";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "400px",
    padding: "0",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const BookingStatusUpdateDiolog = ({
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  car,
  handleUpdateUiAfterCanceled,
}) => {
  const axiosSecure = useAxiosSecure();

  const { _id, status, ...rest } = car;

  function closeModal() {
    setIsDeleteModalOpen(false);
  }

  const handleChanglStatus = (id) => {
    const updatedCarObj = { ...rest, status: "Canceled" };

    axiosSecure
      .put(
        `${import.meta.env.VITE_root_api_url}/booking-cancel/${id}`,
        updatedCarObj
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          handleUpdateUiAfterCanceled({ _id, ...updatedCarObj });
          closeModal();
        }
      });
  };

  console.log(car);

  return (
    <Modal
      onRequestClose={closeModal}
      isOpen={isDeleteModalOpen}
      style={customStyles}
      className={""}
    >
      <div className="bg-base-100 px-6 py-3 text-center">
        <h1 className="text-lg  font-semibold ">
          Are you sure you want to cancel this booking?
        </h1>
        <div className="space-x-3 mt-3">
          <button
            onClick={() => handleChanglStatus(_id)}
            className="btn btn-error"
          >
            Yes
          </button>
          <button onClick={closeModal} className="btn">
            No
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default BookingStatusUpdateDiolog;
