import React, { useState, useEffect } from 'react';
import { Terminal, Database, Server, Cpu, Shield, Code, ArrowLeft, Target, GitPullRequest, Settings, FileText, CheckCircle2, Activity, Lock, TrendingUp, Map, Camera, MessageSquare } from 'lucide-react';
import { sound } from '../utils/SoundEngine';

export default function CapstoneViewer({ projectName, onClose }) {
  const [activeTab, setActiveTab] = useState('architecture');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sound.init();
    sound.playTyping();
    const timer = setTimeout(() => {
      sound.playAccessGranted();
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [projectName]);

  // Dynamic content based on the project name
  const getProjectDetails = () => {
    let desc = "Advanced intelligence module designed for proactive threat neutralization and digital evidence processing.";
    let stack = ["React", "Node.js", "Python", "TensorFlow"];
    let features = ["Real-time Processing", "Encrypted Data Pipelines", "Automated Threat Detection"];
    let icon = <Cpu size={40} color="#38bdf8" />;
    
    // Default metrics & security
    let metrics = { uptime: "99.99%", requests: "1.2M", latency: "14ms", threats: "842" };
    let security = ["AES-256 Encryption", "ISO 27001 Certified", "Zero-Trust Architecture"];
    let impact = ["Reduces manual data entry by 60%", "Improves threat detection speed by 5x", "Saves 10,000+ man-hours annually"];

    if (projectName.includes("K.A.V.A.C.H.")) {
      desc = "An autonomous conversational AI trained on the Indian Penal Code, BNS 2023, and IT Act to assist investigating officers in real-time.";
      stack = ["React", "OpenAI GPT-4", "Vector DB (Pinecone)", "FastAPI"];
      features = ["Contextual Legal Queries", "FIR Drafting Assist", "Voice Command Recognition"];
      icon = <MessageSquare size={40} color="#38bdf8" />;
      metrics = { uptime: "99.99%", requests: "450K/day", latency: "250ms", threats: "Zero Data Leaks" };
      security = ["On-Premise LLM Hosting", "Role-Based Access Control", "End-to-End Encryption"];
      impact = ["FIR Drafting time reduced by 75%", "Legal error rate dropped to near zero", "24/7 availability for field officers"];
    } else if (projectName.includes("Biometric")) {
      desc = "Live CCTV feed analysis engine capable of cross-referencing millions of faces against the criminal database in under 2 seconds.";
      stack = ["Python", "OpenCV", "AWS Rekognition", "Kafka"];
      features = ["Live Crowd Scanning", "Gait Analysis", "Instant Alert Generation"];
      icon = <Camera size={40} color="#38bdf8" />;
      metrics = { uptime: "99.95%", requests: "12,000 frames/sec", latency: "42ms", threats: "142 Suspects Flagged" };
      security = ["Biometric Data Hashing", "CCTNS Integrated", "GDPR/DPDP Compliant"];
      impact = ["Matches suspects in <2 seconds", "Reduces manual video review by 98%", "Enhances VVIP security coverage"];
    } else if (projectName.includes("Forecasting")) {
      desc = "Geospatial machine learning model that analyzes historical crime data to predict high-probability threat zones for predictive patrolling.";
      stack = ["Python (Pandas/Scikit)", "QGIS", "React Leaflet", "PostGIS"];
      features = ["Heatmap Generation", "Resource Allocation AI", "Temporal Pattern Analysis"];
      icon = <Map size={40} color="#38bdf8" />;
      metrics = { uptime: "100%", requests: "Live API Feed", latency: "8ms", threats: "24 Hotspots Identified" };
      security = ["Anonymized Datasets", "Encrypted Transit (TLS 1.3)", "Secure HQ Deployment"];
      impact = ["Proactive crime reduction by 30%", "Optimizes patrol fuel & time", "Predicts riot possibilities 48 hrs in advance"];
    }

    return { desc, stack, features, icon, metrics, security, impact };
  };

  const details = getProjectDetails();

  if (loading) {
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#020617', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#38bdf8', fontFamily: 'monospace' }}>
        <div style={{ animation: 'spin 2s linear infinite', marginBottom: '2rem' }}>
          <Shield size={64} />
        </div>
        <h2 style={{ letterSpacing: '3px' }}>DECRYPTING PROJECT BLUEPRINTS...</h2>
        <p style={{ color: '#94a3b8' }}>Establishing secure connection to KAVACH servers</p>
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: '#0f172a', zIndex: 9999, overflowY: 'auto',
      fontFamily: 'system-ui, sans-serif'
    }}>
      {/* Header */}
      <div style={{ background: '#020617', borderBottom: '1px solid #1e293b', padding: '1.5rem 3rem', display: 'flex', alignItems: 'center', gap: '2rem', position: 'sticky', top: 0, zIndex: 10 }}>
        <button 
          onClick={() => { sound.playClick(); onClose(); }}
          style={{ background: 'transparent', border: '1px solid #334155', color: '#94a3b8', padding: '0.5rem 1rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'all 0.2s' }}
          onMouseOver={e => { e.currentTarget.style.background = '#1e293b'; sound.playHover(); }}
          onMouseOut={e => e.currentTarget.style.background = 'transparent'}
        >
          <ArrowLeft size={18} /> CLOSE PROJECT
        </button>
        <div>
          <div style={{ color: '#38bdf8', fontSize: '0.85rem', letterSpacing: '2px', fontWeight: 'bold', marginBottom: '0.2rem' }}>CAPSTONE BLUEPRINT DECLASSIFIED</div>
          <h1 style={{ color: 'white', margin: 0, fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {projectName}
          </h1>
        </div>
      </div>

      <div style={{ padding: '3rem', maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 350px', gap: '3rem' }}>
        
        {/* Left Content */}
        <div>
          {/* Objective */}
          <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '1rem', padding: '2rem', marginBottom: '2rem' }}>
            <h3 style={{ color: '#94a3b8', fontSize: '1rem', letterSpacing: '2px', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Target size={18} /> MISSION OBJECTIVE
            </h3>
            <p style={{ color: '#e2e8f0', fontSize: '1.2rem', lineHeight: '1.6', margin: 0 }}>
              {details.desc}
            </p>
          </div>

          {/* Live System Telemetry */}
          <div style={{ background: '#1e293b', border: '1px solid #38bdf888', borderRadius: '1rem', padding: '1.5rem', marginBottom: '2rem', boxShadow: '0 0 15px #38bdf822' }}>
            <h3 style={{ color: '#38bdf8', fontSize: '1rem', letterSpacing: '2px', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Activity size={18} /> LIVE SYSTEM TELEMETRY
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
              <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #334155' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '0.5rem' }}>SYSTEM UPTIME</div>
                <div style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold' }}>{details.metrics.uptime}</div>
              </div>
              <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #334155' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '0.5rem' }}>REQUESTS/LOAD</div>
                <div style={{ color: '#38bdf8', fontSize: '1.5rem', fontWeight: 'bold' }}>{details.metrics.requests}</div>
              </div>
              <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #334155' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '0.5rem' }}>NETWORK LATENCY</div>
                <div style={{ color: '#f59e0b', fontSize: '1.5rem', fontWeight: 'bold' }}>{details.metrics.latency}</div>
              </div>
              <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #334155' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '0.5rem' }}>THREATS STOPPED</div>
                <div style={{ color: '#ef4444', fontSize: '1.5rem', fontWeight: 'bold' }}>{details.metrics.threats}</div>
              </div>
            </div>
          </div>

          {/* Architecture Tabs */}
          <div style={{ borderBottom: '1px solid #334155', display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
            {['architecture', 'deployment', 'source_code'].map(tab => (
              <button 
                key={tab}
                onClick={() => { sound.playClick(); setActiveTab(tab); }}
                style={{
                  background: 'transparent', border: 'none', 
                  color: activeTab === tab ? '#38bdf8' : '#94a3b8',
                  padding: '1rem 0', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer',
                  borderBottom: activeTab === tab ? '2px solid #38bdf8' : '2px solid transparent',
                  textTransform: 'uppercase', letterSpacing: '1px', transition: 'all 0.2s'
                }}
              >
                {tab.replace('_', ' ')}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={{ background: '#020617', border: '1px solid #1e293b', borderRadius: '1rem', padding: '2rem', minHeight: '400px' }}>
            {activeTab === 'architecture' && (
              <div className="animate-fade-in">
                <h3 style={{ color: '#38bdf8', marginTop: 0 }}>System Flow Diagram</h3>
                <div style={{ padding: '2rem', background: '#0f172a', border: '1px dashed #334155', borderRadius: '0.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', color: '#94a3b8', fontFamily: 'monospace' }}>
                  <div style={{ background: '#1e293b', padding: '1rem 2rem', borderRadius: '0.5rem', border: '1px solid #38bdf8' }}>[ DATA INGESTION / API GATEWAY ]</div>
                  <div>↓</div>
                  <div style={{ background: '#1e293b', padding: '1rem 2rem', borderRadius: '0.5rem', border: '1px solid #10b981' }}>[ AI PROCESSING / NEURAL NET ]</div>
                  <div>↓</div>
                  <div style={{ display: 'flex', gap: '2rem' }}>
                    <div style={{ background: '#1e293b', padding: '1rem 2rem', borderRadius: '0.5rem', border: '1px solid #f59e0b' }}>[ ENCRYPTED STORAGE ]</div>
                    <div style={{ background: '#1e293b', padding: '1rem 2rem', borderRadius: '0.5rem', border: '1px solid #ef4444' }}>[ DASHBOARD UI ]</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'deployment' && (
              <div className="animate-fade-in" style={{ fontFamily: 'monospace' }}>
                <h3 style={{ color: '#10b981', marginTop: 0 }}>CI/CD Pipeline Logs</h3>
                <div style={{ color: '#64748b', marginBottom: '0.5rem' }}>$ docker build -t kavach/project:latest .</div>
                <div style={{ color: '#94a3b8' }}>Step 1/8 : FROM node:18-alpine</div>
                <div style={{ color: '#94a3b8' }}>Step 2/8 : WORKDIR /usr/src/app</div>
                <div style={{ color: '#94a3b8' }}>...</div>
                <div style={{ color: '#64748b', marginTop: '1rem', marginBottom: '0.5rem' }}>$ kubectl apply -f deployment.yaml</div>
                <div style={{ color: '#10b981' }}>deployment.apps/project-matrix created</div>
                <div style={{ color: '#38bdf8' }}>✓ System live on UP Police Secure Intranet</div>
              </div>
            )}

            {activeTab === 'source_code' && (
              <div className="animate-fade-in" style={{ fontFamily: 'monospace' }}>
                <h3 style={{ color: '#f59e0b', marginTop: 0 }}>Classified Main Repository</h3>
                <div style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '0.5rem', color: '#cbd5e1' }}>
                  <span style={{ color: '#ec4899' }}>import</span> {'{ NeuralEngine }'} <span style={{ color: '#ec4899' }}>from</span> <span style={{ color: '#10b981' }}>'@kavach/core'</span>;<br/><br/>
                  <span style={{ color: '#38bdf8' }}>const</span> initializeSystem = <span style={{ color: '#38bdf8' }}>async</span> () {'=>'} {'{'}<br/>
                  &nbsp;&nbsp;<span style={{ color: '#64748b' }}>// Bypassing standard protocols for deep inspection</span><br/>
                  &nbsp;&nbsp;<span style={{ color: '#38bdf8' }}>const</span> engine = <span style={{ color: '#ec4899' }}>new</span> NeuralEngine({'{'} mode: <span style={{ color: '#10b981' }}>'advanced'</span> {'}'});<br/>
                  &nbsp;&nbsp;<span style={{ color: '#ec4899' }}>await</span> engine.boot();<br/>
                  &nbsp;&nbsp;console.log(<span style={{ color: '#10b981' }}>'Target Locked.'</span>);<br/>
                  {'}'};<br/>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar */}
        <div>
          {/* Tech Stack */}
          <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '1rem', padding: '2rem', marginBottom: '2rem' }}>
            <h3 style={{ color: '#94a3b8', fontSize: '1rem', letterSpacing: '2px', margin: '0 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Code size={18} /> TECH STACK
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {details.stack.map((tech, i) => (
                <span key={i} style={{ background: '#0f172a', color: '#38bdf8', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.9rem', border: '1px solid #38bdf844' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '1rem', padding: '2rem', marginBottom: '2rem' }}>
            <h3 style={{ color: '#94a3b8', fontSize: '1rem', letterSpacing: '2px', margin: '0 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Shield size={18} /> KEY FEATURES
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {details.features.map((feat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#e2e8f0' }}>
                  <CheckCircle2 size={18} color="#10b981" />
                  {feat}
                </div>
              ))}
            </div>
          </div>

          {/* Security & Compliance */}
          <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '1rem', padding: '2rem', marginBottom: '2rem' }}>
            <h3 style={{ color: '#94a3b8', fontSize: '1rem', letterSpacing: '2px', margin: '0 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Lock size={18} /> SECURITY & COMPLIANCE
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {details.security.map((sec, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#10b981', fontSize: '0.95rem' }}>
                  <Shield size={16} />
                  {sec}
                </div>
              ))}
            </div>
          </div>

          {/* Mission Impact */}
          <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '1rem', padding: '2rem', marginBottom: '2rem' }}>
            <h3 style={{ color: '#94a3b8', fontSize: '1rem', letterSpacing: '2px', margin: '0 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <TrendingUp size={18} /> MISSION IMPACT (ROI)
            </h3>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#e2e8f0', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {details.impact.map((imp, i) => (
                <li key={i}>{imp}</li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <button 
            onClick={() => { sound.playClick(); alert('Downloading Encrypted Dossier...'); }}
            style={{ width: '100%', background: '#38bdf8', color: '#0f172a', border: 'none', padding: '1.25rem', borderRadius: '0.75rem', fontSize: '1.1rem', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', boxShadow: '0 10px 20px #38bdf844', transition: 'all 0.2s' }}
            onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; sound.playHover(); }}
            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <FileText size={20} /> DOWNLOAD PROJECT DOSSIER
          </button>
        </div>

      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
