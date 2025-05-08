'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

/* ─────────────────────────────  Animated wave plane  */
function WavePlane() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const pos = mesh.current.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z =
        Math.sin(x * 2 + t) * 0.25 +
        Math.cos(y * 2 + t * 0.8) * 0.25;
      pos.setZ(i, z);
    }
    pos.needsUpdate = true;
    mesh.current.geometry.computeVertexNormals();
  });

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]}>
      {/* width, height, segX, segY  */}
      <planeGeometry args={[12, 12, 100, 100]} />
      <meshStandardMaterial
        color="#4f46e5"
        emissive="#0d1b2a"
        metalness={0.4}
        roughness={0.2}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/* ─────────────────────────────  Canvas wrapper  */
export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 3, 6], fov: 55 }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 5, 2]} intensity={0.8} />
        <WavePlane />
      </Suspense>
    </Canvas>
  );
}
