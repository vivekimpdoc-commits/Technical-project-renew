import React, { useState } from 'react';
import { ArrowLeft, LayoutDashboard, FileText, Activity, Users, Settings, Network, Code, Monitor, Server, BrainCircuit, Database, ListOrdered, Shield, CheckCircle, BookOpen, Mic, CheckSquare, Camera, Video, AlertTriangle } from 'lucide-react';
import './ProjectDetailsView.css';

export default function SafetyAIDetails({ project, onBack }) {
  const [activeTab, setActiveTab] = useState('overview');

  const [showFullscreenFlowchart, setShowFullscreenFlowchart] = useState(false);
  const [showFrontendDetails, setShowFrontendDetails] = useState(false);
  const [showBackendDetails, setShowBackendDetails] = useState(false);
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);

  const guideSteps = [
    { id: 1, title: 'चरण 1: CCTV कैमरा इंटीग्रेशन', subtitle: 'CCTV Integration', icon: Camera, color: '#3b82f6' },
    { id: 2, title: 'चरण 2: कंप्यूटर विज़न (CV) मॉडल ट्रेनिंग', subtitle: 'CV Model Training', icon: BrainCircuit, color: '#10b981' },
    { id: 3, title: 'चरण 3: रीयल-टाइम वीडियो स्ट्रीम प्रोसेसिंग', subtitle: 'Video Processing', icon: Video, color: '#f59e0b' },
    { id: 4, title: 'चरण 4: अलर्ट सिस्टम सेटअप', subtitle: 'Alert System Setup', icon: AlertTriangle, color: '#8b5cf6' },
    { id: 5, title: 'चरण 5: वेब मॉनिटरिंग डैशबोर्ड', subtitle: 'Monitoring Dashboard', icon: Monitor, color: '#ec4899' },
    { id: 6, title: 'चरण 6: सुरक्षा और डेटा प्राइवेसी', subtitle: 'Privacy & Security', icon: Shield, color: 'var(--text-muted)' },
  ];

  const resourcesList = [
    { id: 1, title: '1. हिंसा और असामान्य व्यवहार का डेटासेट', subtitle: 'Violence & Anomaly Dataset', icon: Video, color: '#e11d48' },
    { id: 2, title: '2. लॉकअप लेआउट और कैमरा एंगल्स', subtitle: 'Camera Angle Layouts', icon: LayoutDashboard, color: '#2563eb' },
    { id: 3, title: '3. YOLOv8 प्री-ट्रेंड मॉडल्स', subtitle: 'Pre-trained CV Models', icon: BrainCircuit, color: '#10b981' },
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
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: 'var(--icon-bg)', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setShowFullscreenFlowchart(false)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'var(--card-bg)', borderRadius: '0.5rem', color: 'var(--text-main)', border: '1px solid var(--card-border)', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Architecture Menu
        </button>
        <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.75rem', color: 'var(--text-main)' }}>स्मार्ट लॉकअप गार्ड (Safety AI) आर्किटेक्चर</h3>
        
        <div style={{ maxWidth: '900px', margin: '0 auto', background: 'var(--card-bg)', padding: '3rem', borderRadius: '1rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div style={{ background: 'var(--icon-bg)', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #64748b' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-main)' }}>1. वीडियो स्ट्रीमिंग (Video Streaming)</h4>
              <p style={{ margin: 0, color: 'var(--text-muted)' }}>लॉकअप के अंदर लगे CCTV कैमरों से RTSP प्रोटोकॉल के जरिए लाइव वीडियो फीड AI सर्वर पर भेजी जाती है।</p>
            </div>

            <div style={{ background: '#fef2f2', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #ef4444' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#b91c1c' }}>2. AI विज़न एनालिसिस (Computer Vision)</h4>
              <p style={{ margin: 0, color: 'var(--text-muted)' }}>YOLOv8 और Pose Estimation मॉडल फ्रेम-दर-फ्रेम वीडियो की जांच करते हैं ताकि हिंसा (Violence), आत्महत्या का प्रयास (Suicide attempt) या बेहोशी का पता चल सके।</p>
            </div>

            <div style={{ background: '#f0f9ff', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #0ea5e9' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#0369a1' }}>3. ऑडियो एनालिसिस (Audio Analytics)</h4>
              <p style={{ margin: 0, color: 'var(--text-muted)' }}>अगर लॉकअप में कोई असामान्य आवाज़ (जैसे चीखना, जोर से चिल्लाना) आती है, तो ऑडियो मॉडल (Speech/Sound AI) उसे डिटेक्ट करता है।</p>
            </div>
            
            <div style={{ background: '#fffbeb', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #f59e0b' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#b45309' }}>4. रीयल-टाइम इमरजेंसी अलर्ट्स (Emergency Alerts)</h4>
              <p style={{ margin: 0, color: 'var(--text-muted)' }}>जैसे ही कोई संदिग्ध गतिविधि पकड़ी जाती है, सिस्टम तुरंत थानेदार (SHO) और ड्यूटी ऑफिसर के कंप्यूटर और मोबाइल पर अलार्म बजा देता है।</p>
            </div>

          </div>
        </div>
      </div>
    );
  }

  if (showFrontendDetails) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: 'var(--icon-bg)', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setShowFrontendDetails(false)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'var(--card-bg)', borderRadius: '0.5rem', color: 'var(--text-main)', border: '1px solid var(--card-border)', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Tech Stack
        </button>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h3 style={{ margin: '0 0 2rem 0', fontSize: '2rem', color: 'var(--text-main)', textAlign: 'center' }}>फ्रंटएंड (Frontend) - मॉनिटरिंग डैशबोर्ड</h3>
          <div className="workflow-step-card" style={{ borderLeftColor: '#3b82f6', paddingLeft: '2rem' }}>
            <h4 style={{ color: '#1d4ed8' }}>कंट्रोल रूम के लिए: React.js</h4>
            <p>एक मल्टी-स्क्रीन डैशबोर्ड जहां सभी कैमरों की लाइव फीड दिखती है और अलर्ट्स आने पर स्क्रीन लाल रंग में ब्लिंक करती है।</p>
          </div>
        </div>
      </div>
    );
  }

  if (showBackendDetails) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: 'var(--icon-bg)', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setShowBackendDetails(false)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'var(--card-bg)', borderRadius: '0.5rem', color: 'var(--text-main)', border: '1px solid var(--card-border)', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Tech Stack
        </button>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h3 style={{ margin: '0 0 2rem 0', fontSize: '2rem', color: 'var(--text-main)', textAlign: 'center' }}>बैकएंड (Backend) - AI मॉडल्स और वीडियो प्रोसेसिंग</h3>
          <div className="workflow-step-card" style={{ borderLeftColor: '#10b981', paddingLeft: '2rem' }}>
            <h4 style={{ color: '#047857' }}>AI इंजन: Python (TensorFlow / PyTorch)</h4>
            <p>कंप्यूटर विज़न मॉडल (YOLO, MediaPipe) जो रीयल-टाइम में कैदियों के पोज़ (Pose) और गतिविधियों का विश्लेषण करता है।</p>
          </div>
          <div className="workflow-step-card" style={{ borderLeftColor: '#34d399', paddingLeft: '2rem' }}>
            <h4 style={{ color: '#059669' }}>वीडियो प्रोसेसिंग: OpenCV & WebRTC</h4>
            <p>CCTV फीड को प्रोसेस करने और बिना किसी देरी (latency) के फ्रंटएंड पर स्ट्रीम करने के लिए।</p>
          </div>
        </div>
      </div>
    );
  }

  const renderChecklistItem = (title, description, color) => (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      <CheckCircle color={color} size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
      <div>
        <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-main)', fontSize: '1.1rem' }}>{title}</h4>
        <p style={{ margin: 0, color: 'var(--text-muted)' }}>{description}</p>
      </div>
    </div>
  );

  if (selectedEvaluation !== null) {
    const evaluation = evaluationList.find(e => e.id === selectedEvaluation);
    const EvaluationIcon = evaluation.icon;
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: 'var(--icon-bg)', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setSelectedEvaluation(null)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'var(--card-bg)', borderRadius: '0.5rem', color: 'var(--text-main)', border: '1px solid var(--card-border)', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Submission / Evaluation
        </button>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <EvaluationIcon size={40} color={evaluation.color} />
            <h3 style={{ margin: 0, fontSize: '2rem', color: 'var(--text-main)' }}>{evaluation.title}</h3>
          </div>
          <div className="workflow-container" style={{ padding: 0 }}>
            {(() => {
              switch(evaluation.id) {
                case 1: return (
                  <>
                    {renderChecklistItem('हिंसा (Violence) डिटेक्शन', 'क्या कोई कैदी आपस में लड़ता है तो मॉडल उसे 2 सेकंड के भीतर डिटेक्ट कर लेता है?', evaluation.color)}
                    {renderChecklistItem('इमरजेंसी अलर्ट', 'अलर्ट जेनरेट होने पर क्या तुरंत कंट्रोल रूम में सायरन या लाल स्क्रीन पॉप-अप होता है?', evaluation.color)}
                  </>);
                case 2: return (
                  <>
                    {renderChecklistItem('वीडियो लेटेंसी (Latency)', 'क्या लाइव वीडियो फीड और एनालिसिस के बीच 1 सेकंड से कम का डिले (Delay) है?', evaluation.color)}
                    {renderChecklistItem('हार्डवेयर ऑप्टिमाइजेशन', 'क्या मॉडल बिना बहुत भारी GPU के भी सामान्य सर्वर पर ठीक काम कर रहा है?', evaluation.color)}
                  </>);
                case 3: return (
                  <>
                    {renderChecklistItem('प्राइवेसी और एथिक्स', 'क्या वीडियो डेटा केवल मॉनिटरिंग के लिए इस्तेमाल हो रहा है और बिना अनुमति के सेव नहीं हो रहा?', evaluation.color)}
                  </>);
                case 4: return (
                  <>
                    {renderChecklistItem('वर्किंग प्रोटोटाइप/डेमो', 'लाइव काम करता हुआ वेब ऐप, जिसमें डमी वीडियो पर AI को काम करते हुए दिखाया गया हो।', evaluation.color)}
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
                यह <strong>स्मार्ट लॉकअप गार्ड (Safety AI)</strong> थाने के लॉकअप में बंद कैदियों की सुरक्षा के लिए एक 24/7 AI-संचालित मॉनिटरिंग सिस्टम है। यह CCTV कैमरों की मदद से लॉकअप के अंदर की हर गतिविधि पर नजर रखता है, और यदि कोई कैदी आत्महत्या का प्रयास करता है, आपस में झगड़ता है या अचानक बेहोश हो जाता है, तो यह तुरंत ड्यूटी ऑफिसर को अलर्ट कर देता है।
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
                  <h4 className="workflow-step-title">1. लाइव CCTV फीड (Live Feed)</h4>
                  <p className="workflow-step-desc">लॉकअप के CCTV कैमरों से लाइव वीडियो लगातार AI सर्वर पर स्ट्रीम होती है।</p>
                </div>
                <div className="workflow-step-card" style={{ borderLeftColor: '#ef4444' }}>
                  <h4 className="workflow-step-title">2. AI थ्रेट डिटेक्शन (Threat Detection)</h4>
                  <p className="workflow-step-desc">YOLOv8 मॉडल फ्रेम-दर-फ्रेम विश्लेषण करके किसी भी तरह की हिंसा या संदिग्ध हरकत की पहचान करता है।</p>
                </div>
                <div className="workflow-step-card" style={{ borderLeftColor: '#f59e0b' }}>
                  <h4 className="workflow-step-title">3. कंट्रोल रूम अलर्ट (Instant Alerts)</h4>
                  <p className="workflow-step-desc">खतरा डिटेक्ट होते ही सिस्टम जोर से सायरन बजाता है और स्क्रीन पर लाल घेरे के साथ अलर्ट दिखाता है।</p>
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
                  <h4>1. मॉनिटरिंग डैशबोर्ड (Frontend)</h4>
                  <p>React.js, WebRTC</p>
                  <div style={{ marginTop: '1rem', color: '#2563eb', fontSize: '0.85rem', fontWeight: '600' }}>Click to view details &rarr;</div>
                </div>

                <div className="tech-category-card" onClick={() => setShowBackendDetails(true)} style={{ cursor: 'pointer' }}>
                  <div className="tech-icon-wrapper" style={{ background: '#d1fae5' }}><BrainCircuit size={24} color="#10b981" /></div>
                  <h4>2. कंप्यूटर विज़न (AI Backend)</h4>
                  <p>Python, YOLOv8, OpenCV</p>
                  <div style={{ marginTop: '1rem', color: '#10b981', fontSize: '0.85rem', fontWeight: '600' }}>Click to view details &rarr;</div>
                </div>
                
                <div className="tech-category-card" style={{ cursor: 'pointer' }}>
                  <div className="tech-icon-wrapper" style={{ background: '#fef3c7' }}><Server size={24} color="#f59e0b" /></div>
                  <h4>3. वीडियो स्ट्रीमिंग सर्वर</h4>
                  <p>RTSP Server</p>
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
                      <p style={{ margin: 0, color: 'var(--text-muted)' }}>{step.subtitle}</p>
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
                      <p style={{ margin: 0, color: 'var(--text-muted)' }}>{evaluation.subtitle}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="details-card">
              <h3>Settings</h3>
              <p className="placeholder-text">Project configuration settings for Safety AI.</p>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
