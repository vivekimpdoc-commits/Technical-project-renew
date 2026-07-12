import React, { useState } from 'react';
import { ArrowLeft, Database, FileSearch, Filter, GitBranch, RefreshCw, Layers } from 'lucide-react';
import ModuleDetail from './ModuleDetail';
import './ThaneLevelDashboard.css';

export default function DataPipelineProcessing({ onBack }) {
  const [selectedDetail, setSelectedDetail] = useState(null);

  const reqData = [
    {
      id: 'etl',
      title: 'ETL Pipelines',
      subtitle: 'Extract, Transform, Load (डेटा निकालना, बदलना, लोड करना)',
      icon: Filter,
      color: '#0ea5e9',
      items: [
        'Data Extraction from APIs, DBs & Files',
        'Data Transformation (Cleaning, Normalization)',
        'Loading into Data Warehouses',
        'Apache Airflow for Orchestration',
        'Batch vs Stream Processing'
      ],
      example: 'To automate the collection and cleaning of millions of raw data records into a structured format that AI models can learn from.',
      deepDive: [
        {
          heading: 'Batch vs Stream Processing',
          text: 'Batch processing handles large datasets at scheduled intervals (e.g., nightly). Stream processing (Apache Kafka, Flink) handles data in real-time as it arrives.'
        },
        {
          heading: 'Apache Airflow',
          text: 'An open-source workflow orchestration tool that lets you define, schedule, and monitor complex data pipelines as Python code (DAGs).'
        }
      ]
    },
    {
      id: 'data-versioning',
      title: 'Data Versioning (DVC)',
      subtitle: 'Tracking Data Changes (डेटा में बदलाव ट्रैक करना)',
      icon: GitBranch,
      color: '#10b981',
      items: [
        'Why version your training data?',
        'DVC (Data Version Control)',
        'Linking Data to Model Versions',
        'Reproducibility in ML Experiments',
        'Data Registries & Catalogs'
      ],
      example: 'To ensure that every AI model can be traced back to the exact dataset it was trained on, enabling full reproducibility.',
      deepDive: [
        {
          heading: 'DVC (Data Version Control)',
          text: 'DVC works like Git, but for large data files. It tracks changes in datasets and links them to specific code commits, so you always know which data produced which model.'
        },
        {
          heading: 'Reproducibility',
          text: 'If you cannot reproduce a model\'s results, you cannot trust it. Data versioning ensures that anyone can re-run your experiment and get the exact same outcome.'
        }
      ]
    },
    {
      id: 'feature-engineering',
      title: 'Feature Engineering',
      subtitle: 'Making Data AI-Ready (डेटा को AI के लिए तैयार करना)',
      icon: FileSearch,
      color: '#f59e0b',
      items: [
        'Feature Selection & Extraction',
        'One-Hot Encoding & Normalization',
        'Feature Stores (Feast, Tecton)',
        'Automated Feature Engineering',
        'Handling Missing & Imbalanced Data'
      ],
      example: 'To transform raw, messy data into meaningful numerical "features" that an AI model can actually understand and learn from.',
      deepDive: [
        {
          heading: 'Feature Stores',
          text: 'A Feature Store (like Feast) is a centralized repository where pre-computed features are stored, shared, and served consistently across training and serving.'
        },
        {
          heading: 'One-Hot Encoding',
          text: 'Converting categorical data (like "Red", "Blue", "Green") into binary vectors ([1,0,0], [0,1,0], [0,0,1]) so that ML algorithms can process them numerically.'
        }
      ]
    },
    {
      id: 'data-quality',
      title: 'Data Quality & Validation',
      subtitle: 'Ensuring Clean Data (डेटा की गुणवत्ता सुनिश्चित करना)',
      icon: RefreshCw,
      color: '#8b5cf6',
      items: [
        'Great Expectations (Data Validation)',
        'Schema Validation & Type Checks',
        'Anomaly Detection in Data',
        'Data Profiling & Statistics',
        'Automated Quality Gates in Pipelines'
      ],
      example: 'To catch bad, corrupted, or unexpected data before it reaches the AI model, preventing "garbage in, garbage out" scenarios.',
      deepDive: [
        {
          heading: 'Great Expectations',
          text: 'An open-source Python library that lets you define "expectations" (rules) for your data. E.g., "column \'age\' must be between 0 and 150". If data fails, the pipeline stops.'
        },
        {
          heading: 'Quality Gates',
          text: 'Automated checkpoints in your pipeline that validate data before it moves to the next stage. If quality drops below a threshold, alerts are triggered and the pipeline halts.'
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
          <Database size={32} color="#0ea5e9" />
          Data Pipeline & Processing (डेटा पाइपलाइन)
        </h2>
        <p className="thane-subtitle">Building robust data pipelines to collect, clean, version, and validate data for ML models.</p>
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
