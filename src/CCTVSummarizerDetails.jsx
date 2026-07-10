import React from 'react';
import { ArrowLeft, Video, Clock, Filter, AlertCircle, PlayCircle, HardDrive, Cpu, Activity } from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function CCTVSummarizerDetails({ project, onBack }) {
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
            <Video size={48} />
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
            { icon: Clock, title: 'Time Compression', desc: 'Converts 24-hour footage into a 5-minute actionable summary.' },
            { icon: Filter, title: 'Event Filtering', desc: 'Automatically removes empty frames, highlighting only human and vehicle activity.' },
            { icon: AlertCircle, title: 'Incident Highlighting', desc: 'Red-flags suspicious events or unusual movements instantly.' }
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <PlayCircle color={project.color} /> AI Summarizer Engine Running
            </h2>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.85rem' }}>
                <HardDrive size={16} /> Input: 24h / 12GB
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: `${project.color}33`, color: project.color, padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.85rem', fontWeight: 'bold' }}>
                <Cpu size={16} /> Output: 5m / 45MB
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {['02:14 AM - Vehicle entered restricted zone', '04:30 AM - Human detected near boundary', '11:45 AM - Group gathering identified'].map((log, index) => (
              <div key={index} style={{ flex: '1 1 300px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <Activity size={20} color={project.color} style={{ marginTop: '0.2rem' }} />
                <span style={{ color: '#e2e8f0', fontSize: '0.95rem', lineHeight: '1.5' }}>{log}</span>
              </div>
            ))}
          </div>
          
          <button style={{ marginTop: '2rem', background: project.color, color: 'white', border: 'none', padding: '1rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '2rem auto 0' }}>
            <PlayCircle size={20} /> Play Summary Video
          </button>
        </div>
      </div>
    </div>
  );
}
