import React, { useState } from 'react';
import { 
  ArrowLeft, RefreshCw, GitBranch, Terminal, Server, Rocket, Activity, CheckCircle, Shield, Target, Info
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function CICDPipeline({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const reqData = [
    {
      id: 1,
      title: 'Source Code & Version Control',
      subtitle: 'Git / GitHub / GitLab',
      icon: GitBranch,
      color: '#3b82f6',
      items: [
        'सेंट्रल रिपॉजिटरी (Central Repo): डेवलपर्स अपना कोड लिखकर एक सेंट्रल रिपॉजिटरी (जैसे GitHub) में सेव करते हैं।',
        'ट्रैकिंग (History Tracking): इससे यह ट्रैक रहता है कि किसने, कब, और क्या कोड बदला है (Version Control)।',
        'पहला कदम (First Step): यह पाइपलाइन का सबसे पहला स्टेप है जहाँ से कोड का सफर शुरू होता है।'
      ],
      example: 'लक्ष्य: अगर कोई कोड गलती से डिलीट हो जाए, तो उसे तुरंत वापस लाया जा सके (Rollback)।',
      deepDive: [
        {
          heading: 'ब्रांचिंग स्ट्रेटेजी (Branching Strategy)',
          content: 'मेन (Main) ब्रांच में हमेशा स्टेबल कोड रहता है। हर नए फीचर के लिए एक अलग फीचर (Feature) ब्रांच बनाई जाती है।'
        },
        {
          heading: 'पुल रिक्वेस्ट (Pull Request - PR)',
          content: 'जब कोई डेवलपर अपना कोड मेन ब्रांच में मिलाना चाहता है, तो वह PR बनाता है ताकि सीनियर डेवलपर्स उस कोड को रिव्यु कर सकें।'
        }
      ]
    },
    {
      id: 2,
      title: 'Continuous Integration (CI)',
      subtitle: 'Build & Merge',
      icon: RefreshCw,
      color: '#10b981',
      items: [
        'ऑटो-बिल्ड (Auto Build): जब भी कोई नया कोड सर्वर पर आता है, तो एक ऑटोमैटिक प्रोसेस (Build) शुरू होता है।',
        'मर्जिंग (Merging): यह चेक करता है कि नया कोड पुराने कोड के साथ सही से मिल (Merge) रहा है या नहीं, या कोई एरर (Conflict) तो नहीं है।',
        'टूल्स (Tools): इस काम के लिए मुख्य रूप से Jenkins, GitHub Actions या GitLab CI का उपयोग होता है।'
      ],
      example: 'लक्ष्य: यह सुनिश्चित करना कि 10 अलग-अलग डेवलपर्स का कोड एक साथ जुड़कर सही से कम्पाइल (Compile) हो रहा है।',
      deepDive: [
        {
          heading: 'बिल्ड स्क्रिप्ट्स (Build Scripts)',
          content: 'सॉफ्टवेयर को पैकेज करने के लिए Maven (Java) या Webpack (React) का उपयोग किया जाता है, जो सारे कोड को एक रन होने वाली फाइल में बदल देता है।'
        },
        {
          heading: 'फास्ट फीडबैक (Fast Feedback)',
          content: 'अगर डेवलपर का कोड बिल्ड में फेल हो जाता है, तो उसे 2 मिनट के अंदर एरर का ईमेल आ जाता है ताकि वह तुरंत सुधार सके।'
        }
      ]
    },
    {
      id: 3,
      title: 'Automated Testing',
      subtitle: 'Code Validation',
      icon: CheckCircle,
      color: '#f59e0b',
      items: [
        'ऑटो-टेस्टिंग (Auto Testing): बिल्ड पास होने के तुरंत बाद, सिस्टम अपने आप सारे यूनिट और इंटीग्रेशन टेस्ट चलाना शुरू कर देता है।',
        'रिग्रेशन चेक (Regression): यह सुनिश्चित करता है कि नए कोड से पुराने चल रहे फीचर्स ख़राब नहीं हुए हैं।',
        'अलर्ट (Alerts): अगर कोई भी एक टेस्ट फेल होता है, तो पाइपलाइन वहीं रुक (Fail) जाती है और कोड आगे नहीं बढ़ता।'
      ],
      example: 'लक्ष्य: कोई भी गड़बड़ (Buggy) कोड गलती से भी लाइव सर्वर तक न पहुँच पाए।',
      deepDive: [
        {
          heading: 'कोड कवरेज (Code Coverage)',
          content: 'Sonarqube जैसे टूल्स चेक करते हैं कि सॉफ्टवेयर के कितने प्रतिशत कोड को टेस्ट किया गया है (जैसे कम से कम 80% कोड टेस्टेड होना चाहिए)।'
        },
        {
          heading: 'सिक्योरिटी स्कैन (SAST)',
          content: 'इसी दौरान कोड को स्कैन किया जाता है कि कहीं उसमें कोई पासवर्ड प्लेन-टेक्स्ट (Plain text) में तो नहीं लिखा है।'
        }
      ]
    },
    {
      id: 4,
      title: 'Continuous Delivery (CD)',
      subtitle: 'Ready for Release',
      icon: Shield,
      color: '#ec4899',
      items: [
        'रिलीज़ रेडी (Release Ready): टेस्टिंग पास होने के बाद, कोड पूरी तरह से लाइव होने के लिए तैयार हो जाता है।',
        'स्टेजिंग (Staging Env): इसे एक टेस्टिंग सर्वर (Staging) पर डिप्लॉय किया जाता है जो बिलकुल असली सर्वर जैसा होता है।',
        'मैनुअल अप्रूवल (Approval): यहाँ क्लाइंट या मैनेजर मैनुअल टेस्टिंग करता है और "OK" बटन दबाकर अप्रूवल देता है।'
      ],
      example: 'लक्ष्य: कोड को 100% तैयार रखना कि बटन दबाते ही वह असली यूज़र्स के सामने लाइव हो जाए।',
      deepDive: [
        {
          heading: 'आर्टिफैक्ट रिपॉजिटरी (Artifact Repo)',
          content: 'पास हुए कोड के पैकेज (जैसे Docker Image) को Docker Hub या Nexus में स्टोर किया जाता है ताकि उसे कभी भी सर्वर पर डाला जा सके।'
        },
        {
          heading: 'एन्वायरनमेंट पैरिटी (Environment Parity)',
          content: 'यह सुनिश्चित किया जाता है कि स्टेजिंग सर्वर और असली सर्वर (Production) की सेटिंग्स बिल्कुल एक जैसी हों।'
        }
      ]
    },
    {
      id: 5,
      title: 'Continuous Deployment (CD)',
      subtitle: 'Auto-Live to Production',
      icon: Rocket,
      color: '#8b5cf6',
      items: [
        'ऑटो-लाइव (Auto-Live): बिना किसी इंसान की दखल या अप्रूवल के, पास हुए कोड को सीधा असली सर्वर (Production) पर लाइव कर दिया जाता है।',
        'हाई रिस्क-हाई रिवॉर्ड (Risk vs Speed): इसमें रिस्क थोड़ा ज़्यादा होता है, लेकिन डिलीवरी बहुत तेज़ (दिन में कई बार) होती है।',
        'दिग्गज कंपनियाँ (Tech Giants): Netflix, Facebook और Amazon जैसी कंपनियाँ इसी का इस्तेमाल करती हैं।'
      ],
      example: 'लक्ष्य: डेवलपर के कोड सेव (Commit) करने के 15 मिनट बाद ही वह कोड दुनिया भर के यूज़र्स के लिए लाइव हो जाए।',
      deepDive: [
        {
          heading: 'ब्लू-ग्रीन डिप्लॉयमेंट (Blue-Green)',
          content: 'दो सर्वर होते हैं। नए कोड को ग्रीन सर्वर पर डाला जाता है। सब सही चलने पर असली ट्रैफिक को ब्लू (पुराने) से ग्रीन (नए) पर ट्रांसफर कर दिया जाता है।'
        },
        {
          heading: 'कैनरी रिलीज़ (Canary Release)',
          content: 'नया फीचर सिर्फ 5% यूज़र्स को दिखाया जाता है। अगर वह क्रैश नहीं होता, तो उसे बाकी 95% यूज़र्स के लिए चालू कर दिया जाता है।'
        }
      ]
    },
    {
      id: 6,
      title: 'Monitoring & Feedback',
      subtitle: 'Post-Deployment',
      icon: Server,
      color: '#14b8a6',
      items: [
        'निगरानी (Live Monitoring): सॉफ्टवेयर लाइव होने के बाद उसकी स्पीड, एरर्स, और सर्वर लोड पर 24/7 नज़र रखी जाती है।',
        'ऑटो-रोलबैक (Auto-Rollback): अगर लाइव होने के बाद सर्वर क्रैश होने लगे, तो सिस्टम अपने आप पुराना वर्ज़न वापस (Rollback) ले आता है।',
        'फीडबैक लूप (Feedback): यहाँ से मिलने वाले डेटा को वापस डेवलपर्स के पास भेजा जाता है ताकि वे सुधार कर सकें (Tools: Datadog, Grafana)।'
      ],
      example: 'लक्ष्य: यूज़र को समस्या पता चलने से पहले ही IT टीम को अलर्ट मिल जाए।',
      deepDive: [
        {
          heading: 'लॉग एनालिसिस (Log Analysis)',
          content: 'सारे सर्वर्स के एरर लॉग्स (Logs) एक जगह (ELK Stack) पर जमा होते हैं ताकि समस्या को तुरंत ढूँढा जा सके।'
        },
        {
          heading: 'इंसिडेंट रिस्पांस (Incident Response)',
          content: 'अगर सर्वर की मेमोरी 90% भर जाती है, तो PagerDuty जैसे टूल अपने आप रात को भी इंजीनियर को फ़ोन कॉल कर देते हैं।'
        }
      ]
    }
  ];

  if (selectedDetail !== null) {
    const detailItem = reqData.find(item => item.id === selectedDetail);
    if (!detailItem) return null;
    const DetailIcon = detailItem.icon;
    
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setSelectedDetail(null)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to CI/CD Pipeline
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
        <button onClick={onBack} className="thane-back-btn">
          <ArrowLeft size={18} /> Back to SDLC
        </button>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.75rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <RefreshCw size={28} color="#10b981" />
            सीआई/सीडी पाइपलाइन (CI/CD Pipeline)
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            कोडिंग से लेकर सॉफ्टवेयर के लाइव (Live) होने तक की पूरी प्रक्रिया का ऑटोमेशन।
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
        {reqData.map(box => {
          const Icon = box.icon || CheckCircle;
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
    </div>
  );
}
