"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Globe() {
  const groupRef = useRef<THREE.Group>(null);
  const haloRef = useRef<THREE.Mesh>(null);
  const points = useMemo(() => {
    const curves = [
      [-1.45, 0.18, 1.35, 0.58],
      [-1.15, -0.22, 1.2, -0.42],
      [-0.62, 0.7, 0.92, -0.08]
    ];

    return curves.map(([x1, y1, x2, y2]) => {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(x1, y1, 0.9),
        new THREE.Vector3(0, 1.08, 1.28),
        new THREE.Vector3(x2, y2, 0.9)
      ]);
      return curve.getPoints(42);
    });
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.18;
    if (haloRef.current) haloRef.current.rotation.z -= delta * 0.08;
  });

  return (
    <group ref={groupRef} position={[0.2, 0.34, 0]} rotation={[0.18, -0.55, 0]}>
      <mesh ref={haloRef}>
        <sphereGeometry args={[1.66, 48, 48]} />
        <meshBasicMaterial color="#f6d36b" transparent opacity={0.08} wireframe />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.42, 48, 48]} />
        <meshStandardMaterial color="#082348" roughness={0.35} metalness={0.38} transparent opacity={0.88} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.46, 48, 48]} />
        <meshBasicMaterial color="#f6d36b" wireframe transparent opacity={0.34} />
      </mesh>
      {[0, 1, 2, 3].map((item) => (
        <mesh key={item} rotation={[Math.PI / 2, 0, (item * Math.PI) / 4]}>
          <torusGeometry args={[1.49, 0.006, 8, 96]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
        </mesh>
      ))}
      {points.map((route, index) => (
        <TradeRoute key={index} points={route} />
      ))}
      {[
        [-1.45, 0.18, 0.92],
        [1.35, 0.58, 0.92],
        [-1.15, -0.22, 0.92],
        [1.2, -0.42, 0.92],
        [-0.62, 0.7, 0.92],
        [0.92, -0.08, 0.92]
      ].map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshStandardMaterial color="#f6d36b" emissive="#d4a017" emissiveIntensity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

function TradeRoute({ points }: { points: THREE.Vector3[] }) {
  const line = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: "#f6d36b",
      transparent: true,
      opacity: 0.85
    });
    return new THREE.Line(geometry, material);
  }, [points]);

  return <primitive object={line} />;
}

function ContainerStack() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = -1.34 + Math.sin(state.clock.elapsedTime * 1.3) * 0.035;
      ref.current.rotation.y = -0.24 + Math.sin(state.clock.elapsedTime * 0.65) * 0.08;
    }
  });

  return (
    <group ref={ref} position={[0, -1.34, 0]} rotation={[0, -0.24, 0]}>
      {[
        ["#d4a017", -0.58, 0, 0],
        ["#ffffff", 0, 0, 0],
        ["#12315f", 0.58, 0, 0],
        ["#0b2447", -0.29, 0.23, 0.04],
        ["#f6d36b", 0.29, 0.23, 0.04]
      ].map(([color, x, y, z], index) => (
        <mesh key={index} position={[Number(x), Number(y), Number(z)]}>
          <boxGeometry args={[0.52, 0.18, 0.26]} />
          <meshStandardMaterial color={String(color)} roughness={0.38} metalness={0.24} />
        </mesh>
      ))}
      <mesh position={[0, -0.2, 0.02]}>
        <boxGeometry args={[1.72, 0.08, 0.42]} />
        <meshStandardMaterial color="#041225" roughness={0.55} metalness={0.35} />
      </mesh>
    </group>
  );
}

function FloatingCargo() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.x = 1.55 + Math.sin(state.clock.elapsedTime * 0.9) * 0.08;
      ref.current.position.y = 1.22 + Math.cos(state.clock.elapsedTime * 0.75) * 0.05;
      ref.current.rotation.z = -0.12 + Math.sin(state.clock.elapsedTime) * 0.04;
    }
  });

  return (
    <group ref={ref} position={[1.55, 1.22, 0.28]} rotation={[0.1, -0.7, -0.12]}>
      <mesh>
        <boxGeometry args={[0.72, 0.16, 0.22]} />
        <meshStandardMaterial color="#f6d36b" roughness={0.24} metalness={0.42} />
      </mesh>
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[0.6, 0.12, 0.18]} />
        <meshStandardMaterial color="#ffffff" roughness={0.34} metalness={0.2} />
      </mesh>
    </group>
  );
}

export function TradeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.18, 4.05], fov: 43 }}
      gl={{ antialias: true, alpha: true }}
      className="h-full min-h-[420px] w-full"
      aria-label="3D global logistics scene"
    >
      <ambientLight intensity={0.78} />
      <directionalLight position={[2.5, 3, 4]} intensity={2.15} color="#fff1c7" />
      <pointLight position={[-2, 1.4, 2.2]} intensity={1.45} color="#f6d36b" />
      <pointLight position={[2, -1.4, 1.8]} intensity={0.75} color="#6ea8ff" />
      <Globe />
      <ContainerStack />
      <FloatingCargo />
    </Canvas>
  );
}
