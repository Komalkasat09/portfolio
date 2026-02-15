import React, { useEffect, useState } from 'react';
import styles from '../styles/CursorTrail.module.css';

interface Trail {
  x: number;
  y: number;
  id: number;
}

export default function CursorTrail() {
  const [trails, setTrails] = useState<Trail[]>([]);

  useEffect(() => {
    let id = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = { x: e.clientX, y: e.clientY, id: id++ };
      setTrails((prev) => [...prev.slice(-10), newTrail]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={styles.trailContainer}>
      {trails.map((trail, idx) => (
        <div
          key={trail.id}
          className={styles.trailDot}
          style={{
            left: trail.x,
            top: trail.y,
            opacity: (idx + 1) / trails.length,
          }}
        >
          {Math.random() > 0.5 ? '1' : '0'}
        </div>
      ))}
    </div>
  );
}
