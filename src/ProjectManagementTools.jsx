import React, { useState } from 'react';
import { 
  ArrowLeft, Layout, CalendarDays, CheckSquare, MessageSquare, Clock, BarChart2, FileText, Target, Info
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function ProjectManagementTools({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const reqData = [
    {
      id: 1,
      title: 'Jira Software',
      subtitle: 'Agile Project Management',
      icon: CheckSquare,
      color: '#3b82f6',
      items: [
        'पॉपुलर टूल (Popularity): सॉफ्टवेयर डेवलपमेंट टीमों (खासकर Agile/Scrum) के लिए दुनिया का सबसे लोकप्रिय टूल।',
        'टास्क ब्रेकिंग (Issue Tracking): इसमें बड़े काम (Epics) को छोटे-छोटे हिस्सों (Tickets/Stories) में बांटा जाता है।',
        'टीम वर्क (Team Sync): डेवलपर्स, टेस्टर्स और मैनेजर्स सब एक ही जगह अपना काम अपडेट करते हैं।',
        'प्रोग्रेस (Progress): इससे मैनेजर को साफ पता चलता है कि कौन क्या काम कर रहा है और प्रोजेक्ट कितना पूरा हुआ।'
      ],
      example: 'लक्ष्य: हज़ारों डेवलपर्स की टीम को एक साथ जोड़कर रखना ताकि कोई भी काम छूटे नहीं।',
      deepDive: [
        {
          heading: 'स्प्रिंट प्लानिंग (Sprint Planning)',
          content: 'Jira में बैकलाग (Backlog) से काम उठाकर 2 हफ्ते के स्प्रिंट (Sprint) में डाला जाता है और हर टास्क को पॉइंट्स (Story points) दिए जाते हैं।'
        },
        {
          heading: 'वर्कफ्लो (Custom Workflows)',
          content: 'इसमें कस्टम रूल बनाये जा सकते हैं, जैसे: "जब तक QA टेस्ट पास न कर दे, तब तक टिकट को \'Done\' नहीं किया जा सकता।"'
        }
      ]
    },
    {
      id: 2,
      title: 'Trello / Asana',
      subtitle: 'Task Tracking Boards',
      icon: Layout,
      color: '#10b981',
      items: [
        'कानबान बोर्ड (Kanban Board): यह Kanban के सिद्धांत पर काम करते हैं (जैसे दीवार पर चिपके हुए स्टिकी नोट्स)।',
        'सिंपल कॉलम्स (Columns): इसमें To-Do, In Progress, और Done जैसे आसान कॉलम होते हैं।',
        'ड्रैग-एंड-ड्रॉप (Drag & Drop): टास्क को कार्ड्स (Cards) के रूप में एक कॉलम से दूसरे में आसानी से खिसकाया जा सकता है।',
        'उपयोग (Use Case): यह छोटे प्रोजेक्ट्स और मार्केटिंग या डिज़ाइन जैसी नॉन-टेक्निकल टीमों के लिए बहुत आसान है।'
      ],
      example: 'लक्ष्य: काम को इतना विज़ुअल (Visual) बना देना कि कोई भी देखकर समझ जाए कि काम कहाँ अटका है।',
      deepDive: [
        {
          heading: 'पावर-अप्स (Power-Ups)',
          content: 'Trello में अन्य एप्स (जैसे Slack या Google Drive) को सीधा जोड़ा जा सकता है ताकि एक कार्ड में सारी जानकारी मिल जाए।'
        },
        {
          heading: 'ऑटोमेशन (Butler)',
          content: 'जैसे ही कोई टास्क \'Done\' में जाता है, सिस्टम अपने आप मैनेजर को ईमेल भेज देता है।'
        }
      ]
    },
    {
      id: 3,
      title: 'Confluence / Notion',
      subtitle: 'Documentation & Knowledge Base',
      icon: FileText,
      color: '#f59e0b',
      items: [
        'डॉक्यूमेंटेशन (Docs): यहाँ सॉफ्टवेयर के सारे डिज़ाइन, मीटिंग नोट्स, और नियम (Rules) रखे जाते हैं।',
        'नॉलेज बेस (Knowledge Base): टीम का कोई भी नया सदस्य आकर पुरानी जानकारी पढ़ सकता है और काम सीख सकता है।',
        'प्रोजेक्ट विकी (Project Wiki): इसे प्रोजेक्ट का "विकिपीडिया" (Wikipedia) कहा जा सकता है जहाँ सब कुछ लिखा होता है।'
      ],
      example: 'लक्ष्य: अगर कोई पुराना डेवलपर कंपनी छोड़ दे, तो उसका ज्ञान और कोड की जानकारी कंपनी में ही रहे।',
      deepDive: [
        {
          heading: 'मैक्रोज़ और टेम्प्लेट्स (Macros)',
          content: 'इसमें रेडीमेड टेम्प्लेट्स होते हैं। अगर कोई सर्वर क्रैश होता है, तो उसका रिपोर्ट बनाने के लिए सीधा टेम्पलेट इस्तेमाल किया जाता है।'
        },
        {
          heading: 'वर्ज़न हिस्ट्री (Version History)',
          content: 'अगर कोई गलती से किसी पेज का टेक्स्ट मिटा दे, तो 5 साल पुराना वर्ज़न भी एक क्लिक में वापस लाया जा सकता है।'
        }
      ]
    },
    {
      id: 4,
      title: 'Slack / Microsoft Teams',
      subtitle: 'Team Communication',
      icon: MessageSquare,
      color: '#ec4899',
      items: [
        'त्वरित चैट (Instant Chat): डेवलपर्स, डिज़ाइनर्स और पूरी टीम के बीच तुरंत बातचीत के लिए।',
        'चैनल्स (Channels): काम के हिसाब से अलग-अलग ग्रुप बनाए जा सकते हैं (जैसे #frontend, #backend, #alerts)।',
        'इंटीग्रेशन (App Integrations): अगर सर्वर डाउन होता है (Datadog) या कोड पास/फेल होता है (GitHub), तो इसमें अपने-आप मैसेज आ जाता है।'
      ],
      example: 'लक्ष्य: ईमेल के लम्बे इंतज़ार को ख़त्म करके टीम के बीच फैसले (Decisions) लेने की स्पीड बढ़ाना।',
      deepDive: [
        {
          heading: 'थ्रेड्स और मेंशंस (Threads & @Mentions)',
          content: 'हज़ारों मैसेजेस के बीच किसी खास बात पर चर्चा करने के लिए थ्रेड्स और किसी खास व्यक्ति को बुलाने के लिए @ इस्तेमाल होता है।'
        },
        {
          heading: 'कस्टम बॉट्स (Custom Bots)',
          content: 'डेवलपर्स खुद के चैटबॉट बना सकते हैं। जैसे Slack में टाइप करें "/deploy" और सर्वर खुद-ब-खुद लाइव हो जाएगा।'
        }
      ]
    },
    {
      id: 5,
      title: 'Time & Resource Tracking',
      subtitle: 'Timesheets & Workload',
      icon: Clock,
      color: '#8b5cf6',
      items: [
        'टाइम ट्रैकिंग (Time Track): किस व्यक्ति ने किस टास्क पर कितने घंटे काम किया, इसका पक्का रिकॉर्ड (Timesheet) रखना।',
        'वर्कलोड (Workload Balance): यह सुनिश्चित करना कि किसी एक व्यक्ति पर काम का बहुत ज़्यादा बोझ न हो और दूसरा खाली न बैठा हो।',
        'बिलिंग (Client Billing): अगर क्लाइंट से घंटों के हिसाब से पैसे लेने हैं, तो इसके लिए यह बहुत ज़रूरी है।'
      ],
      example: 'लक्ष्य: टीम की एनर्जी और कंपनी के बजट का एकदम सटीक हिसाब रखना।',
      deepDive: [
        {
          heading: 'कैपेसिटी प्लानिंग (Capacity Plan)',
          content: 'मैनेजर पहले ही देख सकता है कि अगले हफ्ते टीम के कितने लोग छुट्टी पर हैं और उसी हिसाब से काम लेता है।'
        },
        {
          heading: 'हबस्टाफ / टॉगल (Toggl/Hubstaff)',
          content: 'ये टूल्स बैकग्राउंड में चलते रहते हैं और ऑटोमैटिक स्क्रीनशॉट लेकर पक्का करते हैं कि डेवलपर सच में काम कर रहा है।'
        }
      ]
    },
    {
      id: 6,
      title: 'Reporting & Analytics',
      subtitle: 'Project Dashboards',
      icon: BarChart2,
      color: '#14b8a6',
      items: [
        'डैशबोर्ड (Dashboards): मैनेजर्स के लिए हर चीज़ को रंगीन ग्राफ्स और चार्ट्स में देखना।',
        'वेलोसिटी (Velocity): इससे पता चलता है कि टीम की स्पीड (काम ख़त्म करने की गति) क्या है और क्या प्रोजेक्ट समय पर पूरा होगा?',
        'सुधार (Course Correction): अगर ग्राफ नीचे जा रहा है, तो समय रहते टीम में बदलाव किए जा सकते हैं।'
      ],
      example: 'लक्ष्य: करोड़ों के प्रोजेक्ट की सेहत (Health) को एक नज़र (One Glance) में समझना।',
      deepDive: [
        {
          heading: 'बर्नडाउन चार्ट (Burndown Chart)',
          content: 'यह चार्ट दिखाता है कि कितना काम बचा है और कितना समय बचा है। अगर लाइन समय से ऊपर जा रही है, मतलब प्रोजेक्ट लेट है।'
        },
        {
          heading: 'बग ट्रैकिंग (Bug Metrics)',
          content: 'यह एनालिटिक्स बताता है कि किस डेवलपर का कोड सबसे ज्यादा बार फेल होता है या किस हिस्से में सबसे ज्यादा बग्स आ रहे हैं।'
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
          <ArrowLeft size={18} /> Back to Project Management Tools
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
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.color = '#2563eb'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; }}
        >
          <ArrowLeft size={18} /> Back to SDLC
        </button>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.75rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <CalendarDays size={28} color="#ec4899" />
            प्रोजेक्ट मैनेजमेंट टूल्स (Project Management)
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            टीम को मैनेज करने, काम बाँटने और प्रोजेक्ट की प्रोग्रेस ट्रैक करने के तरीके।
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
        {reqData.map(box => {
          const Icon = box.icon || CheckSquare;
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
