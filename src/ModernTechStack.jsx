import React, { useState } from 'react';
import { ArrowLeft, Server, Database, Code, Shield, Network, Globe, Cloud, LayoutTemplate, Braces, Layers } from 'lucide-react';
import ModuleDetail from './ModuleDetail';
import './ThaneLevelDashboard.css';

export default function ModernTechStack({ onBack }) {
  const [selectedDetail, setSelectedDetail] = useState(null);

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
        {
          heading: 'React vs Next.js',
          text: 'React is a library for building UIs, while Next.js is a framework built on top of React that adds Server-Side Rendering (SSR) and Static Site Generation (SSG) out of the box.'
        },
        {
          heading: 'State Management',
          text: 'Managing data (state) across multiple components using tools like Redux (for complex apps) or Context API (for simpler needs).'
        }
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
        {
          heading: 'Node.js Architecture',
          text: 'Node uses an event-driven, non-blocking I/O model, making it lightweight and highly efficient for data-intensive real-time applications.'
        },
        {
          heading: 'Authentication & Security',
          text: 'Implementing secure logins using JSON Web Tokens (JWT) and securing endpoints with middleware.'
        }
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
        {
          heading: 'SQL vs NoSQL',
          text: 'SQL databases use tables and strict schemas (great for transactions), whereas NoSQL uses JSON-like documents (great for rapid development and unstructured data).'
        },
        {
          heading: 'Caching with Redis',
          text: 'Storing frequently accessed data in RAM using Redis so the application does not have to query the main database every time, saving milliseconds.'
        }
      ]
    },
    {
      id: 'apis',
      title: 'API Architectures',
      subtitle: 'Connecting Systems (सिस्टम्स को आपस में जोड़ना)',
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
        {
          heading: 'REST vs GraphQL',
          text: 'REST exposes multiple endpoints for different resources. GraphQL exposes a single endpoint and allows the client to request exactly the data it needs, avoiding over-fetching.'
        },
        {
          heading: 'WebSockets',
          text: 'A protocol providing full-duplex communication channels over a single TCP connection, perfect for chat apps and live stock tickers.'
        }
      ]
    }
  ];

  if (selectedDetail) {
    return <ModuleDetail module={selectedDetail} onBack={() => setSelectedDetail(null)} />;
  }

  return (
    <div className="thane-dashboard-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
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

      <div className="thane-projects-grid">
        {reqData.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="thane-project-card" style={{ borderTop: `4px solid ${item.color}` }}>
              <div className="thane-card-header">
                <div className="thane-card-icon" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="thane-card-title" style={{ fontSize: '1.15rem', marginBottom: '0.4rem', color: '#0f172a' }}>{item.title}</h3>
                  <div style={{ display: 'inline-block', backgroundColor: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30`, padding: '0.3rem 0.6rem', borderRadius: '0.5rem', fontSize: '0.8rem', fontWeight: '600', lineHeight: '1.3' }}>
                    {item.subtitle}
                  </div>
                </div>
              </div>
              
              <div className="thane-card-content" style={{ marginTop: '1rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {item.items.map((li, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: '#475569', lineHeight: '1.4' }}>
                      <span style={{ minWidth: '6px', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: item.color, marginTop: '0.4rem', flexShrink: 0 }}></span>
                      <span style={{ flex: 1 }}>{li}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="thane-card-footer">
                <button 
                  className="thane-view-btn" 
                  onClick={() => setSelectedDetail(item)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Layers size={18} />
                  Click to View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
