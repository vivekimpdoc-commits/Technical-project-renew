import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, BookOpen, GraduationCap, Code, Activity, 
  GlobeLock, BrainCircuit, Shield, Building2, 
  Presentation, MapPin, ArrowLeft, Hexagon, Zap,
  Volume2, VolumeX, Award, UserCircle,
  Terminal, Play, RotateCcw, CheckCircle2,
  Camera, Database, Scale, Cloud, Lock, Server, Search
} from 'lucide-react';
import './AIWebsite.css';
import KavachChatbot from './components/KavachChatbot';
import CyberRadar from './components/CyberRadar';
import CourseViewer from './CourseViewer';
import CertificateQuiz from './CertificateQuiz';
import { projectModules as importedProjectModules } from './data/projectModulesDB';
import SecureTerminal from './components/SecureTerminal';
import LiveThreatTicker from './components/LiveThreatTicker';
import OfficerProfile from './components/OfficerProfile';
import { sound } from './utils/SoundEngine';


function CodeSandbox({ code, language }) {
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState([]);
  
  const executeJS = (codeString) => {
    try {
      const logs = [];
      const originalConsoleLog = console.log;
      console.log = (...args) => {
        logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
      };
      
      // Execute the code safely
      new Function(codeString)();
      
      // Restore console
      console.log = originalConsoleLog;
      
      if (logs.length === 0) logs.push("Execution successful, but no output (try adding console.log).");
      return logs.map(l => '> ' + l);
    } catch (err) {
      return ['> Error: ' + err.message];
    }
  };

  const executePython = async (codeString) => {
    try {
      const response = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: "python",
          version: "3.10.0",
          files: [{ content: codeString }]
        })
      });
      const data = await response.json();
      if (data.run && data.run.output) {
        return data.run.output.trim().split('\n').map(l => '> ' + l);
      }
      return ['> Error: ' + (data.message || 'No output')];
    } catch (err) {
      return ['> Network Error: Could not connect to remote execution server.'];
    }
  };

  const handleRun = async () => {
    setIsRunning(true);
    setOutput(['> Initializing environment...']);
    
    if (language.includes('Python')) {
      setOutput(prev => [...prev, '> Sending to Remote Python Execution Engine...']);
      const result = await executePython(code);
      setOutput(prev => [...prev, ...result]);
      setIsRunning(false);
    } else if (language.includes('JavaScript')) {
      setOutput(prev => [...prev, '> Running in local V8 Sandbox...']);
      setTimeout(() => {
        const result = executeJS(code);
        setOutput(prev => [...prev, ...result]);
        setIsRunning(false);
      }, 800);
    } else {
      // Docker Simulation
      setTimeout(() => setOutput(prev => [...prev, '> Building Docker image...']), 500);
      setTimeout(() => setOutput(prev => [...prev, '> Step 1/5 : FROM python:3.11-slim ---> 2b4c...']), 1200);
      setTimeout(() => setOutput(prev => [...prev, '> Successfully built ai-model:latest']), 2000);
      setTimeout(() => setOutput(prev => [...prev, '> Container running on port 8080']), 2800);
      setTimeout(() => setIsRunning(false), 3300);
    }
  };

  const handleReset = () => {
    setOutput([]);
    setIsRunning(false);
  };

  return (
    <div className="ai-sandbox-container">
      <div className="ai-sandbox-editor">
        <div className="ai-code-header">
          <div className="ai-code-dots">
            <span className="ai-code-dot red"></span>
            <span className="ai-code-dot yellow"></span>
            <span className="ai-code-dot green"></span>
          </div>
          <span className="ai-code-lang">{language}</span>
          <div className="ai-sandbox-actions">
            <button onClick={handleReset} disabled={isRunning} className="ai-btn-secondary">
              <RotateCcw size={14} /> Reset
            </button>
            <button onClick={handleRun} disabled={isRunning} className="ai-btn-primary">
              <Play size={14} fill="currentColor" /> {isRunning ? 'Running...' : 'Run Code'}
            </button>
          </div>
        </div>
        <pre className="ai-code-content">{code}</pre>
      </div>

      <div className="ai-sandbox-terminal">
        <div className="ai-terminal-header">
          <Terminal size={14} /> Output Console
        </div>
        <div className="ai-terminal-body">
          {output.length === 0 && !isRunning && (
            <div className="ai-terminal-placeholder">Click "Run Code" to see the output here.</div>
          )}
          {output.map((line, idx) => (
            <div key={idx} className="ai-terminal-line">{line}</div>
          ))}
          {!isRunning && output.length > 0 && (
            <div className="ai-terminal-success"><CheckCircle2 size={14} /> Execution finished successfully.</div>
          )}
          {isRunning && <div className="ai-terminal-cursor">_</div>}
        </div>
      </div>
    </div>
  );
}

export default function AIWebsite() {
  const navigate = useNavigate();

  const [loadingModule, setLoadingModule] = useState(null);
  const [transitionText, setTransitionText] = useState('INITIATING SECURE PROTOCOLS...');
  const [activeModuleDetails, setActiveModuleDetails] = useState(null);
  const [activeRoadmapPhase, setActiveRoadmapPhase] = useState(null);
  const [loadingRoadmapPhase, setLoadingRoadmapPhase] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showTerminal, setShowTerminal] = useState(true);
  
  // Gamification state
  const [completedModules, setCompletedModules] = useState(['overview']);
  const [showProfile, setShowProfile] = useState(false);
  
  // Speech Dictation state
  const [isSpeaking, setIsSpeaking] = useState(false);
  const synth = window.speechSynthesis;
  const handleBoxClick = (module) => {
    sound.init(); sound.playClick();
    setLoadingModule(module.title);
    
    // Simulate AI Decryption phases
    setTimeout(() => { sound.playTyping(); setTransitionText('AUTHENTICATING COMMANDER...'); }, 800);
    setTimeout(() => { sound.playTyping(); setTransitionText('DECRYPTING NEURAL PATHWAYS...'); }, 1600);
    setTimeout(() => { sound.playAccessGranted(); setTransitionText('ACCESS GRANTED.'); }, 2400);

    // Save target and navigate back
    setTimeout(() => {
      setLoadingModule(null);
      setActiveModuleDetails(module);
    }, 3200);
  };

  const handleRoadmapClick = (feature) => {
    sound.init(); sound.playClick();
    setLoadingRoadmapPhase(typeof feature === 'string' ? feature : feature.title);
    
    // Simulate AI Decryption phases
    setTimeout(() => { sound.playTyping(); setTransitionText('EXTRACTING SECURE CURRICULUM...'); }, 800);
    setTimeout(() => { sound.playTyping(); setTransitionText('DECRYPTING TECHNICAL SPECIFICATIONS...'); }, 1600);
    setTimeout(() => { sound.playAccessGranted(); setTransitionText('ACCESS GRANTED.'); }, 2400);

    setTimeout(() => {
      setLoadingRoadmapPhase(null);
      setActiveRoadmapPhase({
        title: typeof feature === 'string' ? feature : feature.title,
        desc: typeof feature === 'string' ? "" : feature.desc
      });
    }, 3200);
  };

  const toggleSpeech = (textToRead) => {
    if (isSpeaking) {
      synth.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'hi-IN'; // Will try to use Hindi voice, falls back to English nicely
      utterance.rate = 0.9;
      utterance.onend = () => setIsSpeaking(false);
      synth.speak(utterance);
      setIsSpeaking(true);
    }
  };

  // Cleanup speech on unmount or module change
  useEffect(() => {
    synth.cancel();
    setIsSpeaking(false);
  }, [activeModuleDetails]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Main Project Menu Modules
  // Main Project Menu Modules
  const projectModules = importedProjectModules;

  if (showTerminal) {
    return <SecureTerminal onComplete={() => setShowTerminal(false)} />;
  }

  if (showProfile) {
    return <OfficerProfile onBack={() => setShowProfile(false)} />;
  }

  return (
    <div className="ai-website-container">
      <LiveThreatTicker />
      <CyberRadar />

      <nav className="ai-navbar">
        <h1>K.A.V.A.C.H. AI CORE</h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="ai-back-btn" onClick={() => setShowProfile(true)} style={{ borderColor: '#f59e0b', color: '#f59e0b' }}>
            <UserCircle size={16} /> Command Profile
          </button>
          <button className="ai-back-btn" onClick={() => navigate('/dashboard')}>
            <ArrowLeft size={16} /> Return to Main Project
          </button>
        </div>
      </nav>

      <main className="ai-content">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <Hexagon size={64} color="#38bdf8" strokeWidth={1.5} style={{ filter: 'drop-shadow(0 0 20px rgba(56,189,248,0.6))', animation: 'spinSlowly 10s linear infinite' }} />
          <style>{`@keyframes spinSlowly { 100% { transform: rotate(360deg); } }`}</style>
        </div>
        
        <h2 className="ai-hero-title">UP Police Advanced AI Command Center</h2>
        <p className="ai-hero-subtitle">
          Welcome to the fully animated, next-generation gateway for the UP Police AI Project. Select any module below to initiate secure system protocols.
        </p>


        {activeModuleDetails ? (
          <CourseViewer 
            courseData={activeModuleDetails} 
            onBack={() => setActiveModuleDetails(null)} 
            onTakeQuiz={() => setShowQuiz(true)} 
          />
        ) : (
          <div className="ai-cards-container">
            {projectModules.map((module, index) => {

            const Icon = module.icon;
            
            // Hex to RGBA conversion for background shadows
            const hexToRgba = (hex, alpha) => {
              const r = parseInt(hex.slice(1, 3), 16);
              const g = parseInt(hex.slice(3, 5), 16);
              const b = parseInt(hex.slice(5, 7), 16);
              return `rgba(${r}, ${g}, ${b}, ${alpha})`;
            };

            return (
              <div 
                key={module.id} 
                className="ai-animated-card"
                onClick={() => handleBoxClick(module)}
                style={{ 
                  '--card-color': module.color, 
                  '--card-color-alpha': hexToRgba(module.color, 0.15) 
                }}
              >
                <div className="ai-card-icon-wrapper">
                  <Icon size={28} />
                </div>
                <h3>{module.title}</h3>
                <p>{module.desc}</p>
                <span className="ai-card-category">{module.category}</span>
              </div>
            );
          })}
          </div>
        )}
      </main>

      {/* High-Level AI Transition Overlay */}
      {(loadingModule || loadingRoadmapPhase) && (
        <div className="ai-transition-overlay">
          <div className="ai-transition-glitch"></div>
          
          <div className="ai-radar-loader">
            <div className="ai-radar-center"></div>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <h2 className="ai-transition-text" style={{ color: '#38bdf8', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
              TARGET: {(loadingModule || loadingRoadmapPhase).toUpperCase()}
            </h2>
            <div className="ai-transition-text ai-typewriter">
              {transitionText}
            </div>
          </div>
        </div>
      )}
      
      {/* Profile logic moved to full screen component above */}

      {/* K.A.V.A.C.H. AI Chatbot Assistant */}
      <KavachChatbot />

      {/* Certification Quiz Overlay */}
      {showQuiz && activeModuleDetails && (
        <CertificateQuiz 
          moduleTitle={activeModuleDetails.title}
          modColor={activeModuleDetails.color}
          onClose={() => setShowQuiz(false)}
        />
      )}
    </div>
  );
}
