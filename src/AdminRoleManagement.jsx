import React from 'react';
import { ShieldCheck, UserCheck, Key, Fingerprint, Lock, UserCog } from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function AdminRoleManagement() {
  const roles = [
    { level: 'Constable / Sub-Inspector', access: 'Tier 1 - Basic Access', desc: 'Can enter FIR data, view their own assigned cases, and use the AI Chatbot for legal queries. Cannot delete any records.', color: '#3b82f6' },
    { level: 'Station House Officer (SHO)', access: 'Tier 2 - Station Admin', desc: 'Can view all cases in the police station. Can assign cases to officers. Can view local crime heatmaps.', color: '#10b981' },
    { level: 'Superintendent of Police (SP)', access: 'Tier 3 - District Admin', desc: 'Can view data for all stations in the district. Can reallocate resources, approve major operations, and access predictive analytics.', color: '#f59e0b' },
    { level: 'Director General (DGP) / HQ', access: 'Tier 4 - Super Admin', desc: 'Full system visibility across the state. Access to highly classified Intelligence/CID modules and cross-district criminal graphs.', color: '#ef4444' }
  ];

  return (
    <div className="thane-dashboard-container" style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
      <div className="thane-header">
        <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
          <UserCog size={32} color="#ef4444" />
          Role-Based Access Control (RBAC) & Admin
        </h2>
        <p className="thane-subtitle">Securing the system by ensuring personnel only see what they are authorized to see.</p>
      </div>

      <div style={{ background: 'var(--card-bg)', borderRadius: '1rem', padding: '2rem', border: '1px solid var(--card-border)', marginTop: '2rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
          <div style={{ background: 'var(--icon-bg)', padding: '1.5rem', borderRadius: '0.75rem', textAlign: 'center', border: '1px solid var(--card-border)' }}>
            <Key size={32} color="#3b82f6" style={{ margin: '0 auto 1rem auto' }} />
            <h4 style={{ margin: '0 0 0.5rem 0' }}>Strict Authorization</h4>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Every API request is validated against the user's role token.</div>
          </div>
          <div style={{ background: 'var(--icon-bg)', padding: '1.5rem', borderRadius: '0.75rem', textAlign: 'center', border: '1px solid var(--card-border)' }}>
            <Fingerprint size={32} color="#10b981" style={{ margin: '0 auto 1rem auto' }} />
            <h4 style={{ margin: '0 0 0.5rem 0' }}>Biometric Login</h4>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Tier 3 & 4 access requires fingerprint or facial recognition.</div>
          </div>
          <div style={{ background: 'var(--icon-bg)', padding: '1.5rem', borderRadius: '0.75rem', textAlign: 'center', border: '1px solid var(--card-border)' }}>
            <ShieldCheck size={32} color="#f59e0b" style={{ margin: '0 auto 1rem auto' }} />
            <h4 style={{ margin: '0 0 0.5rem 0' }}>Audit Trails</h4>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Every view, edit, and deletion is logged permanently via blockchain.</div>
          </div>
        </div>

        <h3 style={{ margin: '0 0 1.5rem 0', color: 'var(--text-main)', fontSize: '1.25rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem' }}>
          Hierarchical Access Levels
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {roles.map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', padding: '1.5rem', background: 'var(--icon-bg)', borderRadius: '0.75rem', borderLeft: `4px solid ${r.color}` }}>
              <div style={{ background: 'var(--card-bg)', padding: '1rem', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', color: r.color, flexShrink: 0 }}>
                {i === 3 ? <Lock size={24} /> : <UserCheck size={24} />}
              </div>
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', color: 'var(--text-main)', fontSize: '1.1rem' }}>{r.level}</h4>
                <div style={{ color: r.color, fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{r.access}</div>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
