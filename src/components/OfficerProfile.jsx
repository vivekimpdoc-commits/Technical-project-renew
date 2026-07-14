import React from 'react';
import { ArrowLeft, UserCircle, Shield, Award, Terminal, Crosshair, Zap, Database } from 'lucide-react';

const OfficerProfile = ({ onBack }) => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#020617',
      color: '#cbd5e1',
      padding: '2rem',
      fontFamily: "'Inter', sans-serif"
    }}>
      <button onClick={onBack} style={{
        display: 'flex', alignItems: 'center', gap: '0.5rem',
        background: 'transparent', border: '1px solid #334155', color: '#cbd5e1',
        padding: '0.5rem 1rem', borderRadius: '0.5rem', cursor: 'pointer',
        marginBottom: '2rem', transition: 'all 0.3s'
      }} className="hover-bg-slate">
        <ArrowLeft size={18} /> BACK TO COMMAND CENTER
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Left Column: ID Card */}
        <div style={{
          background: 'linear-gradient(145deg, #0f172a, #020617)',
          border: '1px solid #1e293b',
          borderRadius: '1rem',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: 'linear-gradient(90deg, #10b981, #38bdf8)' }}></div>
          
          <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: '#1e293b', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem', border: '2px solid #38bdf8', boxShadow: '0 0 20px rgba(56,189,248,0.2)' }}>
            <UserCircle size={80} color="#38bdf8" />
          </div>
          
          <h2 style={{ color: 'white', margin: '0 0 0.5rem 0', letterSpacing: '2px' }}>OFFICER ALPHA-77</h2>
          <p style={{ color: '#10b981', margin: '0 0 1.5rem 0', fontWeight: 'bold' }}>Cyber Intelligence Wing</p>
          
          <div style={{ width: '100%', background: '#020617', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #1e293b' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span>Clearance Level:</span> <strong style={{ color: '#f59e0b' }}>TOP SECRET</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span>Missions Completed:</span> <strong>42</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Global Rank:</span> <strong>#4 (UP Police)</strong></div>
          </div>
        </div>

        {/* Right Column: Stats & Badges */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Active Missions */}
          <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '1rem', padding: '1.5rem' }}>
            <h3 style={{ margin: '0 0 1.5rem 0', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Crosshair size={20} /> ACTIVE DIRECTIVES
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#020617', padding: '1rem', borderRadius: '0.5rem', borderLeft: '4px solid #10b981' }}>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem 0', color: 'white' }}>Operation Dark Web Trace</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>Locate Bitcoin wallet owners associated with illegal forum.</p>
                </div>
                <div style={{ color: '#10b981', fontWeight: 'bold' }}>85% COMPLETION</div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#020617', padding: '1rem', borderRadius: '0.5rem', borderLeft: '4px solid #f59e0b' }}>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem 0', color: 'white' }}>Financial Fraud Syndicates</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>Analyze 40GB of banking SQL logs using AI models.</p>
                </div>
                <div style={{ color: '#f59e0b', fontWeight: 'bold' }}>IN PROGRESS</div>
              </div>
            </div>
          </div>

          {/* Badges Earned */}
          <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '1rem', padding: '1.5rem' }}>
            <h3 style={{ margin: '0 0 1.5rem 0', color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={20} /> CERTIFICATIONS & BADGES
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
              
              <div style={{ background: '#020617', padding: '1.5rem 1rem', borderRadius: '0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', border: '1px solid #1e293b' }}>
                <Shield size={32} color="#10b981" style={{ marginBottom: '1rem' }} />
                <strong style={{ fontSize: '0.9rem', color: 'white' }}>Cyber 101 Certified</strong>
              </div>

              <div style={{ background: '#020617', padding: '1.5rem 1rem', borderRadius: '0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', border: '1px solid #1e293b' }}>
                <Terminal size={32} color="#38bdf8" style={{ marginBottom: '1rem' }} />
                <strong style={{ fontSize: '0.9rem', color: 'white' }}>OSINT Master</strong>
              </div>

              <div style={{ background: '#020617', padding: '1.5rem 1rem', borderRadius: '0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', border: '1px solid #1e293b' }}>
                <Zap size={32} color="#f59e0b" style={{ marginBottom: '1rem' }} />
                <strong style={{ fontSize: '0.9rem', color: 'white' }}>Digital First Responder</strong>
              </div>

              <div style={{ background: '#020617', padding: '1.5rem 1rem', borderRadius: '0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', border: '1px solid #1e293b', opacity: 0.5 }}>
                <Database size={32} color="#64748b" style={{ marginBottom: '1rem' }} />
                <strong style={{ fontSize: '0.9rem', color: '#64748b' }}>Advanced Forensics (Locked)</strong>
              </div>

            </div>
          </div>

        </div>
      </div>
      
      <style>{`
        .hover-bg-slate:hover { background: #1e293b !important; }
      `}</style>
    </div>
  );
};

export default OfficerProfile;
