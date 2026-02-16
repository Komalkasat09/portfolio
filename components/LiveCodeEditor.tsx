import React, { useState } from 'react';
import styles from '../styles/LiveCodeEditor.module.css';

const defaultCode = `function greet(name) {
  return 'Hello, ' + name + '!';
}

console.log(greet('Komal'));
`;

export default function LiveCodeEditor() {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState('');

  const runCode = () => {
    try {
      // Capture console.log output
      let consoleOutput: string[] = [];
      const originalLog = console.log;
      console.log = (...args: any[]) => {
        consoleOutput.push(args.map(arg => String(arg)).join(' '));
        originalLog(...args); // Also log to real console for debugging
      };

      // Execute the code safely
      // eslint-disable-next-line no-eval
      eval(code);
      
      // Restore console.log
      console.log = originalLog;

      // Show console output or success message
      const finalOutput = consoleOutput.length > 0 
        ? consoleOutput.join('\n')
        : 'Code executed successfully (no output)';
      setOutput(finalOutput);
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
