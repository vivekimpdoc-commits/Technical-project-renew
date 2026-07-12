import React, { useState } from 'react';
import { ArrowLeft, LayoutDashboard, FileText, Activity, Users, Settings, Network, Code, Monitor, Server, BrainCircuit, Database, ListOrdered, Shield, CheckCircle, BookOpen, Mic, CheckSquare, Map, Smartphone, MapPin } from 'lucide-react';
import './ProjectDetailsView.css';

export default function DigitalBeatBookDetails({ project, onBack }) {
  const [activeTab, setActiveTab] = useState('overview');

  // Fullscreen states
  const [showFullscreenFlowchart, setShowFullscreenFlowchart] = useState(false);
  const [showFrontendDetails, setShowFrontendDetails] = useState(false);
  const [showBackendDetails, setShowBackendDetails] = useState(false);
  const [showAiDetails, setShowAiDetails] = useState(false);
  
  const [selectedGuideStep, setSelectedGuideStep] = useState(null);
  const [selectedResource, setSelectedResource] = useState(null);
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);

  const guideSteps = [
    { id: 1, title: 'चरण 1: ऐतिहासिक अपराध डेटा का संकलन', subtitle: 'Historical Crime Data Prep', icon: Database, color: '#3b82f6' },
    { id: 2, title: 'चरण 2: AI प्रेडिक्टिव मॉडल की ट्रेनिंग', subtitle: 'AI Model Training', icon: BrainCircuit, color: '#10b981' },
    { id: 3, title: 'चरण 3: मोबाइल ऐप का निर्माण', subtitle: 'React Native App Dev', icon: Smartphone, color: '#f59e0b' },
    { id: 4, title: 'चरण 4: जियो-फेंसिंग और GPS इंटीग्रेशन', subtitle: 'Geo-fencing & GPS', icon: MapPin, color: '#8b5cf6' },
    { id: 5, title: 'चरण 5: वेब एडमिन डैशबोर्ड (SHO)', subtitle: 'Web Admin Dashboard', icon: Monitor, color: '#ec4899' },
    { id: 6, title: 'चरण 6: ऑफलाइन सिंक और डिप्लॉयमेंट', subtitle: 'Offline Sync & Deployment', icon: Shield, color: '#64748b' },
  ];

  const resourcesList = [
    { id: 1, title: '1. ऐतिहासिक अपराध हॉटस्पॉट डेटासेट', subtitle: 'Crime Hotspot Dataset', icon: Map, color: '#e11d48' },
    { id: 2, title: '2. जियो-फेंसिंग और रूट मैप डेटा', subtitle: 'Geo-fencing Maps', icon: MapPin, color: '#2563eb' },
    { id: 3, title: '3. डमी हिस्ट्री शीटर डेटाबेस', subtitle: 'Mock Criminal Database', icon: Users, color: '#10b981' },
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
        <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.75rem', color: '#0f172a' }}>डिजिटल बीट बुक (Guardian AI) आर्किटेक्चर</h3>
        
        <div style={{ maxWidth: '900px', margin: '0 auto', background: 'white', padding: '3rem', borderRadius: '1rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div style={{ background: '#fef2f2', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #ef4444' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#7f1d1d' }}>1. डेटा कलेक्शन (Data Collection)</h4>
              <p style={{ margin: 0, color: '#475569' }}>CCTNS से पिछले 10 सालों का क्राइम डेटा (लोकेशन, समय, और अपराध का प्रकार) लिया जाता है।</p>
            </div>

            <div style={{ background: '#f0fdf4', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #10b981' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#14532d' }}>2. Guardian AI प्रेडिक्शन इंजन</h4>
              <p style={{ margin: 0, color: '#475569' }}>Machine Learning मॉडल इस डेटा का विश्लेषण करके अपराध के 'हॉटस्पॉट' (Hotspots) की भविष्यवाणी करता है और बीट सिपाही के लिए सबसे सुरक्षित और प्रभावी गश्त (Patrol) रूट तैयार करता है।</p>
            </div>

            <div style={{ background: '#eff6ff', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #3b82f6' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#1e3a8a' }}>3. मोबाइल ऐप अलर्ट्स (Mobile App Alerts)</h4>
              <p style={{ margin: 0, color: '#475569' }}>सिपाही जब अपनी बीट (इलाके) में होता है, तो ऐप उसे GPS के ज़रिए ट्रैक करता है और आस-पास के हिस्ट्री-शीटर या वांटेड अपराधियों की फोटो के साथ पुश अलर्ट देता है।</p>
            </div>
            
            <div style={{ background: '#fffbeb', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #f59e0b' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#78350f' }}>4. सेंट्रल कमांड (Central Command)</h4>
              <p style={{ margin: 0, color: '#475569' }}>थाना प्रभारी (SHO) डैशबोर्ड पर अपने सभी बीट सिपाहियों की लाइव लोकेशन और उनके द्वारा ऐप पर दर्ज की गई खुफिया जानकारी (Intelligence) को रीयल-टाइम में देख सकते हैं।</p>
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
          <h3 style={{ margin: '0 0 2rem 0', fontSize: '2rem', color: '#0f172a', textAlign: 'center' }}>फ्रंटएंड (Frontend) - वेब और मोबाइल</h3>
          <div className="workflow-step-card" style={{ borderLeftColor: '#3b82f6', paddingLeft: '2rem' }}>
            <h4 style={{ color: '#1d4ed8' }}>मोबाइल ऐप (सिपाहियों के लिए): React Native</h4>
            <p>एक ही कोडबेस से Android और iOS दोनों ऐप बनते हैं। यह ऐप बैटरी बचाने (Battery Optimization) और ऑफलाइन मोड (Offline Sync) के लिए विशेष रूप से डिज़ाइन किया जाता है।</p>
          </div>
          <div className="workflow-step-card" style={{ borderLeftColor: '#60a5fa', paddingLeft: '2rem' }}>
            <h4 style={{ color: '#2563eb' }}>वेब एडमिन (SHO के लिए): React.js</h4>
            <p>कंट्रोल रूम या थाने के लिए लाइव मैप्स (Google Maps API / Mapbox) के साथ एक पावरफुल वेब इंटरफेस।</p>
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
            <h4 style={{ color: '#047857' }}>कोर API सर्वर: Python (FastAPI)</h4>
            <p>Python का उपयोग इसलिए किया गया है क्योंकि इसमें Machine Learning मॉडल्स (Scikit-Learn/TensorFlow) को चलाना और इंटीग्रेट करना बहुत आसान और तेज़ होता है।</p>
          </div>
          <div className="workflow-step-card" style={{ borderLeftColor: '#34d399', paddingLeft: '2rem' }}>
            <h4 style={{ color: '#059669' }}>डेटाबेस: PostgreSQL & PostGIS</h4>
            <p>नॉर्मल डेटा के लिए PostgreSQL और मैप/लोकेशन (Geo-spatial) डेटा के लिए PostGIS एक्सटेंशन का इस्तेमाल होता है, ताकि लोकेशन सर्च तुरंत हो सके।</p>
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
                    {renderChecklistItem('GPS ट्रैकिंग सटीकता', 'क्या ऐप बैकग्राउंड में भी सिपाही की लोकेशन को सही से ट्रैक कर रहा है?', evaluation.color)}
                    {renderChecklistItem('AI प्रेडिक्शन अलर्ट्स', 'क्या किसी अपराध संभावित क्षेत्र (Hotspot) में प्रवेश करने पर ऐप अलर्ट दे रहा है?', evaluation.color)}
                    {renderChecklistItem('ई-बीट दर्ज करना', 'क्या सिपाही आसानी से ऐप के ज़रिए संदेहास्पद व्यक्तियों की फोटो और जानकारी दर्ज कर पा रहे हैं?', evaluation.color)}
                  </>);
                case 2: return (
                  <>
                    {renderChecklistItem('बैटरी और डेटा खपत', 'क्या मोबाइल ऐप को लगातार चलाने से फोन की बैटरी ज़्यादा तेज़ी से तो नहीं गिर रही?', evaluation.color)}
                    {renderChecklistItem('ऑफलाइन काम करने की क्षमता', 'क्या बिना इंटरनेट वाले इलाके में भी ऐप काम करता है और नेटवर्क आने पर डेटा सिंक करता है?', evaluation.color)}
                  </>);
                case 3: return (
                  <>
                    {renderChecklistItem('लोकल डेटा एनक्रिप्शन', 'क्या मोबाइल में सेव होने वाला संवेदनशील डेटा पूरी तरह एन्क्रिप्टेड (Encrypted) है?', evaluation.color)}
                    {renderChecklistItem('डिवाइस ऑथराइजेशन', 'क्या केवल रजिस्टर्ड सरकारी फोन (या आईडी) से ही ऐप लॉग-इन किया जा सकता है?', evaluation.color)}
                  </>);
                case 4: return (
                  <>
                    {renderChecklistItem('मोबाइल ऐप (.apk / TestFlight)', 'टेस्टिंग के लिए Android APK या iOS लिंक।', evaluation.color)}
                    {renderChecklistItem('AI एक्यूरेसी रिपोर्ट', 'Guardian AI मॉडल की सटीकता (Accuracy metrics) की विस्तृत रिपोर्ट।', evaluation.color)}
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
                यह <strong>डिजिटल बीट बुक (Guardian AI)</strong> सिस्टम पुलिस बीट पेट्रोलिंग को स्मार्ट बनाता है। यह कागजी डायरी को हटाकर एक AI-पॉवर्ड मोबाइल ऐप प्रदान करता है जो सिपाहियों को अपराध संभावित क्षेत्रों (Hotspots) की भविष्यवाणी करता है और अपराधियों की पहचान में मदद करता है।
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
                  <h4 className="workflow-step-title">1. AI हॉटस्पॉट एनालिसिस (AI Hotspot Analysis)</h4>
                  <p className="workflow-step-desc">Guardian AI पिछले अपराध डेटा का अध्ययन करके बताता है कि आज रात गश्त (Patrol) कहाँ करनी चाहिए।</p>
                </div>
                <div className="workflow-step-card" style={{ borderLeftColor: '#10b981' }}>
                  <h4 className="workflow-step-title">2. लोकेशन बेस्ड अलर्ट्स (Location Alerts)</h4>
                  <p className="workflow-step-desc">सिपाही के बीट एरिया में जाते ही मोबाइल ऐप उसे वहाँ के हिस्ट्री-शीटर अपराधियों की लिस्ट दिखा देता है।</p>
                </div>
                <div className="workflow-step-card" style={{ borderLeftColor: '#f59e0b' }}>
                  <h4 className="workflow-step-title">3. डिजिटल इंटेलिजेंस एंट्री (Digital Entry)</h4>
                  <p className="workflow-step-desc">सिपाही ऐप से संदिग्ध वाहनों या व्यक्तियों की फोटो खींचकर सीधे सेंट्रल सर्वर पर सेव कर सकता है।</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tech-stack' && (
            <div className="details-card">
              <h3>Tech Stack (तकनीकी टूल्स)</h3>
              <div className="tech-stack-grid">
                
                <div className="tech-category-card" onClick={() => setShowFrontendDetails(true)} style={{ cursor: 'pointer' }}>
                  <div className="tech-icon-wrapper" style={{ background: '#dbeafe' }}><Smartphone size={24} color="#2563eb" /></div>
                  <h4>1. मोबाइल और वेब UI (Frontend)</h4>
                  <p>React Native (App), React.js (Dashboard)</p>
                  <div style={{ marginTop: '1rem', color: '#2563eb', fontSize: '0.85rem', fontWeight: '600' }}>Click to view details &rarr;</div>
                </div>

                <div className="tech-category-card" onClick={() => setShowBackendDetails(true)} style={{ cursor: 'pointer' }}>
                  <div className="tech-icon-wrapper" style={{ background: '#d1fae5' }}><Server size={24} color="#10b981" /></div>
                  <h4>2. बैकएंड और API (Backend)</h4>
                  <p>Python (FastAPI), PostGIS (Geo-location)</p>
                  <div style={{ marginTop: '1rem', color: '#10b981', fontSize: '0.85rem', fontWeight: '600' }}>Click to view details &rarr;</div>
                </div>
                
                <div className="tech-category-card" style={{ cursor: 'pointer' }}>
                  <div className="tech-icon-wrapper" style={{ background: '#fef3c7' }}><BrainCircuit size={24} color="#f59e0b" /></div>
                  <h4>3. प्रेडिक्टिव AI (Predictive AI)</h4>
                  <p>Scikit-Learn (Random Forest / K-Means), Python</p>
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
              <p className="placeholder-text">Project configuration settings for Digital Beat Book.</p>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
