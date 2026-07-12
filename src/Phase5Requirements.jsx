import React, { useState } from 'react';
import { 
  ArrowLeft, CheckSquare, ShieldCheck, Activity, Target, Database, Layout, SearchCode, MonitorSmartphone, BrainCircuit, RefreshCw, FileText, PenTool, CheckCircle, Bug, ListOrdered
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function Phase5Requirements({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const reqData = [
    {
      id: 1,
      title: 'QA Planning & Requirement Testing',
      subtitle: 'योजना और आवश्यकता परीक्षण',
      icon: Target,
      color: '#3b82f6',
      items: [
        'टेस्ट प्लानिंग (QA Planning): सॉफ्टवेयर को कैसे, कब और कहाँ टेस्ट करना है, इसकी पूरी स्ट्रेटेजी (Strategy) बनाना।',
        'रिक्वायरमेंट टेस्टिंग (Requirement Testing): यह जाँचना कि क्या सॉफ्टवेयर ने पुलिस विभाग की हर एक ज़रूरत (जैसे FIR दर्ज करना) को पूरा किया है या नहीं।'
      ],
      example: 'लक्ष्य: टेस्टिंग शुरू करने से पहले एक पक्की रूपरेखा तैयार करना ताकि कोई भी बग (Bug) छूटे नहीं।'
    },
    {
      id: 2,
      title: 'Functional & Unit Testing',
      subtitle: 'फंक्शन और कोड टेस्टिंग',
      icon: SearchCode,
      color: '#10b981',
      items: [
        'फंक्शनल टेस्टिंग (Functional): सॉफ्टवेयर का हर एक बटन, फॉर्म और लिंक (जैसे- लॉगिन, रिपोर्ट डाउनलोड) सही से काम कर रहा है या नहीं, यह चेक करना।',
        'यूनिट टेस्टिंग (Unit Testing): कोड के हर छोटे से छोटे हिस्से (Unit) को अलग-अलग चेक करना कि उसमें कोई तकनीकी गलती तो नहीं है।'
      ],
      example: 'लक्ष्य: यह सुनिश्चित करना कि सिस्टम का हर एक फीचर ठीक उसी तरह काम करे जैसा तय किया गया था।'
    },
    {
      id: 3,
      title: 'System & UAT Testing',
      subtitle: 'सिस्टम और यूजर टेस्टिंग',
      icon: CheckSquare,
      color: '#f59e0b',
      items: [
        'सिस्टम टेस्टिंग (System Testing): पूरा सॉफ्टवेयर (फ्रंटएंड + बैकएंड + डेटाबेस) एक साथ जुड़कर सही आउटपुट दे रहा है या नहीं।',
        'यूज़र टेस्टिंग (UAT): असली पुलिस अधिकारियों (Users) द्वारा सॉफ्टवेयर का इस्तेमाल करवा कर उनका फीडबैक (Feedback) लेना।'
      ],
      example: 'लक्ष्य: लाइव (Live) करने से पहले खुद क्लाइंट (UP Police) से हरी झंडी (Sign-off) लेना।'
    },
    {
      id: 4,
      title: 'Regression & Compatibility',
      subtitle: 'पुराने फीचर्स और डिवाइस सपोर्ट',
      icon: RefreshCw,
      color: '#ec4899',
      items: [
        'रिग्रेशन (Regression): यह जाँचना कि किसी नए अपडेट के आने से पुराने काम कर रहे फीचर्स खराब तो नहीं हो गए।',
        'कम्पैटिबिलिटी (Compatibility): सॉफ्टवेयर क्या मोबाइल, टैबलेट, कंप्यूटर और अलग-अलग ब्राउज़र्स (Chrome, Edge) पर सही से खुल रहा है?'
      ],
      example: 'लक्ष्य: सॉफ्टवेयर हर डिवाइस और हर अपडेट के बाद बिना रुके सुचारू रूप से चले।'
    },
    {
      id: 5,
      title: 'Performance Testing',
      subtitle: 'रफ़्तार और लोड क्षमता',
      icon: Activity,
      color: '#8b5cf6',
      items: [
        'लोड टेस्टिंग (Load Testing): अगर 10,000 पुलिसकर्मी एक साथ लॉगिन करें, तो क्या सिस्टम स्लो (Slow) होगा?',
        'स्ट्रेस टेस्टिंग (Stress Testing): सर्वर की वह सीमा (Limit) जाँचना जिस पर पहुँच कर वह क्रैश हो जाता है, ताकि उसे और मज़बूत बनाया जा सके।'
      ],
      example: 'लक्ष्य: किसी बड़ी घटना के समय, जब बहुत ज़्यादा लोग सिस्टम यूज़ करें, तब भी यह क्रैश न हो।'
    },
    {
      id: 6,
      title: 'Security Testing',
      subtitle: 'सुरक्षा परीक्षण',
      icon: ShieldCheck,
      color: '#ef4444',
      items: [
        'वल्नेरेबिलिटी स्कैन (Vulnerability): सिस्टम में मौजूद उन कमज़ोरियों को खोजना जिनका फायदा हैकर्स उठा सकते हैं।',
        'पेनेट्रेशन टेस्टिंग (Pen-Testing): एथिकल हैकर्स द्वारा जानबूझकर सिस्टम को हैक करने की कोशिश करना (सुरक्षा जाँचने के लिए)।'
      ],
      example: 'लक्ष्य: पुलिस के संवेदनशील डेटाबेस को साइबर हमलों (Cyber Attacks) से अभेद्य बनाना।'
    },
    {
      id: 7,
      title: 'Database & API Testing',
      subtitle: 'डेटाबेस और API जांच',
      icon: Database,
      color: '#14b8a6',
      items: [
        'डेटाबेस टेस्टिंग (DB Test): दर्ज की गई FIR क्या सही टेबल में, बिना डेटा लॉस के सेव हो रही है?',
        'API टेस्टिंग (API Test): फ्रंटएंड और बैकएंड के बीच जो डेटा भेजा जा रहा है, क्या वह सही फॉर्मेट में और सुरक्षित है?'
      ],
      example: 'लक्ष्य: अंदरूनी डेटा स्ट्रक्चर (Data Structure) में कोई गड़बड़ी या लीकेज न हो।'
    },
    {
      id: 8,
      title: 'UI/UX & Data Quality Testing',
      subtitle: 'डिज़ाइन और डेटा शुद्धता',
      icon: Layout,
      color: '#f97316',
      items: [
        'UI/UX टेस्टिंग (Design): क्या सॉफ्टवेयर देखने में अच्छा है? क्या बटन्स सही जगह पर हैं और यूज़र्स के लिए आसान हैं?',
        'डेटा क्वालिटी (Data Quality): क्या सर्च करने पर गलत, डुप्लीकेट या आधा-अधूरा रिकॉर्ड तो नहीं आ रहा?'
      ],
      example: 'लक्ष्य: सॉफ्टवेयर इतना आसान हो कि एक नया पुलिसकर्मी भी उसे बिना ट्रेनिंग के समझ सके।'
    },
    {
      id: 9,
      title: 'AI System Testing',
      subtitle: 'आर्टिफिशियल इंटेलिजेंस टेस्टिंग',
      icon: BrainCircuit,
      color: '#6366f1',
      items: [
        'मॉडल एक्यूरेसी (Model Accuracy): AI जो अपराधियों की भविष्यवाणी कर रहा है, वह कितनी सटीक (Accurate) है?',
        'बायस टेस्टिंग (Bias Testing): क्या AI किसी खास इलाके या समुदाय के खिलाफ गलत परिणाम (False Positives) तो नहीं दे रहा?'
      ],
      example: 'लक्ष्य: AI के नतीजों को 100% निष्पक्ष (Unbiased) और भरोसेमंद बनाना।'
    },
    {
      id: 10,
      title: 'Automation & Metrics',
      subtitle: 'ऑटोमेशन और रिपोर्ट्स',
      icon: MonitorSmartphone,
      color: '#06b6d4',
      items: [
        'ऑटोमेशन (Automation Testing): इंसानों के बजाय सॉफ्टवेयर (जैसे Selenium) से टेस्टिंग करवाना ताकि काम जल्दी हो।',
        'टेस्टिंग रिपोर्ट्स (Metrics): कितने टेस्ट पास हुए, कितने फेल हुए और कितने बग्स (Bugs) मिले—इसकी पूरी रिपोर्ट।'
      ],
      example: 'लक्ष्य: समय बचाने के लिए मैन्युअल काम कम करना और ऑटोमैटिक टेस्टिंग को बढ़ाना।'
    }
  ];

  const tools = [
    'Selenium',
    'Postman',
    'Apache JMeter',
    'Playwright',
    'SonarQube',
    'OWASP ZAP'
  ];

  const deliverables = [
    'Test Strategy Document & Test Plan',
    'Test Cases & Test Scripts',
    'Requirement Traceability Matrix (RTM)',
    'Bug Reports & Automation Scripts',
    'Performance & Security Test Report',
    'UAT Sign-off & Final QA Certification'
  ];

  if (selectedDetail !== null) {
    const detailItem = reqData.find(item => item.id === selectedDetail);
    if (!detailItem) return null;
    const DetailIcon = detailItem.icon;
    
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setSelectedDetail(null)} className="back-button" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Phase 5
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
            <CheckSquare size={28} color="#10b981" />
            Phase 5: Testing & Quality Assurance (QA)
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            सॉफ्टवेयर सही, सुरक्षित, तेज, विश्वसनीय और Bug-Free तरीके से काम करे, यह सुनिश्चित करना।
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

      {/* QA Workflows & Diagrams */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        
        {/* Enterprise QA Process */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#3b82f615', padding: '0.75rem', borderRadius: '0.5rem', color: '#3b82f6' }}><ListOrdered size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Enterprise QA Process</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', alignItems: 'center' }}>
            {['Requirements', 'Test Planning', 'Test Case Design', 'Environment Setup', 'Execution', 'Bug Fixing', 'Retesting', 'Regression Testing', 'UAT', 'Production Release'].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <div style={{ 
                  background: idx === arr.length - 1 ? '#dcfce7' : '#f1f5f9', 
                  color: idx === arr.length - 1 ? '#166534' : '#334155', 
                  padding: '0.4rem 1.5rem', borderRadius: '0.5rem', 
                  fontWeight: 'bold', width: '80%', textAlign: 'center',
                  border: `1px solid ${idx === arr.length - 1 ? '#bbf7d0' : '#e2e8f0'}`,
                  fontSize: '0.85rem'
                }}>
                  {step}
                </div>
                {idx < arr.length - 1 && <div style={{ color: '#94a3b8', fontSize: '1.2rem', lineHeight: '0.8' }}>↓</div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bug Lifecycle Flow */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#ef444415', padding: '0.75rem', borderRadius: '0.5rem', color: '#ef4444' }}><Bug size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Defect Management (Bug Lifecycle)</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', marginTop: '2rem' }}>
            <div style={{ background: '#fee2e2', color: '#991b1b', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '60%', textAlign: 'center', border: '1px solid #fecaca' }}>New</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#fef3c7', color: '#b45309', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '60%', textAlign: 'center', border: '1px solid #fde68a' }}>Assigned</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#dbeafe', color: '#1e40af', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '60%', textAlign: 'center', border: '1px solid #bfdbfe' }}>In Progress</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#f3e8ff', color: '#6b21a8', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '60%', textAlign: 'center', border: '1px solid #e9d5ff' }}>Fixed</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#e0e7ff', color: '#3730a3', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '60%', textAlign: 'center', border: '1px solid #c7d2fe' }}>Retest</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#dcfce7', color: '#166534', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '60%', textAlign: 'center', border: '1px solid #bbf7d0' }}>Closed</div>
          </div>
        </div>
        
        {/* Integration Testing Flow */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#10b98115', padding: '0.75rem', borderRadius: '0.5rem', color: '#10b981' }}><RefreshCw size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Integration Testing Flow</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', marginTop: '3rem' }}>
            <div style={{ background: '#eff6ff', color: '#1e40af', padding: '1rem 3rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '70%', textAlign: 'center' }}>Frontend</div>
            <div style={{ color: '#94a3b8', fontSize: '1.5rem', margin: '-0.5rem 0' }}>↓</div>
            <div style={{ background: '#f5f3ff', color: '#5b21b6', padding: '1rem 3rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '70%', textAlign: 'center' }}>API Layer</div>
            <div style={{ color: '#94a3b8', fontSize: '1.5rem', margin: '-0.5rem 0' }}>↓</div>
            <div style={{ background: '#ecfdf5', color: '#065f46', padding: '1rem 3rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '70%', textAlign: 'center' }}>Backend Core</div>
            <div style={{ color: '#94a3b8', fontSize: '1.5rem', margin: '-0.5rem 0' }}>↓</div>
            <div style={{ background: '#fef2f2', color: '#991b1b', padding: '1rem 3rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '2px solid #fca5a5', width: '70%', textAlign: 'center' }}>Database</div>
          </div>
        </div>

      </div>

      {/* Lists (Deliverables & Recommended Tools) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
        
        {/* Recommended Tools */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#8b5cf615', padding: '0.75rem', borderRadius: '0.5rem', color: '#8b5cf6' }}><PenTool size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Recommended QA Tools</h3>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {tools.map((tool, idx) => (
              <span key={idx} style={{ padding: '0.5rem 1rem', background: '#f5f3ff', color: '#5b21b6', border: '1px solid #ede9fe', borderRadius: '2rem', fontSize: '0.9rem', fontWeight: 'bold' }}>
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#ec489915', padding: '0.75rem', borderRadius: '0.5rem', color: '#ec4899' }}><FileText size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>QA Deliverables</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {deliverables.map((doc, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem', background: '#fdf2f8', borderRadius: '0.5rem', border: '1px solid #fce7f3' }}>
                <CheckCircle size={18} color="#ec4899" style={{ flexShrink: 0 }} />
                <span style={{ color: '#831843', fontSize: '0.9rem', fontWeight: '500' }}>{doc}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
