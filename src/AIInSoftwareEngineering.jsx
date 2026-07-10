import React, { useState } from 'react';
import { 
  ArrowLeft, Brain, Code, Bug, Activity, Layers, MessageSquare, Zap
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function AIInSoftwareEngineering({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const tools = [
    {
      id: 1,
      title: 'AI Code Assistants',
      subtitle: 'कोडिंग में मदद',
      icon: Code,
      color: '#10b981',
      items: [
        'GitHub Copilot, Tabnine जैसे टूल्स जो कोड लिखते समय अगली लाइन का सुझाव देते हैं।',
        'डेवलपर्स के काम करने की स्पीड कई गुना बढ़ जाती है।',
        'यह आपके लिखे हुए कोड को समझकर खुद ही कोड लिख सकता है।'
      ]
    },
    {
      id: 2,
      title: 'Automated Code Review',
      subtitle: 'कोड की जाँच',
      icon: Bug,
      color: '#3b82f6',
      items: [
        'AI टूल्स जैसे DeepCode या SonarQube कोड में गलतियाँ ढूँढते हैं।',
        'यह इंसानों से भी पहले बता देता है कि कोड में सिक्योरिटी की कमी है या नहीं।',
        'यह कोड को और बेहतर और साफ़ बनाने के सुझाव देता है।'
      ]
    },
    {
      id: 3,
      title: 'AI in Testing',
      subtitle: 'स्मार्ट टेस्टिंग',
      icon: Activity,
      color: '#f59e0b',
      items: [
        'AI खुद समझ जाता है कि कोड में कहाँ बग (Bug) हो सकता है और वहीं टेस्ट करता है।',
        'यह ऑटोमैटिक रूप से टेस्ट केस (Test Cases) भी जेनरेट कर सकता है।',
        'Mabl और Testim जैसे टूल्स AI का इस्तेमाल करके वेबसाइट्स टेस्ट करते हैं।'
      ]
    },
    {
      id: 4,
      title: 'Predictive Analytics',
      subtitle: 'भविष्यवाणी',
      icon: Layers,
      color: '#8b5cf6',
      items: [
        'AI पुराने प्रोजेक्ट्स के डेटा को देखकर बताता है कि नया प्रोजेक्ट कितने दिन में पूरा होगा।',
        'यह यह भी बता सकता है कि प्रोजेक्ट के फेल होने का कितना रिस्क है।',
        'इससे मैनेजर्स को सही निर्णय लेने में मदद मिलती है।'
      ]
    },
    {
      id: 5,
      title: 'AI Chatbots for Support',
      subtitle: 'यूज़र हेल्प',
      icon: MessageSquare,
      color: '#ec4899',
      items: [
        'सॉफ्टवेयर के अंदर ही AI चैटबॉट्स होते हैं (जैसे ChatGPT)।',
        'अगर यूज़र को सॉफ्टवेयर चलाने में कोई दिक्कत आ रही है, तो चैटबॉट तुरंत मदद करता है।',
        'इससे कस्टमर सपोर्ट टीम का बहुत सारा काम कम हो जाता है।'
      ]
    },
    {
      id: 6,
      title: 'Generative AI for UI',
      subtitle: 'डिज़ाइनिंग',
      icon: Zap,
      color: '#14b8a6',
      items: [
        'Midjourney या DALL-E जैसे टूल्स से वेबसाइट के लिए इमेजेज और ग्राफिक्स बनाए जाते हैं।',
        'कुछ नए AI टूल्स सिर्फ टेक्स्ट (Prompt) पढ़कर पूरी वेबसाइट का डिज़ाइन (HTML/CSS) बना देते हैं।',
        'v0 (Vercel) इसका एक बेहतरीन उदाहरण है।'
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
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#10b981'; e.currentTarget.style.color = '#059669'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; }}
        >
          <ArrowLeft size={18} /> Back to Advanced SDLC
        </button>
        <div>
          <h2 style={{ margin: '0', fontSize: '1.75rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Brain size={28} color="#10b981" />
            एआई का इस्तेमाल (AI in Software Engineering)
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            कोडिंग, टेस्टिंग, और ऑपरेशन्स में AI टूल्स का प्रयोग करके काम को तेज़ और स्मार्ट बनाना।
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
        {tools.map(box => {
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
