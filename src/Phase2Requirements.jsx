import React, { useState } from 'react';
import {
  ArrowLeft, Layout, MousePointerClick, Smartphone, Eye, Columns, Grid, MonitorPlay, MessageSquare, Briefcase, FileSignature, PenTool, Palette, MoveRight
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function Phase2Requirements({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
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
                    {box.items.map((item, idx) => {
                      if(item.includes('→')) {
                        const parts = item.split('→');
                        return (
                          <div key={idx} style={{ 
                            background: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.5rem 0.75rem', 
                            borderRadius: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem',
                            fontSize: '0.85rem', color: '#334155', fontWeight: '500'
                          }}>
                            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                               <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: box.color, flexShrink: 0 }}></div>
                               <strong style={{color: '#0f172a'}}>Journey:</strong>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center', background: 'white', padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                              {parts.map((p, i) => (
                                <React.Fragment key={i}>
                                  <span style={{background: '#f1f5f9', padding: '0.2rem 0.4rem', borderRadius: '0.25rem', border: '1px solid #e2e8f0'}}>{p.trim()}</span>
                                  {i < parts.length - 1 && <MoveRight size={12} color="#94a3b8"/>}
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        );
                      }
                      return (
                        <div key={idx} style={{ 
                          background: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.5rem 0.75rem', 
                          borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
                          fontSize: '0.85rem', color: '#334155', fontWeight: '500'
                        }}>
                          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: box.color, flexShrink: 0 }}></div>
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{item}</span>
                        </div>
                      );
                    })}
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
