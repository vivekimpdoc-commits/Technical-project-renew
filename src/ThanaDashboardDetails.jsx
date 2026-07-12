import React, { useState } from 'react';
import { ArrowLeft, LayoutDashboard, FileText, Activity, Users, Settings, Network, Code, Monitor, Server, BrainCircuit, Database, ListOrdered, Shield, CheckCircle, BookOpen, Mic, CheckSquare, Radar } from 'lucide-react';
import './ProjectDetailsView.css';

export default function ThanaDashboardDetails({ project, onBack }) {
  const [activeTab, setActiveTab] = useState('overview');

  // Fullscreen states
  const [showFullscreenFlowchart, setShowFullscreenFlowchart] = useState(false);
  const [showFrontendDetails, setShowFrontendDetails] = useState(false);
  const [showBackendDetails, setShowBackendDetails] = useState(false);
  const [showAiDetails, setShowAiDetails] = useState(false);
  const [showDatabaseDetails, setShowDatabaseDetails] = useState(false);
  
  const [selectedGuideStep, setSelectedGuideStep] = useState(null);
  const [selectedResource, setSelectedResource] = useState(null);
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);

  const guideSteps = [
    { id: 1, title: 'चरण 1: आर्किटेक्चर और UI/UX डिजाइन', subtitle: 'Architecture & UI/UX Design', icon: FileText, color: '#3b82f6' },
    { id: 2, title: 'चरण 2: रीयल-टाइम डेटाबेस सेटअप', subtitle: 'Real-time Database Setup', icon: Database, color: '#10b981' },
    { id: 3, title: 'चरण 3: बैकएंड और सॉकेट (WebSockets) का निर्माण', subtitle: 'Backend & WebSockets API', icon: Server, color: '#f59e0b' },
    { id: 4, title: 'चरण 4: लाइव ट्रैकिंग UI (Frontend)', subtitle: 'Live Tracking UI (Frontend)', icon: Monitor, color: '#8b5cf6' },
    { id: 5, title: 'चरण 5: CCTNS इंटीग्रेशन', subtitle: 'CCTNS Integration', icon: Network, color: '#ec4899' },
    { id: 6, title: 'चरण 6: सुरक्षा, टेस्टिंग और डिप्लॉयमेंट', subtitle: 'Security, Testing & Deployment', icon: Shield, color: '#64748b' },
  ];

  const resourcesList = [
    { id: 1, title: '1. पुलिस स्टेशन पदानुक्रम डेटा', subtitle: 'Police Station Hierarchy Data', icon: Users, color: '#e11d48' },
    { id: 2, title: '2. सिंथेटिक केस ट्रैकिंग डेटा', subtitle: 'Synthetic Case Tracking Data', icon: Activity, color: '#2563eb' },
    { id: 3, title: '3. भौगोलिक मैप और बीट डेटा', subtitle: 'Geographical Map & Beat Data', icon: Radar, color: '#10b981' },
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

  // ===================== FULLSCREEN RENDERS ===================== //

  if (showFullscreenFlowchart) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setShowFullscreenFlowchart(false)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Architecture Menu
        </button>
        <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.75rem', color: '#0f172a' }}>रीयल-टाइम डैशबोर्ड आर्किटेक्चर (Real-time Architecture)</h3>
        
        <div style={{ maxWidth: '900px', margin: '0 auto', background: 'white', padding: '3rem', borderRadius: '1rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div style={{ background: '#f1f5f9', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #3b82f6' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#1e293b' }}>1. डेटा इनपुट और एकत्रीकरण (Data Aggregation)</h4>
              <p style={{ margin: 0, color: '#475569' }}>CCTNS सिस्टम, FIR ड्राफ्टिंग टूल, और पुलिस अधिकारियों के मोबाइल ऐप से रीयल-टाइम डेटा सर्वर पर आता है।</p>
            </div>

            <div style={{ background: '#f1f5f9', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #10b981' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#1e293b' }}>2. रीयल-टाइम प्रोसेसिंग (WebSockets/Socket.io)</h4>
              <p style={{ margin: 0, color: '#475569' }}>डेटाबेस में कोई भी नया केस या स्टेटस अपडेट होते ही, WebSockets के ज़रिए सभी कनेक्टेड डैशबोर्ड्स को तुरंत (Millisecond latency) पुश नोटिफिकेशन भेजी जाती है।</p>
            </div>

            <div style={{ background: '#f1f5f9', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #f59e0b' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#1e293b' }}>3. डेटा विज़ुअलाइज़ेशन (UI/UX)</h4>
              <p style={{ margin: 0, color: '#475569' }}>स्टेशन इंचार्ज (SHO) की स्क्रीन पर लाइव चार्ट्स (Recharts), पेंडिंग केस काउंट, और अधिकारियों की लाइव लोकेशन/स्टेटस अपडेट हो जाती है।</p>
            </div>
            
            <div style={{ background: '#f1f5f9', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #8b5cf6' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#1e293b' }}>4. एनालिटिक्स और अलर्ट्स (Analytics)</h4>
              <p style={{ margin: 0, color: '#475569' }}>AI मॉडल पेंडिंग केसेस का विश्लेषण करता है, और अगर कोई केस 24 घंटे से अधिक समय तक अटका हुआ है, तो लाल रंग का अलर्ट जनरेट करता है।</p>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // Same logic for tech stack details...
  if (showFrontendDetails) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setShowFrontendDetails(false)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Tech Stack
        </button>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h3 style={{ margin: '0 0 2rem 0', fontSize: '2rem', color: '#0f172a', textAlign: 'center' }}>फ्रंटएंड (Frontend) - यूजर इंटरफेस</h3>
          <div className="workflow-step-card" style={{ borderLeftColor: '#3b82f6', paddingLeft: '2rem' }}>
            <h4 style={{ color: '#1d4ed8' }}>वेब एप्लिकेशन: React.js या Next.js</h4>
            <p>यह यूजर इंटरफेस को बहुत तेज़ और रेस्पॉन्सिव बनाता है। रीयल-टाइम डेटा रेंडरिंग के लिए React का वर्चुअल DOM बेहतरीन है।</p>
          </div>
          <div className="workflow-step-card" style={{ borderLeftColor: '#60a5fa', paddingLeft: '2rem' }}>
            <h4 style={{ color: '#2563eb' }}>चार्ट्स और ग्राफ्स: Recharts या Chart.js</h4>
            <p>डैशबोर्ड पर पेंडिंग केसेस, सॉल्व्ड केसेस और अधिकारियों के प्रदर्शन को विज़ुअलाइज़ करने के लिए इंटरैक्टिव चार्ट्स।</p>
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
          <h3 style={{ margin: '0 0 2rem 0', fontSize: '2rem', color: '#0f172a', textAlign: 'center' }}>बैकएंड (Backend) - कोर लॉजिक और API</h3>
          <div className="workflow-step-card" style={{ borderLeftColor: '#10b981', paddingLeft: '2rem' }}>
            <h4 style={{ color: '#047857' }}>प्रोग्रामिंग लैंग्वेज: Node.js (Express)</h4>
            <p>Node.js का इवेंट-ड्रिवन आर्किटेक्चर रीयल-टाइम और हाई-कंकरेंसी (हज़ारों लाइव डैशबोर्ड्स) को हैंडल करने के लिए सबसे अच्छा है।</p>
          </div>
          <div className="workflow-step-card" style={{ borderLeftColor: '#34d399', paddingLeft: '2rem' }}>
            <h4 style={{ color: '#059669' }}>रीयल-टाइम सर्वर: Socket.io</h4>
            <p>क्लाइंट और सर्वर के बीच टू-वे कम्युनिकेशन (WebSockets) स्थापित करने के लिए, जिससे रिफ्रेश किए बिना डेटा अपडेट हो।</p>
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
                    {renderChecklistItem('रीयल-टाइम अपडेट्स', 'क्या नया केस दर्ज होने पर डैशबोर्ड बिना रिफ्रेश किए तुरंत अपडेट हो रहा है?', evaluation.color)}
                    {renderChecklistItem('फिल्टरिंग और सॉर्टिंग', 'क्या पेंडिंग, क्लोज्ड और इन-प्रोग्रेस केसेस को आसानी से फिल्टर किया जा सकता है?', evaluation.color)}
                    {renderChecklistItem('अधिकारी ट्रैकिंग', 'क्या कौन सा केस किस अधिकारी के पास है, इसका स्पष्ट विवरण दिख रहा है?', evaluation.color)}
                  </>);
                case 2: return (
                  <>
                    {renderChecklistItem('डैशबोर्ड लोड टाइम', 'क्या पूरा डैशबोर्ड 1 सेकंड से कम समय में लोड हो रहा है?', evaluation.color)}
                    {renderChecklistItem('WebSocket स्थिरता', 'क्या इंटरनेट कनेक्शन टूटने और वापस आने पर सॉकेट अपने आप री-कनेक्ट हो रहा है?', evaluation.color)}
                  </>);
                case 3: return (
                  <>
                    {renderChecklistItem('रोल-बेस्ड डैशबोर्ड', 'क्या SHO को पूरे थाने का और कांस्टेबल को सिर्फ अपने केस का डैशबोर्ड दिख रहा है?', evaluation.color)}
                    {renderChecklistItem('डेटा सिक्योरिटी', 'क्या सभी API कॉल्स JWT टोकन के जरिए सुरक्षित हैं?', evaluation.color)}
                  </>);
                case 4: return (
                  <>
                    {renderChecklistItem('लाइव डैशबोर्ड लिंक', 'डैशबोर्ड का काम करता हुआ लाइव लिंक (Vercel/Render)', evaluation.color)}
                    {renderChecklistItem('सोर्स कोड और आर्किटेक्चर', 'पूरी तरह से डॉक्युमेंटेड कोड और WebSockets आर्किटेक्चर डायग्राम', evaluation.color)}
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
                यह <strong>थाना डैशबोर्ड (Real-time Tracker)</strong> पुलिस स्टेशन स्तर (Thane Level) पर मुकदमों, शिकायतों और जांच अधिकारियों (IOs) के प्रदर्शन को रीयल-टाइम में ट्रैक करने का एक अत्याधुनिक सिस्टम है।
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
                  <h4 className="workflow-step-title">1. रीयल-टाइम डेटा सिंकिंग (Data Syncing)</h4>
                  <p className="workflow-step-desc">CCTNS या अन्य पोर्टल्स से नया केस आते ही यह डैशबोर्ड में तुरंत पॉप-अप होता है।</p>
                </div>
                <div className="workflow-step-card" style={{ borderLeftColor: '#10b981' }}>
                  <h4 className="workflow-step-title">2. स्मार्ट केस असाइनमेंट (Smart Assignment)</h4>
                  <p className="workflow-step-desc">अधिकारियों के मौजूदा वर्कलोड और स्पेशलाइजेशन के आधार पर AI केस असाइन करता है।</p>
                </div>
                <div className="workflow-step-card" style={{ borderLeftColor: '#f59e0b' }}>
                  <h4 className="workflow-step-title">3. लाइव प्रोग्रेस मॉनिटरिंग (Live Monitoring)</h4>
                  <p className="workflow-step-desc">डैशबोर्ड में पेंडिंग इन्वेस्टिगेशन, अरेस्ट वारंट और सबूतों का लाइव स्टेटस चार्ट्स के माध्यम से दिखता है।</p>
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
                  <h4>1. फ्रंटएंड (Frontend)</h4>
                  <p>React.js, Tailwind CSS, Recharts (Charts/Graphs)</p>
                  <div style={{ marginTop: '1rem', color: '#2563eb', fontSize: '0.85rem', fontWeight: '600' }}>Click to view details &rarr;</div>
                </div>

                <div className="tech-category-card" onClick={() => setShowBackendDetails(true)} style={{ cursor: 'pointer' }}>
                  <div className="tech-icon-wrapper" style={{ background: '#d1fae5' }}><Server size={24} color="#10b981" /></div>
                  <h4>2. बैकएंड और सॉकेट (Backend & Sockets)</h4>
                  <p>Node.js, Express, Socket.io (For Real-time)</p>
                  <div style={{ marginTop: '1rem', color: '#10b981', fontSize: '0.85rem', fontWeight: '600' }}>Click to view details &rarr;</div>
                </div>
                
                <div className="tech-category-card" style={{ cursor: 'pointer' }}>
                  <div className="tech-icon-wrapper" style={{ background: '#fef3c7' }}><Database size={24} color="#f59e0b" /></div>
                  <h4>3. डेटाबेस (Database)</h4>
                  <p>PostgreSQL (Transactions), Redis (Caching)</p>
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
                      <div style={{ background: `${step.color}15`, padding: '0.75rem', borderRadius: '50%', marginBottom: '0.75rem', display: 'inline-block' }}>
                        <Icon size={24} color={step.color} />
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
                      <div style={{ background: `${resource.color}15`, padding: '0.75rem', borderRadius: '50%', marginBottom: '0.75rem', display: 'inline-block' }}>
                        <Icon size={24} color={resource.color} />
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
                      <div style={{ background: `${evaluation.color}15`, padding: '0.75rem', borderRadius: '50%', marginBottom: '0.75rem', display: 'inline-block' }}>
                        <Icon size={24} color={evaluation.color} />
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
              <p className="placeholder-text">Project configuration settings for Thana Dashboard.</p>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
