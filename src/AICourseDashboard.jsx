import React, { useState } from 'react';
import { BookOpen, BrainCircuit, Target, Database, Wrench, Calculator, Code, Network, Cpu, Camera, MessageSquare, Sparkles, Activity, BarChart, Rocket, Server, Settings, ShieldCheck, Layout, Medal, CheckCircle, GraduationCap, Layers } from 'lucide-react';
import './ThaneLevelDashboard.css';
import ModuleDetail from './ModuleDetail';

export default function AICourseDashboard() {
  const [activeTab, setActiveTab] = useState('modules');
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [expandedDashboardCard, setExpandedDashboardCard] = useState(null);
  const [isPopupMaximized, setIsPopupMaximized] = useState(false);
  const courseModules = [
    {
      id: 1,
      title: 'Module 1: Introduction to AI & Machine Learning',
      icon: BrainCircuit,
      color: '#3b82f6',
      items: ['AI क्या है?', 'Machine Learning क्या है?', 'Deep Learning क्या है?', 'AI, ML और DL में अंतर', 'Real-world AI Applications', 'AI Project Lifecycle']
    },
    {
      id: 2,
      title: 'Module 2: Problem Definition & Requirement Gathering',
      icon: Target,
      color: '#10b981',
      items: ['Problem Statement बनाना', 'Business Requirements समझना', 'Use Cases पहचानना', 'Success Metrics तय करना', 'Functional Requirements', 'Non-Functional Requirements']
    },
    {
      id: 3,
      title: 'Module 3: Data Collection',
      icon: Database,
      color: '#f59e0b',
      items: ['Data क्या है?', 'Data Sources', 'Structured Data', 'Unstructured Data', 'APIs से Data लेना', 'Database से Data लेना', 'Web Scraping', 'Data Privacy एवं Security']
    },
    {
      id: 4,
      title: 'Module 4: Data Preparation & Cleaning',
      icon: Wrench,
      color: '#ec4899',
      items: ['Missing Data Handling', 'Duplicate Data Removal', 'Data Formatting', 'Data Transformation', 'Feature Engineering', 'Data Labeling', 'Train-Test Split']
    },
    {
      id: 5,
      title: 'Module 5: Mathematics for AI',
      icon: Calculator,
      color: '#8b5cf6',
      items: ['Statistics', 'Probability', 'Linear Algebra', 'Calculus Basics', 'Optimization', 'Evaluation Metrics']
    },
    {
      id: 6,
      title: 'Module 6: Programming Fundamentals',
      icon: Code,
      color: '#14b8a6',
      items: ['Python Basics', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-Learn', 'Jupyter Notebook']
    },
    {
      id: 7,
      title: 'Module 7: Machine Learning Algorithms',
      icon: Network,
      color: '#f97316',
      items: ['Regression', 'Classification', 'Clustering', 'Decision Trees', 'Random Forest', 'Support Vector Machine', 'Ensemble Learning']
    },
    {
      id: 8,
      title: 'Module 8: Deep Learning',
      icon: Cpu,
      color: '#ef4444',
      items: ['Neural Networks', 'Activation Functions', 'Forward Propagation', 'Backpropagation', 'TensorFlow', 'PyTorch', 'Keras']
    },
    {
      id: 9,
      title: 'Module 9: Computer Vision',
      icon: Camera,
      color: '#6366f1',
      items: ['Image Processing', 'Image Classification', 'Object Detection', 'Face Recognition', 'OCR', 'Video Analytics']
    },
    {
      id: 10,
      title: 'Module 10: Natural Language Processing (NLP)',
      icon: MessageSquare,
      color: '#06b6d4',
      items: ['Text Processing', 'Tokenization', 'Sentiment Analysis', 'Text Classification', 'Chatbots', 'Translation Systems', 'Large Language Models (LLMs)']
    },
    {
      id: 11,
      title: 'Module 11: Generative AI & LLM',
      icon: Sparkles,
      color: '#d946ef',
      items: ['Generative AI Introduction', 'Transformers', 'Prompt Engineering', 'Fine Tuning', 'RAG (Retrieval-Augmented Gen)', 'AI Agents', 'Multi-Agent Systems']
    },
    {
      id: 12,
      title: 'Module 12: Model Training',
      icon: Activity,
      color: '#3b82f6',
      items: ['Training Process', 'Hyperparameter Tuning', 'GPU Training', 'Model Validation', 'Model Optimization', 'Overfitting & Underfitting']
    },
    {
      id: 13,
      title: 'Module 13: Model Evaluation',
      icon: BarChart,
      color: '#10b981',
      items: ['Accuracy', 'Precision', 'Recall', 'F1 Score', 'ROC-AUC', 'Confusion Matrix']
    },
    {
      id: 14,
      title: 'Module 14: Model Deployment',
      icon: Rocket,
      color: '#f59e0b',
      items: ['API Development', 'Flask/FastAPI', 'Docker', 'Cloud Deployment', 'CI/CD', 'Monitoring']
    },
    {
      id: 15,
      title: 'Module 15: Database & Storage',
      icon: Server,
      color: '#ec4899',
      items: ['SQL', 'NoSQL', 'Vector Database', 'Data Warehousing', 'Data Pipelines']
    },
    {
      id: 16,
      title: 'Module 16: MLOps & AI Operations',
      icon: Settings,
      color: '#8b5cf6',
      items: ['Model Versioning', 'Experiment Tracking', 'Monitoring', 'Retraining', 'Logging', 'Automation']
    },
    {
      id: 17,
      title: 'Module 17: AI Security & Ethics',
      icon: ShieldCheck,
      color: '#14b8a6',
      items: ['Responsible AI', 'Bias & Fairness', 'Data Privacy', 'Cyber Security', 'Explainable AI', 'AI Governance']
    },
    {
      id: 18,
      title: 'Module 18: AI Project Development',
      icon: Layout,
      color: '#f97316',
      items: ['Project Planning', 'Architecture Design', 'UI/UX Design', 'Frontend & Backend', 'Database Design', 'Testing', 'Deployment', 'Maintenance']
    },
    {
      id: 19,
      title: 'Module 19: Full-Stack AI Engineering (Enterprise Track)',
      icon: Layers,
      color: '#eab308',
      items: ['Version Control (Git/GitHub)', 'Agile & Scrum (Teamwork)', 'Big Data (Spark/Kafka)', 'System Design & Microservices', 'Recommender Systems', 'Frontend UI (React/Streamlit)', 'Cloud Architecture (AWS/GCP)']
    }
  ];
  const capstoneProjects = [
    'AI Chatbot', 'AI Meeting Assistant', 'AI Investigation Platform',
    'AI Command & Control Center', 'Face Recognition System',
    'Document Intelligence System', 'Predictive Analytics Dashboard',
    'Generative AI Assistant', 'Smart Policing AI Platform', 'Autonomous AI Agent System'
  ];

  const requirements = [
    'Problem Statement', 'Data', 'Programming Language (Python)',
    'Machine Learning Frameworks', 'GPU/Cloud Infrastructure',
    'Database', 'Model Training Environment', 'Deployment Platform',
    'Monitoring System', 'Security & Governance', 'Maintenance & Support'
  ];

  return (
    <div className="thane-dashboard-container" style={{ padding: '2rem', background: '#f8fafc', width: '100%' }}>

      {/* Modal Popup for Module Detail */}
      {selectedModuleId && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)',
          zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: isPopupMaximized ? '1rem' : '2rem'
        }}>
          <div className="animate-fade-in" style={{
            background: '#f8fafc', width: '100%',
            maxWidth: isPopupMaximized ? '98%' : '1000px',
            height: isPopupMaximized ? '96vh' : '75vh',
            overflowY: 'auto',
            borderRadius: isPopupMaximized ? '0.75rem' : '1.5rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            position: 'relative',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div style={{ position: 'absolute', top: '1rem', right: '1.5rem', display: 'flex', gap: '0.75rem', zIndex: 100 }}>
              <button
                onClick={() => setIsPopupMaximized(!isPopupMaximized)}
                style={{
                  background: '#e2e8f0', color: '#0f172a', border: 'none',
                  padding: '0.5rem 1rem', borderRadius: '2rem', fontWeight: 'bold',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}
              >
                {isPopupMaximized ? '🗗 Restore' : '🗖 Maximize'}
              </button>
              <button
                onClick={() => { setSelectedModuleId(null); setIsPopupMaximized(false); }}
                style={{
                  background: '#ef4444', color: 'white', border: 'none',
                  padding: '0.5rem 1rem', borderRadius: '2rem', fontWeight: 'bold',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}
              >
                ✕ Close
              </button>
            </div>
            <ModuleDetail
              module={courseModules.find(m => m.id === selectedModuleId)}
              onBack={() => { setSelectedModuleId(null); setIsPopupMaximized(false); }}
              isMaximized={isPopupMaximized}
            />
          </div>
        </div>
      )}

      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '2rem', background: 'white', padding: '1.5rem 2rem', borderRadius: '1rem', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
        <div style={{ display: 'inline-flex', padding: '1rem', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', borderRadius: '50%', color: 'white', marginBottom: '1rem', boxShadow: '0 8px 20px rgba(59, 130, 246, 0.4)' }}>
          <GraduationCap size={32} />
        </div>
        <h1 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '0.25rem', fontWeight: '800' }}>
          Course: AI Model Development
        </h1>
        <h2 style={{ fontSize: '1.2rem', color: '#3b82f6', fontWeight: '600', margin: 0 }}>
          Beginner to Advanced
        </h2>
      </div>

      {/* Top Navigation Tabs */}
      <div className="thane-menu-bar">
        <div className="thane-menu-tabs">
          <button
            className={`thane-tab ${activeTab === 'modules' ? 'active-blue' : ''}`}
            onClick={() => setActiveTab('modules')}
          >
            Course Modules (कोर्स के मॉड्यूल)
          </button>
          <button
            className={`thane-tab ${activeTab === 'projects' ? 'active-green' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Capstone Projects (फाइनल प्रोजेक्ट्स)
          </button>
          <button
            className={`thane-tab ${activeTab === 'requirements' ? 'active-purple' : ''}`}
            onClick={() => setActiveTab('requirements')}
          >
            Requirements (मुख्य आवश्यकताएँ)
          </button>
        </div>
      </div>

      {/* Conditionally Render Sections */}
      {activeTab === 'modules' && (
        <>
          <h3 style={{ fontSize: '1.75rem', color: '#0f172a', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen color="#3b82f6" /> Course Modules
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
            {courseModules.map((module) => (
              <div key={module.id} style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '1.5rem',
                border: '1px solid #e2e8f0',
                borderTop: `4px solid ${module.color}`,
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                display: 'flex',
                flexDirection: 'column'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = `0 10px 25px ${module.color}33`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)';
                }}
              >
                {/* Header (Click to expand accordion) */}
                <div
                  onClick={() => setExpandedDashboardCard(expandedDashboardCard === module.id ? null : module.id)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ padding: '0.75rem', background: `${module.color}15`, color: module.color, borderRadius: '0.75rem' }}>
                      <module.icon size={24} />
                    </div>
                    <h4 style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: '700', lineHeight: '1.3', maxWidth: '70%' }}>
                      {module.title}
                    </h4>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedDashboardCard === module.id && (
                  <div className="animate-fade-in" style={{ marginTop: '1.5rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                    <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      {module.items.map((item, index) => (
                        <div
                          key={index}
                          style={{
                            background: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            padding: '0.5rem 0.75rem',
                            borderRadius: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '0.85rem',
                            color: '#334155',
                            fontWeight: '500'
                          }}
                        >
                          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: module.color, flexShrink: 0 }}></div>
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Highlighted 'Click to View Details' Button */}
                    <button
                      onClick={(e) => { e.stopPropagation(); setSelectedModuleId(module.id); }}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        background: module.color,
                        color: 'white',
                        border: 'none',
                        borderRadius: '0.5rem',
                        fontWeight: 'bold',
                        fontSize: '0.95rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        boxShadow: `0 4px 10px ${module.color}66`,
                        transition: 'opacity 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                    >
                      <BookOpen size={18} /> Click to View Detailed Modules
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === 'projects' && (
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.75rem', color: '#0f172a', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Medal size={28} color="#f59e0b" /> Final Capstone Projects
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
            {capstoneProjects.map((project, index) => (
              <div key={index} style={{
                background: '#fffbeb', color: '#d97706', padding: '1rem 1.25rem',
                borderRadius: '0.75rem', fontSize: '1.1rem', fontWeight: '600',
                border: '1px solid #fde68a', display: 'flex', alignItems: 'center', gap: '0.75rem',
                boxShadow: '0 2px 5px rgba(0,0,0,0.02)'
              }}>
                <Sparkles size={20} color="#f59e0b" /> {project}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'requirements' && (
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '1.75rem', color: '#0f172a', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <CheckCircle size={28} color="#10b981" /> मुख्य आवश्यकताएँ (Requirements)
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
            {requirements.map((req, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#334155', fontSize: '1.1rem', fontWeight: '600', padding: '1rem', background: '#f8fafc', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
                <CheckCircle size={24} color="#10b981" /> {req}
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}
