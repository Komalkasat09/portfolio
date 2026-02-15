"use client";
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
                  attach="attributes-position"
                  args={[particles, 3]}
                  count={particles.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#00ff00" transparent opacity={0.6} />
    </points>
  );
}

function HolographicCard() {
  const groupRef = useRef<THREE.Group>(null);
  const sphere1Ref = useRef<THREE.Mesh>(null);
  const sphere2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
    if (sphere1Ref.current) {
      sphere1Ref.current.position.x = Math.sin(state.clock.elapsedTime) * 2;
      sphere1Ref.current.position.y = Math.cos(state.clock.elapsedTime * 1.3) * 1.5;
    }
    if (sphere2Ref.current) {
      sphere2Ref.current.position.x = -Math.sin(state.clock.elapsedTime * 0.8) * 2;
      sphere2Ref.current.position.y = Math.cos(state.clock.elapsedTime) * 1.5;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <boxGeometry args={[5, 3.5, 0.1]} />
        <meshStandardMaterial 
          color="#000"
          transparent 
          opacity={0.3}
          wireframe={false}
        />
      </mesh>
      
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(5, 3.5, 0.1)]} />
        <lineBasicMaterial color="#00ff00" linewidth={2} />
      </lineSegments>

      <Sphere ref={sphere1Ref} args={[0.15, 16, 16]} position={[0, 0, 0.5]}>
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={2} />
      </Sphere>
      
      <Sphere ref={sphere2Ref} args={[0.12, 16, 16]} position={[0, 0, 0.5]}>
        <meshStandardMaterial color="#00d9ff" emissive="#00d9ff" emissiveIntensity={2} />
      </Sphere>
    </group>
  );
}

export default function Profile3DEnhanced() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      background: '#101010',
      borderRadius: '12px',
      position: 'relative',
      border: '3px solid #00ff00',
      boxShadow: '0 0 30px rgba(0,255,0,0.5)',
      padding: '2rem',
      height: '450px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10,
    }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#00ff00" />
        <pointLight position={[-5, -5, 5]} intensity={1} color="#00d9ff" />
        <spotLight position={[0, 10, 5]} angle={0.3} penumbra={1} intensity={2} color="#00ff00" />
        
        <Particles />
        <HolographicCard />
        
        <Text
          position={[0, 0.8, 0.2]}
          fontSize={0.6}
          color="#00ff00"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000"
        >
          KOMAL KASAT
        </Text>
        
        <Text
          position={[0, 0, 0.2]}
          fontSize={0.25}
          color="#00d9ff"
          anchorX="center"
          anchorY="middle"
        >
          ━━━━━━━━━━━━━━━━━
        </Text>
        
        <Text
          position={[0, -0.7, 0.2]}
          fontSize={0.35}
          color="#00d9ff"
          anchorX="center"
          anchorY="middle"
        >
          FULL-STACK
        </Text>
        
        <Text
          position={[0, -1.1, 0.2]}
          fontSize={0.35}
          color="#00d9ff"
          anchorX="center"
          anchorY="middle"
        >
          AI ENGINEER
        </Text>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
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
        🖱️ Drag to rotate • Interactive Holographic Profile
      </div>
    </div>
  );
}
