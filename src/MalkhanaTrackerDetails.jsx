import React, { useState } from 'react';
import { ArrowLeft, LayoutDashboard, FileText, Activity, Users, Settings, Network, Code, Monitor, Server, BrainCircuit, Database, ListOrdered, Shield, CheckCircle, BookOpen, Mic, CheckSquare, Package, Search, Box } from 'lucide-react';
import './ProjectDetailsView.css';

export default function MalkhanaTrackerDetails({ project, onBack }) {
  const [activeTab, setActiveTab] = useState('overview');

  const [showFullscreenFlowchart, setShowFullscreenFlowchart] = useState(false);
  const [showFrontendDetails, setShowFrontendDetails] = useState(false);
  const [showBackendDetails, setShowBackendDetails] = useState(false);
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);

  const guideSteps = [
    { id: 1, title: 'चरण 1: केस प्रॉपर्टी डेटाबेस सेटअप', subtitle: 'Case Property Schema', icon: Database, color: '#3b82f6' },
    { id: 2, title: 'चरण 2: बारकोड/QR कोड जेनरेशन', subtitle: 'Barcode Generation', icon: Package, color: '#10b981' },
    { id: 3, title: 'चरण 3: कोर्ट डेट अलर्ट सिस्टम', subtitle: 'Court Date Alerts', icon: Server, color: '#f59e0b' },
    { id: 4, title: 'चरण 4: मालखाना डैशबोर्ड (UI)', subtitle: 'Malkhana Dashboard UI', icon: Monitor, color: '#8b5cf6' },
    { id: 5, title: 'चरण 5: चेन-ऑफ-कस्टडी (Chain of Custody) ट्रैकिंग', subtitle: 'Chain of Custody Tracking', icon: Shield, color: '#ec4899' },
    { id: 6, title: 'चरण 6: टेस्टिंग और लाइव डिप्लॉयमेंट', subtitle: 'Testing & Deployment', icon: CheckCircle, color: '#64748b' },
  ];

  const resourcesList = [
    { id: 1, title: '1. जब्त किए गए सामान की कैटेगरी', subtitle: 'Confiscated Goods Categories', icon: Box, color: '#e11d48' },
    { id: 2, title: '2. डमी कोर्ट केस डेट्स डेटा', subtitle: 'Mock Court Dates Data', icon: Activity, color: '#2563eb' },
    { id: 3, title: '3. चेन-ऑफ-कस्टडी लॉग्स', subtitle: 'Chain of Custody Logs', icon: FileText, color: '#10b981' },
  ];

  const evaluationList = [
    { id: 1, title: '1. कार्यात्मक चेकलिस्ट', subtitle: 'Functional Checklist', icon: CheckSquare, color: '#3b82f6' },
    { id: 2, title: '2. तकनीकी और प्रदर्शन', subtitle: 'Technical & Performance', icon: Activity, color: '#10b981' },
    { id: 3, title: '3. सुरक्षा और कानूनी अनुपालन', subtitle: 'Security & Legal', icon: Shield, color: '#f59e0b' },
    { id: 4, title: '4. सबमिशन के लिए जरूरी दस्तावेज', subtitle: 'Submission Deliverables', icon: FileText, color: '#8b5cf6' },
  ];

  const tabs = [
    { id: 'overview', label: 'Project Overview', icon: LayoutDashboard },
    { id: 'architecture', label: 'Architecture & Workflow (कार्यप्रणाली)', icon: FileText },
    { id: 'tech-stack', label: 'Tech Stack (तकनीकी टूल्स)', icon: Code },
    { id: 'guide', label: 'Step-by-Step Guide (बनाने का तरीका)', icon: ListOrdered },
    { id: 'resources', label: 'Resources & Datasets (जरूरी डेटा)', icon: BookOpen },
    { id: 'evaluation', label: 'Submission/Evaluation (चेकलिस्ट)', icon: CheckSquare },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  if (showFullscreenFlowchart) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setShowFullscreenFlowchart(false)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Architecture Menu
        </button>
        <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.75rem', color: '#0f172a' }}>मालखाना ट्रैकर (Inventory Monitor) आर्किटेक्चर</h3>
        
        <div style={{ maxWidth: '900px', margin: '0 auto', background: 'white', padding: '3rem', borderRadius: '1rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #64748b' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#334155' }}>1. केस प्रॉपर्टी एंट्री (Case Property Entry)</h4>
              <p style={{ margin: 0, color: '#475569' }}>जब भी कोई नया सामान (गाड़ी, ड्रग्स, हथियार) जब्त होता है, तो सिस्टम में FIR नंबर के साथ उसकी एंट्री की जाती है और एक यूनीक बारकोड प्रिंट किया जाता है।</p>
            </div>

            <div style={{ background: '#f0f9ff', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #0ea5e9' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#0369a1' }}>2. स्मार्ट स्टोरेज मैपिंग (Smart Storage)</h4>
              <p style={{ margin: 0, color: '#475569' }}>सिस्टम बताता है कि मालखाने के किस शेल्फ या रैक में इस सामान को रखा गया है (जैसे Rack 4, Box 12), ताकि ढूंढने में समय न लगे।</p>
            </div>

            <div style={{ background: '#fef2f2', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #ef4444' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#b91c1c' }}>3. चेन-ऑफ-कस्टडी (Chain of Custody)</h4>
              <p style={{ margin: 0, color: '#475569' }}>जब सामान कोर्ट या फॉरेंसिक लैब (FSL) भेजा जाता है, तो कौन सा अधिकारी ले गया, इसका डिजिटल लॉग बारकोड स्कैन करके दर्ज होता है।</p>
            </div>
            
            <div style={{ background: '#f0fdf4', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #10b981' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#15803d' }}>4. कोर्ट डेट ऑटो-अलर्ट (Court Alerts)</h4>
              <p style={{ margin: 0, color: '#475569' }}>जिस केस की सुनवाई कोर्ट में होने वाली है, उसका सामान 1 दिन पहले ही डैशबोर्ड पर लाल रंग (High Priority) में दिखने लगता है।</p>
            </div>

          </div>
        </div>
      </div>
    );
  }

  if (showFrontendDetails) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setShowFrontendDetails(false)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Tech Stack
        </button>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h3 style={{ margin: '0 0 2rem 0', fontSize: '2rem', color: '#0f172a', textAlign: 'center' }}>फ्रंटएंड (Frontend) - वेब और इन्वेंटरी UI</h3>
          <div className="workflow-step-card" style={{ borderLeftColor: '#3b82f6', paddingLeft: '2rem' }}>
            <h4 style={{ color: '#1d4ed8' }}>मालखाना मोहर्रिर के लिए: React.js</h4>
            <p>एक बहुत ही तेज़ और यूजर-फ्रेंडली डैशबोर्ड जहाँ बारकोड स्कैनर कनेक्ट किया जा सके और FIR नंबर डालकर सामान खोजा जा सके।</p>
          </div>
        </div>
      </div>
    );
  }

  if (showBackendDetails) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setShowBackendDetails(false)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Tech Stack
        </button>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h3 style={{ margin: '0 0 2rem 0', fontSize: '2rem', color: '#0f172a', textAlign: 'center' }}>बैकएंड (Backend) - डेटाबेस और सिक्योरिटी</h3>
          <div className="workflow-step-card" style={{ borderLeftColor: '#10b981', paddingLeft: '2rem' }}>
            <h4 style={{ color: '#047857' }}>कोर API: Python (Django/FastAPI)</h4>
            <p>सिस्टम में हजारों केस प्रॉपर्टी लॉग्स को सुरक्षित रखने और बारकोड जेनरेशन के लिए।</p>
          </div>
          <div className="workflow-step-card" style={{ borderLeftColor: '#34d399', paddingLeft: '2rem' }}>
            <h4 style={{ color: '#059669' }}>डेटाबेस: PostgreSQL</h4>
            <p>मजबूत रिलेशनल डेटाबेस, ताकि किसी भी केस प्रॉपर्टी का डेटा कभी मिसमैच न हो।</p>
          </div>
        </div>
      </div>
    );
  }

  const renderChecklistItem = (title, description, color) => (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: 'white', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      <CheckCircle color={color} size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
      <div>
        <h4 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '1.1rem' }}>{title}</h4>
        <p style={{ margin: 0, color: '#475569' }}>{description}</p>
      </div>
    </div>
  );

  if (selectedEvaluation !== null) {
    const evaluation = evaluationList.find(e => e.id === selectedEvaluation);
    const EvaluationIcon = evaluation.icon;
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setSelectedEvaluation(null)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Submission / Evaluation
        </button>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <EvaluationIcon size={40} color={evaluation.color} />
            <h3 style={{ margin: 0, fontSize: '2rem', color: '#0f172a' }}>{evaluation.title}</h3>
          </div>
          <div className="workflow-container" style={{ padding: 0 }}>
            {(() => {
              switch(evaluation.id) {
                case 1: return (
                  <>
                    {renderChecklistItem('QR/बारकोड स्कैनिंग', 'क्या स्कैनर से कोड रीड करते ही सिस्टम में केस प्रॉपर्टी की डिटेल्स तुरंत फेच (Fetch) हो रही हैं?', evaluation.color)}
                    {renderChecklistItem('कोर्ट डेट अलर्ट', 'क्या अगली सुनवाई वाले केस का सामान सिस्टम में अलग से हाईलाइट हो रहा है?', evaluation.color)}
                  </>);
                case 2: return (
                  <>
                    {renderChecklistItem('सर्च स्पीड', 'क्या FIR नंबर या केस प्रॉपर्टी ID डालकर सर्च करने पर रिजल्ट 1 सेकंड में आ रहा है?', evaluation.color)}
                  </>);
                case 3: return (
                  <>
                    {renderChecklistItem('ऑडिट ट्रेल (Audit Trail)', 'क्या चेन-ऑफ-कस्टडी (Chain of Custody) का रिकॉर्ड कभी मिटाया नहीं जा सकता?', evaluation.color)}
                  </>);
                case 4: return (
                  <>
                    {renderChecklistItem('वर्किंग प्रोटोटाइप/डेमो', 'लाइव काम करता हुआ वेब ऐप, जिसमें डमी डेटा के साथ स्कैनिंग फीचर दिखाया गया हो।', evaluation.color)}
                  </>);
                default: return null;
              }
            })()}
          </div>
        </div>
      </div>
    );
  }

  // Return main view
  return (
    <div className="project-details-container">
      <div className="details-header-bar">
        <button onClick={onBack} className="thane-back-btn">
          <ArrowLeft size={20} /> Back to Dashboard
        </button>
        <div className="project-header-info">
          <h2>{project.name}</h2>
          <span className={`status-badge ${project.status.toLowerCase()}`}>{project.status}</span>
        </div>
      </div>

      <div className="details-layout">
        <aside className="details-sidebar">
          <div className="sidebar-title">PROJECT MENU</div>
          <nav className="details-nav">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`details-nav-item ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon size={18} className="nav-icon" />
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="details-content-area">
          {activeTab === 'overview' && (
            <div className="details-card">
              <h3>Project Overview</h3>
              <p className="overview-intro-text">
                यह <strong>AI-आधारित मालखाना ट्रैकर (Inventory Monitor)</strong> थाने के मालखाने में जब्त किए गए सामान (Case Property) की डिजिटल और ऑटोमैटिक ट्रैकिंग करता है। यह सिस्टम यह सुनिश्चित करता है कि कौन सा सामान किस रैक में रखा है, वह कोर्ट में कब पेश होना है, और वर्तमान में वह किसके पास (Chain of Custody) है।
              </p>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="details-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h3 style={{ margin: 0 }}>Architecture & Workflow (कार्यप्रणाली)</h3>
                <button 
                  onClick={() => setShowFullscreenFlowchart(true)}
                  style={{ background: '#2563eb', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}
                >
                  <Network size={16} /> View Flowchart
                </button>
              </div>

              <div className="workflow-container">
                <div className="workflow-step-card" style={{ borderLeftColor: '#3b82f6' }}>
                  <h4 className="workflow-step-title">1. बारकोड मैपिंग</h4>
                  <p className="workflow-step-desc">हर जब्त सामान पर एक डिजिटल टैग/बारकोड लगाया जाता है जिसे सिस्टम FIR से जोड़ देता है।</p>
                </div>
                <div className="workflow-step-card" style={{ borderLeftColor: '#10b981' }}>
                  <h4 className="workflow-step-title">2. शेल्फ/लोकेशन ट्रैकिंग</h4>
                  <p className="workflow-step-desc">मालखाने के अंदर किस बॉक्स या शेल्फ में सामान रखा है, उसकी एग्जैक्ट लोकेशन सिस्टम में होती है।</p>
                </div>
                <div className="workflow-step-card" style={{ borderLeftColor: '#f59e0b' }}>
                  <h4 className="workflow-step-title">3. स्मार्ट कोर्ट डेट अलर्ट</h4>
                  <p className="workflow-step-desc">जब केस की सुनवाई होती है, तो सिस्टम 1 दिन पहले मालखाना मोहर्रिर को अलर्ट कर देता है।</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tech-stack' && (
            <div className="details-card">
              <h3>Tech Stack (तकनीकी टूल्स)</h3>
              <div className="tech-stack-grid">
                
                <div className="tech-category-card" onClick={() => setShowFrontendDetails(true)} style={{ cursor: 'pointer' }}>
                  <div className="tech-icon-wrapper" style={{ background: '#dbeafe' }}><Monitor size={24} color="#2563eb" /></div>
                  <h4>1. वेब डैशबोर्ड (Frontend)</h4>
                  <p>React.js, Tailwind CSS</p>
                  <div style={{ marginTop: '1rem', color: '#2563eb', fontSize: '0.85rem', fontWeight: '600' }}>Click to view details &rarr;</div>
                </div>

                <div className="tech-category-card" onClick={() => setShowBackendDetails(true)} style={{ cursor: 'pointer' }}>
                  <div className="tech-icon-wrapper" style={{ background: '#d1fae5' }}><Server size={24} color="#10b981" /></div>
                  <h4>2. बैकएंड (Backend API)</h4>
                  <p>Python (Django/FastAPI)</p>
                  <div style={{ marginTop: '1rem', color: '#10b981', fontSize: '0.85rem', fontWeight: '600' }}>Click to view details &rarr;</div>
                </div>
                
                <div className="tech-category-card" style={{ cursor: 'pointer' }}>
                  <div className="tech-icon-wrapper" style={{ background: '#fef3c7' }}><Database size={24} color="#f59e0b" /></div>
                  <h4>3. रिलेशनल डेटाबेस</h4>
                  <p>PostgreSQL</p>
                </div>

              </div>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="details-card">
              <h3>Step-by-Step Guide (बनाने का तरीका)</h3>
              <div className="tech-stack-grid">
                {guideSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.id} className="tech-category-card" style={{ cursor: 'pointer', textAlign: 'center' }}>
                      <div style={{ background: `${step.color}15`, padding: '1rem', borderRadius: '50%', marginBottom: '1rem', display: 'inline-block' }}>
                        <Icon size={36} color={step.color} />
                      </div>
                      <h4 style={{ margin: '0 0 0.5rem 0' }}>{step.title}</h4>
                      <p style={{ margin: 0, color: '#64748b' }}>{step.subtitle}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="details-card">
              <h3>Resources & Datasets (जरूरी डेटा)</h3>
              <div className="tech-stack-grid">
                {resourcesList.map((resource) => {
                  const Icon = resource.icon;
                  return (
                    <div key={resource.id} className="tech-category-card" style={{ cursor: 'pointer', textAlign: 'center' }}>
                      <div style={{ background: `${resource.color}15`, padding: '1rem', borderRadius: '50%', marginBottom: '1rem', display: 'inline-block' }}>
                        <Icon size={36} color={resource.color} />
                      </div>
                      <h4 style={{ margin: '0 0 0.5rem 0' }}>{resource.title}</h4>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'evaluation' && (
            <div className="details-card">
              <h3>Submission/Evaluation (चेकलिस्ट)</h3>
              <div className="tech-stack-grid">
                {evaluationList.map((evaluation) => {
                  const Icon = evaluation.icon;
                  return (
                    <div key={evaluation.id} className="tech-category-card" onClick={() => setSelectedEvaluation(evaluation.id)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                      <div style={{ background: `${evaluation.color}15`, padding: '1rem', borderRadius: '50%', marginBottom: '1rem', display: 'inline-block' }}>
                        <Icon size={36} color={evaluation.color} />
                      </div>
                      <h4 style={{ margin: '0 0 0.5rem 0' }}>{evaluation.title}</h4>
                      <p style={{ margin: 0, color: '#64748b' }}>{evaluation.subtitle}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="details-card">
              <h3>Settings</h3>
              <p className="placeholder-text">Project configuration settings for Malkhana Tracker.</p>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
