import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";


const Computers = () => {
  const computer = useGLTF('./toyota_gr_supra/scene.gltf');

  return (
    <mesh>
      <hemisphereLight 
        intensity={0.3}
        groundColor='black'
      />
      <pointLight 
        position={[2, -1, -5]}
        intensity={1}
      />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={1.6}
        position={[0, -2.3, 0]}
        rotation={[0.1, 0.3, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
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
          <Computers />
        </Suspense>
        <Preload all/>
    </Canvas>
  )
}

export default Computers