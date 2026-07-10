import React, { useState } from 'react';
import { 
  ArrowLeft, Activity, Bell, FileText, Database, Server, Zap, Shield, Eye, Bug, Target
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function MonitoringAnalytics({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const tools = [
    {
      id: 1,
      title: 'APM (Application Performance Monitoring)',
      subtitle: 'सॉफ्टवेयर की स्पीड',
      icon: Activity,
      color: '#f59e0b',
      items: [
        'सॉफ्टवेयर कितना तेज़ चल रहा है, यह चेक करना।',
        'अगर कोई पेज लोड होने में 2 सेकंड से ज़्यादा ले रहा है, तो सिस्टम अलर्ट भेज देता है।',
        'Tools: New Relic, Datadog, AppDynamics'
      ]
    },
    {
      id: 2,
      title: 'Log Management',
      subtitle: 'एरर की डायरी',
      icon: FileText,
      color: '#3b82f6',
      items: [
        'सर्वर पर जो भी होता है, वह एक फाइल (Log) में लिखा जाता है।',
        'जब कोई क्रैश होता है, तो डेवलपर इन्ही लॉग्स को पढ़कर समझते हैं कि क्या हुआ था।',
        'Tools: ELK Stack (Elasticsearch, Logstash, Kibana), Splunk'
      ]
    },
    {
      id: 3,
      title: 'Infrastructure Monitoring',
      subtitle: 'सर्वर हेल्थ',
      icon: Server,
      color: '#10b981',
      items: [
        'सर्वर का CPU, RAM, और Storage कितना भर गया है, इसकी निगरानी।',
        'ताकि सर्वर 100% फुल होकर क्रैश न हो जाए।',
        'Tools: Prometheus, Grafana, AWS CloudWatch'
      ]
    },
    {
      id: 4,
      title: 'Real User Monitoring (RUM)',
      subtitle: 'असली यूज़र का अनुभव',
      icon: Eye,
      color: '#ec4899',
      items: [
        'यह ट्रैक करता है कि असली यूज़र्स को वेबसाइट कैसी लग रही है।',
        'किस डिवाइस (Mobile/PC) पर वेबसाइट स्लो है?',
        'क्या किसी खास देश के लोगों को वेबसाइट खोलने में दिक्कत आ रही है?'
      ]
    },
    {
      id: 5,
      title: 'Alerting & Incident Management',
      subtitle: 'इमरजेंसी सायरन',
      icon: Bell,
      color: '#8b5cf6',
      items: [
        'जैसे ही कोई बड़ी दिक्कत आती है (जैसे पेमेंट फेल होना), यह टीम को जगा देता है।',
        'कॉल, SMS, या Slack/Teams के ज़रिए तुरंत नोटिफिकेशन।',
        'Tools: PagerDuty, Opsgenie'
      ]
    },
    {
      id: 6,
      title: 'Error Tracking',
      subtitle: 'बग्स का रिकॉर्ड',
      icon: Bug,
      color: '#14b8a6',
      items: [
        'यूज़र के ब्राउज़र में अगर कोई जावास्क्रिप्ट (JS) एरर आता है तो उसे पकड़ना।',
        'इससे पहले कि यूज़र शिकायत करे, डेवलपर को एरर का पता चल जाता है।',
        'Tools: Sentry, Rollbar, Bugsnag'
      ]
    }
  ];

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
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#f59e0b'; e.currentTarget.style.color = '#d97706'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; }}
        >
          <ArrowLeft size={18} /> Back to Advanced SDLC
        </button>
        <div>
          <h2 style={{ margin: '0', fontSize: '1.75rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Activity size={28} color="#f59e0b" />
            मॉनिटरिंग और लॉगिंग (Monitoring & Analytics)
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            सॉफ्टवेयर के लाइव होने के बाद उसकी सेहत (Health) और परफॉरमेंस पर नज़र रखना।
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
        {tools.map(box => {
          const Icon = box.icon || Activity;
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
                    {box.items.map((item, idx) => (
                      <div key={idx} style={{ 
                        background: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.5rem 0.75rem', 
                        borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
                        fontSize: '0.85rem', color: '#334155', fontWeight: '500'
                      }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: box.color, flexShrink: 0 }}></div>
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button style={{
                    width: '100%', padding: '0.75rem', background: box.color, color: 'white',
                    border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '0.95rem',
                    cursor: 'pointer', transition: 'opacity 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = 0.9}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = 1}
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
