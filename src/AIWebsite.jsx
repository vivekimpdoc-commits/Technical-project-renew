import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, BookOpen, GraduationCap, Code, Activity, 
  GlobeLock, BrainCircuit, Shield, Building2, 
  Presentation, MapPin, ArrowLeft, Hexagon, Zap
} from 'lucide-react';
import './AIWebsite.css';

export default function AIWebsite() {
  const navigate = useNavigate();

    const [loadingModule, setLoadingModule] = useState(null);
  const [transitionText, setTransitionText] = useState('INITIATING SECURE PROTOCOLS...');
  const [activeModuleDetails, setActiveModuleDetails] = useState(null);
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


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Main Project Menu Modules
  const projectModules = [
    { 
      id: 'overview', title: 'Home (मुख्य पृष्ठ)', desc: 'Introduction to the UP Police Technical Education Initiative.', icon: Home, color: '#38bdf8', category: 'General',
      details: {
        hindiSummary: "एक ही जगह से पूरे पुलिस विभाग का तकनीकी कंट्रोल और शिक्षा।",
        realWorldImpact: "Before: Information was scattered across paper files. After: Instantly access any department's data from one single screen.",
        longDesc: "Why is this necessary? As crime becomes increasingly digital, traditional policing methods are no longer enough. This portal serves as the central hub to educate, train, and modernize our police force.",
        features: ["Understanding digital transformation", "Overview of 21st-century cyber threats", "Paperless policing basics", "Ethical tech guidelines"],
        stats: { "Target Audience": "All UP Police Personnel", "Primary Goal": "100% Digital Readiness", "Certification": "Foundation Level", "Impact": "Modernized Force" }
      }
    },
    { 
      id: 'step-up', title: 'Step Up Literacy Software', desc: 'Basic computer education bridging the digital divide.', icon: BookOpen, color: '#d946ef', category: 'Education',
      details: {
        hindiSummary: "पुलिस कर्मियों के लिए बेसिक कंप्यूटर और टाइपिंग की आसान ट्रेनिंग।",
        realWorldImpact: "Before: Officers feared making mistakes on computers. After: Confidently typing digital FIRs and searching online records independently.",
        longDesc: "Why is this necessary? A significant portion of our ground staff lacks basic computer skills, creating bottlenecks in filing digital FIRs. This provides step-by-step, easy computer education.",
        features: ["Basic keyboard typing & navigation", "Familiarization with Windows/Linux", "Safe email & internet browsing", "CCTNS data entry process"],
        stats: { "Target Audience": "Constables & Head Constables", "Primary Goal": "Eliminate digital fear", "Prerequisites": "None", "Outcome": "Independent operation" }
      }
    },
    { 
      id: 'ai-course', title: 'Artificial Intelligence (AI) Course', desc: 'Step-by-step training on how AI models are built and trained.', icon: GraduationCap, color: '#818cf8', category: 'Education',
      details: {
        hindiSummary: "AI मॉडल कैसे काम करता है और खुद का AI मॉडल कैसे बनाएं, इसकी पूरी ट्रेनिंग।",
        realWorldImpact: "Before: Relying on expensive external AI tools. After: Building custom Neural Networks using UP Police's own secure data.",
        longDesc: "Why is this necessary? This course goes beyond just using AI. It teaches our officers exactly how to construct, train, and test custom Artificial Intelligence models from scratch. You will learn the actual programming behind Machine Learning.",
        features: ["Data Collection & Pre-processing (Cleaning data)", "Training Neural Networks (Deep Learning fundamentals)", "Building and testing custom AI Models", "Deploying Models to Production servers"],
        stats: { "Target Audience": "Technical Cell Officers", "Primary Goal": "Build Custom AI Models", "Duration": "12 Weeks", "Outcome": "In-house AI Developers" }
      }
    },
    { 
      id: 'masterclass', title: 'Software Masterclass', desc: 'Full lifecycle training: How robust software is actually engineered.', icon: Code, color: '#06b6d4', category: 'Education',
      details: {
        hindiSummary: "सॉफ्टवेयर कैसे बनता है? कोडिंग से लेकर डिप्लॉयमेंट (SDLC) तक का पूरा मास्टरक्लास।",
        realWorldImpact: "Before: Treating software as a 'black box'. After: Understanding the architecture, coding, testing, and deployment from scratch.",
        longDesc: "Why is this necessary? To stop relying on external vendors, our officers must learn the actual engineering behind software creation. This masterclass covers the full Software Development Life Cycle (SDLC) - teaching exactly how software is built from idea to execution.",
        features: ["Requirements Gathering & System Design", "Frontend & Backend Coding Architecture", "Software Testing and Quality Assurance", "CI/CD & Secure Server Deployment"],
        stats: { "Target Audience": "Technical Cell Officers", "Primary Goal": "Master Software Engineering", "Level": "Advanced", "Outcome": "Full-Stack Police Developers" }
      }
    },
    { 
      id: 'mlops', title: 'AI Operations - MLOps', desc: 'Teaching how to deploy and manage AI systems.', icon: Activity, color: '#8b5cf6', category: 'Operations',
      details: {
        hindiSummary: "AI सिस्टम्स को बिना क्रैश हुए 24/7 चलाने की टेक्निकल ट्रेनिंग।",
        realWorldImpact: "Before: AI camera systems crashed during heavy traffic. After: MLOps ensures automated servers balance the load and stay online 24/7.",
        longDesc: "Why is this necessary? Creating an AI model is only half the battle. Tech division officers need to learn how to keep AI systems running 24/7 without crashing, especially during high-alert situations.",
        features: ["AI model deployment", "Monitoring AI for errors", "Handling live CCTV data streams", "Automated threat-algorithm updates"],
        stats: { "Target Audience": "System Administrators", "Primary Goal": "Maintain 100% Uptime", "Focus Area": "Infrastructure", "Outcome": "Stable AI Operations" }
      }
    },
    { 
      id: 'advanced-ai', title: 'Advanced AI & Cyber Command', desc: 'High-level education on dark web and global cyber threats.', icon: GlobeLock, color: '#10b981', category: 'Operations',
      details: {
        hindiSummary: "अंतर्राष्ट्रीय साइबर क्राइम और डार्क वेब के अपराधियों को ट्रैक करने की कमांड।",
        realWorldImpact: "Before: Impossible to trace Bitcoin ransoms. After: Advanced tools trace crypto wallets globally to identify the syndicates.",
        longDesc: "Why is this necessary? Cybercrime has no borders. Officers must be educated on how international syndicates operate on the Dark Web, and how to use advanced AI to track cryptocurrency.",
        features: ["Dark Web and Tor networks", "Cryptocurrency tracing", "Advanced ransomware analysis", "Global threat intelligence"],
        stats: { "Target Audience": "STF & Cyber Command", "Primary Goal": "Tackle organized crime", "Requirement": "Top Secret Clearance", "Outcome": "Global Cyber Readiness" }
      }
    },
    { 
      id: 'police-functioning', title: 'Police Functioning (AI)', desc: 'Training on integrating AI into daily police duties.', icon: BrainCircuit, color: '#f59e0b', category: 'Operations',
      details: {
        hindiSummary: "रोजमर्रा के पुलिस काम (FIR, पेट्रोलिंग) को AI की मदद से तेज और आसान बनाना।",
        realWorldImpact: "Before: Typing an FIR took 45 minutes of paperwork. After: Voice-to-Text AI drafts the entire FIR in 5 minutes by just speaking.",
        longDesc: "Why is this necessary? AI should help the everyday officer. This module educates officers on how to use AI tools to reduce paperwork and patrol efficiently.",
        features: ["Voice-to-Text for fast FIR drafting", "Predictive Heatmaps for patrolling", "Automated suspect matching", "Smart resource allocation"],
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
      id: 'project-ppt', title: 'Project PPT', desc: 'Learning how to present technical data to the government.', icon: Presentation, color: '#94a3b8', category: 'Administrative',
      details: {
        hindiSummary: "अदालत या सरकार के सामने तकनीकी सबूतों को आसानी से पेश करने की कला।",
        realWorldImpact: "Before: Judges struggled to understand raw cyber data. After: Clear, digital presentations secure faster convictions.",
        longDesc: "Why is this necessary? Officers often brief senior officials or courts. This module teaches how to take complex technical data and present it clearly using modern presentation software.",
        features: ["Creating executive summaries", "Visualizing complex crime data", "Version control for legal docs", "Digital presentation skills"],
        stats: { "Target Audience": "PROs & Investigating Officers", "Primary Goal": "Clear communication", "Focus Area": "Govt Briefings", "Outcome": "Professional Presentations" }
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
      <div className="ai-grid-background"></div>
      
      {/* Floating Nodes */}
      <div className="ai-floating-node" style={{ top: '15%', left: '10%', animationDelay: '0s' }}></div>
      <div className="ai-floating-node" style={{ top: '70%', left: '85%', animationDelay: '2s' }}></div>
      <div className="ai-floating-node" style={{ top: '35%', left: '75%', animationDelay: '1s' }}></div>
      <div className="ai-floating-node" style={{ top: '85%', left: '20%', animationDelay: '3s' }}></div>
      <div className="ai-floating-node" style={{ top: '50%', left: '15%', animationDelay: '1.5s', width: '10px', height: '10px' }}></div>

      <nav className="ai-navbar">
        <h1>K.A.V.A.C.H. AI CORE</h1>
        <button className="ai-back-btn" onClick={() => navigate('/dashboard')}>
          <ArrowLeft size={16} /> Return to Main Project
        </button>
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
          <div className="ai-details-container">
            <div className="ai-details-status">SYSTEM ONLINE & SECURE</div>
            
            <div className="ai-details-hologram" style={{ borderColor: activeModuleDetails.color }}>
              <div className="ai-details-icon-wrapper" style={{ color: activeModuleDetails.color }}>
                {activeModuleDetails.icon && <activeModuleDetails.icon size={100} strokeWidth={1} />}
              </div>
            </div>
            
            <h2 className="ai-details-title">{activeModuleDetails.title}</h2>
            {activeModuleDetails.details?.hindiSummary && (
              <div className="ai-details-hindi-summary">
                {activeModuleDetails.details.hindiSummary}
              </div>
            )}
            
            <div className="ai-details-body" style={{ '--module-color': activeModuleDetails.color }}>
              <div className="ai-details-long-desc">
                {activeModuleDetails.details?.longDesc || activeModuleDetails.desc}
              </div>
              
              <div className="ai-details-grid">
                <div className="ai-details-section">
                  <h4>Curriculum & Key Learnings</h4>
                  <ul className="ai-details-features">
                    {activeModuleDetails.details?.features?.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="ai-details-section">
                  <h4>Educational Goals & Impact</h4>
                  <div className="ai-details-stats">
                    {activeModuleDetails.details?.stats && Object.entries(activeModuleDetails.details.stats).map(([key, value], idx) => (
                      <div className="ai-stat-row" key={idx}>
                        <span className="ai-stat-label">{key}</span>
                        <span className="ai-stat-value">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <button className="ai-details-close-btn" onClick={() => setActiveModuleDetails(null)}>
              CLOSE MODULE
            </button>
          </div>
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
      {loadingModule && (
        <div className="ai-transition-overlay">
          <div className="ai-transition-glitch"></div>
          
          <div className="ai-radar-loader">
            <div className="ai-radar-center"></div>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <h2 className="ai-transition-text" style={{ color: '#38bdf8', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
              TARGET: {loadingModule.toUpperCase()}
            </h2>
            <div className="ai-transition-text ai-typewriter">
              {transitionText}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
