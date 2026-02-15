import React, { useState } from 'react';
import BootScreen from '../components/BootScreen';
import MatrixRain from '../components/MatrixRain';
import TerminalUI from '../components/TerminalUI';

export default function BootPage() {
  const [booted, setBooted] = useState(false);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#0a0e27' }}>
      <MatrixRain />
      {!booted ? (
        <BootScreen onComplete={() => setBooted(true)} />
      ) : (
        <TerminalUI>
          <div>
            <h2 style={{ color: '#00ff00', textShadow: '0 0 8px #00ff00' }}>
              [KOMAL.KASAT] :: FULL-STACK_AI_ENGINEER
            </h2>
            <p>Type a command to begin...</p>
          </div>
        </TerminalUI>
      )}
    </div>
  );
}
