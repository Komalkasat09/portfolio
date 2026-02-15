import React, { useEffect, useRef } from 'react';
import styles from '../styles/MatrixRain.module.css';

const fontSize = 18;
const columns = 60;
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    let drops = Array(Math.floor(width / fontSize)).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(10, 14, 39, 0.15)';
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = '#00ff00';
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} className={styles.matrixCanvas} />;
}
