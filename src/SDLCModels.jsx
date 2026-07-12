import React, { useState } from 'react';
import { 
  ArrowLeft, RefreshCw, GitMerge, Settings, Activity, ShieldCheck, FastForward, CheckCircle, Infinity, FileText, Layers, Target, Info
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function SDLCModels({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const reqData = [
    {
      id: 1,
      title: 'Waterfall Model (वॉटरफॉल मॉडल)',
      subtitle: 'The Traditional Linear Approach',
      icon: GitMerge,
      color: '#3b82f6',
      items: [
        'सीधा रास्ता (Linear Flow): इसमें एक चरण पूरा होने के बाद ही अगला चरण शुरू होता है, जैसे पानी ऊपर से नीचे गिरता है।',
        'फिक्स रिक्वायरमेंट्स (Fixed Requirements): यह तभी काम आता है जब क्लाइंट को बिल्कुल पक्का पता हो कि उसे क्या बनवाना है।',
        'फायदे (Pros): इसे समझना और मैनेज करना बहुत आसान होता है क्योंकि हर फेज़ का टाइम तय होता है।',
        'नुकसान (Cons): अगर बीच में क्लाइंट को कोई नया फीचर याद आ जाए, तो उसे जोड़ना बहुत मुश्किल और महंगा होता है।'
      ],
      example: 'लक्ष्य: उन प्रोजेक्ट्स को पूरा करना जिनमें बदलाव (Changes) की गुंजाइश बिलकुल नहीं होती।',
      deepDive: [
        {
          heading: 'दस्तावेज़ीकरण (Heavy Documentation)',
          content: 'इसमें कोडिंग से ज्यादा जोर कागज़ी काम (Documentation) पर होता है। पहले पूरे प्रोजेक्ट की किताब (SRS) लिखी जाती है, फिर कोडिंग शुरू होती है।'
        },
        {
          heading: 'लेट टेस्टिंग (Late Testing)',
          content: 'इसमें टेस्टिंग सबसे आख़िर में होती है। इसलिए अगर डिज़ाइन में कोई बड़ी गड़बड़ हो, तो वह एकदम अंत में पता चलती है।'
        }
      ]
    },
    {
      id: 2,
      title: 'Agile Model (एजाइल मॉडल)',
      subtitle: 'The Flexible & Iterative Approach',
      icon: RefreshCw,
      color: '#10b981',
      items: [
        'स्प्रिंट्स (Sprints): यह पूरे प्रोजेक्ट को छोटे-छोटे 2-3 हफ्ते के हिस्सों (Sprints) में बांटकर काम करता है।',
        'लचीलापन (Flexibility): इसमें क्लाइंट किसी भी समय नए बदलाव (Changes) या नए फीचर्स की मांग कर सकता है।',
        'फायदे (Pros): क्लाइंट को 2 हफ्ते बाद ही काम करता हुआ थोड़ा सा सॉफ्टवेयर दिख जाता है।',
        'नुकसान (Cons): अगर क्लाइंट बार-बार विज़न बदले, तो प्रोजेक्ट कभी ख़त्म ही नहीं होगा और बजट बढ़ जाएगा।'
      ],
      example: 'लक्ष्य: तेज़ी से बदलते बिज़नेस या स्टार्टअप्स के लिए सबसे बेहतरीन तरीका जहाँ नए आइडियाज़ रोज़ आते हैं।',
      deepDive: [
        {
          heading: 'डेली स्टैंड-अप (Daily Standup)',
          content: 'एजाइल में टीम हर सुबह 15 मिनट की मीटिंग करती है जिसमें सब बताते हैं कि उन्होंने कल क्या किया और आज क्या करेंगे।'
        },
        {
          heading: 'निरंतर फीडबैक (Continuous Feedback)',
          content: 'हर स्प्रिंट के आख़िर में क्लाइंट को डेमो दिया जाता है, और उनके फीडबैक के आधार पर ही अगले स्प्रिंट का काम तय होता है।'
        }
      ]
    },
    {
      id: 3,
      title: 'V-Model (Verification & Validation)',
      subtitle: 'Testing in Parallel',
      icon: ShieldCheck,
      color: '#f59e0b',
      items: [
        'समानांतर टेस्टिंग (Parallel Testing): इसमें जैसे ही कोडिंग शुरू होती है, वैसे ही उसकी टेस्टिंग की तैयारी भी शुरू हो जाती है।',
        'वी-शेप (V-Shape): यह मॉडल अंग्रेजी के "V" अक्षर की तरह काम करता है, एक तरफ कोडिंग, दूसरी तरफ टेस्टिंग।',
        'फायदे (Pros): इसमें गलतियां बहुत जल्दी पकड़ में आ जाती हैं क्योंकि हर फेज़ के साथ एक टेस्ट जुड़ा होता है।',
        'नुकसान (Cons): यह भी वाटरफॉल की तरह कठोर (Rigid) है, बीच में बदलाव करना इसमें भी मुश्किल होता है।'
      ],
      example: 'लक्ष्य: मेडिकल या डिफेन्स (Army) के सॉफ्टवेयर बनाना जहाँ एक छोटी सी गलती भी जानलेवा हो सकती है।',
      deepDive: [
        {
          heading: 'सख्त गुणवत्ता (Strict Quality)',
          content: 'डेवलपमेंट के हर चरण का एक对应的 टेस्टिंग चरण होता है (जैसे- कोडिंग के साथ यूनिट टेस्टिंग, डिज़ाइन के साथ इंटीग्रेशन टेस्टिंग)।'
        },
        {
          heading: 'महंगा (Expensive)',
          content: 'चूँकि इसमें शुरुआत से ही टेस्टर्स (QA) की भारी टीम लगती है, इसलिए यह तरीका काफी महंगा होता है।'
        }
      ]
    },
    {
      id: 4,
      title: 'Spiral Model (स्पाइरल मॉडल)',
      subtitle: 'Risk-Driven Approach',
      icon: Activity,
      color: '#ec4899',
      items: [
        'जोखिम प्रबंधन (Risk Management): यह दुनिया का इकलौता मॉडल है जिसका पूरा फोकस रिस्क (Risk) को कम करने पर होता है।',
        'प्रोटोटाइपिंग (Prototyping): इसमें सीधा पूरा सॉफ्टवेयर नहीं बनाते, बल्कि बार-बार छोटे-छोटे प्रोटोटाइप (Demo) बनाते हैं।',
        'फायदे (Pros): बड़े और अनजान रिस्क वाले प्रोजेक्ट्स के लिए यह सबसे सुरक्षित तरीका है।',
        'नुकसान (Cons): यह सबसे महंगा और सबसे ज्यादा समय लेने वाला मॉडल है।'
      ],
      example: 'लक्ष्य: बहुत बड़े, जटिल और महंगे सरकारी या स्पेस (Space) प्रोजेक्ट्स को सुरक्षित तरीके से बनाना।',
      deepDive: [
        {
          heading: 'चार मुख्य चरण (Four Phases)',
          content: 'हर स्पाइरल में 4 काम होते हैं: 1) प्लानिंग, 2) रिस्क एनालिसिस, 3) इंजीनियरिंग (कोडिंग), और 4) क्लाइंट इवैल्यूएशन।'
        },
        {
          heading: 'एक्सपर्ट्स की ज़रूरत (Requires Experts)',
          content: 'इसमें रिस्क को भांपने के लिए बहुत ही हाई-लेवल के अनुभवी लोगों की ज़रूरत होती है, वरना मॉडल फेल हो सकता है।'
        }
      ]
    },
    {
      id: 5,
      title: 'DevOps Lifecycle',
      subtitle: 'Continuous Integration & Deployment',
      icon: Infinity,
      color: '#8b5cf6',
      items: [
        'टीम वर्क (Collaboration): इसमें कोड बनाने वाली टीम (Dev) और सर्वर संभालने वाली टीम (Ops) एक साथ मिलकर काम करती हैं।',
        'ऑटोमेशन (Automation): कोडिंग से लेकर लाइव सर्वर तक पहुँचने का पूरा रास्ता (Pipeline) ऑटोमैटिक होता है।',
        'फायदे (Pros): आप दिन में 10 बार भी नया अपडेट लाइव कर सकते हैं, वो भी बिना वेबसाइट बंद किए।',
        'नुकसान (Cons): इसे सेट करने के लिए बहुत महंगे टूल्स और बहुत स्मार्ट इंजीनियर्स की ज़रूरत होती है।'
      ],
      example: 'लक्ष्य: Amazon या Netflix की तरह बिना रुके लगातार नए फीचर्स लांच करते रहना।',
      deepDive: [
        {
          heading: 'CI/CD पाइपलाइन',
          content: 'यह डेवऑप्स की जान है। जैसे ही डेवलपर कोड लिखता है, वह अपने आप टेस्ट होता है और पास होने पर सर्वर पर लाइव हो जाता है।'
        },
        {
          heading: 'इन्फ्रास्ट्रक्चर एज़ कोड (IaC)',
          content: 'सर्वर बनाने के लिए माउस से क्लिक नहीं करना पड़ता, सर्वर भी कोड (Terraform) लिखकर बनाए जाते हैं।'
        }
      ]
    },
    {
      id: 6,
      title: 'RAD Model (Rapid App Development)',
      subtitle: 'Fast Prototyping',
      icon: FastForward,
      color: '#14b8a6',
      items: [
        'रफ़्तार (Speed): प्लानिंग पर समय बर्बाद करने की बजाय, 2 दिन में ही ऐप का एक कच्चा डिज़ाइन (Prototype) बनाकर यूज़र को दे दिया जाता है।',
        'यूज़र फोकस (User Focus): इसमें यूज़र सॉफ्टवेयर को चलाकर देखता है और बताता है कि उसे क्या चाहिए।',
        'फायदे (Pros): डिलीवरी का समय बहुत कम हो जाता है।',
        'नुकसान (Cons): बड़े और बहुत जटिल (Complex) प्रोजेक्ट्स के लिए यह तरीका बिलकुल काम नहीं करता।'
      ],
      example: 'लक्ष्य: 2-3 महीने के अंदर कोई छोटा और तेज़ सॉफ्टवेयर मार्किट में लॉन्च करना।',
      deepDive: [
        {
          heading: 'रियूज़ेबल कोड (Reusable Components)',
          content: 'RAD में नया कोड कम लिखा जाता है, बल्कि पुराने बने-बनाए कोड (Templates) का ज्यादा इस्तेमाल किया जाता है ताकि समय बचे।'
        },
        {
          heading: 'क्लाइंट इंवॉल्वमेंट (High Involvement)',
          content: 'क्लाइंट को हर दूसरे दिन प्रोटोटाइप दिखाया जाता है, इसलिए क्लाइंट का हमेशा उपलब्ध होना बहुत ज़रूरी है।'
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
          <ArrowLeft size={18} /> Back to SDLC Models
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
        <button onClick={onBack} className="thane-back-btn">
          <ArrowLeft size={18} /> Back to SDLC
        </button>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.75rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Layers size={28} color="#3b82f6" />
            SDLC मॉडल्स (सॉफ्टवेयर बनाने के तरीके)
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            विभिन्न पद्धतियां (Methodologies) जिनका उपयोग करके सॉफ्टवेयर का निर्माण किया जाता है।
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
    </div>
  );
}
