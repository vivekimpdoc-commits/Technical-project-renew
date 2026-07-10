import React, { useState } from 'react';
import { 
  ArrowLeft, Target, Users, Settings, Zap, Smartphone, Code, BrainCircuit, Shield, Network, FileText, CheckCircle, ListOrdered, FileSignature, Search
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function Phase1Requirements({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const reqData = [
    {
      id: 1,
      title: '1. Project Goals & Objectives',
      subtitle: 'प्रोजेक्ट का मुख्य उद्देश्य',
      icon: Target,
      color: '#3b82f6',
      items: [
        'AI आधारित स्मार्ट पुलिसिंग (Smart Policing) सिस्टम का निर्माण।',
        'अपराध की भविष्यवाणी और केस की जांच को फास्ट करना।',
        'पुलिस रिकॉर्ड्स और FIR का डिजिटल/सुरक्षित मैनेजमेंट।',
        'आम जनता के लिए त्वरित न्याय (Quick Justice) सुनिश्चित करना।'
      ],
      example: 'लक्ष्य: यूपी पुलिस (UP Police) के लिए एक एडवांस्ड AI इन्वेस्टिगेशन सिस्टम बनाना।'
    },
    {
      id: 2,
      title: '2. Police Department Users',
      subtitle: 'सिस्टम को चलाने वाले अधिकारी (Roles)',
      icon: Users,
      color: '#10b981',
      items: [
        'State Level Admin (DGP / IG Level)',
        'District Officers (SP / DSP Level)',
        'Thane Level (SHO / Inspector Level)',
        'Investigation Officers (IO) & Beat Constables'
      ]
    },
    {
      id: 3,
      title: '3. Functional Requirements',
      subtitle: 'कार्यात्मक आवश्यकताएँ',
      icon: Settings,
      color: '#f59e0b',
      items: [
        'Computer Application (Login/Logout, Dashboard)',
        'User Management & Search',
        'Reports, Notifications, Document Upload',
        'Approval Workflow',
        'AI Software (Prediction, Recommendation)',
        'Classification, Chatbot, OCR',
        'Speech-to-Text, Data Analysis, Anomaly Detection'
      ]
    },
    {
      id: 4,
      title: '4. Non-Functional Requirements',
      subtitle: 'गैर-कार्यात्मक आवश्यकताएँ',
      icon: Zap,
      color: '#8b5cf6',
      items: [
        'Performance & Security',
        'Scalability & Availability',
        'Reliability & Response Time',
        'Backup & Recovery',
        'Maintainability'
      ]
    },
    {
      id: 5,
      title: '5. User Requirements',
      subtitle: 'उपयोगकर्ता आवश्यकताएँ',
      icon: Smartphone,
      color: '#ec4899',
      items: [
        'User-friendly Interface',
        'Mobile Support',
        'Multi-language Support',
        'Accessibility'
      ]
    },
    {
      id: 6,
      title: '6. Technical Requirements',
      subtitle: 'तकनीकी आवश्यकताएँ',
      icon: Code,
      color: '#64748b',
      items: [
        'Frontend: HTML, CSS, JavaScript, React, Angular',
        'Backend: .NET, Java, Python, Node.js',
        'Database: SQL Server, PostgreSQL, MongoDB',
        'Cloud: Azure, AWS, Google Cloud'
      ]
    },
    {
      id: 7,
      title: '7. AI Specific Requirements',
      subtitle: 'AI के लिए विशेष आवश्यकताएँ',
      icon: BrainCircuit,
      color: '#0ea5e9',
      items: [
        'Data: Source, Quality, Volume, Labeling, Privacy',
        'Model: Accuracy, Precision, Recall, Explainability',
        'Training Frequency',
        'AI Infrastructure: GPU, Model Server, APIs'
      ]
    },
    {
      id: 8,
      title: '8. Security Requirements',
      subtitle: 'सुरक्षा आवश्यकताएँ',
      icon: Shield,
      color: '#ef4444',
      items: [
        'Authentication & RBAC',
        'Encryption & Audit Logs',
        'Multi-Factor Authentication (MFA)',
        'API Security'
      ]
    },
    {
      id: 9,
      title: '9. Integration Requirements',
      subtitle: 'एकीकरण आवश्यकताएँ',
      icon: Network,
      color: '#14b8a6',
      items: [
        'APIs & Email Service',
        'SMS & Payment Gateway',
        'Government Systems Integration',
        'Third-Party Services'
      ]
    },
    {
      id: 10,
      title: '10. Reporting Requirements',
      subtitle: 'रिपोर्टिंग आवश्यकताएँ',
      icon: FileText,
      color: '#f97316',
      items: [
        'Dashboard & Charts',
        'Analytics & Real-time Monitoring',
        'Export to PDF/Excel'
      ]
    },
    {
      id: 11,
      title: '11. Compliance Requirements',
      subtitle: 'अनुपालन आवश्यकताएँ',
      icon: CheckCircle,
      color: '#22c55e',
      items: [
        'Data Protection',
        'Government Guidelines',
        'Cyber Security Standards',
        'Audit Compliance'
      ]
    }
  ];

  const processList = [
    'Problem Identification',
    'Stakeholder Meeting',
    'Requirement Collection',
    'Requirement Analysis',
    'Feasibility Study',
    'Documentation & Approval',
    'Development Planning'
  ];

  const deliverables = [
    'Business Requirement Document (BRD)',
    'Software Requirement Specification (SRS)',
    'Use Case Document',
    'Process Flow Diagram',
    'Data Flow Diagram (DFD)',
    'Wireframes & Database Design',
    'AI Architecture Document',
    'Risk Assessment Report & Project Plan'
  ];

  return (
    <div className="thane-dashboard-container" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
      
      {/* Header with Back Button */}
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
          <ArrowLeft size={18} /> Back to Phases
        </button>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.75rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Search size={28} color="#3b82f6" />
            Phase 1: Requirements Gathering & Analysis
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>ज़रूरतों को समझना और विश्लेषण - Detailed breakdown of all requirements</p>
        </div>
      </div>

      {/* Grid of Boxes */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
        {reqData.map(box => {
          const Icon = box.icon;
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
              {/* Header (Clickable) */}
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

              {/* Expanded Content */}
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
                  {box.example && (
                    <div style={{ marginBottom: '1.5rem', padding: '0.75rem', background: '#f1f5f9', borderRadius: '0.5rem', fontSize: '0.85rem', color: '#475569', fontStyle: 'italic', borderLeft: `3px solid ${box.color}` }}>
                      {box.example}
                    </div>
                  )}
                  
                  {/* View Details Button */}
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

      {/* Bottom Sections: Process and Deliverables */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
        
        {/* Process */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#3b82f615', padding: '0.75rem', borderRadius: '0.5rem', color: '#3b82f6' }}><ListOrdered size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Requirements Gathering Process (चरण)</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {processList.map((step, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 1rem', background: '#f8fafc', borderRadius: '0.5rem', border: '1px solid #f1f5f9' }}>
                <div style={{ width: '24px', height: '24px', background: '#3b82f6', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>{idx + 1}</div>
                <span style={{ color: '#334155', fontWeight: '500' }}>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#10b98115', padding: '0.75rem', borderRadius: '0.5rem', color: '#10b981' }}><FileSignature size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Deliverables (अंतिम दस्तावेज)</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {deliverables.map((doc, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '1rem', background: '#f0fdf4', borderRadius: '0.75rem', border: '1px solid #dcfce7' }}>
                <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                <span style={{ color: '#166534', fontSize: '0.9rem', fontWeight: '500', lineHeight: '1.4' }}>{doc}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
