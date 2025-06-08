import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Link } from "react-router";
import Banner3DModel from "./Banner3DModel";

const Banner = () => {
  return (
    <div className="flex  flex-col md:flex-col-reverse h-[calc(100vh-71px)]    px-2 xl:px-0 ">
      {/* image content  */}
      <div className="flex-1 flex items-end pt-3">
        {/* <img src={bannerImg} className="w-full" alt="banner i mage" /> */}
        <Canvas camera={{ position: [5, 3, 5], fov: 35 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 6, 5]} />
          <Suspense fallback={"3D model loading..."}>
            <Banner3DModel />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 3}
            minAzimuthAngle={-Infinity}
            maxAzimuthAngle={Infinity}
          />
        </Canvas>
      </div>
      {/* text content  */}
      <div className="space-y-2 md:text-center md:pt-9 md:space-y-3 ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold md:font-semibold leading-12 md:leading-18">
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
