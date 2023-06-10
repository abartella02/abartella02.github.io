import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls, Preload, useGLTF
} from '@react-three/drei';

import CanvasLoader from '../Loader';
import { VisualElement } from 'framer-motion';

const Mailbox = () => {
  const mail = useGLTF('./mail_box/scene.gltf');

  return (
    <mesh>
    <hemisphereLight 
    intensity={1}
    groundColor='white'
    />
    <primitive 
      object={mail.scene}
      scale={6}
      position={[0,1,0]}
      rotation-y={0}
    />
    </mesh>
  )
}

const MailboxCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl = {{preserveDrawingBuffer: true}}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Mailbox />
      </Suspense>
    

    </Canvas>
  )
}

export default MailboxCanvas