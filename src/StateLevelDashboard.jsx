import React, { useState } from 'react';
import { 
  Building, Map, BarChart4, AlertTriangle, ShieldCheck, PieChart, Users, Activity, Lock
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function StateLevelDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const districts = [
    { name: 'Lucknow', risk: 'High', activeCases: 450, aiResolved: 310, trend: '+12%' },
    { name: 'Kanpur', risk: 'Medium', activeCases: 320, aiResolved: 280, trend: '-5%' },
    { name: 'Varanasi', risk: 'Medium', activeCases: 210, aiResolved: 190, trend: '-2%' },
    { name: 'Agra', risk: 'High', activeCases: 380, aiResolved: 250, trend: '+8%' },
    { name: 'Meerut', risk: 'Low', activeCases: 150, aiResolved: 140, trend: '-15%' },
  ];

  return (
    <div className="thane-dashboard-container" style={{ width: '100%' }}>
      <div className="thane-header">
        <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
          <Building size={32} color="#3b82f6" />
          State Police Headquarters (PHQ Level)
        </h2>
        <p className="thane-subtitle">Centralized AI Command & Control for DGP and State Authorities</p>
      </div>

      <div className="thane-menu-bar">
        <div className="thane-menu-tabs">
          <button className={`thane-tab ${activeTab === 'overview' ? 'active-blue' : ''}`} onClick={() => setActiveTab('overview')}>
            <BarChart4 size={18} style={{ marginRight: '0.5rem' }}/> Statewide Overview
          </button>
          <button className={`thane-tab ${activeTab === 'districts' ? 'active-green' : ''}`} onClick={() => setActiveTab('districts')}>
            <Map size={18} style={{ marginRight: '0.5rem' }}/> District Heatmap
          </button>
          <button className={`thane-tab ${activeTab === 'intelligence' ? 'active-purple' : ''}`} onClick={() => setActiveTab('intelligence')}>
            <AlertTriangle size={18} style={{ marginRight: '0.5rem' }}/> Central Intelligence (C.I.D)
          </button>
        </div>
      </div>

      {activeTab === 'overview' && (
        <div className="animate-fade-in">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #e2e8f0', borderLeft: '4px solid #3b82f6', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <div style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>TOTAL ACTIVE CASES (STATE)</div>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a' }}>12,450</div>
              <div style={{ color: '#10b981', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem' }}><Activity size={14}/> 8% decrease from last month</div>
            </div>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #e2e8f0', borderLeft: '4px solid #10b981', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <div style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>AI RESOLUTION RATE</div>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a' }}>76.4%</div>
              <div style={{ color: '#3b82f6', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem' }}><Activity size={14}/> Automating initial FIR & Evidence analysis</div>
            </div>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #e2e8f0', borderLeft: '4px solid #f59e0b', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <div style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>CYBER THREATS INTERCEPTED</div>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a' }}>342</div>
              <div style={{ color: '#ef4444', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem' }}><Activity size={14}/> Dark web & Zero-trust alerts (24h)</div>
            </div>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #e2e8f0', borderLeft: '4px solid #8b5cf6', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <div style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>ACTIVE FIELD PERSONNEL</div>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a' }}>45,210</div>
              <div style={{ color: '#8b5cf6', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem' }}><Users size={14}/> Tracked via GPS / Edge devices</div>
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <h3 style={{ margin: '0 0 1.5rem 0', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck color="#10b981" /> State Level AI Directives
            </h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              The PHQ (Police Headquarters) dashboard aggregates data from all 75+ districts in real-time. It uses complex ML algorithms to predict crime trends on a state-wide level, allocate budgets, and deploy emergency forces (like STF, PAC) before situations escalate.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                <div style={{ fontWeight: '700', color: '#334155', marginBottom: '0.5rem' }}>Macro Resource Allocation</div>
                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>AI calculates the optimal distribution of vehicles, weapons, and specialized units across districts based on predictive threat models.</div>
              </div>
              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                <div style={{ fontWeight: '700', color: '#334155', marginBottom: '0.5rem' }}>Statewide Pattern Recognition</div>
                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Detecting organized crime syndicates that operate across multiple district borders by linking seemingly unrelated FIRs.</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'districts' && (
        <div className="animate-fade-in" style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <h3 style={{ margin: '0 0 1.5rem 0', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Map color="#3b82f6" /> District Performance & Risk Matrix
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#64748b', fontSize: '0.9rem' }}>
                  <th style={{ padding: '1rem' }}>District (Zone)</th>
                  <th style={{ padding: '1rem' }}>AI Risk Level</th>
                  <th style={{ padding: '1rem' }}>Active Cases</th>
                  <th style={{ padding: '1rem' }}>AI Resolved (30d)</th>
                  <th style={{ padding: '1rem' }}>Crime Trend</th>
                </tr>
              </thead>
              <tbody>
                {districts.map((d, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '1rem', fontWeight: '600', color: '#1e293b' }}>{d.name}</td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{ 
                        padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.85rem', fontWeight: '600',
                        backgroundColor: d.risk === 'High' ? '#fee2e2' : d.risk === 'Medium' ? '#fef3c7' : '#dcfce3',
                        color: d.risk === 'High' ? '#ef4444' : d.risk === 'Medium' ? '#d97706' : '#10b981'
                      }}>
                        {d.risk}
                      </span>
                    </td>
                    <td style={{ padding: '1rem', color: '#475569' }}>{d.activeCases}</td>
                    <td style={{ padding: '1rem', color: '#475569' }}>{d.aiResolved}</td>
                    <td style={{ padding: '1rem', fontWeight: '600', color: d.trend.startsWith('+') ? '#ef4444' : '#10b981' }}>{d.trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'intelligence' && (
        <div className="animate-fade-in" style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <h3 style={{ margin: '0 0 1.5rem 0', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <AlertTriangle color="#ef4444" /> Special Task Force & CID Operations
          </h3>
          <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            This section is highly restricted and only accessible to DGP, ADG L&O, and Intelligence Chiefs. It integrates national databases (NIA, RAW) and uses deep graph neural networks to track terrorism financing, cyber syndicates, and high-profile fugitives.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem', background: '#f8fafc', borderRadius: '0.5rem', border: '1px dashed #cbd5e1' }}>
            <div style={{ textAlign: 'center', color: '#64748b' }}>
              <Lock size={48} style={{ margin: '0 auto 1rem auto', opacity: 0.5 }} />
              <div style={{ fontWeight: '600', fontSize: '1.2rem' }}>Clearance Level: TOP SECRET</div>
              <div style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Biometric authentication required to view intelligence graph.</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
