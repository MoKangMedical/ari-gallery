"use client";

import { Suspense, useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Text,
  Float,
  Environment,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { paintings } from "@/data/paintings";
import type { Painting } from "@/lib/types";

function PaintingFrame({
  painting,
  position,
  rotation,
  index,
  onClick,
}: {
  painting: Painting;
  position: [number, number, number];
  rotation: [number, number, number];
  index: number;
  onClick: (id: string) => void;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useMemo(() => {
    const loader = new THREE.TextureLoader();
    loader.load(painting.thumbnailUrl, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.minFilter = THREE.LinearFilter;
      setTexture(tex);
    });
  }, [painting.thumbnailUrl]);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.position.y += Math.sin(Date.now() * 0.0015 + index) * 0.0005;
      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.1, 1.1, 1.1), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <group
      ref={meshRef}
      position={position}
      rotation={rotation}
      onClick={(e) => { e.stopPropagation(); onClick(painting.id); }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Frame - warm wood */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[1.12, 1.42, 0.06]} />
        <meshStandardMaterial color="#5c4033" metalness={0.1} roughness={0.5} />
      </mesh>
      {/* Inner mat */}
      <mesh position={[0, 0, -0.02]}>
        <boxGeometry args={[1.02, 1.32, 0.03]} />
        <meshStandardMaterial color="#f5f0eb" roughness={0.9} />
      </mesh>
      {/* Canvas */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[0.96, 1.26]} />
        {texture ? (
          <meshStandardMaterial map={texture} roughness={0.5} metalness={0} />
        ) : (
          <meshStandardMaterial color="#e8e0d5" roughness={0.8} />
        )}
      </mesh>
    </group>
  );
}

function GalleryRoom({ onPaintingClick }: { onPaintingClick: (id: string) => void }) {
  const groupRef = useRef<THREE.Group>(null);
  const totalPaintings = paintings.length;
  const radius = 12;
  const heightSpread = 3;

  const paintingPositions = useMemo(() => {
    return paintings.map((_, i) => {
      const angle = (i / totalPaintings) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = Math.sin(i * 0.5) * heightSpread;
      const ry = -angle + Math.PI;
      return {
        position: [x, y, z] as [number, number, number],
        rotation: [0, ry, 0] as [number, number, number],
      };
    });
  }, [totalPaintings]);

  return (
    <group ref={groupRef}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
        <circleGeometry args={[radius + 3, 64]} />
        <meshStandardMaterial color="#2a2520" metalness={0.3} roughness={0.4} />
      </mesh>

      {paintings.map((painting, i) => (
        <PaintingFrame
          key={painting.id}
          painting={painting}
          index={i}
          position={paintingPositions[i].position}
          rotation={paintingPositions[i].rotation}
          onClick={onPaintingClick}
        />
      ))}

      {/* Museum lighting */}
      <pointLight position={[0, 6, 0]} intensity={20} color="#fff8f0" distance={25} decay={1.5} />
      <pointLight position={[0, 0.5, 0]} intensity={5} color="#fff8f0" distance={15} decay={2} />
    </group>
  );
}

function StarField() {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const pos = new Float32Array(600 * 3);
    for (let i = 0; i < 600; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return pos;
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.00015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} count={600} itemSize={3} attach="attributes-position" />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#ffffff" sizeAttenuation transparent opacity={0.5} blending={THREE.AdditiveBlending} />
    </points>
  );
}

function Scene({ onPaintingClick }: { onPaintingClick: (id: string) => void }) {
  return (
    <>
      <ambientLight intensity={0.5} color="#2a2520" />
      <directionalLight position={[5, 10, 5]} intensity={0.4} color="#fff8f0" />
      <StarField />
      <GalleryRoom onPaintingClick={onPaintingClick} />
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={5}
        maxDistance={25}
        maxPolarAngle={Math.PI * 0.7}
        autoRotate
        autoRotateSpeed={0.25}
        dampingFactor={0.08}
      />
    </>
  );
}

export default function Gallery3D() {
  const handleClick = (id: string) => {
    window.open(`/painting/${id}`, "_self");
  };

  return (
    <div style={{ width: "100vw", height: "100vh", background: "#1a1815" }}>
      {/* Title overlay */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <h1 className="font-display text-2xl md:text-3xl text-center text-white/80 tracking-[0.15em]">
          3D Gallery
        </h1>
        <p className="text-center text-white/30 text-xs mt-2 tracking-[0.1em]">
          Drag to orbit · Scroll to zoom · Click to view
        </p>
      </div>

      {/* Back */}
      <a
        href="/"
        className="absolute top-6 left-6 z-10 px-4 py-2 text-xs tracking-[0.1em] uppercase text-white/50 bg-white/5 hover:bg-white/10 transition-all"
      >
        ← Back
      </a>

      {/* Count */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[10px] tracking-[0.15em] uppercase text-white/30">
        {paintings.length} paintings
      </div>

      <Canvas
        camera={{ position: [0, 2, 18], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <Suspense fallback={null}>
          <Scene onPaintingClick={handleClick} />
        </Suspense>
      </Canvas>
    </div>
  );
}
