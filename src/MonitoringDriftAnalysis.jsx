import React, { useState } from 'react';
import { ArrowLeft, BarChart3, AlertTriangle, RefreshCw, Eye, Layers } from 'lucide-react';
import ModuleDetail from './ModuleDetail';
import './ThaneLevelDashboard.css';

export default function MonitoringDriftAnalysis({ onBack }) {
  const [selectedDetail, setSelectedDetail] = useState(null);

  const reqData = [
    {
      id: 'model-drift',
      title: 'Model Drift Detection',
      subtitle: 'When AI Gets Dumb (जब AI बेवकूफ बनने लगे)',
      icon: AlertTriangle,
      color: '#f59e0b',
      items: [
        'What is Data Drift & Concept Drift?',
        'Statistical Tests for Drift (KS, PSI)',
        'Drift Detection Tools (Evidently AI)',
        'Real-world Drift Scenarios',
        'Alerting & Notification Systems'
      ],
      example: 'To detect when an AI model\'s predictions start becoming inaccurate because the real-world data has changed since training.',
      deepDive: [
        {
          heading: 'Data Drift vs Concept Drift',
          text: 'Data Drift: The input data distribution changes (e.g., more young users). Concept Drift: The relationship between input and output changes (e.g., buying patterns shift due to pandemic).'
        },
        {
          heading: 'PSI (Population Stability Index)',
          text: 'A statistical metric that measures how much the distribution of a variable has shifted between training and production. PSI > 0.25 indicates significant drift.'
        }
      ]
    },
    {
      id: 'ab-testing',
      title: 'A/B Testing for Models',
      subtitle: 'Comparing Old vs New (पुराने vs नए मॉडल की तुलना)',
      icon: BarChart3,
      color: '#0ea5e9',
      items: [
        'What is A/B Testing in ML?',
        'Traffic Splitting (50/50, 90/10)',
        'Statistical Significance Testing',
        'Multi-Armed Bandit Approach',
        'Shadow Deployments'
      ],
      example: 'To scientifically prove that a new AI model is genuinely better than the old one before rolling it out to all users.',
      deepDive: [
        {
          heading: 'Shadow Deployment',
          text: 'Run the new model alongside the old one, but only the old model serves real predictions. The new model\'s predictions are logged for comparison without affecting users.'
        },
        {
          heading: 'Multi-Armed Bandit',
          text: 'Instead of fixed traffic splits, the system dynamically routes more traffic to the better-performing model. Faster convergence than traditional A/B testing.'
        }
      ]
    },
    {
      id: 'auto-retraining',
      title: 'Automated Retraining',
      subtitle: 'Self-Healing AI (खुद को ठीक करने वाला AI)',
      icon: RefreshCw,
      color: '#10b981',
      items: [
        'Trigger-based Retraining (Drift Detected)',
        'Scheduled Retraining (Daily/Weekly)',
        'Continuous Training Pipelines',
        'Data Flywheel Effect',
        'Human-in-the-Loop Validation'
      ],
      example: 'To build AI systems that automatically retrain themselves when performance drops, without any human intervention.',
      deepDive: [
        {
          heading: 'Data Flywheel',
          text: 'More users → More data → Better model → More users. This virtuous cycle means your AI gets smarter automatically as more people use it. Google Search is the best example.'
        },
        {
          heading: 'Human-in-the-Loop',
          text: 'Even with automation, critical AI decisions (medical, legal) should have a human review step. The human corrects errors, and those corrections become new training data.'
        }
      ]
    },
    {
      id: 'observability',
      title: 'ML Observability',
      subtitle: 'Full Visibility into AI (AI पर पूरी नज़र)',
      icon: Eye,
      color: '#8b5cf6',
      items: [
        'Prometheus & Grafana for ML Metrics',
        'Logging Prediction Requests/Responses',
        'Latency & Throughput Monitoring',
        'Cost Tracking per Prediction',
        'Explainability (SHAP, LIME)'
      ],
      example: 'To have complete, real-time visibility into how your AI is performing — from prediction accuracy to server costs to response times.',
      deepDive: [
        {
          heading: 'SHAP (SHapley Additive exPlanations)',
          text: 'A technique that explains WHY an AI model made a specific prediction. E.g., "This loan was rejected because income was low (40%) and credit score was poor (35%)".'
        },
        {
          heading: 'Grafana Dashboards',
          text: 'Build beautiful real-time dashboards showing model accuracy, prediction counts, error rates, and latency. Set up alerts if accuracy drops below a threshold.'
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
          <BarChart3 size={32} color="#f59e0b" />
          Monitoring & Drift Analysis (AI की निगरानी)
        </h2>
        <p className="thane-subtitle">Ensuring AI models stay accurate over time with drift detection, A/B testing, and auto-retraining.</p>
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
