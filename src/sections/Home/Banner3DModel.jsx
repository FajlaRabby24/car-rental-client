import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

const Banner3DModel = ({ color, scene }) => {
  const [isMobile, setisMobile] = useState(window.innerWidth < 768);
  // const { scene } = useGLTF("/model/car.glb", true);
  const modelRef = useRef(null);

  // change the car color
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.color.set(color || "#fff");
        child.castShadow = false;
        child.receiveShadow = false;
      }
    });
  }, [scene, color]);

  // calculate screen size
  useEffect(() => {
    const handleResize = () => {
      setisMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // auto rotate car
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += -0.003;
    }
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
