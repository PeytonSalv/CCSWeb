'use client';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { MeshWobbleMaterial } from '@react-three/drei';

function WavyPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[100, 100, 32, 32]} />
      <MeshWobbleMaterial
        attach="material"
        color="#00ffe0"
        speed={0.4}
        factor={0.7}
        transparent
        opacity={0.12}
      />
    </mesh>
  );
}

export default function CanvasWaves() {
  return (
    <Canvas camera={{ position: [0, 10, 10], fov: 55 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <WavyPlane />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Suspense>
    </Canvas>
  );
}
