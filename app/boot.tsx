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
import NavigationBar from '../components/NavigationBar';
import useKonamiCode from '../hooks/useKonamiCode';

const helpText = `Welcome to the hacker-themed portfolio!

💡 TIP: Click the "GUI" button in the top-right to switch to graphical navigation!

Type one of these commands to navigate:
- ls projects: List projects
- cat project_[PID].json: View project details (e.g., cat project_101.json)
- cd experience: Show experience timeline
- cat skills.txt: Show skills
- contact: Establish connection
- home or cd ~: Return to home
- ./run_portfolio.sh: Run portfolio intro
- sudo makeawesome: Unlock achievement
- whoami: Reveal identity
- history: Show command history
- clear: Clear terminal

Try typing a command below!`;

const projectDetails: Record<string, string> = {
  'project_101': `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 PROJECT: SkillSphere
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 DESCRIPTION:
AI-powered career guidance platform featuring:
• Resume generation with real-time previews
• PDF export functionality
• AI-driven interview preparation and feedback
• Multi-step forms with progress saving
• Customizable resume templates

💻 TECH STACK:
Next.js, FastAPI, MongoDB, AI/ML

🔗 GITHUB: https://github.com/Komalkasat09
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
  
  'project_102': `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 PROJECT: AI Internship Finder
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 DESCRIPTION:
Intelligent internship recommendation system with:
• Skill-based matching algorithm
• Resume analysis and AI ranking
• External API integration
• Real-time opportunity tracking
• Advanced filtering dashboards

💻 TECH STACK:
Next.js, ML, Tailwind, APIs

🔗 GITHUB: https://github.com/Komalkasat09
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
  
  'project_103': `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 PROJECT: Misinformation Detector
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 DESCRIPTION:
Advanced misinformation detection platform:
• 20+ agent pipeline architecture
• Fake news and deepfake detection
• Trend analysis with credibility scoring
• WhatsApp fact-checking bot
• Real-time global visualization (3D globe)

💻 TECH STACK:
Agentic AI, FastAPI, MongoDB, Next.js

🔗 GITHUB: https://github.com/Komalkasat09
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
  
  'project_104': `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 PROJECT: Sign Language Translator
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 DESCRIPTION:
Real-time inclusive communication platform:
• Sign-to-text translation
• Text-to-sign conversion
• Speech-to-sign functionality
• Live transcription
• AI calling agent integration
• Interactive learning modules and quizzes

💻 TECH STACK:
Next.js, FastAPI, ML, Computer Vision

🔗 GITHUB: https://github.com/Komalkasat09
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
};

const easterEggs: Record<string, string> = {
  'sudo makeawesome': '🎉 Achievement unlocked: Portfolio is now awesome!\nYou have root access to creativity.',
  'whoami': '👤 Komal Kasat\n📍 Mumbai, Maharashtra, India\n🎓 B.Tech AI & Data Science @ DJ Sanghvi College\n💼 Full-Stack + AI Engineer\n📧 komalkasat74653@gmail.com\n🔗 github.com/Komalkasat09',
  'history': 'ls projects\ncd experience\ncat skills.txt\ncat project_101.json\nsudo makeawesome\nwhoami',
  'sudo rm -rf /': '💥 System meltdown averted! Nice try, hacker. 😎',
  'sudo': 'You are not in the sudoers file. This incident will be reported.',
  'fortune': 'Programming is 10% writing code and 90% figuring out why it doesn\'t work.',
  'neofetch': '[KOMAL.KASAT] :: Uptime: 10,000+ hours\nStatus: Debugging reality...\nOS: PortfolioOS 1.0\n\n🎓 Education: B.Tech AI & Data Science (CGPA: 8.42)\n🏆 Achievements: 2x Hackathon Winner\n📝 Research: Published on arXiv\n📍 Location: Mumbai, India',
  './run_portfolio.sh': 'Executing portfolio...\n> Initializing...\n> Loading modules...\n> Portfolio ready!\nWelcome to Komal Kasat\'s interactive terminal portfolio.',
  'help': helpText,
};

type Section = 'home' | 'projects' | 'experience' | 'skills' | 'contact';

export default function BootPage() {
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [booted, setBooted] = useState(false);
  const [output, setOutput] = useState<string[]>([helpText]);
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const [konamiActivated, setKonamiActivated] = useState(false);
  const [terminalMode, setTerminalMode] = useState(true);

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
    
    // Handle project detail commands like "cat project_101.json"
    if (command.startsWith('cat project_') && command.endsWith('.json')) {
      const projectKey = command.replace('cat ', '').replace('.json', '');
      if (projectDetails[projectKey]) {
        setOutput(prev => [...prev, projectDetails[projectKey]]);
      } else {
        setOutput(prev => [...prev, `Project not found: ${projectKey}\nAvailable: project_101, project_102, project_103, project_104`]);
      }
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
      setOutput(prev => [...prev, `Command not found: ${cmd}\nType 'help' for available commands`]);
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
        <>
          <NavigationBar 
            currentSection={currentSection}
            onNavigate={(section) => {
              setCurrentSection(section);
              if (!terminalMode) {
                setOutput(prev => [...prev, `Navigated to ${section}`]);
              }
            }}
            terminalMode={terminalMode}
            onToggleMode={() => setTerminalMode(!terminalMode)}
          />
          <div style={{ paddingTop: '80px' }}>
            {terminalMode ? (
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
            ) : (
              <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
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
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
