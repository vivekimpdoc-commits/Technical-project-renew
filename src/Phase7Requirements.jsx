import React, { useState } from 'react';
import { 
  ArrowLeft, Shield, Wrench, Clock, Activity, HeadphonesIcon, Settings, Target, Database, FileText, BrainCircuit, CloudLightning, CheckCircle, FileSignature, Layers
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function Phase7Requirements({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const reqData = [
    {
      id: 1,
      title: 'Application Monitoring',
      subtitle: 'सिस्टम की निगरानी',
      icon: Activity,
      color: '#3b82f6',
      items: [
        'सर्वर मॉनिटरिंग (Health Monitoring): 24 घंटे जाँचना कि सर्वर ठीक से चल रहा है या नहीं, और मेमोरी (RAM/CPU) कितनी यूज़ हो रही है।',
        'यूज़र एक्टिविटी (User Activity): पुलिसकर्मी दिन भर में क्या-क्या सर्च कर रहे हैं और सॉफ्टवेयर कितना तेज़ चल रहा है, इसका हिसाब रखना।'
      ],
      example: 'लक्ष्य: सिस्टम डाउन होने से पहले ही उसकी खराबी का पता लगाकर उसे ठीक कर लेना।'
    },
    {
      id: 2,
      title: 'Corrective Maintenance',
      subtitle: 'खराबियां दूर करना',
      icon: Wrench,
      color: '#ef4444',
      items: [
        'एरर रेज़ोल्यूशन (Error Fixes): काम करते वक्त अगर कोई पेज अटक जाए या फाइल अपलोड न हो, तो उस गड़बड़ी (Bug) को तुरंत ठीक करना।',
        'सिक्योरिटी पैच (Security Patches): हैकिंग के नए तरीकों से बचने के लिए पुराने कोड में सुधार करना।'
      ],
      example: 'लक्ष्य: यूज़र (पुलिस) को काम करने में कोई भी तकनीकी दिक्कत या रुकावट न आए।'
    },
    {
      id: 3,
      title: 'Adaptive Maintenance',
      subtitle: 'बदलाव के अनुसार ढालना',
      icon: Wrench,
      color: '#f59e0b',
      items: [
        'नया OS अपडेट (OS Upgrades): अगर कल को Windows 12 या नया Android आ जाए, तो सॉफ्टवेयर को उसमें चलने लायक बनाना।',
        'नए नियम (Rules Change): अगर सरकार कोई नया कानून (जैसे नया BNS) लाती है, तो सॉफ्टवेयर के फॉर्म्स और धाराओं को अपडेट करना।'
      ],
      example: 'लक्ष्य: समय और तकनीक के बदलने पर भी सॉफ्टवेयर का पुराना और बेकार न होना।'
    },
    {
      id: 4,
      title: 'Perfective Maintenance',
      subtitle: 'सिस्टम को बेहतर बनाना',
      icon: Target,
      color: '#10b981',
      items: [
        'परफॉरमेंस सुधार (Optimization): जो सर्च पहले 5 सेकंड लेती थी, कोड में सुधार करके उसे 1 सेकंड में पूरा करना।',
        'नए फीचर्स (New Features): पुलिस वालों के फीडबैक के आधार पर सॉफ्टवेयर में नए ऑप्शंस (जैसे- वौइस् टाइपिंग) जोड़ना।'
      ],
      example: 'लक्ष्य: हर महीने सॉफ्टवेयर को पहले से ज़्यादा तेज़, आसान और स्मार्ट बनाना।'
    },
    {
      id: 5,
      title: 'Preventive Maintenance',
      subtitle: 'भविष्य की समस्याएं रोकना',
      icon: Shield,
      color: '#8b5cf6',
      items: [
        'डेटाबेस क्लीनअप (DB Cleanup): बेकार फाइलों (Logs/Cache) को डिलीट करना ताकि स्टोरेज फुल न हो जाए।',
        'बैकअप टेस्टिंग (Backup Check): रोज़ाना चेक करना कि जो डेटा सेव हो रहा है, वह करप्ट (Corrupt) तो नहीं है।'
      ],
      example: 'लक्ष्य: भविष्य में होने वाले किसी बड़े सर्वर क्रैश या डेटा लॉस से बचना।'
    },
    {
      id: 6,
      title: 'User Support',
      subtitle: 'उपयोगकर्ता सहायता',
      icon: HeadphonesIcon,
      color: '#ec4899',
      items: [
        'हेल्पडेस्क (Helpdesk): सॉफ्टवेयर न चलने पर पुलिसकर्मियों के लिए कॉल, ईमेल या WhatsApp सपोर्ट टीम का होना।',
        'ट्रेनिंग (Training): नए पुलिसकर्मियों को सॉफ्टवेयर सिखाने के लिए वीडियो (Tutorials) और मैन्युअल (PDFs) देना।'
      ],
      example: 'लक्ष्य: किसी भी पुलिसकर्मी का काम सिर्फ इसलिए न रुके क्योंकि उसे सॉफ्टवेयर चलाना नहीं आता।'
    },
    {
      id: 7,
      title: 'Database & Security',
      subtitle: 'डेटा और सुरक्षा प्रबंधन',
      icon: Database,
      color: '#14b8a6',
      items: [
        'डेटा आर्काइव (Archiving): 20 साल पुराने बंद हो चुके केस रिकॉर्ड्स को मुख्य सर्वर से हटाकर सुरक्षित (Cold Storage) में रखना ताकि स्पीड बनी रहे।',
        'एक्सेस रिव्यु (Access Review): हर 6 महीने में चेक करना कि किन अधिकारियों के पास लॉगिन पासवर्ड हैं और जो रिटायर हो गए उनका एक्सेस हटाना।'
      ],
      example: 'लक्ष्य: सालों-साल डेटा बढ़ने के बाद भी सॉफ्टवेयर की रफ़्तार और सुरक्षा कम न होना।'
    },
    {
      id: 8,
      title: 'Performance & Documents',
      subtitle: 'रफ़्तार और दस्तावेज़',
      icon: FileText,
      color: '#f97316',
      items: [
        'रिपोर्टिंग (Reporting): सॉफ्टवेयर की स्पीड और परफॉरमेंस की मंथली रिपोर्ट (Health Card) क्लाइंट (SP/DGP) को सौंपना।',
        'दस्तावेज़ अपडेट (Docs Update): जब भी सॉफ्टवेयर में कोई नया बटन जुड़े, तो यूज़र मैन्युअल (User Manual) की किताब को अपडेट करना।'
      ],
      example: 'लक्ष्य: कागज़ों पर हमेशा हिसाब रहे कि सॉफ्टवेयर कैसा चल रहा है और उसमें क्या बदलाव हुए हैं।'
    },
    {
      id: 9,
      title: 'Disaster Recovery & KPIs',
      subtitle: 'बैकअप और रिपोर्टिंग',
      icon: CloudLightning,
      color: '#6366f1',
      items: [
        'आपदा प्रबंधन (Disaster Recovery): अगर मुख्य सर्वर रूम में आग लग जाए, तो दूसरे शहर के सर्वर से सॉफ्टवेयर को तुरंत चालू (Failover) करना।',
        'SLA मॉनिटरिंग (SLA KPIs): यह सुनिश्चित करना कि अगर कोई गड़बड़ी आए, तो उसे तय समय (जैसे- 2 घंटे) के अंदर ही ठीक कर दिया जाए।'
      ],
      example: 'लक्ष्य: बाढ़, आग या साइबर हमले जैसी इमरजेंसी में भी पुलिस का डिजिटल काम न रुके।'
    }
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

  if (selectedDetail !== null) {
    const detailItem = reqData.find(item => item.id === selectedDetail);
    if (!detailItem) return null;
    const DetailIcon = detailItem.icon;
    
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setSelectedDetail(null)} className="back-button" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Phase 7
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
