import React, { useState } from 'react';
import { ArrowLeft, BarChart3, AlertTriangle, RefreshCw, Eye, BookOpen } from 'lucide-react';
import ModuleDetail from './ModuleDetail';
import './ThaneLevelDashboard.css';

export default function MonitoringDriftAnalysis({ onBack }) {
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isPopupMaximized, setIsPopupMaximized] = useState(false);

  const reqData = [
    {
      id: 'model-drift', title: 'Model Drift Detection', subtitle: 'When AI Gets Dumb (जब AI बेवकूफ बनने लगे)',
      icon: AlertTriangle, color: '#f59e0b',
      items: ['What is Data Drift & Concept Drift?', 'Statistical Tests for Drift (KS, PSI)', 'Drift Detection Tools (Evidently AI)', 'Real-world Drift Scenarios', 'Alerting & Notification Systems'],
      example: 'To detect when an AI model\'s predictions start becoming inaccurate because the real-world data has changed since training.',
      deepDive: [
        { heading: 'Data Drift vs Concept Drift', text: 'Data Drift: The input data distribution changes (e.g., more young users). Concept Drift: The relationship between input and output changes (e.g., buying patterns shift due to pandemic).' },
        { heading: 'PSI (Population Stability Index)', text: 'A statistical metric that measures how much the distribution of a variable has shifted between training and production. PSI > 0.25 indicates significant drift.' }
      ]
    },
    {
      id: 'ab-testing', title: 'A/B Testing for Models', subtitle: 'Comparing Old vs New (पुराने vs नए मॉडल की तुलना)',
      icon: BarChart3, color: '#0ea5e9',
      items: ['What is A/B Testing in ML?', 'Traffic Splitting (50/50, 90/10)', 'Statistical Significance Testing', 'Multi-Armed Bandit Approach', 'Shadow Deployments'],
      example: 'To scientifically prove that a new AI model is genuinely better than the old one before rolling it out to all users.',
      deepDive: [
        { heading: 'Shadow Deployment', text: 'Run the new model alongside the old one, but only the old model serves real predictions. The new model\'s predictions are logged for comparison without affecting users.' },
        { heading: 'Multi-Armed Bandit', text: 'Instead of fixed traffic splits, the system dynamically routes more traffic to the better-performing model. Faster convergence than traditional A/B testing.' }
      ]
    },
    {
      id: 'auto-retraining', title: 'Automated Retraining', subtitle: 'Self-Healing AI (खुद को ठीक करने वाला AI)',
      icon: RefreshCw, color: '#10b981',
      items: ['Trigger-based Retraining (Drift Detected)', 'Scheduled Retraining (Daily/Weekly)', 'Continuous Training Pipelines', 'Data Flywheel Effect', 'Human-in-the-Loop Validation'],
      example: 'To build AI systems that automatically retrain themselves when performance drops, without any human intervention.',
      deepDive: [
        { heading: 'Data Flywheel', text: 'More users → More data → Better model → More users. This virtuous cycle means your AI gets smarter automatically as more people use it. Google Search is the best example.' },
        { heading: 'Human-in-the-Loop', text: 'Even with automation, critical AI decisions (medical, legal) should have a human review step. The human corrects errors, and those corrections become new training data.' }
      ]
    },
    {
      id: 'observability', title: 'ML Observability', subtitle: 'Full Visibility into AI (AI पर पूरी नज़र)',
      icon: Eye, color: '#8b5cf6',
      items: ['Prometheus & Grafana for ML Metrics', 'Logging Prediction Requests/Responses', 'Latency & Throughput Monitoring', 'Cost Tracking per Prediction', 'Explainability (SHAP, LIME)'],
      example: 'To have complete, real-time visibility into how your AI is performing — from prediction accuracy to server costs to response times.',
      deepDive: [
        { heading: 'SHAP (SHapley Additive exPlanations)', text: 'A technique that explains WHY an AI model made a specific prediction. E.g., "This loan was rejected because income was low (40%) and credit score was poor (35%)".' },
        { heading: 'Grafana Dashboards', text: 'Build beautiful real-time dashboards showing model accuracy, prediction counts, error rates, and latency. Set up alerts if accuracy drops below a threshold.' }
      ]
    }
  ];

  const selectedModule = reqData.find(m => m.id === selectedModuleId);

  return (
    <div className="thane-dashboard-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      {selectedModule && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: isPopupMaximized ? '1rem' : '2rem' }}>
          <div className="animate-fade-in" style={{ background: '#f8fafc', width: '100%', maxWidth: isPopupMaximized ? '98%' : '1000px', height: isPopupMaximized ? '96vh' : '75vh', overflowY: 'auto', borderRadius: isPopupMaximized ? '0.75rem' : '1.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', position: 'relative', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
            <div style={{ position: 'absolute', top: '1rem', right: '1.5rem', display: 'flex', gap: '0.75rem', zIndex: 100 }}>
              <button onClick={() => setIsPopupMaximized(!isPopupMaximized)} style={{ background: '#e2e8f0', color: '#0f172a', border: 'none', padding: '0.5rem 1rem', borderRadius: '2rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>{isPopupMaximized ? '🗗 Restore' : '🗖 Maximize'}</button>
              <button onClick={() => { setSelectedModuleId(null); setIsPopupMaximized(false); }} style={{ background: '#ef4444', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '2rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>✕ Close</button>
            </div>
            <ModuleDetail module={selectedModule} onBack={() => { setSelectedModuleId(null); setIsPopupMaximized(false); }} isMaximized={isPopupMaximized} />
          </div>
        </div>
      )}

      <button onClick={onBack} className="thane-back-btn" style={{ marginBottom: '1rem' }}><ArrowLeft size={20} /> Back to MLOps</button>
      <div className="thane-header">
        <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}><BarChart3 size={32} color="#f59e0b" /> Monitoring & Drift Analysis (AI की निगरानी)</h2>
        <p className="thane-subtitle">Ensuring AI models stay accurate over time with drift detection, A/B testing, and auto-retraining.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginTop: '2rem', alignItems: 'flex-start' }}>
        {reqData.map((module) => (
          <div key={module.id} style={{ background: 'white', borderRadius: '1rem', padding: '1.5rem', border: '1px solid #e2e8f0', borderTop: `4px solid ${module.color}`, boxShadow: '0 4px 15px rgba(0,0,0,0.02)', transition: 'transform 0.3s, box-shadow 0.3s', display: 'flex', flexDirection: 'column' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 10px 25px ${module.color}33`; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)'; }}
          >
            <div onClick={() => setExpandedCard(expandedCard === module.id ? null : module.id)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', background: `${module.color}15`, color: module.color, borderRadius: '0.75rem' }}><module.icon size={24} /></div>
                <h4 style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: '700', lineHeight: '1.3', maxWidth: '70%' }}>{module.title}</h4>
              </div>
            </div>
            {expandedCard === module.id && (
              <div className="animate-fade-in" style={{ marginTop: '1.5rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {module.items.map((item, index) => (
                    <div key={index} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#334155', fontWeight: '500' }}>
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
