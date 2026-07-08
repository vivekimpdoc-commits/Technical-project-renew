import React, { useState } from 'react';
import { ArrowLeft, LayoutDashboard, FileText, Activity, Users, Settings, Network, Code, Monitor, Server, BrainCircuit, Database, ListOrdered, Shield, CheckCircle, BookOpen, Mic, CheckSquare, Calendar, Clock, MessageCircle } from 'lucide-react';
import './ProjectDetailsView.css';

export default function SmartRosterDetails({ project, onBack }) {
  const [activeTab, setActiveTab] = useState('overview');

  const [showFullscreenFlowchart, setShowFullscreenFlowchart] = useState(false);
  const [showFrontendDetails, setShowFrontendDetails] = useState(false);
  const [showBackendDetails, setShowBackendDetails] = useState(false);
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);

  const guideSteps = [
    { id: 1, title: 'चरण 1: अधिकारियों के डेटाबेस का सेटअप', subtitle: 'Officers Database Setup', icon: Database, color: '#3b82f6' },
    { id: 2, title: 'चरण 2: AI शेड्यूलिंग एल्गोरिदम', subtitle: 'AI Scheduling Algo', icon: BrainCircuit, color: '#10b981' },
    { id: 3, title: 'चरण 3: ऑटोमैटिक ड्यूटी असाइनमेंट', subtitle: 'Auto Duty Assignment', icon: Server, color: '#f59e0b' },
    { id: 4, title: 'चरण 4: व्हाट्सएप / SMS इंटीग्रेशन', subtitle: 'WhatsApp/SMS Integration', icon: MessageCircle, color: '#8b5cf6' },
    { id: 5, title: 'चरण 5: एडमिन डैशबोर्ड (UI)', subtitle: 'Admin Dashboard UI', icon: Monitor, color: '#ec4899' },
    { id: 6, title: 'चरण 6: टेस्टिंग और लाइव डिप्लॉयमेंट', subtitle: 'Testing & Deployment', icon: CheckCircle, color: '#64748b' },
  ];

  const resourcesList = [
    { id: 1, title: '1. पुलिसकर्मियों का मास्टर डेटाबेस', subtitle: 'Officers Master Data', icon: Users, color: '#e11d48' },
    { id: 2, title: '2. पुरानी ड्यूटी का लॉग (ट्रेनिंग के लिए)', subtitle: 'Historical Duty Logs', icon: FileText, color: '#2563eb' },
    { id: 3, title: '3. छुट्टियों और लीव का डेटा', subtitle: 'Leave & Attendance Data', icon: Calendar, color: '#10b981' },
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
        <button onClick={() => setShowFullscreenFlowchart(false)} className="back-button" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Architecture Menu
        </button>
        <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.75rem', color: '#0f172a' }}>स्मार्ट ड्यूटी रोस्टर (Smart Scheduling) आर्किटेक्चर</h3>
        
        <div style={{ maxWidth: '900px', margin: '0 auto', background: 'white', padding: '3rem', borderRadius: '1rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #64748b' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#334155' }}>1. डेटा प्रोसेसिंग (Data Processing)</h4>
              <p style={{ margin: 0, color: '#475569' }}>सिस्टम चेक करता है कि कौन सा अधिकारी छुट्टी पर है, किसकी नाइट ड्यूटी थी, और किसे आराम की जरूरत है।</p>
            </div>

            <div style={{ background: '#f0f9ff', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #0ea5e9' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#0369a1' }}>2. AI ड्यूटी एलोकेशन (AI Duty Allocation)</h4>
              <p style={{ margin: 0, color: '#475569' }}>AI एल्गोरिदम निष्पक्ष रूप से सभी की ड्यूटी बांटता है ताकि किसी एक अधिकारी पर ज्यादा काम का बोझ न पड़े (Fairness Algorithm)।</p>
            </div>

            <div style={{ background: '#fef2f2', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #ef4444' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#b91c1c' }}>3. ऑटोमैटिक नोटिफिकेशन (Auto Notification)</h4>
              <p style={{ margin: 0, color: '#475569' }}>रोस्टर जनरेट होते ही सिस्टम स्वचालित रूप से सभी संबंधित पुलिसकर्मियों को WhatsApp और SMS के माध्यम से उनकी ड्यूटी की जानकारी भेज देता है।</p>
            </div>
            
            <div style={{ background: '#f0fdf4', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #10b981' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#15803d' }}>4. मैनुअल ओवरराइड (Manual Override)</h4>
              <p style={{ margin: 0, color: '#475569' }}>थाना प्रभारी (SHO) डैशबोर्ड पर जाकर किसी भी समय AI द्वारा बनाए गए रोस्टर में मैनुअल बदलाव कर सकते हैं।</p>
            </div>

          </div>
        </div>
      </div>
    );
  }

  if (showFrontendDetails) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setShowFrontendDetails(false)} className="back-button" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Tech Stack
        </button>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h3 style={{ margin: '0 0 2rem 0', fontSize: '2rem', color: '#0f172a', textAlign: 'center' }}>फ्रंटएंड (Frontend) - वेब और रोस्टर UI</h3>
          <div className="workflow-step-card" style={{ borderLeftColor: '#3b82f6', paddingLeft: '2rem' }}>
            <h4 style={{ color: '#1d4ed8' }}>मुंशी / SHO के लिए: React.js</h4>
            <p>एक इंटरैक्टिव कैलेंडर (FullCalendar) के साथ डैशबोर्ड, जहां अधिकारियों की लिस्ट और उनकी ड्यूटी ड्रैग-एंड-ड्रॉप की जा सके।</p>
          </div>
        </div>
      </div>
    );
  }

  if (showBackendDetails) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setShowBackendDetails(false)} className="back-button" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Tech Stack
        </button>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h3 style={{ margin: '0 0 2rem 0', fontSize: '2rem', color: '#0f172a', textAlign: 'center' }}>बैकएंड (Backend) - डेटाबेस और AI</h3>
          <div className="workflow-step-card" style={{ borderLeftColor: '#10b981', paddingLeft: '2rem' }}>
            <h4 style={{ color: '#047857' }}>कोर API & AI: Python (FastAPI)</h4>
            <p>Pandas और Scikit-Learn का इस्तेमाल करके ड्यूटी जनरेशन को ऑटोमेट करना और WhatsApp API इंटीग्रेशन।</p>
          </div>
          <div className="workflow-step-card" style={{ borderLeftColor: '#34d399', paddingLeft: '2rem' }}>
            <h4 style={{ color: '#059669' }}>डेटाबेस: PostgreSQL</h4>
            <p>अधिकारियों का डेटा और पुरानी ड्यूटी का लॉग सुरक्षित रखने के लिए रिलेशनल डेटाबेस।</p>
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
        <button onClick={() => setSelectedEvaluation(null)} className="back-button" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
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
                    {renderChecklistItem('ऑटोमैटिक शेड्यूलिंग', 'क्या AI सिंगल क्लिक पर पूरे थाने का रोस्टर जनरेट कर पा रहा है?', evaluation.color)}
                    {renderChecklistItem('लीव क्लैश प्रोटेक्शन', 'क्या छुट्टी पर गए अधिकारी को ड्यूटी तो नहीं मिल रही?', evaluation.color)}
                  </>);
                case 2: return (
                  <>
                    {renderChecklistItem('स्पीड और परफॉरमेंस', 'क्या 100 पुलिसकर्मियों का रोस्टर जनरेट होने में 5 सेकंड से कम समय लग रहा है?', evaluation.color)}
                  </>);
                case 3: return (
                  <>
                    {renderChecklistItem('WhatsApp API सिक्योरिटी', 'क्या मैसेज भेजने वाला API सुरक्षित है और स्पैम नहीं कर रहा?', evaluation.color)}
                  </>);
                case 4: return (
                  <>
                    {renderChecklistItem('वर्किंग प्रोटोटाइप/डेमो', 'लाइव काम करता हुआ वेब ऐप, जिसमें डमी डेटा के साथ रोस्टर जेनरेशन फीचर दिखाया गया हो।', evaluation.color)}
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
        <button onClick={onBack} className="back-button">
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
                यह <strong>AI-आधारित ड्यूटी रोस्टर (Smart Scheduling)</strong> सिस्टम पुलिसकर्मियों की ड्यूटी (जैसे वीआईपी ड्यूटी, नाकाबंदी, नाइट पेट्रोलिंग) का ऑटोमैटिक और निष्पक्ष आवंटन करता है। यह सिस्टम यह ध्यान रखता है कि किस अधिकारी ने लगातार नाइट ड्यूटी की है और किसे आराम की जरूरत है, ताकि काम का तनाव कम हो।
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
                  <h4 className="workflow-step-title">1. डेटा एनालिसिस</h4>
                  <p className="workflow-step-desc">सिस्टम पुरानी ड्यूटी, छुट्टियों और अधिकारियों की स्किल्स (skills) का एनालिसिस करता है।</p>
                </div>
                <div className="workflow-step-card" style={{ borderLeftColor: '#10b981' }}>
                  <h4 className="workflow-step-title">2. AI रोस्टर जेनरेशन</h4>
                  <p className="workflow-step-desc">AI एल्गोरिदम बिना किसी पक्षपात के अगले हफ्ते का ड्यूटी रोस्टर जनरेट करता है।</p>
                </div>
                <div className="workflow-step-card" style={{ borderLeftColor: '#f59e0b' }}>
                  <h4 className="workflow-step-title">3. WhatsApp नोटिफिकेशन</h4>
                  <p className="workflow-step-desc">रोस्टर फाइनल होते ही सभी अधिकारियों को WhatsApp पर उनकी ड्यूटी की डिटेल मिल जाती है।</p>
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
                  <p>React.js, FullCalendar</p>
                  <div style={{ marginTop: '1rem', color: '#2563eb', fontSize: '0.85rem', fontWeight: '600' }}>Click to view details &rarr;</div>
                </div>

                <div className="tech-category-card" onClick={() => setShowBackendDetails(true)} style={{ cursor: 'pointer' }}>
                  <div className="tech-icon-wrapper" style={{ background: '#d1fae5' }}><Server size={24} color="#10b981" /></div>
                  <h4>2. बैकएंड (Backend API)</h4>
                  <p>Python (FastAPI), WhatsApp API</p>
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
              <p className="placeholder-text">Project configuration settings for Smart Duty Roster.</p>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
