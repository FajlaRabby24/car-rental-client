import React from "react";
import offers1 from "../../assets/images/offers1.jpg";
import offers2 from "../../assets/images/offers2.jpg";

const SpacialOffers = () => {
  return (
    <div>
      <h1 className="font-semibold text-4xl mb-8">Spacial Offers</h1>
      <div className="flex flex-col md:flex-row gap-7">
        {/* box 1 */}
        <div className="card card-side bg-[#f8f8f8] shadow-sm">
          <figure className="w-2/5">
            <img src={offers1} alt="Movie" />
          </figure>
          <div className="card-body w-3/5">
            <h2 className="card-title text-xl">
              Luxury cars at $99/day this holiday season!
            </h2>
            <div className="card-actions justify-">
              <button className="btn ">Learn more!</button>
            </div>
          </div>
        </div>
        {/* box 2  */}
        <div className="card card-side bg-[#f8f8f8] shadow-sm">
          <figure className="w-2/5">
            <img src={offers2} alt="Movie" />
          </figure>
          <div className="card-body w-3/5">
            <h2 className="card-title text-xl">
              Get 15% off for weekend rentals!
            </h2>
            <div className="card-actions ">
              <button className="btn ">Learn more!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpacialOffers;
