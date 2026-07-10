import React, { useState } from 'react';
import { 
  ArrowLeft, RefreshCw, GitBranch, Terminal, Server, Rocket, Activity, CheckCircle, Shield, GitCommit, FileCode
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function CICDPipeline({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);

  const stages = [
    {
      id: 1,
      title: 'Source Code & Version Control',
      subtitle: 'Git / GitHub / GitLab',
      icon: GitBranch,
      color: '#3b82f6',
      items: [
        'डेवलपर्स अपना कोड लिखकर एक सेंट्रल रिपॉजिटरी (Repository) में सेव करते हैं।',
        'इससे यह ट्रैक रहता है कि किसने, कब, और क्या कोड बदला है।',
        'यह पाइपलाइन का सबसे पहला स्टेप है।'
      ]
    },
    {
      id: 2,
      title: 'Continuous Integration (CI)',
      subtitle: 'Build & Merge',
      icon: RefreshCw,
      color: '#10b981',
      items: [
        'जब भी कोई नया कोड सर्वर पर आता है, तो एक ऑटोमैटिक प्रोसेस (Build) शुरू होता है।',
        'यह चेक करता है कि नया कोड पुराने कोड के साथ सही से मिल (Merge) रहा है या नहीं।',
        'Tools: Jenkins, GitHub Actions, GitLab CI'
      ]
    },
    {
      id: 3,
      title: 'Automated Testing',
      subtitle: 'Code Validation',
      icon: CheckCircle,
      color: '#f59e0b',
      items: [
        'सॉफ्टवेयर को लाइव करने से पहले ऑटोमैटिक तरीके से इसकी टेस्टिंग की जाती है।',
        'यह सुनिश्चित करता है कि नए कोड से पुराने फीचर्स ख़राब नहीं हुए हैं (Regression Testing)।',
        'अगर टेस्ट फेल होता है, तो डेवलपर को तुरंत ईमेल या मैसेज चला जाता है।'
      ]
    },
    {
      id: 4,
      title: 'Continuous Delivery (CD)',
      subtitle: 'Ready for Release',
      icon: Shield,
      color: '#ec4899',
      items: [
        'अगर टेस्टिंग पास हो जाती है, तो कोड को रिलीज़ (Release) के लिए तैयार कर लिया जाता है।',
        'इसे एक टेस्टिंग एनवायरनमेंट (Staging) पर डिप्लॉय किया जाता है जहाँ मैनुअल टेस्टिंग की जा सके।',
        'क्लाइंट इसे चेक करके अप्रूवल दे सकता है।'
      ]
    },
    {
      id: 5,
      title: 'Continuous Deployment (CD)',
      subtitle: 'Auto-Live to Production',
      icon: Rocket,
      color: '#8b5cf6',
      items: [
        'बिना किसी इंसान की दखल के, पास हुए कोड को सीधा असली सर्वर (Production) पर लाइव कर दिया जाता है।',
        'इसमें रिस्क थोड़ा ज़्यादा होता है, लेकिन डिलीवरी बहुत तेज़ (दिन में कई बार) होती है।',
        'Netflix और Amazon जैसी कंपनियाँ इसी का इस्तेमाल करती हैं।'
      ]
    },
    {
      id: 6,
      title: 'Monitoring & Feedback',
      subtitle: 'Post-Deployment',
      icon: Server,
      color: '#14b8a6',
      items: [
        'सॉफ्टवेयर लाइव होने के बाद उसकी स्पीड, एरर्स, और सर्वर लोड को मॉनिटर (Monitor) किया जाता है।',
        'अगर कोई दिक्कत आती है, तो उसे तुरंत ठीक करके फिर से पाइपलाइन में डाल दिया जाता है।',
        'Tools: Prometheus, Grafana, Datadog'
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
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.color = '#2563eb'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; }}
        >
          <ArrowLeft size={18} /> Back to SDLC
        </button>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.75rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <RefreshCw size={28} color="#10b981" />
            सीआई/सीडी पाइपलाइन (CI/CD Pipeline)
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            कोडिंग से लेकर सॉफ्टवेयर के लाइव (Live) होने तक की पूरी प्रक्रिया का ऑटोमेशन।
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
        {stages.map(box => {
          const Icon = box.icon || CheckCircle;
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
