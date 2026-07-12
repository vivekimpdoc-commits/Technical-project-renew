import React, { useState } from 'react';
import { 
  ArrowLeft, LayoutDashboard, FileText, Code, ListOrdered, BookOpen, CheckSquare, Settings, Target, Shield, Database, Layout, CheckCircle, Network, Server, Briefcase, Activity, Monitor, BrainCircuit, Search, Zap, AlertTriangle, ScanFace, Camera, UserX
} from 'lucide-react';
import './ProjectDetailsView.css';

export default function VisualAuditorDetails({ project, onBack }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [showFullscreenFlowchart, setShowFullscreenFlowchart] = useState(false);
  const [showFullscreenWorkflow, setShowFullscreenWorkflow] = useState(false);
  const [selectedGuideStep, setSelectedGuideStep] = useState(null);
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);
  const [selectedOverviewSection, setSelectedOverviewSection] = useState(null);

  const overviewSections = [
    { id: 'io-assistance', title: 'Police Uniform Audit', subtitle: 'ड्यूटी पर सही वर्दी की जांच', icon: CheckSquare, color: '#475569' },
    { id: 'objectives', title: 'Citizen Helmet Check', subtitle: 'हेलमेट न पहनने पर चालान', icon: Shield, color: '#2563eb' },
    { id: 'features', title: 'Auto-Reporting', subtitle: 'अधिकारियों को स्वचालित रिपोर्ट', icon: ScanFace, color: '#ec4899' },
  ];

  const guideSteps = [
    { id: 1, title: 'चरण 1: Person Detection', subtitle: 'Find people in frame', icon: Camera, color: '#3b82f6' },
    { id: 2, title: 'चरण 2: Object Tracking', subtitle: 'Track vehicles & humans', icon: Activity, color: '#10b981' },
    { id: 3, title: 'चरण 3: Head/Helmet Classification', subtitle: 'Detect head area', icon: BrainCircuit, color: '#f59e0b' },
    { id: 4, title: 'चरण 4: Uniform Matching', subtitle: 'Color & pattern check', icon: Search, color: '#8b5cf6' },
    { id: 5, title: 'चरण 5: E-Challan Integration', subtitle: 'API linking (NIC)', icon: Server, color: '#ec4899' },
    { id: 6, title: 'चरण 6: Officer Dashboard', subtitle: 'React UI for Reports', icon: Layout, color: '#64748b' },
  ];

  const evaluationList = [
    { id: 1, title: '1. Helmet Accuracy', subtitle: 'Turban vs Helmet check', icon: Target, color: '#3b82f6' },
    { id: 2, title: '2. Low-Light Processing', subtitle: 'Night vision testing', icon: Zap, color: '#10b981' },
    { id: 3, title: '3. API Response Time', subtitle: 'E-challan latency', icon: Activity, color: '#f59e0b' },
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
          Detailed Interactive Flowchart (Visual Auditor) Will Render Here
        </div>
      </div>
    );
  }

  return (
    <div className="thane-dashboard-container" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <button onClick={onBack} className="thane-back-btn">
          <ArrowLeft size={20} /> Back to Dashboard
        </button>
          
          <div>
            <h1 style={{ fontSize: '1.75rem', color: '#0f172a', fontWeight: '800', margin: 0, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Shield color={project?.color || '#ef4444'} size={28} />
              {project?.name || 'वर्दी और हेलमेट डिटेक्टर (Simple Visual Auditor)'}
            </h1>
            <p style={{ color: '#64748b', fontSize: '0.95rem', margin: '0.25rem 0 0 0' }}>
              Automated compliance and disciplinary auditing
            </p>
          </div>
        </div>
        
        <div style={{ padding: '0.5rem 1rem', background: `${project?.color || '#ef4444'}15`, color: project?.color || '#ef4444', borderRadius: '2rem', fontWeight: 'bold', fontSize: '0.85rem' }}>
          Project ID: {project?.id || '411'}
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
                  color: activeTab === tab.id ? (project?.color || '#ef4444') : '#475569',
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
                  <strong>Simple Visual Auditor</strong> एक AI आधारित सिस्टम है जो कैमरों का उपयोग करके दो प्रकार के ऑडिट करता है: 1) क्या ड्यूटी पर मौजूद पुलिसकर्मी ने सही वर्दी और टोपी (Cap) पहनी है? 2) क्या सड़क पर चलने वाले दो-पहिया वाहन चालकों ने हेलमेट पहना है? यह सिस्टम मानव हस्तक्षेप (Human Intervention) के बिना उल्लंघनकर्ताओं की पहचान करता है और ऑटोमैटिक रिपोर्ट या ई-चालान जनरेट करता है।
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
                        {section.id === 'io-assistance' && "चौराहों और नाकों पर लगे कैमरे पुलिसकर्मियों की वर्दी के खाकी रंग और उनके सिर पर टोपी की उपस्थिति का विश्लेषण करते हैं। अगर टोपी या वर्दी गायब है, तो संबंधित SP को रिपोर्ट भेजी जाती है।"}
                        {section.id === 'objectives' && "मॉडल यह डिटेक्ट करता है कि गाड़ी टू-व्हीलर है या नहीं, फिर वह चेक करता है कि राइडर और पीछे बैठे व्यक्ति (Pillion) के सिर पर हेलमेट (सुरक्षा कवच) है या नहीं।"}
                        {section.id === 'features' && "ट्रैफिक नियम तोड़ने वालों की तस्वीर, समय, और नंबर प्लेट का डेटा सीधे NIC ई-चालान पोर्टल के API को भेज दिया जाता है।"}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ background: '#0f172a', borderRadius: '1rem', padding: '2rem', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #ef4444, #3b82f6)' }}></div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Camera color="#ef4444" /> AI Visual Auditor - Live Feed (Mock)
                </h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem' }}>
                    <h3 style={{ color: '#e2e8f0', fontSize: '1.1rem', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                      On-Duty Personnel Audit
                    </h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(16, 185, 129, 0.1)', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                        <div>
                          <div style={{ fontWeight: 'bold', color: '#34d399', fontSize: '0.9rem' }}>Officer: MH-P-4402</div>
                          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Uniform, Cap detected</div>
                        </div>
                        <CheckCircle color="#34d399" size={18} />
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(239, 68, 68, 0.1)', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                        <div>
                          <div style={{ fontWeight: 'bold', color: '#f87171', fontSize: '0.9rem' }}>Officer: MH-P-8199</div>
                          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Violation: Cap Missing</div>
                        </div>
                        <UserX color="#f87171" size={18} />
                      </div>
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem' }}>
                    <h3 style={{ color: '#e2e8f0', fontSize: '1.1rem', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                      Traffic Helmet Compliance
                    </h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(239, 68, 68, 0.1)', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                        <div>
                          <div style={{ fontWeight: 'bold', color: '#f87171', fontSize: '0.9rem' }}>Vehicle: MH04 AB1234</div>
                          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Violation: Pillion no helmet</div>
                        </div>
                        <button style={{ background: '#ef4444', color: 'white', border: 'none', padding: '0.2rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.7rem', cursor: 'pointer' }}>E-Challan</button>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(16, 185, 129, 0.1)', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                        <div>
                          <div style={{ fontWeight: 'bold', color: '#34d399', fontSize: '0.9rem' }}>Vehicle: MH04 XY9876</div>
                          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Compliant: Rider & Pillion safe</div>
                        </div>
                        <CheckCircle color="#34d399" size={18} />
                      </div>
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
               <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '1.5rem', fontWeight: 'bold' }}>1. Object Detection (इंसान और वाहन खोजना)</h3>
               <p style={{ color: '#475569', marginBottom: '1rem', lineHeight: '1.6' }}>स्ट्रीमिंग वीडियो में से YOLOv8 मॉडल का उपयोग करके 'Person' और 'Motorcycle' को डिटेक्ट किया जाता है। यदि डिटेक्ट किया गया ऑब्जेक्ट मोटरसाइकिल है, तो मॉडल देखता है कि उस पर कितने लोग बैठे हैं (Rider and Pillion)।</p>
               
               <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '1.5rem', marginTop: '2rem', fontWeight: 'bold' }}>2. Head Detection & Classification (सिर की जांच)</h3>
               <p style={{ color: '#475569', marginBottom: '1rem', lineHeight: '1.6' }}>अगले स्टेप में, डिटेक्ट किए गए व्यक्ति के ऊपरी हिस्से (Upper Body/Head) को क्रॉप किया जाता है। एक सेकेंडरी CNN मॉडल यह चेक करता है कि उस व्यक्ति के सिर पर हेलमेट/टोपी है या नहीं। पगड़ी (Turban) को पहचानने के लिए विशेष ट्रेनिंग दी जाती है ताकि सिखों का चालान न कटे।</p>
               
               <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '1.5rem', marginTop: '2rem', fontWeight: 'bold' }}>3. Evidence Capture & Integration (सबूत और चालान)</h3>
               <p style={{ color: '#475569', marginBottom: '1rem', lineHeight: '1.6' }}>जब किसी उल्लंघन की पुष्टि हो जाती है (Probability &gt; 85%), तो सिस्टम उस फ्रेम की फोटो खींचकर डेटाबेस में सेव कर देता है। नंबर प्लेट (ANPR) को पढ़कर सीधे ट्रैफिक पुलिस के ई-चालान पोर्टल को API रिक्वेस्ट भेज दी जाती है।</p>
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
                    <li><strong>React.js:</strong> एडमिन और ऑफिसर डैशबोर्ड के लिए।</li>
                    <li><strong>Tailwind CSS:</strong> रिस्पॉन्सिव और मॉडर्न डिज़ाइन।</li>
                    <li><strong>Axios:</strong> बैकएंड API से चालान का डेटा फेच करने के लिए।</li>
                  </ul>
                </div>
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.5rem', background: 'white' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#10b981' }}><Server size={24} /> <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>Backend & API</h3></div>
                  <ul style={{ paddingLeft: '1.5rem', color: '#475569', lineHeight: '1.8' }}>
                    <li><strong>Django / Python:</strong> पूरा बैकएंड लॉजिक संभालने के लिए।</li>
                    <li><strong>Celery & Redis:</strong> बैकग्राउंड में इमेजेज को प्रोसेस करने (Asynchronous Tasks) के लिए।</li>
                    <li><strong>PostgreSQL:</strong> चालान और ऑडिट रिकॉर्ड्स सेव करने के लिए।</li>
                  </ul>
                </div>
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.5rem', background: 'white' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#ec4899' }}><BrainCircuit size={24} /> <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>AI / Vision Models</h3></div>
                  <ul style={{ paddingLeft: '1.5rem', color: '#475569', lineHeight: '1.8' }}>
                    <li><strong>YOLOv8:</strong> व्यक्ति और मोटरसाइकिल पहचानने के लिए।</li>
                    <li><strong>Custom ResNet:</strong> हेलमेट / बिना-हेलमेट / टोपी (Police Cap) पहचानने के लिए।</li>
                    <li><strong>LPRNet (License Plate Recognition):</strong> गाडी का नंबर पढ़ने के लिए।</li>
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
                        {selectedGuideStep === 1 && <p>सबसे पहले YOLOv8 मॉडल का उपयोग करके फ्रेम में से सभी इंसानों (Person class) और दोपहिया वाहनों (Motorcycle class) के Bounding Boxes निकालें।</p>}
                        {selectedGuideStep === 2 && <p>Geometry Logic का उपयोग करें: यदि कोई 'Person' का bounding box 'Motorcycle' के bounding box के अंदर (या ऊपर) ओवरलैप कर रहा है, तो मान लें कि वह व्यक्ति उस गाड़ी पर सवार है।</p>}
                        {selectedGuideStep === 3 && <p>अब उस सवार व्यक्ति के बॉक्स के ऊपरी 1/3 हिस्से (सिर के हिस्से) को क्रॉप करें। इस छोटी सी इमेज को एक Classifier मॉडल (ResNet) में भेजें जिसे 3 क्लासेस ('Helmet', 'No-Helmet', 'Turban') पर ट्रेन किया गया हो।</p>}
                        {selectedGuideStep === 4 && <p>पुलिस यूनिफॉर्म चेक के लिए: पुलिस वाले व्यक्ति के फ्रेम को क्रॉप करें और OpenCV (HSV filter) का उपयोग करके 'Khaki' रंग की उपस्थिति चेक करें। सिर के हिस्से में टोपी (Police Cap) का डिटेक्शन करें।</p>}
                        {selectedGuideStep === 5 && <p>यदि 'No-Helmet' मिलता है, तो उसी फ्रेम से ANPR का उपयोग करके गाडी का नंबर पढ़ें। Python Request लाइब्रेरी का उपयोग करके NIC ई-चालान पोर्टल के REST API को वाहन नंबर, समय, और फोटो का URL POST करें।</p>}
                        {selectedGuideStep === 6 && <p>React में एक डैशबोर्ड बनाएं जहाँ पुलिस ऑफिसर दिन भर में जनरेट हुए सभी पेंडिंग ई-चालानों को रिव्यू कर सके। एक क्लिक में ऑफिसर उन्हें 'Approve' या 'Reject' कर सके।</p>}
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
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Database size={20} color={project?.color || '#ef4444'} /> Datasets</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0, margin: 0, listStyle: 'none' }}>
                    <li style={{ background: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                      <strong>Helmet Detection Dataset:</strong> <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Roboflow dataset containing thousands of images of riders with and without helmets.</span>
                    </li>
                    <li style={{ background: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                      <strong>Custom Police Uniforms:</strong> <span style={{ color: '#64748b', fontSize: '0.9rem' }}>A proprietary dataset to be collected from CCTV for local police Khaki identification.</span>
                    </li>
                  </ul>
                </div>
                <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><BookOpen size={20} color={project?.color || '#ef4444'} /> Libraries</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0, margin: 0, listStyle: 'none' }}>
                    <li style={{ background: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                      <strong>YOLOv8:</strong> <span style={{ color: '#64748b', fontSize: '0.9rem' }}>For fast bounding box detection.</span>
                    </li>
                    <li style={{ background: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                      <strong>Celery:</strong> <span style={{ color: '#64748b', fontSize: '0.9rem' }}>For processing violations in the background.</span>
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
                      <h4 style={{ fontWeight: 'bold', color: '#0f172a' }}>Auto-Challan Generation</h4>
                      <p style={{ fontSize: '0.85rem', color: '#64748b' }}>क्या बिना मैन्युअल चेक के सीधा चालान भेजना है?</p>
                    </div>
                    <select style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }}><option>Yes (Fully Automatic)</option><option selected>No (Require Manual Approval)</option></select>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h4 style={{ fontWeight: 'bold', color: '#0f172a' }}>Turban Exception</h4>
                      <p style={{ fontSize: '0.85rem', color: '#64748b' }}>पगड़ी (Turban) को हेलमेट नियम से छूट दें।</p>
                    </div>
                    <select style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }}><option selected>Enabled</option><option>Disabled</option></select>
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
