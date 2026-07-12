import React, { useState } from 'react';
import {
  ArrowLeft, LayoutDashboard, FileText, Code, ListOrdered, BookOpen, CheckSquare, Settings, Target, Shield, Database, Layout, CheckCircle, Network, Server, Briefcase, Activity, Monitor, BrainCircuit, Search, Zap, AlertTriangle, Layers, TrendingUp, Users, Cpu
} from 'lucide-react';
import './ProjectDetailsView.css';

export default function StepUpLiteracyDetails() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showFullscreenFlowchart, setShowFullscreenFlowchart] = useState(false);
  const [showFullscreenWorkflow, setShowFullscreenWorkflow] = useState(false);
  const [selectedGuideStep, setSelectedGuideStep] = useState(null);
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);
  const [selectedOverviewSection, setSelectedOverviewSection] = useState(null);

  const overviewSections = [
    { id: 'io-assistance', title: 'Why AI Lifecycle?', subtitle: 'AI लाइफ साइकिल का महत्व', icon: Target, color: '#475569' },
    { id: 'objectives', title: 'Project Objectives', subtitle: 'परियोजना के मुख्य उद्देश्य', icon: Briefcase, color: '#2563eb' },
    { id: 'features', title: 'Major Phases', subtitle: 'प्रमुख चरण (Key Stages)', icon: Layers, color: '#ec4899' },
  ];

  const guideSteps = [
    { id: 1, title: '1. Requirements Gathering & Analysis', subtitle: 'ज़रूरतों को समझना और विश्लेषण', icon: Search, color: '#3b82f6' },
    { id: 2, title: '2. UI/UX Design', subtitle: 'डिजाइनिंग फेज', icon: Layout, color: '#10b981' },
    { id: 3, title: '3. Frontend Development', subtitle: 'फ्रंटेंड डेवलपमेंट', icon: Code, color: '#f59e0b' },
    { id: 4, title: '4. Backend Development', subtitle: 'बैकेंड डेवलपमेंट', icon: Database, color: '#8b5cf6' },
    { id: 5, title: '5. Testing & Quality Assurance (QA)', subtitle: 'टेस्टिंग और जांच', icon: Activity, color: '#ec4899' },
    { id: 6, title: '6. Deployment', subtitle: 'लाइव करना या लॉन्च', icon: Server, color: '#64748b' },
    { id: 7, title: '7. Maintenance & Support', subtitle: 'रखरखाव और सपोर्ट', icon: Shield, color: '#3b82f6' },
  ];

  const evaluationList = [
    { id: 1, title: '1. डेटा गुणवत्ता (Data Quality)', subtitle: 'Accuracy & Completeness', icon: Database, color: '#3b82f6' },
    { id: 2, title: '2. मॉडल एक्यूरेसी', subtitle: 'Performance Metrics', icon: Activity, color: '#10b981' },
    { id: 3, title: '3. यूज़र एक्सपीरियंस', subtitle: 'UI/UX Feedback', icon: Users, color: '#f59e0b' },
    { id: 4, title: '4. सुरक्षा व एथिक्स', subtitle: 'Security & Fairness', icon: Shield, color: '#8b5cf6' },
  ];

  const tabs = [
    { id: 'overview', label: 'Project Overview', icon: LayoutDashboard },
    { id: 'architecture', label: 'Architecture & Workflow', icon: FileText },
    { id: 'tech-stack', label: 'Tech Stack (तकनीकी टूल्स)', icon: Code },
    { id: 'guide', label: 'Step-by-Step Guide', icon: ListOrdered },
    { id: 'resources', label: 'Resources & Datasets', icon: BookOpen },
    { id: 'evaluation', label: 'Submission/Evaluation', icon: CheckSquare },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  if (showFullscreenFlowchart) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setShowFullscreenFlowchart(false)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Architecture Menu
        </button>
        <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.75rem', color: '#0f172a' }}>AI Project Lifecycle Flow</h3>
        <div className="flowchart-container" style={{ margin: '0 auto', maxWidth: '800px', background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
          <div className="flow-step"><div className="flow-node user-node">1. Problem Scoping (समस्या को समझना)</div></div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step"><div className="flow-node">2. Data Acquisition (डेटा एकत्र करना)</div></div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step"><div className="flow-node">3. Data Exploration & Preparation</div></div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step"><div className="flow-node">4. AI Modeling (मॉडल ट्रेनिंग)</div></div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step"><div className="flow-node">5. Evaluation (सटीकता जांच)</div></div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step"><div className="flow-node output-node">6. Deployment & Monitoring (लागू करना)</div></div>
        </div>
      </div>
    );
  }

  if (showFullscreenWorkflow) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setShowFullscreenWorkflow(false)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Architecture Menu
        </button>
        <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.75rem', color: '#0f172a' }}>Workflow Details (मुख्य चरण)</h3>
        <div className="workflow-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="workflow-step-card" style={{ borderLeftColor: '#3b82f6' }}>
            <h4 className="workflow-step-title">Problem Scoping</h4>
            <div className="workflow-point">हम किस समस्या का समाधान कर रहे हैं? लक्ष्य, स्टेकहोल्डर्स और सफलता के पैमाने (Success Metrics) तय करना।</div>
          </div>
          <div className="workflow-step-card" style={{ borderLeftColor: '#10b981' }}>
            <h4 className="workflow-step-title">Data Pipeline</h4>
            <div className="workflow-point">सही डेटा स्रोत खोजना, डेटा कलेक्ट करना और उसमें मौजूद गलतियों (Missing values, Outliers) को साफ करना।</div>
          </div>
          <div className="workflow-step-card" style={{ borderLeftColor: '#f59e0b' }}>
            <h4 className="workflow-step-title">Modeling Engine</h4>
            <div className="workflow-point">विभिन्न AI/ML एल्गोरिदम (जैसे Random Forest, CNN, Transformer) लगाकर मॉडल को ट्रेन करना।</div>
          </div>
          <div className="workflow-step-card" style={{ borderLeftColor: '#8b5cf6' }}>
            <h4 className="workflow-step-title">Deployment & UI</h4>
            <div className="workflow-point">मॉडल को प्रोडक्शन सर्वर पर होस्ट करना और उपयोगकर्ताओं के लिए एक आसान डैशबोर्ड (UI) बनाना।</div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedOverviewSection !== null) {
    const sec = overviewSections.find(s => s.id === selectedOverviewSection);
    const SecIcon = sec.icon;
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setSelectedOverviewSection(null)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Project Overview
        </button>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <SecIcon size={40} color={sec.color} />
            <h3 style={{ margin: 0, fontSize: '2rem', color: '#0f172a' }}>{sec.title}</h3>
          </div>
          <div style={{ padding: 0 }}>
            {(() => {
              switch (sec.id) {
                case 'io-assistance': return (
                  <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                      <div className="workflow-point">• AI प्रोजेक्ट केवल कोडिंग नहीं है, यह डेटा और व्यवसाय की समझ का संयोजन है।</div>
                      <div className="workflow-point">• यह लाइफसाइकिल सुनिश्चित करती है कि प्रोजेक्ट बिना दिशा भटके सही परिणाम दे।</div>
                      <div className="workflow-point">• प्रत्येक चरण (Phase) एक-दूसरे से जुड़ा है, डेटा की खराबी सीधे मॉडल की खराबी बनती है।</div>
                    </div>
                  </div>
                );
                case 'objectives': return (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
                    <div className="tech-category-card" style={{ borderTop: '4px solid #3b82f6' }}>
                      <h5 style={{ margin: '0 0 1rem 0' }}><Layers size={20} /> Structured Approach</h5>
                      <span className="workflow-point">AI डेवलपमेंट को एक व्यवस्थित और पारदर्शी प्रक्रिया बनाना।</span>
                    </div>
                    <div className="tech-category-card" style={{ borderTop: '4px solid #10b981' }}>
                      <h5 style={{ margin: '0 0 1rem 0' }}><TrendingUp size={20} /> Scalability & Accuracy</h5>
                      <span className="workflow-point">भविष्य में मॉडल को सुधारने और अपग्रेड करने का रास्ता साफ रखना।</span>
                    </div>
                  </div>
                );
                case 'features': return (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                    <div className="tech-category-card"><Search size={22} color="#475569" /> <h5>Scoping</h5><p>समस्या की जड़ तक जाना</p></div>
                    <div className="tech-category-card"><Database size={22} color="#475569" /> <h5>Data Prep</h5><p>डेटा की सफाई</p></div>
                    <div className="tech-category-card"><BrainCircuit size={22} color="#475569" /> <h5>Modeling</h5><p>मशीन लर्निंग ट्रेनिंग</p></div>
                    <div className="tech-category-card"><Server size={22} color="#475569" /> <h5>Deployment</h5><p>सर्वर पर लाइव करना</p></div>
                  </div>
                );
                default: return null;
              }
            })()}
          </div>
        </div>
      </div>
    );
  }

  if (selectedGuideStep !== null) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setSelectedGuideStep(null)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold' }}>
          <ArrowLeft size={18} /> Back
        </button>
        <div className="workflow-container"><h3 style={{ textAlign: 'center' }}>Refer to Architecture section for guide details.</h3></div>
      </div>
    );
  }

  if (selectedEvaluation !== null) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setSelectedEvaluation(null)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold' }}>
          <ArrowLeft size={18} /> Back
        </button>
        <div className="workflow-container"><h3 style={{ textAlign: 'center' }}>Evaluation Metrics active.</h3></div>
      </div>
    );
  }

  return (
    <div className="project-details-container">
      <div className="details-header-bar">
        <div className="details-header-content">
          <div className="details-title-wrapper">
            <h2 className="details-title">Step Up Literacy Software - Initial steps in software development</h2>
            <span className="details-status-badge active">Active</span>
          </div>
          <p className="details-subtitle">सॉफ्टवेयर डेवलपमेंट के शुरुआती चरण (Initial steps in software development)</p>
        </div>
      </div>

      <div className="details-layout">
        <div className="details-sidebar">
          <h3 className="details-sidebar-title">PROJECT MENU</h3>
          <nav className="details-nav">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button key={tab.id} className={`details-nav-item ${activeTab === tab.id ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)}>
                  <Icon size={18} /><span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="details-content-area">
          {activeTab === 'overview' && (
            <div className="details-card" style={{ border: 'none', padding: 0 }}>
              <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', borderRadius: '1rem', padding: '2.5rem', color: 'white', marginBottom: '2.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-10%', right: '-5%', opacity: 0.1 }}><BrainCircuit size={200} /></div>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.75rem', margin: '0 0 1rem 0' }}>
                  <BrainCircuit size={28} color="#93c5fd" /> Project Overview
                </h3>
                <p style={{ color: '#dbeafe', fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '90%' }}>
                  <strong>"Initial steps in software development"</strong> एक व्यापक गाइड है जो समझाती है कि किसी भी सॉफ्टवेयर प्रोजेक्ट को जीरो से लेकर डिप्लॉयमेंट तक ले जाने के लिए कौन-कौन से प्रमुख चरणों (Stages) से गुजरना पड़ता है।
                </p>
              </div>
              <div className="tech-stack-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                {overviewSections.map((sec) => {
                  const Icon = sec.icon;
                  return (
                    <div key={sec.id} className="tech-category-card" style={{ cursor: 'pointer', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.25rem 1rem' }} onClick={() => setSelectedOverviewSection(sec.id)}>
                      <div style={{ background: `${sec.color}15`, padding: '0.75rem', borderRadius: '50%', marginBottom: '0.75rem' }}><Icon size={24} color={sec.color} /></div>
                      <h4 style={{ margin: '0 0 0.25rem 0', color: '#0f172a', fontSize: '1rem', fontWeight: 'bold' }}>{sec.title}</h4>
                      <p style={{ margin: 0, color: '#64748b', fontSize: '0.85rem' }}>{sec.subtitle}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="details-card">
              <h3 className="section-title"><Network size={20} style={{ display: 'inline', marginRight: '8px' }} /> Architecture & Workflow (कार्यप्रणाली)</h3>
              <div className="arch-section" style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                <div className="arch-card" style={{ flex: 1, padding: '1.5rem', background: '#f0fdfa', borderRadius: '1rem', border: '1px solid #ccfbf1', cursor: 'pointer' }} onClick={() => setShowFullscreenFlowchart(true)}>
                  <h4 style={{ margin: '0 0 0.25rem 0' }}>View Lifecycle Flowchart</h4>
                </div>
                <div className="arch-card" style={{ flex: 1, padding: '1.5rem', background: '#fffbeb', borderRadius: '1rem', border: '1px solid #fef3c7', cursor: 'pointer' }} onClick={() => setShowFullscreenWorkflow(true)}>
                  <h4 style={{ margin: '0 0 0.25rem 0' }}>View Step-by-Step Details</h4>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tech-stack' && (
            <div className="details-card">
              <h3 className="section-title"><Code size={20} style={{ display: 'inline', marginRight: '8px' }} /> Tech Stack (तकनीकी टूल्स)</h3>
              <div className="tech-stack-grid">
                <div className="tech-category-card">
                  <h4><Database size={18} /> Data Engineering</h4>
                  <ul className="tech-list">
                    <li>Pandas / NumPy</li>
                    <li>Apache Spark</li>
                    <li>SQL / NoSQL Databases</li>
                  </ul>
                </div>
                <div className="tech-category-card">
                  <h4><Cpu size={18} /> Model Training</h4>
                  <ul className="tech-list">
                    <li>Scikit-Learn (ML)</li>
                    <li>TensorFlow / PyTorch (DL)</li>
                    <li>HuggingFace (NLP)</li>
                  </ul>
                </div>
                <div className="tech-category-card">
                  <h4><Server size={18} /> Deployment (MLOps)</h4>
                  <ul className="tech-list">
                    <li>Docker / Kubernetes</li>
                    <li>FastAPI / Flask</li>
                    <li>AWS SageMaker / MLflow</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="details-card">
              <h3 className="section-title"><ListOrdered size={20} style={{ display: 'inline', marginRight: '8px' }} /> Step-by-Step Guide (बनाने का तरीका)</h3>
              <div className="guide-timeline">
                {guideSteps.map((step, index) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={step.id} className="guide-step-card" onClick={() => setSelectedGuideStep(step.id)}>
                      <div className="step-number">{index + 1}</div>
                      <div className="step-icon-wrapper" style={{ background: `${step.color}15`, color: step.color }}>
                        <StepIcon size={24} />
                      </div>
                      <div className="step-content">
                        <h4 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '1.1rem' }}>{step.title}</h4>
                        <p style={{ margin: 0, color: '#64748b' }}>{step.subtitle}</p>
                      </div>
                      <div className="step-action">
                        <span style={{ fontSize: '0.875rem', color: '#3b82f6', fontWeight: '500' }}>View Details &rarr;</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="details-card">
              <h3 className="section-title"><BookOpen size={20} style={{ display: 'inline', marginRight: '8px' }} /> Resources & Datasets</h3>
              <div className="tech-stack-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                <div className="tech-category-card" style={{ borderLeft: '4px solid #3b82f6' }}>
                  <h4>Learning Materials</h4>
                  <ul className="tech-list">
                    <li>CRISP-DM Methodology Guide</li>
                    <li>Google / Microsoft AI Guidelines</li>
                  </ul>
                </div>
                <div className="tech-category-card" style={{ borderLeft: '4px solid #10b981' }}>
                  <h4>Tools Documentation</h4>
                  <ul className="tech-list">
                    <li>MLflow Documentation</li>
                    <li>Scikit-Learn User Guide</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'evaluation' && (
            <div className="details-card">
              <h3 className="section-title"><CheckSquare size={20} style={{ display: 'inline', marginRight: '8px' }} /> Submission / Evaluation (चेकलिस्ट)</h3>
              <div className="guide-timeline">
                {evaluationList.map((item, index) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={item.id} className="guide-step-card" onClick={() => setSelectedEvaluation(item.id)}>
                      <div className="step-icon-wrapper" style={{ background: `${item.color}15`, color: item.color }}>
                        <ItemIcon size={24} />
                      </div>
                      <div className="step-content">
                        <h4 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '1.1rem' }}>{item.title}</h4>
                        <p style={{ margin: 0, color: '#64748b' }}>{item.subtitle}</p>
                      </div>
                      <div className="step-action">
                        <span style={{ fontSize: '0.875rem', color: '#3b82f6', fontWeight: '500' }}>View Metrics &rarr;</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
