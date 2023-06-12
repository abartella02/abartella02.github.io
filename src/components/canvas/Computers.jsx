import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";


const Computers = ({isMobile}, {isSmall}) => {
  const computer = useGLTF('./toyota_gr_supra/scene.gltf');

  return (
    <mesh>
      <hemisphereLight 
        intensity={0.5}
        groundColor='black'
      />
      <pointLight 
        position={[2, -1, -5]}
        intensity={3}
      />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.3}
        penumbra={1}
        intensity={0.6}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={
          isMobile?1.1:1.8
        }
        position={
          isMobile?[0, -2, -0.3]:[0, -2.6, -0.3]}
        rotation={[0.1, 0.3, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    const mediaQueryM = window.matchMedia('(max-width: 800px)');
    const mediaQueryS = window.matchMedia('(max-width: 400px)');
    setIsMobile(mediaQueryM.matches);
    setIsSmall(mediaQueryS.matches);

    const handleMediaQueryChangeM = (event) => {
      setIsMobile(event.matches);
    }
    const handleMediaQueryChangeS = (event) => {
      setIsSmall(event.matches);
    }

    mediaQueryM.addEventListener('change', handleMediaQueryChangeM);
    mediaQueryS.addEventListener('change', handleMediaQueryChangeS);
    return () => {
      mediaQueryM.removeEventListener('change', handleMediaQueryChangeM);
      mediaQueryS.removeEventListener('change', handleMediaQueryChangeS);
    }

  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls 
            enableZoom={false}
            maxPolarAngle={Math.PI /2}
            minPolarAngle={Math.PI /2}
          />
          <Computers isMobile={isMobile} isSmall={isSmall}/>
        </Suspense>
        <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas