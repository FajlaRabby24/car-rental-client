import { formatDistanceToNow } from "date-fns";
import { FaCar, FaCarSide } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link } from "react-router";
import Reveal from "../animation/Reveal";

const RecentCarCard = ({ car }) => {
  const { _id, model, bookingCount, date, rentalPrice, image } = car;

  return (
    <Reveal
      className={`hover:-translate-y-4 shadow-sm gap-6 bg-base-200 transition-all`}
    >
      <div className={`flex flex-col  rounded-xl `}>
        <figure className="rounded-t-xl">
          <img
            className={`max-h-[273px] lg:min-h-[273px] rounded-xl w-full object-cover`}
            src={image}
            alt="car image"
          />
        </figure>
        <div className="px-4 pt-2 pb-3 space-y-1">
          <h2 className="card-title">
            <FaCar size={30} />{" "}
            <span className="text-2xl font-semibold">{model}</span>
          </h2>
          <p className="flex items-center gap-1">
            <MdOutlineAttachMoney size={25} />{" "}
            <span className="text-[#6a6a6a] font-semibold">
              Rental price: ${rentalPrice}/day
            </span>
          </p>
          <p className="flex items-center gap-1">
            <IoTime size={25} />{" "}
            <span className="text-[#6a6a6a] font-semibold">
              Posted: {formatDistanceToNow(new Date(date), { addSuffix: true })}
            </span>
          </p>

          <p className="flex items-center gap-1">
            <FaCarSide size={25} />{" "}
            <span className="text-[#6a6a6a] font-semibold">
              Booking: {bookingCount}
            </span>
          </p>
          <div className={`card-actions justify-end  `}>
            <Link to={`/car/${_id}`}>
              <button className="btn bn-sm btn-warning">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default RecentCarCard;
