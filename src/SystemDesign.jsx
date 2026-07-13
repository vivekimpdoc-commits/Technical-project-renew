import React, { useState } from 'react';
import { ArrowLeft, Network, Server, Database, DatabaseZap, BookOpen } from 'lucide-react';
import ModuleDetail from './ModuleDetail';
import './ThaneLevelDashboard.css';

export default function SystemDesign({ onBack }) {
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isPopupMaximized, setIsPopupMaximized] = useState(false);

  const reqData = [
    {
      id: 'scaling', title: 'Scaling Strategies', subtitle: 'Handling Traffic (ट्रैफिक संभालना)',
      icon: Network, color: '#3b82f6',
      items: ['Vertical Scaling (Scale Up)', 'Horizontal Scaling (Scale Out)', 'Stateless Architecture', 'Load Balancing (Nginx, HAProxy)', 'Auto-scaling Groups'],
      example: 'To ensure your application doesn\'t crash when it goes from 100 users to 1,000,000 users overnight.',
      deepDive: [
        { heading: 'Vertical vs Horizontal Scaling', text: 'Vertical scaling means buying a bigger, more powerful server (adding RAM/CPU). Horizontal scaling means adding more servers to share the load. Horizontal is preferred for massive scale.' },
        { heading: 'Load Balancing', text: 'A load balancer sits in front of your servers and routes incoming traffic to the server that is least busy, preventing any single server from being overwhelmed.' }
      ]
    },
    {
      id: 'caching', title: 'Caching Mechanisms', subtitle: 'Speeding Up Responses (स्पीड बढ़ाना)',
      icon: DatabaseZap, color: '#10b981',
      items: ['Client-Side Caching (Browser)', 'CDN (Content Delivery Network)', 'Web Server Caching', 'Database Caching (Redis, Memcached)', 'Cache Invalidation Strategies'],
      example: 'To deliver data to the user in milliseconds instead of seconds by storing frequently accessed data in fast memory.',
      deepDive: [
        { heading: 'What is a CDN?', text: 'A CDN caches static assets (images, CSS, JS) on servers distributed globally. If a user in India requests an image, it\'s served from an Indian server, not a US server.' },
        { heading: 'Redis Caching', text: 'Redis stores database query results in RAM. If the same query is requested again, the backend fetches it from Redis (milliseconds) instead of recalculating the SQL query (seconds).' }
      ]
    },
    {
      id: 'microservices', title: 'Microservices Architecture', subtitle: 'Splitting the App (ऐप को छोटे हिस्सों में बाँटना)',
      icon: Server, color: '#f59e0b',
      items: ['Monolith vs Microservices', 'Service Discovery & API Gateway', 'Inter-service Communication (gRPC)', 'Independent Deployments', 'Containerization (Docker)'],
      example: 'To allow large engineering teams to work on different parts of an application independently without breaking the entire system.',
      deepDive: [
        { heading: 'The Monolith Problem', text: 'In a monolith, all code is in one repository. A bug in the billing module can crash the entire application (including the login module).' },
        { heading: 'The Microservice Solution', text: 'Billing and Login become separate mini-applications running on different servers. If Billing crashes, Login still works perfectly.' }
      ]
    },
    {
      id: 'databases', title: 'Database Design at Scale', subtitle: 'Managing Big Data (बड़ा डेटा संभालना)',
      icon: Database, color: '#8b5cf6',
      items: ['CAP Theorem', 'Read Replicas & Primary-Secondary', 'Database Sharding & Partitioning', 'Eventual Consistency', 'Data Warehouses (Snowflake, BigQuery)'],
      example: 'To store terabytes of data efficiently and query it instantly across distributed systems.',
      deepDive: [
        { heading: 'Read Replicas', text: 'Since most apps have 10x more reads than writes, we create copies of the database (Read Replicas). The main DB handles writes, and replicas handle reads.' },
        { heading: 'Database Sharding', text: 'When a database gets too big for one machine, we shard it. E.g., Users A-M go to Server 1, Users N-Z go to Server 2.' }
      ]
    }
  ];

  const selectedModule = reqData.find(m => m.id === selectedModuleId);

  return (
    <div className="thane-dashboard-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      {selectedModule && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: isPopupMaximized ? '1rem' : '2rem' }}>
          <div className="animate-fade-in" style={{ background: 'var(--icon-bg)', width: '100%', maxWidth: isPopupMaximized ? '98%' : '1000px', height: isPopupMaximized ? '96vh' : '75vh', overflowY: 'auto', borderRadius: isPopupMaximized ? '0.75rem' : '1.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', position: 'relative', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
            <div style={{ position: 'absolute', top: '1rem', right: '1.5rem', display: 'flex', gap: '0.75rem', zIndex: 100 }}>
              <button onClick={() => setIsPopupMaximized(!isPopupMaximized)} style={{ background: '#e2e8f0', color: 'var(--text-main)', border: 'none', padding: '0.5rem 1rem', borderRadius: '2rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>{isPopupMaximized ? '🗗 Restore' : '🗖 Maximize'}</button>
              <button onClick={() => { setSelectedModuleId(null); setIsPopupMaximized(false); }} style={{ background: '#ef4444', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '2rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>✕ Close</button>
            </div>
            <ModuleDetail module={selectedModule} onBack={() => { setSelectedModuleId(null); setIsPopupMaximized(false); }} isMaximized={isPopupMaximized} />
          </div>
        </div>
      )}

      <button onClick={onBack} className="thane-back-btn">
          <ArrowLeft size={20} /> Back to Masterclass
        </button>
      <div className="thane-header">
        <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}><Network size={32} color="#8b5cf6" /> System Design (सिस्टम डिज़ाइन)</h2>
        <p className="thane-subtitle">Architecting applications capable of handling millions of users and terabytes of data.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginTop: '2rem', alignItems: 'flex-start' }}>
        {reqData.map((module) => (
          <div key={module.id} style={{ background: 'var(--card-bg)', borderRadius: '1rem', padding: '1.5rem', border: '1px solid var(--card-border)', borderTop: `4px solid ${module.color}`, boxShadow: '0 4px 15px rgba(0,0,0,0.02)', transition: 'transform 0.3s, box-shadow 0.3s', display: 'flex', flexDirection: 'column' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 10px 25px ${module.color}33`; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)'; }}
          >
            <div onClick={() => setExpandedCard(expandedCard === module.id ? null : module.id)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', background: `${module.color}15`, color: module.color, borderRadius: '0.75rem' }}><module.icon size={24} /></div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: '700', lineHeight: '1.3', maxWidth: '70%' }}>{module.title}</h4>
              </div>
            </div>
            {expandedCard === module.id && (
              <div className="animate-fade-in" style={{ marginTop: '1.5rem', borderTop: '1px solid var(--card-border)', paddingTop: '1.5rem' }}>
                <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {module.items.map((item, index) => (
                    <div key={index} style={{ background: 'var(--icon-bg)', border: '1px solid var(--card-border)', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: '500' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: module.color, flexShrink: 0 }}></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <button onClick={(e) => { e.stopPropagation(); setSelectedModuleId(module.id); }} style={{ width: '100%', padding: '0.75rem', background: module.color, color: 'white', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', boxShadow: `0 4px 10px ${module.color}66`, transition: 'opacity 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                ><BookOpen size={18} /> Click to View Detailed Modules</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
