"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.LineSegments>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      wireframeRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshStandardMaterial color="#00ff00" wireframe transparent opacity={0.3} />
      </mesh>
      <lineSegments ref={wireframeRef}>
        <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(2.5, 2.5, 2.5)]} />
        <lineBasicMaterial attach="material" color="#00ff00" linewidth={2} />
      </lineSegments>
    </>
  );
}

function FloatingRing({ position, scale }: { position: [number, number, number]; scale: number }) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={ringRef} position={position} scale={scale}>
      <torusGeometry args={[1, 0.05, 16, 100]} />
      <meshStandardMaterial color="#00d9ff" emissive="#00d9ff" emissiveIntensity={0.5} />
    </mesh>
  );
}

export default function Profile3D() {
  return (
    <div style={{ 
      width: '100%', 
      height: '400px', 
      margin: '1rem 0',
      background: 'transparent',
      borderRadius: '12px',
      position: 'relative',
    }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ff00" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d9ff" />
        
        <RotatingCube />
        <FloatingRing position={[0, 0, 0]} scale={1.5} />
        <FloatingRing position={[0, 0, 0]} scale={1.8} />
        
        <Text
          position={[0, 3, 0]}
          fontSize={0.5}
          color="#00ff00"
          anchorX="center"
          anchorY="middle"
          font="/fonts/JetBrainsMono-Bold.ttf"
        >
          KOMAL KASAT
        </Text>
        
        <Text
          position={[0, -3, 0]}
          fontSize={0.3}
          color="#00d9ff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/JetBrainsMono-Regular.ttf"
        >
          FULL-STACK AI ENGINEER
        </Text>
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#00ff00',
        fontSize: '0.85rem',
        fontFamily: 'JetBrains Mono, monospace',
        textShadow: '0 0 8px #00ff00',
      }}>
        Drag to rotate • Interactive 3D Profile
      </div>
    </div>
  );
}
