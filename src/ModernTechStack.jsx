import React, { useState } from 'react';
import { ArrowLeft, Server, Database, Code, Network, LayoutTemplate, BookOpen } from 'lucide-react';
import ModuleDetail from './ModuleDetail';
import './ThaneLevelDashboard.css';

export default function ModernTechStack({ onBack }) {
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isPopupMaximized, setIsPopupMaximized] = useState(false);

  const reqData = [
    {
      id: 'frontend',
      title: 'Frontend Frameworks',
      subtitle: 'Building User Interfaces (यूज़र इंटरफ़ेस बनाना)',
      icon: LayoutTemplate,
      color: '#3b82f6',
      items: [
        'React & React DOM',
        'Next.js for Server-Side Rendering (SSR)',
        'Vue.js & Angular',
        'State Management (Redux, Zustand)',
        'Tailwind CSS & Styled Components'
      ],
      example: 'To build highly interactive, responsive, and blazing-fast user interfaces that run directly in the browser.',
      deepDive: [
        { heading: 'React vs Next.js', text: 'React is a library for building UIs, while Next.js is a framework built on top of React that adds Server-Side Rendering (SSR) and Static Site Generation (SSG) out of the box.' },
        { heading: 'State Management', text: 'Managing data (state) across multiple components using tools like Redux (for complex apps) or Context API (for simpler needs).' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Frameworks',
      subtitle: 'Server Logic (सर्वर के पीछे का लॉजिक)',
      icon: Server,
      color: '#10b981',
      items: [
        'Node.js & Express',
        'Python Django & FastAPI',
        'Java Spring Boot',
        'Go & Rust for Performance',
        'Authentication (JWT, OAuth)'
      ],
      example: 'To handle business logic, process data securely, communicate with databases, and serve APIs to frontend clients.',
      deepDive: [
        { heading: 'Node.js Architecture', text: 'Node uses an event-driven, non-blocking I/O model, making it lightweight and highly efficient for data-intensive real-time applications.' },
        { heading: 'Authentication & Security', text: 'Implementing secure logins using JSON Web Tokens (JWT) and securing endpoints with middleware.' }
      ]
    },
    {
      id: 'databases',
      title: 'Database Systems',
      subtitle: 'Storing Data (डेटा को सुरक्षित रखना)',
      icon: Database,
      color: '#f59e0b',
      items: [
        'Relational (SQL): PostgreSQL, MySQL',
        'NoSQL: MongoDB, Cassandra',
        'In-Memory / Cache: Redis, Memcached',
        'Search Engines: Elasticsearch',
        'ORMs (Prisma, TypeORM)'
      ],
      example: 'To persistently store user data, application state, and logs while ensuring fast retrieval and data integrity (ACID).',
      deepDive: [
        { heading: 'SQL vs NoSQL', text: 'SQL databases use tables and strict schemas (great for transactions), whereas NoSQL uses JSON-like documents (great for rapid development and unstructured data).' },
        { heading: 'Caching with Redis', text: 'Storing frequently accessed data in RAM using Redis so the application does not have to query the main database every time, saving milliseconds.' }
      ]
    },
    {
      id: 'apis',
      title: 'API Architectures',
      subtitle: 'Connecting Systems (सिस्टम्स को आपस में जोड़ना)',
      icon: Network,
      color: '#8b5cf6',
      items: [
        'RESTful APIs',
        'GraphQL',
        'gRPC (Protocol Buffers)',
        'WebSockets for Real-time',
        'API Gateways'
      ],
      example: 'To define clear rules for how the frontend communicates with the backend, or how different microservices talk to each other.',
      deepDive: [
        { heading: 'REST vs GraphQL', text: 'REST exposes multiple endpoints for different resources. GraphQL exposes a single endpoint and allows the client to request exactly the data it needs, avoiding over-fetching.' },
        { heading: 'WebSockets', text: 'A protocol providing full-duplex communication channels over a single TCP connection, perfect for chat apps and live stock tickers.' }
      ]
    }
  ];

  const selectedModule = reqData.find(m => m.id === selectedModuleId);

  return (
    <div className="thane-dashboard-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>

      {/* Modal Popup for Module Detail */}
      {selectedModule && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)',
          zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: isPopupMaximized ? '1rem' : '2rem'
        }}>
          <div className="animate-fade-in" style={{
            background: '#f8fafc', width: '100%',
            maxWidth: isPopupMaximized ? '98%' : '1000px',
            height: isPopupMaximized ? '96vh' : '75vh',
            overflowY: 'auto',
            borderRadius: isPopupMaximized ? '0.75rem' : '1.5rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            position: 'relative',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div style={{ position: 'absolute', top: '1rem', right: '1.5rem', display: 'flex', gap: '0.75rem', zIndex: 100 }}>
              <button
                onClick={() => setIsPopupMaximized(!isPopupMaximized)}
                style={{ background: '#e2e8f0', color: '#0f172a', border: 'none', padding: '0.5rem 1rem', borderRadius: '2rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
              >
                {isPopupMaximized ? '🗗 Restore' : '🗖 Maximize'}
              </button>
              <button
                onClick={() => { setSelectedModuleId(null); setIsPopupMaximized(false); }}
                style={{ background: '#ef4444', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '2rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
              >
                ✕ Close
              </button>
            </div>
            <ModuleDetail
              module={selectedModule}
              onBack={() => { setSelectedModuleId(null); setIsPopupMaximized(false); }}
              isMaximized={isPopupMaximized}
            />
          </div>
        </div>
      )}

      <button onClick={onBack} className="thane-back-btn" style={{ marginBottom: '1rem' }}>
        <ArrowLeft size={20} /> Back to Masterclass
      </button>

      <div className="thane-header">
        <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
          <Code size={32} color="#3b82f6" />
          Modern Tech Stack (आधुनिक टेक्नोलॉजी)
        </h2>
        <p className="thane-subtitle">Comprehensive guide to the tools, frameworks, and technologies powering today's web.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginTop: '2rem', alignItems: 'flex-start' }}>
        {reqData.map((module) => (
          <div key={module.id} style={{
            background: 'white', borderRadius: '1rem', padding: '1.5rem',
            border: '1px solid #e2e8f0', borderTop: `4px solid ${module.color}`,
            boxShadow: '0 4px 15px rgba(0,0,0,0.02)', transition: 'transform 0.3s, box-shadow 0.3s',
            display: 'flex', flexDirection: 'column'
          }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 10px 25px ${module.color}33`; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)'; }}
          >
            <div
              onClick={() => setExpandedCard(expandedCard === module.id ? null : module.id)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', background: `${module.color}15`, color: module.color, borderRadius: '0.75rem' }}>
                  <module.icon size={24} />
                </div>
                <h4 style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: '700', lineHeight: '1.3', maxWidth: '70%' }}>
                  {module.title}
                </h4>
              </div>
            </div>

            {expandedCard === module.id && (
              <div className="animate-fade-in" style={{ marginTop: '1.5rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {module.items.map((item, index) => (
                    <div key={index} style={{
                      background: '#f8fafc', border: '1px solid #e2e8f0',
                      padding: '0.5rem 0.75rem', borderRadius: '0.5rem',
                      display: 'flex', alignItems: 'center', gap: '0.5rem',
                      fontSize: '0.85rem', color: '#334155', fontWeight: '500'
                    }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: module.color, flexShrink: 0 }}></div>
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedModuleId(module.id); }}
                  style={{
                    width: '100%', padding: '0.75rem', background: module.color,
                    color: 'white', border: 'none', borderRadius: '0.5rem',
                    fontWeight: 'bold', fontSize: '0.95rem', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    boxShadow: `0 4px 10px ${module.color}66`, transition: 'opacity 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  <BookOpen size={18} /> Click to View Detailed Modules
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
