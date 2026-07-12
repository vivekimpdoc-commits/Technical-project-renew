import React, { useState } from 'react';
import { 
  ArrowLeft, Shield, Lock, Eye, CheckCircle, Search, AlertTriangle, FileText, Zap, UserCheck, Key, SearchCode, Target, Info
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function DevSecOps({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const reqData = [
    {
      id: 1,
      title: 'DevSecOps (डेवसेकऑप्स)',
      subtitle: 'Security as Code',
      icon: Shield,
      color: '#ef4444',
      items: [
        'एक साथ काम (Integration): डेवलपमेंट (Dev), सिक्योरिटी (Sec), और ऑपरेशन्स (Ops) को एक साथ मिलाना।',
        'शुरू से सुरक्षा (Shift-Left): सिक्योरिटी को आखिर में चेक करने के बजाय कोडिंग के पहले दिन से ही लागू करना।',
        'ऑटोमेशन (Automation): हर कमिट (Commit) पर ऑटोमैटिक सिक्योरिटी स्कैन चलना ताकि कोई ख़राब कोड आगे न जा पाए।',
        'जिम्मेदारी (Shared Responsibility): सुरक्षा सिर्फ सिक्योरिटी टीम का काम नहीं, बल्कि हर डेवलपर की जिम्मेदारी बन जाती है।'
      ],
      example: 'लक्ष्य: हैकर्स को सिस्टम में घुसने का मौका देने से पहले ही, कोड लिखते समय ही सारी कमियां बंद कर देना।',
      deepDive: [
        {
          heading: 'पॉलिसी ऐज़ कोड (Policy as Code)',
          content: 'सिक्योरिटी के नियमों को कोड के रूप में लिखा जाता है (जैसे OPA), ताकि कोई भी डेवलपर अनजाने में उन नियमों को तोड़ न सके।'
        },
        {
          heading: 'कंटीन्यूअस कंप्लायंस (Continuous Compliance)',
          content: 'हर वक़्त ये चेक होता रहता है कि सॉफ्टवेयर GDPR या HIPAA जैसे कानूनी सिक्योरिटी स्टैण्डर्ड का पालन कर रहा है या नहीं।'
        }
      ]
    },
    {
      id: 2,
      title: 'Vulnerability Scanning',
      subtitle: 'कमियां खोजना',
      icon: SearchCode,
      color: '#3b82f6',
      items: [
        'कमियां खोजना (Bug Hunt): कोड में उन कमियों (Vulnerabilities) को ढूँढना जिनका फायदा उठाकर हैकर घुस सकते हैं।',
        'SAST (Static Analysis): यह टूल (जैसे SonarQube) कोड को बिना चलाये, सिर्फ पढ़कर स्कैन करता है और गलतियां बताता है।',
        'DAST (Dynamic Analysis): यह लाइव ऐप पर (बाहर से) हैकर्स की तरह नकली हमले करके चेक करता है कि कोई रास्ता खुला तो नहीं है।',
        'SCA (Software Composition): यह चेक करता है कि जो बाहरी (Third-party) लाइब्रेरी हम इस्तेमाल कर रहे हैं, वो सुरक्षित हैं या नहीं।'
      ],
      example: 'लक्ष्य: अपने ही बनाये सॉफ्टवेयर पर खुद हमला करके देखना कि वह कितना मज़बूत है।',
      deepDive: [
        {
          heading: 'ज़ीरो-डे (Zero-Day Vulnerability)',
          content: 'ये वो कमियां होती हैं जिनके बारे में अभी तक किसी को नहीं पता। अच्छे स्कैनर्स पुरानी कमियों के साथ-साथ शक के आधार पर नई कमियां भी पकड़ते हैं।'
        },
        {
          heading: 'सीवीई (CVE Database)',
          content: 'स्कैनर एक ग्लोबल डेटाबेस से जुड़ा होता है जहाँ दुनिया भर के हैक्स की लिस्ट होती है, ताकि कोई भी पुरानी गलती आपके कोड में न हो।'
        }
      ]
    },
    {
      id: 3,
      title: 'IAM & Authentication',
      subtitle: 'यूज़र पहचान',
      icon: UserCheck,
      color: '#10b981',
      items: [
        'पहचान (Identity): यह पक्का करना कि जो यूज़र या कर्मचारी लॉगिन कर रहा है, वह सच में वही है या कोई और (Authentication)।',
        'टू-स्टेप वेरिफिकेशन (MFA): पासवर्ड के साथ OTP, मोबाइल अप्रूवल या फिंगरप्रिंट मांगना ताकि पासवर्ड चोरी होने पर भी अकाउंट सेफ रहे।',
        'अधिकार (RBAC): Role-Based Access Control - जिसे जितना काम है, उसे सिर्फ उतनी ही फाइलों तक पहुँच (Access) देना।',
        'सिंगल साइन-ऑन (SSO): एक ही लॉगिन से कंपनी के सारे टूल्स (Slack, Jira, Email) में सुरक्षित एंट्री देना।'
      ],
      example: 'लक्ष्य: सही इंसान को अंदर आने देना और बाकि सबको बाहर ही रोक देना।',
      deepDive: [
        {
          heading: 'ज़ीरो ट्रस्ट (Zero Trust Model)',
          content: 'इस नियम के अनुसार - "किसी पर भरोसा मत करो"। चाहे यूज़र ऑफिस के अंदर के नेटवर्क से ही क्यों न आया हो, उसकी हर बार चेकिंग होती है।'
        },
        {
          heading: 'OAuth 2.0 / JWT',
          content: 'पासवर्ड को बार-बार भेजने के बजाय, एक सिक्यूरिटी टोकन (JWT) दिया जाता है जिसकी एक एक्सपायरी डेट होती है।'
        }
      ]
    },
    {
      id: 4,
      title: 'Data Encryption',
      subtitle: 'डेटा को छिपाना',
      icon: Lock,
      color: '#f59e0b',
      items: [
        'एन्क्रिप्शन (Code Language): डेटा (जैसे पासवर्ड या क्रेडिट कार्ड) को ऐसे कोड में बदलना जिसे हैकर पढ़ न सके।',
        'सफर में सुरक्षा (In Transit): जब डेटा मोबाइल से सर्वर तक इंटरनेट पर जा रहा हो (HTTPS/SSL/TLS का उपयोग)।',
        'स्टोरेज में सुरक्षा (At Rest): जब डेटा सर्वर की हार्ड-डिस्क या डेटाबेस में सेव हो, तब भी उसे लॉक (AES-256 Encryption) रखना।',
        'कुंजी (Keys): डेटा को वापस असली रूप में लाने के लिए एक मास्टर-चाबी (Decryption Key) की ज़रूरत होती है।'
      ],
      example: 'लक्ष्य: अगर हैकर डेटाबेस की पूरी हार्ड-डिस्क भी चुरा ले जाए, तो भी वह डेटा को पढ़ न सके।',
      deepDive: [
        {
          heading: 'असिमेट्रिक एन्क्रिप्शन (Asymmetric)',
          content: 'इसमें दो चाबियां होती हैं - पब्लिक (डेटा लॉक करने के लिए) और प्राइवेट (डेटा खोलने के लिए)।'
        },
        {
          heading: 'सॉल्टिंग (Salting Passwords)',
          content: 'यूज़र के पासवर्ड में कुछ रैंडम अक्षर (Salt) मिलाकर फिर उसे एन्क्रिप्ट किया जाता है ताकि कोई हैकर अंदाज़ा भी न लगा सके।'
        }
      ]
    },
    {
      id: 5,
      title: 'Secret Management',
      subtitle: 'पासवर्ड सुरक्षा',
      icon: Key,
      color: '#ec4899',
      items: [
        'हार्डकोडिंग से बचाव (No Hardcoding): API Keys, Database Passwords, और Tokens को कभी भी डायरेक्ट कोड (Source Code) में नहीं लिखना चाहिए।',
        'सिक्योर वॉल्ट (Vaults): इन्हें सुरक्षित तिजोरी (Vault) जैसे HashiCorp Vault या AWS Secrets Manager में रखना चाहिए।',
        'कोड लीक (Code Leak Safe): इससे अगर कोड गलती से GitHub पर लीक भी हो जाए, तो पासवर्ड सुरक्षित रहते हैं।',
        'ऑटो-रोटेशन (Auto-Rotation): ये टूल्स हर कुछ दिनों में पासवर्ड अपने-आप बदल देते हैं ताकि पुराना पासवर्ड काम न करे।'
      ],
      example: 'लक्ष्य: घर की चाबी को दरवाज़े पर लटकाने के बजाय, उसे बैंक के लॉकर में सुरक्षित रखना।',
      deepDive: [
        {
          heading: 'टेम्परेरी क्रेडेंशियल्स (Temporary Access)',
          content: 'डेवलपर को परमानेंट पासवर्ड देने के बजाय, उसे ऐसा टोकन दिया जाता है जो सिर्फ 1 घंटे के लिए वैलिड होता है।'
        },
        {
          heading: 'एनवायर्नमेंट वेरिएबल्स (Env Vars)',
          content: 'कोड सर्वर पर चलते समय ये पासवर्ड्स सिस्टम की मेमोरी (.env) से छुपकर उठाये जाते हैं, कोड फाइल्स से नहीं।'
        }
      ]
    },
    {
      id: 6,
      title: 'Incident Response',
      subtitle: 'हमले के समय बचाव',
      icon: AlertTriangle,
      color: '#8b5cf6',
      items: [
        'पूर्व प्लानिंग (Pre-planning): अगर कोई सिस्टम हैक हो जाए, तो पहले 5 मिनट में क्या करना है, इसकी प्लानिंग होना।',
        'बचाव (Containment): सबसे पहले हैक हुए सर्वर को इंटरनेट से काटना (Block) ताकि वायरस आगे न फैले।',
        'रिकवरी (Recovery): क्लीन बैकअप (Backup) से डेटा वापस लाना और सिस्टम को दोबारा सुरक्षित तरीके से लाइव करना।',
        'सुधार (Post-Mortem): भविष्य में उस तरीके से दोबारा हैक न हो, इसके लिए पैच (Patch) बनाना और रिपोर्ट तैयार करना।'
      ],
      example: 'लक्ष्य: साइबर हमले के दौरान बिना घबराए तेज़ी से एक्शन लेना और नुकसान को कम से कम करना।',
      deepDive: [
        {
          heading: 'वॉर रूम (War Room)',
          content: 'हमले के समय सभी सीनियर इंजीनियर्स तुरंत एक "वॉर रूम" (चैट या मीटिंग) में जुड़ते हैं और मिल कर हैकर को बाहर निकालते हैं।'
        },
        {
          heading: 'डिजिटल फोरेंसिक (Digital Forensics)',
          content: 'हमले के बाद हैकर के डिजिटल पैरों के निशान (Logs, IPs) की जाँच की जाती है ताकि पता चले कि वह अंदर कैसे घुसा था।'
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
        <button onClick={() => setSelectedDetail(null)} className="back-button" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Cyber Security (DevSecOps)
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
        <button 
          onClick={onBack} 
          style={{ 
            display: 'flex', alignItems: 'center', gap: '0.5rem', 
            padding: '0.75rem 1.5rem', background: 'white', 
            borderRadius: '0.75rem', border: '1px solid #e2e8f0',
            color: '#0f172a', fontWeight: 'bold', cursor: 'pointer',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#ef4444'; e.currentTarget.style.color = '#dc2626'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; }}
        >
          <ArrowLeft size={18} /> Back to Advanced SDLC
        </button>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.75rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Shield size={28} color="#ef4444" />
            साइबर सिक्योरिटी (DevSecOps)
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            सॉफ्टवेयर बनाते समय ही सुरक्षा (Security) को शामिल करने के तरीके।
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
        {reqData.map(box => {
          const Icon = box.icon || Shield;
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
