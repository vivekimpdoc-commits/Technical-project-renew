import React from 'react';
import { 
  ArrowLeft, Layout, CalendarDays, CheckSquare, MessageSquare, Clock, BarChart2, FileText
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function ProjectManagementTools({ onBack }) {
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

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {models.map(box => {
          const Icon = box.icon || CheckSquare;
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
