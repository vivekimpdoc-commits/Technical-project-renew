import React, { useState } from 'react';
import { 
  ArrowLeft, Layers, Server, Combine, Blocks, Network, Boxes, CloudCog, Target, Info
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function SoftwareArchitecture({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const reqData = [
    {
      id: 1,
      title: 'Monolithic Architecture',
      subtitle: 'The All-in-One Approach',
      icon: Boxes,
      color: '#3b82f6',
      items: [
        'सिंगल कोडबेस (Single Codebase): पूरा सॉफ्टवेयर (Front-end, Back-end, Database connections) एक ही बड़े फोल्डर या प्रोजेक्ट में लिखा जाता है।',
        'टाइट कपलिंग (Tight Coupling): सभी हिस्से आपस में बहुत गहराई से जुड़े होते हैं, एक में बदलाव करने से दूसरे पर असर पड़ सकता है।',
        'फायदे (Pros): शुरुआत में (Startups के लिए) बनाने, टेस्ट करने और लाइव करने में बहुत आसान होता है।',
        'नुकसान (Cons): सॉफ्टवेयर बड़ा होने पर इसे अपडेट करना या इसमें नई टीम को जोड़ना बहुत मुश्किल हो जाता है।'
      ],
      example: 'लक्ष्य: छोटे प्रोजेक्ट्स या MVP (Minimum Viable Product) को बहुत तेज़ी से मार्किट में उतारना।',
      deepDive: [
        {
          heading: 'स्केलिंग की समस्या (Scaling Issues)',
          content: 'अगर सिर्फ "सर्च" फीचर पर लोड बढ़े, तो आप अकेले सर्च को स्केल नहीं कर सकते, आपको पूरे के पूरे सॉफ्टवेयर की कॉपी बनानी पड़ेगी।'
        },
        {
          heading: 'टेक्नोलॉजी लॉक (Tech Lock-in)',
          content: 'चूँकि सब कुछ एक ही कोडबेस में है, आप आधी वेबसाइट Java में और आधी Python में नहीं बना सकते।'
        }
      ]
    },
    {
      id: 2,
      title: 'Microservices Architecture',
      subtitle: 'छोटे-छोटे स्वतंत्र हिस्से',
      icon: Combine,
      color: '#10b981',
      items: [
        'स्वतंत्र हिस्से (Independent Services): सॉफ्टवेयर को छोटे-छोटे हिस्सों में बांट दिया जाता है (जैसे Login Service, Payment Service)।',
        'अलग डेटाबेस (Separate DBs): हर सर्विस का अपना अलग डेटाबेस और अपना अलग कोड होता है, जो APIs के ज़रिये आपस में बात करते हैं।',
        'फायदे (Pros): अगर Payment Service क्रैश हो जाए, तो पूरी वेबसाइट बंद नहीं होती, बाकी सब चलता रहता है।',
        'उदाहरण (Examples): Amazon, Netflix, Uber जैसी दिग्गज कंपनियाँ इसी का इस्तेमाल करती हैं।'
      ],
      example: 'लक्ष्य: बहुत बड़े और जटिल सॉफ्टवेयर को हज़ारों डेवलपर्स द्वारा एक साथ बिना एक-दूसरे को डिस्टर्ब किये बनाना।',
      deepDive: [
        {
          heading: 'पॉलीग्लॉट प्रोग्रामिंग (Polyglot)',
          content: 'इसमें आप Login सर्विस Java में, Analytics सर्विस Python में और UI React में बना सकते हैं। सब अपनी मर्ज़ी की भाषा चुन सकते हैं।'
        },
        {
          heading: 'कॉम्प्लेक्सिटी (Operational Complexity)',
          content: 'इसे डिप्लॉय करने और मैनेज करने के लिए Kubernetes और Docker जैसे एडवांस टूल्स की ज़रूरत पड़ती है।'
        }
      ]
    },
    {
      id: 3,
      title: 'Serverless Architecture',
      subtitle: 'No Server Management',
      icon: CloudCog,
      color: '#f59e0b',
      items: [
        'नो सर्वर मैनेजमेंट (No Ops): डेवलपर्स को सर्वर सेटअप, सिक्योरिटी या अपडेट मैनेज करने की कोई ज़रूरत नहीं होती।',
        'फंक्शन्स (Functions as a Service - FaaS): सिर्फ एक काम करने वाला कोड लिखो और क्लाउड (जैसे AWS Lambda) पर डाल दो।',
        'पे-ऐज़-यू-गो (Pay-as-you-go): पैसे सिर्फ तब कटते हैं जब कोई यूज़र उस कोड को चलाता है (मिलीसेकंड्स के हिसाब से)।',
        'फायदे (Pros): अगर कोई यूज़र नहीं है, तो आपका बिल शून्य (Zero) आएगा।'
      ],
      example: 'लक्ष्य: इवेंट-आधारित कामों को बहुत सस्ते में और बिना सर्वर की टेंशन लिए पूरा करना।',
      deepDive: [
        {
          heading: 'कोल्ड स्टार्ट (Cold Starts)',
          content: 'अगर आपके सर्वरलेस कोड को बहुत देर से किसी ने नहीं चलाया है, तो पहली बार चलने में वह 1-2 सेकंड का एक्स्ट्रा समय ले सकता है।'
        },
        {
          heading: 'इनफिनिट स्केलिंग (Infinite Scale)',
          content: 'अगर अचानक 1 लाख यूज़र्स आ जाएँ, तो AWS अपने आप आपके कोड की 1 लाख कॉपियां चला देगा, आपको कुछ नहीं करना।'
        }
      ]
    },
    {
      id: 4,
      title: 'Event-Driven Architecture',
      subtitle: 'रिएक्टिव सिस्टम',
      icon: Network,
      color: '#ec4899',
      items: [
        'इवेंट्स (Events): पूरा सिस्टम "इवेंट्स" पर काम करता है (जैसे- यूज़र का रजिस्टर करना = 1 इवेंट)।',
        'पब-सब (Pub/Sub): एक सर्विस इवेंट पैदा करती है (Publisher) और दूसरी सर्विस उस इवेंट का इंतज़ार करती है (Subscriber)।',
        'रिएक्टिव (Reactive): जब इवेंट होता है, तो उससे जुड़े सभी सिस्टम अपने आप (तुरंत) अपना-अपना काम चालू कर देते हैं।',
        'उपयोग (Use Case): ई-कॉमर्स (ऑर्डर प्लेस होना) और रियल-टाइम ऐप्स (जैसे Uber में राइड बुक होना) में बहुत काम आता है।'
      ],
      example: 'लक्ष्य: सिस्टम के अलग-अलग हिस्सों को बिना डायरेक्ट जोड़े (Decoupled), तेज़ी से एक साथ काम करवाना।',
      deepDive: [
        {
          heading: 'मैसेज ब्रोकर्स (Message Brokers)',
          content: 'इवेंट्स को एक जगह से दूसरी जगह पहुँचाने के लिए Apache Kafka या RabbitMQ जैसे टूल्स का इस्तेमाल होता है।'
        },
        {
          heading: 'असिंक्रोनस (Asynchronous Flow)',
          content: 'यूज़र को इंतज़ार नहीं करना पड़ता। उसने आर्डर किया, उसे सक्सेस का मैसेज मिला। बैकग्राउंड में ईमेल, पेमेंट, इन्वेंटरी अपना काम करते रहते हैं।'
        }
      ]
    },
    {
      id: 5,
      title: 'API-First Design',
      subtitle: 'Connecting Everything',
      icon: Blocks,
      color: '#8b5cf6',
      items: [
        'डिज़ाइन फर्स्ट (Design First): यूज़र इंटरफ़ेस (UI) या डेटाबेस बनाने से पहले सिर्फ API (Data Contract) डिज़ाइन की जाती है।',
        'यूनिवर्सल (Universal Connection): इससे मोबाइल ऐप (Android/iOS), वेबसाइट और स्मार्टवॉच सभी एक ही बैकएंड से आसानी से जुड़ सकते हैं।',
        'पैरेलल वर्क (Parallel Work): API डिज़ाइन होने के बाद फ्रंटएंड और बैकएंड टीम एक साथ अपना-अपना काम शुरू कर सकती हैं।',
        'फायदे (Pros): भविष्य में नए डिवाइस (जैसे TV App) जोड़ना बहुत आसान हो जाता है।'
      ],
      example: 'लक्ष्य: सॉफ्टवेयर को इस तरह बनाना कि वह दुनिया के किसी भी डिवाइस या दूसरे सॉफ्टवेयर से आसानी से बात (Connect) कर सके।',
      deepDive: [
        {
          heading: 'स्वैगर (Swagger/OpenAPI)',
          content: 'APIs का डिज़ाइन बनाने के लिए Swagger का उपयोग होता है, जो आटोमेटिक डॉक्यूमेंटेशन बना देता है कि API कैसे काम करेगी।'
        },
        {
          heading: 'मॉक सर्वर्स (Mock Servers)',
          content: 'बैकएंड बनने से पहले ही फ्रंटएंड टीम मॉक (नकली) API डेटा का उपयोग करके डिज़ाइन बनाना चालू कर सकती है।'
        }
      ]
    },
    {
      id: 6,
      title: 'Clean Architecture',
      subtitle: 'Maintainable Code',
      icon: Server,
      color: '#14b8a6',
      items: [
        'लेयर्स (Layers): कोड को प्याज़ की तरह अलग-अलग परतों में लिखा जाता है (UI Layer, Business Logic Layer, Database Layer)।',
        'स्वतंत्रता (Independence): अंदर की लेयर (Business Logic) को बाहर की लेयर (UI या Database) के बारे में कुछ पता नहीं होता।',
        'बदलाव आसान (Easy Swaps): इससे अगर कल को आप SQL डेटाबेस हटाकर NoSQL लगाना चाहें, तो मुख्य लॉजिक को बदलना नहीं पड़ता।',
        'फायदे (Pros): लंबे समय तक चलने वाले (10-15 साल पुराने) प्रोजेक्ट्स को मेंटेन रखने के लिए सबसे बेस्ट तरीका।'
      ],
      example: 'लक्ष्य: कोड को इतना साफ़ और अलग-अलग रखना कि कल कोई नई टेक्नोलॉजी आये तो उसे आसानी से जोड़ा जा सके।',
      deepDive: [
        {
          heading: 'डिपेंडेंसी इन्वर्शन (Dependency Inversion)',
          content: 'इसमें हाई-लेवल मॉड्यूल (Logic) लो-लेवल मॉड्यूल (Database) पर निर्भर नहीं होते, बल्कि दोनों एक "Interface" पर निर्भर होते हैं।'
        },
        {
          heading: 'टेस्टेबिलिटी (High Testability)',
          content: 'चूँकि बिज़नेस लॉजिक डेटाबेस या UI से बिलकुल अलग होता है, इसलिए उसे बिना किसी सेटअप के तुरंत टेस्ट (Unit Test) किया जा सकता है।'
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
          <ArrowLeft size={18} /> Back to Software Architecture
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
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#8b5cf6'; e.currentTarget.style.color = '#7c3aed'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; }}
        >
          <ArrowLeft size={18} /> Back to Advanced SDLC
        </button>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.75rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Layers size={28} color="#8b5cf6" />
            सॉफ्टवेयर आर्किटेक्चर (Software Architecture)
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            सॉफ्टवेयर को भविष्य के लिए मज़बूत, स्केलेबल और सुरक्षित बनाने के डिज़ाइन पैटर्न्स।
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
        {reqData.map(box => {
          const Icon = box.icon || Server;
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
