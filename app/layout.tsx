import React from 'react';
import BootPage from './boot';
import './globals.css';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Komal Kasat - Portfolio',
  description: 'Interactive hacker-themed portfolio',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout() {
  return (
    <html lang="en">
      <head></head>
      <body style={{ background: '#000', color: '#00ff00', fontFamily: 'JetBrains Mono, Fira Code, monospace', margin: 0, padding: 0, overflow: 'hidden', overflowY: 'auto' }}>
        <BootPage />
      </body>
    </html>
  );
}
