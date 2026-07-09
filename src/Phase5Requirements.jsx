import React from 'react';
import { 
  ArrowLeft, CheckSquare, ShieldCheck, Activity, Target, Database, Layout, SearchCode, MonitorSmartphone, BrainCircuit, RefreshCw, FileText, PenTool, CheckCircle, Bug, ListOrdered
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function Phase5Requirements({ onBack }) {
  const reqData = [
    {
      id: 1,
      title: 'QA Planning & Requirement Testing',
      subtitle: 'योजना और आवश्यकता परीक्षण',
      icon: Target,
      color: '#3b82f6',
      items: [
        'QA Planning: Test Strategy, Test Plan, Scope, Environment, Schedule',
        'Requirement Testing: Validation, RTM, Business Rule & Acceptance Criteria Verification'
      ]
    },
    {
      id: 2,
      title: 'Functional & Unit Testing',
      subtitle: 'फंक्शन और कोड टेस्टिंग',
      icon: SearchCode,
      color: '#10b981',
      items: [
        'Functional: Login, Registration, Dashboard, Reports, Workflow, Export',
        'Unit Testing: API Methods, Service Layer, Validation, Utility Functions'
      ]
    },
    {
      id: 3,
      title: 'System & UAT Testing',
      subtitle: 'सिस्टम और यूजर टेस्टिंग',
      icon: CheckSquare,
      color: '#f59e0b',
      items: [
        'System Testing: Complete End-to-End Workflow & Business Process Testing',
        'UAT: Real Scenario Testing, Business Validation, User Feedback, Sign-off'
      ]
    },
    {
      id: 4,
      title: 'Regression & Compatibility',
      subtitle: 'पुराने फीचर्स और डिवाइस सपोर्ट',
      icon: RefreshCw,
      color: '#ec4899',
      items: [
        'Regression: Existing Features Verification, Automation Regression Suite',
        'Compatibility: Windows, Linux, Android, iOS, Chrome, Edge, Firefox'
      ]
    },
    {
      id: 5,
      title: 'Performance Testing',
      subtitle: 'रफ़्तार और लोड क्षमता',
      icon: Activity,
      color: '#8b5cf6',
      items: [
        'Parameters: Response Time, Throughput, Concurrent Users, DB & API Performance',
        'Types: Load Testing, Stress Testing, Spike Testing, Endurance Testing'
      ]
    },
    {
      id: 6,
      title: 'Security Testing',
      subtitle: 'सुरक्षा परीक्षण',
      icon: ShieldCheck,
      color: '#ef4444',
      items: [
        'Auth & Authorization Testing',
        'SQL Injection, XSS, CSRF Testing',
        'API Security & Session Management',
        'Data Encryption Verification'
      ]
    },
    {
      id: 7,
      title: 'Database & API Testing',
      subtitle: 'डेटाबेस और API जांच',
      icon: Database,
      color: '#14b8a6',
      items: [
        'Database: Data Integrity, CRUD, Stored Procedures, Backup & Recovery',
        'API: Request/Response Validation, Error Handling, Status Codes'
      ]
    },
    {
      id: 8,
      title: 'UI/UX & Data Quality Testing',
      subtitle: 'डिज़ाइन और डेटा शुद्धता',
      icon: Layout,
      color: '#f97316',
      items: [
        'UI/UX: Responsive Design, Browser Compatibility, Accessibility, Navigation',
        'Data Quality: Missing, Duplicate, Invalid Data, Consistency & Accuracy'
      ]
    },
    {
      id: 9,
      title: 'AI System Testing',
      subtitle: 'आर्टिफिशियल इंटेलिजेंस टेस्टिंग',
      icon: BrainCircuit,
      color: '#6366f1',
      items: [
        'Model Testing: Accuracy, Precision, Recall, F1 Score, Confusion Matrix',
        'AI Validation: Bias, Explainability, False Positives/Negatives, Human Review'
      ]
    },
    {
      id: 10,
      title: 'Automation & Metrics',
      subtitle: 'ऑटोमेशन और रिपोर्ट्स',
      icon: MonitorSmartphone,
      color: '#06b6d4',
      items: [
        'Automation Scope: Login, API, Regression, Smoke Testing, End-to-End Workflow',
        'Metrics: Total/Passed/Failed Tests, Defect Density, Coverage (Test/Automation)'
      ]
    }
  ];

  const tools = [
    'Selenium',
    'Postman',
    'Apache JMeter',
    'Playwright',
    'SonarQube',
    'OWASP ZAP'
  ];

  const deliverables = [
    'Test Strategy Document & Test Plan',
    'Test Cases & Test Scripts',
    'Requirement Traceability Matrix (RTM)',
    'Bug Reports & Automation Scripts',
    'Performance & Security Test Report',
    'UAT Sign-off & Final QA Certification'
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
            <CheckSquare size={28} color="#10b981" />
            Phase 5: Testing & Quality Assurance (QA)
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            सॉफ्टवेयर सही, सुरक्षित, तेज, विश्वसनीय और Bug-Free तरीके से काम करे, यह सुनिश्चित करना।
          </p>
        </div>
      </div>

      {/* Grid of Boxes */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
        {reqData.map(box => {
          const Icon = box.icon;
          return (
            <div key={box.id} style={{
              background: 'white', borderRadius: '0.75rem', padding: '1.25rem',
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{ background: `${box.color}15`, padding: '0.5rem', borderRadius: '0.5rem', color: box.color }}>
                  <Icon size={20} />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '0.95rem', color: '#0f172a', fontWeight: 'bold' }}>{box.title}</h3>
                  <p style={{ margin: '0.1rem 0 0 0', color: '#64748b', fontSize: '0.8rem' }}>{box.subtitle}</p>
                </div>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#334155', fontSize: '0.85rem', lineHeight: '1.4', flex: 1 }}>
                {box.items.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '0.3rem' }}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* QA Workflows & Diagrams */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        
        {/* Enterprise QA Process */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#3b82f615', padding: '0.75rem', borderRadius: '0.5rem', color: '#3b82f6' }}><ListOrdered size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Enterprise QA Process</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', alignItems: 'center' }}>
            {['Requirements', 'Test Planning', 'Test Case Design', 'Environment Setup', 'Execution', 'Bug Fixing', 'Retesting', 'Regression Testing', 'UAT', 'Production Release'].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <div style={{ 
                  background: idx === arr.length - 1 ? '#dcfce7' : '#f1f5f9', 
                  color: idx === arr.length - 1 ? '#166534' : '#334155', 
                  padding: '0.4rem 1.5rem', borderRadius: '0.5rem', 
                  fontWeight: 'bold', width: '80%', textAlign: 'center',
                  border: `1px solid ${idx === arr.length - 1 ? '#bbf7d0' : '#e2e8f0'}`,
                  fontSize: '0.85rem'
                }}>
                  {step}
                </div>
                {idx < arr.length - 1 && <div style={{ color: '#94a3b8', fontSize: '1.2rem', lineHeight: '0.8' }}>↓</div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bug Lifecycle Flow */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#ef444415', padding: '0.75rem', borderRadius: '0.5rem', color: '#ef4444' }}><Bug size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Defect Management (Bug Lifecycle)</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', marginTop: '2rem' }}>
            <div style={{ background: '#fee2e2', color: '#991b1b', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '60%', textAlign: 'center', border: '1px solid #fecaca' }}>New</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#fef3c7', color: '#b45309', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '60%', textAlign: 'center', border: '1px solid #fde68a' }}>Assigned</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#dbeafe', color: '#1e40af', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '60%', textAlign: 'center', border: '1px solid #bfdbfe' }}>In Progress</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#f3e8ff', color: '#6b21a8', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '60%', textAlign: 'center', border: '1px solid #e9d5ff' }}>Fixed</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#e0e7ff', color: '#3730a3', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '60%', textAlign: 'center', border: '1px solid #c7d2fe' }}>Retest</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#dcfce7', color: '#166534', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '60%', textAlign: 'center', border: '1px solid #bbf7d0' }}>Closed</div>
          </div>
        </div>
        
        {/* Integration Testing Flow */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#10b98115', padding: '0.75rem', borderRadius: '0.5rem', color: '#10b981' }}><RefreshCw size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Integration Testing Flow</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', marginTop: '3rem' }}>
            <div style={{ background: '#eff6ff', color: '#1e40af', padding: '1rem 3rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '70%', textAlign: 'center' }}>Frontend</div>
            <div style={{ color: '#94a3b8', fontSize: '1.5rem', margin: '-0.5rem 0' }}>↓</div>
            <div style={{ background: '#f5f3ff', color: '#5b21b6', padding: '1rem 3rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '70%', textAlign: 'center' }}>API Layer</div>
            <div style={{ color: '#94a3b8', fontSize: '1.5rem', margin: '-0.5rem 0' }}>↓</div>
            <div style={{ background: '#ecfdf5', color: '#065f46', padding: '1rem 3rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '70%', textAlign: 'center' }}>Backend Core</div>
            <div style={{ color: '#94a3b8', fontSize: '1.5rem', margin: '-0.5rem 0' }}>↓</div>
            <div style={{ background: '#fef2f2', color: '#991b1b', padding: '1rem 3rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '2px solid #fca5a5', width: '70%', textAlign: 'center' }}>Database</div>
          </div>
        </div>

      </div>

      {/* Lists (Deliverables & Recommended Tools) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
        
        {/* Recommended Tools */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#8b5cf615', padding: '0.75rem', borderRadius: '0.5rem', color: '#8b5cf6' }}><PenTool size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Recommended QA Tools</h3>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {tools.map((tool, idx) => (
              <span key={idx} style={{ padding: '0.5rem 1rem', background: '#f5f3ff', color: '#5b21b6', border: '1px solid #ede9fe', borderRadius: '2rem', fontSize: '0.9rem', fontWeight: 'bold' }}>
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#ec489915', padding: '0.75rem', borderRadius: '0.5rem', color: '#ec4899' }}><FileText size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>QA Deliverables</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {deliverables.map((doc, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem', background: '#fdf2f8', borderRadius: '0.5rem', border: '1px solid #fce7f3' }}>
                <CheckCircle size={18} color="#ec4899" style={{ flexShrink: 0 }} />
                <span style={{ color: '#831843', fontSize: '0.9rem', fontWeight: '500' }}>{doc}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
