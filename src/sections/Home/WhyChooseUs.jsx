import React from "react";
import cars from "../../assets/images/cars.png";
import booking from "../../assets/images/booking.png";
import price from "../../assets/images/price.png";
import support from "../../assets/images/support.png";
import WhyChooseUsCard from "../../components/WhyChooseUsCard";

const whyChooseUsInfo = [
  {
    id: 0,
    title: `Wide Variety of Cars`,
    description:
      "Choose from a wide variety of cars, including economy, luxury, SUVs, and more for every journey.",
    image: cars,
  },
  {
    id: 1,
    title: `Affordable Prices`,
    description:
      "Enjoy competitive rates on all vehicles without compromising quality or facing hidden fees ever.",
    image: price,
  },
  {
    id: 2,
    title: `Easy Booking Process`,
    description:
      "Experience a smooth, hassle-free booking process that’s fast, intuitive, and accessible from any device.",
    image: booking,
  },
  {
    id: 3,
    title: `Customer Support`,
    description:
      "Friendly, responsive customer support available 24/7 to assist you anytime with questions or issues.",
    image: support,
  },
];

const WhyChooseUs = () => {
  return (
    <div>
      <h1 className="font-semibold text-4xl mb-8">Why Choose Us!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyChooseUsInfo.map((item) => (
          <WhyChooseUsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
