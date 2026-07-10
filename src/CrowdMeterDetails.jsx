import React from 'react';
import { ArrowLeft, Users, Activity, AlertTriangle, Maximize, Target, Map } from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function CrowdMeterDetails({ project, onBack }) {
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
            <Users size={48} />
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
            { icon: Activity, title: 'Density Heatmapping', desc: 'Real-time color-coded mapping of crowd density to identify choke points before they become critical.' },
            { icon: AlertTriangle, title: 'Stampede Prediction', desc: 'Analyzes pressure dynamics and flow rate to warn control rooms of potential crush scenarios.' },
            { icon: Maximize, title: 'Event Capacity Control', desc: 'Automatically counts entries and exits, providing live capacity metrics for large public gatherings.' }
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
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Target color={project.color} /> Live Festival Crowd Monitor
              </h2>
              <p style={{ color: '#94a3b8' }}>Sector: Main Temple Square | Camera: Node-42</p>
            </div>
            
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem 1.5rem', borderRadius: '0.75rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.85rem', color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.25rem' }}>Live Count</div>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: project.color, lineHeight: '1' }}>14,592</div>
            </div>
          </div>

          {/* Density Bars */}
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Map size={18} /> Zone Density Analysis
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Zone A */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  <span style={{ color: '#cbd5e1' }}>Zone A (Entrance Gate)</span>
                  <span style={{ color: '#34d399' }}>Safe Flow (32%)</span>
                </div>
                <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '32%', background: '#34d399', borderRadius: '4px' }}></div>
                </div>
              </div>

              {/* Zone B */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  <span style={{ color: '#cbd5e1' }}>Zone B (Market Path)</span>
                  <span style={{ color: '#fbbf24' }}>Moderate (68%)</span>
                </div>
                <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '68%', background: '#fbbf24', borderRadius: '4px' }}></div>
                </div>
              </div>

              {/* Zone C */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  <span style={{ color: '#cbd5e1' }}>Zone C (Main Shrine)</span>
                  <span style={{ color: '#ef4444', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><AlertTriangle size={14} /> Critical (94%)</span>
                </div>
                <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '94%', background: '#ef4444', borderRadius: '4px', boxShadow: '0 0 10px #ef4444' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
