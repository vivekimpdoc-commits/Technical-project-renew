import React, { useState } from 'react';
import {
  ArrowLeft, Code, Layers, Box, Cpu, Database, Shield, Zap, Smartphone, MessageSquare, Briefcase, Network, FolderTree, FileSignature, CheckCircle, Target
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function Phase3Requirements({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const reqData = [
    {
      id: 1,
      title: 'Technology Stack',
      subtitle: 'तकनीकी फ्रेमवर्क्स',
      icon: Code,
      color: '#3b82f6',
      items: [
        'मॉडर्न फ्रेमवर्क (Frameworks): तेज़ और सुरक्षित डिज़ाइन के लिए React, Angular या Vue.js का उपयोग (React + TypeScript का सुझाव)।',
        'स्टाइलिंग (Styling): बेहतरीन और रेस्पॉन्सिव डिज़ाइन के लिए Tailwind CSS या Bootstrap का उपयोग।'
      ],
      example: 'लक्ष्य: ऐप को दुनिया की सबसे आधुनिक और सुरक्षित तकनीक पर बनाना।'
    },
    {
      id: 2,
      title: 'Core Frontend Modules',
      subtitle: 'प्रमुख मॉड्यूल',
      icon: Layers,
      color: '#10b981',
      items: [
        'ऑथेंटिकेशन (Authentication): लॉगिन (Login), लॉगआउट, पासवर्ड रीसेट और सेशन का सुरक्षित मैनेजमेंट।',
        'डैशबोर्ड (Dashboard): एक मुख्य स्क्रीन जहाँ ग्राफिक्स (KPI Cards, Charts) के साथ पूरा सारांश (Summary) दिखाई दे।'
      ],
      example: 'लक्ष्य: यूज़र को सभी ज़रूरी टूल्स और डेटा एक ही जगह पर आसानी से उपलब्ध करवाना।'
    },
    {
      id: 3,
      title: 'UI Components',
      subtitle: 'यूजर इंटरफेस हिस्से',
      icon: Box,
      color: '#f59e0b',
      items: [
        'कॉमन डिज़ाइन (Components): पूरे ऐप में एक जैसे बटन्स (Buttons), फॉर्म्स (Forms), और टेबल्स (Tables) का इस्तेमाल।',
        'पॉपअप्स (Modals): ज़रूरी सूचना देने या कोई फॉर्म भरवाने के लिए स्क्रीन के ऊपर खुलने वाले पॉपअप (Popups)।'
      ],
      example: 'लक्ष्य: पूरे सॉफ्टवेयर में एकरूपता (Consistency) बनाए रखना ताकि पुलिस वाले कंफ्यूज़ न हों।'
    },
    {
      id: 4,
      title: 'State Management',
      subtitle: 'डेटा स्टेट मैनेजमेंट',
      icon: Database,
      color: '#ec4899',
      items: [
        'डेटा मैनेजमेंट (State Mgmt): एक पेज का डेटा (जैसे यूज़र का नाम) बिना दोबारा लोड किए दूसरे पेज पर दिखाना (Redux या Zustand का उपयोग)।',
        'लोकल स्टोरेज (Local Storage): इंटरनेट जाने पर भी फॉर्म में भरा हुआ थोड़ा-बहुत डेटा सेव (Save) रखना।'
      ],
      example: 'लक्ष्य: पेज बार-बार लोड होने के बजाय एक बार में ही तेज़ी से काम करे (Single Page Application)।'
    },
    {
      id: 5,
      title: 'Security Requirements',
      subtitle: 'सुरक्षा नियम',
      icon: Shield,
      color: '#ef4444',
      items: [
        'राउट गार्ड्स (Route Guards): कोई भी बिना लॉगिन किए किसी सुरक्षित पेज का URL डालकर उसे खोल न पाए।',
        'सेशन टाइमआउट (Session Timeout): अगर पुलिसकर्मी लॉगिन करके कंप्यूटर छोड़ दे, तो 15 मिनट बाद सॉफ्टवेयर अपने आप लॉगआउट (Logout) हो जाए।'
      ],
      example: 'लक्ष्य: फ्रंटएंड से होने वाली किसी भी गड़बड़ी या डेटा चोरी को पूरी तरह रोकना।'
    },
    {
      id: 6,
      title: 'Performance Optimization',
      subtitle: 'परफॉरमेंस सुधार',
      icon: Zap,
      color: '#8b5cf6',
      items: [
        'लेज़ी लोडिंग (Lazy Loading): सॉफ्टवेयर में सिर्फ वही पेज लोड (Load) हो जिसे यूज़र ने क्लिक किया है, ताकि स्पीड तेज़ रहे।',
        'कैशिंग (Caching): बार-बार सर्च होने वाले रिकॉर्ड्स को सेव रखना ताकि वे अगले क्लिक पर 1 सेकंड में खुल जाएँ।'
      ],
      example: 'लक्ष्य: धीमी इंटरनेट स्पीड (2G/3G) में भी सॉफ्टवेयर बिना रुके तेज़ी से खुले।'
    },
    {
      id: 7,
      title: 'Responsive Design',
      subtitle: 'डिवाइस सपोर्ट',
      icon: Smartphone,
      color: '#14b8a6',
      items: [
        'स्क्रीन एडजस्टमेंट (Responsive): सॉफ्टवेयर को इस तरह बनाना कि वह कंप्यूटर (Desktop), टैबलेट (Tablet) और मोबाइल (Mobile) पर अपने आप फिट हो जाए।',
        'PWA सपोर्ट (PWA): वेबसाइट को मोबाइल ऐप की तरह फोन में इनस्टॉल (Install) करने की सुविधा देना।'
      ],
      example: 'लक्ष्य: फील्ड में गश्त कर रहा सिपाही भी अपने फोन से आसानी से रिपोर्ट दर्ज कर सके।'
    },
    {
      id: 8,
      title: 'AI Application Features',
      subtitle: 'AI के लिए UI फीचर्स',
      icon: MessageSquare,
      color: '#6366f1',
      items: [
        'चैट इंटरफ़ेस (AI Chat): ChatGPT जैसा एक इंटरएक्टिव चैट बॉक्स जहाँ पुलिस बोलकर (Voice Input) या टाइप करके सवाल पूछ सके।',
        'इंटरेक्टिव चार्ट्स (Interactive Charts): AI द्वारा बताए गए रिस्क और भविष्यवाणियों (Predictions) को डायनामिक ग्राफ्स में दिखाना।'
      ],
      example: 'लक्ष्य: AI की जटिल बातों को आम बोलचाल और आसान ग्राफिक्स में यूज़र तक पहुँचाना।'
    },
    {
      id: 9,
      title: 'Police Application Modules',
      subtitle: 'पुलिस ऐप मॉड्यूल (उदाहरण)',
      icon: Briefcase,
      color: '#f97316',
      items: [
        'क्राइम डैशबोर्ड (Crime Dashboard): पूरे जिले का क्राइम ग्राफ और अलर्ट्स एक स्क्रीन पर।',
        'इन्वेस्टिगेशन मॉड्यूल (Investigation): केस डायरी, सबूत (Evidence) और टाइमलाइन दर्ज करने का आसान फॉर्म।'
      ],
      example: 'लक्ष्य: पुलिस के रोज़मर्रा के कागज़ी काम (Paperwork) को डिजिटल और आसान बनाना।'
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

  if (selectedDetail !== null) {
    const detailItem = reqData.find(item => item.id === selectedDetail);
    if (!detailItem) return null;
    const DetailIcon = detailItem.icon;
    
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setSelectedDetail(null)} className="back-button" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Phase 3
        </button>
        
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <DetailIcon size={40} color={detailItem.color} />
            <h3 style={{ margin: 0, fontSize: '2rem', color: '#0f172a' }}>{detailItem.title}</h3>
          </div>
          
          <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
            <h4 style={{ fontSize: '1.25rem', color: '#1e293b', marginBottom: '1rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem' }}>
              {detailItem.subtitle}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {detailItem.items.map((bullet, idx) => {
                const parts = bullet.split(':');
                const hasColon = parts.length > 1;
                return (
                  <div key={idx} style={{ padding: '1.25rem', background: `${detailItem.color}0a`, borderRadius: '0.75rem', borderLeft: `4px solid ${detailItem.color}` }}>
                    {hasColon ? (
                      <>
                        <strong style={{ fontSize: '1.1rem', color: '#1e293b' }}>{parts[0]}:</strong>
                        <p style={{ margin: '0.5rem 0 0 0', color: '#334155', lineHeight: '1.6' }}>{parts.slice(1).join(':')}</p>
                      </>
                    ) : (
                      <p style={{ margin: 0, color: '#1e293b', fontSize: '1.1rem', fontWeight: '500' }}>{bullet}</p>
                    )}
                  </div>
                );
              })}
            </div>

            {detailItem.example && (
              <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f0fdf4', borderRadius: '0.75rem', border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: '#dcfce7', padding: '1rem', borderRadius: '50%' }}><Target size={28} color="#16a34a" /></div>
                <div>
                  <h4 style={{ color: '#166534', margin: '0 0 0.25rem 0', fontSize: '1.1rem' }}>Ultimate Goal (अंतिम लक्ष्य)</h4>
                  <p style={{ margin: 0, color: '#15803d', fontSize: '1rem', fontStyle: 'italic', fontWeight: '500' }}>
                    {detailItem.example}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

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
                    {box.items.map((item, idx) => {
                      const title = item.split(':')[0];
                      return (
                        <div key={idx} style={{
                          background: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.5rem 0.75rem',
                          borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
                          fontSize: '0.85rem', color: '#334155', fontWeight: '500'
                        }}>
                          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: box.color, flexShrink: 0 }}></div>
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* View Details Button */}
                  <button style={{
                    width: '100%', padding: '0.75rem', background: box.color, color: 'white',
                    border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '0.95rem',
                    cursor: 'pointer', transition: 'opacity 0.2s'
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = 0.9}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = 1}
                    onClick={() => setSelectedDetail(box.id)}
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
