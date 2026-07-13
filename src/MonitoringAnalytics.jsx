import React, { useState } from 'react';
import { 
  ArrowLeft, Activity, Bell, FileText, Database, Server, Zap, Shield, Eye, Bug, Target, Info
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function MonitoringAnalytics({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const reqData = [
    {
      id: 1,
      title: 'APM (Application Performance Monitoring)',
      subtitle: 'सॉफ्टवेयर की स्पीड',
      icon: Activity,
      color: '#f59e0b',
      items: [
        'स्पीड चेक (Speed Tracking): सॉफ्टवेयर के अंदर का हर फंक्शन कितना तेज़ चल रहा है, यह चेक करना।',
        'स्लो डाउन अलर्ट (Slowdown Alert): अगर कोई पेज लोड होने में 2 सेकंड से ज़्यादा ले रहा है, तो सिस्टम अलर्ट भेज देता है।',
        'बॉटलनेक (Bottleneck): यह पता लगाना कि डेटाबेस स्लो है, इंटरनेट स्लो है या फिर डेवलपर का लिखा कोड स्लो है।',
        'पॉपुलर टूल्स (Tools): New Relic, Datadog, AppDynamics'
      ],
      example: 'लक्ष्य: यूज़र को लोडिंग स्पिनर (गोल-गोल घूमता हुआ आइकॉन) कभी न देखना पड़े।',
      deepDive: [
        {
          heading: 'डिस्ट्रिब्यूटेड ट्रेसिंग (Distributed Tracing)',
          content: 'जब यूज़र पेमेंट करता है, तो वो रिक्वेस्ट 5 अलग-अलग सर्वर्स से होकर जाती है। ट्रेसिंग से पता चलता है कि रिक्वेस्ट किस सर्वर पर अटक गई।'
        },
        {
          heading: 'मेमोरी लीक डिटेक्शन (Memory Leaks)',
          content: 'अगर कोड धीरे-धीरे सर्वर की पूरी रैम (RAM) भर रहा है, तो APM उसे क्रैश होने से पहले ही पकड़ लेता है।'
        }
      ]
    },
    {
      id: 2,
      title: 'Log Management',
      subtitle: 'एरर की डायरी',
      icon: FileText,
      color: '#3b82f6',
      items: [
        'लॉग्स (Logs): सर्वर पर जो भी एक्टिविटी होती है, वह एक फाइल (Log) में लाइन-बाय-लाइन लिखी जाती है।',
        'सेंट्रल स्टोर (Centralization): 100 सर्वर्स की लॉग फाइल्स को एक जगह इकठ्ठा किया जाता है ताकि ढूँढने में आसानी हो।',
        'डीबगिंग (Debugging): जब कोई क्रैश होता है, तो डेवलपर इन्ही लॉग्स को पढ़कर समझते हैं कि क्रैश से 2 सेकंड पहले क्या हुआ था।',
        'टूल्स (Tools): ELK Stack (Elasticsearch, Logstash, Kibana), Splunk'
      ],
      example: 'लक्ष्य: "सर्वर क्रैश क्यों हुआ?" इस सवाल का जवाब बिना किसी अंदाज़े के (Data-driven) देना।',
      deepDive: [
        {
          heading: 'स्ट्रक्चर्ड लॉगिंग (Structured Logging)',
          content: 'लॉग्स को साधारण इंग्लिश के बजाय JSON फॉर्मेट में लिखा जाता है, ताकि मशीन (या AI) उन्हें तेज़ी से पढ़कर एनालिसिस कर सके।'
        },
        {
          heading: 'पैटर्न डिटेक्शन (Pattern Detection)',
          content: 'अगर "Login Failed" का एरर 1 मिनट में 1000 बार आ जाये, तो सिस्टम समझ जाता है कि कोई हैक करने की कोशिश कर रहा है।'
        }
      ]
    },
    {
      id: 3,
      title: 'Infrastructure Monitoring',
      subtitle: 'सर्वर हेल्थ',
      icon: Server,
      color: '#10b981',
      items: [
        'हार्डवेयर हेल्थ (Hardware Health): सर्वर का CPU, RAM, और Hard-disk Storage कितना भर गया है, इसकी 24/7 निगरानी।',
        'नेटवर्क मॉनिटरिंग (Network): सर्वर से कितना डेटा बाहर जा रहा है और कितना अंदर आ रहा है।',
        'क्रैश रोकथाम (Crash Prevention): ताकि हार्ड-डिस्क 100% फुल होकर सर्वर अचानक से बंद न हो जाए।',
        'टूल्स (Tools): Prometheus, Grafana, AWS CloudWatch'
      ],
      example: 'लक्ष्य: सर्वर की सांसें (Vitals) चेक करते रहना ताकि वह कभी बीमार (Down) न हो।',
      deepDive: [
        {
          heading: 'प्रेडिक्टिव एनालिसिस (Predictive)',
          content: 'सिस्टम पिछले 30 दिन का डेटा देखकर बता देता है कि "आपकी हार्ड डिस्क अगले मंगलवार को फुल हो जाएगी, अभी से बढ़ा लें।"'
        },
        {
          heading: 'ऑटो-हीलिंग (Auto-Healing)',
          content: 'अगर कोई सर्वर अटक (Hang) जाता है, तो मॉनिटरिंग टूल खुद ही उसे रीस्टार्ट कर देता है, इंसान की ज़रूरत नहीं।'
        }
      ]
    },
    {
      id: 4,
      title: 'Real User Monitoring (RUM)',
      subtitle: 'असली यूज़र का अनुभव',
      icon: Eye,
      color: '#ec4899',
      items: [
        'रियल टाइम (Real-time): यह ट्रैक करता है कि वेबसाइट पर अभी मौजूद (Live) असली यूज़र्स को कैसा अनुभव मिल रहा है।',
        'डिवाइस ट्रैकिंग (Device Issues): क्या वेबसाइट iPhone पर तेज़ और Android पर स्लो चल रही है?',
        'लोकेशन (Geo-location): क्या सिर्फ भारत के लोगों को वेबसाइट खोलने में दिक्कत आ रही है जबकि अमेरिका में सही चल रही है?',
        'UI इंटरेक्शन (Clicks): यूज़र ने किस बटन पर क्लिक किया और क्या कोई बटन काम नहीं कर रहा?'
      ],
      example: 'लक्ष्य: कस्टमर केयर में शिकायत आने से पहले ही कस्टमर की परेशानी को देख लेना।',
      deepDive: [
        {
          heading: 'कोर वेब वाइटल्स (Core Web Vitals)',
          content: 'Google के SEO रूल्स के हिसाब से पेज का लोड होना, लेआउट का हिलना (Shift) आदि चेक किया जाता है।'
        },
        {
          heading: 'सेशन रिप्ले (Session Replay)',
          content: 'अगर यूज़र को कोई अजीब एरर आता है, तो डेवलपर उस यूज़र की स्क्रीन का वीडियो (Replay) देख सकता है कि उसने क्या-क्या क्लिक किया था।'
        }
      ]
    },
    {
      id: 5,
      title: 'Alerting & Incident Management',
      subtitle: 'इमरजेंसी सायरन',
      icon: Bell,
      color: '#8b5cf6',
      items: [
        'तत्काल अलर्ट (Instant Alerts): जैसे ही कोई बड़ी दिक्कत आती है (जैसे पेमेंट फेल होना शुरू हो जाना), यह सिस्टम को जगा देता है।',
        'ऑन-कॉल ड्यूटी (On-call): जो डेवलपर ड्यूटी पर है, उसे ऑटोमैटिक कॉल या SMS चला जाता है (चाहे रात के 3 क्यों न बज रहे हों)।',
        'रूटिंग (Smart Routing): अगर डेटाबेस की दिक्कत है तो Database टीम को कॉल जायेगा, UI टीम को नहीं।',
        'टूल्स (Tools): PagerDuty, Opsgenie, VictorOps'
      ],
      example: 'लक्ष्य: इमरजेंसी के समय सही इंसान को तुरंत ढूंढ कर काम पर लगाना।',
      deepDive: [
        {
          heading: 'अलर्ट फटीग (Alert Fatigue)',
          content: 'अगर दिन भर में 1000 फालतू अलर्ट्स आएंगे, तो इंजीनियर असली अलर्ट को भी इग्नोर कर देगा। इसलिए सिर्फ क्रिटिकल अलर्ट्स ही भेजे जाते हैं।'
        },
        {
          heading: 'एस्केलेशन (Escalation Matrix)',
          content: 'अगर जूनियर डेवलपर 15 मिनट तक अलर्ट का जवाब नहीं देता, तो कॉल अपने आप उसके सीनियर/मैनेजर को चला जाता है।'
        }
      ]
    },
    {
      id: 6,
      title: 'Error Tracking',
      subtitle: 'बग्स का रिकॉर्ड',
      icon: Bug,
      color: '#14b8a6',
      items: [
        'फ्रंटएंड एरर्स (UI Bugs): यूज़र के ब्राउज़र (Chrome/Safari) में अगर कोई जावास्क्रिप्ट (JS) एरर आता है तो उसे तुरंत सर्वर पर भेजना।',
        'प्रोएक्टिव (Proactive Fixes): इससे पहले कि यूज़र स्क्रीनशॉट लेकर सपोर्ट टीम को ईमेल करे, डेवलपर को कोड की लाइन के साथ एरर मिल जाता है।',
        'ग्रुपिंग (Error Grouping): अगर एक ही एरर 1 लाख यूज़र्स को आ रहा है, तो 1 लाख अलर्ट भेजने के बजाय उन्हें 1 ग्रुप में दिखा दिया जाता है।',
        'टूल्स (Tools): Sentry, Bugsnag, Rollbar'
      ],
      example: 'लक्ष्य: सॉफ्टवेयर में आने वाले हर छोटे-बड़े क्रैश का पक्का रिकॉर्ड (Evidence) रखना।',
      deepDive: [
        {
          heading: 'सोर्स मैप्स (Source Maps)',
          content: 'ब्राउज़र में चलने वाला कोड बहुत छोटा (Minified) होता है, सोर्स मैप उस छोटे कोड को वापस असली डेवलपर कोड में बदलकर एरर की लाइन बताता है।'
        },
        {
          heading: 'ब्रेडक्रम्ब्स (Breadcrumbs)',
          content: 'एरर आने से ठीक पहले यूज़र ने क्या-क्या किया था (क्लिक, टाइप, पेज चेंज) उसकी पूरी लिस्ट (जैसे हंसल और ग्रेटेल की कहानी में)।'
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
          <ArrowLeft size={18} /> Back to Monitoring & Analytics
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
          <h2 style={{ margin: '0', fontSize: '1.75rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Activity size={28} color="#f59e0b" />
            मॉनिटरिंग और लॉगिंग (Monitoring & Analytics)
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: 'var(--text-muted)' }}>
            सॉफ्टवेयर के लाइव होने के बाद उसकी सेहत (Health) और परफॉरमेंस पर नज़र रखना।
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
        {reqData.map(box => {
          const Icon = box.icon || Activity;
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
