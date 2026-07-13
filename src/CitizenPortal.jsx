import React from 'react';
import { Users, MessageSquare, Search, FileSignature, ShieldAlert, Bell } from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function CitizenPortal() {
  const services = [
    { id: 1, title: 'AI Legal Chatbot', desc: 'Ask legal questions in Hindi or English (e.g. "What to do if phone is stolen?")', icon: MessageSquare, color: '#3b82f6' },
    { id: 2, title: 'Track e-FIR Status', desc: 'Enter your case number to get real-time AI updates on your investigation.', icon: Search, color: '#10b981' },
    { id: 3, title: 'Anonymous Tip-Off', desc: 'Report crimes or share evidence securely without revealing your identity.', icon: ShieldAlert, color: '#ef4444' },
    { id: 4, title: 'E-Challan / Payments', desc: 'Pay traffic fines and download receipts directly from the portal.', icon: FileSignature, color: '#f59e0b' },
  ];

  return (
    <div className="thane-dashboard-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="thane-header">
        <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
          <Users size={32} color="#10b981" />
          Public Citizen Portal (पब्लिक पोर्टल)
        </h2>
        <p className="thane-subtitle">Empowering citizens with AI-driven access to police services, 24x7.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '2rem', marginTop: '2rem' }}>
        
        {/* Left Column: Services */}
        <div>
          <h3 style={{ margin: '0 0 1.5rem 0', color: 'var(--text-main)', fontSize: '1.25rem' }}>Citizen E-Services</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {services.map(s => (
              <div key={s.id} style={{ 
                background: 'var(--card-bg)', borderRadius: '1rem', padding: '1.5rem', border: '1px solid var(--card-border)', 
                borderTop: `4px solid ${s.color}`, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                cursor: 'pointer', transition: 'transform 0.2s', display: 'flex', flexDirection: 'column'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.75rem', background: `${s.color}15`, color: s.color, borderRadius: '0.75rem' }}>
                    <s.icon size={24} />
                  </div>
                  <h4 style={{ margin: 0, color: 'var(--text-main)', fontSize: '1.1rem' }}>{s.title}</h4>
                </div>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>{s.desc}</p>
                <button style={{ 
                  marginTop: 'auto', paddingTop: '1rem', background: 'none', border: 'none', 
                  color: s.color, fontWeight: 'bold', textAlign: 'left', cursor: 'pointer', fontSize: '0.9rem'
                }}>
                  Access Service →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Alerts & Emergency */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ background: 'var(--card-bg)', borderRadius: '1rem', padding: '1.5rem', border: '1px solid var(--card-border)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <h3 style={{ margin: '0 0 1rem 0', color: 'var(--text-main)', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Bell size={18} color="#ef4444" /> Urgent Police Advisories
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ borderLeft: '3px solid #ef4444', paddingLeft: '0.75rem' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Today, 10:00 AM</div>
                <div style={{ color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: '500' }}>Heavy traffic expected on MG Road due to rally. Avoid route.</div>
              </div>
              <div style={{ borderLeft: '3px solid #f59e0b', paddingLeft: '0.75rem' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Yesterday, 18:30 PM</div>
                <div style={{ color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: '500' }}>New phishing scam reported asking for OTPs. Police never asks for OTP.</div>
              </div>
            </div>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #ef4444, #b91c1c)', borderRadius: '1rem', padding: '1.5rem', color: 'white', boxShadow: '0 10px 15px -3px rgba(239, 68, 68, 0.4)' }}>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>SOS Emergency</h3>
            <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.9rem', opacity: 0.9 }}>Pressing this button will instantly dispatch the nearest PCR van to your GPS location.</p>
            <button style={{ 
              width: '100%', padding: '1rem', background: 'var(--card-bg)', color: '#ef4444', 
              border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' 
            }}>
              PRESS FOR HELP (112)
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
