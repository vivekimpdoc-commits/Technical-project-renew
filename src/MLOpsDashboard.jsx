import React, { useState } from 'react';
import { 
  Activity, Database, Cpu, BarChart3, BrainCircuit
} from 'lucide-react';
import './ThaneLevelDashboard.css';
import DataPipelineProcessing from './DataPipelineProcessing';
import ModelTrainingTuning from './ModelTrainingTuning';
import ModelDeployment from './ModelDeployment';
import MonitoringDriftAnalysis from './MonitoringDriftAnalysis';
import LLMOps from './LLMOps';

export default function MLOpsDashboard({ resetTrigger }) {
  const [selectedTopic, setSelectedTopic] = useState(null);

  React.useEffect(() => {
    setSelectedTopic(null);
  }, [resetTrigger]);

  React.useEffect(() => {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
    window.scrollTo(0, 0);
  }, [selectedTopic]);

  const topics = [
    { num: 1, id: 'data-pipeline', title: 'Data Pipeline & Processing (डेटा पाइपलाइन)', desc: 'ETL, Data Versioning, Feature Engineering, Data Quality', icon: Database, color: '#0ea5e9' },
    { num: 2, id: 'model-training', title: 'Model Training & Tuning (मॉडल ट्रेनिंग)', desc: 'GPU/TPU, Hyperparameter Tuning, Distributed Training', icon: Cpu, color: '#8b5cf6' },
    { num: 3, id: 'model-deployment', title: 'Model Deployment (AI को लाइव करना)', desc: 'Docker, FastAPI, Edge AI, Serverless Inference', icon: Activity, color: '#10b981' },
    { num: 4, id: 'monitoring-drift', title: 'Monitoring & Drift Analysis (AI की निगरानी)', desc: 'Model Drift, A/B Testing, Auto Retraining, Observability', icon: BarChart3, color: '#f59e0b' },
    { num: 5, id: 'llmops', title: 'LLMOps (ChatGPT जैसे मॉडल्स)', desc: 'RAG, Vector DB, Prompt Engineering, Fine-tuning LLMs', icon: BrainCircuit, color: '#ec4899' }
  ];

  if (selectedTopic === 1) return <DataPipelineProcessing onBack={() => setSelectedTopic(null)} />;
  if (selectedTopic === 2) return <ModelTrainingTuning onBack={() => setSelectedTopic(null)} />;
  if (selectedTopic === 3) return <ModelDeployment onBack={() => setSelectedTopic(null)} />;
  if (selectedTopic === 4) return <MonitoringDriftAnalysis onBack={() => setSelectedTopic(null)} />;
  if (selectedTopic === 5) return <LLMOps onBack={() => setSelectedTopic(null)} />;

  return (
    <div className="thane-dashboard-container" style={{ width: '100%' }}>
      <div className="thane-header">
        <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
          <Activity size={32} color="#8b5cf6" />
          AI Operations (MLOps)
        </h2>
        <p className="thane-subtitle">End-to-end Machine Learning lifecycle — from data pipelines to production deployment & monitoring</p>
      </div>

      <div style={{ padding: '2rem', background: 'white', borderRadius: '1rem', border: '1px solid #e2e8f0', marginTop: '2rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <h3 style={{ margin: '0 0 1.5rem 0', color: '#0f172a', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Activity size={28} color="#8b5cf6" />
          Choose an MLOps Module (मॉड्यूल चुनें)
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {topics.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                onClick={() => setSelectedTopic(step.num)}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: '1.25rem', padding: '1.75rem',
                  background: '#f8fafc', borderRadius: '1rem', border: '1px solid #e2e8f0',
                  borderLeft: `4px solid ${step.color}`, cursor: 'pointer',
                  transition: 'all 0.2s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = `0 10px 25px -5px ${step.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  background: `${step.color}15`, color: step.color,
                  width: '48px', height: '48px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Icon size={24} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '1.15rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {step.title}
                    <span style={{ fontSize: '0.7rem', background: `${step.color}22`, color: step.color, padding: '0.15rem 0.6rem', borderRadius: '1rem', whiteSpace: 'nowrap' }}>Click to View</span>
                  </h4>
                  <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
