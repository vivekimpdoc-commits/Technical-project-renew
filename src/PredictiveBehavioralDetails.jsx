import React, { useState } from 'react';
import { 
  ArrowLeft, LayoutDashboard, FileText, Code, ListOrdered, BookOpen, CheckSquare, Settings, Target, Shield, Database, Layout, CheckCircle, Network, Server, Briefcase, Activity, Monitor, BrainCircuit, Search, Zap, AlertTriangle, ActivitySquare, Eye, Users, LineChart
} from 'lucide-react';
import './ProjectDetailsView.css';

export default function PredictiveBehavioralDetails({ project, onBack }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [showFullscreenFlowchart, setShowFullscreenFlowchart] = useState(false);
  const [showFullscreenWorkflow, setShowFullscreenWorkflow] = useState(false);
  const [selectedGuideStep, setSelectedGuideStep] = useState(null);
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);
  const [selectedOverviewSection, setSelectedOverviewSection] = useState(null);

  const overviewSections = [
    { id: 'io-assistance', title: 'Loitering Detection', subtitle: 'संदिग्ध ठहराव की पहचान', icon: Eye, color: 'var(--text-muted)' },
    { id: 'objectives', title: 'Aggressive Posture', subtitle: 'लड़ाई या हिंसा की पूर्व चेतावनी', icon: ActivitySquare, color: '#2563eb' },
    { id: 'features', title: 'Panic Recognition', subtitle: 'भगदड़ या अचानक भागने का अलर्ट', icon: Users, color: '#ec4899' },
  ];

  const guideSteps = [
    { id: 1, title: 'चरण 1: Pose Estimation मॉडल', subtitle: 'Human Skeleton Tracking', icon: Activity, color: '#3b82f6' },
    { id: 2, title: 'चरण 2: Kinematics Analysis', subtitle: 'Velocity & Angles', icon: LineChart, color: '#10b981' },
    { id: 3, title: 'चरण 3: LSTM/RNN ट्रेनिंग', subtitle: 'Time-Series Action Recognition', icon: BrainCircuit, color: '#f59e0b' },
    { id: 4, title: 'चरण 4: Spatial Loitering Logic', subtitle: 'Dwelling Time Thresholds', icon: Eye, color: '#8b5cf6' },
    { id: 5, title: 'चरण 5: Alert Generation', subtitle: 'WebSockets for Real-time', icon: Server, color: '#ec4899' },
    { id: 6, title: 'चरण 6: Threat Matrix Dashboard', subtitle: 'UI Visualization', icon: Layout, color: 'var(--text-muted)' },
  ];

  const evaluationList = [
    { id: 1, title: '1. False Positive Rate', subtitle: 'Minimizing fake alerts', icon: Target, color: '#3b82f6' },
    { id: 2, title: '2. Pose Accuracy', subtitle: 'Skeleton tracking in crowds', icon: Zap, color: '#10b981' },
    { id: 3, title: '3. Response Latency', subtitle: '< 2 seconds alert time', icon: Activity, color: '#f59e0b' },
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
        <button 
          onClick={() => setShowFullscreenFlowchart(false)}
          style={{ padding: '0.75rem 1.5rem', background: 'var(--card-bg)', borderRadius: '0.5rem', border: '1px solid var(--card-border)', fontWeight: 'bold', cursor: 'pointer', marginBottom: '2rem' }}
        >
          Close Flowchart
        </button>
        <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--card-border)', height: 'calc(100vh - 100px)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: 'var(--text-muted)' }}>
          Detailed Interactive Flowchart (Behavioral Analytics) Will Render Here
        </div>
      </div>
    );
  }

  return (
    <div className="thane-dashboard-container" style={{ padding: '2rem', background: 'var(--icon-bg)', minHeight: '100vh', width: '100%' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <button onClick={onBack} className="thane-back-btn">
          <ArrowLeft size={20} /> Back to Dashboard
        </button>
          
          <div>
            <h1 style={{ fontSize: '1.75rem', color: 'var(--text-main)', fontWeight: '800', margin: 0, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <BrainCircuit color={project?.color || '#8b5cf6'} size={28} />
              {project?.name || 'व्यवहार विश्लेषण (Predictive Behavioral Analytics)'}
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: '0.25rem 0 0 0' }}>
              AI-driven human kinematics and intent prediction
            </p>
          </div>
        </div>
        
        <div style={{ padding: '0.5rem 1rem', background: `${project?.color || '#8b5cf6'}15`, color: project?.color || '#8b5cf6', borderRadius: '2rem', fontWeight: 'bold', fontSize: '0.85rem' }}>
          Project ID: {project?.id || '409'}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2rem' }}>
        {/* Sidebar Menu */}
        <div style={{ background: 'var(--card-bg)', borderRadius: '1rem', border: '1px solid var(--card-border)', padding: '1.5rem', alignSelf: 'start', position: 'sticky', top: '2rem' }}>
          <h3 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', paddingLeft: '0.5rem' }}>
            Project Menu
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '1rem', width: '100%', textAlign: 'left',
                  background: activeTab === tab.id ? '#f1f5f9' : 'transparent',
                  color: activeTab === tab.id ? (project?.color || '#8b5cf6') : '#475569',
                  border: 'none', borderRadius: '0.75rem', cursor: 'pointer',
                  fontWeight: activeTab === tab.id ? 'bold' : '500',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id) e.currentTarget.style.background = '#f8fafc';
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id) e.currentTarget.style.background = 'transparent';
                }}
              >
                <tab.icon size={18} />
                <span style={{ fontSize: '0.95rem', lineHeight: '1.2' }}>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div style={{ background: 'var(--card-bg)', borderRadius: '1rem', border: '1px solid var(--card-border)', minHeight: '600px', padding: '2.5rem' }}>
          
          {/* 1. OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="animate-fade-in">
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--text-main)', fontWeight: '800', marginBottom: '1rem' }}>Project Overview</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                  <strong>Predictive Behavioral Analytics</strong> इंसान के शरीर की हरकतों (Kinematics) का विश्लेषण करके उसके इरादों का अंदाज़ा लगाता है। उदाहरण के लिए, यदि कोई व्यक्ति किसी ATM के बाहर 15 मिनट से चक्कर काट रहा है, या सड़क पर अचानक दो लोग लड़ने लगते हैं, तो सिस्टम इसे 'Aggressive' या 'Suspicious' मानकर पुलिस को अलर्ट भेज देता है। यह अपराध होने से पहले उसे रोकने (Predictive Policing) में बहुत काम आता है।
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                {overviewSections.map((section) => (
                  <div 
                    key={section.id} 
                    onClick={() => setSelectedOverviewSection(selectedOverviewSection === section.id ? null : section.id)}
                    style={{ 
                      padding: '1.5rem', background: 'var(--icon-bg)', borderRadius: '1rem', border: '1px solid var(--card-border)',
                      cursor: 'pointer', transition: 'all 0.2s',
                      boxShadow: selectedOverviewSection === section.id ? `0 0 0 2px ${section.color}` : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <div style={{ padding: '0.75rem', background: 'var(--card-bg)', borderRadius: '0.75rem', color: section.color, boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                        <section.icon size={24} />
                      </div>
                      <div>
                        <h3 style={{ color: 'var(--text-main)', fontSize: '1.1rem', fontWeight: 'bold' }}>{section.title}</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{section.subtitle}</p>
                      </div>
                    </div>
                    {selectedOverviewSection === section.id && (
                      <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--card-border)', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                        {section.id === 'io-assistance' && "यदि कोई व्यक्ति बिना किसी उद्देश्य के एक ही जगह पर बहुत देर तक खड़ा रहता है (जैसे किसी घर की रेकी करना), तो कैमरा इसे डिटेक्ट कर लेता है।"}
                        {section.id === 'objectives' && "मॉडल इंसान के जोड़ों (हाथ, पैर, सिर) की पोजीशन ट्रैक करता है। जब अचानक हाथों की गति बहुत तेज़ होती है (जैसे मारपीट या हथियार निकालना), तो यह तुरंत अलर्ट जनरेट करता है।"}
                        {section.id === 'features' && "रेलवे स्टेशनों या रैलियों में जब बहुत सारे लोग एक साथ किसी एक दिशा में तेज़ी से भागते हैं, तो सिस्टम इसे 'Panic / Stampede' मानकर कंट्रोल रूम को सूचित करता है।"}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ background: '#0f172a', borderRadius: '1rem', padding: '2rem', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #8b5cf6, #ef4444)' }}></div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <LineChart color="#8b5cf6" /> Real-Time Behavioral Threat Matrix
                </h3>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ flex: '1 1 250px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '1.5rem', borderRadius: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <span style={{ color: '#34d399', fontWeight: 'bold' }}>Normal Flow</span>
                      <span style={{ color: '#34d399' }}>95%</span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Pedestrians moving at constant velocity.</p>
                  </div>

                  <div style={{ flex: '1 1 250px', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', padding: '1.5rem', borderRadius: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>Suspicious Loitering</span>
                      <span style={{ color: '#fbbf24' }}>Sector 4</span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Subject dwelling near ATM for &gt; 15 mins.</p>
                  </div>

                  <div style={{ flex: '1 1 250px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '1.5rem', borderRadius: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <span style={{ color: '#f87171', fontWeight: 'bold' }}>Aggressive Action</span>
                      <span style={{ color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><ShieldAlert size={14} /> ACTIVE</span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Violent kinematics detected at Alley B.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
             <div className="animate-fade-in">
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
               <h2 style={{ fontSize: '1.8rem', color: 'var(--text-main)', fontWeight: '800' }}>Architecture & Workflow</h2>
             </div>
             
             <div style={{ background: 'var(--icon-bg)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--card-border)', marginBottom: '2rem' }}>
               <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '1.5rem', fontWeight: 'bold' }}>1. Pose Estimation (बॉडी स्ट्रक्चर बनाना)</h3>
               <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: '1.6' }}>स्ट्रीमिंग वीडियो को MediaPipe या YOLOv8-Pose जैसे मॉडल में भेजा जाता है। यह मॉडल हर व्यक्ति के शरीर पर 17-33 Keypoints (जैसे कोहनी, घुटने, कंधे) ड्रा करता है।</p>
               
               <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '1.5rem', marginTop: '2rem', fontWeight: 'bold' }}>2. Sequence Analysis (लगातार हरकतें देखना)</h3>
               <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: '1.6' }}>किसी व्यक्ति के हाव-भाव को एक फ्रेम से नहीं पहचाना जा सकता। इसलिए पिछले 30-60 फ्रेम्स (1-2 सेकंड) के Keypoints के डेटा को एक RNN या LSTM (Long Short-Term Memory) न्यूरल नेटवर्क में भेजा जाता है।</p>
               
               <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '1.5rem', marginTop: '2rem', fontWeight: 'bold' }}>3. Classification & Thresholding (निर्णय लेना)</h3>
               <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: '1.6' }}>LSTM मॉडल आउटपुट देता है जैसे: 'Walking' (90%), 'Fighting' (8%)। यदि 'Fighting' या 'Falling' का स्कोर एक निश्चित सीमा (Threshold) पार करता है, तो तुरंत WebSocket के ज़रिए कमांड सेंटर में रेड अलर्ट बज जाता है।</p>
             </div>
           </div>
          )}

          {activeTab === 'tech-stack' && (
            <div className="animate-fade-in">
              <h2 style={{ fontSize: '1.8rem', color: 'var(--text-main)', fontWeight: '800', marginBottom: '2rem' }}>Tech Stack (तकनीकी टूल्स)</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <div style={{ border: '1px solid var(--card-border)', borderRadius: '1rem', padding: '1.5rem', background: 'var(--card-bg)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#3b82f6' }}><Code size={24} /> <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-main)', margin: 0 }}>Frontend UI</h3></div>
                  <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                    <li><strong>React.js:</strong> अलर्ट्स और ग्राफ्स दिखाने के लिए।</li>
                    <li><strong>Chart.js / Recharts:</strong> रियल-टाइम Threat Matrix ग्राफ के लिए।</li>
                    <li><strong>WebSockets:</strong> सर्वर से तुरंत अलर्ट प्राप्त करने के लिए।</li>
                  </ul>
                </div>
                <div style={{ border: '1px solid var(--card-border)', borderRadius: '1rem', padding: '1.5rem', background: 'var(--card-bg)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#10b981' }}><Server size={24} /> <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-main)', margin: 0 }}>Backend & API</h3></div>
                  <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                    <li><strong>Python (FastAPI):</strong> वीडियो फीड रिसीव करने के लिए।</li>
                    <li><strong>Redis:</strong> तेज़ डेटा प्रोसेसिंग और इन-मेमोरी इवेंट ट्रैकिंग के लिए।</li>
                    <li><strong>Socket.io:</strong> रियल-टाइम कम्युनिकेशन के लिए।</li>
                  </ul>
                </div>
                <div style={{ border: '1px solid var(--card-border)', borderRadius: '1rem', padding: '1.5rem', background: 'var(--card-bg)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#ec4899' }}><BrainCircuit size={24} /> <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-main)', margin: 0 }}>AI / Machine Learning</h3></div>
                  <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                    <li><strong>Ultralytics YOLOv8-Pose:</strong> इंसान की हड्डियां/स्केलेटन ड्रा करने के लिए।</li>
                    <li><strong>PyTorch / Keras:</strong> LSTM मॉडल (एक्शन पहचानने) के लिए।</li>
                    <li><strong>DeepSORT:</strong> एक व्यक्ति को लगातार ट्रैक करने के लिए (ताकि पता चले वह कितनी देर रुका है)।</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="animate-fade-in">
              <h2 style={{ fontSize: '1.8rem', color: 'var(--text-main)', fontWeight: '800', marginBottom: '2rem' }}>Step-by-Step Guide</h2>
              <div style={{ display: 'flex', gap: '2rem' }}>
                <div style={{ width: '300px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {guideSteps.map(step => (
                    <div 
                      key={step.id} 
                      onClick={() => setSelectedGuideStep(step.id)}
                      style={{ padding: '1rem', background: selectedGuideStep === step.id ? `${step.color}15` : '#f8fafc', border: `1px solid ${selectedGuideStep === step.id ? step.color : '#e2e8f0'}`, borderLeft: `4px solid ${step.color}`, borderRadius: '0.5rem', cursor: 'pointer', transition: 'all 0.2s' }}
                    >
                      <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--text-main)', marginBottom: '0.25rem' }}>{step.title}</h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{step.subtitle}</p>
                    </div>
                  ))}
                </div>
                <div style={{ flex: 1, background: 'var(--icon-bg)', border: '1px solid var(--card-border)', borderRadius: '1rem', padding: '2rem' }}>
                  {selectedGuideStep ? (
                    <div>
                      <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '1rem', fontWeight: 'bold' }}>
                        {guideSteps.find(s => s.id === selectedGuideStep).title}
                      </h3>
                      <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                        {selectedGuideStep === 1 && <p>सबसे पहले YOLOv8-Pose का उपयोग करें। यह मॉडल इमेज में मौजूद इंसानों को खोजता है और उनके शरीर पर X,Y कोऑर्डिनेट्स का एक सेट (Keypoints) रिटर्न करता है।</p>}
                        {selectedGuideStep === 2 && <p>DeepSORT अल्गोरिदम लगाकर हर इंसान को एक ID (जैसे Person-1) दें। अब हर फ्रेम में Person-1 के Keypoints को ट्रैक करें। इससे आपको पता चलेगा कि उसके हाथ-पैर कितनी तेजी से और किस दिशा में मूव कर रहे हैं (Velocity & Kinematics)।</p>}
                        {selectedGuideStep === 3 && <p>Kinetics-400 या UCF101 जैसे डेटासेट पर एक LSTM या 3D-CNN मॉडल को ट्रेन करें। यह मॉडल एक सिंगल इमेज नहीं, बल्कि पिछले 30 फ्रेम्स (वीडियो क्लिप) को देखकर बताता है कि इंसान "चल रहा है" या "लड़ रहा है"।</p>}
                        {selectedGuideStep === 4 && <p>Loitering (ठहराव) डिटेक्ट करने के लिए साधारण लॉजिक लिखें: यदि Person-1 का सेंटर पॉइंट (X,Y) पिछले 15 मिनट से एक 10-मीटर के दायरे (Bounding Area) से बाहर नहीं निकला है, तो 'Loitering' अलर्ट जनरेट कर दें।</p>}
                        {selectedGuideStep === 5 && <p>Python में FastAPI और WebSockets (Socket.io) का सेटअप करें। जैसे ही AI को कोई सस्पेक्टेड एक्टिविटी मिले, वह JSON फॉर्मेट में अलर्ट डेटा WebSocket के ज़रिए सभी क्लाइंट्स को ब्रॉडकास्ट कर दे।</p>}
                        {selectedGuideStep === 6 && <p>React में एक डैशबोर्ड बनाएं जो WebSocket से कनेक्ट हो। अलर्ट आते ही लाल रंग का पॉपअप स्क्रीन पर आ जाए और वह CCTV क्लिप खुद प्ले होने लगे।</p>}
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-muted)' }}>
                      <ListOrdered size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                      <p>बाईं ओर से एक चरण (Step) चुनें</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="animate-fade-in">
              <h2 style={{ fontSize: '1.8rem', color: 'var(--text-main)', fontWeight: '800', marginBottom: '2rem' }}>Resources & Datasets</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div style={{ background: 'var(--icon-bg)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--card-border)' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Database size={20} color={project?.color || '#8b5cf6'} /> Datasets</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0, margin: 0, listStyle: 'none' }}>
                    <li style={{ background: 'var(--card-bg)', padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--card-border)' }}>
                      <strong>Kinetics-400:</strong> <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Large-scale high-quality dataset of URL links to up to 650,000 video clips that cover 400 human action classes.</span>
                    </li>
                    <li style={{ background: 'var(--card-bg)', padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--card-border)' }}>
                      <strong>UCF101:</strong> <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Action recognition data set of realistic action videos.</span>
                    </li>
                  </ul>
                </div>
                <div style={{ background: 'var(--icon-bg)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--card-border)' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><BookOpen size={20} color={project?.color || '#8b5cf6'} /> Libraries</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0, margin: 0, listStyle: 'none' }}>
                    <li style={{ background: 'var(--card-bg)', padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--card-border)' }}>
                      <strong>YOLOv8-Pose:</strong> <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Pose estimation and tracking from Ultralytics.</span>
                    </li>
                    <li style={{ background: 'var(--card-bg)', padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--card-border)' }}>
                      <strong>DeepSORT:</strong> <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Real-time object tracking for assigning unique IDs.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'evaluation' && (
            <div className="animate-fade-in">
              <h2 style={{ fontSize: '1.8rem', color: 'var(--text-main)', fontWeight: '800', marginBottom: '2rem' }}>Submission / Evaluation Checklist</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {evaluationList.map(item => (
                  <div key={item.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: 'var(--icon-bg)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--card-border)' }}>
                    <div style={{ marginTop: '0.2rem' }}><CheckCircle color={item.color} size={24} /></div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--text-main)', marginBottom: '0.25rem' }}>{item.title}</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="animate-fade-in">
              <h2 style={{ fontSize: '1.8rem', color: 'var(--text-main)', fontWeight: '800', marginBottom: '2rem' }}>Project Settings</h2>
              <div style={{ background: 'var(--icon-bg)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--card-border)' }}>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>कॉन्फ़िगरेशन सेटिंग्स केवल एडमिनिस्ट्रेटर (SP/SSP) द्वारा बदली जा सकती हैं।</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1.5rem', borderBottom: '1px solid var(--card-border)' }}>
                    <div>
                      <h4 style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>Loitering Threshold</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>कितनी देर एक ही जगह रुकने पर अलर्ट देना है?</p>
                    </div>
                    <select style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--card-border)' }}><option>5 Minutes</option><option selected>15 Minutes</option><option>30 Minutes</option></select>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h4 style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>Aggression Sensitivity</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>लड़ाई या तेज़ हरकतों को पकड़ने की संवेदनशीलता।</p>
                    </div>
                    <select style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--card-border)' }}><option selected>High (Less False Positives)</option><option>Medium</option></select>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
