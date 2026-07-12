import React, { useState } from 'react';
import { ArrowLeft, Activity, Container, Globe, Smartphone, Cloud, Layers } from 'lucide-react';
import ModuleDetail from './ModuleDetail';
import './ThaneLevelDashboard.css';

export default function ModelDeployment({ onBack }) {
  const [selectedDetail, setSelectedDetail] = useState(null);

  const reqData = [
    {
      id: 'containerization',
      title: 'Containerization (Docker)',
      subtitle: 'Packaging Models (मॉडल को पैकेज करना)',
      icon: Container,
      color: '#10b981',
      items: [
        'Docker Images for ML Models',
        'Multi-stage Docker Builds',
        'Docker Compose for ML Stacks',
        'Kubernetes (K8s) for Orchestration',
        'Helm Charts for ML Deployments'
      ],
      example: 'To package an AI model with all its dependencies into a portable container that runs identically on any server in the world.',
      deepDive: [
        {
          heading: 'Why Docker for ML?',
          text: 'ML models depend on specific Python versions, CUDA drivers, and library versions. Docker ensures the exact same environment in development, testing, and production.'
        },
        {
          heading: 'Kubernetes for ML',
          text: 'K8s auto-scales your model serving pods based on traffic. If 1000 users hit your API simultaneously, K8s spins up more replicas automatically.'
        }
      ]
    },
    {
      id: 'serving-apis',
      title: 'Model Serving APIs',
      subtitle: 'Exposing Models as APIs (API बनाकर मॉडल सर्व करना)',
      icon: Globe,
      color: '#0ea5e9',
      items: [
        'FastAPI for Model Inference',
        'TensorFlow Serving & TorchServe',
        'gRPC vs REST for ML APIs',
        'Batch Inference vs Real-time',
        'Model Caching & Optimization'
      ],
      example: 'To wrap an AI model in a high-performance web API so that any application (mobile, web, IoT) can send data and receive predictions.',
      deepDive: [
        {
          heading: 'FastAPI',
          text: 'A modern, high-performance Python framework perfect for ML APIs. It auto-generates OpenAPI docs, supports async, and is incredibly fast (on par with Node.js/Go).'
        },
        {
          heading: 'Batch vs Real-time Inference',
          text: 'Real-time: One prediction at a time (chatbot). Batch: Millions of predictions at once (overnight email classification). Choose based on latency requirements.'
        }
      ]
    },
    {
      id: 'edge-ai',
      title: 'Edge AI Deployment',
      subtitle: 'AI on Devices (डिवाइस पर AI चलाना)',
      icon: Smartphone,
      color: '#f59e0b',
      items: [
        'Model Compression (Quantization)',
        'ONNX Runtime for Cross-platform',
        'TensorFlow Lite for Mobile',
        'NVIDIA Jetson for Edge GPUs',
        'Federated Learning (Privacy-first AI)'
      ],
      example: 'To run AI models directly on phones, cameras, or IoT devices without needing an internet connection — crucial for police body cams and surveillance.',
      deepDive: [
        {
          heading: 'Model Quantization',
          text: 'Reducing model precision from 32-bit to 8-bit integers. This makes the model 4x smaller and 2-3x faster with minimal accuracy loss — essential for running on mobile devices.'
        },
        {
          heading: 'Federated Learning',
          text: 'Instead of sending sensitive data to a central server, the AI model is sent to each device. Each device trains locally, and only the learned improvements are shared back. Privacy is preserved.'
        }
      ]
    },
    {
      id: 'cicd-ml',
      title: 'CI/CD for ML (MLOps Pipeline)',
      subtitle: 'Automated Deployment (ऑटोमेटेड डिप्लॉयमेंट)',
      icon: Activity,
      color: '#8b5cf6',
      items: [
        'GitHub Actions for ML Pipelines',
        'Automated Model Testing',
        'Canary Deployments & Blue-Green',
        'Model Rollback Strategies',
        'Infrastructure as Code (Terraform)'
      ],
      example: 'To build a fully automated pipeline where pushing code triggers model retraining, testing, and deployment — with zero manual intervention.',
      deepDive: [
        {
          heading: 'Canary Deployment',
          text: 'Deploy the new model to only 5% of traffic first. If accuracy holds, gradually increase to 100%. If it degrades, automatically roll back to the old model.'
        },
        {
          heading: 'Automated Model Testing',
          text: 'Before deploying, run automated tests: Does the model meet minimum accuracy? Does it handle edge cases? Does inference latency stay under 100ms?'
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
        <ArrowLeft size={20} /> Back to MLOps
      </button>

      <div className="thane-header">
        <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
          <Activity size={32} color="#10b981" />
          Model Deployment (AI को लाइव करना)
        </h2>
        <p className="thane-subtitle">Deploying trained AI models to production — from Docker containers to edge devices.</p>
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
