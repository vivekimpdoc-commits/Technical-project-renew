import React, { useState } from 'react';
import { ArrowLeft, Network, Server, Database, Cloud, DatabaseZap, Lock, Layers } from 'lucide-react';
import ModuleDetail from './ModuleDetail';
import './ThaneLevelDashboard.css';

export default function SystemDesign({ onBack }) {
  const [selectedDetail, setSelectedDetail] = useState(null);

  const reqData = [
    {
      id: 'scaling',
      title: 'Scaling Strategies',
      subtitle: 'Handling Traffic (ट्रैफिक संभालना)',
      icon: Network,
      color: '#3b82f6',
      items: [
        'Vertical Scaling (Scale Up)',
        'Horizontal Scaling (Scale Out)',
        'Stateless Architecture',
        'Load Balancing (Nginx, HAProxy)',
        'Auto-scaling Groups'
      ],
      example: 'To ensure your application doesn\'t crash when it goes from 100 users to 1,000,000 users overnight.',
      deepDive: [
        {
          heading: 'Vertical vs Horizontal Scaling',
          text: 'Vertical scaling means buying a bigger, more powerful server (adding RAM/CPU). Horizontal scaling means adding more servers to share the load. Horizontal is preferred for massive scale.'
        },
        {
          heading: 'Load Balancing',
          text: 'A load balancer sits in front of your servers and routes incoming traffic to the server that is least busy, preventing any single server from being overwhelmed.'
        }
      ]
    },
    {
      id: 'caching',
      title: 'Caching Mechanisms',
      subtitle: 'Speeding Up Responses (स्पीड बढ़ाना)',
      icon: DatabaseZap,
      color: '#10b981',
      items: [
        'Client-Side Caching (Browser)',
        'CDN (Content Delivery Network)',
        'Web Server Caching',
        'Database Caching (Redis, Memcached)',
        'Cache Invalidation Strategies'
      ],
      example: 'To deliver data to the user in milliseconds instead of seconds by storing frequently accessed data in fast memory.',
      deepDive: [
        {
          heading: 'What is a CDN?',
          text: 'A CDN caches static assets (images, CSS, JS) on servers distributed globally. If a user in India requests an image, it\'s served from an Indian server, not a US server.'
        },
        {
          heading: 'Redis Caching',
          text: 'Redis stores database query results in RAM. If the same query is requested again, the backend fetches it from Redis (milliseconds) instead of recalculating the SQL query (seconds).'
        }
      ]
    },
    {
      id: 'microservices',
      title: 'Microservices Architecture',
      subtitle: 'Splitting the App (ऐप को छोटे हिस्सों में बाँटना)',
      icon: Server,
      color: '#f59e0b',
      items: [
        'Monolith vs Microservices',
        'Service Discovery & API Gateway',
        'Inter-service Communication (gRPC)',
        'Independent Deployments',
        'Containerization (Docker)'
      ],
      example: 'To allow large engineering teams to work on different parts of an application independently without breaking the entire system.',
      deepDive: [
        {
          heading: 'The Monolith Problem',
          text: 'In a monolith, all code is in one repository. A bug in the billing module can crash the entire application (including the login module).'
        },
        {
          heading: 'The Microservice Solution',
          text: 'Billing and Login become separate mini-applications running on different servers. If Billing crashes, Login still works perfectly.'
        }
      ]
    },
    {
      id: 'databases',
      title: 'Database Design at Scale',
      subtitle: 'Managing Big Data (बड़ा डेटा संभालना)',
      icon: Database,
      color: '#8b5cf6',
      items: [
        'CAP Theorem',
        'Read Replicas & Primary-Secondary',
        'Database Sharding & Partitioning',
        'Eventual Consistency',
        'Data Warehouses (Snowflake, BigQuery)'
      ],
      example: 'To store terabytes of data efficiently and query it instantly across distributed systems.',
      deepDive: [
        {
          heading: 'Read Replicas',
          text: 'Since most apps have 10x more reads than writes, we create copies of the database (Read Replicas). The main DB handles writes, and replicas handle reads.'
        },
        {
          heading: 'Database Sharding',
          text: 'When a database gets too big for one machine, we shard it. E.g., Users A-M go to Server 1, Users N-Z go to Server 2.'
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
          <Network size={32} color="#8b5cf6" />
          System Design (सिस्टम डिज़ाइन)
        </h2>
        <p className="thane-subtitle">Architecting applications capable of handling millions of users and terabytes of data.</p>
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
