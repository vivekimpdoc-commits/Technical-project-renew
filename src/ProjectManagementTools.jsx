import React, { useState } from 'react';
import { 
  ArrowLeft, Layout, CalendarDays, CheckSquare, MessageSquare, Clock, BarChart2, FileText
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function ProjectManagementTools({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const models = [
    {
      id: 1,
      title: 'Jira Software',
      subtitle: 'Agile Project Management',
      icon: CheckSquare,
      color: '#3b82f6',
      items: [
        'सॉफ्टवेयर डेवलपमेंट टीमों (खासकर Agile/Scrum) के लिए सबसे लोकप्रिय टूल।',
        'इसमें काम को छोटे-छोटे हिस्सों (Tickets या Issues) में बांटा जाता है।',
        'डेवलपर्स, टेस्टर्स और मैनेजर्स सब एक ही जगह अपना काम अपडेट करते हैं।',
        'इससे पता चलता है कि कौन क्या काम कर रहा है और प्रोजेक्ट कितना पूरा हुआ।'
      ]
    },
    {
      id: 2,
      title: 'Trello / Asana',
      subtitle: 'Task Tracking Boards',
      icon: Layout,
      color: '#10b981',
      items: [
        'यह Kanban (कानबान) बोर्ड के सिद्धांत पर काम करते हैं।',
        'इसमें To-Do, In Progress, और Done जैसे कॉलम होते हैं।',
        'टास्क को कार्ड्स (Cards) के रूप में ड्रैग-एंड-ड्रॉप किया जा सकता है।',
        'यह छोटे प्रोजेक्ट्स और नॉन-टेक्निकल टीमों के लिए बहुत आसान है।'
      ]
    },
    {
      id: 3,
      title: 'Confluence / Notion',
      subtitle: 'Documentation & Knowledge Base',
      icon: FileText,
      color: '#f59e0b',
      items: [
        'यहाँ सॉफ्टवेयर के सारे डाक्यूमेंट्स, डिज़ाइन और मीटिंग नोट्स रखे जाते हैं।',
        'टीम का कोई भी नया सदस्य आकर पुरानी जानकारी पढ़ सकता है।',
        'इसे प्रोजेक्ट का "विकिपीडिया" (Wikipedia) कहा जा सकता है।'
      ]
    },
    {
      id: 4,
      title: 'Slack / Microsoft Teams',
      subtitle: 'Team Communication',
      icon: MessageSquare,
      color: '#ec4899',
      items: [
        'डेवलपर्स और पूरी टीम के बीच तुरंत बातचीत (Chat) के लिए।',
        'इसमें अलग-अलग चैनल (Channels) बनाए जा सकते हैं (जैसे #development, #testing, #alerts)।',
        'अगर सर्वर डाउन होता है या कोई कोड पास/फेल होता है, तो इसमें ऑटोमैटिक अलर्ट आ जाता है।'
      ]
    },
    {
      id: 5,
      title: 'Time & Resource Tracking',
      subtitle: 'Timesheets & Workload',
      icon: Clock,
      color: '#8b5cf6',
      items: [
        'किस व्यक्ति ने किस टास्क पर कितने घंटे काम किया, इसका रिकॉर्ड रखना।',
        'यह सुनिश्चित करना कि किसी एक डेवलपर पर काम का बहुत ज़्यादा बोझ (Overload) न हो।',
        'क्लाइंट को बिलिंग (Billing) करने के लिए भी यह ज़रूरी है।'
      ]
    },
    {
      id: 6,
      title: 'Reporting & Analytics',
      subtitle: 'Project Dashboards',
      icon: BarChart2,
      color: '#14b8a6',
      items: [
        'मैनेजर्स के लिए ग्राफ्स और चार्ट्स (Burndown Charts, Velocity Charts)।',
        'इससे पता चलता है कि टीम की स्पीड क्या है और क्या प्रोजेक्ट समय पर पूरा होगा?',
        'अगर प्रोजेक्ट पीछे चल रहा है तो समय रहते सुधार किए जा सकते हैं।'
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
            <CalendarDays size={28} color="#ec4899" />
            प्रोजेक्ट मैनेजमेंट टूल्स (Project Management)
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            टीम को मैनेज करने, काम बाँटने और प्रोजेक्ट की प्रोग्रेस ट्रैक करने के तरीके।
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
