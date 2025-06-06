import React from "react";
import { motion } from "motion/react";
import useFadeAnimation from "../hooks/useFadeAnimation";

const WhyChooseUsCard = ({ item }) => {
  const { title, description, image } = item;
  return (
    <motion.div
      variants={useFadeAnimation("up", 0)}
      initial="hidden"
      whileInView="show"
      className="bg-[#f8f8f8] rounded-md px-5 py-3"
    >
      <img src={image} alt="item image" className="w-[60px] mb-4" />
      <h4 className="font-semibold text-xl mb-2">{title}</h4>
      <p>{description}</p>
    </motion.div>
  );
};

export default WhyChooseUsCard;
