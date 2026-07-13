import React, { useState } from 'react';
import { 
  ArrowLeft, Cloud, Server, Database, Shield, Lock, Network, Maximize, Activity, Globe, Zap, Target, Info
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function CloudComputing({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const reqData = [
    {
      id: 1,
      title: 'IaaS (Infrastructure as a Service)',
      subtitle: 'सर्वर और स्टोरेज',
      icon: Server,
      color: '#3b82f6',
      items: [
        'किराये के सर्वर (Rented Servers): आपको खुद का फिजिकल सर्वर खरीदने या मेंटेन करने की ज़रूरत नहीं है।',
        'प्रोवाइडर्स (Providers): Amazon Web Services (AWS) या Google Cloud से किराये पर सर्वर ले सकते हैं।',
        'पूरा कण्ट्रोल (Full Control): इसमें आपको ऑपरेटिंग सिस्टम से लेकर नेटवर्क तक का पूरा कंट्रोल मिलता है।',
        'पे-ऐज़-यू-गो (Pay-as-you-go): आप जितने घंटे सर्वर चलाएंगे, सिर्फ उतने का ही बिल आएगा।'
      ],
      example: 'लक्ष्य: लाखों रुपये का हार्डवेयर खरीदे बिना, मिनटों में अपना खुद का वर्चुअल डेटा सेंटर (Data Center) बनाना।',
      deepDive: [
        {
          heading: 'वर्चुअल मशीन (VMs / EC2)',
          content: 'इसमें आपको असली सर्वर का एक हिस्सा दे दिया जाता है। आप उसमें Linux या Windows इनस्टॉल करके अपना मनचाहा काम कर सकते हैं।'
        },
        {
          heading: 'स्टोरेज (S3 / Blob)',
          content: 'इसमें हार्ड डिस्क की कोई लिमिट नहीं होती। आप करोड़ों इमेजेस और फाइल्स बिना सर्वर फुल होने की चिंता के सेव कर सकते हैं।'
        }
      ]
    },
    {
      id: 2,
      title: 'PaaS (Platform as a Service)',
      subtitle: 'डेवलपमेंट प्लेटफार्म',
      icon: Database,
      color: '#10b981',
      items: [
        'नो सर्वर टेंशन (No Server Setup): इसमें सर्वर, ऑपरेटिंग सिस्टम और नेटवर्क को मैनेज करने की कोई टेंशन नहीं होती।',
        'सिर्फ कोडिंग (Focus on Code): डेवलपर्स सीधा अपना कोड (Code) डालते हैं और एप्लीकेशन चलने लगती है।',
        'उदाहरण (Examples): Heroku, AWS Elastic Beanstalk, Google App Engine',
        'फायदा (Pros): इससे डेवलपमेंट बहुत तेज़ हो जाता है क्योंकि IT टीम की ज़रूरत नहीं पड़ती।'
      ],
      example: 'लक्ष्य: डेवलपर को सर्वर इंजीनियर न बनना पड़े, वह सिर्फ कोड लिखे और ऐप लाइव हो जाए।',
      deepDive: [
        {
          heading: 'बिल्ट-इन डेटाबेस (Managed DBs)',
          content: 'इसमें डेटाबेस (जैसे MySQL) का बैकअप या पैचिंग आपको नहीं करनी पड़ती, प्रोवाइडर खुद सब कुछ आटोमेटिक करता है।'
        },
        {
          heading: 'आसान डिप्लॉयमेंट (Easy Deploy)',
          content: 'बस GitHub से अपना कोड लिंक करें, और जैसे ही आप नया कोड सेव करेंगे, प्लेटफॉर्म खुद उसे लाइव कर देगा।'
        }
      ]
    },
    {
      id: 3,
      title: 'SaaS (Software as a Service)',
      subtitle: 'रेडीमेड सॉफ्टवेयर',
      icon: Globe,
      color: '#f59e0b',
      items: [
        'ब्राउज़र एक्सेस (Browser Only): आपको कंप्यूटर में कोई सॉफ्टवेयर इंस्टॉल करने की ज़रूरत नहीं होती।',
        'इंटरनेट आधारित (Cloud Hosted): सब कुछ इंटरनेट (ब्राउज़र) के ज़रिए चलता है और डेटा क्लाउड पर सेव होता है।',
        'उदाहरण (Examples): Gmail, Google Docs, Canva, Zoom',
        'सब्सक्रिप्शन (Subscription): इसे एक बार खरीदने की बजाय हर महीने किराए (Subscription) पर इस्तेमाल किया जाता है।'
      ],
      example: 'लक्ष्य: बिना किसी इंस्टालेशन या हार्डवेयर रिक्वायरमेंट के, सीधा सॉफ्टवेयर इस्तेमाल करना।',
      deepDive: [
        {
          heading: 'मल्टी-टेनेंट (Multi-Tenant Architecture)',
          content: 'एक ही सॉफ्टवेयर कोड को दुनिया के लाखों यूज़र्स एक साथ इस्तेमाल करते हैं, पर किसी का डेटा आपस में मिक्स नहीं होता।'
        },
        {
          heading: 'ऑटो-अपडेट (Auto Updates)',
          content: 'अगर सॉफ्टवेयर में कोई नया फीचर जुड़ता है, तो आपको अपडेट करने की ज़रूरत नहीं, अगली बार लॉगिन करते ही वह आपको मिल जाएगा।'
        }
      ]
    },
    {
      id: 4,
      title: 'Cloud Security',
      subtitle: 'डेटा सुरक्षा',
      icon: Shield,
      color: '#ec4899',
      items: [
        'सुरक्षा (Protection): क्लाउड पर रखे संवेदनशील डेटा को हैकर्स और लीक्स से बचाना।',
        'एन्क्रिप्शन (Encryption): डेटा को End-to-End Encryption से सुरक्षित करना ताकि कोई उसे बीच में पढ़ न सके।',
        'एक्सेस कंट्रोल (IAM): Identity Access Management के ज़रिये तय करना कि कौन सा व्यक्ति कौन सा डेटा देख सकता है।',
        'बैकअप (Backup): डेटा को अलग-अलग लोकेशंस पर सुरक्षित (Backup) रखना।'
      ],
      example: 'लक्ष्य: यह सुनिश्चित करना कि पुलिस या बैंक का डेटा क्लाउड पर 100% सुरक्षित रहे।',
      deepDive: [
        {
          heading: 'वर्चुअल प्राइवेट क्लाउड (VPC)',
          content: 'क्लाउड के अंदर एक प्राइवेट नेटवर्क बनाया जाता है जहाँ बाहरी इंटरनेट से कोई भी सीधा नहीं पहुँच सकता।'
        },
        {
          heading: 'डीडीओएस प्रोटेक्शन (DDoS Shield)',
          content: 'अगर कोई हैकर एक साथ करोड़ों फ़र्ज़ी रिक्वेस्ट भेजकर सर्वर गिराने की कोशिश करे, तो AWS Shield जैसी सर्विस उसे रोक देती है।'
        }
      ]
    },
    {
      id: 5,
      title: 'Scalability',
      subtitle: 'ऑटोमैटिक रिसोर्स बढ़ाना',
      icon: Zap,
      color: '#8b5cf6',
      items: [
        'ऑटो-स्केलिंग (Auto-Scaling): अगर वेबसाइट पर अचानक बहुत सारे लोग आ जाएं, तो क्लाउड खुद ही सर्वर की पावर (RAM/CPU) बढ़ा देता है।',
        'स्केल डाउन (Scale Down): और जब लोग कम हो जाएं (जैसे रात में), तो पावर वापस कम कर देता है ताकि पैसे बचें।',
        'हॉरिजॉन्टल स्केलिंग (Horizontal): सर्वर की रैम बढ़ाने की बजाय, 1 सर्वर के साथ 5 नए सर्वर जोड़ दिए जाते हैं।',
        'नो डाउनटाइम (Zero Downtime): इस पूरी प्रक्रिया में वेबसाइट एक सेकंड के लिए भी बंद नहीं होती।'
      ],
      example: 'लक्ष्य: वेबसाइट पर 10 लोग हों या 10 लाख, वेबसाइट की स्पीड कभी कम न हो।',
      deepDive: [
        {
          heading: 'इलास्टिक लोड बैलेंसर (ELB)',
          content: 'जब नए सर्वर जुड़ते हैं, तो लोड बैलेंसर नए आने वाले यूज़र्स को उन नए सर्वर्स पर ट्रांसफर कर देता है ताकि किसी एक पर लोड न पड़े।'
        },
        {
          heading: 'ग्लोबल रीच (Edge Locations)',
          content: 'अगर यूज़र अमेरिका में है, तो उसे अमेरिका के सर्वर से डेटा भेजा जाता है, और अगर भारत में है तो भारत के सर्वर से, जिससे स्पीड तेज़ रहे।'
        }
      ]
    }
  ];

  if (selectedDetail !== null) {
    const detailItem = reqData.find(item => item.id === selectedDetail);
    if (!detailItem) return null;
    const DetailIcon = detailItem.icon;
    
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: 'var(--icon-bg)', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setSelectedDetail(null)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'var(--card-bg)', borderRadius: '0.5rem', color: 'var(--text-main)', border: '1px solid var(--card-border)', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Cloud Computing
        </button>
        
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <DetailIcon size={40} color={detailItem.color} />
            <h3 style={{ margin: 0, fontSize: '2rem', color: 'var(--text-main)' }}>{detailItem.title}</h3>
          </div>
          
          <div style={{ background: 'var(--card-bg)', padding: '2.5rem', borderRadius: '1.5rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '1.5rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.75rem' }}>
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
                        <strong style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>{parts[0]}:</strong>
                        <p style={{ margin: '0.5rem 0 0 0', color: 'var(--text-main)', lineHeight: '1.6' }}>{parts.slice(1).join(':')}</p>
                      </>
                    ) : (
                      <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '1.1rem', fontWeight: '500' }}>{bullet}</p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Deep Dive Extra Details Section */}
            {detailItem.deepDive && detailItem.deepDive.length > 0 && (
              <div style={{ marginTop: '2.5rem' }}>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Info size={22} color={detailItem.color} />
                  गहराई से जानकारी (Deep Dive Details)
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                  {detailItem.deepDive.map((dive, idx) => (
                    <div key={idx} style={{ 
                      background: 'var(--icon-bg)', padding: '1.5rem', borderRadius: '1rem', 
                      border: '1px solid var(--card-border)', boxShadow: 'inset 0 2px 4px 0 rgba(0,0,0,0.02)'
                    }}>
                      <h5 style={{ margin: '0 0 0.75rem 0', fontSize: '1.1rem', color: detailItem.color, fontWeight: 'bold' }}>
                        {dive.heading}
                      </h5>
                      <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
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
    <div className="thane-dashboard-container" style={{ padding: '2rem', background: 'var(--icon-bg)', minHeight: '100vh', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
        <button onClick={onBack} className="thane-back-btn">
          <ArrowLeft size={18} /> Back to Advanced SDLC
        </button>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.75rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Cloud size={28} color="#0ea5e9" />
            क्लाउड कंप्यूटिंग (Cloud Computing)
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: 'var(--text-muted)' }}>
            AWS, Azure, और Google Cloud जैसे प्लेटफार्म्स पर सॉफ्टवेयर को होस्ट और मैनेज करना।
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
        {reqData.map(box => {
          const Icon = box.icon || Cloud;
          return (
            <div key={box.id} style={{
              background: 'var(--card-bg)', borderRadius: '1rem', padding: '1.5rem',
              border: '1px solid var(--card-border)', borderTop: `4px solid ${box.color}`,
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
                    <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 'bold', lineHeight: '1.3' }}>{box.title}</h3>
                    <p style={{ margin: '0.2rem 0 0 0', color: 'var(--text-muted)', fontSize: '0.85rem' }}>{box.subtitle}</p>
                  </div>
                </div>
                <span style={{ color: box.color, fontWeight: 'bold', fontSize: '1.5rem', lineHeight: '1' }}>
                  {expandedCard === box.id ? '−' : '+'}
                </span>
              </div>

              {expandedCard === box.id && (
                <div className="animate-fade-in" style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--card-border)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1.5rem', flex: 1 }}>
                    {box.items.map((item, idx) => {
                      const title = item.split(':')[0];
                      return (
                        <div key={idx} style={{ 
                          background: 'var(--icon-bg)', border: '1px solid var(--card-border)', padding: '0.5rem 0.75rem', 
                          borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
                          fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: '500'
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
