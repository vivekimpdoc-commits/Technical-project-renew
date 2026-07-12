import React, { useState } from 'react';
import { Play, Mic, FileText, CheckCircle, Cpu, Loader2 } from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function LiveSimulation() {
  const [step, setStep] = useState(0); // 0: Start, 1: Listening, 2: Processing, 3: Done

  const handleStart = () => {
    setStep(1);
    setTimeout(() => {
      setStep(2);
      setTimeout(() => {
        setStep(3);
      }, 2500);
    }, 3000);
  };

  const handleReset = () => setStep(0);

  return (
    <div className="thane-dashboard-container" style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
      <div className="thane-header">
        <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
          <Play size={32} color="#f59e0b" />
          Live AI Simulation: Auto-FIR
        </h2>
        <p className="thane-subtitle">Experience a mock demonstration of our AI automatically converting citizen speech into a formal FIR.</p>
      </div>

      <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', marginTop: '2rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
        
        {/* Step Indicators */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3rem', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', height: '2px', background: '#e2e8f0', zIndex: 0, transform: 'translateY(-50%)' }}></div>
          {[
            { id: 0, icon: Mic, label: 'Voice Input' },
            { id: 1, icon: Cpu, label: 'AI Processing' },
            { id: 2, icon: FileText, label: 'Drafted FIR' }
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1, background: 'white', padding: '0 1rem' }}>
              <div style={{ 
                width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: step > i ? '#10b981' : step === i && step !== 0 ? '#3b82f6' : '#f1f5f9',
                color: step > i || (step === i && step !== 0) ? 'white' : '#94a3b8',
                transition: 'all 0.3s'
              }}>
                <s.icon size={20} />
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: '600', marginTop: '0.5rem', color: step >= i ? '#0f172a' : '#94a3b8' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Simulation Window */}
        <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '0.75rem', padding: '2rem', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          
          {step === 0 && (
            <div style={{ textAlign: 'center' }}>
              <Mic size={48} color="#94a3b8" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ color: '#334155', marginBottom: '0.5rem' }}>Ready for Voice Input</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem', maxWidth: '400px' }}>
                Click the button below to simulate a citizen walking into a police station and speaking their complaint in Hindi.
              </p>
              <button 
                onClick={handleStart}
                style={{ background: '#3b82f6', color: 'white', padding: '0.75rem 2rem', borderRadius: '2rem', border: 'none', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)' }}
              >
                <Play size={18} /> Start Simulation
              </button>
            </div>
          )}

          {step === 1 && (
            <div className="animate-pulse" style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                <Mic size={32} color="#ef4444" />
              </div>
              <div style={{ background: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', fontStyle: 'italic', color: '#334155', display: 'inline-block' }}>
                "कल रात को 10 बजे किसी ने मेरी बाइक (UP32 AA 1234) मेरे घर के सामने से चुरा ली है। मैंने सुबह देखा तो वह नहीं थी।"
              </div>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '1rem' }}>Capturing and translating Hindi audio...</p>
            </div>
          )}

          {step === 2 && (
            <div style={{ textAlign: 'center' }}>
              <Loader2 size={48} color="#3b82f6" style={{ margin: '0 auto 1rem auto', animation: 'spin 1s linear infinite' }} />
              <h3 style={{ color: '#334155', marginBottom: '0.5rem' }}>AI Brain is Processing...</h3>
              <ul style={{ textAlign: 'left', display: 'inline-block', color: '#475569', fontSize: '0.9rem', background: 'white', padding: '1rem 2rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                <li>✅ Translating to Formal English/Hindi</li>
                <li>✅ Identifying Entities (Vehicle: UP32 AA 1234, Time: 10 PM)</li>
                <li>✅ Querying Legal Vector DB for BNS Sections...</li>
                <li>✅ Matching Section 379 IPC / Section 303(2) BNS (Theft)</li>
              </ul>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in" style={{ width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
                <CheckCircle size={24} /> Draft FIR Generated Successfully
              </div>
              
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                  <strong>e-FIR Draft Preview</strong>
                  <span style={{ color: '#ef4444', fontWeight: 'bold' }}>Section 303(2) BNS (Theft)</span>
                </div>
                <p style={{ color: '#334155', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  <strong>Subject:</strong> Theft of Motor Vehicle (UP32 AA 1234)
                </p>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', marginTop: '0.5rem' }}>
                  It is reported that a motorcycle bearing registration number UP32 AA 1234 was stolen from outside the complainant's residence. The theft is estimated to have occurred around 22:00 Hrs yesterday. The complainant discovered the vehicle missing the following morning.
                </p>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                  <button style={{ background: '#f1f5f9', color: '#334155', padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', cursor: 'pointer' }} onClick={handleReset}>Reset Demo</button>
                  <button style={{ background: '#10b981', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Submit to IO</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Add global styles for pulse and spin if not present
const style = document.createElement('style');
style.innerHTML = `
  @keyframes spin { 100% { transform: rotate(360deg); } }
  .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
`;
document.head.appendChild(style);
