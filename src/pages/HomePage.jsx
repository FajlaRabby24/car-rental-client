import React from "react";
import Banner from "../sections/Home/Banner";
import WhyChooseUs from "../sections/Home/WhyChooseUs";
import RecentListing from "../sections/Home/RecentListing";
import SpacialOffers from "../sections/Home/SpacialOffers";

const HomePage = () => {
  return (
    <div className="space-y-40">
      <Banner />
      <WhyChooseUs />
      <RecentListing />
      <SpacialOffers />
    </div>
  );
};

export default HomePage;
