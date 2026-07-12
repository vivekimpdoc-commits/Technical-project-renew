import React, { useState } from 'react';
import { 
  ArrowLeft, Wrench, LifeBuoy, Clock, DatabaseBackup, ShieldAlert, Cpu, Activity, Server, CheckCircle, HeadphonesIcon, RotateCcw, Target, Info
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function Phase7Requirements({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const reqData = [
    {
      id: 1,
      title: '24/7 Technical Support',
      subtitle: 'निरंतर तकनीकी सहायता',
      icon: HeadphonesIcon,
      color: '#3b82f6',
      items: [
        'हेल्पडेस्क (Helpdesk): सॉफ्टवेयर में कोई दिक्कत आने पर पुलिसकर्मियों के लिए 24x7 कॉल और चैट सपोर्ट।',
        'टिकटिंग सिस्टम (Ticketing): अगर कोई फीचर काम नहीं कर रहा है, तो पुलिसकर्मी एक ऑनलाइन शिकायत (Ticket) दर्ज़ कर सकेंगे, जिसे IT टीम तुरंत हल करेगी।',
        'SLA मॉनिटरिंग (SLA): क्रिटिकल (गंभीर) समस्याओं को 1 घंटे के अंदर और सामान्य समस्याओं को 24 घंटे के अंदर हल करना।'
      ],
      example: 'लक्ष्य: सुनिश्चित करना कि कोई भी पुलिस स्टेशन सॉफ्टवेयर की खराबी के कारण काम न रोके।',
      deepDive: [
        {
          heading: 'L1/L2/L3 सपोर्ट',
          content: 'सपोर्ट को तीन लेवल्स में बांटा जाएगा। छोटी समस्याओं (जैसे पासवर्ड रिसेट) को L1 टीम कॉल पर हल करेगी, जबकि कोड से जुड़ी बड़ी समस्याएँ L3 (डेवलपर्स) के पास जाएंगी।'
        },
        {
          heading: 'रिमोट असिस्टेंस (Remote Desk)',
          content: 'जरुरत पड़ने पर IT सपोर्ट टीम रिमोटली (TeamViewer/AnyDesk की तरह सुरक्षित इन-बिल्ट टूल से) कांस्टेबल के कंप्यूटर से जुड़कर समस्या हल कर सकेगी।'
        }
      ]
    },
    {
      id: 2,
      title: 'Routine Maintenance',
      subtitle: 'नियमित रखरखाव',
      icon: Wrench,
      color: '#10b981',
      items: [
        'सॉफ्टवेयर अपडेट्स (Updates): हर महीने सॉफ्टवेयर में नए फीचर्स जोड़ना और पुरानी कमियों (Bugs) को दूर करना।',
        'सर्वर मेंटेनेंस (Server Upkeep): सर्वर की हार्ड डिस्क, रैम और CPU को समय-समय पर चेक करना और साफ़ करना।',
        'सिक्योरिटी पैच (Security Patches): नए तरह के वायरसों और हैकिंग से बचने के लिए एंटी-वायरस और सर्वर को हर हफ्ते अपडेट करना।'
      ],
      example: 'लक्ष्य: सॉफ्टवेयर को बिल्कुल नई गाड़ी की तरह सर्विस करके तेज़ और सुरक्षित रखना।',
      deepDive: [
        {
          heading: 'शेड्यूल्ड डाउनटाइम (Planned Maintenance)',
          content: 'अगर सर्वर में कोई बड़ा अपडेट करना है, तो वह रात 2 बजे से 4 बजे के बीच किया जाएगा, जब पुलिस का ट्रैफ़िक सबसे कम होता है।'
        },
        {
          heading: 'हेल्थ चेक्स (Automated Health Checks)',
          content: 'सिस्टम हर 5 मिनट में खुद का टेस्ट करेगा कि क्या डेटाबेस और API सही से चल रहे हैं? गड़बड़ी मिलने पर एडमिन को SMS चला जाएगा।'
        }
      ]
    },
    {
      id: 3,
      title: 'Data Backup & Recovery',
      subtitle: 'डेटा की सुरक्षा और वापसी',
      icon: DatabaseBackup,
      color: '#f59e0b',
      items: [
        'ऑटोमैटिक बैकअप (Auto Backup): हर 12 घंटे में पूरे राज्य के पुलिस डेटाबेस की एक कॉपी बनाकर सुरक्षित क्लाउड पर सेव करना।',
        'डिजास्टर रिकवरी (Disaster Recovery): अगर मुख्य सर्वर क्रैश हो जाए या बाढ़ में डूब जाए, तो 15 मिनट के अंदर बैकअप सर्वर से पूरा सिस्टम वापस चालू करना।',
        'आर्काइविंग (Data Archiving): 10 साल से पुराने और बंद हो चुके केसों के डेटा को मुख्य सर्वर से हटाकर एक सस्ते, सुरक्षित सर्वर पर (Cold Storage) में डालना ताकि मुख्य सर्वर तेज़ रहे।'
      ],
      example: 'लक्ष्य: पुलिस की एक भी FIR या डिजिटल सबूत कभी हमेशा के लिए डिलीट न हो पाए।',
      deepDive: [
        {
          heading: 'RTO और RPO',
          content: 'सिस्टम का Recovery Time Objective (RTO) 15 मिनट होगा, यानी सिस्टम फेल होने पर अधिकतम 15 मिनट में वापस चलेगा। Recovery Point Objective (RPO) 1 घंटे का होगा, यानी अधिकतम 1 घंटे का ही डेटा लॉस बर्दाश्त किया जा सकता है।'
        },
        {
          heading: 'टेप बैकअप / कोल्ड स्टोरेज (AWS Glacier)',
          content: 'बहुत पुराने डेटा (जैसे 15 साल पुराने क्लोज्ड केस) को AWS Glacier जैसे कोल्ड स्टोरेज में रखा जाएगा, जिसे निकालने में समय लगता है पर खर्च 90% कम होता है।'
        }
      ]
    },
    {
      id: 4,
      title: 'Performance Monitoring',
      subtitle: 'सिस्टम की निगरानी',
      icon: Activity,
      color: '#ec4899',
      items: [
        'लाइव मॉनिटरिंग (Live Tracking): IT कंट्रोल रूम में एक बड़ा डैशबोर्ड होगा जहाँ सर्वर की स्पीड, लोड और हेल्थ पर 24 घंटे नज़र रखी जाएगी।',
        'यूज़र एनालिटिक्स (User Analytics): यह ट्रैक करना कि कौन से थाने सॉफ्टवेयर का सबसे ज्यादा उपयोग कर रहे हैं और किन फीचर्स का बिल्कुल इस्तेमाल नहीं हो रहा है।',
        'लॉग मैनेजमेंट (Log Checks): सर्वर में आने वाले एरर्स (Errors) की लिस्ट रोज़ चेक करना और यूज़र के शिकायत करने से पहले उसे ठीक कर देना।'
      ],
      example: 'लक्ष्य: समस्या के बड़ी होने से पहले ही उसे पकड़ लेना और ठीक कर देना।',
      deepDive: [
        {
          heading: 'APM (Application Performance Monitoring)',
          content: 'New Relic या Datadog जैसे टूल्स का उपयोग करके यह देखा जाएगा कि कौन सा API या पेज लोड होने में 2 सेकंड से ज्यादा का समय ले रहा है।'
        },
        {
          heading: 'अलर्टिंग सिस्टम (PagerDuty)',
          content: 'अगर सर्वर की CPU 90% से ऊपर जाती है, तो रात के 3 बजे भी IT इंजीनियर के फ़ोन पर अलार्म (Automated Call) बजेगा।'
        }
      ]
    },
    {
      id: 5,
      title: 'AI Model Re-training',
      subtitle: 'AI को और समझदार बनाना',
      icon: RotateCcw,
      color: '#8b5cf6',
      items: [
        'डेटा फीडिंग (New Data): हर महीने दर्ज होने वाले नए अपराधों का डेटा AI को पढ़ाना (Train करना) ताकि वह नए क्राइम पैटर्न्स समझ सके।',
        'एक्यूरेसी चेक (Accuracy Audit): हर 3 महीने में चेक करना कि AI जो भविष्यवाणी (Prediction) कर रहा है, वो कितनी सच साबित हो रही है।',
        'एल्गोरिदम अपडेट (Algorithm Update): अगर AI कोई गलती कर रहा है (जैसे गलत चेहरा पहचानना), तो उसके कोड (Model) को सुधारकर नया वर्ज़न अपलोड करना।'
      ],
      example: 'लक्ष्य: AI को समय के साथ-साथ पुलिस से भी एक कदम आगे (Smart) रखना।',
      deepDive: [
        {
          heading: 'मॉडल ड्रिफ्ट (Model Drift Detection)',
          content: 'समय के साथ अपराधियों के तरीके बदलते हैं, जिससे पुराना AI मॉडल फेल होने लगता है (Model Drift)। इसे डिटेक्ट करके AI को नए पैटर्न पर री-ट्रेन किया जाएगा।'
        },
        {
          heading: 'कंटीन्यूअस लर्निंग (Continuous Learning)',
          content: 'सिस्टम में एक फीडबैक लूप होगा। अगर AI कहता है "यह इलाका खतरनाक है" और पुलिस वहां गश्त बढ़ाकर क्राइम रोक लेती है, तो AI इस फीडबैक से सीखेगा।'
        }
      ]
    },
    {
      id: 6,
      title: 'Security Audits & Compliance',
      subtitle: 'सुरक्षा जांच और नियम',
      icon: ShieldAlert,
      color: '#14b8a6',
      items: [
        'एनुअल सिक्योरिटी ऑडिट (Annual Audit): हर साल CERT-In (सरकार की साइबर सुरक्षा एजेंसी) से पूरे सॉफ्टवेयर की चेकिंग करवाना।',
        'पेनिट्रेशन टेस्टिंग (Pen-testing): हर 6 महीने में हैकर्स की टीम (Ethical Hackers) को बुलाकर सिस्टम हैक करने की कोशिश करवाना ताकि कमियां पता चलें।',
        'लीगल कंप्लायंस (Legal Check): यह पक्का करना कि सॉफ्टवेयर भारत के IT एक्ट (IT Act 2000) और डेटा प्राइवेसी कानूनों का पालन कर रहा है।'
      ],
      example: 'लक्ष्य: सॉफ्टवेयर को कानूनी और तकनीकी रूप से 100% सुरक्षित और मान्य (Certified) रखना।',
      deepDive: [
        {
          heading: 'रेगुलर वल्नेराबिलिटी स्कैन (VA Scans)',
          content: 'हर वीकेंड पर एक आटोमेटिक टूल (जैसे Nessus) सर्वर के सभी पोर्ट्स और कोड को स्कैन करेगा कि कहीं इंटरनेट पर मौजूद कोई नया वायरस (Zero-day) तो नहीं घुस सकता।'
        },
        {
          heading: 'डेटा रिटेंशन पालिसी (Retention Policy)',
          content: 'सुप्रीम कोर्ट की गाइडलाइन्स के अनुसार तय किया जाएगा कि कौन सा पुलिस डेटा कितने सालों तक सर्वर पर रखना अनिवार्य है और किसे सुरक्षित रूप से मिटाया जा सकता है।'
        }
      ]
    }
  ];

  const tools = [
    { cat: 'Helpdesk & Ticketing', tool: 'Jira Service Desk, ServiceNow' },
    { cat: 'Monitoring & APM', tool: 'Datadog, New Relic, Dynatrace' },
    { cat: 'Log Management', tool: 'Splunk, ELK Stack (Elasticsearch)' },
    { cat: 'Backup & Recovery', tool: 'AWS Backup, Veeam, Acronis' },
    { cat: 'Security Scanning', tool: 'Nessus, Qualys' }
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
            <LifeBuoy size={28} color="#ec4899" />
            Phase 7: Maintenance & Support
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            रखरखाव और तकनीकी सहायता - लॉन्च के बाद सिस्टम को सुचारू रूप से चलाना और पुलिस को लगातार सपोर्ट देना।
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

      {/* Visual Diagrams: Monitoring Flow & Tools */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        
        {/* Support Workflow */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#3b82f615', padding: '0.75rem', borderRadius: '0.5rem', color: '#3b82f6' }}><Activity size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Support & Incident Workflow</h3>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', width: '100%' }}>
              <div style={{ flex: 1, textAlign: 'center', background: '#f8fafc', color: '#334155', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}>User Reports Issue</div>
              <div style={{ flex: 1, textAlign: 'center', background: '#f8fafc', color: '#334155', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}>System Auto-Alert</div>
            </div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#fef2f2', color: '#b91c1c', padding: '0.75rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px dashed #fca5a5' }}>L1 Helpdesk (Ticket Created)</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#eff6ff', color: '#1d4ed8', padding: '0.75rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #bfdbfe' }}>L2 IT Support (Diagnosis)</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#f0fdf4', color: '#15803d', padding: '0.75rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #bbf7d0' }}>L3 Developers (Code Fix)</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#fffbeb', color: '#b45309', padding: '0.75rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #fde68a' }}>Resolved & Update Deployed</div>
          </div>
        </div>

        {/* Recommended Operations Tools */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#10b98115', padding: '0.75rem', borderRadius: '0.5rem', color: '#10b981' }}><Server size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Recommended Ops Tools</h3>
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
