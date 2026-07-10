import React from 'react';
import { 
  ArrowLeft, Bug, LayoutTemplate, Activity, Users, ShieldAlert, Zap, Layers
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function TestingTypes({ onBack }) {
  const models = [
    {
      id: 1,
      title: 'Unit Testing (यूनिट टेस्टिंग)',
      subtitle: 'Code Level Testing',
      icon: LayoutTemplate,
      color: '#3b82f6',
      items: [
        'सॉफ्टवेयर के सबसे छोटे हिस्से (जैसे एक फंक्शन या बटन) की जाँच करना।',
        'यह आमतौर पर कोड लिखते समय डेवलपर्स द्वारा खुद किया जाता है।',
        'फायदा: शुरुआत में ही गलतियों को पकड़ने में मदद करता है।'
      ]
    },
    {
      id: 2,
      title: 'Integration Testing (इंटीग्रेशन टेस्टिंग)',
      subtitle: 'Module Connecting',
      icon: Layers,
      color: '#10b981',
      items: [
        'जब दो या अधिक हिस्सों को जोड़ा जाता है, तो यह जाँचना कि वे साथ में सही काम कर रहे हैं या नहीं।',
        'उदाहरण: लॉगिन करने के बाद डैशबोर्ड सही से खुल रहा है या नहीं।',
        'फायदा: डेटा के एक मॉड्यूल से दूसरे मॉड्यूल में जाने की जाँच होती है।'
      ]
    },
    {
      id: 3,
      title: 'System Testing (सिस्टम टेस्टिंग)',
      subtitle: 'End-to-End Testing',
      icon: Activity,
      color: '#f59e0b',
      items: [
        'पूरे सॉफ्टवेयर को एक साथ चलाकर जाँचना कि वह सभी ज़रूरतों को पूरा कर रहा है या नहीं।',
        'यह एक असल यूज़र की तरह सॉफ्टवेयर का उपयोग करके किया जाता है।',
        'फायदा: सॉफ्टवेयर की पूरी कार्यप्रणाली (Functionality) पक्की हो जाती है।'
      ]
    },
    {
      id: 4,
      title: 'UAT (User Acceptance Testing)',
      subtitle: 'Client Approval',
      icon: Users,
      color: '#ec4899',
      items: [
        'सॉफ्टवेयर लाइव (Live) करने से ठीक पहले क्लाइंट या असली यूज़र्स द्वारा की जाने वाली टेस्टिंग।',
        'इसका उद्देश्य यह पक्का करना है कि सॉफ्टवेयर बिज़नेस की ज़रूरतों को पूरा कर रहा है।',
        'फायदा: क्लाइंट को सॉफ्टवेयर पर पूरा भरोसा हो जाता है।'
      ]
    },
    {
      id: 5,
      title: 'Regression Testing (रिग्रेशन टेस्टिंग)',
      subtitle: 'Re-testing after changes',
      icon: Bug,
      color: '#8b5cf6',
      items: [
        'जब सॉफ्टवेयर में कोई नया बदलाव या अपडेट किया जाता है, तो यह जाँचना कि उससे पुराने काम करने वाले हिस्से तो ख़राब नहीं हुए।',
        'आमतौर पर इसके लिए ऑटोमेशन (Automation) टूल्स का इस्तेमाल होता है।'
      ]
    },
    {
      id: 6,
      title: 'Performance & Security Testing',
      subtitle: 'Speed & Safety',
      icon: Zap,
      color: '#14b8a6',
      items: [
        'Performance: हज़ारों लोग एक साथ सॉफ्टवेयर यूज़ करें तो क्या वह स्लो होगा या क्रैश हो जाएगा (Load/Stress Testing)।',
        'Security: हैकर्स सॉफ्टवेयर को कैसे नुकसान पहुँचा सकते हैं, इसकी जाँच करना (Vulnerability Testing)।'
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
            <ShieldAlert size={28} color="#f59e0b" />
            टेस्टिंग के प्रकार (Software Testing Types)
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            सॉफ्टवेयर को बग-फ्री और सुरक्षित बनाने के लिए की जाने वाली विभिन्न प्रकार की टेस्टिंग।
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
