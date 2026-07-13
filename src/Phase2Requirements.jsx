import React, { useState } from 'react';
import {
  ArrowLeft, Layout, MousePointerClick, Smartphone, Eye, Columns, Grid, MonitorPlay, MessageSquare, Briefcase, FileSignature, PenTool, Palette, MoveRight, Target, Info
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function Phase2Requirements({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const reqData = [
    {
      id: 1,
      title: 'UI Design (कैसा दिखाई देगा?)',
      subtitle: 'Visual Aesthetics & Styling',
      icon: Palette,
      color: '#ec4899',
      items: [
        'कलर थीम (Color Theme): सॉफ्टवेयर के रंग कैसे होंगे? (जैसे- यूपी पुलिस के लिए नीला और सफ़ेद)।',
        'टाइपोग्राफी (Typography): फॉन्ट कौन सा होगा ताकि स्क्रीन पर लिखे हुए अक्षर आसानी से पढ़े जा सकें? (हिंदी और इंग्लिश दोनों)।'
      ],
      example: 'लक्ष्य: सॉफ्टवेयर को देखने में सुंदर और पुलिस विभाग के स्तर (Professional Look) का बनाना।',
      deepDive: [
        {
          heading: 'ब्रांडिंग और आइडेंटिटी (Branding)',
          content: 'पुलिस विभाग के आधिकारिक लोगो (Logo) और कलर्स (जैसे खाकी, नेवी ब्लू) का इस्तेमाल करके एक प्रोफेशनल और आधिकारिक फील देना।'
        },
        {
          heading: 'एक्सेसिबिलिटी (Accessibility)',
          content: 'कलर कंट्रास्ट ऐसा रखा जाएगा कि कम रौशनी में या स्क्रीन की ब्राइटनेस कम होने पर भी सब कुछ स्पष्ट दिखाई दे (WCAG 2.1 Guidelines)।'
        }
      ]
    },
    {
      id: 2,
      title: 'UX Design (उपयोगकर्ता का अनुभव)',
      subtitle: 'Usability & User Journey',
      icon: MousePointerClick,
      color: '#3b82f6',
      items: [
        'यूज़र जर्नी (User Journey): एक पुलिसकर्मी जब लॉगिन करेगा तो उसे पहला पेज (Dashboard) कैसा दिखेगा और वह 2 क्लिक में केस की डिटेल्स कैसे सर्च करेगा?',
        'आसानी (Simplicity): बटन्स और मेन्यू ऐसी जगह हों कि बिना किसी को पूछे समझ आ जाए कि कहाँ क्लिक करना है।'
      ],
      example: 'लक्ष्य: सॉफ्टवेयर को इतना आसान बनाना कि कोई नया पुलिसकर्मी भी उसे बिना ट्रेनिंग के चला सके।',
      deepDive: [
        {
          heading: 'इन्फोर्मेशन आर्किटेक्चर (Information Architecture)',
          content: 'सॉफ्टवेयर के हर मेनू और बटन को इस तरह से व्यवस्थित किया जाएगा कि सबसे ज़रूरी चीजें (जैसे FIR सर्च या अलर्ट) सबसे ऊपर दिखाई दें।'
        },
        {
          heading: 'यूज़र रिसर्च (User Feedback)',
          content: 'डिज़ाइन फाइनल करने से पहले कुछ पुलिसकर्मियों को प्रोटोटाइप दिखाया जाएगा ताकि उनके फीडबैक के आधार पर बदलाव किये जा सकें।'
        }
      ]
    },
    {
      id: 3,
      title: 'Screen Design Requirements',
      subtitle: 'मुख्य स्क्रीन्स का ढांचा',
      icon: MonitorPlay,
      color: '#10b981',
      items: [
        'लॉगिन स्क्रीन (Login Screen): सुरक्षित लॉगिन पेज जहाँ OTP और कैप्चा (Captcha) की सुविधा हो।',
        'डैशबोर्ड (Dashboard): एक मुख्य स्क्रीन जहाँ आज की FIR, पेंडिंग केस और AI के अलर्ट्स (Alerts) एक साथ दिखें।'
      ],
      example: 'लक्ष्य: हर स्क्रीन का एक स्पष्ट और साफ़ लेआउट (Wireframe) तैयार करना।',
      deepDive: [
        {
          heading: 'वायरफ्रेमिंग (Low & High Fidelity)',
          content: 'पहले कागज़ या बेसिक टूल पर स्केच (Wireframe) बनाया जाएगा, फिर उसे Figma जैसे टूल में असली स्क्रीन (High Fidelity) का रूप दिया जाएगा।'
        },
        {
          heading: 'कंसिस्टेंसी (Consistency)',
          content: 'चाहे थाने का पेज हो या SP ऑफिस का, सभी पेजों पर बटन्स का डिज़ाइन, टेबल का लेआउट और फॉन्ट एक समान (Consistent) रहेगा।'
        }
      ]
    },
    {
      id: 4,
      title: 'Dashboard Widgets',
      subtitle: 'डैशबोर्ड के छोटे टूल्स/विजेट्स',
      icon: Grid,
      color: '#f59e0b',
      items: [
        'रिकॉर्ड विजेट्स (Record Widgets): कितने केस दर्ज हुए, कितने हल हुए (Graphs और Charts के रूप में दिखाना)।',
        'अलर्ट विजेट्स (Alert Widgets): अगर कोई वांटेड अपराधी (Wanted Criminal) पकड़ा गया है, तो उसका लाल रंग का अलर्ट दिखना।'
      ],
      example: 'लक्ष्य: एक ही नज़र में थाने की पूरी स्थिति (Status) का पता लगाना।',
      deepDive: [
        {
          heading: 'ड्रैग एंड ड्राप (Customizable Widgets)',
          content: 'अधिकारी अपनी ज़रूरत के अनुसार डैशबोर्ड के विजेट्स को माउस से ड्रैग (Drag) करके आगे-पीछे सेट कर सकेंगे।'
        },
        {
          heading: 'डेटा विज़ुअलाइज़ेशन (Data Viz)',
          content: 'डेटा को पाई चार्ट (Pie chart) या बार ग्राफ (Bar graph) में दिखाया जाएगा ताकि पिछले महीने और इस महीने के क्राइम में अंतर तुरंत समझ आ सके।'
        }
      ]
    },
    {
      id: 5,
      title: 'AI Application UI/UX Requirements',
      subtitle: 'AI फीचर्स के लिए विशेष UI',
      icon: MessageSquare,
      color: '#8b5cf6',
      items: [
        'AI चैट असिस्टेंट (AI Chat): पुलिस वालों के सवालों के जवाब देने के लिए ChatGPT जैसा एक स्मार्ट चैटबॉक्स डिज़ाइन करना।',
        'AI रिस्क ग्राफ (Risk Graph): कौन से इलाके में क्राइम बढ़ने वाला है, उसे मैप (Map) पर हीटमैप (Heatmap - लाल, पीला, हरा) से दिखाना।'
      ],
      example: 'लक्ष्य: जटिल AI डेटा को भी इतने आसान ग्राफिक्स में दिखाना कि हर कोई उसे तुरंत समझ सके।',
      deepDive: [
        {
          heading: 'प्राकृतिक भाषा इंटरफ़ेस (NLP UI)',
          content: 'सर्च बॉक्स ऐसा डिज़ाइन होगा कि आप बोलकर या टाइप करके लिख सकें- "पिछले हफ्ते की चोरी की FIR दिखाओ", और AI उसे समझ ले।'
        },
        {
          heading: 'प्रेडिक्टिव अलर्ट डिज़ाइन (Predictive UI)',
          content: 'जब AI कोई खतरा भांप लेगा, तो स्क्रीन पर एक खास तरह का ब्लिंकिंग (Blinking) कार्ड पॉपअप होगा ताकि तुरंत ध्यान जाए।'
        }
      ]
    }
  ];

  const deliverables = [
    'User Personas',
    'User Journey Map',
    'Wireframes (Low & High Fidelity)',
    'Interactive Prototype',
    'Design System & Components',
    'Responsive Design Specs',
    'Accessibility Guidelines',
    'Final UI Kit'
  ];

  const tools = [
    'Figma',
    'Adobe XD',
    'Sketch',
    'Miro',
    'Draw.io'
  ];

  if (selectedDetail !== null) {
    const detailItem = reqData.find(item => item.id === selectedDetail);
    if (!detailItem) return null;
    const DetailIcon = detailItem.icon;
    
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: 'var(--icon-bg)', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setSelectedDetail(null)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'var(--card-bg)', borderRadius: '0.5rem', color: 'var(--text-main)', border: '1px solid var(--card-border)', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Phase 2
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

      {/* Header with Back Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
        <button onClick={onBack} className="thane-back-btn">
          <ArrowLeft size={18} /> Back to Phases
        </button>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.75rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Layout size={28} color="#ec4899" />
            Phase 2: UI/UX Design
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: 'var(--text-muted)' }}>
            यूजर इंटरफेस और यूजर एक्सपीरियंस डिज़ाइन - सॉफ़्टवेयर को आसान, आकर्षक, तेज़ और यूज़र-फ्रेंडली बनाना।
          </p>
        </div>
      </div>

      {/* Grid of Boxes */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
        {reqData.map(box => {
          const Icon = box.icon;
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
                    <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 'bold', lineHeight: '1.3' }}>{box.title}</h3>
                    <p style={{ margin: '0.2rem 0 0 0', color: 'var(--text-muted)', fontSize: '0.85rem' }}>{box.subtitle}</p>
                  </div>
                </div>
                <span style={{ color: box.color, fontWeight: 'bold', fontSize: '1.5rem', lineHeight: '1' }}>
                  {expandedCard === box.id ? '−' : '+'}
                </span>
              </div>

              {/* Expanded Content */}
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

      {/* Bottom Sections: Tools, Deliverables and Wireframe */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>

        {/* Deliverables & Tools */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          <div style={{ background: 'var(--card-bg)', borderRadius: '1rem', padding: '2rem', border: '1px solid var(--card-border)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ background: '#ec489915', padding: '0.75rem', borderRadius: '0.5rem', color: '#ec4899' }}><FileSignature size={24} /></div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--text-main)' }}>UI/UX Deliverables</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {deliverables.map((doc, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', padding: '0.75rem', background: '#fdf2f8', borderRadius: '0.5rem', border: '1px solid #fce7f3' }}>
                  <div style={{ width: '6px', height: '6px', background: '#ec4899', borderRadius: '50%', marginTop: '0.4rem', flexShrink: 0 }}></div>
                  <span style={{ color: '#831843', fontSize: '0.85rem', fontWeight: '500' }}>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'var(--card-bg)', borderRadius: '1rem', padding: '2rem', border: '1px solid var(--card-border)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ background: '#10b98115', padding: '0.75rem', borderRadius: '0.5rem', color: '#10b981' }}><PenTool size={24} /></div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--text-main)' }}>Recommended Tools</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {tools.map((tool, idx) => (
                <span key={idx} style={{ padding: '0.5rem 1rem', background: '#f0fdf4', color: '#166534', border: '1px solid #dcfce7', borderRadius: '2rem', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Wireframe Example */}
        <div style={{ background: 'var(--card-bg)', borderRadius: '1rem', padding: '2rem', border: '1px solid var(--card-border)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#3b82f615', padding: '0.75rem', borderRadius: '0.5rem', color: '#3b82f6' }}><Columns size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--text-main)' }}>Wireframe Example (लेआउट)</h3>
          </div>

          <div style={{ background: 'var(--icon-bg)', padding: '1rem', borderRadius: '0.75rem', border: '2px dashed #cbd5e1', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontFamily: 'monospace' }}>
            <div style={{ background: '#e2e8f0', padding: '0.75rem', textAlign: 'center', borderRadius: '0.25rem', fontWeight: 'bold', color: 'var(--text-main)' }}>Header</div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <div style={{ background: '#e2e8f0', padding: '2rem 0.5rem', width: '80px', textAlign: 'center', borderRadius: '0.25rem', color: 'var(--text-muted)', fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div>Sidebar</div>
                <div>Menu</div>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <div style={{ flex: 1, background: '#dbeafe', color: '#1e40af', padding: '0.5rem', textAlign: 'center', borderRadius: '0.25rem' }}>Cards</div>
                  <div style={{ flex: 1, background: '#dbeafe', color: '#1e40af', padding: '0.5rem', textAlign: 'center', borderRadius: '0.25rem' }}>Cards</div>
                  <div style={{ flex: 1, background: '#dbeafe', color: '#1e40af', padding: '0.5rem', textAlign: 'center', borderRadius: '0.25rem' }}>Cards</div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', flex: 1 }}>
                  <div style={{ flex: 2, background: '#fce7f3', color: '#9d174d', padding: '2rem 0', textAlign: 'center', borderRadius: '0.25rem' }}>Charts</div>
                  <div style={{ flex: 1, background: '#fef3c7', color: '#b45309', padding: '2rem 0', textAlign: 'center', borderRadius: '0.25rem' }}>AI Insights</div>
                </div>

                <div style={{ background: '#f3e8ff', color: '#6b21a8', padding: '1.5rem', textAlign: 'center', borderRadius: '0.25rem' }}>Data Table</div>
              </div>
            </div>

            <div style={{ background: '#e2e8f0', padding: '0.5rem', textAlign: 'center', borderRadius: '0.25rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>Footer</div>
          </div>

        </div>

      </div>
    </div>
  );
}
