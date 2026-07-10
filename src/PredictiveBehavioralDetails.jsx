import React from 'react';
import { ArrowLeft, BrainCircuit, Eye, ActivitySquare, ShieldAlert, LineChart, Users } from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function PredictiveBehavioralDetails({ project, onBack }) {
  if (!project) return null;

  return (
    <div className="thane-dashboard-container" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
        <button 
          onClick={onBack} 
          style={{ 
            display: 'flex', alignItems: 'center', gap: '0.5rem', 
            padding: '0.75rem 1.5rem', background: 'white', 
            borderRadius: '0.75rem', border: '1px solid #e2e8f0',
            color: '#0f172a', fontWeight: 'bold', cursor: 'pointer',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = project.color; e.currentTarget.style.color = project.color; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; }}
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>
      </div>

      <div style={{ background: 'white', padding: '3rem', borderRadius: '1rem', border: `1px solid #e2e8f0`, borderTop: `6px solid ${project.color}`, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        
        {/* Title Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
          <div style={{ padding: '1rem', background: `${project.color}15`, color: project.color, borderRadius: '1rem' }}>
            <BrainCircuit size={48} />
          </div>
          <div>
            <h1 style={{ fontSize: '2.25rem', color: '#0f172a', marginBottom: '0.5rem', fontWeight: '800' }}>
              {project.name}
            </h1>
            <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '800px' }}>
              {project.description}
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {[
            { icon: Eye, title: 'Loitering Detection', desc: 'Identifies individuals lingering in sensitive areas beyond a normal threshold time.' },
            { icon: ActivitySquare, title: 'Aggressive Posture', desc: 'Analyzes body kinematics to detect sudden brawls, fighting, or weapon-drawing motions.' },
            { icon: Users, title: 'Panic Recognition', desc: 'Detects sudden, synchronized running of crowds indicating a panic or stampede scenario.' }
          ].map((feature, i) => (
            <div key={i} style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
              <feature.icon size={32} color={project.color} style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.5rem' }}>{feature.title}</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem' }}>{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div style={{ background: '#0f172a', padding: '3rem', borderRadius: '1rem', color: 'white', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: project.color }}></div>
          
          <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <LineChart color={project.color} /> Real-Time Behavioral Threat Matrix
          </h2>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            {/* Threat Level Low */}
            <div style={{ flex: '1 1 250px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '1.5rem', borderRadius: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ color: '#34d399', fontWeight: 'bold' }}>Normal Flow</span>
                <span style={{ color: '#34d399' }}>95%</span>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Pedestrians moving at constant velocity. No sudden trajectory changes.</p>
            </div>

            {/* Threat Level Medium */}
            <div style={{ flex: '1 1 250px', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', padding: '1.5rem', borderRadius: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>Suspicious Loitering</span>
                <span style={{ color: '#fbbf24' }}>Sector 4</span>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Subject detected dwelling near ATM kiosk for &gt; 15 minutes. Alert flagged.</p>
            </div>

            {/* Threat Level High */}
            <div style={{ flex: '1 1 250px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '1.5rem', borderRadius: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ color: '#f87171', fontWeight: 'bold' }}>Aggressive Action</span>
                <span style={{ color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><ShieldAlert size={14} /> ACTIVE</span>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Sudden violent kinematics detected at Alley B. Nearest patrol dispatched.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
