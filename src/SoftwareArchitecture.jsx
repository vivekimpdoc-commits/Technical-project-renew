import React, { useState } from 'react';
import { 
  ArrowLeft, Layers, Server, Combine, Blocks, Network, Boxes, CloudCog
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function SoftwareArchitecture({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const models = [
    {
      id: 1,
      title: 'Monolithic Architecture',
      subtitle: 'The All-in-One Approach',
      icon: Boxes,
      color: '#3b82f6',
      items: [
        'पूरा सॉफ्टवेयर एक ही बड़े कोडबेस (Codebase) में लिखा जाता है।',
        'फ्रंटएंड, बैकएंड और डेटाबेस सब कुछ आपस में बहुत गहराई से जुड़े होते हैं।',
        'फायदे: शुरुआत में बनाने और टेस्ट करने में बहुत आसान।',
        'नुकसान: सॉफ्टवेयर बड़ा होने पर इसे अपडेट करना बहुत मुश्किल हो जाता है।'
      ]
    },
    {
      id: 2,
      title: 'Microservices Architecture',
      subtitle: 'छोटे-छोटे स्वतंत्र हिस्से',
      icon: Combine,
      color: '#10b981',
      items: [
        'सॉफ्टवेयर को छोटे-छोटे हिस्सों (Services) में बांट दिया जाता है (जैसे Login Service, Payment Service)।',
        'हर सर्विस का अपना अलग डेटाबेस और कोड होता है।',
        'फायदे: अगर Payment Service क्रैश हो जाए, तो पूरी वेबसाइट बंद नहीं होती।',
        'Amazon और Netflix इसी का इस्तेमाल करते हैं।'
      ]
    },
    {
      id: 3,
      title: 'Serverless Architecture',
      subtitle: 'No Server Management',
      icon: CloudCog,
      color: '#f59e0b',
      items: [
        'डेवलपर्स को सर्वर सेटअप या मैनेज करने की कोई ज़रूरत नहीं होती।',
        'सिर्फ कोड लिखो और क्लाउड (जैसे AWS Lambda) पर डाल दो।',
        'पैसे सिर्फ तब कटते हैं जब कोई यूज़र उस कोड को चलाता है (Pay-as-you-go)।',
        'फायदे: बहुत सस्ते और मैनेज करने में आसान।'
      ]
    },
    {
      id: 4,
      title: 'Event-Driven Architecture',
      subtitle: 'रिएक्टिव सिस्टम',
      icon: Network,
      color: '#ec4899',
      items: [
        'सिस्टम "इवेंट्स" (Events) पर काम करता है। (जैसे यूज़र ने बटन दबाया = एक इवेंट)।',
        'जब कोई इवेंट होता है, तो उससे जुड़े सभी सिस्टम अपने आप चालू हो जाते हैं।',
        'ई-कॉमर्स और रियल-टाइम ऐप्स (जैसे Uber) में बहुत काम आता है।'
      ]
    },
    {
      id: 5,
      title: 'API-First Design',
      subtitle: 'Connecting Everything',
      icon: Blocks,
      color: '#8b5cf6',
      items: [
        'यूज़र इंटरफ़ेस (UI) बनाने से पहले API डिज़ाइन की जाती है।',
        'इससे मोबाइल ऐप, वेबसाइट और स्मार्टवॉच सभी एक ही बैकएंड से आसानी से जुड़ सकते हैं।',
        'डेवलपर्स को बाद में बदलाव करने में आसानी होती है।'
      ]
    },
    {
      id: 6,
      title: 'Clean Architecture',
      subtitle: 'Maintainable Code',
      icon: Server,
      color: '#14b8a6',
      items: [
        'कोड को अलग-अलग लेयर्स (Layers) में लिखा जाता है (UI, Business Logic, Database)।',
        'इससे UI या डेटाबेस बदलने पर मुख्य लॉजिक को कोई फर्क नहीं पड़ता।',
        'लंबे समय तक चलने वाले प्रोजेक्ट्स के लिए सबसे बेस्ट तरीका।'
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
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#8b5cf6'; e.currentTarget.style.color = '#7c3aed'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; }}
        >
          <ArrowLeft size={18} /> Back to Advanced SDLC
        </button>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.75rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Layers size={28} color="#8b5cf6" />
            सॉफ्टवेयर आर्किटेक्चर (Software Architecture)
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            सॉफ्टवेयर को भविष्य के लिए मज़बूत, स्केलेबल और सुरक्षित बनाने के डिज़ाइन पैटर्न्स।
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
        {models.map(box => {
          const Icon = box.icon || Server;
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
