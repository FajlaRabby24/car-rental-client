import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Banner3DModel = () => {
  const [isMobile, setisMobile] = useState(window.innerWidth < 768);
  const { scene } = useGLTF("/model/car.glb");
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
    modelRef.current.rotation.y += -0.001;
  });
  return (
    <primitive
      castShadow={false}
      ref={modelRef}
      object={scene}
      scale={isMobile ? [1, 1, 1] : [1.2, 1.2, 1.2]}
    />
  );
};

export default Banner3DModel;
