import React, { useState } from 'react';
import { ArrowLeft, Activity, Globe, Smartphone, Cloud, BookOpen } from 'lucide-react';
import ModuleDetail from './ModuleDetail';
import './ThaneLevelDashboard.css';

export default function ModelDeployment({ onBack }) {
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isPopupMaximized, setIsPopupMaximized] = useState(false);

  const reqData = [
    {
      id: 'containerization', title: 'Containerization (Docker)', subtitle: 'Packaging Models (मॉडल को पैकेज करना)',
      icon: Cloud, color: '#10b981',
      items: ['Docker Images for ML Models', 'Multi-stage Docker Builds', 'Docker Compose for ML Stacks', 'Kubernetes (K8s) for Orchestration', 'Helm Charts for ML Deployments'],
      example: 'To package an AI model with all its dependencies into a portable container that runs identically on any server in the world.',
      deepDive: [
        { heading: 'Why Docker for ML?', text: 'ML models depend on specific Python versions, CUDA drivers, and library versions. Docker ensures the exact same environment in development, testing, and production.' },
        { heading: 'Kubernetes for ML', text: 'K8s auto-scales your model serving pods based on traffic. If 1000 users hit your API simultaneously, K8s spins up more replicas automatically.' }
      ]
    },
    {
      id: 'serving-apis', title: 'Model Serving APIs', subtitle: 'Exposing Models as APIs (API बनाकर मॉडल सर्व करना)',
      icon: Globe, color: '#0ea5e9',
      items: ['FastAPI for Model Inference', 'TensorFlow Serving & TorchServe', 'gRPC vs REST for ML APIs', 'Batch Inference vs Real-time', 'Model Caching & Optimization'],
      example: 'To wrap an AI model in a high-performance web API so that any application (mobile, web, IoT) can send data and receive predictions.',
      deepDive: [
        { heading: 'FastAPI', text: 'A modern, high-performance Python framework perfect for ML APIs. It auto-generates OpenAPI docs, supports async, and is incredibly fast (on par with Node.js/Go).' },
        { heading: 'Batch vs Real-time Inference', text: 'Real-time: One prediction at a time (chatbot). Batch: Millions of predictions at once (overnight email classification). Choose based on latency requirements.' }
      ]
    },
    {
      id: 'edge-ai', title: 'Edge AI Deployment', subtitle: 'AI on Devices (डिवाइस पर AI चलाना)',
      icon: Smartphone, color: '#f59e0b',
      items: ['Model Compression (Quantization)', 'ONNX Runtime for Cross-platform', 'TensorFlow Lite for Mobile', 'NVIDIA Jetson for Edge GPUs', 'Federated Learning (Privacy-first AI)'],
      example: 'To run AI models directly on phones, cameras, or IoT devices without needing an internet connection — crucial for police body cams and surveillance.',
      deepDive: [
        { heading: 'Model Quantization', text: 'Reducing model precision from 32-bit to 8-bit integers. This makes the model 4x smaller and 2-3x faster with minimal accuracy loss — essential for running on mobile devices.' },
        { heading: 'Federated Learning', text: 'Instead of sending sensitive data to a central server, the AI model is sent to each device. Each device trains locally, and only the learned improvements are shared back. Privacy is preserved.' }
      ]
    },
    {
      id: 'cicd-ml', title: 'CI/CD for ML (MLOps Pipeline)', subtitle: 'Automated Deployment (ऑटोमेटेड डिप्लॉयमेंट)',
      icon: Activity, color: '#8b5cf6',
      items: ['GitHub Actions for ML Pipelines', 'Automated Model Testing', 'Canary Deployments & Blue-Green', 'Model Rollback Strategies', 'Infrastructure as Code (Terraform)'],
      example: 'To build a fully automated pipeline where pushing code triggers model retraining, testing, and deployment — with zero manual intervention.',
      deepDive: [
        { heading: 'Canary Deployment', text: 'Deploy the new model to only 5% of traffic first. If accuracy holds, gradually increase to 100%. If it degrades, automatically roll back to the old model.' },
        { heading: 'Automated Model Testing', text: 'Before deploying, run automated tests: Does the model meet minimum accuracy? Does it handle edge cases? Does inference latency stay under 100ms?' }
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
          <ArrowLeft size={20} /> Back to MLOps
        </button>
      <div className="thane-header">
        <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}><Activity size={32} color="#10b981" /> Model Deployment (AI को लाइव करना)</h2>
        <p className="thane-subtitle">Deploying trained AI models to production — from Docker containers to edge devices.</p>
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
