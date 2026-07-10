import React, { useState } from 'react';
import { 
  ArrowLeft, LayoutDashboard, FileText, Code, ListOrdered, BookOpen, CheckSquare, Settings, Target, Shield, Database, Layout, CheckCircle, Network, Server, Briefcase, Activity, Monitor, BrainCircuit, Search, Zap, AlertTriangle, Car, Camera, Crosshair, MapPin
} from 'lucide-react';
import './ProjectDetailsView.css';

export default function VMMRDetails({ project, onBack }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [showFullscreenFlowchart, setShowFullscreenFlowchart] = useState(false);
  const [showFullscreenWorkflow, setShowFullscreenWorkflow] = useState(false);
  const [selectedGuideStep, setSelectedGuideStep] = useState(null);
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);
  const [selectedOverviewSection, setSelectedOverviewSection] = useState(null);

  const overviewSections = [
    { id: 'io-assistance', title: 'No-Plate Recognition', subtitle: 'बिना नंबर प्लेट की पहचान', icon: Search, color: '#475569' },
    { id: 'objectives', title: 'Make, Model & Color', subtitle: 'गाड़ी का ब्रांड, मॉडल और रंग', icon: Car, color: '#2563eb' },
    { id: 'features', title: 'Damage Tracking', subtitle: 'खरोंच या डैमेज से वाहन खोजना', icon: Crosshair, color: '#ec4899' },
  ];

  const guideSteps = [
    { id: 1, title: 'चरण 1: VMMR डेटासेट कलेक्शन', subtitle: 'Vehicle Dataset Gathering', icon: Database, color: '#3b82f6' },
    { id: 2, title: 'चरण 2: CNN मॉडल ट्रेनिंग (ResNet/EfficientNet)', subtitle: 'Model Training', icon: BrainCircuit, color: '#10b981' },
    { id: 3, title: 'चरण 3: कलर और डैमेज डिटेक्शन', subtitle: 'Color & Feature Extraction', icon: Activity, color: '#f59e0b' },
    { id: 4, title: 'चरण 4: ANPR इंटीग्रेशन (वैकल्पिक)', subtitle: 'Fallback with ANPR', icon: Camera, color: '#8b5cf6' },
    { id: 5, title: 'चरण 5: API निर्माण', subtitle: 'FastAPI / Python Backend', icon: Server, color: '#ec4899' },
    { id: 6, title: 'चरण 6: ट्रैकिंग डैशबोर्ड', subtitle: 'UI Dashboard Dev', icon: Layout, color: '#64748b' },
  ];

  const evaluationList = [
    { id: 1, title: '1. मॉडल एक्यूरेसी', subtitle: 'Model Precision > 90%', icon: Target, color: '#3b82f6' },
    { id: 2, title: '2. रात की फुटेज', subtitle: 'Night Vision Performance', icon: Zap, color: '#10b981' },
    { id: 3, title: '3. कलर मिसमैच टेस्टिंग', subtitle: 'Color Accuracy (Sun/Shadow)', icon: Search, color: '#f59e0b' },
    { id: 4, title: '4. रियल-टाइम अलर्ट', subtitle: 'Latency Check', icon: Activity, color: '#8b5cf6' },
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
          Detailed Interactive Flowchart (VMMR Pipeline) Will Render Here
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
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = project?.color || '#10b981'; e.currentTarget.style.color = project?.color || '#10b981'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; }}
          >
            <ArrowLeft size={20} /> Back to Dashboard
          </button>
          
          <div>
            <h1 style={{ fontSize: '1.75rem', color: '#0f172a', fontWeight: '800', margin: 0, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Car color={project?.color || '#10b981'} size={28} />
              {project?.name || 'गाड़ी की पहचान बिना नंबर प्लेट के (VMMR)'}
            </h1>
            <p style={{ color: '#64748b', fontSize: '0.95rem', margin: '0.25rem 0 0 0' }}>
              Vehicle Make, Model, and Recognition System
            </p>
          </div>
        </div>
        
        <div style={{ padding: '0.5rem 1rem', background: `${project?.color || '#10b981'}15`, color: project?.color || '#10b981', borderRadius: '2rem', fontWeight: 'bold', fontSize: '0.85rem' }}>
          Project ID: {project?.id || '408'}
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
                  color: activeTab === tab.id ? (project?.color || '#10b981') : '#475569',
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
                  <strong>VMMR (Vehicle Make & Model Recognition)</strong> एक एडवांस्ड AI सिस्टम है जो CCTV कैमरों के ज़रिए गाड़ियों को केवल उनके डिज़ाइन, बनावट, ब्रांड और रंग से पहचान लेता है। कई बार अपराधी गाड़ी की नंबर प्लेट निकाल देते हैं या फर्जी लगा देते हैं। ऐसे मामलों में यह सिस्टम गाड़ी की हेडलाइट्स की शेप, ग्रिल डिज़ाइन, या किसी डेंट/स्टिकर जैसी बारीकियों का उपयोग करके पूरे शहर में उस गाड़ी को ट्रैक कर सकता है।
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
                        {section.id === 'io-assistance' && "बिना नंबर प्लेट की गाड़ियों को खोजना बहुत मुश्किल होता है। VMMR की मदद से पुलिस कंट्रोल रूम में सिर्फ 'Black Hyundai Creta 2021' टाइप करके शहर के सभी कैमरों में से वैसी गाड़ियों को खोजा जा सकता है।"}
                        {section.id === 'objectives' && "10,000+ से अधिक वाहन मॉडल्स और उनके वर्षों (Years) की सटीक पहचान। अलग-अलग रोशनी और मौसम में भी वाहन के सही रंग की पहचान (जैसे गहरा नीला vs काला)।"}
                        {section.id === 'features' && "केवल मॉडल ही नहीं, यह सिस्टम वाहन पर लगे किसी खास स्टिकर, टूटी हुई टेललाइट, या छत पर लगे कैरियर जैसी यूनिक चीजों (Custom Features) को भी याद रख सकता है।"}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ background: '#0f172a', borderRadius: '1rem', padding: '2rem', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #10b981, #3b82f6)' }}></div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Car color="#10b981" /> VMMR Analysis Process
                </h3>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ textAlign: 'center', flex: 1, minWidth: '150px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                      <Camera size={24} />
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>1. Image Capture</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Raw CCTV Frame</div>
                  </div>
                  
                  <div style={{ color: '#10b981' }}>➔</div>
                  
                  <div style={{ textAlign: 'center', flex: 1, minWidth: '150px' }}>
                    <div style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid #10b981', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: '#10b981' }}>
                      <Target size={24} />
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>2. Vehicle Crop</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>YOLO Bounding Box</div>
                  </div>

                  <div style={{ color: '#3b82f6' }}>➔</div>

                  <div style={{ textAlign: 'center', flex: 1, minWidth: '150px' }}>
                    <div style={{ background: 'rgba(59,130,246,0.2)', border: '1px solid #3b82f6', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: '#3b82f6' }}>
                      <BrainCircuit size={24} />
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>3. Feature Extractor</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>ResNet/CNN Layer</div>
                  </div>

                  <div style={{ color: '#ec4899' }}>➔</div>

                  <div style={{ textAlign: 'center', flex: 1, minWidth: '150px' }}>
                    <div style={{ background: 'rgba(236,72,153,0.2)', border: '1px solid #ec4899', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: '#ec4899' }}>
                      <CheckCircle size={24} />
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>4. Classification</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>"Maruti Swift - White"</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
             <div className="animate-fade-in">
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
               <h2 style={{ fontSize: '1.8rem', color: '#0f172a', fontWeight: '800' }}>Architecture & Workflow</h2>
               <button onClick={() => setShowFullscreenFlowchart(true)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#f1f5f9', color: '#475569', border: '1px solid #cbd5e1', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontWeight: 'bold', cursor: 'pointer' }}>
                 <Layout size={16} /> View Full Diagram
               </button>
             </div>
             
             <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '1rem', border: '1px solid #e2e8f0', marginBottom: '2rem' }}>
               <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '1.5rem', fontWeight: 'bold' }}>1. Vehicle Detection (वाहन खोजना)</h3>
               <p style={{ color: '#475569', marginBottom: '1rem', lineHeight: '1.6' }}>स्ट्रीमिंग वीडियो में से YOLO (You Only Look Once) एल्गोरिदम का उपयोग करके फ्रेम में मौजूद सभी वाहनों को क्रॉप किया जाता है। इससे बैकग्राउंड का शोर हट जाता है।</p>
               
               <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '1.5rem', marginTop: '2rem', fontWeight: 'bold' }}>2. Multi-Label Classification (वर्गीकरण)</h3>
               <p style={{ color: '#475569', marginBottom: '1rem', lineHeight: '1.6' }}>क्रॉप की गई इमेज को एक डीप CNN (Convolutional Neural Network) जैसे EfficientNet में भेजा जाता है। यह नेटवर्क एक साथ 3 प्रेडिक्शन करता है: Make (ब्रांड), Model (कार का प्रकार), और Color (रंग)।</p>
               
               <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '1.5rem', marginTop: '2rem', fontWeight: 'bold' }}>3. Database & Matching (डेटाबेस मिलान)</h3>
               <p style={{ color: '#475569', marginBottom: '1rem', lineHeight: '1.6' }}>जब किसी क्राइम सीन पर कोई बिना नंबर प्लेट की गाड़ी दिखती है, तो सिस्टम उसके फीचर्स को Elasticsearch वेक्टर डेटाबेस में सेव कर देता है। बाद में उसी 'Make/Model/Color' को शहर के अन्य कैमरों में सर्च किया जा सकता है।</p>
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
                    <li><strong>React.js:</strong> सर्च इंटरफ़ेस और रिजल्ट ग्रिड के लिए।</li>
                    <li><strong>Material UI / Tailwind:</strong> कार्ड्स और फिल्टर्स की स्टाइलिंग।</li>
                    <li><strong>Leaflet.js:</strong> मैप पर गाड़ी की लोकेशन ट्रैक दिखाने के लिए।</li>
                  </ul>
                </div>
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.5rem', background: 'white' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#10b981' }}><Server size={24} /> <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>Backend & DB</h3></div>
                  <ul style={{ paddingLeft: '1.5rem', color: '#475569', lineHeight: '1.8' }}>
                    <li><strong>FastAPI (Python):</strong> हाई-परफॉरमेंस REST API।</li>
                    <li><strong>PostgreSQL:</strong> वाहनों का मेटाडेटा (कैमरा ID, समय, रंग) स्टोर करने के लिए।</li>
                    <li><strong>Elasticsearch / Milvus:</strong> सिमिलरिटी सर्च (एक जैसी दिखने वाली गाड़ियां खोजने) के लिए।</li>
                  </ul>
                </div>
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.5rem', background: 'white' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#ec4899' }}><BrainCircuit size={24} /> <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>AI / Computer Vision</h3></div>
                  <ul style={{ paddingLeft: '1.5rem', color: '#475569', lineHeight: '1.8' }}>
                    <li><strong>YOLOv8:</strong> व्हीकल क्रॉपिंग के लिए।</li>
                    <li><strong>EfficientNet / ResNet50:</strong> Make और Model क्लासिफिकेशन के लिए।</li>
                    <li><strong>OpenCV:</strong> इमेज कलर स्पेस (HSV) एनालिसिस के लिए (रंग पहचानने हेतु)।</li>
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
                        {selectedGuideStep === 1 && <p>सबसे पहले VMMR डेटासेट (जैसे CompCars या Stanford Cars) डाउनलोड करें। इसमें भारतीय सड़कों पर चलने वाली गाड़ियों (Maruti, Tata, Mahindra) की हजारों इमेजेज शामिल होनी चाहिए।</p>}
                        {selectedGuideStep === 2 && <p>PyTorch का उपयोग करके एक Pre-trained ResNet50 मॉडल को फाइन-ट्यून (Transfer Learning) करें। आउटपुट लेयर में गाड़ियों के सभी ब्रांड्स और मॉडल्स की लिस्ट (Classes) डालें।</p>}
                        {selectedGuideStep === 3 && <p>रंग पहचानने के लिए, गाड़ी की क्रॉप की गई इमेज के बीच वाले हिस्से (जहाँ शीशे या टायर न हों) के पिक्सल्स का K-Means Clustering करें। इससे उस गाड़ी का प्रमुख रंग (Dominant Color) निकल आएगा।</p>}
                        {selectedGuideStep === 4 && <p>भले ही प्रोजेक्ट बिना नंबर प्लेट के लिए है, लेकिन अगर प्लेट मौजूद हो तो ANPR (Automatic Number Plate Recognition) को रन करें और उसके डेटा को भी VMMR डेटा के साथ डेटाबेस में सेव करें।</p>}
                        {selectedGuideStep === 5 && <p>FastAPI में एक <code>/analyze-vehicle</code> एंडपॉइंट बनाएं जो इमेज रिसीव करे, AI मॉडल रन करे, और JSON में "Make: Honda, Model: City, Color: Silver" रिटर्न करे।</p>}
                        {selectedGuideStep === 6 && <p>React में एक डैशबोर्ड बनाएं जहाँ पुलिस ऑफिसर ड्रॉपडाउन से Make और Model सेलेक्ट करके सर्च कर सके, और सिस्टम डेटाबेस से सभी मैच होने वाली गाड़ियों की इमेजेज और लोकेशंस दिखा दे।</p>}
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

          {/* Fallback for other tabs not fully mocked in this snippet */}
          {(activeTab === 'resources' || activeTab === 'evaluation' || activeTab === 'settings') && (
            <div className="animate-fade-in" style={{ textAlign: 'center', padding: '4rem', color: '#64748b' }}>
              <div style={{ fontSize: '1.2rem' }}>Content for <strong>{tabs.find(t => t.id === activeTab).label}</strong> is ready to be implemented using the same structure.</div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
