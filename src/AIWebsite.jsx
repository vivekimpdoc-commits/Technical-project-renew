import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, BookOpen, GraduationCap, Code, Activity, 
  GlobeLock, BrainCircuit, Shield, Building2, 
  Presentation, MapPin, ArrowLeft, Hexagon, Zap,
  Volume2, VolumeX, Award, UserCircle,
  Terminal, Play, RotateCcw, CheckCircle2
} from 'lucide-react';
import './AIWebsite.css';
import KavachChatbot from './components/KavachChatbot';
import CyberRadar from './components/CyberRadar';
import ModuleDetail from './ModuleDetail';
import RoadmapDetail from './RoadmapDetail';

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
  
  // Gamification state
  const [completedModules, setCompletedModules] = useState(['overview']);
  const [showProfile, setShowProfile] = useState(false);
  
  // Speech Dictation state
  const [isSpeaking, setIsSpeaking] = useState(false);
  const synth = window.speechSynthesis;
  const handleBoxClick = (module) => {
    setLoadingModule(module.title);
    
    // Simulate AI Decryption phases
    setTimeout(() => setTransitionText('AUTHENTICATING COMMANDER...'), 800);
    setTimeout(() => setTransitionText('DECRYPTING NEURAL PATHWAYS...'), 1600);
    setTimeout(() => setTransitionText('ACCESS GRANTED.'), 2400);

    // Save target and navigate back
    setTimeout(() => {
      setLoadingModule(null);
      setActiveModuleDetails(module);
    }, 3200);
  };

  const handleRoadmapClick = (feature) => {
    setLoadingRoadmapPhase(typeof feature === 'string' ? feature : feature.title);
    
    // Simulate AI Decryption phases
    setTimeout(() => setTransitionText('EXTRACTING SECURE CURRICULUM...'), 800);
    setTimeout(() => setTransitionText('DECRYPTING TECHNICAL SPECIFICATIONS...'), 1600);
    setTimeout(() => setTransitionText('ACCESS GRANTED.'), 2400);

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
  const projectModules = [

    { 
      id: 'step-up', title: 'Step Up Literacy Software', desc: 'Basic computer education bridging the digital divide.', icon: BookOpen, color: '#d946ef', category: 'Education',
      details: {
        hindiSummary: "पुलिस कर्मियों के लिए बेसिक कंप्यूटर और टाइपिंग की आसान ट्रेनिंग।",
        realWorldImpact: "Before: Officers feared making mistakes on computers. After: Confidently typing digital FIRs and searching online records independently.",
        longDesc: "Why is this necessary? A significant portion of our ground staff lacks basic computer skills, creating bottlenecks in filing digital FIRs. This provides step-by-step, easy computer education.",
        features: [
          { title: "1. Requirements & Analysis", desc: "ज़रूरतों को समझना (Gathering requirements for Police Software)" },
          { title: "2. UI/UX Design", desc: "डिजाइनिंग फेज (Creating wireframes and interfaces)" },
          { title: "3. Frontend Development", desc: "फ्रंटेंड डेवलपमेंट (Building the visible parts with React)" },
          { title: "4. Backend & Database", desc: "बैकेंड डेवलपमेंट (Server logic and secure data storage)" },
          { title: "5. Testing & QA", desc: "टेस्टिंग और जांच (Finding bugs and ensuring quality)" },
          { title: "6. Deployment & Support", desc: "लाइव करना और रखरखाव (Launching the software live)" }
        ],
        stats: { "Target Audience": "Constables & Head Constables", "Primary Goal": "Eliminate digital fear", "Prerequisites": "None", "Outcome": "Independent operation" }
      }
    },
    { 
      id: 'ai-course', title: 'Artificial Intelligence (AI) Course', desc: 'Step-by-step training on how AI models are built and trained.', icon: GraduationCap, color: '#818cf8', category: 'Education',
      details: {
        hindiSummary: "AI मॉडल कैसे काम करता है और खुद का AI मॉडल कैसे बनाएं, इसकी पूरी ट्रेनिंग।",
        realWorldImpact: "Before: Relying on expensive external AI tools. After: Building custom Neural Networks using UP Police's own secure data.",
        longDesc: "Why is this necessary? This course goes beyond just using AI. It teaches our officers exactly how to construct, train, and test custom Artificial Intelligence models from scratch. You will learn the actual programming behind Machine Learning.",
        features: [
          { title: "Module 1-3: Intro & Data", desc: "AI Fundamentals, Problem Definition, and Data Collection" },
          { title: "Module 4-6: Math & Coding", desc: "Data Cleaning, Mathematics for AI, and Python/Pandas" },
          { title: "Module 7-8: ML & Deep Learning", desc: "Regression, Neural Networks, TensorFlow & PyTorch" },
          { title: "Module 9-11: Vision & NLP", desc: "Computer Vision, Text Processing, LLMs & Generative AI" }
        ],
        stats: { "Target Audience": "Technical Cell Officers", "Primary Goal": "Build Custom AI Models", "Duration": "12 Weeks", "Outcome": "In-house AI Developers" }
      }
    },
    { 
      id: 'masterclass', title: 'Software Masterclass', desc: 'Full lifecycle training: How robust software is actually engineered.', icon: Code, color: '#06b6d4', category: 'Education',
      details: {
        hindiSummary: "सॉफ्टवेयर कैसे बनता है? कोडिंग से लेकर डिप्लॉयमेंट (SDLC) तक का पूरा मास्टरक्लास।",
        realWorldImpact: "Before: Treating software as a 'black box'. After: Understanding the architecture, coding, testing, and deployment from scratch.",
        longDesc: "Why is this necessary? To stop relying on external vendors, our officers must learn the actual engineering behind software creation. This masterclass covers the full Software Development Life Cycle (SDLC) - teaching exactly how software is built from idea to execution.",
        features: [
          { title: "Modern Tech Stack", desc: "React, Node.js, SQL/NoSQL, Docker, AWS" },
          { title: "Career Paths & Roles", desc: "Frontend, Backend, DevOps, Data Engineer" },
          { title: "Open Source & Git", desc: "Version Control, PRs, Code Review, CI/CD" },
          { title: "System Design", desc: "Load Balancing, Caching, Microservices, Scalability" }
        ],
        stats: { "Target Audience": "Technical Cell Officers", "Primary Goal": "Master Software Engineering", "Level": "Advanced", "Outcome": "Full-Stack Police Developers" }
      }
    },
    { 
      id: 'mlops', title: 'AI Operations - MLOps', desc: 'Teaching how to deploy and manage AI systems.', icon: Activity, color: '#8b5cf6', category: 'Operations',
      details: {
        hindiSummary: "AI सिस्टम्स को बिना क्रैश हुए 24/7 चलाने की टेक्निकल ट्रेनिंग।",
        realWorldImpact: "Before: AI camera systems crashed during heavy traffic. After: MLOps ensures automated servers balance the load and stay online 24/7.",
        longDesc: "Why is this necessary? Creating an AI model is only half the battle. Tech division officers need to learn how to keep AI systems running 24/7 without crashing, especially during high-alert situations.",
        features: [
          { title: "Continuous Integration (CI)", desc: "Automated testing and code merging for AI models" },
          { title: "Continuous Deployment (CD)", desc: "Deploying models to secure UP Police servers without downtime" },
          { title: "Model Monitoring", desc: "Tracking AI accuracy and detecting data drift in real-time" },
          { title: "Infrastructure as Code", desc: "Managing cloud resources automatically via scripts" }
        ],
        stats: { "Target Audience": "System Administrators", "Primary Goal": "Maintain 100% Uptime", "Focus Area": "Infrastructure", "Outcome": "Stable AI Operations" }
      }
    },
    { 
      id: 'advanced-ai', title: 'Advanced AI & Cyber Command', desc: 'High-level education on dark web and global cyber threats.', icon: GlobeLock, color: '#10b981', category: 'Operations',
      details: {
        hindiSummary: "अंतर्राष्ट्रीय साइबर क्राइम और डार्क वेब के अपराधियों को ट्रैक करने की कमांड।",
        realWorldImpact: "Before: Impossible to trace Bitcoin ransoms. After: Advanced tools trace crypto wallets globally to identify the syndicates.",
        longDesc: "Why is this necessary? Cybercrime has no borders. Officers must be educated on how international syndicates operate on the Dark Web, and how to use advanced AI to track cryptocurrency.",
        features: [
          { title: "Dark Web Scanner", desc: "Simulated Tor network routing to find leaked police data" },
          { title: "Crypto Flow Tracker", desc: "Tracing Bitcoin transactions through tumblers to exchanges" },
          { title: "Device Forensics", desc: "Extracting hex data and recovering deleted media from devices" },
          { title: "Global Threat Intelligence", desc: "Tracking international cyber syndicates and ransomware" }
        ],
        stats: { "Target Audience": "STF & Cyber Command", "Primary Goal": "Tackle organized crime", "Requirement": "Top Secret Clearance", "Outcome": "Global Cyber Readiness" }
      }
    },
    { 
      id: 'police-functioning', title: 'Police Functioning (AI)', desc: 'Training on integrating AI into daily police duties.', icon: BrainCircuit, color: '#f59e0b', category: 'Operations',
      details: {
        hindiSummary: "रोजमर्रा के पुलिस काम (FIR, पेट्रोलिंग) को AI की मदद से तेज और आसान बनाना।",
        realWorldImpact: "Before: Typing an FIR took 45 minutes of paperwork. After: Voice-to-Text AI drafts the entire FIR in 5 minutes by just speaking.",
        longDesc: "Why is this necessary? AI should help the everyday officer. This module educates officers on how to use AI tools to reduce paperwork and patrol efficiently.",
        features: [
          { title: "Smart FIR Drafting", desc: "Voice-to-Text translation for rapid FIR creation" },
          { title: "Predictive Patrolling", desc: "AI Heatmaps showing high-probability crime zones" },
          { title: "Resource Allocation", desc: "Optimizing duty rosters and vehicle deployments automatically" },
          { title: "Automated Suspect Matching", desc: "Cross-referencing CCTV feeds with criminal databases" }
        ],
        stats: { "Target Audience": "Station House Officers (SHO)", "Primary Goal": "Reduce paperwork", "Benefit": "More time for policing", "Outcome": "Smart Police Stations" }
      }
    },
    { 
      id: 'thane-level', title: 'Thane Level (थाना स्तर)', desc: 'Educating Thana staff on local digital management.', icon: Shield, color: '#ef4444', category: 'Administrative',
      details: {
        hindiSummary: "थाने के रिकॉर्ड, मालखाना और ड्यूटी को रजिस्टर से हटाकर कंप्यूटर पर लाना।",
        realWorldImpact: "Before: Finding old evidence in Malkhana took hours. After: Scanning a barcode instantly shows the exact shelf and case details.",
        longDesc: "Why is this necessary? The Thana is the first point of contact. Staff must maintain digital records perfectly so no evidence or complaint is ever lost or misplaced.",
        features: ["Managing Digital Malkhana (Evidence)", "Electronic Duty Roster", "Citizen complaint tracking", "Local data security"],
        stats: { "Target Audience": "Thana Clerks & Sub-Inspectors", "Primary Goal": "Zero data loss", "Focus Area": "Record Keeping", "Outcome": "Efficient Thana Admin" }
      }
    },
    { 
      id: 'district-level', title: 'District Level (जिला स्तर)', desc: 'Training for SPs on data-driven decision making.', icon: Building2, color: '#0ea5e9', category: 'Administrative',
      details: {
        hindiSummary: "SP/SSP महोदय के लिए पूरे जिले के अपराध का लाइव डेटा और रणनीतिक डैशबोर्ड।",
        realWorldImpact: "Before: Waiting for weekly paper reports from 20 Thanas. After: One click shows which Thana needs immediate backup today.",
        longDesc: "Why is this necessary? District Chiefs handle massive amounts of data. This teaches leadership how to read digital dashboards and make strategic decisions based on data, not just intuition.",
        features: ["Interpreting crime analytics", "Cross-Thana pattern recognition", "Monitoring high-profile cases", "Automating performance reviews"],
        stats: { "Target Audience": "SP / SSP / ASP", "Primary Goal": "Data-driven leadership", "Focus Area": "Strategic Planning", "Outcome": "Effective District Control" }
      }
    },

    { 
      id: 'analytics', title: 'Live Analytics & Metrics', desc: 'Educating officers on reading live performance metrics.', icon: MapPin, color: '#3b82f6', category: 'Operations',
      details: {
        hindiSummary: "पुलिस के काम का लाइव रिजल्ट और रैंकिंग देखना ताकि काम में सुधार हो सके।",
        realWorldImpact: "Before: Officers didn't know their district's rank until year-end. After: Live leaderboards motivate officers to improve daily response times.",
        longDesc: "Why is this necessary? Without understanding performance metrics, officers cannot improve. This teaches how the department evaluates response times and case solving rates using live analytics.",
        features: ["How response times are calculated", "Reading dynamic KPI dashboards", "Crime trend forecasting models", "Using data to improve performance"],
        stats: { "Target Audience": "All Commanding Officers", "Primary Goal": "Performance improvement", "Focus Area": "Accountability", "Outcome": "Transparent Evaluation" }
      }
    }
  ];

  return (
    <div className="ai-website-container">
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


        {activeModuleDetails ? (() => {
          const mod = activeModuleDetails;
          const d = mod.details || {};
          return (
            <div className="ai-details-container">
              <div style={{ width: '100%', maxWidth: '900px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div className="ai-details-status" style={{ marginBottom: 0 }}>SYSTEM ONLINE & SECURE</div>
                <button className="ai-back-btn" onClick={() => setActiveModuleDetails(null)}>
                  <Home size={16} /> AI Home
                </button>
              </div>
              
              {/* Hero Banner */}
              <div className="ai-details-hero" style={{ borderColor: mod.color, background: `linear-gradient(135deg, ${mod.color}22 0%, transparent 70%)` }}>
                <div className="ai-details-icon-wrapper" style={{ color: mod.color, filter: `drop-shadow(0 0 30px ${mod.color})` }}>
                  {mod.icon && <mod.icon size={80} strokeWidth={1} />}
                </div>
                <div className="ai-details-hero-text">
                  <h2 className="ai-details-title">{mod.title}</h2>
                  <p className="ai-details-subtitle">{mod.desc}</p>
                  <div className="ai-details-badges">
                    <span className="ai-badge" style={{ background: mod.color }}>{mod.category}</span>
                    {d.stats?.["Target Audience"] && <span className="ai-badge ai-badge-outline" style={{ borderColor: mod.color, color: mod.color }}>{d.stats["Target Audience"]}</span>}
                    {d.stats?.Duration && <span className="ai-badge ai-badge-outline" style={{ borderColor: mod.color, color: mod.color }}>{d.stats.Duration}</span>}
                  </div>
                </div>
              </div>

              {/* Hindi Summary */}
              {d.hindiSummary && (
                <div className="ai-details-hindi-card" style={{ position: 'relative' }}>
                  <div className="ai-hindi-icon">🇮🇳</div>
                  <p style={{ flex: 1 }}>{d.hindiSummary}</p>
                  <button 
                    onClick={() => toggleSpeech(d.hindiSummary)} 
                    className="ai-speech-btn"
                    title="Listen to Audio"
                  >
                    {isSpeaking ? <VolumeX size={20} color="#f87171" /> : <Volume2 size={20} color="#fbbf24" />}
                  </button>
                </div>
              )}

              <div className="ai-details-body" style={{ '--module-color': mod.color }}>

                {/* Why This Module */}
                <div className="ai-details-section ai-details-why">
                  <h4><Zap size={18} style={{ color: mod.color }} /> Why This Module?</h4>
                  <p className="ai-details-long-desc">{d.longDesc || mod.desc}</p>
                </div>

                {/* Before / After Impact */}
                {d.realWorldImpact && (
                  <div className="ai-details-section ai-details-impact">
                    <h4><Activity size={18} style={{ color: mod.color }} /> Real-World Impact: Before vs After</h4>
                    <div className="ai-impact-grid">
                      <div className="ai-impact-card ai-impact-before">
                        <div className="ai-impact-label">❌ BEFORE</div>
                        <p>{d.realWorldImpact.split('After:')[0].replace('Before:', '').trim()}</p>
                      </div>
                      <div className="ai-impact-arrow">→</div>
                      <div className="ai-impact-card ai-impact-after">
                        <div className="ai-impact-label">✅ AFTER</div>
                        <p>{d.realWorldImpact.split('After:')[1]?.trim() || ''}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Stats Dashboard */}
                {d.stats && (
                  <div className="ai-details-section ai-details-stats-section">
                    <h4><Shield size={18} style={{ color: mod.color }} /> Educational Goals & Metrics</h4>
                    <div className="ai-stats-grid">
                      {Object.entries(d.stats).map(([key, value], idx) => (
                        <div className="ai-stat-card" key={idx} style={{ '--stat-delay': `${idx * 0.15}s` }}>
                          <div className="ai-stat-icon" style={{ color: mod.color }}>
                            {idx === 0 ? <GraduationCap size={24} /> : idx === 1 ? <Zap size={24} /> : idx === 2 ? <Code size={24} /> : <BrainCircuit size={24} />}
                          </div>
                          <span className="ai-stat-label">{key}</span>
                          <span className="ai-stat-value" style={{ color: mod.color }}>{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Learning Roadmap (NOW DYNAMICALLY POPULATED) */}
                <div className="ai-details-section ai-details-roadmap">
                  <h4><MapPin size={18} style={{ color: mod.color }} /> Modules & Sub-topics Roadmap</h4>
                  <div className="ai-roadmap-timeline">
                    {d.features?.map((feature, idx) => (
                      <div 
                        className="ai-roadmap-step" 
                        key={idx} 
                        style={{ '--step-delay': `${idx * 0.2}s` }}
                      >
                        <div className="ai-roadmap-dot" style={{ background: mod.color, boxShadow: `0 0 12px ${mod.color}` }}></div>
                        <div className="ai-roadmap-line" style={{ background: idx < d.features.length - 1 ? mod.color : 'transparent' }}></div>
                        <div className="ai-roadmap-content">
                          <span className="ai-roadmap-phase">{typeof feature === 'string' ? feature : feature.title}</span>
                          <p>{typeof feature === 'string' ? '' : feature.desc}</p>
                          <div style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'flex-start' }}>
                            <button 
                              onClick={() => handleRoadmapClick(feature)}
                              style={{ 
                                background: `${mod.color}15`, 
                                color: mod.color, 
                                border: `1px solid ${mod.color}44`,
                                padding: '0.6rem 1.25rem', 
                                borderRadius: '2rem', 
                                fontSize: '0.85rem', 
                                fontWeight: 'bold',
                                display: 'flex', alignItems: 'center', gap: '0.5rem',
                                transition: 'all 0.2s ease',
                                cursor: 'pointer'
                              }}
                              onMouseEnter={(e) => { e.currentTarget.style.background = mod.color; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                              onMouseLeave={(e) => { e.currentTarget.style.background = `${mod.color}15`; e.currentTarget.style.color = mod.color; e.currentTarget.style.transform = 'translateY(0)'; }}
                            >
                              Explore Phase Details &rarr;
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Start Guide */}
                <div className="ai-details-section ai-details-quickstart">
                  <h4><Code size={18} style={{ color: mod.color }} /> Quick Start Guide</h4>
                  <div className="ai-quickstart-steps">
                    <div className="ai-qs-step">
                      <div className="ai-qs-num" style={{ background: mod.color }}>1</div>
                      <div><strong>Prerequisites:</strong> Basic computer literacy, internet connection, and a modern web browser (Chrome/Edge recommended).</div>
                    </div>
                    <div className="ai-qs-step">
                      <div className="ai-qs-num" style={{ background: mod.color }}>2</div>
                      <div><strong>Access Portal:</strong> Login with your official UP Police credentials at the KARTAVYA portal to unlock all study materials.</div>
                    </div>
                    <div className="ai-qs-step">
                      <div className="ai-qs-num" style={{ background: mod.color }}>3</div>
                      <div><strong>Start Learning:</strong> Navigate to "{mod.title}" module, watch the video tutorials, read the PDF guides, and complete assignments.</div>
                    </div>
                    <div className="ai-qs-step">
                      <div className="ai-qs-num" style={{ background: mod.color }}>4</div>
                      <div><strong>Get Certified:</strong> After completing all assignments and the final assessment, download your official completion certificate.</div>
                    </div>
                  </div>
                </div>

                {/* Code Preview (for technical modules) */}
                {(mod.id === 'ai-course' || mod.id === 'masterclass' || mod.id === 'mlops') && (
                  <div className="ai-details-section ai-details-code">
                    <h4><Code size={18} style={{ color: mod.color }} /> Interactive Sandbox</h4>
                    <CodeSandbox 
                      code={mod.id === 'ai-course' ? `# Pure Python: Basic AI Perceptron (No TensorFlow needed)\nprint("Initializing custom Neural Network...")\n\ndef predict(inputs, weights):\n    activation = sum(i * w for i, w in zip(inputs, weights))\n    return 1.0 if activation >= 0.5 else 0.0\n\n# Data: [Suspect_Age_Over_25, Has_Prior_Record]\nX_train = [[1, 0], [1, 1], [0, 1], [0, 0]]\ny_train = [0, 1, 1, 0] # 1 = High Risk\nweights = [0.0, 0.0]\n\nprint("Training model for 10 epochs...")\nfor epoch in range(10):\n    for i in range(len(X_train)):\n        prediction = predict(X_train[i], weights)\n        error = y_train[i] - prediction\n        weights[0] += 0.2 * error * X_train[i][0]\n        weights[1] += 0.2 * error * X_train[i][1]\n\nprint("Training complete! Final weights:", [round(w, 2) for w in weights])\nprint("Testing new suspect (Under 25, Prior Record):")\nprint("Prediction Risk Level (1=High, 0=Low):", predict([0, 1], weights))` : mod.id === 'masterclass' ? `// JavaScript: Filtering and analyzing live crime data\nconsole.log("Fetching live UP Police Crime Database...");\n\nconst recentCrimes = [\n  { id: 'FIR-001', type: 'Cyber', priority: 'High', status: 'Open' },\n  { id: 'FIR-002', type: 'Theft', priority: 'Low', status: 'Closed' },\n  { id: 'FIR-003', type: 'Cyber', priority: 'High', status: 'Open' }\n];\n\nconsole.log("Total records found: " + recentCrimes.length);\n\n// AI Logic: Auto-flag High Priority Open cases\nconst actionRequired = recentCrimes.filter(\n  crime => crime.status === 'Open' && crime.priority === 'High'\n);\n\nconsole.log("Analyzing threat patterns...");\nconsole.log("ALERT: " + actionRequired.length + " high priority cases need immediate attention.");\nactionRequired.forEach(c => console.log("-> Flagged: " + c.id + " (" + c.type + ")"));` : `# Docker: Deploy AI Model Container\nFROM python:3.11-slim\nWORKDIR /app\n\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\n\nCOPY . .\nEXPOSE 8080\n\n# Health check for MLOps monitoring\nHEALTHCHECK --interval=30s --timeout=5s \\\n  CMD curl -f http://localhost:8080/health || exit 1\n\nCMD ["python", "serve_model.py"]\n\n---\n# docker-compose.yml\nversion: "3.8"\nservices:\n  ai-model:\n    build: .\n    ports: ["8080:8080"]\n    restart: always\n    deploy:\n      resources:\n        limits:\n          memory: 2G`} 
                      language={mod.id === 'ai-course' ? 'Python (Pure)' : mod.id === 'masterclass' ? 'JavaScript / Node' : 'Docker / YAML'}
                    />
                  </div>
                )}

              </div>
              
              <button className="ai-details-close-btn" onClick={() => setActiveModuleDetails(null)}>
                ← CLOSE MODULE & RETURN
              </button>
            </div>
          );
        })() : (
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
      
      {/* Profile / Gamification Modal */}
      {showProfile && (
        <div className="ai-transition-overlay" style={{ zIndex: 999999 }}>
          <div className="ai-profile-modal">
            <button className="ai-profile-close" onClick={() => setShowProfile(false)}>X</button>
            <h2><Award size={28} /> Commander Profile</h2>
            <div className="ai-profile-stats">
              <div className="ai-profile-stat-box">
                <span className="stat-num">{completedModules.length} / {projectModules.length}</span>
                <span className="stat-label">Modules Completed</span>
              </div>
              <div className="ai-profile-stat-box">
                <span className="stat-num">Rank</span>
                <span className="stat-label">Cyber Warrior</span>
              </div>
            </div>
            <h3>Badges Earned</h3>
            <div className="ai-profile-badges">
              {completedModules.map(modId => (
                <div key={modId} className="ai-profile-badge earned">
                  <Shield size={24} />
                  <span>{projectModules.find(m => m.id === modId)?.title.split(' ')[0]}</span>
                </div>
              ))}
              <div className="ai-profile-badge locked">
                <GlobeLock size={24} />
                <span>Locked</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Roadmap Detailed View Overlay */}
      {activeRoadmapPhase && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 999999, background: '#0f172a', overflowY: 'auto' }}>
          <RoadmapDetail 
            feature={activeRoadmapPhase} 
            modColor={activeModuleDetails?.color || '#38bdf8'}
            modTitle={activeModuleDetails?.title || 'Course'}
            onBack={() => setActiveRoadmapPhase(null)} 
          />
        </div>
      )}

      {/* K.A.V.A.C.H. AI Chatbot Assistant */}
      <KavachChatbot />
    </div>
  );
}
