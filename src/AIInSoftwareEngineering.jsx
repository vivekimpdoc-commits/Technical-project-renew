import React, { useState } from 'react';
import { 
  ArrowLeft, Brain, Code, Bug, Activity, Layers, MessageSquare, Zap, Target, Info
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function AIInSoftwareEngineering({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const reqData = [
    {
      id: 1,
      title: 'AI Code Assistants',
      subtitle: 'कोडिंग में मदद',
      icon: Code,
      color: '#10b981',
      items: [
        'ऑटो-कम्प्लीट (Auto-complete): GitHub Copilot या Tabnine जैसे टूल्स जो कोड लिखते समय अगली लाइन का खुद-ब-खुद सुझाव देते हैं।',
        'स्पीड (Speed): डेवलपर्स के काम करने की स्पीड कई गुना बढ़ जाती है, खासकर बार-बार लिखे जाने वाले (Boilerplate) कोड में।',
        'जेनरेटिव कोडिंग (Generative Code): आप बस साधारण इंग्लिश में लिखें "Create a login form" और AI पूरा कोड लिख कर दे देगा।',
        'भाषा सीखना (Learning): नए डेवलपर्स के लिए नई प्रोग्रामिंग भाषा सीखना बहुत आसान हो जाता है।'
      ],
      example: 'लक्ष्य: डेवलपर के टाइप करने से पहले ही यह समझ जाना कि वह क्या कोड लिखना चाहता है।',
      deepDive: [
        {
          heading: 'कॉन्टेक्स्ट अवेयरनेस (Context Awareness)',
          content: 'ये AI टूल्स आपके पूरे प्रोजेक्ट को पढ़ लेते हैं। अगर आपने किसी दूसरी फाइल में कोई डिज़ाइन बनाया है, तो AI उसी डिज़ाइन को नए पेज पर इस्तेमाल करेगा।'
        },
        {
          heading: 'लिमिटेशंस (AI Hallucinations)',
          content: 'कभी-कभी AI ऐसा कोड भी लिख देता है जो काम नहीं करता या जिसमें सिक्योरिटी रिस्क होते हैं, इसलिए डेवलपर को कोड हमेशा खुद चेक करना पड़ता है।'
        }
      ]
    },
    {
      id: 2,
      title: 'Automated Code Review',
      subtitle: 'कोड की जाँच',
      icon: Bug,
      color: '#3b82f6',
      items: [
        'स्मार्ट स्कैन (Smart Scan): AI टूल्स जैसे DeepCode या SonarQube कोड में उन गलतियों को ढूँढते हैं जो इंसान से छूट सकती हैं।',
        'सिक्योरिटी फर्स्ट (Security): यह इंसानों से भी पहले बता देता है कि कोड में पासवर्ड लीक होने का या हैक होने का रिस्क है।',
        'सुझाव (Recommendations): यह सिर्फ गलती नहीं बताता, बल्कि यह भी बताता है कि उस कोड को और बेहतर और साफ़ कैसे लिखा जाए।',
        'टाइम सेविंग (Time Saving): सीनियर डेवलपर्स का घंटों का कोड-रिव्यु का समय बच जाता है।'
      ],
      example: 'लक्ष्य: कोड को लाइव होने से पहले एक ऐसे सुपर-स्मार्ट रोबोट से चेक करवाना जो कभी थकता नहीं।',
      deepDive: [
        {
          heading: 'कोड स्मेल (Code Smells)',
          content: 'AI ऐसे कोड को भी पकड़ लेता है जो चल तो रहा है, लेकिन भविष्य में सिस्टम को स्लो कर सकता है या जिसे समझना बहुत मुश्किल है।'
        },
        {
          heading: 'स्टाइल गाइड (Style Guide Check)',
          content: 'अगर कंपनी का नियम है कि सभी बटन नीले होने चाहिए, तो AI तुरंत बता देगा कि किसी डेवलपर ने गलती से लाल बटन बना दिया है।'
        }
      ]
    },
    {
      id: 3,
      title: 'AI in Testing',
      subtitle: 'स्मार्ट टेस्टिंग',
      icon: Activity,
      color: '#f59e0b',
      items: [
        'पैटर्न पहचान (Pattern Match): AI खुद समझ जाता है कि पिछले प्रोजेक्ट्स में बग्स (Bugs) कहाँ आये थे और वहीँ ज़्यादा टेस्ट करता है।',
        'ऑटो-टेस्ट केस (Auto-Test Cases): यह कोड पढ़कर ऑटोमैटिक रूप से हज़ारों टेस्ट केस (Test Cases) जेनरेट कर सकता है।',
        'UI टेस्टिंग (Visual Tests): Mabl या Testim जैसे टूल्स AI का इस्तेमाल करके वेबसाइट को एक इंसान की तरह चलाकर टेस्ट करते हैं।',
        'सेल्फ हीलिंग (Self Healing): अगर वेबसाइट का कोई बटन थोड़ा खिसक जाए, तो AI टेस्ट को फेल करने के बजाय खुद समझ कर बटन ढूँढ लेता है।'
      ],
      example: 'लक्ष्य: बिना टेस्टर्स की बड़ी टीम के, मिनटों में पूरे सॉफ्टवेयर की चप्पे-चप्पे की टेस्टिंग करना।',
      deepDive: [
        {
          heading: 'मंकी टेस्टिंग (Monkey Testing)',
          content: 'AI एक साथ लाखों रैंडम क्लिक्स और कीबोर्ड के बटन दबाकर चेक करता है कि क्या कोई ऐसा तरीका है जिससे ऐप क्रैश हो जाए।'
        },
        {
          heading: 'एज केसेस (Edge Cases)',
          content: 'इंसान अक्सर "अजीब" सिनेरियो सोचना भूल जाता है, जैसे "अगर यूज़र उम्र में -5 डाले तो?" AI ऐसे सभी मुश्किल टेस्ट केसेस खुद बना लेता है।'
        }
      ]
    },
    {
      id: 4,
      title: 'Predictive Analytics',
      subtitle: 'भविष्यवाणी',
      icon: Layers,
      color: '#8b5cf6',
      items: [
        'डेटा का विश्लेषण (Data Analysis): AI पिछले हज़ारों प्रोजेक्ट्स के डेटा को देखकर बताता है कि नया प्रोजेक्ट कितने दिन में पूरा होगा।',
        'रिस्क कैलकुलेशन (Risk Score): यह टीम की स्पीड देखकर बता सकता है कि प्रोजेक्ट के लेट होने या फेल होने का कितना रिस्क है।',
        'बजट प्रेडिक्शन (Budget): यह क्लाउड का बिल देखकर भविष्यवाणी करता है कि अगले महीने सर्वर का बिल कितना आने वाला है।',
        'डिसीजन मेकिंग (Management Tool): इससे प्रोजेक्ट मैनेजर्स और CEO को सही निर्णय (Decisions) लेने में मदद मिलती है।'
      ],
      example: 'लक्ष्य: समस्याओं के आने से पहले ही उन्हें देख लेना और टीम को अलर्ट कर देना।',
      deepDive: [
        {
          heading: 'डेवलपर बर्नआउट (Burnout Risk)',
          content: 'अगर कोई डेवलपर रोज़ रात को 2 बजे कोड जमा कर रहा है, तो AI मैनेजर को अलर्ट कर देगा कि उस डेवलपर पर बहुत ज़्यादा लोड है।'
        },
        {
          heading: 'कोड चर्न (Code Churn)',
          content: 'अगर कोई फाइल बार-बार एडिट हो रही है, तो AI बता देगा कि यह फाइल बहुत कॉम्प्लेक्स है और इसे दोबारा (Refactor) लिखने की ज़रूरत है।'
        }
      ]
    },
    {
      id: 5,
      title: 'AI Chatbots for Support',
      subtitle: 'यूज़र हेल्प',
      icon: MessageSquare,
      color: '#ec4899',
      items: [
        'इन-ऐप सपोर्ट (In-App Support): सॉफ्टवेयर के अंदर ही स्मार्ट AI चैटबॉट्स (जैसे ChatGPT आधारित) होते हैं।',
        'तुरंत समाधान (Instant Help): अगर यूज़र को सॉफ्टवेयर चलाने में दिक्कत आ रही है, तो चैटबॉट 1 सेकंड में जवाब देता है।',
        'भाषा अनुवाद (Multilingual): AI चैटबॉट दुनिया की किसी भी भाषा (हिंदी, फ्रेंच, स्पेनिश) में बात कर सकता है।',
        'लोड कम करना (Reduce Workload): इससे कस्टमर सपोर्ट (Customer Care) टीम का 80% काम कम हो जाता है।'
      ],
      example: 'लक्ष्य: कस्टमर को 24/7 मदद देना, बिना एक भी इंसान को कॉल सेंटर में बिठाये।',
      deepDive: [
        {
          heading: 'सेंटीमेंट एनालिसिस (Sentiment Analysis)',
          content: 'अगर चैटबॉट समझ जाता है कि यूज़र बहुत गुस्से में (Angry) टाइप कर रहा है, तो वह चैट तुरंत एक असली इंसान (Human Agent) को ट्रांसफर कर देता है।'
        },
        {
          heading: 'RAG (Retrieval-Augmented Gen)',
          content: 'चैटबॉट कंपनी के सारे प्राइवेट डॉक्यूमेंट्स पढ़ कर रखता है, ताकि वह जो भी जवाब दे, वह 100% सही और कंपनी के नियमों के हिसाब से हो।'
        }
      ]
    },
    {
      id: 6,
      title: 'Generative AI for UI',
      subtitle: 'डिज़ाइनिंग',
      icon: Zap,
      color: '#14b8a6',
      items: [
        'ऑटो-डिज़ाइन (Auto-Design): Midjourney या DALL-E जैसे टूल्स से वेबसाइट के लिए खूबसूरत इमेजेज और ग्राफिक्स सेकंडों में बनाए जाते हैं।',
        'कोड जेनेरशन (UI to Code): कुछ नए AI टूल्स हाथ से बनाये गए डिज़ाइन की फोटो देखकर पूरी वेबसाइट का कोड (HTML/React) लिख देते हैं।',
        'प्रॉम्प्ट से UI (Prompt to UI): आप बस लिखें "एक डैशबोर्ड बनाओ जिसमें डार्क मोड हो", और AI पूरा पेज डिज़ाइन कर देगा।',
        'एग्जांपल (Tools): v0 by Vercel, Figma AI, Uizard इसके बेहतरीन उदाहरण हैं।'
      ],
      example: 'लक्ष्य: डिज़ाइनर और डेवलपर के बीच की दूरी को ख़त्म करना और हफ़्तों का काम मिनटों में करना।',
      deepDive: [
        {
          heading: 'वेरिएशंस (Rapid Variations)',
          content: 'इंसान को एक डिज़ाइन के 5 कलर बनाने में 1 घंटा लगेगा, AI 2 सेकंड में 50 अलग-अलग कलर और डिज़ाइन ऑप्शन आपके सामने रख देगा।'
        },
        {
          heading: 'एक्सेसिबिलिटी (Accessibility Auto-fix)',
          content: 'AI डिज़ाइन बनाते समय खुद चेक कर लेता है कि कलर का कंट्रास्ट सही है या नहीं, ताकि कमज़ोर आँखों वाले यूज़र्स भी उसे आसानी से पढ़ सकें।'
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
          <ArrowLeft size={18} /> Back to AI in Software Engineering
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
          <ArrowLeft size={18} /> Back to Advanced SDLC
        </button>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.75rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Brain size={28} color="#10b981" />
            एआई का इस्तेमाल (AI in Software Engineering)
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            कोडिंग, टेस्टिंग, और ऑपरेशन्स में AI टूल्स का प्रयोग करके काम को तेज़ और स्मार्ट बनाना।
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
        {reqData.map(box => {
          const Icon = box.icon || Brain;
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
