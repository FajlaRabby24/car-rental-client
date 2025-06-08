import { Link } from "react-router";
import offers1 from "../../assets/images/offers1.jpg";
import offers2 from "../../assets/images/offers2.jpg";

const SpacialOffers = () => {
  return (
    <div className="pb-52 px-2 xl:px-0">
      <h1 className="font-semibold text-4xl mb-8">Spacial Offers</h1>
      <div className="space-y-20">
        {/* box 1  */}
        <div className="flex flex-col md:flex-row gap-8">
          <figure className="flex-1">
            <img src={offers1} alt="offer 1 image" className="rounded-lg" />
          </figure>
          <div className=" flex-1 space-y-2">
            <h2 className="text-3xl md:text-4xl md:leading-12 font-semibold">
              Luxury cars at $99/day this holiday season!
            </h2>
            <p className="font-medium">
              This holiday season, treat yourself to the elegance of luxury cars
              at just $99 per day. Enjoy unmatched comfort.
            </p>
            <div className="card-actions pt-3 ">
              <Link to={"/available-cars"}>
                <button className="btn btn-warning">Book Now</button>
              </Link>
            </div>
          </div>
        </div>
        {/* box 2  */}
        <div className="flex flex-col md:flex-row-reverse gap-8">
          <figure className="flex-1">
            <img src={offers2} alt="offer 1 image" className="rounded-lg" />
          </figure>
          <div className=" flex-1 space-y-2">
            <h2 className="text-3xl md:text-4xl md:leading-12 font-semibold">
              Get 15% off for weekend rentals!
            </h2>
            <p className="font-medium">
              Enjoy 15% off on all weekend luxury car rentals this holiday
              season! Cruise in style and save big on your perfect getaway ride.
              Don’t miss this limited-time offer to experience premium cars at
              unbeatable prices. Book your weekend now!
            </p>
            <div className="card-actions pt-3">
              <Link to={"/available-cars"}>
                <button className="btn btn-warning">Book Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpacialOffers;
