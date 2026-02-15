import { useEffect } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export default function useKonamiCode(callback: () => void) {
  useEffect(() => {
    let keys: string[] = [];

    const handleKeyDown = (e: KeyboardEvent) => {
      keys.push(e.key);
      keys = keys.slice(-KONAMI_CODE.length);

      if (keys.join(',') === KONAMI_CODE.join(',')) {
        callback();
        keys = [];
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [callback]);
}
