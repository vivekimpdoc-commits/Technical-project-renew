import React from 'react';
import { 
  ArrowLeft, Cloud, Server, Database, Shield, Zap, Globe
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function CloudComputing({ onBack }) {
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
