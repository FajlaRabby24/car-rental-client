import { useProgress } from "@react-three/drei";

const LoaderOverlay = () => {
  const { progress, active } = useProgress();

  return active ? (
    <div className="    absolute top-1/2 text-center w-full ">
      <h2 className="text-2xl font-semibold mb-2">Loading 3D Model...</h2>
      <p className="text-lg text-center">{Math.floor(progress)}%</p>
    </div>
  ) : null;
};

export default LoaderOverlay;
