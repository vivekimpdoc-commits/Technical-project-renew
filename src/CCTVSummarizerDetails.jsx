import React, { useState } from 'react';
import {
  ArrowLeft, LayoutDashboard, FileText, Code, ListOrdered, BookOpen, CheckSquare, Settings, Target, Shield, Database, Layout, CheckCircle, Network, Server, Briefcase, Activity, Monitor, BrainCircuit, Search, Zap, AlertTriangle, Video, Clock, Filter, HardDrive, Cpu, FastForward
} from 'lucide-react';
import './ProjectDetailsView.css';

export default function CCTVSummarizerDetails({ project, onBack }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [showFullscreenFlowchart, setShowFullscreenFlowchart] = useState(false);
  const [showFullscreenWorkflow, setShowFullscreenWorkflow] = useState(false);
  const [selectedGuideStep, setSelectedGuideStep] = useState(null);
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);
  const [selectedOverviewSection, setSelectedOverviewSection] = useState(null);

  const overviewSections = [
    { id: 'io-assistance', title: 'Time Compression', subtitle: '24 घंटे की फुटेज 5 मिनट में', icon: FastForward, color: '#475569' },
    { id: 'objectives', title: 'Event Filtering', subtitle: 'केवल महत्वपूर्ण गतिविधियां (इंसान/गाड़ी)', icon: Filter, color: '#2563eb' },
    { id: 'features', title: 'Incident Alerts', subtitle: 'संदिग्ध गतिविधियों की त्वरित पहचान', icon: AlertTriangle, color: '#ec4899' },
  ];

  const guideSteps = [
    { id: 1, title: 'चरण 1: वीडियो फीड एकीकरण', subtitle: 'Video Ingestion & Preprocessing', icon: Video, color: '#3b82f6' },
    { id: 2, title: 'चरण 2: ऑब्जेक्ट डिटेक्शन मॉडल (YOLO/SSD)', subtitle: 'AI Object Detection', icon: BrainCircuit, color: '#10b981' },
    { id: 3, title: 'चरण 3: मोशन और इवेंट ट्रैकिंग', subtitle: 'Motion & Event Tracking', icon: Activity, color: '#f59e0b' },
    { id: 4, title: 'चरण 4: टाइमस्टैम्प सिंक्रोनाइज़ेशन', subtitle: 'Timestamp Synch & Stitching', icon: Clock, color: '#8b5cf6' },
    { id: 5, title: 'चरण 5: वीडियो रेंडरिंग (FFmpeg)', subtitle: 'Summary Video Generation', icon: Server, color: '#ec4899' },
    { id: 6, title: 'चरण 6: UI/UX और डिप्लॉयमेंट', subtitle: 'Dashboard Integration', icon: Layout, color: '#64748b' },
  ];

  const evaluationList = [
    { id: 1, title: '1. डिटेक्शन एक्यूरेसी', subtitle: 'Detection Accuracy Checklist', icon: Target, color: '#3b82f6' },
    { id: 2, title: '2. प्रोसेसिंग स्पीड', subtitle: 'Processing Speed & Latency', icon: Zap, color: '#10b981' },
    { id: 3, title: '3. स्टोरेज और ऑप्टिमाइजेशन', subtitle: 'Storage Optimization', icon: HardDrive, color: '#f59e0b' },
    { id: 4, title: '4. संभावित परिणाम', subtitle: 'Expected Outcomes', icon: FileText, color: '#8b5cf6' },
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
          Detailed Interactive Flowchart (Video Pipeline) Will Render Here
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
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = project?.color || '#3b82f6'; e.currentTarget.style.color = project?.color || '#3b82f6'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; }}
          >
            <ArrowLeft size={20} /> Back to Dashboard
          </button>

          <div>
            <h1 style={{ fontSize: '1.75rem', color: '#0f172a', fontWeight: '800', margin: 0, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Video color={project?.color || '#3b82f6'} size={28} />
              {project?.name || 'एक-क्लिक "CCTV सारांश" (CCTV Summarizer)'}
            </h1>
            <p style={{ color: '#64748b', fontSize: '0.95rem', margin: '0.25rem 0 0 0' }}>
              Smart Surveillance & Video Analytics System
            </p>
          </div>
        </div>

        <div style={{ padding: '0.5rem 1rem', background: `${project?.color || '#3b82f6'}15`, color: project?.color || '#3b82f6', borderRadius: '2rem', fontWeight: 'bold', fontSize: '0.85rem' }}>
          Project ID: {project?.id || '407'}
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
                  color: activeTab === tab.id ? (project?.color || '#3b82f6') : '#475569',
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
                  <strong>CCTV Summarizer (एक-क्लिक "CCTV सारांश")</strong> एक AI-आधारित वीडियो एनालिटिक्स सिस्टम है जो घंटों की नीरस CCTV फुटेज को स्कैन करता है और उसे कुछ ही मिनटों के एक संक्षिप्त वीडियो में बदल देता है। यह सिस्टम वीडियो से उन हिस्सों को हटा देता है जहाँ कोई हलचल नहीं है, और केवल इंसान, गाड़ियों, या संदिग्ध गतिविधियों वाले क्लिप्स को टाइमस्टैम्प के साथ एक साथ जोड़ (stitch) देता है। इससे पुलिस और सुरक्षा बलों का महत्वपूर्ण समय बचता है।
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
                        {section.id === 'io-assistance' && "24 घंटे की फुटेज को मैन्युअली देखने में बहुत समय लगता है। यह सिस्टम AI का उपयोग करके केवल उन इवेंट्स को छांटता है जहाँ फ्रेम में कोई महत्वपूर्ण ऑब्जेक्ट (व्यक्ति या वाहन) मौजूद हो, और उसे एक छोटी 5-मिनट की वीडियो फ़ाइल में बदल देता है।"}
                        {section.id === 'objectives' && "सिस्टम को इस तरह ट्रेन किया गया है कि वह हवा से हिलते पेड़, बारिश, या परछाई जैसी अप्रासंगिक गतियों (false positives) को अनदेखा करे और केवल वास्तविक सुरक्षा-संबंधित गतिविधियों पर ध्यान केंद्रित करे।"}
                        {section.id === 'features' && "अगर कोई व्यक्ति कैमरा के सामने असामान्य रूप से तेज भागता है, या कोई गाड़ी निषिद्ध क्षेत्र में खड़ी होती है, तो सिस्टम उसे 'High Priority' टैग देकर सारांश वीडियो के शुरुआत में ही दिखा देता है।"}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ background: '#0f172a', borderRadius: '1rem', padding: '2rem', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #3b82f6, #ec4899)' }}></div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <BrainCircuit color="#3b82f6" /> AI Processing Workflow
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ textAlign: 'center', flex: 1, minWidth: '150px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                      <Video size={24} />
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>1. Raw Input</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>24h Footage (10GB)</div>
                  </div>

                  <div style={{ color: '#3b82f6' }}>➔</div>

                  <div style={{ textAlign: 'center', flex: 1, minWidth: '150px' }}>
                    <div style={{ background: 'rgba(59,130,246,0.2)', border: '1px solid #3b82f6', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: '#3b82f6' }}>
                      <Filter size={24} />
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>2. Frame Analysis</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>YOLOv8 Detection</div>
                  </div>

                  <div style={{ color: '#ec4899' }}>➔</div>

                  <div style={{ textAlign: 'center', flex: 1, minWidth: '150px' }}>
                    <div style={{ background: 'rgba(236,72,153,0.2)', border: '1px solid #ec4899', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: '#ec4899' }}>
                      <FastForward size={24} />
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>3. Stitching</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>FFmpeg Processing</div>
                  </div>

                  <div style={{ color: '#10b981' }}>➔</div>

                  <div style={{ textAlign: 'center', flex: 1, minWidth: '150px' }}>
                    <div style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid #10b981', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: '#10b981' }}>
                      <AlertTriangle size={24} />
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>4. Final Output</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>5m Summary Video</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Add other tabs like Architecture, Tech Stack, Guide, etc. following similar pattern... */}
          {activeTab === 'architecture' && (
            <div className="animate-fade-in">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.8rem', color: '#0f172a', fontWeight: '800' }}>Architecture & Workflow</h2>
                <button onClick={() => setShowFullscreenFlowchart(true)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#f1f5f9', color: '#475569', border: '1px solid #cbd5e1', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontWeight: 'bold', cursor: 'pointer' }}>
                  <Layout size={16} /> View Full Diagram
                </button>
              </div>

              <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '1rem', border: '1px solid #e2e8f0', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '1.5rem', fontWeight: 'bold' }}>1. Video Ingestion Layer (फीड ग्रहण)</h3>
                <p style={{ color: '#475569', marginBottom: '1rem', lineHeight: '1.6' }}>RTSP स्ट्रीम या अपलोड की गई MP4 फाइल्स को सिस्टम में लिया जाता है। OpenCV का उपयोग करके वीडियो को फ्रेम्स में तोड़ा जाता है।</p>

                <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '1.5rem', marginTop: '2rem', fontWeight: 'bold' }}>2. AI Inference Engine (AI प्रोसेसिंग)</h3>
                <p style={{ color: '#475569', marginBottom: '1rem', lineHeight: '1.6' }}>YOLOv8 या Faster R-CNN मॉडल हर N-वें फ्रेम (जैसे हर 5वें फ्रेम) का विश्लेषण करता है ताकि प्रोसेसिंग तेज हो। यह इंसान या गाड़ी का bounding box डिटेक्ट करता है।</p>

                <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '1.5rem', marginTop: '2rem', fontWeight: 'bold' }}>3. Logic & Stitching Layer (क्लिप्स जोड़ना)</h3>
                <p style={{ color: '#475569', marginBottom: '1rem', lineHeight: '1.6' }}>जिन फ्रेम्स में ऑब्जेक्ट डिटेक्ट होता है, उन टाइमस्टैम्प्स (जैसे 12:04:10 से 12:04:30) को एक लिस्ट में सेव किया जाता है। फिर FFmpeg का उपयोग करके इन सभी टाइम-सेगमेंट्स को मुख्य वीडियो से काटकर एक नई वीडियो फ़ाइल में जोड़ (Stitch) दिया जाता है।</p>
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
                    <li><strong>React.js:</strong> डैशबोर्ड और वीडियो प्लेयर के लिए।</li>
                    <li><strong>Video.js:</strong> सारांश वीडियो को चलाने और टाइमस्टैम्प्स पर जंप करने के लिए।</li>
                    <li><strong>TailwindCSS / CSS:</strong> मॉडर्न डिज़ाइन के लिए।</li>
                  </ul>
                </div>
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.5rem', background: 'white' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#10b981' }}><Server size={24} /> <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>Backend & Processing</h3></div>
                  <ul style={{ paddingLeft: '1.5rem', color: '#475569', lineHeight: '1.8' }}>
                    <li><strong>Python (FastAPI / Flask):</strong> वीडियो अपलोड हैंडल करने और AI मॉडल चलाने के लिए।</li>
                    <li><strong>FFmpeg:</strong> वीडियो को तेजी से काटने (trim) और जोड़ने (concatenate) के लिए (subprocess के जरिए)।</li>
                    <li><strong>OpenCV:</strong> वीडियो फ्रेम एक्सट्रैक्शन के लिए।</li>
                  </ul>
                </div>
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.5rem', background: 'white' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#ec4899' }}><BrainCircuit size={24} /> <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>AI / Machine Learning</h3></div>
                  <ul style={{ paddingLeft: '1.5rem', color: '#475569', lineHeight: '1.8' }}>
                    <li><strong>YOLOv8 (Ultralytics):</strong> रियल-टाइम ऑब्जेक्ट डिटेक्शन (Person, Car, Truck)।</li>
                    <li><strong>PyTorch:</strong> AI मॉडल को GPU पर चलाने के लिए।</li>
                    <li><strong>Background Subtraction (MOG2):</strong> मोशन डिटेक्ट करने का लाइटवेट अल्टरनेटिव।</li>
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
                        {selectedGuideStep === 1 && <p>सबसे पहले Python में एक स्क्रिप्ट बनाएं जो किसी फोल्डर से 24 घंटे की CCTV MP4 फाइल ले सके। OpenCV का उपयोग करके <code>cv2.VideoCapture()</code> से वीडियो को लोड करें।</p>}
                        {selectedGuideStep === 2 && <p>YOLOv8 मॉडल को लोड करें। वीडियो के हर फ्रेम (या प्रोसेसिंग बचाने के लिए हर 5वें फ्रेम) को YOLO मॉडल से पास करें। अगर आउटपुट में 'person', 'car', 'motorcycle', 'truck' डिटेक्ट होता है, तो उस फ्रेम के टाइमस्टैम्प (सेकंड्स में) को एक Array में सेव कर लें।</p>}
                        {selectedGuideStep === 3 && <p>जो Array आपको मिला है (जैसे: [12, 13, 14, 45, 46, 120]), उसे निरंतर (continuous) चंक्स में बदलें। उदाहरण: Chunk 1 (10s to 16s), Chunk 2 (43s to 48s)। हर क्लिप के आगे-पीछे 2-3 सेकंड का बफर (Buffer) जोड़ें ताकि वीडियो झटके से शुरू न हो।</p>}
                        {selectedGuideStep === 4 && <p>Python के <code>subprocess</code> मॉड्यूल का उपयोग करके FFmpeg कमांड रन करें। FFmpeg को यह चंक्स की लिस्ट दें ताकि वह ओरिजिनल वीडियो से इन छोटे हिस्सों को एक्सट्रेक्ट कर सके।</p>}
                        {selectedGuideStep === 5 && <p>अंत में, FFmpeg का <code>concat</code> कमांड उपयोग करके उन सभी छोटे क्लिप्स को एक सिंगल "Summary_Video.mp4" में जोड़ दें।</p>}
                        {selectedGuideStep === 6 && <p>FastAPI में एक एंडपॉइंट बनाएं जहाँ से यूज़र वीडियो अपलोड करे, और रिस्पॉन्स में उसे समरी वीडियो का URL मिल जाए। React Frontend में इस वीडियो को दिखाने के लिए UI बनाएं।</p>}
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
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Database size={20} color={project?.color || '#3b82f6'} /> Datasets</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0, margin: 0, listStyle: 'none' }}>
                    <li style={{ background: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                      <strong>VIRAT Video Dataset:</strong> <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Surveillance video dataset for event recognition.</span>
                    </li>
                    <li style={{ background: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                      <strong>UCF-Crime:</strong> <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Real-world CCTV videos covering anomalies like robbery, stealing.</span>
                    </li>
                  </ul>
                </div>
                <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><BookOpen size={20} color={project?.color || '#3b82f6'} /> Libraries</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0, margin: 0, listStyle: 'none' }}>
                    <li style={{ background: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                      <strong>Ultralytics YOLOv8:</strong> <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Pre-trained object detection models.</span>
                    </li>
                    <li style={{ background: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                      <strong>FFmpeg-python:</strong> <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Python wrapper for complex video stitching.</span>
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
                      <h4 style={{ fontWeight: 'bold', color: '#0f172a' }}>Sensitivity Threshold</h4>
                      <p style={{ fontSize: '0.85rem', color: '#64748b' }}>मोशन डिटेक्शन की संवेदनशीलता सेट करें।</p>
                    </div>
                    <select style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }}><option>High</option><option selected>Medium</option><option>Low</option></select>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h4 style={{ fontWeight: 'bold', color: '#0f172a' }}>Buffer Time</h4>
                      <p style={{ fontSize: '0.85rem', color: '#64748b' }}>इवेंट क्लिप के आगे-पीछे का एक्स्ट्रा समय।</p>
                    </div>
                    <select style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }}><option>2 Seconds</option><option selected>5 Seconds</option><option>10 Seconds</option></select>
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
