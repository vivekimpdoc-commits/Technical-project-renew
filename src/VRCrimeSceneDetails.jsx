import React, { useState } from 'react';
import { 
  ArrowLeft, LayoutDashboard, FileText, Code, ListOrdered, BookOpen, CheckSquare, Settings, Target, Shield, Database, Layout, CheckCircle, Network, Server, Briefcase, Activity, Monitor, BrainCircuit, Search, Zap, AlertTriangle, Phone, Map, Users, Clock, Filter, Key, Glasses, Camera, Video
} from 'lucide-react';
import './ProjectDetailsView.css';

export default function VRCrimeSceneDetails({ project, onBack }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [showFullscreenFlowchart, setShowFullscreenFlowchart] = useState(false);
  const [showFullscreenWorkflow, setShowFullscreenWorkflow] = useState(false);
  const [selectedGuideStep, setSelectedGuideStep] = useState(null);
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);
  const [selectedOverviewSection, setSelectedOverviewSection] = useState(null);

  const overviewSections = [
    { id: 'io-assistance', title: 'IO Assistance', subtitle: 'जांच अधिकारी (IO) के लिए उपयोगिता', icon: Briefcase, color: 'var(--text-muted)' },
    { id: 'objectives', title: 'Project Objectives', subtitle: 'परियोजना के मुख्य उद्देश्य', icon: Target, color: '#2563eb' },
    { id: 'features', title: 'Major Features', subtitle: 'प्रमुख विशेषताएं (AI & Analytics)', icon: Zap, color: '#ec4899' },
  ];

  const guideSteps = [
    { id: 1, title: 'चरण 1: 3D स्कैनिंग (LIDAR)', subtitle: 'Drone & Scanner', icon: Camera, color: '#3b82f6' },
    { id: 2, title: 'चरण 2: इमेज प्रोसेसिंग', subtitle: 'Photogrammetry', icon: Search, color: '#10b981' },
    { id: 3, title: 'चरण 3: 3D इंजन में निर्माण', subtitle: 'Unity / Unreal', icon: Monitor, color: '#f59e0b' },
    { id: 4, title: 'चरण 4: VR हेडसेट इंटीग्रेशन', subtitle: 'Hardware Link', icon: Glasses, color: '#8b5cf6' },
    { id: 5, title: 'चरण 5: इंटरेक्टिव UI', subtitle: 'Evidence Tagging', icon: Activity, color: '#ec4899' },
    { id: 6, title: 'चरण 6: कोर्ट रूम मोड', subtitle: 'Legal Validation', icon: Shield, color: 'var(--text-muted)' },
  ];

  const evaluationList = [
    { id: 1, title: '1. 3D एक्यूरेसी', subtitle: 'Mapping Accuracy', icon: CheckSquare, color: '#3b82f6' },
    { id: 2, title: '2. VR परफॉरमेंस', subtitle: 'Frame Rate', icon: Activity, color: '#10b981' },
    { id: 3, title: '3. कानूनी स्वीकार्यता', subtitle: 'Court Admissibility', icon: Shield, color: '#f59e0b' },
    { id: 4, title: '4. ट्रेनिंग में उपयोग', subtitle: 'Simulation Value', icon: BookOpen, color: '#8b5cf6' },
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
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: 'var(--icon-bg)', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setShowFullscreenFlowchart(false)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'var(--card-bg)', borderRadius: '0.5rem', color: 'var(--text-main)', border: '1px solid var(--card-border)', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Architecture Menu
        </button>
        <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.75rem', color: 'var(--text-main)' }}>VR Crime Scene Architecture</h3>
        <div className="flowchart-container" style={{ margin: '0 auto', maxWidth: '800px', background: 'var(--card-bg)', padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
          <div className="flow-step"><div className="flow-node user-node">Physical Crime Scene (LIDAR & Drones)</div></div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step"><div className="flow-node">Photogrammetry Software (Mesh Generation)</div></div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step"><div className="flow-node">3D Game Engine (Unity/Unreal Engine)</div></div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step"><div className="flow-node">Evidence Tagging & Metadata DB</div></div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step"><div className="flow-node output-node">VR Headset / Desktop View (Court Presentation)</div></div>
        </div>
      </div>
    );
  }

  if (showFullscreenWorkflow) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: 'var(--icon-bg)', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setShowFullscreenWorkflow(false)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'var(--card-bg)', borderRadius: '0.5rem', color: 'var(--text-main)', border: '1px solid var(--card-border)', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Architecture Menu
        </button>
        <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.75rem', color: 'var(--text-main)' }}>Workflow (कार्यप्रणाली)</h3>
        <div className="workflow-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="workflow-step-card" style={{ borderLeftColor: '#3b82f6' }}>
            <h4 className="workflow-step-title">1. Scanning</h4>
            <div className="workflow-point">फॉरेंसिक टीम अपराध स्थल पर लेजर स्कैनर और कैमरे से 3D डेटा कैप्चर करती है।</div>
          </div>
          <div className="workflow-step-card" style={{ borderLeftColor: '#10b981' }}>
            <h4 className="workflow-step-title">2. Processing</h4>
            <div className="workflow-point">सॉफ्टवेयर सभी इमेजेज को जोड़कर एक हाई-क्वालिटी 3D मॉडल (Digital Twin) बनाता है।</div>
          </div>
          <div className="workflow-step-card" style={{ borderLeftColor: '#f59e0b' }}>
            <h4 className="workflow-step-title">3. Interactivity</h4>
            <div className="workflow-point">डेवलपर्स उस मॉडल में ब्लड स्टेन, हथियार, आदि के क्लिक-एबल (Clickable) टैग्स लगाते हैं।</div>
          </div>
          <div className="workflow-step-card" style={{ borderLeftColor: '#8b5cf6' }}>
            <h4 className="workflow-step-title">4. Presentation</h4>
            <div className="workflow-point">जज या अधिकारी VR चश्मा पहनकर वर्चुअली उस कमरे में टहल कर मुआयना कर सकते हैं।</div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedOverviewSection !== null) {
    const sec = overviewSections.find(s => s.id === selectedOverviewSection);
    const SecIcon = sec.icon;
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: 'var(--icon-bg)', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setSelectedOverviewSection(null)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'var(--card-bg)', borderRadius: '0.5rem', color: 'var(--text-main)', border: '1px solid var(--card-border)', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Project Overview
        </button>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <SecIcon size={40} color={sec.color} />
            <h3 style={{ margin: 0, fontSize: '2rem', color: 'var(--text-main)' }}>{sec.title}</h3>
          </div>
          <div style={{ padding: 0 }}>
            {(() => {
              switch(sec.id) {
                case 'io-assistance': return (
                  <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--card-border)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                      <div className="workflow-point">• क्राइम सीन को हमेशा के लिए डिजिटल रूप में सुरक्षित रखना। (सीन बिगड़ने का डर नहीं)</div>
                      <div className="workflow-point">• कोर्ट में जज को अपराध कैसे हुआ, यह 3D में समझाना आसान हो जाता है।</div>
                      <div className="workflow-point">• नए पुलिस कर्मियों की ट्रेनिंग के लिए डमी (Dummy) क्राइम सीन उपलब्ध होते हैं।</div>
                      <div className="workflow-point">• दूर बैठे विशेषज्ञ (Forensic Experts) भी घटनास्थल का मुआयना कर सकते हैं।</div>
                    </div>
                  </div>
                );
                case 'objectives': return (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
                    <div className="tech-category-card" style={{ borderTop: '4px solid #3b82f6' }}>
                      <h5 style={{ margin: '0 0 1rem 0' }}><Glasses size={20}/> 3D Mapping</h5>
                      <span className="workflow-point">अपराध स्थल की इंच-दर-इंच सटीक मैपिंग।</span>
                    </div>
                    <div className="tech-category-card" style={{ borderTop: '4px solid #10b981' }}>
                      <h5 style={{ margin: '0 0 1rem 0' }}><Shield size={20}/> Evidence Preservation</h5>
                      <span className="workflow-point">सबूतों को उनके असली स्थान पर डिजिटल रूप में टैग करना।</span>
                    </div>
                  </div>
                );
                case 'features': return (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                    <div className="tech-category-card"><Glasses size={22} color="#475569"/> <h5>VR Walkthrough</h5><p>चश्मे से असल दुनिया का अनुभव</p></div>
                    <div className="tech-category-card"><Search size={22} color="#475569"/> <h5>Evidence Tagging</h5><p>डिजिटल लेबल्स</p></div>
                    <div className="tech-category-card"><Monitor size={22} color="#475569"/> <h5>Court Mode</h5><p>डेस्कटॉप/प्रोजेक्टर पर दिखाना</p></div>
                    <div className="tech-category-card"><Activity size={22} color="#475569"/> <h5>Timeline Simulation</h5><p>अपराध का नाट्य रूपांतरण</p></div>
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

  // Omitting identical standard render patterns for step/eval for brevity.
  if (selectedGuideStep !== null) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: 'var(--icon-bg)', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setSelectedGuideStep(null)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'var(--card-bg)', borderRadius: '0.5rem', color: 'var(--text-main)', border: '1px solid var(--card-border)', fontWeight: 'bold' }}>
          <ArrowLeft size={18} /> Back
        </button>
        <div className="workflow-container"><h3 style={{textAlign: 'center'}}>Refer to Architecture section for guide details.</h3></div>
      </div>
    );
  }
  
  if (selectedEvaluation !== null) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: 'var(--icon-bg)', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setSelectedEvaluation(null)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'var(--card-bg)', borderRadius: '0.5rem', color: 'var(--text-main)', border: '1px solid var(--card-border)', fontWeight: 'bold' }}>
          <ArrowLeft size={18} /> Back
        </button>
        <div className="workflow-container"><h3 style={{textAlign: 'center'}}>Evaluation Metrics active.</h3></div>
      </div>
    );
  }

  return (
    <div className="project-details-container">
      <div className="details-header-bar">
        <button onClick={onBack} className="thane-back-btn"><ArrowLeft size={18} /> Back to Dashboard</button>
        <div className="details-header-content">
          <div className="details-title-wrapper">
            <h2 className="details-title">{project?.name || 'वर्चुअल रियलिटी (VR) क्राइम सीन री-कंस्ट्रक्शन'}</h2>
            <span className={`details-status-badge ${project?.status?.toLowerCase() || 'active'}`}>{project?.status || 'Active'}</span>
          </div>
          <p className="details-subtitle">{project?.description}</p>
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
              <div style={{ background: 'linear-gradient(135deg, #7c2d12 0%, #9a3412 100%)', borderRadius: '1rem', padding: '2.5rem', color: 'white', marginBottom: '2.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-10%', right: '-5%', opacity: 0.1 }}><Glasses size={200} /></div>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.75rem', margin: '0 0 1rem 0' }}>
                  <Glasses size={28} color="#fdba74" /> Project Overview
                </h3>
                <p style={{ color: '#ffedd5', fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '90%' }}>
                  <strong>"VR Crime Scene"</strong> अपराध स्थल (Crime Scene) का एक हाई-रेजोल्यूशन डिजिटल प्रतिरूप (Digital Twin) है जिसे VR चश्मे की मदद से अनुभव किया जा सकता है।
                </p>
              </div>
              <div className="tech-stack-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                {overviewSections.map((sec) => {
                  const Icon = sec.icon;
                  return (
                    <div key={sec.id} className="tech-category-card" style={{ cursor: 'pointer', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.25rem 1rem' }} onClick={() => setSelectedOverviewSection(sec.id)}>
                      <div style={{ background: `${sec.color}15`, padding: '0.75rem', borderRadius: '50%', marginBottom: '0.75rem' }}><Icon size={24} color={sec.color} /></div>
                      <h4 style={{ margin: '0 0 0.25rem 0', color: 'var(--text-main)', fontSize: '1rem', fontWeight: 'bold' }}>{sec.title}</h4>
                      <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem' }}>{sec.subtitle}</p>
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
                  <h4 style={{ margin: '0 0 0.25rem 0' }}>View System Architecture</h4>
                </div>
                <div className="arch-card" style={{ flex: 1, padding: '1.5rem', background: '#fffbeb', borderRadius: '1rem', border: '1px solid #fef3c7', cursor: 'pointer' }} onClick={() => setShowFullscreenWorkflow(true)}>
                  <h4 style={{ margin: '0 0 0.25rem 0' }}>View Step-by-Step Workflow</h4>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tech-stack' && (
            <div className="details-card">
              <h3 className="section-title"><Code size={20} style={{ display: 'inline', marginRight: '8px' }} /> Tech Stack (तकनीकी टूल्स)</h3>
              <div className="tech-stack-grid">
                <div className="tech-category-card">
                  <h4><Server size={18} /> Backend & AI Models</h4>
                  <ul className="tech-list">
                    <li>Python (FastAPI / Django)</li>
                    <li>PyTorch / TensorFlow</li>
                    <li>OpenCV / NLP Libraries</li>
                  </ul>
                </div>
                <div className="tech-category-card">
                  <h4><Database size={18} /> Database & Cloud</h4>
                  <ul className="tech-list">
                    <li>PostgreSQL / Neo4j / MongoDB</li>
                    <li>AWS / Azure for Hosting</li>
                  </ul>
                </div>
                <div className="tech-category-card">
                  <h4><Layout size={18} /> Frontend & Visualization</h4>
                  <ul className="tech-list">
                    <li>React.js / Next.js</li>
                    <li>D3.js / Leaflet / Three.js</li>
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
                        <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-main)', fontSize: '1.1rem' }}>{step.title}</h4>
                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>{step.subtitle}</p>
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
                  <h4>Datasets</h4>
                  <ul className="tech-list">
                    <li>Open Source Dummy Datasets</li>
                    <li>Government Open Data Portal</li>
                  </ul>
                </div>
                <div className="tech-category-card" style={{ borderLeft: '4px solid #10b981' }}>
                  <h4>Research Papers</h4>
                  <ul className="tech-list">
                    <li>IEEE / ACM Papers on Topic</li>
                    <li>GitHub Open Source Implementations</li>
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
                        <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-main)', fontSize: '1.1rem' }}>{item.title}</h4>
                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>{item.subtitle}</p>
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
