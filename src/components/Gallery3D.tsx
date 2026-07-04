"use client";

import { Suspense, useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Text,
  Float,
  Sparkles,
  Environment,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { paintings } from "@/data/paintings";
import type { Painting } from "@/lib/types";

// ============ FLOATING PAINTING FRAME ============
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

  // Load texture
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
      // Gentle floating
      meshRef.current.position.y += Math.sin(Date.now() * 0.002 + index) * 0.0005;
      // Rotate toward camera
      if (hovered) {
        meshRef.current.scale.lerp(
          new THREE.Vector3(1.15, 1.15, 1.15),
          0.1
        );
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
      onClick={(e) => {
        e.stopPropagation();
        onClick(painting.id);
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Gold frame */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[1.12, 1.42, 0.06]} />
        <meshStandardMaterial
          color="#e8a87c"
          metalness={0.7}
          roughness={0.3}
          envMapIntensity={0.5}
        />
      </mesh>

      {/* Inner frame edge */}
      <mesh position={[0, 0, -0.02]}>
        <boxGeometry args={[1.02, 1.32, 0.03]} />
        <meshStandardMaterial
          color="#2a1a0a"
          metalness={0.3}
          roughness={0.5}
        />
      </mesh>

      {/* Painting canvas */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[0.96, 1.26]} />
        {texture ? (
          <meshStandardMaterial map={texture} roughness={0.6} metalness={0} />
        ) : (
          <meshStandardMaterial color="#d5c4a1" roughness={0.8} />
        )}
      </mesh>

      {/* Glass reflection */}
      <mesh position={[0, 0, 0.005]}>
        <planeGeometry args={[0.96, 1.26]} />
        <meshPhysicalMaterial
          color="white"
          roughness={0}
          metalness={0}
          transparent
          opacity={0.08}
          envMapIntensity={0.8}
        />
      </mesh>

      {/* Title plaque */}
      <Float speed={2} floatIntensity={0.2}>
        <group position={[0, -0.78, 0.05]}>
          <mesh>
            <planeGeometry args={[0.8, 0.12]} />
            <meshStandardMaterial
              color="#2a1a0a"
              metalness={0.6}
              roughness={0.3}
            />
          </mesh>
          <Text
            position={[0, 0, 0.01]}
            fontSize={0.06}
            color="#e8a87c"
            anchorX="center"
            anchorY="middle"
            font="/fonts/playfair.woff"
          >
            {painting.titleZh}
          </Text>
        </group>
      </Float>

      {/* Hover glow */}
      {hovered && (
        <pointLight
          position={[0, 0, 0.5]}
          intensity={2}
          color="#e879a0"
          distance={3}
        />
      )}
    </group>
  );
}

// ============ GALLERY ROOM ============
function GalleryRoom({ onPaintingClick }: { onPaintingClick: (id: string) => void }) {
  const groupRef = useRef<THREE.Group>(null);

  // Arrange paintings in a circle
  const totalPaintings = paintings.length;
  const radius = 12;
  const heightSpread = 3;

  const paintingPositions = useMemo(() => {
    return paintings.map((p, i) => {
      const angle = (i / totalPaintings) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      // Stagger heights
      const y = Math.sin(i * 0.5) * heightSpread;
      // Face center
      const ry = -angle + Math.PI;
      return {
        position: [x, y, z] as [number, number, number],
        rotation: [0, ry, 0] as [number, number, number],
      };
    });
  }, [totalPaintings, radius, heightSpread]);

  return (
    <group ref={groupRef}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
        <circleGeometry args={[radius + 3, 64]} />
        <meshStandardMaterial
          color="#1a0a2e"
          metalness={0.9}
          roughness={0.2}
          envMapIntensity={0.3}
        />
      </mesh>

      {/* Floor reflection ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.95, 0]}>
        <ringGeometry args={[radius - 1, radius + 4, 64]} />
        <meshBasicMaterial
          color="#e879a0"
          transparent
          opacity={0.05}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Paintings */}
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

      {/* Center pillar of light */}
      <pointLight
        position={[0, 5, 0]}
        intensity={15}
        color="#e879a0"
        distance={20}
        decay={1.5}
      />
      <pointLight
        position={[0, 0.5, 0]}
        intensity={5}
        color="#7ec8e3"
        distance={15}
        decay={2}
      />

      {/* Ambient lights around circle */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        return (
          <pointLight
            key={i}
            position={[
              Math.cos(angle) * (radius + 1),
              2 + Math.sin(i * 2),
              Math.sin(angle) * (radius + 1),
            ]}
            intensity={1.5}
            color="#fbbf24"
            distance={8}
            decay={2}
          />
        );
      })}
    </group>
  );
}

// ============ STARRY BACKGROUND ============
function StarField() {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(800 * 3);
    for (let i = 0; i < 800; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return pos;
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0002;
      pointsRef.current.rotation.x += 0.0001;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={800}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        sizeAttenuation
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// ============ MAIN SCENE ============
function Scene({ onPaintingClick }: { onPaintingClick: (id: string) => void }) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} color="#2a1a4a" />
      <directionalLight
        position={[5, 10, 5]}
        intensity={0.6}
        color="#ffe4e1"
        castShadow={false}
      />

      {/* Starry background */}
      <StarField />

      {/* Sparkle particles */}
      <Sparkles
        count={200}
        scale={[30, 15, 30]}
        size={2}
        speed={0.3}
        color="#fbbf24"
        opacity={0.4}
      />
      <Sparkles
        count={150}
        scale={[25, 10, 25]}
        size={3}
        speed={0.5}
        color="#e879a0"
        opacity={0.3}
      />

      {/* Gallery room */}
      <GalleryRoom onPaintingClick={onPaintingClick} />

      {/* Controls */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={5}
        maxDistance={25}
        maxPolarAngle={Math.PI * 0.7}
        autoRotate
        autoRotateSpeed={0.3}
        dampingFactor={0.1}
      />
    </>
  );
}

// ============ EXPORTED COMPONENT ============
export default function Gallery3D() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    window.open(`/painting/${id}`, "_self");
  };

  return (
    <div style={{ width: "100vw", height: "100vh", background: "#0a0a1a" }}>
      {/* Title overlay */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <h1 className="font-display text-3xl md:text-4xl text-center text-white/90 drop-shadow-lg tracking-wider">
          ✨ Aria&apos;s 3D Gallery ✨
        </h1>
        <p className="text-center text-pink-200/60 text-sm mt-1">
          🖱️ Drag to orbit &bull; Scroll to zoom &bull; Click painting to view
        </p>
      </div>

      {/* Back button */}
      <a
        href="/"
        className="absolute top-6 left-6 z-10 px-4 py-2 rounded-full text-sm text-white/70 bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all"
      >
        ← Back
      </a>

      {/* Painting count */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full text-xs text-white/50 bg-white/5 backdrop-blur-sm">
        {paintings.length} paintings in the gallery
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
