import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Banner3DModel = (props) => {
  const { scene } = useGLTF("/model/car.glb");
  const modelRef = useRef(null);

  useFrame(() => {
    modelRef.current.rotation.y += -0.001;
  });
  return (
    <primitive
      castShadow={false}
      ref={modelRef}
      object={scene}
      scale={[1.2, 1.2, 1.2]}
    />
  );
};

export default Banner3DModel;
