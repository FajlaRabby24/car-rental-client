import React from "react";
import bannerImg from "../../assets/images/bannerImg.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="flex items-center flex-col  lg:flex-row-reverse  lg:py-30 px-2 ">
      {/* image content  */}
      <div className="md:flex-1">
        <img src={bannerImg} className="w-full" alt="banner image" />
      </div>
      {/* text content  */}
      <div className="space-y-2  md:space-y-3 flex-1">
        <h1 className="text-4xl md:text-6xl font-bold md:font-semibold leading-12 md:leading-18">
          Drive Your Dreams Today!
        </h1>
        <h4 className="text-xl md:text-2xl font-medium ">
          From city cruisers to luxury rides – discover the perfect match
        </h4>
        <p className="text-[#666666] font-normal">
          Our exclusive lineup of premium cars is tailored for those who demand
          more than just a ride. Whether you're looking for luxury, performance,
          or sophistication, each vehicle in our collection is engineered to
          elevate your driving experience. From sleek city cruisers to powerful
          sports models, find the perfect match that complements your lifestyle
          and reflects your personal style.
        </p>
        <Link to={"/available-cars"}>
          <button className="btn btn-lg btn-warning">View Avalable Cars</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
