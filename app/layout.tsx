import React from 'react';
import BootPage from './boot';
import './globals.css';

export default function RootLayout() {
  return (
    <html lang="en">
      <body style={{ background: '#0a0e27', color: '#00ff00', fontFamily: 'JetBrains Mono, Fira Code, monospace' }}>
        <BootPage />
      </body>
    </html>
  );
}
