import React, { useState } from 'react';
import { 
  ArrowLeft, CheckSquare, Search, Activity, Cpu, Code, ShieldCheck, Layers, GitMerge, FileText
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function TestingTypes({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const models = [
    {
      id: 1,
      title: 'Unit Testing (यूनिट टेस्टिंग)',
      subtitle: 'Code Level Testing',
      icon: Code,
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
      icon: CheckSquare,
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
      icon: GitMerge,
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
      icon: ShieldCheck,
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
            <FileText size={28} color="#f59e0b" />
            टेस्टिंग के प्रकार (Software Testing Types)
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            सॉफ्टवेयर को बग-फ्री और सुरक्षित बनाने के लिए की जाने वाली विभिन्न प्रकार की टेस्टिंग।
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
        {models.map(box => {
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
