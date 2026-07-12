import React, { useState } from 'react';
import { 
  ArrowLeft, Search, TestTube, CheckSquare, ShieldAlert, Cpu, Activity, Database, Target, Smartphone, Bug, Shield, CheckCircle, Network, Users, Code, Server, Zap, HardDrive, Filter, Info
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function Phase5Requirements({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const reqData = [
    {
      id: 1,
      title: 'Functional Testing (कार्यात्मक परीक्षण)',
      subtitle: 'सिस्टम के हर फीचर की जांच',
      icon: CheckSquare,
      color: '#3b82f6',
      items: [
        'मॉड्यूल टेस्टिंग (Unit Testing): क्या लॉगिन, FIR सर्च और रिपोर्ट बनाने वाले अलग-अलग बटन सही काम कर रहे हैं?',
        'इंटीग्रेशन टेस्टिंग (Integration): क्या फ्रंटएंड (UI) से डाला गया डेटा बैकएंड (Database) में सही तरीके से सेव हो रहा है?',
        'एंड-टू-एंड (E2E Testing): पुलिसकर्मी के लॉगिन करने से लेकर केस रिपोर्ट डाउनलोड करने तक की पूरी प्रक्रिया की जांच।'
      ],
      example: 'लक्ष्य: यह पक्का करना कि सॉफ्टवेयर में मौजूद हर एक बटन और फीचर अपनी तय जिम्मेदारी सही से निभा रहा है।',
      deepDive: [
        {
          heading: 'ऑटोमेटेड टेस्टिंग (Automated Testing)',
          content: 'Selenium या Cypress जैसे टूल्स से ऑटोमैटिक टेस्ट लिखे जाएंगे जो हर बार नया कोड आने पर खुद चेक करेंगे कि कोई पुराना फीचर तो नहीं टूट गया।'
        },
        {
          heading: 'रिग्रेशन टेस्टिंग (Regression)',
          content: 'अगर हम सिस्टम में AI चैट फीचर जोड़ते हैं, तो यह चेक किया जाएगा कि कहीं उसके कारण सर्च फीचर ने काम करना तो बंद नहीं कर दिया।'
        }
      ]
    },
    {
      id: 2,
      title: 'Security & Penetration Testing',
      subtitle: 'हैकिंग से बचाव की जांच',
      icon: ShieldAlert,
      color: '#ef4444',
      items: [
        'पेनिट्रेशन टेस्टिंग (Pen-testing): एथिकल हैकर्स द्वारा सिस्टम को हैक करने की कोशिश करना ताकि कमज़ोरियां (Vulnerabilities) पकड़ी जा सकें।',
        'डेटा एन्क्रिप्शन जांच (Data Security): यह देखना कि क्या हैकर पुलिस डेटाबेस से FIR या सबूत चुरा सकता है?',
        'एक्सेस कंट्रोल जांच (RBAC Test): क्या एक कांस्टेबल चालाकी से SP के लेवल की रिपोर्ट देख सकता है?'
      ],
      example: 'लक्ष्य: लाइव होने से पहले सिस्टम को 100% हैक-प्रूफ (Hack-proof) बनाना।',
      deepDive: [
        {
          heading: 'VAPT (Vulnerability Assessment)',
          content: 'सरकारी नियमों (CERT-In) के अनुसार सर्वर, नेटवर्क और एप्लीकेशन तीनों स्तरों पर सुरक्षा की गहन जाँच की जाएगी।'
        },
        {
          heading: 'DDoS सिमुलेशन (DDoS)',
          content: 'सिस्टम पर जानबूझकर लाखों फर्जी रिक्वेस्ट भेजी जाएंगी यह देखने के लिए कि क्या सिस्टम ऐसी स्थिति में क्रैश होता है या हमलावरों को ब्लॉक करता है।'
        }
      ]
    },
    {
      id: 3,
      title: 'Performance & Load Testing',
      subtitle: 'सिस्टम की रफ़्तार और ताकत',
      icon: Activity,
      color: '#f59e0b',
      items: [
        'लोड टेस्टिंग (Load Testing): अगर 50,000 पुलिसकर्मी एक साथ लॉगिन करें, तो क्या सिस्टम की रफ़्तार (Speed) धीमी होगी?',
        'स्ट्रेस टेस्टिंग (Stress Testing): सर्वर पर इतना लोड डालना कि वह क्रैश हो जाए, ताकि उसकी अधिकतम क्षमता (Maximum limit) पता चल सके।',
        'रिस्पॉन्स टाइम (Response Time): 2G या 3G नेटवर्क पर डैशबोर्ड कितनी जल्दी खुलता है?'
      ],
      example: 'लक्ष्य: सॉफ्टवेयर को इतना मज़बूत बनाना कि इमरजेंसी या हाई-ट्रैफिक में वह कभी क्रैश न हो।',
      deepDive: [
        {
          heading: 'JMeter लोड टेस्ट (JMeter)',
          content: 'Apache JMeter टूल का उपयोग करके 1 लाख वर्चुअल यूजर्स बनाए जाएंगे जो एक साथ केस सर्च करेंगे, ताकि असली ट्रैफिक का अनुमान लग सके।'
        },
        {
          heading: 'पीक-ऑवर परफॉरमेंस (Peak-hour)',
          content: 'अक्सर सुबह के समय जब सारे पुलिसकर्मी अपनी रिपोर्ट डालते हैं, तब सर्वर पर सबसे ज्यादा लोड होता है। यह टेस्ट उस स्थिति की नक़ल करेगा।'
        }
      ]
    },
    {
      id: 4,
      title: 'AI Model Testing',
      subtitle: 'आर्टिफिशियल इंटेलिजेंस की जांच',
      icon: BrainCircuit,
      color: '#8b5cf6',
      items: [
        'एक्यूरेसी टेस्टिंग (Accuracy): क्या फेशियल रिकग्निशन (चेहरा पहचानने वाला AI) 95% से ज्यादा सटीक है?',
        'पूर्वाग्रह की जांच (Bias Testing): क्या AI किसी विशेष धर्म, जाति या इलाके के लोगों को गलत तरीके से अपराधी बता रहा है?',
        'प्रेडिक्शन टेस्टिंग (Prediction): क्या AI द्वारा बताए गए हॉटस्पॉट्स (जहां अपराध होने वाला है) असल में सही साबित हो रहे हैं?'
      ],
      example: 'लक्ष्य: AI को इतना समझदार और निष्पक्ष (Unbiased) बनाना कि वह पुलिस को सही सलाह दे सके।',
      deepDive: [
        {
          heading: 'फॉल्स पॉजिटिव टेस्ट (False Positives)',
          content: 'सिस्टम कितनी बार किसी निर्दोष नागरिक के चेहरे को अपराधी से मैच कर देता है, इसकी सख़्त जाँच होगी। यह 1% से भी कम होना चाहिए।'
        },
        {
          heading: 'रियल-वर्ल्ड डेटा टेस्टिंग (Real Data)',
          content: 'AI मॉडल को लेबोरेटरी के डेटा पर नहीं, बल्कि यूपी के असली (Masked) पुराने केसों के डेटा पर टेस्ट किया जाएगा।'
        }
      ]
    },
    {
      id: 5,
      title: 'User Acceptance Testing (UAT)',
      subtitle: 'असली पुलिसकर्मियों द्वारा जांच',
      icon: Users,
      color: '#10b981',
      items: [
        'बीटा टेस्टिंग (Beta Testing): सॉफ्टवेयर को कुछ चुनिंदा थानों (जैसे- 5 थाने) में असली केस दर्ज करने के लिए दिया जाएगा।',
        'फीडबैक (Feedback Loop): असली पुलिसकर्मी बताएंगे कि सॉफ्टवेयर चलाने में आसान है या नहीं, और क्या बदलाव चाहिए।',
        'UI/UX जांच: क्या रात के समय मोबाइल पर काम करते हुए सिपाही की आँखों पर ज़ोर पड़ रहा है?'
      ],
      example: 'लक्ष्य: जो सॉफ्टवेयर इस्तेमाल करेगा, उसी से चेक करवाना कि क्या यह उनके काम का है।',
      deepDive: [
        {
          heading: 'पायलट रन (Pilot Run)',
          content: 'कम से कम 100 पुलिसकर्मियों को 2 हफ्ते तक सॉफ्टवेयर इस्तेमाल करने दिया जाएगा और उनका अनुभव रिकॉर्ड किया जाएगा।'
        },
        {
          heading: 'UAT साइन-ऑफ़ (Sign-off)',
          content: 'जब पुलिस के आला अधिकारी और फील्ड ऑफिसर लिखित में देंगे कि सॉफ्टवेयर सही काम कर रहा है, तभी इसे पूरे राज्य में लॉन्च किया जाएगा।'
        }
      ]
    },
    {
      id: 6,
      title: 'Compatibility Testing',
      subtitle: 'हर डिवाइस और नेटवर्क पर जांच',
      icon: Smartphone,
      color: '#ec4899',
      items: [
        'क्रॉस-ब्राउज़र (Browsers): क्या सॉफ्टवेयर Chrome, Firefox और Safari पर एक जैसा दिखता है?',
        'क्रॉस-डिवाइस (Devices): क्या यह 5 साल पुराने एंड्रॉयड फोन और नए आईफोन (iPhone) पर सही से चलता है?',
        'नेटवर्क (Network): क्या यह गाँव के कमजोर इंटरनेट (Slow network) में भी बिना अटके काम करता है?'
      ],
      example: 'लक्ष्य: पुलिस का हर जवान, चाहे उसके पास कैसा भी फोन हो, सॉफ्टवेयर का इस्तेमाल कर सके।',
      deepDive: [
        {
          heading: 'लेगेसी हार्डवेयर सपोर्ट (Legacy PCs)',
          content: 'ज़्यादातर थानों में पुराने कंप्यूटर होते हैं। सिस्टम को ऐसे टेस्ट किया जाएगा कि वह 2GB RAM वाले पुराने कंप्यूटर पर भी स्मूथ चले।'
        },
        {
          heading: 'रेस्पॉन्सिव डिज़ाइन (Responsive UI)',
          content: 'टेबलेट, डेस्कटॉप और मोबाइल स्क्रीन के साइज़ को बदलकर चेक किया जाएगा कि कोई बटन या टेक्स्ट स्क्रीन से बाहर तो नहीं जा रहा।'
        }
      ]
    }
  ];

  const tools = [
    { cat: 'Automation', tool: 'Selenium, Cypress, Playwright' },
    { cat: 'Performance', tool: 'JMeter, Gatling, k6' },
    { cat: 'Security', tool: 'OWASP ZAP, Burp Suite' },
    { cat: 'API Testing', tool: 'Postman, REST Assured' },
    { cat: 'Bug Tracking', tool: 'Jira, Bugzilla' }
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
          
          <div style={{ background: 'white', padding: '2.5rem', borderRadius: '1.5rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
            <h4 style={{ fontSize: '1.25rem', color: '#1e293b', marginBottom: '1.5rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.75rem' }}>
              {detailItem.subtitle} - विस्तृत जानकारी (Overview)
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
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

            {/* Deep Dive Extra Details Section */}
            {detailItem.deepDive && detailItem.deepDive.length > 0 && (
              <div style={{ marginTop: '2.5rem' }}>
                <h4 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Info size={22} color={detailItem.color} />
                  गहराई से जानकारी (Deep Dive Details)
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                  {detailItem.deepDive.map((dive, idx) => (
                    <div key={idx} style={{ 
                      background: '#f8fafc', padding: '1.5rem', borderRadius: '1rem', 
                      border: '1px solid #e2e8f0', boxShadow: 'inset 0 2px 4px 0 rgba(0,0,0,0.02)'
                    }}>
                      <h5 style={{ margin: '0 0 0.75rem 0', fontSize: '1.1rem', color: detailItem.color, fontWeight: 'bold' }}>
                        {dive.heading}
                      </h5>
                      <p style={{ margin: 0, color: '#475569', lineHeight: '1.6', fontSize: '0.95rem' }}>
                        {dive.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {detailItem.example && (
              <div style={{ marginTop: '2.5rem', padding: '1.75rem', background: '#f0fdf4', borderRadius: '1rem', border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ background: '#dcfce7', padding: '1.25rem', borderRadius: '50%' }}><Target size={32} color="#16a34a" /></div>
                <div>
                  <h4 style={{ color: '#166534', margin: '0 0 0.25rem 0', fontSize: '1.2rem' }}>Ultimate Goal (अंतिम लक्ष्य)</h4>
                  <p style={{ margin: 0, color: '#15803d', fontSize: '1.1rem', fontStyle: 'italic', fontWeight: '500' }}>
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
            <TestTube size={28} color="#f59e0b" />
            Phase 5: Testing & Quality Assurance
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            सॉफ़्टवेयर परीक्षण - सिस्टम को लाइव (Live) करने से पहले उसमें मौजूद कमियों (Bugs) को ढूंढना और उन्हें ठीक करना।
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

      {/* Visual Diagrams: CI/CD Pipeline & Tools */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        
        {/* Testing Lifecycle Flow */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#3b82f615', padding: '0.75rem', borderRadius: '0.5rem', color: '#3b82f6' }}><Filter size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Testing Lifecycle (प्रक्रिया)</h3>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: '#f8fafc', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '22%' }}>
              <div style={{ background: '#dbeafe', color: '#1e40af', padding: '0.75rem', borderRadius: '50%' }}><Code size={20} /></div>
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold', textAlign: 'center' }}>Unit Test<br/>(डेवलपर)</span>
            </div>
            <ArrowLeft size={16} color="#94a3b8" style={{ transform: 'rotate(180deg)' }} />
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '22%' }}>
              <div style={{ background: '#fef3c7', color: '#b45309', padding: '0.75rem', borderRadius: '50%' }}><Network size={20} /></div>
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold', textAlign: 'center' }}>Integration<br/>(सिस्टम)</span>
            </div>
            <ArrowLeft size={16} color="#94a3b8" style={{ transform: 'rotate(180deg)' }} />
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '22%' }}>
              <div style={{ background: '#fce7f3', color: '#9d174d', padding: '0.75rem', borderRadius: '50%' }}><CheckSquare size={20} /></div>
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold', textAlign: 'center' }}>System Test<br/>(QA टीम)</span>
            </div>
            <ArrowLeft size={16} color="#94a3b8" style={{ transform: 'rotate(180deg)' }} />
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '22%' }}>
              <div style={{ background: '#ecfdf5', color: '#047857', padding: '0.75rem', borderRadius: '50%' }}><Users size={20} /></div>
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold', textAlign: 'center' }}>UAT<br/>(पुलिस)</span>
            </div>
          </div>
        </div>

        {/* Recommended Testing Tools */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#f59e0b15', padding: '0.75rem', borderRadius: '0.5rem', color: '#f59e0b' }}><HardDrive size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Recommended QA Tools</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {tools.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 1rem', background: '#f8fafc', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                <span style={{ color: '#64748b', fontWeight: '500', fontSize: '0.9rem' }}>{item.cat}</span>
                <span style={{ color: '#0f172a', fontWeight: 'bold', fontSize: '0.9rem' }}>{item.tool}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
