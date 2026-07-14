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
              <div className="ai-details-hindi-card">
                <div className="ai-hindi-icon">🇮🇳</div>
                <p>{d.hindiSummary}</p>
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

              {/* Detailed Curriculum */}
              <div className="ai-details-section ai-details-curriculum">
                <h4><BookOpen size={18} style={{ color: mod.color }} /> Detailed Curriculum & Key Learnings</h4>
                <div className="ai-curriculum-grid">
                  {d.features?.map((feature, idx) => (
                    <div className="ai-curriculum-item" key={idx} style={{ '--item-delay': `${idx * 0.1}s`, borderLeftColor: mod.color }}>
                      <div className="ai-curriculum-number" style={{ background: mod.color }}>{String(idx + 1).padStart(2, '0')}</div>
                      <div className="ai-curriculum-content">
                        <h5>{feature}</h5>
                        <p>
                          {idx === 0 && "Foundation module — start here to build core understanding of this topic from scratch."}
                          {idx === 1 && "Deep-dive into the technical architecture, algorithms, and data flow behind this system."}
                          {idx === 2 && "Hands-on practical lab: build a working prototype using real-world datasets and tools."}
                          {idx === 3 && "Deployment & operations — take your prototype live and monitor it in production environments."}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

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

              {/* Learning Roadmap */}
              <div className="ai-details-section ai-details-roadmap">
                <h4><MapPin size={18} style={{ color: mod.color }} /> Learning Roadmap</h4>
                <div className="ai-roadmap-timeline">
                  {['Week 1-2: Foundation & Theory', 'Week 3-4: Hands-On Labs & Practice', 'Week 5-6: Real Project Build', 'Week 7-8: Testing & Deployment'].map((phase, idx) => (
                    <div className="ai-roadmap-step" key={idx} style={{ '--step-delay': `${idx * 0.2}s` }}>
                      <div className="ai-roadmap-dot" style={{ background: mod.color, boxShadow: `0 0 12px ${mod.color}` }}></div>
                      <div className="ai-roadmap-line" style={{ background: idx < 3 ? mod.color : 'transparent' }}></div>
                      <div className="ai-roadmap-content">
                        <span className="ai-roadmap-phase">Phase {idx + 1}</span>
                        <p>{phase}</p>
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
                  <h4><Code size={18} style={{ color: mod.color }} /> Sample Code Preview</h4>
                  <div className="ai-code-block">
                    <div className="ai-code-header">
                      <span className="ai-code-dot" style={{ background: '#ef4444' }}></span>
                      <span className="ai-code-dot" style={{ background: '#f59e0b' }}></span>
                      <span className="ai-code-dot" style={{ background: '#10b981' }}></span>
                      <span className="ai-code-lang">{mod.id === 'ai-course' ? 'Python / TensorFlow' : mod.id === 'masterclass' ? 'JavaScript / React' : 'Docker / YAML'}</span>
                    </div>
                    <pre className="ai-code-content">
{mod.id === 'ai-course' ? `# TensorFlow: Train a simple neural network
import tensorflow as tf
import numpy as np

# Step 1: Prepare training data
X_train = np.array([[0], [1], [2], [3], [4]], dtype=float)
y_train = np.array([[0], [2], [4], [6], [8]], dtype=float)

# Step 2: Build the model
model = tf.keras.Sequential([
    tf.keras.layers.Dense(16, activation='relu', input_shape=[1]),
    tf.keras.layers.Dense(1)
])

# Step 3: Compile & Train
model.compile(optimizer='adam', loss='mse')
model.fit(X_train, y_train, epochs=500, verbose=0)

# Step 4: Predict
print(model.predict([5.0]))  # Output: ~10.0` : mod.id === 'masterclass' ? `// React: Build a Dashboard Component
import React, { useState, useEffect } from 'react';

function CrimeDashboard() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/cases')
      .then(res => res.json())
      .then(data => {
        setCases(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="dashboard">
      <h1>Live Crime Dashboard</h1>
      {loading ? <Spinner /> : (
        <CaseTable data={cases} />
      )}
    </div>
  );
}` : `# Docker: Deploy AI Model Container
FROM python:3.11-slim
WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
EXPOSE 8080

# Health check for MLOps monitoring
HEALTHCHECK --interval=30s --timeout=5s \\
  CMD curl -f http://localhost:8080/health || exit 1

CMD ["python", "serve_model.py"]

---
# docker-compose.yml
version: "3.8"
services:
  ai-model:
    build: .
    ports: ["8080:8080"]
    restart: always
    deploy:
      resources:
        limits:
          memory: 2G`}
                    </pre>
                  </div>
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
