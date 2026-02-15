"use client";
import React, { useState } from 'react';
import BootScreen from '../components/BootScreen';
import MatrixRain from '../components/MatrixRain';
import TerminalUI from '../components/TerminalUI';
import TerminalCommandInput from '../components/TerminalCommandInput';
import HackInPuzzle from '../components/HackInPuzzle';
import Profile3D from '../components/Profile3DEnhanced';
import LiveCodeEditor from '../components/LiveCodeEditor';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceTimeline from '../components/ExperienceTimeline';
import SkillsMatrix from '../components/SkillsMatrix';
import ContactSection from '../components/ContactSection';
import Clock from '../components/Clock';
import CursorTrail from '../components/CursorTrail';
import useKonamiCode from '../hooks/useKonamiCode';

const helpText = `Welcome to the hacker-themed portfolio!

Type one of these commands to navigate:
- ls projects: List projects
- cd experience: Show experience timeline
- cat skills.txt: Show skills
- contact: Establish connection
- ./run_portfolio.sh: Run portfolio intro
- sudo makeawesome: Unlock achievement
- whoami: Reveal identity
- history: Show command history
- clear: Clear terminal

Try typing a command below!`;

const easterEggs: Record<string, string> = {
  'sudo makeawesome': '🎉 Achievement unlocked: Portfolio is now awesome!\nYou have root access to creativity.',
  'whoami': '👤 komal.kasat\nFull-Stack + AI Engineer',
  'history': 'ls projects\ncd experience\ncat skills.txt\nsudo makeawesome\nwhoami',
  'sudo rm -rf /': '💥 System meltdown averted! Nice try, hacker. 😎',
  'sudo': 'You are not in the sudoers file. This incident will be reported.',
  'fortune': 'Programming is 10% writing code and 90% figuring out why it doesn\'t work.',
  'neofetch': '[KOMAL.KASAT] :: Uptime: 10,000+ hours\nStatus: Debugging reality...\nOS: PortfolioOS 1.0',
  './run_portfolio.sh': 'Executing portfolio...\n> Initializing...\n> Loading modules...\n> Portfolio ready!\nWelcome to Komal Kasat\'s interactive terminal portfolio.',
};

type Section = 'home' | 'projects' | 'experience' | 'skills' | 'contact';

export default function BootPage() {
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [booted, setBooted] = useState(false);
  const [output, setOutput] = useState<string[]>([helpText]);
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const [konamiActivated, setKonamiActivated] = useState(false);

  useKonamiCode(() => {
    setKonamiActivated(true);
    setOutput(prev => [...prev, '🎮 KONAMI CODE ACTIVATED! You\'ve unlocked the secret level!']);
    setTimeout(() => setKonamiActivated(false), 3000);
  });

  const handleCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase();
    
    if (command === 'clear') {
      setOutput([]);
      return;
    }
    
    if (command === 'ls projects') {
      setCurrentSection('projects');
      setOutput(prev => [...prev, 'Loading projects...']);
      return;
    }
    
    if (command === 'cd experience') {
      setCurrentSection('experience');
      setOutput(prev => [...prev, 'Navigating to experience...']);
      return;
    }
    
    if (command === 'cat skills.txt') {
      setCurrentSection('skills');
      setOutput(prev => [...prev, 'Displaying skills...']);
      return;
    }
    
    if (command === 'contact') {
      setCurrentSection('contact');
      setOutput(prev => [...prev, 'Establishing connection...']);
      return;
    }
    
    if (command === 'cd ~' || command === 'cd' || command === 'home') {
      setCurrentSection('home');
      setOutput(prev => [...prev, 'Returning to home...']);
      return;
    }
    
    if (easterEggs[command]) {
      setOutput(prev => [...prev, easterEggs[command]]);
    } else {
      setOutput(prev => [...prev, `Command not found: ${cmd}`]);
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#000' }}>
      <MatrixRain />
      <Clock />
      <CursorTrail />
      {konamiActivated && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '3rem',
          color: '#ff0055',
          textShadow: '0 0 20px #ff0055',
          zIndex: 1000,
          animation: 'pulse 0.5s infinite',
        }}>
          ⚡ POWER MODE ⚡
        </div>
      )}
      {!puzzleSolved ? (
        <HackInPuzzle onSolved={() => setPuzzleSolved(true)} />
      ) : !booted ? (
        <BootScreen onComplete={() => setBooted(true)} />
      ) : (
        <TerminalUI>
          <div>
            {currentSection === 'home' && (
              <>
                <Profile3D />
                <LiveCodeEditor />
              </>
            )}
            {currentSection === 'projects' && <ProjectsSection />}
            {currentSection === 'experience' && <ExperienceTimeline />}
            {currentSection === 'skills' && <SkillsMatrix />}
            {currentSection === 'contact' && <ContactSection />}
            <div style={{ marginTop: '1.5rem', minHeight: '120px' }}>
              {output.map((line, idx) => (
                <pre key={idx} style={{ color: '#00ff00', margin: 0 }}>{line}</pre>
              ))}
            </div>
            <TerminalCommandInput onCommand={handleCommand} />
          </div>
        </TerminalUI>
      )}
    </div>
  );
}
