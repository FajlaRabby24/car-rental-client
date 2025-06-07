import React from "react";

const WhyChooseUsCard = ({ item }) => {
  const { title, description, image } = item;
  return (
    <div className="bg-[#f8f8f8] rounded-md px-5  py-3">
      <img src={image} alt="item image" className="w-[60px] mb-4" />
      <h4 className="font-semibold text-xl mb-2">{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default WhyChooseUsCard;
