import React, { useState } from 'react';
import { 
  ArrowLeft, Code, Layers, Box, Cpu, Database, Shield, Zap, Smartphone, MessageSquare, Briefcase, Network, FolderTree, FileSignature, CheckCircle
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function Phase3Requirements({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const reqData = [
    {
      id: 1,
      title: 'Technology Stack',
      subtitle: 'तकनीकी फ्रेमवर्क्स',
      icon: Code,
      color: '#3b82f6',
      items: [
        'Basic Web: HTML5, CSS3, JavaScript (ES6+)',
        'Modern Frameworks: React, Angular, Vue.js',
        'Recommended: React + TypeScript',
        'Backend pairing: .NET Web API Backend',
        'Responsive UI Design'
      ]
    },
    {
      id: 2,
      title: 'Core Frontend Modules',
      subtitle: 'प्रमुख मॉड्यूल',
      icon: Layers,
      color: '#10b981',
      items: [
        'Authentication: Login, Logout, Forgot Password, OTP, Session Management',
        'Dashboard: KPI Cards, Charts, Notifications, Quick Actions',
        'User Management: Add/Edit/Delete, Role Management',
        'Reports: Charts, Tables, Export PDF/Excel',
        'Search: Global Search, Advanced Filters, Sorting'
      ]
    },
    {
      id: 3,
      title: 'UI Components',
      subtitle: 'यूजर इंटरफेस हिस्से',
      icon: Box,
      color: '#f59e0b',
      items: [
        'Buttons, Cards, Forms, Tables',
        'Modal Popups, Sidebar, Navbar, Tabs',
        'Timeline, Notifications, Progress Bar, Loader'
      ]
    },
    {
      id: 4,
      title: 'State Management',
      subtitle: 'डेटा स्टेट मैनेजमेंट',
      icon: Database,
      color: '#ec4899',
      items: [
        'React Context API',
        'Redux Toolkit',
        'Zustand'
      ]
    },
    {
      id: 5,
      title: 'Security Requirements',
      subtitle: 'सुरक्षा नियम',
      icon: Shield,
      color: '#ef4444',
      items: [
        'JWT Authentication & Role Based Access',
        'Route Guards & Session Timeout',
        'Input Validation',
        'CSRF Protection & XSS Protection'
      ]
    },
    {
      id: 6,
      title: 'Performance Optimization',
      subtitle: 'परफॉरमेंस सुधार',
      icon: Zap,
      color: '#8b5cf6',
      items: [
        'Lazy Loading & Code Splitting',
        'Caching & Pagination',
        'Image Optimization',
        'Debouncing Search'
      ]
    },
    {
      id: 7,
      title: 'Responsive Design',
      subtitle: 'डिवाइस सपोर्ट',
      icon: Smartphone,
      color: '#14b8a6',
      items: [
        'Desktop Layout',
        'Tablet Layout',
        'Mobile Layout',
        'PWA Support'
      ]
    },
    {
      id: 8,
      title: 'AI Application Features',
      subtitle: 'AI के लिए UI फीचर्स',
      icon: MessageSquare,
      color: '#6366f1',
      items: [
        'AI Chat Interface: Chat Window, Voice Input, File Upload, Chat History',
        'AI Dashboard: Predictions, Recommendations, Risk Scores, Interactive Charts, Real-Time Monitoring'
      ]
    },
    {
      id: 9,
      title: 'Police Application Modules',
      subtitle: 'पुलिस ऐप मॉड्यूल (उदाहरण)',
      icon: Briefcase,
      color: '#f97316',
      items: [
        'Dashboard: Crime Stats, Alerts, Pending Tasks',
        'Investigation: Case Details, Evidence Upload, Timeline, AI Recommendations',
        'Analytics: Heat Maps, Performance Charts, District Comparison'
      ]
    }
  ];

  const techStack = [
    { cat: 'Frontend', tool: 'React + TypeScript + Tailwind CSS' },
    { cat: 'Charts', tool: 'Chart.js, Recharts' },
    { cat: 'Maps', tool: 'Leaflet, Google Maps' },
    { cat: 'State Management', tool: 'Redux Toolkit' },
    { cat: 'API Integration', tool: 'Axios' },
    { cat: 'Authentication', tool: 'JWT + Role Based Access' }
  ];

  const deliverables = [
    'Wireframes',
    'UI Components Library',
    'Responsive Screens',
    'API Integration',
    'Dashboard',
    'User Management',
    'Reports & Analytics',
    'Testing',
    'Deployment Build',
    'User Documentation'
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
            <Code size={28} color="#10b981" />
            Phase 3: Frontend Development
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            फ्रंटएंड डेवलपमेंट - वह हिस्सा जो उपयोगकर्ता को दिखाई देता है और जिससे वह सीधे इंटरैक्ट करता है।
          </p>
        </div>
      </div>

      {/* Grid of Boxes */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
        {reqData.map(box => {
          const Icon = box.icon;
          return (
            <div key={box.id} style={{
              background: 'white', borderRadius: '1rem', padding: '1.5rem',
              border: '1px solid #e2e8f0', borderTop: `4px solid ${box.color}`,
              boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
              display: 'flex', flexDirection: 'column',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = `0 10px 25px ${box.color}33`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)';
            }}>
              {/* Header (Clickable) */}
              <div 
                onClick={() => setExpandedCard(expandedCard === box.id ? null : box.id)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: `${box.color}15`, padding: '0.75rem', borderRadius: '0.75rem', color: box.color }}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#0f172a', fontWeight: 'bold', lineHeight: '1.3' }}>{box.title}</h3>
                    <p style={{ margin: '0.2rem 0 0 0', color: '#64748b', fontSize: '0.85rem' }}>{box.subtitle}</p>
                  </div>
                </div>
                <span style={{ color: box.color, fontWeight: 'bold', fontSize: '1.5rem', lineHeight: '1' }}>
                  {expandedCard === box.id ? '−' : '+'}
                </span>
              </div>

              {/* Expanded Content */}
              {expandedCard === box.id && (
                <div className="animate-fade-in" style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1.5rem', flex: 1 }}>
                    {box.items.map((item, idx) => (
                      <div key={idx} style={{ 
                        background: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.5rem 0.75rem', 
                        borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
                        fontSize: '0.85rem', color: '#334155', fontWeight: '500'
                      }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: box.color, flexShrink: 0 }}></div>
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  {box.example && (
                    <div style={{ marginBottom: '1.5rem', padding: '0.75rem', background: '#f1f5f9', borderRadius: '0.5rem', fontSize: '0.85rem', color: '#475569', fontStyle: 'italic', borderLeft: `3px solid ${box.color}` }}>
                      {box.example}
                    </div>
                  )}
                  
                  {/* View Details Button */}
                  <button style={{
                    width: '100%', padding: '0.75rem', background: box.color, color: 'white',
                    border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '0.95rem',
                    cursor: 'pointer', transition: 'opacity 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = 0.9}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = 1}
                  >
                    Click to View Details
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Sections: Structure, API Flow, Stack, Deliverables */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
        
        {/* Suggested Tech Stack */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#3b82f615', padding: '0.75rem', borderRadius: '0.5rem', color: '#3b82f6' }}><Cpu size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Suggested Tech Stack (.NET + AI)</h3>
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
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Frontend Deliverables</h3>
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

        {/* Project Structure */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#f59e0b15', padding: '0.75rem', borderRadius: '0.5rem', color: '#f59e0b' }}><FolderTree size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Project Structure (फोल्डर)</h3>
          </div>
          <pre style={{ margin: 0, padding: '1.25rem', background: '#f8fafc', borderRadius: '0.75rem', border: '1px dashed #cbd5e1', fontSize: '0.9rem', color: '#334155', fontFamily: 'monospace', lineHeight: '1.5' }}>
{`Frontend
│
├── Components
├── Pages
├── Layouts
├── Services
├── Hooks
├── Context
├── Assets
├── Utils
├── Styles
└── Routes`}
          </pre>
        </div>

        {/* API Integration Flow */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#8b5cf615', padding: '0.75rem', borderRadius: '0.5rem', color: '#8b5cf6' }}><Network size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>API Integration Flow</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <div style={{ background: '#dbeafe', color: '#1e40af', padding: '0.75rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold' }}>Frontend (React)</div>
            <div style={{ color: '#94a3b8', fontSize: '1.5rem' }}>↓</div>
            <div style={{ background: '#fef3c7', color: '#b45309', padding: '0.75rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold' }}>REST API (GET, POST, PUT, DELETE)</div>
            <div style={{ color: '#94a3b8', fontSize: '1.5rem' }}>↓</div>
            <div style={{ background: '#f3e8ff', color: '#6b21a8', padding: '0.75rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold' }}>Backend (.NET)</div>
            <div style={{ color: '#94a3b8', fontSize: '1.5rem' }}>↓</div>
            <div style={{ background: '#fce7f3', color: '#9d174d', padding: '0.75rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold' }}>Database (SQL Server)</div>
          </div>
        </div>

      </div>
    </div>
  );
}
