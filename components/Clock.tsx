import React, { useState, useEffect } from 'react';
import styles from '../styles/Clock.module.css';

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className={styles.clock}>
      <span className={styles.label}>SYSTEM TIME:</span>
      <span className={styles.time}>{mounted ? formatTime(time) : '--:--:--'}</span>
    </div>
  );
}
