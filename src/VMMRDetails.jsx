import React from 'react';
import { ArrowLeft, Car, Camera, Search, ShieldAlert, CheckCircle, Crosshair, MapPin } from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function VMMRDetails({ project, onBack }) {
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
            <Car size={48} />
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
            { icon: Search, title: 'No-Plate Recognition', desc: 'Identifies vehicles using unique structural markers when plates are missing or obscured.' },
            { icon: Camera, title: 'Make, Model & Color', desc: 'Accurately classifies over 10,000 distinct vehicle models and their specific paint hues.' },
            { icon: Crosshair, title: 'Damage & Decal Tracking', desc: 'Flags specific dents, stickers, or custom modifications to trace unique suspect vehicles.' }
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
              <ShieldAlert color={project.color} /> Live VMMR Scanning
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px' }}>
              <div style={{ textAlign: 'center' }}>
                <Car size={64} color="#64748b" style={{ marginBottom: '1rem', opacity: 0.5 }} />
                <p style={{ color: '#94a3b8' }}>Camera Feed Analysis...</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '1.5rem', borderRadius: '0.75rem' }}>
                <h3 style={{ color: '#34d399', fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={18} /> Target Identified
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#e2e8f0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li><strong style={{ color: '#94a3b8' }}>Make:</strong> Hyundai</li>
                  <li><strong style={{ color: '#94a3b8' }}>Model:</strong> Creta (2021)</li>
                  <li><strong style={{ color: '#94a3b8' }}>Color:</strong> Phantom Black</li>
                  <li><strong style={{ color: '#94a3b8' }}>Markers:</strong> Broken left taillight, custom alloy wheels</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', color: '#fbbf24' }}>
                    <MapPin size={16} /> Last seen: Highway Toll Plaza C (2 mins ago)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
