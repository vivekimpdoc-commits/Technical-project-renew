import React from 'react';
import {
  ArrowLeft, Layout, MousePointerClick, Smartphone, Eye, Columns, Grid, MonitorPlay, MessageSquare, Briefcase, FileSignature, PenTool, Palette, MoveRight
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function Phase2Requirements({ onBack }) {
  const reqData = [
    {
      id: 1,
      title: 'UI Design (कैसा दिखाई देगा?)',
      subtitle: 'Visual Aesthetics & Styling',
      icon: Palette,
      color: '#ec4899',
      items: [
        'Color Theme: Light, Dark, Government Theme (Blue, White, Saffron), High Contrast',
        'Typography: Hindi + English Support, Readable Font Size, Responsive Text',
        'Layout Design: Header, Sidebar Menu, Main Content Area, Footer',
        'Navigation: Dashboard Navigation, Breadcrumb, Search Bar, Quick Access',
        'Components: Buttons, Forms, Tables, Cards, Charts, Progress Bars, Modals'
      ]
    },
    {
      id: 2,
      title: 'UX Design (उपयोगकर्ता का अनुभव)',
      subtitle: 'Usability & User Journey',
      icon: MousePointerClick,
      color: '#3b82f6',
      items: [
        'User Journey: Login → Dashboard → Select Module → Enter Data → AI Processing → Reports',
        'Easy Workflow: Minimum Clicks, Fast Navigation, Simple Forms, Auto Save',
        'Accessibility: Keyboard Navigation, Screen Reader Support, Font Resize, Multi-language',
        'Responsive Design: Desktop, Tablet, Mobile'
      ]
    },
    {
      id: 3,
      title: 'Screen Design Requirements',
      subtitle: 'मुख्य स्क्रीन्स का ढांचा',
      icon: MonitorPlay,
      color: '#10b981',
      items: [
        'Login Screen: Username, Password, OTP, Forgot Password, Captcha',
        'Dashboard Screen: Statistics Cards, Recent Activities, Notifications, Quick Actions, AI Insights',
        'Search Screen: Advanced Search, Filters, Sort Options',
        'Report Screen: Charts, Graphs, Download PDF/Excel'
      ]
    },
    {
      id: 4,
      title: 'Dashboard Widgets',
      subtitle: 'डैशबोर्ड के छोटे टूल्स/विजेट्स',
      icon: Grid,
      color: '#f59e0b',
      items: [
        'Total Records & Pending Tasks',
        'Completed Tasks & AI Recommendations',
        'Performance Metrics & Alerts',
        'Heat Map & Timeline View'
      ]
    },
    {
      id: 5,
      title: 'AI Application UI/UX Requirements',
      subtitle: 'AI फीचर्स के लिए विशेष UI',
      icon: MessageSquare,
      color: '#8b5cf6',
      items: [
        'AI Chat Assistant: Chat Window, Voice Input, File Upload, Suggested Questions, History',
        'AI Analytics Dashboard: KPI Cards, Prediction Charts, Risk Indicators, Trend Analysis, Interactive Graphs'
      ]
    }
  ];

  const deliverables = [
    'User Personas',
    'User Journey Map',
    'Wireframes (Low & High Fidelity)',
    'Interactive Prototype',
    'Design System & Components',
    'Responsive Design Specs',
    'Accessibility Guidelines',
    'Final UI Kit'
  ];

  const tools = [
    'Figma',
    'Adobe XD',
    'Sketch',
    'Miro',
    'Draw.io'
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
            <Layout size={28} color="#ec4899" />
            Phase 2: UI/UX Design
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            यूजर इंटरफेस और यूजर एक्सपीरियंस डिज़ाइन - सॉफ़्टवेयर को आसान, आकर्षक, तेज़ और यूज़र-फ्रेंडली बनाना।
          </p>
        </div>
      </div>

      {/* Grid of Boxes */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
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
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#334155', fontSize: '0.85rem', lineHeight: '1.5', flex: 1 }}>
                {box.items.map((item, idx) => {
                  if(item.includes('→')) {
                    const parts = item.split('→');
                    return (
                      <li key={idx} style={{ marginBottom: '0.3rem', listStyle: 'none', marginLeft: '-1.2rem' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center', background: '#f8fafc', padding: '0.5rem', borderRadius: '0.5rem', fontSize: '0.8rem' }}>
                          <strong style={{color: '#0f172a'}}>Journey:</strong>
                          {parts.map((p, i) => (
                            <React.Fragment key={i}>
                              <span style={{background: 'white', padding: '0.2rem 0.4rem', borderRadius: '0.25rem', border: '1px solid #e2e8f0'}}>{p.trim()}</span>
                              {i < parts.length - 1 && <MoveRight size={12} color="#94a3b8"/>}
                            </React.Fragment>
                          ))}
                        </div>
                      </li>
                    );
                  }
                  return <li key={idx} style={{ marginBottom: '0.3rem' }}>{item}</li>
                })}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Bottom Sections: Tools, Deliverables and Wireframe */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
        
        {/* Deliverables & Tools */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ background: '#ec489915', padding: '0.75rem', borderRadius: '0.5rem', color: '#ec4899' }}><FileSignature size={24} /></div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>UI/UX Deliverables</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {deliverables.map((doc, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', padding: '0.75rem', background: '#fdf2f8', borderRadius: '0.5rem', border: '1px solid #fce7f3' }}>
                  <div style={{ width: '6px', height: '6px', background: '#ec4899', borderRadius: '50%', marginTop: '0.4rem', flexShrink: 0 }}></div>
                  <span style={{ color: '#831843', fontSize: '0.85rem', fontWeight: '500' }}>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ background: '#10b98115', padding: '0.75rem', borderRadius: '0.5rem', color: '#10b981' }}><PenTool size={24} /></div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Recommended Tools</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {tools.map((tool, idx) => (
                <span key={idx} style={{ padding: '0.5rem 1rem', background: '#f0fdf4', color: '#166534', border: '1px solid #dcfce7', borderRadius: '2rem', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Wireframe Example */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#3b82f615', padding: '0.75rem', borderRadius: '0.5rem', color: '#3b82f6' }}><Columns size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Wireframe Example (लेआउट)</h3>
          </div>
          
          <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.75rem', border: '2px dashed #cbd5e1', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontFamily: 'monospace' }}>
            <div style={{ background: '#e2e8f0', padding: '0.75rem', textAlign: 'center', borderRadius: '0.25rem', fontWeight: 'bold', color: '#334155' }}>Header</div>
            
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <div style={{ background: '#e2e8f0', padding: '2rem 0.5rem', width: '80px', textAlign: 'center', borderRadius: '0.25rem', color: '#475569', fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div>Sidebar</div>
                <div>Menu</div>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <div style={{ flex: 1, background: '#dbeafe', color: '#1e40af', padding: '0.5rem', textAlign: 'center', borderRadius: '0.25rem' }}>Cards</div>
                  <div style={{ flex: 1, background: '#dbeafe', color: '#1e40af', padding: '0.5rem', textAlign: 'center', borderRadius: '0.25rem' }}>Cards</div>
                  <div style={{ flex: 1, background: '#dbeafe', color: '#1e40af', padding: '0.5rem', textAlign: 'center', borderRadius: '0.25rem' }}>Cards</div>
                </div>
                
                <div style={{ display: 'flex', gap: '0.5rem', flex: 1 }}>
                  <div style={{ flex: 2, background: '#fce7f3', color: '#9d174d', padding: '2rem 0', textAlign: 'center', borderRadius: '0.25rem' }}>Charts</div>
                  <div style={{ flex: 1, background: '#fef3c7', color: '#b45309', padding: '2rem 0', textAlign: 'center', borderRadius: '0.25rem' }}>AI Insights</div>
                </div>

                <div style={{ background: '#f3e8ff', color: '#6b21a8', padding: '1.5rem', textAlign: 'center', borderRadius: '0.25rem' }}>Data Table</div>
              </div>
            </div>
            
            <div style={{ background: '#e2e8f0', padding: '0.5rem', textAlign: 'center', borderRadius: '0.25rem', color: '#64748b', fontSize: '0.8rem' }}>Footer</div>
          </div>
          
        </div>

      </div>
    </div>
  );
}
