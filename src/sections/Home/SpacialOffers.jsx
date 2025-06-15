import { Link } from "react-router";
import Reveal from "../../animation/Reveal";
import offers1 from "../../assets/images/offers1.jpg";
import offers2 from "../../assets/images/offers2.jpg";

const SpacialOffers = () => {
  return (
    <div className="pb-52 px-2 xl:px-0">
      <h1 className="font-semibold text-4xl mb-8">Spacial Offers</h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2  gap-4">
        {/* box 1  */}
        <Reveal
          className={`hover:-translate-y-4 shadow-sm  bg-base-200 rounded-lg transition-all`}
        >
          <div className="flex  flex-col gap-2 rounded-lg">
            <figure>
              <img
                src={offers1}
                alt="offer 1 image"
                className="rounded-lg max-h-[410px] object-cover w-full"
              />
            </figure>
            <div className=" space-y-2 px-4 pb-4">
              <h2 className="text-3xl md:text-4xl md:leading-12 font-semibold">
                Luxury cars at $99/day season!
              </h2>
              <p className="font-medium">
                Drive luxury for just $99 a day this holiday season. Choose from
                top-tier cars and make every trip unforgettable. Perfect for
                holidays, events, or simply treating yourself. Style, comfort,
                and performance—now within reach. Book now and elevate your
                holiday driving experience.
              </p>
              <div className="card-actions pt-3 ">
                <Link to={"/available-cars"}>
                  <button className="btn btn-warning">Book Now</button>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
        {/* box 2  */}
        <Reveal
          className={`hover:-translate-y-4 shadow-sm  rounded-lg bg-base-200 transition-all`}
        >
          <div className="flex  flex-col gap-2 rounded-lg">
            <figure>
              <img
                src={offers2}
                alt="offer 1 image"
                className="rounded-lg max-h-[410px] object-cover w-full"
              />
            </figure>
            <div className="space-y-2 px-4 pb-4">
              <h2 className="text-3xl md:text-4xl md:leading-12 font-semibold">
                Get 15% off for weekend rentals!
              </h2>
              <p className="font-medium">
                Enjoy 15% off all weekend luxury rentals and travel in style.
                Ideal for getaways, celebrations, or just a special ride. Our
                premium vehicles bring elegance and excitement to your weekend
                plans. Reserve now to save and drive something extraordinary
                without breaking the bank.
              </p>
              <div className="card-actions pt-3 ">
                <Link to={"/available-cars"}>
                  <button className="btn btn-warning">Book Now</button>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default SpacialOffers;
