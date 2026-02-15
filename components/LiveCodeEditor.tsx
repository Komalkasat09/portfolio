import React, { useState } from 'react';
import styles from '../styles/LiveCodeEditor.module.css';

const defaultCode = `function greet(name) {
  return 'Hello, ' + name + '!';
}

greet('Komal');
`;

export default function LiveCodeEditor() {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState('');

  const runCode = () => {
    try {
      // eslint-disable-next-line no-eval
      // Only for demo: never use eval in production!
      // eslint-disable-next-line no-new-func
      const result = Function(`"use strict";return (${code})`)();
      setOutput(String(result ?? ''));
    } catch (e) {
      setOutput('Error: ' + (e as Error).message);
    }
  };

  return (
    <div className={styles.editorContainer}>
      <div className={styles.editorHeader}>Live Code Editor (JS Demo)</div>
      <textarea
        className={styles.codeArea}
        value={code}
        onChange={e => setCode(e.target.value)}
        spellCheck={false}
        rows={8}
      />
      <button className={styles.runButton} onClick={runCode}>Run</button>
      <div className={styles.outputBox}>
        <span>Output:</span>
        <pre>{output}</pre>
      </div>
    </div>
  );
}
