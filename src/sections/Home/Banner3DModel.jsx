import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { memo, Suspense, use, useEffect, useRef, useState } from "react";

const Banner3DModel = () => {
  const [isMobile, setisMobile] = useState(window.innerWidth < 768);
  const { scene } = useGLTF("/model/car.glb", true);
  const modelRef = useRef(null);

  // calculate screen size
  useEffect(() => {
    const handleResize = () => {
      setisMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame(() => {
    modelRef.current.rotation.y += -0.002;
  });

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 6, 5]} />
      <Suspense fallback={null}>
        <primitive
          castShadow={false}
          ref={modelRef}
          object={scene}
          scale={isMobile ? [1, 1, 1] : [1.2, 1.2, 1.2]}
        />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
        minAzimuthAngle={-Infinity}
        maxAzimuthAngle={Infinity}
      />
    </>
  );
};

export default Banner3DModel;
