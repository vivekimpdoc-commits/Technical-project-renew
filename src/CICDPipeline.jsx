import React from 'react';
import { 
  ArrowLeft, GitBranch, RefreshCw, Server, CheckCircle, Rocket, ShieldCheck
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function CICDPipeline({ onBack }) {
  const models = [
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
      icon: ShieldCheck,
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

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {models.map(box => {
          const Icon = box.icon;
          return (
            <div key={box.id} style={{
              background: 'white', borderRadius: '0.75rem', padding: '1.5rem',
              border: '1px solid #e2e8f0', borderTop: `4px solid ${box.color}`,
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
              display: 'flex', flexDirection: 'column',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
              e.currentTarget.style.boxShadow = `0 10px 25px -5px ${box.color}66, 0 0 20px ${box.color}33`;
              e.currentTarget.style.borderColor = box.color;
              e.currentTarget.style.zIndex = 10;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.05)';
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.zIndex = 1;
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ background: `${box.color}15`, padding: '0.6rem', borderRadius: '0.5rem', color: box.color }}>
                  <Icon size={24} />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.05rem', color: '#0f172a', fontWeight: 'bold' }}>{box.title}</h3>
                  <p style={{ margin: '0.15rem 0 0 0', color: '#64748b', fontSize: '0.85rem' }}>{box.subtitle}</p>
                </div>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#334155', fontSize: '0.9rem', lineHeight: '1.5', flex: 1 }}>
                {box.items.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '0.4rem' }}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
