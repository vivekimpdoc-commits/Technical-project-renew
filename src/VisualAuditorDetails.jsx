import React from 'react';
import { ArrowLeft, Shield, CheckCircle, XCircle, Camera, CheckSquare, ScanFace } from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function VisualAuditorDetails({ project, onBack }) {
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
            <Shield size={48} />
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
            { icon: CheckSquare, title: 'Police Uniform Audit', desc: 'Automatically verifies if on-duty personnel are wearing complete uniform including caps and name badges.' },
            { icon: Shield, title: 'Citizen Helmet Detection', desc: 'Scans two-wheelers at intersections to auto-generate challans for non-compliance of helmets.' },
            { icon: ScanFace, title: 'Auto-Reporting', desc: 'Generates daily compliance reports for commanding officers without manual intervention.' }
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
            <Camera color={project.color} /> AI Visual Auditor - Live Feed
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            
            {/* Police Audit Panel */}
            <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem' }}>
              <h3 style={{ color: '#e2e8f0', fontSize: '1.1rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                On-Duty Personnel Audit (Checkpost-12)
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '0.5rem', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                  <div>
                    <div style={{ fontWeight: 'bold', color: '#34d399' }}>Officer ID: MH-P-4402</div>
                    <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Uniform, Cap, Badge detected</div>
                  </div>
                  <CheckCircle color="#34d399" />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(239, 68, 68, 0.1)', padding: '1rem', borderRadius: '0.5rem', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                  <div>
                    <div style={{ fontWeight: 'bold', color: '#f87171' }}>Officer ID: MH-P-8199</div>
                    <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Violation: Cap Missing</div>
                  </div>
                  <XCircle color="#f87171" />
                </div>
              </div>
            </div>

            {/* Civilian Audit Panel */}
            <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem' }}>
              <h3 style={{ color: '#e2e8f0', fontSize: '1.1rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                Traffic Helmet Compliance (Junction-C)
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(239, 68, 68, 0.1)', padding: '1rem', borderRadius: '0.5rem', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                  <div>
                    <div style={{ fontWeight: 'bold', color: '#f87171' }}>Vehicle: MH04 AB1234</div>
                    <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Violation: Pillion without helmet</div>
                  </div>
                  <button style={{ background: '#ef4444', color: 'white', border: 'none', padding: '0.4rem 0.75rem', borderRadius: '0.25rem', fontSize: '0.8rem', cursor: 'pointer' }}>E-Challan</button>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '0.5rem', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                  <div>
                    <div style={{ fontWeight: 'bold', color: '#34d399' }}>Vehicle: MH04 XY9876</div>
                    <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Compliant: Rider & Pillion safe</div>
                  </div>
                  <CheckCircle color="#34d399" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
