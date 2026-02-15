import React, { useState } from 'react';
import styles from '../styles/AsciiArtProfile.module.css';
import { motion } from 'framer-motion';

const asciiArt = `
      .-"""-.
     / .===. \
     \/ 6 6 \/
     ( \___/ )
 ___ooo__V__ooo___
|  KOMAL KASAT   |
| FULL-STACK/AI  |
|   ENGINEER     |
'----------------'
`;

export default function AsciiArtProfile() {
  const [glitch, setGlitch] = useState(false);

  return (
    <motion.pre
      className={styles.asciiArt}
      onMouseEnter={() => setGlitch(true)}
      onMouseLeave={() => setGlitch(false)}
      animate={glitch ? { x: [0, -2, 2, 0], color: ['#00ff00', '#00d9ff', '#ff0055', '#00ff00'] } : { x: 0, color: '#00ff00' }}
      transition={{ duration: 0.4 }}
    >
      {asciiArt}
    </motion.pre>
  );
}
