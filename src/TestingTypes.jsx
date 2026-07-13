import React, { useState } from 'react';
import { 
  ArrowLeft, CheckSquare, Search, Activity, Cpu, Code, ShieldCheck, Layers, GitMerge, FileText, Target, Info
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function TestingTypes({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const reqData = [
    {
      id: 1,
      title: 'Unit Testing (यूनिट टेस्टिंग)',
      subtitle: 'Code Level Testing',
      icon: Code,
      color: '#3b82f6',
      items: [
        'फंक्शन की जांच (Function Check): सॉफ्टवेयर के सबसे छोटे हिस्से (जैसे एक फंक्शन या बटन) की अलग से जाँच करना।',
        'डेवलपर द्वारा (By Developer): यह आमतौर पर कोड लिखते समय डेवलपर्स द्वारा खुद (Jest या NUnit टूल से) किया जाता है।',
        'फायदा (Pros): शुरुआत में ही गलतियों को पकड़ने में मदद करता है।',
        'नुकसान (Cons): यह नहीं बता सकता कि पूरा सिस्टम एक साथ काम करेगा या नहीं।'
      ],
      example: 'लक्ष्य: यह सुनिश्चित करना कि "लॉगिन बटन" क्लिक करने पर सही फंक्शन कॉल हो रहा है।',
      deepDive: [
        {
          heading: 'टेस्ट ड्रिवन डेवलपमेंट (TDD)',
          content: 'इसमें पहले टेस्ट (Test Case) लिखा जाता है, फिर कोड (Code) लिखा जाता है। अगर कोड टेस्ट पास नहीं करता, तो उसे बदल दिया जाता है।'
        },
        {
          heading: 'मॉक डेटा (Mock Data)',
          content: 'यूनिट टेस्टिंग करते समय असली डेटाबेस का इस्तेमाल नहीं होता। इसके बजाय डमी (Dummy) डेटा देकर कोड को टेस्ट किया जाता है।'
        }
      ]
    },
    {
      id: 2,
      title: 'Integration Testing (इंटीग्रेशन टेस्टिंग)',
      subtitle: 'Module Connecting',
      icon: Layers,
      color: '#10b981',
      items: [
        'मॉड्यूल जुड़ाव (Module Link): जब दो या अधिक हिस्सों को जोड़ा जाता है, तो यह जाँचना कि वे साथ में सही काम कर रहे हैं या नहीं।',
        'डेटा फ्लो (Data Flow): उदाहरण के लिए- फ्रंटएंड (UI) से डाला गया डेटा बैकएंड (Database) में सही जा रहा है या नहीं?',
        'फायदा (Pros): अलग-अलग टीमों (Front/Back) द्वारा बनाए गए कोड के बीच की कमियां पकड़ में आती हैं।',
        'नुकसान (Cons): अगर कोई एरर आता है, तो ढूंढना मुश्किल होता है कि गलती फ्रंटएंड की है या बैकएंड की।'
      ],
      example: 'लक्ष्य: यह चेक करना कि "FIR सेव" करने पर वह सही में डेटाबेस की "FIR Table" में सेव हो रही है।',
      deepDive: [
        {
          heading: 'API टेस्टिंग (API Test)',
          content: 'Postman जैसे टूल्स का उपयोग करके APIs को टेस्ट किया जाता है, कि वे सही JSON डेटा भेज और मंगा रहे हैं या नहीं।'
        },
        {
          heading: 'बॉटम-अप एप्रोच (Bottom-Up)',
          content: 'पहले छोटे हिस्सों को जोड़ा जाता है, फिर बड़े हिस्सों को। अगर कोई बड़ा हिस्सा तैयार नहीं है, तो डमी स्टब्स (Stubs/Drivers) का इस्तेमाल होता है।'
        }
      ]
    },
    {
      id: 3,
      title: 'System Testing (सिस्टम टेस्टिंग)',
      subtitle: 'End-to-End Testing',
      icon: Activity,
      color: '#f59e0b',
      items: [
        'पूरी जांच (End-to-End): पूरे सॉफ्टवेयर को एक साथ चलाकर जाँचना कि वह सभी ज़रूरतों (Requirements) को पूरा कर रहा है या नहीं।',
        'असली अनुभव (Real Scenario): यह एक असली यूज़र की तरह सॉफ्टवेयर का उपयोग करके किया जाता है।',
        'फायदा (Pros): सॉफ्टवेयर की पूरी कार्यप्रणाली (Functionality) पक्की हो जाती है।',
        'टेस्ट एन्वायरनमेंट (Environment): यह टेस्टिंग डेवलपमेंट सर्वर पर नहीं, बल्कि एक अलग "स्टेजिंग (Staging)" सर्वर पर होती है।'
      ],
      example: 'लक्ष्य: लॉगिन से लेकर FIR दर्ज़ करने और फिर उसकी रिपोर्ट डाउनलोड करने तक की पूरी प्रक्रिया (Journey) की जांच।',
      deepDive: [
        {
          heading: 'ब्लैक बॉक्स टेस्टिंग (Black Box)',
          content: 'टेस्टर्स को अंदर के कोड से कोई मतलब नहीं होता। वे बस यह देखते हैं कि बटन दबाने पर सही काम हो रहा है या नहीं।'
        },
        {
          heading: 'QA टीम (Quality Assurance)',
          content: 'यह काम डेवलपर्स नहीं करते, बल्कि एक अलग प्रोफेशनल टेस्टर्स की टीम करती है ताकि निष्पक्ष जांच हो सके।'
        }
      ]
    },
    {
      id: 4,
      title: 'UAT (User Acceptance Testing)',
      subtitle: 'Client Approval',
      icon: CheckSquare,
      color: '#ec4899',
      items: [
        'यूज़र अप्रूवल (Client Sign-off): सॉफ्टवेयर लाइव (Live) करने से ठीक पहले क्लाइंट या असली यूज़र्स द्वारा की जाने वाली टेस्टिंग।',
        'बिज़नेस ज़रूरत (Business Need): इसका उद्देश्य यह पक्का करना है कि सॉफ्टवेयर बिज़नेस की असल ज़रूरतों को पूरा कर रहा है।',
        'फायदा (Pros): क्लाइंट को सॉफ्टवेयर पर पूरा भरोसा हो जाता है और डिलीवरी के बाद शिकायतें नहीं आतीं।',
        'अल्फा-बीटा (Alpha/Beta): इसके दो हिस्से हो सकते हैं - अल्फा (ऑफिस में) और बीटा (मार्किट में असली यूज़र के साथ)।'
      ],
      example: 'लक्ष्य: असली पुलिसवालों से पूछना - "क्या यह सॉफ्टवेयर वाकई आपके काम को आसान बना रहा है?"',
      deepDive: [
        {
          heading: 'पायलट रन (Pilot Run)',
          content: 'सॉफ्टवेयर को पूरे राज्य में लागू करने से पहले 2-3 थानों में ट्रायल (Trial) के तौर पर 15 दिन के लिए इस्तेमाल किया जाता है।'
        },
        {
          heading: 'फीडबैक लूप (Feedback Loop)',
          content: 'अगर यूज़र कहता है कि "FIR का फॉर्म बहुत लम्बा है", तो UAT के दौरान उसे छोटा किया जाता है, ताकि असली काम में दिक्कत न आये।'
        }
      ]
    },
    {
      id: 5,
      title: 'Regression Testing (रिग्रेशन टेस्टिंग)',
      subtitle: 'Re-testing after changes',
      icon: GitMerge,
      color: '#8b5cf6',
      items: [
        'दोबारा जांच (Re-test): जब सॉफ्टवेयर में कोई नया बदलाव या अपडेट किया जाता है, तो यह जाँचना कि उससे पुराने हिस्से तो ख़राब नहीं हुए।',
        'ऑटोमेशन (Automation Tools): क्योंकि इसे बार-बार करना पड़ता है, इसलिए Selenium या Cypress जैसे ऑटोमेशन टूल्स का इस्तेमाल होता है।',
        'फायदा (Pros): यह पक्का करता है कि नए फीचर से पुराने सिस्टम में कोई नया एरर (Bug) नहीं आया है।',
        'कब करें? (When?): हर बार जब भी कोई नया कोड मुख्य सर्वर (Main Branch) में जोड़ा जाता है।'
      ],
      example: 'लक्ष्य: अगर हमने "AI चैट" का नया फीचर जोड़ा है, तो यह सुनिश्चित करना कि पुराना "लॉगिन" फीचर टूटे नहीं।',
      deepDive: [
        {
          heading: 'ऑटोमेटेड टेस्ट सूट्स (Automated Suites)',
          content: 'सैकड़ों टेस्ट्स का एक ग्रुप (Suite) बना होता है, जिसे एक क्लिक पर चलाया जा सकता है, जो 10 मिनट में पूरी वेबसाइट टेस्ट कर लेता है।'
        },
        {
          heading: 'बग फिक्स वेरिफिकेशन (Bug Fix Check)',
          content: 'अगर कोई पुरानी गलती सुधारी गई है, तो रिग्रेशन टेस्ट यह पक्का करता है कि वह गलती सच में ठीक हो गई है और वापस नहीं आएगी।'
        }
      ]
    },
    {
      id: 6,
      title: 'Performance & Security Testing',
      subtitle: 'Speed & Safety',
      icon: ShieldCheck,
      color: '#14b8a6',
      items: [
        'परफॉरमेंस (Performance): हज़ारों लोग एक साथ सॉफ्टवेयर यूज़ करें तो क्या वह स्लो होगा या क्रैश हो जाएगा (Load/Stress Testing)।',
        'सिक्योरिटी (Security): हैकर्स सॉफ्टवेयर को कैसे नुकसान पहुँचा सकते हैं, इसकी जाँच करना (Penetration Testing)।',
        'फायदा (Pros): सिस्टम आपातकाल (Emergency) में भी तेज़ चलता है और डेटा लीक नहीं होता।',
        'नियम (Compliance): सरकारी सॉफ्टवेयर के लिए CERT-In (सिक्योरिटी एजेंसी) से टेस्टिंग कराना अनिवार्य होता है।'
      ],
      example: 'लक्ष्य: सिस्टम को इतना तेज़ और सुरक्षित बनाना कि वह किसी भी ट्रैफिक या हैकर के हमले से न टूटे।',
      deepDive: [
        {
          heading: 'जमीटर (JMeter Load Test)',
          content: 'Apache JMeter से सर्वर पर 1 लाख फ़र्ज़ी (Virtual) यूज़र्स का लोड डाला जाता है, ताकि उसकी अधिकतम क्षमता (Breaking point) पता चल सके।'
        },
        {
          heading: 'एथिकल हैकिंग (Ethical Hacking)',
          content: 'सफ़ेद टोपी वाले हैकर्स (White-hat Hackers) सिस्टम की कमजोरियों (Vulnerabilities) को ढूँढ़ते हैं, ताकि असली हैकर फायदा न उठा सके।'
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
          <ArrowLeft size={18} /> Back to Testing Types
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
          <ArrowLeft size={18} /> Back to SDLC
        </button>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.75rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <FileText size={28} color="#f59e0b" />
            टेस्टिंग के प्रकार (Software Testing Types)
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: 'var(--text-muted)' }}>
            सॉफ्टवेयर को बग-फ्री और सुरक्षित बनाने के लिए की जाने वाली विभिन्न प्रकार की टेस्टिंग।
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
        {reqData.map(box => {
          const Icon = box.icon || CheckSquare;
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
