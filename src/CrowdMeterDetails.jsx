import React, { useState } from 'react';
import { 
  ArrowLeft, LayoutDashboard, FileText, Code, ListOrdered, BookOpen, CheckSquare, Settings, Target, Shield, Database, Layout, CheckCircle, Network, Server, Briefcase, Activity, Monitor, BrainCircuit, Search, Zap, AlertTriangle, Users, Maximize, Map
} from 'lucide-react';
import './ProjectDetailsView.css';

export default function CrowdMeterDetails({ project, onBack }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [showFullscreenFlowchart, setShowFullscreenFlowchart] = useState(false);
  const [showFullscreenWorkflow, setShowFullscreenWorkflow] = useState(false);
  const [selectedGuideStep, setSelectedGuideStep] = useState(null);
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);
  const [selectedOverviewSection, setSelectedOverviewSection] = useState(null);

  const overviewSections = [
    { id: 'io-assistance', title: 'Density Heatmapping', subtitle: 'भीड़ का लाइव घनत्व मापना', icon: Activity, color: '#475569' },
    { id: 'objectives', title: 'Stampede Warning', subtitle: 'भगदड़ की स्थिति की चेतावनी', icon: AlertTriangle, color: '#2563eb' },
    { id: 'features', title: 'Capacity Control', subtitle: 'स्थान की क्षमता का प्रबंधन', icon: Maximize, color: '#ec4899' },
  ];

  const guideSteps = [
    { id: 1, title: 'चरण 1: Density Estimation मॉडल', subtitle: 'CSRNet / MCNN', icon: BrainCircuit, color: '#3b82f6' },
    { id: 2, title: 'चरण 2: Heatmap जनरेशन', subtitle: 'Overlaying Heatmaps', icon: Map, color: '#10b981' },
    { id: 3, title: 'चरण 3: Flow Rate Calculation', subtitle: 'Optical Flow (Lucas-Kanade)', icon: Activity, color: '#f59e0b' },
    { id: 4, title: 'चरण 4: Alert Thresholds', subtitle: 'Defining Safe Limits', icon: AlertTriangle, color: '#8b5cf6' },
    { id: 5, title: 'चरण 5: Backend API', subtitle: 'Python/FastAPI', icon: Server, color: '#ec4899' },
    { id: 6, title: 'चरण 6: UI Dashboard', subtitle: 'React Live Metrics', icon: Layout, color: '#64748b' },
  ];

  const evaluationList = [
    { id: 1, title: '1. Count Accuracy', subtitle: 'Error margin < 5%', icon: Target, color: '#3b82f6' },
    { id: 2, title: '2. Low-Light Performance', subtitle: 'Nighttime crowd analysis', icon: Zap, color: '#10b981' },
    { id: 3, title: '3. Processing Speed', subtitle: 'Real-time rendering', icon: Activity, color: '#f59e0b' },
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
        <button 
          onClick={() => setShowFullscreenFlowchart(false)}
          style={{ padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', border: '1px solid #e2e8f0', fontWeight: 'bold', cursor: 'pointer', marginBottom: '2rem' }}
        >
          Close Flowchart
        </button>
        <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', border: '1px solid #e2e8f0', height: 'calc(100vh - 100px)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: '#64748b' }}>
          Detailed Interactive Flowchart (Crowd Meter) Will Render Here
        </div>
      </div>
    );
  }

  return (
    <div className="thane-dashboard-container" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <button 
            onClick={onBack} 
            style={{ 
              display: 'flex', alignItems: 'center', gap: '0.5rem', 
              padding: '0.75rem 1.5rem', background: 'white', 
              borderRadius: '0.75rem', border: '1px solid #e2e8f0',
              color: '#0f172a', fontWeight: 'bold', cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)', transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = project?.color || '#f59e0b'; e.currentTarget.style.color = project?.color || '#f59e0b'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; }}
          >
            <ArrowLeft size={20} /> Back to Dashboard
          </button>
          
          <div>
            <h1 style={{ fontSize: '1.75rem', color: '#0f172a', fontWeight: '800', margin: 0, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Users color={project?.color || '#f59e0b'} size={28} />
              {project?.name || 'AI "भीड़-मीटर" (Street Camera Plugin)'}
            </h1>
            <p style={{ color: '#64748b', fontSize: '0.95rem', margin: '0.25rem 0 0 0' }}>
              Real-time crowd density analysis & management
            </p>
          </div>
        </div>
        
        <div style={{ padding: '0.5rem 1rem', background: `${project?.color || '#f59e0b'}15`, color: project?.color || '#f59e0b', borderRadius: '2rem', fontWeight: 'bold', fontSize: '0.85rem' }}>
          Project ID: {project?.id || '410'}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2rem' }}>
        {/* Sidebar Menu */}
        <div style={{ background: 'white', borderRadius: '1rem', border: '1px solid #e2e8f0', padding: '1.5rem', alignSelf: 'start', position: 'sticky', top: '2rem' }}>
          <h3 style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', paddingLeft: '0.5rem' }}>
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
                  color: activeTab === tab.id ? (project?.color || '#f59e0b') : '#475569',
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
        <div style={{ background: 'white', borderRadius: '1rem', border: '1px solid #e2e8f0', minHeight: '600px', padding: '2.5rem' }}>
          
          {/* 1. OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="animate-fade-in">
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', color: '#0f172a', fontWeight: '800', marginBottom: '1rem' }}>Project Overview</h2>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.7' }}>
                  <strong>AI Crowd Meter (भीड़-मीटर)</strong> बड़े आयोजनों, रैलियों और त्योहारों के दौरान भीड़ प्रबंधन के लिए बनाया गया एक प्लग-इन सिस्टम है। पारंपरिक ऑब्जेक्ट डिटेक्शन मॉडल्स (जैसे YOLO) बहुत घनी भीड़ में फेल हो जाते हैं क्योंकि इंसानों के शरीर एक-दूसरे के पीछे छिप जाते हैं। यह सिस्टम Density Heatmapping (MCNN/CSRNet) का उपयोग करके एक ही फ्रेम में हज़ारों लोगों की सटीक गणना करता है और भगदड़ जैसी स्थितियों को टालने में मदद करता है।
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                {overviewSections.map((section) => (
                  <div 
                    key={section.id} 
                    onClick={() => setSelectedOverviewSection(selectedOverviewSection === section.id ? null : section.id)}
                    style={{ 
                      padding: '1.5rem', background: '#f8fafc', borderRadius: '1rem', border: '1px solid #e2e8f0',
                      cursor: 'pointer', transition: 'all 0.2s',
                      boxShadow: selectedOverviewSection === section.id ? `0 0 0 2px ${section.color}` : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <div style={{ padding: '0.75rem', background: 'white', borderRadius: '0.75rem', color: section.color, boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                        <section.icon size={24} />
                      </div>
                      <div>
                        <h3 style={{ color: '#0f172a', fontSize: '1.1rem', fontWeight: 'bold' }}>{section.title}</h3>
                        <p style={{ color: '#64748b', fontSize: '0.85rem' }}>{section.subtitle}</p>
                      </div>
                    </div>
                    {selectedOverviewSection === section.id && (
                      <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e2e8f0', color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                        {section.id === 'io-assistance' && "यह सिस्टम वीडियो फीड पर एक हीटमैप (रंगों का नक्शा) बनाता है। लाल रंग का मतलब है कि उस जगह पर बहुत ज्यादा भीड़ जमा हो गई है।"}
                        {section.id === 'objectives' && "जब सिस्टम देखता है कि किसी खास रास्ते (Choke point) से लोगों के निकलने की गति (Flow rate) कम हो गई है और पीछे से दबाव बढ़ रहा है, तो वह क्रश/भगदड़ का अलर्ट भेजता है।"}
                        {section.id === 'features' && "यह किसी भी मैदान या मंदिर परिसर में आने और जाने वाले लोगों की गिनती करके बताता है कि अंदर कितने लोग मौजूद हैं और क्या सुरक्षित क्षमता (Safe Capacity) पार हो चुकी है।"}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ background: '#0f172a', borderRadius: '1rem', padding: '2rem', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #f59e0b, #ef4444)' }}></div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Map color="#f59e0b" /> Live Festival Crowd Monitor
                </h3>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                  <div>
                    <p style={{ color: '#94a3b8' }}>Sector: Main Temple Square | Camera: Node-42</p>
                  </div>
                  
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem 1.5rem', borderRadius: '0.75rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.85rem', color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.25rem' }}>Live Count</div>
                    <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#f59e0b', lineHeight: '1' }}>14,592</div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                      <span style={{ color: '#cbd5e1' }}>Zone A (Entrance Gate)</span>
                      <span style={{ color: '#34d399' }}>Safe Flow (32%)</span>
                    </div>
                    <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: '32%', background: '#34d399', borderRadius: '4px' }}></div>
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                      <span style={{ color: '#cbd5e1' }}>Zone B (Market Path)</span>
                      <span style={{ color: '#fbbf24' }}>Moderate (68%)</span>
                    </div>
                    <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: '68%', background: '#fbbf24', borderRadius: '4px' }}></div>
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                      <span style={{ color: '#cbd5e1' }}>Zone C (Main Shrine)</span>
                      <span style={{ color: '#ef4444', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><AlertTriangle size={14} /> Critical (94%)</span>
                    </div>
                    <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: '94%', background: '#ef4444', borderRadius: '4px', boxShadow: '0 0 10px #ef4444' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
             <div className="animate-fade-in">
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
               <h2 style={{ fontSize: '1.8rem', color: '#0f172a', fontWeight: '800' }}>Architecture & Workflow</h2>
             </div>
             
             <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '1rem', border: '1px solid #e2e8f0', marginBottom: '2rem' }}>
               <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '1.5rem', fontWeight: 'bold' }}>1. Density Map Generation (हीटमैप बनाना)</h3>
               <p style={{ color: '#475569', marginBottom: '1rem', lineHeight: '1.6' }}>YOLO जैसे मॉडल एक-एक व्यक्ति पर बॉक्स बनाते हैं जो भीड़ में काम नहीं करता। इसकी जगह CSRNet (Congested Scene Recognition Network) का उपयोग किया जाता है। यह इमेज को एक Density Map में बदल देता है, जिसके पिक्सल्स को जोड़कर कुल भीड़ की गिनती मिल जाती है।</p>
               
               <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '1.5rem', marginTop: '2rem', fontWeight: 'bold' }}>2. Optical Flow (गति की दिशा)</h3>
               <p style={{ color: '#475569', marginBottom: '1rem', lineHeight: '1.6' }}>गिनती के अलावा, यह जानना भी ज़रूरी है कि भीड़ किस दिशा में जा रही है। Lucas-Kanade अल्गोरिदम का उपयोग करके पिक्सल्स के मूवमेंट की गति और दिशा निकाली जाती है (Flow Vectors)।</p>
               
               <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '1.5rem', marginTop: '2rem', fontWeight: 'bold' }}>3. Pressure & Threshold Analysis (दबाव की गणना)</h3>
               <p style={{ color: '#475569', marginBottom: '1rem', lineHeight: '1.6' }}>डेंसिटी (Density) और गति (Flow) को मिलाकर "दबाव" की गणना की जाती है। यदि 5 लोगों प्रति वर्ग मीटर (5 px/m²) से अधिक घनत्व हो और Flow Rate शून्य हो जाए, तो सिस्टम इसे खतरनाक मानकर अलर्ट ट्रिगर करता है।</p>
             </div>
           </div>
          )}

          {activeTab === 'tech-stack' && (
            <div className="animate-fade-in">
              <h2 style={{ fontSize: '1.8rem', color: '#0f172a', fontWeight: '800', marginBottom: '2rem' }}>Tech Stack (तकनीकी टूल्स)</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.5rem', background: 'white' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#3b82f6' }}><Code size={24} /> <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>Frontend UI</h3></div>
                  <ul style={{ paddingLeft: '1.5rem', color: '#475569', lineHeight: '1.8' }}>
                    <li><strong>React.js:</strong> लाइव काउंट्स दिखाने के लिए।</li>
                    <li><strong>HTML5 Canvas:</strong> वीडियो के ऊपर हीटमैप ओवरले (Overlay) रेंडर करने के लिए।</li>
                    <li><strong>Framer Motion:</strong> अलर्ट्स के एनीमेशन के लिए।</li>
                  </ul>
                </div>
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.5rem', background: 'white' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#10b981' }}><Server size={24} /> <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>Backend API</h3></div>
                  <ul style={{ paddingLeft: '1.5rem', color: '#475569', lineHeight: '1.8' }}>
                    <li><strong>Flask / FastAPI:</strong> कैमरे से फ्रेम्स प्राप्त करने के लिए।</li>
                    <li><strong>TensorFlow Serving:</strong> मॉडल को तेज़ी से इनफरेंस (Inference) देने के लिए।</li>
                    <li><strong>InfluxDB:</strong> समय के साथ भीड़ के डेटा (Time-series) को सेव करने के लिए।</li>
                  </ul>
                </div>
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.5rem', background: 'white' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#ec4899' }}><BrainCircuit size={24} /> <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>AI & Vision</h3></div>
                  <ul style={{ paddingLeft: '1.5rem', color: '#475569', lineHeight: '1.8' }}>
                    <li><strong>CSRNet / MCNN:</strong> Crowd Counting (डेंसिटी मैप) के लिए बेस्ट मॉडल्स।</li>
                    <li><strong>PyTorch:</strong> मॉडल ट्रेनिंग और फाइन-ट्यूनिंग।</li>
                    <li><strong>OpenCV:</strong> ऑप्टिकल फ्लो (Lucas-Kanade) निकालने के लिए।</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="animate-fade-in">
              <h2 style={{ fontSize: '1.8rem', color: '#0f172a', fontWeight: '800', marginBottom: '2rem' }}>Step-by-Step Guide</h2>
              <div style={{ display: 'flex', gap: '2rem' }}>
                <div style={{ width: '300px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {guideSteps.map(step => (
                    <div 
                      key={step.id} 
                      onClick={() => setSelectedGuideStep(step.id)}
                      style={{ padding: '1rem', background: selectedGuideStep === step.id ? `${step.color}15` : '#f8fafc', border: `1px solid ${selectedGuideStep === step.id ? step.color : '#e2e8f0'}`, borderLeft: `4px solid ${step.color}`, borderRadius: '0.5rem', cursor: 'pointer', transition: 'all 0.2s' }}
                    >
                      <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.25rem' }}>{step.title}</h4>
                      <p style={{ fontSize: '0.8rem', color: '#64748b' }}>{step.subtitle}</p>
                    </div>
                  ))}
                </div>
                <div style={{ flex: 1, background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '2rem' }}>
                  {selectedGuideStep ? (
                    <div>
                      <h3 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '1rem', fontWeight: 'bold' }}>
                        {guideSteps.find(s => s.id === selectedGuideStep).title}
                      </h3>
                      <div style={{ color: '#475569', lineHeight: '1.8' }}>
                        {selectedGuideStep === 1 && <p>सबसे पहले ShanghaiTech Dataset का उपयोग करें। PyTorch में CSRNet मॉडल लोड करें। यह मॉडल एक इमेज लेता है और एक डेंसिटी मैप रिटर्न करता है। इस डेंसिटी मैप के सभी मैट्रिक्स (Matrix) पिक्सल्स का योग (Sum) ही भीड़ की कुल संख्या (Count) होती है।</p>}
                        {selectedGuideStep === 2 && <p>AI मॉडल से मिले डेंसिटी मैप (2D Array) को Matplotlib या OpenCV का उपयोग करके एक कलर हीटमैप (Color Heatmap - नीला, पीला, लाल) में बदलें। जहाँ घनत्व अधिक होगा, वहाँ रंग लाल होगा।</p>}
                        {selectedGuideStep === 3 && <p>भीड़ के फँसने (Choking) का पता लगाने के लिए OpenCV का <code>calcOpticalFlowFarneback</code> उपयोग करें। यह पिछले फ्रेम और वर्तमान फ्रेम की तुलना करके बताता है कि भीड़ किस दिशा में और कितनी तेज़ी से आगे बढ़ रही है।</p>}
                        {selectedGuideStep === 4 && <p>Python स्क्रिप्ट में लॉजिक लिखें: यदि किसी क्षेत्र में लोगों की गिनती (Count) 1000 से अधिक है और उनकी गति (Flow Rate) 0.5 मीटर प्रति सेकंड से कम हो गई है, तो इसका मतलब है कि आगे रास्ता बंद है और भगदड़ मच सकती है। तुरंत अलर्ट ट्रिगर करें।</p>}
                        {selectedGuideStep === 5 && <p>FastAPI में एक एंडपॉइंट <code>/crowd-metrics</code> बनाएं। बैकग्राउंड में एक टास्क कैमरे से फ्रेम ले, मॉडल को पास करे, और रिजल्ट्स (Count, Flow, Heatmap image URL) को Redis में स्टोर कर दे।</p>}
                        {selectedGuideStep === 6 && <p>React में एक डैशबोर्ड बनाएं जो हर 2 सेकंड में API को कॉल करे (या WebSocket से जुड़े)। UI में कुल गिनती को बड़े अक्षरों में दिखाएं और अलग-अलग जोन्स के बार ग्राफ (Progress bars) प्रदर्शित करें।</p>}
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#94a3b8' }}>
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
              <h2 style={{ fontSize: '1.8rem', color: '#0f172a', fontWeight: '800', marginBottom: '2rem' }}>Resources & Datasets</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Database size={20} color={project?.color || '#f59e0b'} /> Datasets</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0, margin: 0, listStyle: 'none' }}>
                    <li style={{ background: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                      <strong>ShanghaiTech Dataset:</strong> <span style={{ color: '#64748b', fontSize: '0.9rem' }}>A large-scale crowd counting dataset with 1198 annotated images.</span>
                    </li>
                    <li style={{ background: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                      <strong>UCF-QNRF Dataset:</strong> <span style={{ color: '#64748b', fontSize: '0.9rem' }}>High-resolution dataset for dense crowd counting.</span>
                    </li>
                  </ul>
                </div>
                <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><BookOpen size={20} color={project?.color || '#f59e0b'} /> Libraries</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0, margin: 0, listStyle: 'none' }}>
                    <li style={{ background: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                      <strong>CSRNet implementation:</strong> <span style={{ color: '#64748b', fontSize: '0.9rem' }}>PyTorch based Congested Scene Recognition Network.</span>
                    </li>
                    <li style={{ background: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                      <strong>OpenCV Optical Flow:</strong> <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Lucas-Kanade and Farneback implementations.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'evaluation' && (
            <div className="animate-fade-in">
              <h2 style={{ fontSize: '1.8rem', color: '#0f172a', fontWeight: '800', marginBottom: '2rem' }}>Submission / Evaluation Checklist</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {evaluationList.map(item => (
                  <div key={item.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: '#f8fafc', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
                    <div style={{ marginTop: '0.2rem' }}><CheckCircle color={item.color} size={24} /></div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.25rem' }}>{item.title}</h4>
                      <p style={{ color: '#475569', fontSize: '0.95rem' }}>{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="animate-fade-in">
              <h2 style={{ fontSize: '1.8rem', color: '#0f172a', fontWeight: '800', marginBottom: '2rem' }}>Project Settings</h2>
              <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
                <p style={{ color: '#64748b', marginBottom: '2rem' }}>कॉन्फ़िगरेशन सेटिंग्स केवल एडमिनिस्ट्रेटर (SP/SSP) द्वारा बदली जा सकती हैं।</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
                    <div>
                      <h4 style={{ fontWeight: 'bold', color: '#0f172a' }}>Density Alert Threshold</h4>
                      <p style={{ fontSize: '0.85rem', color: '#64748b' }}>कितने व्यक्ति/वर्ग मीटर पर रेड अलर्ट बजेगा?</p>
                    </div>
                    <select style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }}><option>3 People/m²</option><option selected>5 People/m²</option><option>7 People/m²</option></select>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h4 style={{ fontWeight: 'bold', color: '#0f172a' }}>Update Frequency</h4>
                      <p style={{ fontSize: '0.85rem', color: '#64748b' }}>डैशबोर्ड पर लाइव डेटा कितने समय में रिफ्रेश होगा?</p>
                    </div>
                    <select style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }}><option selected>Every 2 Seconds</option><option>Every 5 Seconds</option></select>
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
