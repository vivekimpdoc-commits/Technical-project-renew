import React from 'react';
import { 
  ArrowLeft, Database, Server, Settings, Lock, Network, Shield, HardDrive, FileText, Activity, BrainCircuit, Code, Layers, FileSignature, CheckCircle, Zap
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function Phase4Requirements({ onBack }) {
  const reqData = [
    {
      id: 1,
      title: 'Technology Stack',
      subtitle: 'बैकएंड प्रोग्रामिंग और फ्रेमवर्क्स',
      icon: Code,
      color: '#3b82f6',
      items: [
        'Languages: .NET (Recommended), Java, Python, Node.js',
        'Frameworks: ASP.NET Core Web API, Spring Boot, FastAPI, Express.js'
      ]
    },
    {
      id: 2,
      title: 'Core Backend Modules',
      subtitle: 'मुख्य बैकएंड हिस्से',
      icon: Layers,
      color: '#10b981',
      items: [
        'Authentication: Login, Logout, Password Reset, OTP, Session',
        'User Management: Registration, Role, Permissions, Profile',
        'Notifications: Email, SMS, Push Notification',
        'Reports: PDF Generation, Excel Export, Dashboard Analytics'
      ]
    },
    {
      id: 3,
      title: 'API Development',
      subtitle: 'डेटा संचार के लिए API',
      icon: Network,
      color: '#f59e0b',
      items: [
        'REST APIs: GET, POST, PUT, DELETE',
        'Documentation: Swagger / OpenAPI',
        'API Versioning',
        'API Security'
      ]
    },
    {
      id: 4,
      title: 'Business Logic Layer',
      subtitle: 'मुख्य नियम और प्रक्रियाएं',
      icon: Settings,
      color: '#ec4899',
      items: [
        'Validation Rules',
        'Workflow Engine',
        'Approval Process',
        'Rule Engine',
        'Scheduling System'
      ]
    },
    {
      id: 5,
      title: 'Security Requirements',
      subtitle: 'बैकएंड सुरक्षा',
      icon: Shield,
      color: '#ef4444',
      items: [
        'Auth: JWT, OAuth2, SSO, MFA',
        'Authorization: Role Based Access Control (RBAC)',
        'Security Features: Data Encryption, Audit Logs',
        'Protection: API Rate Limiting, Input Validation, SQL Injection & XSS Protection'
      ]
    },
    {
      id: 6,
      title: 'File Management',
      subtitle: 'फाइल स्टोरेज',
      icon: HardDrive,
      color: '#8b5cf6',
      items: [
        'File Uploads',
        'Document, Image & Video Storage',
        'Digital Signature Support'
      ]
    },
    {
      id: 7,
      title: 'Caching',
      subtitle: 'रफ़्तार बढ़ाने के लिए',
      icon: Zap,
      color: '#14b8a6',
      items: [
        'Redis Cache',
        'Memory Cache',
        'Distributed Cache'
      ]
    },
    {
      id: 8,
      title: 'Background Services',
      subtitle: 'बैकग्राउंड टास्क',
      icon: Server,
      color: '#f97316',
      items: [
        'Scheduled Jobs',
        'Email & Notification Service',
        'Report Generation',
        'Data Synchronization'
      ]
    },
    {
      id: 9,
      title: 'Logging & Monitoring',
      subtitle: 'सिस्टम मॉनिटरिंग',
      icon: Activity,
      color: '#6366f1',
      items: [
        'Error Logs & Audit Trail',
        'Performance Monitoring',
        'User Activity Logs',
        'System Health Checks'
      ]
    }
  ];

  const techStack = [
    { cat: 'Backend Framework', tool: 'ASP.NET Core Web API' },
    { cat: 'Database & ORM', tool: 'SQL Server, Entity Framework Core' },
    { cat: 'Caching & Jobs', tool: 'Redis, Hangfire' },
    { cat: 'Authentication', tool: 'JWT, Identity Server' },
    { cat: 'Documentation', tool: 'Swagger' },
    { cat: 'Logging', tool: 'Serilog' },
    { cat: 'Containerization', tool: 'Docker' }
  ];

  const deliverables = [
    'API Architecture',
    'Database Integration',
    'Authentication System',
    'Business Logic',
    'Security Implementation',
    'Logging & Monitoring',
    'AI Service Integration',
    'Documentation',
    'Deployment Package',
    'Production APIs'
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
            <Server size={28} color="#f59e0b" />
            Phase 4: Backend Development
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            बैकएंड डेवलपमेंट - सॉफ़्टवेयर का वह भाग जो Business Logic, APIs, Database और Authentication को संभालता है।
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

      {/* Architecture Flows & Diagrams */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        
        {/* Basic Architecture Flow */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#3b82f615', padding: '0.75rem', borderRadius: '0.5rem', color: '#3b82f6' }}><Server size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Backend Architecture Flow</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
            <div style={{ background: '#dbeafe', color: '#1e40af', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold' }}>Client (Web/Mobile)</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#fef3c7', color: '#b45309', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold' }}>API Gateway</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#fce7f3', color: '#9d174d', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold' }}>Authentication</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#e0e7ff', color: '#3730a3', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold' }}>Business Logic</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#d1fae5', color: '#047857', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold' }}>Data Access Layer</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#f3f4f6', color: '#1f2937', padding: '0.6rem 2rem', borderRadius: '0.5rem', border: '2px solid #9ca3af', fontWeight: 'bold' }}>Database</div>
          </div>
        </div>

        {/* Enterprise Architecture (.NET + AI) */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#8b5cf615', padding: '0.75rem', borderRadius: '0.5rem', color: '#8b5cf6' }}><Network size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Enterprise Architecture (.NET + AI)</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
            <div style={{ width: '80%', textAlign: 'center', background: '#f1f5f9', color: '#334155', padding: '0.6rem 1rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #cbd5e1' }}>Presentation Layer</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ width: '80%', textAlign: 'center', background: '#eff6ff', color: '#1d4ed8', padding: '0.6rem 1rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #bfdbfe' }}>API Layer</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ width: '80%', textAlign: 'center', background: '#fdf4ff', color: '#a21caf', padding: '0.6rem 1rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #f5d0fe' }}>Business Layer</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ width: '80%', textAlign: 'center', background: '#ecfdf5', color: '#047857', padding: '0.6rem 1rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #a7f3d0' }}>Repository Layer</div>
            <div style={{ display: 'flex', gap: '1rem', width: '80%', justifyContent: 'center', marginTop: '0.5rem' }}>
              <div style={{ flex: 1, textAlign: 'center', background: '#fef2f2', color: '#b91c1c', padding: '0.6rem 1rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #fecaca' }}>Database Layer</div>
              <div style={{ flex: 1, textAlign: 'center', background: '#fffbeb', color: '#b45309', padding: '0.6rem 1rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #fde68a' }}>AI Services Layer</div>
            </div>
          </div>
        </div>

        {/* AI Backend Requirements Flow */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#ec489915', padding: '0.75rem', borderRadius: '0.5rem', color: '#ec4899' }}><BrainCircuit size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>AI Backend Requirements</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div style={{ background: '#f8fafc', color: '#334155', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #e2e8f0' }}>Application</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#fdf2f8', color: '#be185d', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #fbcfe8' }}>AI Service</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#f0fdf4', color: '#15803d', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #bbf7d0' }}>Machine Learning Model</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#fff7ed', color: '#c2410c', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #ffedd5' }}>Prediction Engine</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#eff6ff', color: '#1d4ed8', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #bfdbfe' }}>Results API</div>
          </div>
          <div style={{ background: '#f1f5f9', padding: '1rem', borderRadius: '0.5rem' }}>
            <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold', color: '#334155', fontSize: '0.9rem' }}>AI Features:</p>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#475569', fontSize: '0.85rem' }}>
              <li>Model Inference & Prediction API</li>
              <li>Recommendation API</li>
              <li>OCR & NLP Service</li>
              <li>Speech Processing Service</li>
            </ul>
          </div>
        </div>
        
        {/* Database Integration Flow */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#10b98115', padding: '0.75rem', borderRadius: '0.5rem', color: '#10b981' }}><Database size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Database Integration</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <div style={{ background: '#eff6ff', color: '#1e40af', padding: '1rem 3rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '70%', textAlign: 'center' }}>Backend</div>
            <div style={{ color: '#94a3b8', fontSize: '1.5rem', margin: '-0.5rem 0' }}>↓</div>
            <div style={{ background: '#f5f3ff', color: '#5b21b6', padding: '1rem 3rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '70%', textAlign: 'center' }}>Repository Layer</div>
            <div style={{ color: '#94a3b8', fontSize: '1.5rem', margin: '-0.5rem 0' }}>↓</div>
            <div style={{ background: '#ecfdf5', color: '#065f46', padding: '1rem 3rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '70%', textAlign: 'center' }}>ORM (Entity Framework)</div>
            <div style={{ color: '#94a3b8', fontSize: '1.5rem', margin: '-0.5rem 0' }}>↓</div>
            <div style={{ background: '#fef2f2', color: '#991b1b', padding: '1rem 3rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '2px solid #fca5a5', width: '70%', textAlign: 'center' }}>SQL Server</div>
          </div>
        </div>

      </div>

      {/* Lists (Deliverables & Recommended Stack) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
        
        {/* Suggested Tech Stack */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#f59e0b15', padding: '0.75rem', borderRadius: '0.5rem', color: '#f59e0b' }}><FileText size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Recommended Tech Stack</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {techStack.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 1rem', background: '#f8fafc', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                <span style={{ color: '#64748b', fontWeight: '500', fontSize: '0.9rem' }}>{item.cat}</span>
                <span style={{ color: '#0f172a', fontWeight: 'bold', fontSize: '0.9rem' }}>{item.tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#10b98115', padding: '0.75rem', borderRadius: '0.5rem', color: '#10b981' }}><FileSignature size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Backend Deliverables</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {deliverables.map((doc, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', background: '#f0fdf4', borderRadius: '0.5rem', border: '1px solid #dcfce7' }}>
                <CheckCircle size={16} color="#10b981" />
                <span style={{ color: '#166534', fontSize: '0.85rem', fontWeight: '500' }}>{doc}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
