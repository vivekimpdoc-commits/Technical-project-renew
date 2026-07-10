import React, { useState } from 'react';
import { 
  ArrowLeft, Cloud, Server, Database, Shield, Lock, Network, Maximize, Activity
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function CloudComputing({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const models = [
    {
      id: 1,
      title: 'IaaS (Infrastructure as a Service)',
      subtitle: 'सर्वर और स्टोरेज',
      icon: Server,
      color: '#3b82f6',
      items: [
        'आपको खुद का फिजिकल सर्वर खरीदने की ज़रूरत नहीं है।',
        'Amazon Web Services (AWS) या Google Cloud से किराये पर सर्वर ले सकते हैं।',
        'इसमें आपको पूरा कंट्रोल मिलता है।'
      ]
    },
    {
      id: 2,
      title: 'PaaS (Platform as a Service)',
      subtitle: 'डेवलपमेंट प्लेटफार्म',
      icon: Database,
      color: '#10b981',
      items: [
        'इसमें सर्वर और नेटवर्क को मैनेज करने की टेंशन नहीं होती।',
        'डेवलपर्स सीधा अपना कोड डालते हैं और एप्लीकेशन चलने लगती है।',
        'उदाहरण: Heroku, AWS Elastic Beanstalk'
      ]
    },
    {
      id: 3,
      title: 'SaaS (Software as a Service)',
      subtitle: 'रेडीमेड सॉफ्टवेयर',
      icon: Globe,
      color: '#f59e0b',
      items: [
        'आपको कोई सॉफ्टवेयर इंस्टॉल करने की ज़रूरत नहीं होती।',
        'सब कुछ इंटरनेट (ब्राउज़र) के ज़रिए चलता है।',
        'उदाहरण: Gmail, Google Docs, Canva'
      ]
    },
    {
      id: 4,
      title: 'Cloud Security',
      subtitle: 'डेटा सुरक्षा',
      icon: Shield,
      color: '#ec4899',
      items: [
        'क्लाउड पर रखे डेटा को हैकर्स से बचाना।',
        'End-to-End Encryption और Identity Access Management (IAM) का उपयोग।',
        'बैकअप (Backup) और रिकवरी (Recovery) सिस्टम लागू करना।'
      ]
    },
    {
      id: 5,
      title: 'Scalability',
      subtitle: 'ऑटोमैटिक रिसोर्स बढ़ाना',
      icon: Zap,
      color: '#8b5cf6',
      items: [
        'अगर वेबसाइट पर अचानक बहुत सारे लोग आ जाएं, तो क्लाउड खुद ही सर्वर की पावर बढ़ा देता है।',
        'और जब लोग कम हो जाएं, तो पावर कम कर देता है (ताकि पैसे बचें)।',
        'इसे Auto-Scaling कहते हैं।'
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
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#0ea5e9'; e.currentTarget.style.color = '#0284c7'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; }}
        >
          <ArrowLeft size={18} /> Back to Advanced SDLC
        </button>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.75rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Cloud size={28} color="#0ea5e9" />
            क्लाउड कंप्यूटिंग (Cloud Computing)
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            AWS, Azure, और Google Cloud जैसे प्लेटफार्म्स पर सॉफ्टवेयर को होस्ट और मैनेज करना।
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
        {models.map(box => {
          const Icon = box.icon || Cloud;
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
