import { Canvas } from "@react-three/fiber";
import { Float, Icosahedron, TorusKnot, Sphere, Stars } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type * as THREE from "three";

function Rig() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const { x, y } = state.pointer;
    ref.current.rotation.y += (x * 0.4 - ref.current.rotation.y) * 0.03;
    ref.current.rotation.x += (-y * 0.3 - ref.current.rotation.x) * 0.03;
  });
  return (
    <group ref={ref} scale={0.85}>
      <Float speed={1.6} rotationIntensity={1.1} floatIntensity={1.6}>
        <TorusKnot args={[0.75, 0.24, 160, 32]} position={[0, 0.1, 0]}>
          <meshStandardMaterial
            color="#6f8cff"
            emissive="#3b5bff"
            emissiveIntensity={0.55}
            roughness={0.18}
            metalness={0.9}
          />
        </TorusKnot>
      </Float>

      <Float speed={2.2} rotationIntensity={1.6} floatIntensity={2.2}>
        <Icosahedron args={[0.36, 0]} position={[-2.1, 0.9, -0.6]}>
          <meshStandardMaterial
            color="#c084fc"
            emissive="#a855f7"
            emissiveIntensity={0.7}
            roughness={0.25}
            metalness={0.7}
            wireframe
          />
        </Icosahedron>
      </Float>

      <Float speed={1.9} rotationIntensity={1.2} floatIntensity={1.9}>
        <Sphere args={[0.26, 32, 32]} position={[2.0, -0.8, -0.4]}>
          <meshStandardMaterial
            color="#67e8f9"
            emissive="#22d3ee"
            emissiveIntensity={0.8}
            roughness={0.15}
            metalness={0.6}
          />
        </Sphere>
      </Float>

      <Float speed={1.4} rotationIntensity={2} floatIntensity={1.4}>
        <Icosahedron args={[0.22, 0]} position={[1.5, 1.35, 0.5]}>
          <meshStandardMaterial
            color="#818cf8"
            emissive="#6366f1"
            emissiveIntensity={0.6}
            metalness={0.8}
            roughness={0.2}
          />
        </Icosahedron>
      </Float>
    </group>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      dpr={[1, 1.7]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 5]} intensity={70} color="#7c9bff" />
      <pointLight position={[-5, -3, 2]} intensity={55} color="#c084fc" />
      <Stars radius={40} depth={30} count={1200} factor={3} saturation={0} fade speed={0.6} />
      <Rig />
    </Canvas>
  );
}
