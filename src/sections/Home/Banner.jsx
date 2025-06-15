import { Canvas } from "@react-three/fiber";
import { motion } from "motion/react";
import { memo, useState } from "react";
import { Link } from "react-router";
import Banner3DModel from "./Banner3DModel";
import LoaderOverlay from "./LoaderOverlay ";

const Banner = () => {
  const [color, setColor] = useState("");

  const handleChange = (value) => {
    setColor((prev) => (prev === value ? prev : value));
  };

  return (
    <div className="flex   flex-col md:flex-col-reverse h-[calc(100vh-71px)]    px-2 xl:px-0 ">
      {/* image   */}
      <div className="flex-1 flex items-end pt-3 relative">
        <LoaderOverlay />
        <Canvas shadows={false} camera={{ position: [5, 3, 5], fov: 35 }}>
          <Banner3DModel color={color} />
        </Canvas>
      </div>

      {/* text content  */}
      <motion.div
        initial={{ scale: 0, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        className="space-y-2 relative  md:text-center md:pt-9 md:space-y-3 "
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold md:font-semibold leading-12 md:leading-18">
          Drive Your Dreams Today!
        </h1>
        <h4 className="text-xl md:text-2xl font-medium ">
          From city cruisers to luxury rides – discover the perfect match
        </h4>
        <p className="text-shadow-base-300 font-normal">
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
        {/*color pagination  */}
        <div className="flex gap-2 pb-1 absolute -top-7 md:top-auto     mx-auto">
          <input
            onChange={() => handleChange(`#fff`)}
            type="radio"
            name="radio-4"
            defaultChecked
            data-tooltip-id="my-tooltip"
            data-tooltip-content="primary"
            className="radio   radio-seconday"
          />
          <input
            onChange={() => handleChange(`#6FE6FC`)}
            type="radio"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="info"
            name="radio-4"
            className="radio   radio-info"
          />
          <input
            onChange={() => handleChange(`#e5a600`)}
            type="radio"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="yellow"
            name="radio-4"
            className="radio   radio-warning"
          />
          <input
            onChange={() => handleChange(`#fe1c55`)}
            type="radio"
            name="radio-4"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="red"
            className="radio   radio-error"
          />
          <input
            onChange={() => handleChange(`#00d18e`)}
            type="radio"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="green"
            name="radio-4"
            className="radio   radio-success"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default memo(Banner);
