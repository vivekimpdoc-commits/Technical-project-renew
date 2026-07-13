import React, { useState } from 'react';
import { ArrowLeft, Database, FileSearch, Filter, GitBranch, RefreshCw, BookOpen } from 'lucide-react';
import ModuleDetail from './ModuleDetail';
import './ThaneLevelDashboard.css';

export default function DataPipelineProcessing({ onBack }) {
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isPopupMaximized, setIsPopupMaximized] = useState(false);

  const reqData = [
    {
      id: 'etl', title: 'ETL Pipelines', subtitle: 'Extract, Transform, Load (डेटा निकालना, बदलना, लोड करना)',
      icon: Filter, color: '#0ea5e9',
      items: ['Data Extraction from APIs, DBs & Files', 'Data Transformation (Cleaning, Normalization)', 'Loading into Data Warehouses', 'Apache Airflow for Orchestration', 'Batch vs Stream Processing'],
      example: 'To automate the collection and cleaning of millions of raw data records into a structured format that AI models can learn from.',
      deepDive: [
        { heading: 'Batch vs Stream Processing', text: 'Batch processing handles large datasets at scheduled intervals (e.g., nightly). Stream processing (Apache Kafka, Flink) handles data in real-time as it arrives.' },
        { heading: 'Apache Airflow', text: 'An open-source workflow orchestration tool that lets you define, schedule, and monitor complex data pipelines as Python code (DAGs).' }
      ]
    },
    {
      id: 'data-versioning', title: 'Data Versioning (DVC)', subtitle: 'Tracking Data Changes (डेटा में बदलाव ट्रैक करना)',
      icon: GitBranch, color: '#10b981',
      items: ['Why version your training data?', 'DVC (Data Version Control)', 'Linking Data to Model Versions', 'Reproducibility in ML Experiments', 'Data Registries & Catalogs'],
      example: 'To ensure that every AI model can be traced back to the exact dataset it was trained on, enabling full reproducibility.',
      deepDive: [
        { heading: 'DVC (Data Version Control)', text: 'DVC works like Git, but for large data files. It tracks changes in datasets and links them to specific code commits, so you always know which data produced which model.' },
        { heading: 'Reproducibility', text: 'If you cannot reproduce a model\'s results, you cannot trust it. Data versioning ensures that anyone can re-run your experiment and get the exact same outcome.' }
      ]
    },
    {
      id: 'feature-engineering', title: 'Feature Engineering', subtitle: 'Making Data AI-Ready (डेटा को AI के लिए तैयार करना)',
      icon: FileSearch, color: '#f59e0b',
      items: ['Feature Selection & Extraction', 'One-Hot Encoding & Normalization', 'Feature Stores (Feast, Tecton)', 'Automated Feature Engineering', 'Handling Missing & Imbalanced Data'],
      example: 'To transform raw, messy data into meaningful numerical "features" that an AI model can actually understand and learn from.',
      deepDive: [
        { heading: 'Feature Stores', text: 'A Feature Store (like Feast) is a centralized repository where pre-computed features are stored, shared, and served consistently across training and serving.' },
        { heading: 'One-Hot Encoding', text: 'Converting categorical data (like "Red", "Blue", "Green") into binary vectors ([1,0,0], [0,1,0], [0,0,1]) so that ML algorithms can process them numerically.' }
      ]
    },
    {
      id: 'data-quality', title: 'Data Quality & Validation', subtitle: 'Ensuring Clean Data (डेटा की गुणवत्ता सुनिश्चित करना)',
      icon: RefreshCw, color: '#8b5cf6',
      items: ['Great Expectations (Data Validation)', 'Schema Validation & Type Checks', 'Anomaly Detection in Data', 'Data Profiling & Statistics', 'Automated Quality Gates in Pipelines'],
      example: 'To catch bad, corrupted, or unexpected data before it reaches the AI model, preventing "garbage in, garbage out" scenarios.',
      deepDive: [
        { heading: 'Great Expectations', text: 'An open-source Python library that lets you define "expectations" (rules) for your data. E.g., "column \'age\' must be between 0 and 150". If data fails, the pipeline stops.' },
        { heading: 'Quality Gates', text: 'Automated checkpoints in your pipeline that validate data before it moves to the next stage. If quality drops below a threshold, alerts are triggered and the pipeline halts.' }
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
        <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}><Database size={32} color="#0ea5e9" /> Data Pipeline & Processing (डेटा पाइपलाइन)</h2>
        <p className="thane-subtitle">Building robust data pipelines to collect, clean, version, and validate data for ML models.</p>
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
