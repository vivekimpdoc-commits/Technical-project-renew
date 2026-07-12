import React, { useState } from 'react';
import { ArrowLeft, LayoutDashboard, FileText, Activity, Users, Settings, Network, Code, Monitor, Server, BrainCircuit, Database, ListOrdered, Shield, CheckCircle, BookOpen, Mic, CheckSquare, Package, QrCode, Crosshair } from 'lucide-react';
import './ProjectDetailsView.css';

export default function ArmouryAIDetails({ project, onBack }) {
  const [activeTab, setActiveTab] = useState('overview');

  // Fullscreen states
  const [showFullscreenFlowchart, setShowFullscreenFlowchart] = useState(false);
  const [showFrontendDetails, setShowFrontendDetails] = useState(false);
  const [showBackendDetails, setShowBackendDetails] = useState(false);
  
  const [selectedGuideStep, setSelectedGuideStep] = useState(null);
  const [selectedResource, setSelectedResource] = useState(null);
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);

  const guideSteps = [
    { id: 1, title: 'चरण 1: इन्वेंटरी डेटाबेस डिज़ाइन', subtitle: 'Inventory Schema Design', icon: Database, color: '#3b82f6' },
    { id: 2, title: 'चरण 2: QR/RFID ट्रैकिंग सिस्टम', subtitle: 'QR/RFID Tracking System', icon: QrCode, color: '#10b981' },
    { id: 3, title: 'चरण 3: बैकएंड API और अलर्ट्स', subtitle: 'Backend API & Alerts', icon: Server, color: '#f59e0b' },
    { id: 4, title: 'चरण 4: वेब डैशबोर्ड (UI)', subtitle: 'Web Dashboard UI', icon: Monitor, color: '#8b5cf6' },
    { id: 5, title: 'चरण 5: सिक्योरिटी और बायोमेट्रिक ऑथेंटिकेशन', subtitle: 'Biometric Auth', icon: Shield, color: '#ec4899' },
    { id: 6, title: 'चरण 6: परीक्षण और डिप्लॉयमेंट', subtitle: 'Testing & Deployment', icon: CheckCircle, color: '#64748b' },
  ];

  const resourcesList = [
    { id: 1, title: '1. हथियारों और गोला-बारूद की मास्टर लिस्ट', subtitle: 'Weapon Master Data', icon: Crosshair, color: '#e11d48' },
    { id: 2, title: '2. पुलिस अधिकारियों का पहचान डेटा', subtitle: 'Officer Identity Data', icon: Users, color: '#2563eb' },
    { id: 3, title: '3. डमी चेक-इन/चेक-आउट लॉग्स', subtitle: 'Mock Audit Logs', icon: FileText, color: '#10b981' },
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
        <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.75rem', color: '#0f172a' }}>स्मार्ट इन्वेंटरी (Armoury AI) आर्किटेक्चर</h3>
        
        <div style={{ maxWidth: '900px', margin: '0 auto', background: 'white', padding: '3rem', borderRadius: '1rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #64748b' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#334155' }}>1. डिजिटल रजिस्टर (Digital Registry)</h4>
              <p style={{ margin: 0, color: '#475569' }}>प्रत्येक हथियार और मैगज़ीन/गोला-बारूद को एक यूनीक QR/Bar-code या RFID टैग से मैप किया जाता है जिसे डेटाबेस में सुरक्षित रखा जाता है।</p>
            </div>

            <div style={{ background: '#f0f9ff', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #0ea5e9' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#0369a1' }}>2. इश्यू और रिटर्न प्रक्रिया (Issue & Return Process)</h4>
              <p style={{ margin: 0, color: '#475569' }}>जब भी किसी सिपाही को ड्यूटी के लिए हथियार दिया जाता है, तो स्कैनर से हथियार का कोड और सिपाही का ID कार्ड स्कैन किया जाता है। इससे सिस्टम में रियल-टाइम एंट्री हो जाती है।</p>
            </div>

            <div style={{ background: '#fef2f2', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #ef4444' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#b91c1c' }}>3. ऑटोमेटेड अलर्ट्स (Automated Alerts)</h4>
              <p style={{ margin: 0, color: '#475569' }}>अगर कोई हथियार ड्यूटी खत्म होने के बाद तय समय तक वापस नहीं आता है, तो सिस्टम ऑटोमेटिकली थानेदार (SHO) को SMS/ऐप अलर्ट भेजता है।</p>
            </div>
            
            <div style={{ background: '#f0fdf4', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #10b981' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#15803d' }}>4. ऑडिटिंग और एम्युनिशन ट्रैकिंग (Auditing & Tracking)</h4>
              <p style={{ margin: 0, color: '#475569' }}>गोला-बारूद के इस्तेमाल का रिकॉर्ड (कितनी गोलियां इश्यू हुईं और कितनी वापस आईं) सिस्टम में दर्ज होता है, जिससे हथियारों के दुरुपयोग पर रोक लगती है।</p>
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
            <h4 style={{ color: '#1d4ed8' }}>मालखाना ऑपरेटर के लिए: React.js</h4>
            <p>एक बहुत ही तेज़ और यूजर-फ्रेंडली डैशबोर्ड जहाँ बारकोड स्कैनर कनेक्ट किया जा सके। कीबोर्ड शॉर्टकट सपोर्ट के साथ डेटा एंट्री तेज़ होती है।</p>
          </div>
          <div className="workflow-step-card" style={{ borderLeftColor: '#60a5fa', paddingLeft: '2rem' }}>
            <h4 style={{ color: '#2563eb' }}>UI लाइब्रेरी: Tailwind CSS & Shadcn UI</h4>
            <p>साफ़, स्पष्ट और आधुनिक इंटरफ़ेस के लिए ताकि कंप्यूटर का कम ज्ञान रखने वाले पुलिसकर्मी भी इसे आसानी से चला सकें।</p>
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
            <h4 style={{ color: '#047857' }}>कोर API: Node.js (Express) या Python (FastAPI)</h4>
            <p>सिस्टम में हजारों इन्वेंटरी लॉग्स को बिना किसी एरर के प्रोसेस करने के लिए पावरफुल RESTful APIs।</p>
          </div>
          <div className="workflow-step-card" style={{ borderLeftColor: '#34d399', paddingLeft: '2rem' }}>
            <h4 style={{ color: '#059669' }}>डेटाबेस: PostgreSQL</h4>
            <p>ACID अनुपालन के साथ रिलेशनल डेटाबेस, ताकि इन्वेंटरी का कोई भी डेटा करप्ट या मिसमैच न हो।</p>
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
                    {renderChecklistItem('QR/बारकोड स्कैनिंग', 'क्या स्कैनर से कोड रीड करते ही सिस्टम में हथियार की डिटेल्स तुरंत फेच (Fetch) हो रही हैं?', evaluation.color)}
                    {renderChecklistItem('स्टॉक अपडेट', 'क्या हथियार इश्यू होने के बाद कुल स्टॉक (Available Stock) अपने आप घट रहा है?', evaluation.color)}
                    {renderChecklistItem('ओवरड्यू अलर्ट्स', 'क्या समय पर हथियार जमा न करने पर सिस्टम लाल रंग का वार्निंग या अलर्ट दिखा रहा है?', evaluation.color)}
                  </>);
                case 2: return (
                  <>
                    {renderChecklistItem('डेटाबेस अखंडता (ACID)', 'क्या एक साथ कई एंट्री करने पर सिस्टम बिना क्रैश हुए सही स्टॉक दिखा रहा है?', evaluation.color)}
                    {renderChecklistItem('ऑफ़लाइन सपोर्ट', 'क्या इंटरनेट न होने पर भी लोकल कैश में एंट्री सेव हो रही है?', evaluation.color)}
                  </>);
                case 3: return (
                  <>
                    {renderChecklistItem('ऑडिट ट्रेल (Audit Trail)', 'क्या कोई भी एंट्री डिलीट या एडिट नहीं की जा सकती (सिर्फ रिवर्स एंट्री अलाउड है)?', evaluation.color)}
                    {renderChecklistItem('मल्टी-फैक्टर ऑथेंटिकेशन', 'क्या मालखाना इंचार्ज को लॉग-इन करने के लिए OTP या बायोमेट्रिक की जरूरत पड़ रही है?', evaluation.color)}
                  </>);
                case 4: return (
                  <>
                    {renderChecklistItem('वर्किंग प्रोटोटाइप/डेमो', 'लाइव काम करता हुआ वेब ऐप, जिसमें डमी डेटा के साथ स्कैनिंग फीचर दिखाया गया हो।', evaluation.color)}
                    {renderChecklistItem('सोर्स कोड (GitHub/GitLab)', 'साफ कमेंट्स और README.md फाइल के साथ व्यवस्थित कोडबेस।', evaluation.color)}
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
                यह <strong>स्मार्ट इन्वेंटरी मैनेजर (Armoury AI)</strong> थाने के मालखाने (Armoury/Inventory) को पूरी तरह से डिजिटल और पारदर्शी बनाने का सिस्टम है। इसके ज़रिए पुलिस के हथियारों (Weapons), गोला-बारूद (Ammunition), और अन्य गियर्स का डिजिटल रिकॉर्ड रखा जाता है। यह सिस्टम यह सुनिश्चित करता है कि कौन सा हथियार किस अधिकारी के पास है और उसकी मौजूदा स्थिति क्या है।
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
                  <h4 className="workflow-step-title">1. QR/Bar-code असाइनमेंट</h4>
                  <p className="workflow-step-desc">हर हथियार और इक्विपमेंट पर एक सुरक्षित डिजिटल टैग लगाया जाता है जिसे सिस्टम से मैप किया जाता है।</p>
                </div>
                <div className="workflow-step-card" style={{ borderLeftColor: '#10b981' }}>
                  <h4 className="workflow-step-title">2. डिजिटल इश्यू-रिटर्न (Scan & Log)</h4>
                  <p className="workflow-step-desc">हथियार जारी करते समय मालखाना इंचार्ज केवल स्कैनर से टैग और अधिकारी का ID कार्ड स्कैन करता है।</p>
                </div>
                <div className="workflow-step-card" style={{ borderLeftColor: '#f59e0b' }}>
                  <h4 className="workflow-step-title">3. रियल-टाइम ट्रैकिंग & अलर्ट्स</h4>
                  <p className="workflow-step-desc">हथियार कब वापस आना चाहिए, इसका समय तय होता है। देरी होने पर सिस्टम तुरंत अलर्ट भेजता है।</p>
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
                  <p>Node.js, Express / FastAPI</p>
                  <div style={{ marginTop: '1rem', color: '#10b981', fontSize: '0.85rem', fontWeight: '600' }}>Click to view details &rarr;</div>
                </div>
                
                <div className="tech-category-card" style={{ cursor: 'pointer' }}>
                  <div className="tech-icon-wrapper" style={{ background: '#fef3c7' }}><Database size={24} color="#f59e0b" /></div>
                  <h4>3. रिलेशनल डेटाबेस</h4>
                  <p>PostgreSQL (Transactions)</p>
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
              <p className="placeholder-text">Project configuration settings for Smart Armoury AI.</p>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
