import React from 'react';
import { 
  ArrowLeft, Shield, Wrench, Clock, Activity, HeadphonesIcon, Settings, Target, Database, FileText, BrainCircuit, CloudLightning, LineChart, Server, ListOrdered, CheckCircle, PenTool, RefreshCw, ShieldAlert, FileSignature, Layers
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function Phase7Requirements({ onBack }) {
  const reqData = [
    {
      id: 1,
      title: 'Application Monitoring',
      subtitle: 'सिस्टम की निगरानी',
      icon: Activity,
      color: '#3b82f6',
      items: [
        'Server & Health Monitoring',
        'API & Database Monitoring',
        'AI Model Monitoring',
        'Performance & User Activity Monitoring'
      ]
    },
    {
      id: 2,
      title: 'Corrective Maintenance',
      subtitle: 'खराबियां दूर करना',
      icon: Wrench,
      color: '#ef4444',
      items: [
        'Error Resolution & Code Fixes',
        'Security Patches',
        'Database & API Fixes'
      ]
    },
    {
      id: 3,
      title: 'Adaptive Maintenance',
      subtitle: 'बदलाव के अनुसार ढालना',
      icon: RefreshCw,
      color: '#f59e0b',
      items: [
        'OS Upgrade & Browser Compatibility',
        'Third-Party API Changes',
        'Cloud Migration',
        'Regulatory Changes'
      ]
    },
    {
      id: 4,
      title: 'Perfective Maintenance',
      subtitle: 'सिस्टम को बेहतर बनाना',
      icon: Target,
      color: '#10b981',
      items: [
        'Performance Optimization',
        'New Features & UI Improvements',
        'Better Reports & Analytics'
      ]
    },
    {
      id: 5,
      title: 'Preventive Maintenance',
      subtitle: 'भविष्य की समस्याएं रोकना',
      icon: Shield,
      color: '#8b5cf6',
      items: [
        'Server Health Checks',
        'Backup Verification',
        'Log Cleanup & Database Optimization',
        'Security Review'
      ]
    },
    {
      id: 6,
      title: 'User Support',
      subtitle: 'उपयोगकर्ता सहायता',
      icon: HeadphonesIcon,
      color: '#ec4899',
      items: [
        'Channels: Email, Phone, Chat',
        'Helpdesk Portal',
        'Knowledge Base & User Manuals'
      ]
    },
    {
      id: 7,
      title: 'Database & Security',
      subtitle: 'डेटा और सुरक्षा प्रबंधन',
      icon: Database,
      color: '#14b8a6',
      items: [
        'DB: Backup, Indexing, Archiving, Cleanup',
        'Security: Vulnerability & Penetration Testing, Access Review, Patches'
      ]
    },
    {
      id: 8,
      title: 'Performance & Documents',
      subtitle: 'रफ़्तार और दस्तावेज़',
      icon: FileText,
      color: '#f97316',
      items: [
        'Monitoring: Response Time, CPU, Memory',
        'Docs: User Manuals, API Docs, SOP Updates'
      ]
    },
    {
      id: 9,
      title: 'Disaster Recovery & KPIs',
      subtitle: 'बैकअप और रिपोर्टिंग',
      icon: CloudLightning,
      color: '#6366f1',
      items: [
        'Daily/Weekly Backup & Failover Testing',
        'KPIs: Uptime %, MTTR, MTBF, Incident Count'
      ]
    }
  ];

  const tools = [
    'Jira Service Management', 'ServiceNow', 'Zendesk', 'Grafana', 'Prometheus', 'Elastic Stack'
  ];

  const deliverables = [
    'Maintenance Plan & Support SOP',
    'Incident Management Process',
    'Backup & Recovery Plan',
    'Release Calendar',
    'Monitoring Dashboard',
    'Security Review & SLA Report',
    'Monthly Health Report'
  ];

  const sdlcSteps = [
    '1. Requirements Gathering & Analysis',
    '2. UI/UX Design',
    '3. Frontend Development',
    '4. Backend Development',
    '5. Testing & Quality Assurance',
    '6. Deployment & DevOps',
    '7. Maintenance & Support',
    '8. Continuous Improvement & Innovation'
  ];

  return (
    <div className="thane-dashboard-container" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
      
      {/* Header with Back Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
        <button 
          onClick={onBack} 
          style={{ 
            display: 'flex', alignItems: 'center', gap: '0.5rem', 
            padding: '0.75rem 1.5rem', background: 'white', 
            borderRadius: '0.75rem', border: '1px solid #e2e8f0',
            color: '#0f172a', fontWeight: 'bold', cursor: 'pointer',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.color = '#2563eb'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; }}
        >
          <ArrowLeft size={18} /> Back to Phases
        </button>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.75rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Shield size={28} color="#8b5cf6" />
            Phase 7: Maintenance & Support
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            Software या AI Application को सुरक्षित, तेज, विश्वसनीय और लगातार उपलब्ध (Available) रखना।
          </p>
        </div>
      </div>

      {/* Grid of Boxes */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
        {reqData.map(box => {
          const Icon = box.icon;
          return (
            <div key={box.id} style={{
              background: 'white', borderRadius: '0.75rem', padding: '1.25rem',
              border: '1px solid #e2e8f0', borderTop: `4px solid ${box.color}`,
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
              display: 'flex', flexDirection: 'column',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
              e.currentTarget.style.boxShadow = `0 10px 25px -5px ${box.color}66, 0 0 20px ${box.color}33`;
              e.currentTarget.style.borderColor = box.color;
              e.currentTarget.style.zIndex = 10;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.05)';
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.zIndex = 1;
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{ background: `${box.color}15`, padding: '0.5rem', borderRadius: '0.5rem', color: box.color }}>
                  <Icon size={20} />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '0.95rem', color: '#0f172a', fontWeight: 'bold' }}>{box.title}</h3>
                  <p style={{ margin: '0.1rem 0 0 0', color: '#64748b', fontSize: '0.8rem' }}>{box.subtitle}</p>
                </div>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#334155', fontSize: '0.85rem', lineHeight: '1.4', flex: 1 }}>
                {box.items.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '0.3rem' }}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Support Workflows & AI Maintenance */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        
        {/* Incident Management Flow */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#ef444415', padding: '0.75rem', borderRadius: '0.5rem', color: '#ef4444' }}><ShieldAlert size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Incident Management (जब समस्या आये)</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'center', marginTop: '1rem' }}>
            {['Issue Reported', 'Analysis', 'Assignment', 'Resolution', 'Testing', 'Closure'].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <div style={{ 
                  background: idx === 0 ? '#fee2e2' : idx === arr.length - 1 ? '#dcfce7' : '#f8fafc',
                  color: idx === 0 ? '#b91c1c' : idx === arr.length - 1 ? '#15803d' : '#334155',
                  padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', 
                  border: `1px solid ${idx === 0 ? '#fecaca' : idx === arr.length - 1 ? '#bbf7d0' : '#e2e8f0'}`,
                  width: '60%', textAlign: 'center', fontSize: '0.85rem'
                }}>
                  {step}
                </div>
                {idx < arr.length - 1 && <div style={{ color: '#94a3b8', fontSize: '1.2rem', lineHeight: '0.8' }}>↓</div>}
              </React.Fragment>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
            <span style={{ fontSize: '0.75rem', background: '#fee2e2', color: '#b91c1c', padding: '0.2rem 0.5rem', borderRadius: '1rem' }}>Critical</span>
            <span style={{ fontSize: '0.75rem', background: '#ffedd5', color: '#c2410c', padding: '0.2rem 0.5rem', borderRadius: '1rem' }}>High</span>
            <span style={{ fontSize: '0.75rem', background: '#fef3c7', color: '#b45309', padding: '0.2rem 0.5rem', borderRadius: '1rem' }}>Medium</span>
            <span style={{ fontSize: '0.75rem', background: '#e0f2fe', color: '#0369a1', padding: '0.2rem 0.5rem', borderRadius: '1rem' }}>Low</span>
          </div>
        </div>

        {/* Change Management Flow */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#f59e0b15', padding: '0.75rem', borderRadius: '0.5rem', color: '#f59e0b' }}><Settings size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Change Management</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'center', marginTop: '1rem' }}>
            {['Change Request', 'Impact Analysis', 'Approval', 'Development', 'Testing', 'Deployment'].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <div style={{ 
                  background: '#fef3c7', color: '#b45309',
                  padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', 
                  border: '1px solid #fde68a',
                  width: '60%', textAlign: 'center', fontSize: '0.85rem'
                }}>
                  {step}
                </div>
                {idx < arr.length - 1 && <div style={{ color: '#94a3b8', fontSize: '1.2rem', lineHeight: '0.8' }}>↓</div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* AI System Maintenance */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#8b5cf615', padding: '0.75rem', borderRadius: '0.5rem', color: '#8b5cf6' }}><BrainCircuit size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>AI System Maintenance</h3>
          </div>
          
          <div style={{ background: '#f5f3ff', padding: '1rem', borderRadius: '0.5rem', borderLeft: '4px solid #8b5cf6', marginBottom: '1rem' }}>
            <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold', color: '#5b21b6', fontSize: '0.9rem' }}>AI Model Monitoring</p>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#475569', fontSize: '0.85rem' }}>
              <li>Accuracy Monitoring</li>
              <li>Data Drift Detection</li>
              <li>Model Drift Detection</li>
              <li>Retraining Schedule & Version Management</li>
            </ul>
          </div>
          
          <div style={{ background: '#eff6ff', padding: '1rem', borderRadius: '0.5rem', borderLeft: '4px solid #3b82f6' }}>
            <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold', color: '#1e40af', fontSize: '0.9rem' }}>AI Performance Monitoring</p>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#475569', fontSize: '0.85rem' }}>
              <li>Prediction Latency</li>
              <li>False Positives & False Negatives</li>
              <li>Human Feedback Review</li>
            </ul>
          </div>
        </div>

      </div>

      {/* SLA Table & Lists */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
        
        {/* SLA Table */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#ec489915', padding: '0.75rem', borderRadius: '0.5rem', color: '#ec4899' }}><Clock size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Service Level Agreement (SLA)</h3>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ background: '#f8fafc', color: '#475569', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>
                <th style={{ padding: '0.75rem' }}>Priority</th>
                <th style={{ padding: '0.75rem' }}>Response Time</th>
                <th style={{ padding: '0.75rem' }}>Resolution Time</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold', color: '#dc2626' }}>Critical</td>
                <td style={{ padding: '0.75rem' }}>15 Minutes</td>
                <td style={{ padding: '0.75rem' }}>4 Hours</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold', color: '#ea580c' }}>High</td>
                <td style={{ padding: '0.75rem' }}>1 Hour</td>
                <td style={{ padding: '0.75rem' }}>8 Hours</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold', color: '#d97706' }}>Medium</td>
                <td style={{ padding: '0.75rem' }}>4 Hours</td>
                <td style={{ padding: '0.75rem' }}>24 Hours</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', fontWeight: 'bold', color: '#0284c7' }}>Low</td>
                <td style={{ padding: '0.75rem' }}>1 Day</td>
                <td style={{ padding: '0.75rem' }}>3 Days</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Deliverables */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#10b98115', padding: '0.75rem', borderRadius: '0.5rem', color: '#10b981' }}><FileSignature size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Maintenance Deliverables</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {deliverables.map((doc, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.75rem', background: '#f0fdf4', borderRadius: '0.5rem', border: '1px solid #dcfce7' }}>
                <CheckCircle size={16} color="#10b981" style={{ flexShrink: 0 }} />
                <span style={{ color: '#166534', fontSize: '0.85rem', fontWeight: '500' }}>{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Complete SDLC */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#f59e0b15', padding: '0.75rem', borderRadius: '0.5rem', color: '#f59e0b' }}><Layers size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Complete Project Lifecycle</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            {sdlcSteps.map((step, idx) => (
              <div key={idx} style={{ 
                padding: '0.4rem 0.5rem', fontSize: '0.85rem', fontWeight: 'bold',
                color: idx === 6 || idx === 7 ? '#2563eb' : '#475569',
                background: idx === 6 || idx === 7 ? '#eff6ff' : 'transparent',
                borderRadius: '0.25rem'
              }}>
                {step}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
