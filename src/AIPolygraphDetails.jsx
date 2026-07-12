import React, { useState } from 'react';
import { 
  ArrowLeft, LayoutDashboard, FileText, Code, ListOrdered, BookOpen, CheckSquare, Settings, Target, Shield, Database, Layout, CheckCircle, Network, Server, Briefcase, Activity, Monitor, BrainCircuit, Search, Zap, AlertTriangle, Camera, Eye, HeartPulse, Video
} from 'lucide-react';
import './ProjectDetailsView.css';

export default function AIPolygraphDetails({ project, onBack }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [showFullscreenFlowchart, setShowFullscreenFlowchart] = useState(false);
  const [showFullscreenWorkflow, setShowFullscreenWorkflow] = useState(false);
  const [selectedGuideStep, setSelectedGuideStep] = useState(null);
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);
  const [selectedOverviewSection, setSelectedOverviewSection] = useState(null);

  const overviewSections = [
    { id: 'io-assistance', title: 'IO Assistance', subtitle: 'जांच अधिकारी (IO) के लिए उपयोगिता', icon: Briefcase, color: '#475569' },
    { id: 'objectives', title: 'Project Objectives', subtitle: 'परियोजना के मुख्य उद्देश्य', icon: Target, color: '#2563eb' },
    { id: 'features', title: 'Major Features', subtitle: 'प्रमुख विशेषताएं (AI & Analytics)', icon: Zap, color: '#ec4899' },
  ];

  const guideSteps = [
    { id: 1, title: 'चरण 1: कैमरा सेटअप और डेटा कलेक्शन', subtitle: 'Camera Setup & Data', icon: Camera, color: '#3b82f6' },
    { id: 2, title: 'चरण 2: फेशियल लैंडमार्क और एक्सप्रेशन मॉडल', subtitle: 'Micro-Expression Model', icon: Eye, color: '#10b981' },
    { id: 3, title: 'चरण 3: फिजियोलॉजिकल सिग्नल (rPPG)', subtitle: 'Physiological Signals', icon: HeartPulse, color: '#f59e0b' },
    { id: 4, title: 'चरण 4: बैकएंड प्रोसेसिंग व एनालिटिक्स', subtitle: 'Backend & Scoring', icon: Server, color: '#8b5cf6' },
    { id: 5, title: 'चरण 5: फ्रंटएंड (लाइव डैशबोर्ड)', subtitle: 'Frontend / Dashboard', icon: Monitor, color: '#ec4899' },
    { id: 6, title: 'चरण 6: टेस्टिंग और कैलिब्रेशन', subtitle: 'Testing & Calibration', icon: Shield, color: '#64748b' },
  ];

  const evaluationList = [
    { id: 1, title: '1. डिटेक्शन एक्यूरेसी', subtitle: 'Detection Accuracy', icon: CheckSquare, color: '#3b82f6' },
    { id: 2, title: '2. तकनीकी और रियल-टाइम', subtitle: 'Latency & Lighting', icon: Activity, color: '#10b981' },
    { id: 3, title: '3. नैतिक और कानूनी दिशानिर्देश', subtitle: 'Ethical & Legal', icon: Shield, color: '#f59e0b' },
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
          className="thane-back-btn" 
          style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}
        >
          <ArrowLeft size={18} /> Back to Architecture Menu
        </button>

        <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.75rem', color: '#0f172a' }}>System Architecture & Process Flow</h3>
        
        <div className="flowchart-container" style={{ margin: '0 auto', maxWidth: '800px', background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
          <div className="flow-step">
            <div className="flow-node user-node">High-Resolution Video Feed (Interview Room)</div>
          </div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">
            <div className="flow-node">Face Detection & Landmark Tracking</div>
          </div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">
            <div className="flow-node">Micro-expression & rPPG Analysis (Pulse/Thermal)</div>
          </div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">
            <div className="flow-node">Deception Scoring Engine (AI Analytics)</div>
          </div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">
            <div className="flow-node">Real-time Stress Alert Generation</div>
          </div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">
            <div className="flow-node output-node">Investigator Dashboard (Live Graph & Timeline)</div>
          </div>
        </div>
      </div>
    );
  }

  if (showFullscreenWorkflow) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button 
          onClick={() => setShowFullscreenWorkflow(false)} 
          className="thane-back-btn" 
          style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}
        >
          <ArrowLeft size={18} /> Back to Architecture Menu
        </button>

        <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.75rem', color: '#0f172a' }}>विस्तृत कार्यप्रणाली (Step-by-Step Workflow)</h3>
        
        <div className="workflow-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="workflow-step-card" style={{ borderLeftColor: '#3b82f6' }}>
            <div className="workflow-step-number" style={{ background: '#3b82f6' }}>1</div>
            <h4 className="workflow-step-title">Video Ingestion</h4>
            <div className="workflow-point">पूछताछ कक्ष में लगे हाई-डेफिनिशन कैमरे से आरोपी के चेहरे का लाइव वीडियो फीड प्राप्त किया जाता है।</div>
          </div>
          <div className="workflow-step-card" style={{ borderLeftColor: '#10b981' }}>
            <div className="workflow-step-number" style={{ background: '#10b981' }}>2</div>
            <h4 className="workflow-step-title">Biometric Extraction</h4>
            <div className="workflow-point">AI मॉडल (जैसे OpenFace) चेहरे के 68 पॉइंट्स को ट्रैक करता है और rPPG तकनीक त्वचा के रंग में होने वाले सूक्ष्म बदलावों से पसीना और हार्ट रेट मापती है।</div>
          </div>
          <div className="workflow-step-card" style={{ borderLeftColor: '#f59e0b' }}>
            <div className="workflow-step-number" style={{ background: '#f59e0b' }}>3</div>
            <h4 className="workflow-step-title">Stress & Deception Analytics</h4>
            <div className="workflow-point">इन सिग्नल्स को जोड़कर मशीन लर्निंग मॉडल यह पता लगाता है कि व्यक्ति किस समय सामान्य से अधिक तनाव या घबराहट में था।</div>
          </div>
          <div className="workflow-step-card" style={{ borderLeftColor: '#8b5cf6' }}>
            <div className="workflow-step-number" style={{ background: '#8b5cf6' }}>4</div>
            <h4 className="workflow-step-title">Live Feedback & Timeline</h4>
            <div className="workflow-point">जांच अधिकारी (IO) के कंप्यूटर स्क्रीन पर लाइव ग्राफ और प्रश्न-दर-प्रश्न टाइमलाइन दिखाई जाती है जिससे पता चलता है कि कौन सा जवाब संदेहास्पद था।</div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedGuideStep !== null) {
    const step = guideSteps.find(s => s.id === selectedGuideStep);
    const StepIcon = step.icon;
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setSelectedGuideStep(null)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Step-by-Step Guide
        </button>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <StepIcon size={40} color={step.color} />
            <h3 style={{ margin: 0, fontSize: '2rem', color: '#0f172a' }}>{step.title}</h3>
          </div>
          <div className="workflow-container" style={{ padding: 0 }}>
            {(() => {
              switch(step.id) {
                case 1: return (
                  <div className="workflow-step-card" style={{ borderLeftColor: step.color }}>
                    <h4 className="workflow-step-title">कैमरा सेटअप और डेटा कलेक्शन</h4>
                    <p className="workflow-point">रोशनी की सही व्यवस्था (Lighting) और 4K/1080p कैमरों को इस तरह सेट करना जिससे चेहरे के सूक्ष्म भाव साफ दिखाई दें।</p>
                  </div>
                );
                case 2: return (
                  <div className="workflow-step-card" style={{ borderLeftColor: step.color }}>
                    <h4 className="workflow-step-title">फेशियल लैंडमार्क और एक्सप्रेशन मॉडल</h4>
                    <p className="workflow-point">Facial Action Coding System (FACS) का उपयोग करके डर, गुस्सा, या आश्चर्य जैसी क्षणिक प्रतिक्रियाओं (Micro-expressions) की पहचान करना।</p>
                  </div>
                );
                case 3: return (
                  <div className="workflow-step-card" style={{ borderLeftColor: step.color }}>
                    <h4 className="workflow-step-title">फिजियोलॉजिकल सिग्नल (rPPG)</h4>
                    <p className="workflow-point">Remote Photoplethysmography (rPPG) का उपयोग करके वीडियो से त्वचा के रंग में अदृश्य बदलावों के जरिए हार्ट रेट और पसीना मापना।</p>
                  </div>
                );
                case 4: return (
                  <div className="workflow-step-card" style={{ borderLeftColor: step.color }}>
                    <h4 className="workflow-step-title">बैकएंड प्रोसेसिंग व एनालिटिक्स</h4>
                    <p className="workflow-point">PyTorch/TensorFlow में मॉडल डिप्लॉय करना और FastAPI के जरिये वीडियो स्ट्रीम को सेकंडों में प्रोसेस करके Deception Score निकालना।</p>
                  </div>
                );
                case 5: return (
                  <div className="workflow-step-card" style={{ borderLeftColor: step.color }}>
                    <h4 className="workflow-step-title">फ्रंटएंड (लाइव डैशबोर्ड)</h4>
                    <p className="workflow-point">जांच अधिकारी के लिए एक सहज UI बनाना जिसमें लाइव वीडियो फीड के बगल में स्ट्रेस ग्राफ और अलर्टस दिखाई दें।</p>
                  </div>
                );
                case 6: return (
                  <div className="workflow-step-card" style={{ borderLeftColor: step.color }}>
                    <h4 className="workflow-step-title">टेस्टिंग और कैलिब्रेशन</h4>
                    <p className="workflow-point">विभिन्न उम्र, त्वचा के रंग (Skin tones) और रोशनी की स्थिति में सिस्टम का परीक्षण करना ताकि गलत नतीजों (False Positives) को कम किया जा सके।</p>
                  </div>
                );
                default: return null;
              }
            })()}
          </div>
        </div>
      </div>
    );
  }

  if (selectedEvaluation !== null) {
    const evalItem = evaluationList.find(e => e.id === selectedEvaluation);
    const EvalIcon = evalItem.icon;
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setSelectedEvaluation(null)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Submission / Evaluation
        </button>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <EvalIcon size={40} color={evalItem.color} />
            <h3 style={{ margin: 0, fontSize: '2rem', color: '#0f172a' }}>{evalItem.title}</h3>
          </div>
          <div className="workflow-container" style={{ padding: 0 }}>
            {(() => {
              switch(evalItem.id) {
                case 1: return (
                  <>
                    <div className="workflow-step-card" style={{ borderLeftColor: evalItem.color }}>
                      <h4 className="workflow-step-title">Accuracy of Detection</h4>
                      <p className="workflow-point">क्या सिस्टम सही में व्यक्ति के तनाव और हाव-भाव को पकड़ पा रहा है? क्या इसके नतीजे मनोवैज्ञानिक विशेषज्ञों के विश्लेषण से मेल खाते हैं?</p>
                    </div>
                    <div className="workflow-step-card" style={{ borderLeftColor: evalItem.color }}>
                      <h4 className="workflow-step-title">Baseline Calibration</h4>
                      <p className="workflow-point">क्या पूछताछ से पहले सिस्टम व्यक्ति के सामान्य (शांत) हाव-भाव का बेसलाइन सही से सेट कर लेता है?</p>
                    </div>
                  </>
                );
                case 2: return (
                  <>
                    <div className="workflow-step-card" style={{ borderLeftColor: evalItem.color }}>
                      <h4 className="workflow-step-title">Low-Latency Processing</h4>
                      <p className="workflow-point">क्या अधिकारी को रियल-टाइम फीडबैक (कम से कम 1 सेकंड की देरी में) मिल रहा है?</p>
                    </div>
                    <div className="workflow-step-card" style={{ borderLeftColor: evalItem.color }}>
                      <h4 className="workflow-step-title">Video & Lighting Tolerance</h4>
                      <p className="workflow-point">क्या कम रोशनी या चेहरे के थोड़ा हिलने पर भी सिस्टम बिना टूटे काम करता है?</p>
                    </div>
                  </>
                );
                case 3: return (
                  <>
                    <div className="workflow-step-card" style={{ borderLeftColor: evalItem.color }}>
                      <h4 className="workflow-step-title">Consent & Legality</h4>
                      <p className="workflow-point">क्या इसके उपयोग के लिए उपयुक्त कानूनी और मानवाधिकार दिशानिर्देशों (Guidelines) का पालन हो रहा है?</p>
                    </div>
                    <div className="workflow-step-card" style={{ borderLeftColor: evalItem.color }}>
                      <h4 className="workflow-step-title">Advisory Nature</h4>
                      <p className="workflow-point">क्या यह सुनिश्चित किया गया है कि इसका आउटपुट केवल जांच की दिशा के लिए है और कोर्ट में दोष सिद्ध करने के लिए नहीं?</p>
                    </div>
                  </>
                );
                case 4: return (
                  <>
                    <div className="workflow-step-card" style={{ borderLeftColor: evalItem.color }}>
                      <h4 className="workflow-step-title">Better Interrogation Strategy</h4>
                      <p className="workflow-point">अधिकारियों को पूछताछ के दौरान मनोवैज्ञानिक बढ़त मिलना।</p>
                    </div>
                    <div className="workflow-step-card" style={{ borderLeftColor: evalItem.color }}>
                      <h4 className="workflow-step-title">Non-Invasive Solution</h4>
                      <p className="workflow-point">बिना किसी तार या सेंसर (Polygraph machine) लगाए, केवल कैमरे से झूठ का पता लगाना।</p>
                    </div>
                  </>
                );
                default: return null;
              }
            })()}
          </div>
        </div>
      </div>
    );
  }

  if (selectedOverviewSection !== null) {
    const sec = overviewSections.find(s => s.id === selectedOverviewSection);
    const SecIcon = sec.icon;
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setSelectedOverviewSection(null)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Project Overview
        </button>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <SecIcon size={40} color={sec.color} />
            <h3 style={{ margin: 0, fontSize: '2rem', color: '#0f172a' }}>{sec.title}</h3>
          </div>
          <div style={{ padding: 0 }}>
            {(() => {
              switch(sec.id) {
                case 'io-assistance': return (
                  <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '1rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                      {[
                        'पूछताछ के दौरान आरोपी के हाव-भाव और तनाव के स्तर का सटीक विश्लेषण।',
                        'यह बताना कि आरोपी किन सवालों पर सबसे ज्यादा घबराया या झूठ बोलने की कोशिश की।',
                        'पुराने और शातिर अपराधियों से सच उगलवाने में मनोवैज्ञानिक मदद।',
                        'बिना किसी कोर्ट परमिशन या मेडिकल मशीन (सेंसर) के तुरंत इस्तेमाल।'
                      ].map((text, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', background: '#f8fafc', padding: '1rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
                          <div style={{ background: '#dbeafe', padding: '0.4rem', borderRadius: '50%', color: '#2563eb', flexShrink: 0 }}><Search size={16} /></div>
                          <span style={{ color: '#334155', fontSize: '0.95rem', lineHeight: '1.5' }}>{text}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: '#fef2f2', border: '1px dashed #f87171', padding: '1rem 1.5rem', borderRadius: '0.75rem', color: '#b91c1c' }}>
                      <AlertTriangle size={20} />
                      <span style={{ fontWeight: '500' }}>नोट: यह सिस्टम केवल जांच की दिशा तय करने में सहायता करेगा, इसे सीधे कोर्ट में सबूत नहीं माना जाएगा।</span>
                    </div>
                  </div>
                );
                case 'objectives': return (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
                    <div className="tech-category-card" style={{ borderTop: '4px solid #3b82f6' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                        <div style={{ background: '#dbeafe', padding: '0.6rem', borderRadius: '0.5rem', color: '#2563eb' }}><Eye size={20} /></div>
                        <h5 style={{ margin: 0, fontSize: '1.15rem', color: '#1e293b' }}>1. Micro-expression Analysis</h5>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <span style={{ background: '#f1f5f9', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.9rem', color: '#475569' }}>• चेहरे के सूक्ष्म भावों का सेकंडों में विश्लेषण।</span>
                        <span style={{ background: '#f1f5f9', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.9rem', color: '#475569' }}>• डर (Fear), गुस्सा (Anger), आश्चर्य (Surprise) की पहचान।</span>
                      </div>
                    </div>
                    <div className="tech-category-card" style={{ borderTop: '4px solid #10b981' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                        <div style={{ background: '#d1fae5', padding: '0.6rem', borderRadius: '0.5rem', color: '#10b981' }}><HeartPulse size={20} /></div>
                        <h5 style={{ margin: 0, fontSize: '1.15rem', color: '#1e293b' }}>2. Stress & Thermal Analysis</h5>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <span style={{ background: '#f1f5f9', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.9rem', color: '#475569' }}>• पसीने की ग्रंथियों और त्वचा के तापमान में बदलाव को मापना।</span>
                        <span style={{ background: '#f1f5f9', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.9rem', color: '#475569' }}>• हार्ट रेट (rPPG) का अनुमान लगाना।</span>
                      </div>
                    </div>
                    <div className="tech-category-card" style={{ borderTop: '4px solid #f59e0b' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                        <div style={{ background: '#fef3c7', padding: '0.6rem', borderRadius: '0.5rem', color: '#f59e0b' }}><Camera size={20} /></div>
                        <h5 style={{ margin: 0, fontSize: '1.15rem', color: '#1e293b' }}>3. Non-Invasive Approach</h5>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <span style={{ background: '#f1f5f9', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.9rem', color: '#475569' }}>• आरोपी के शरीर पर कोई तार या सेंसर नहीं लगाना पड़ता।</span>
                        <span style={{ background: '#f1f5f9', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.9rem', color: '#475569' }}>• केवल हाई-रेजोल्यूशन कैमरा सेटअप की आवश्यकता।</span>
                      </div>
                    </div>
                    <div className="tech-category-card" style={{ borderTop: '4px solid #8b5cf6' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                        <div style={{ background: '#ede9fe', padding: '0.6rem', borderRadius: '0.5rem', color: '#8b5cf6' }}><Monitor size={20} /></div>
                        <h5 style={{ margin: 0, fontSize: '1.15rem', color: '#1e293b' }}>4. Real-time Feedback</h5>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <span style={{ background: '#f1f5f9', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.9rem', color: '#475569' }}>• पूछताछ कर रहे अधिकारी को स्क्रीन पर लाइव तनाव (Stress Graph) दिखाना।</span>
                        <span style={{ background: '#f1f5f9', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.9rem', color: '#475569' }}>• तुरंत चेतावनी (Alerts) देना।</span>
                      </div>
                    </div>
                  </div>
                );
                case 'features': return (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'white', padding: '1.25rem', borderRadius: '1rem', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                      <div style={{ background: '#f8fafc', padding: '0.75rem', borderRadius: '0.75rem', color: '#64748b' }}><Video size={22} /></div>
                      <div>
                        <h5 style={{ margin: '0 0 0.25rem 0', color: '#0f172a', fontSize: '1rem' }}>AI Video Analytics</h5>
                        <p style={{ margin: 0, color: '#64748b', fontSize: '0.85rem' }}>वीडियो से हाव-भाव पढ़ना</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'white', padding: '1.25rem', borderRadius: '1rem', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                      <div style={{ background: '#f8fafc', padding: '0.75rem', borderRadius: '0.75rem', color: '#64748b' }}><HeartPulse size={22} /></div>
                      <div>
                        <h5 style={{ margin: '0 0 0.25rem 0', color: '#0f172a', fontSize: '1rem' }}>Physiological Tracking</h5>
                        <p style={{ margin: 0, color: '#64748b', fontSize: '0.85rem' }}>हार्ट रेट और ब्लड फ्लो ट्रैक करना</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'white', padding: '1.25rem', borderRadius: '1rem', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                      <div style={{ background: '#f8fafc', padding: '0.75rem', borderRadius: '0.75rem', color: '#64748b' }}><BrainCircuit size={22} /></div>
                      <div>
                        <h5 style={{ margin: '0 0 0.25rem 0', color: '#0f172a', fontSize: '1rem' }}>Deception Scoring Engine</h5>
                        <p style={{ margin: 0, color: '#64748b', fontSize: '0.85rem' }}>झूठ बोलने की संभावना प्रतिशत</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'white', padding: '1.25rem', borderRadius: '1rem', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                      <div style={{ background: '#f8fafc', padding: '0.75rem', borderRadius: '0.75rem', color: '#64748b' }}><AlertTriangle size={22} /></div>
                      <div>
                        <h5 style={{ margin: '0 0 0.25rem 0', color: '#0f172a', fontSize: '1rem' }}>Real-time Alert System</h5>
                        <p style={{ margin: 0, color: '#64748b', fontSize: '0.85rem' }}>गंभीर सवालों पर अलर्ट देना</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'white', padding: '1.25rem', borderRadius: '1rem', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                      <div style={{ background: '#f8fafc', padding: '0.75rem', borderRadius: '0.75rem', color: '#64748b' }}><LayoutDashboard size={22} /></div>
                      <div>
                        <h5 style={{ margin: '0 0 0.25rem 0', color: '#0f172a', fontSize: '1rem' }}>Interview Timeline</h5>
                        <p style={{ margin: 0, color: '#64748b', fontSize: '0.85rem' }}>पूरे इंटरव्यू का वीडियो और ग्राफ</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'white', padding: '1.25rem', borderRadius: '1rem', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                      <div style={{ background: '#f8fafc', padding: '0.75rem', borderRadius: '0.75rem', color: '#64748b' }}><FileText size={22} /></div>
                      <div>
                        <h5 style={{ margin: '0 0 0.25rem 0', color: '#0f172a', fontSize: '1rem' }}>Report Generation</h5>
                        <p style={{ margin: 0, color: '#64748b', fontSize: '0.85rem' }}>पूछताछ की विस्तृत रिपोर्ट</p>
                      </div>
                    </div>
                  </div>
                );
                default: return null;
              }
            })()}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-details-container">
      <div className="details-header-bar">
        <button onClick={onBack} className="thane-back-btn">
          <ArrowLeft size={18} /> Back to Dashboard
        </button>
        <div className="details-header-content">
          <div className="details-title-wrapper">
            <h2 className="details-title">{project?.name || 'AI "झूठ पकड़ने वाला" वीडियो एनालिटिक्स (Non-Invasive AI Polygraph)'}</h2>
            <span className={`details-status-badge ${project?.status?.toLowerCase() || 'active'}`}>
              {project?.status || 'Active'}
            </span>
          </div>
          <p className="details-subtitle">{project?.description || 'पूछताछ के दौरान आरोपी के चेहरे के भाव (Micro-expressions) और पसीने का विश्लेषण करके झूठ पकड़ने वाला AI।'}</p>
        </div>
      </div>

      <div className="details-layout">
        {/* Sidebar Menu */}
        <div className="details-sidebar">
          <h3 className="details-sidebar-title">PROJECT MENU</h3>
          <nav className="details-nav">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`details-nav-item ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon size={18} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Content Area */}
        <div className="details-content-area">
          
          {/* 1. Project Overview */}
          {activeTab === 'overview' && (
            <div className="details-card" style={{ border: 'none', padding: 0 }}>
              
              {/* Hero Banner Style Objective */}
              <div style={{ background: 'linear-gradient(135deg, #2e1065 0%, #4c1d95 100%)', borderRadius: '1rem', padding: '2.5rem', color: 'white', marginBottom: '2.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-10%', right: '-5%', opacity: 0.1 }}>
                  <BrainCircuit size={200} />
                </div>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.75rem', margin: '0 0 1rem 0', color: '#f8fafc' }}>
                  <BrainCircuit size={28} color="#c4b5fd" /> 
                  Project Overview (परियोजना का परिचय)
                </h3>
                <p style={{ color: '#e2e8f0', fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '90%' }}>
                  <strong>"Non-Invasive AI Polygraph"</strong> एक एडवांस AI वीडियो एनालिटिक्स सिस्टम है जो बिना किसी शारीरिक संपर्क (Non-Invasive) के आरोपी के चेहरे के हाव-भाव (Micro-expressions), पसीने (Thermal Stress) और हृदय गति (Heart Rate) का विश्लेषण करके <strong>झूठ और तनाव</strong> का पता लगाता है।
                </p>
              </div>

              {/* Clickable Grid for Overview Sections */}
              <div className="tech-stack-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                {overviewSections.map((sec) => {
                  const Icon = sec.icon;
                  return (
                    <div 
                      key={sec.id} 
                      className="tech-category-card" 
                      style={{ cursor: 'pointer', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.25rem 1rem' }}
                      onClick={() => setSelectedOverviewSection(sec.id)}
                    >
                      <div style={{ background: `${sec.color}15`, padding: '0.75rem', borderRadius: '50%', marginBottom: '0.75rem' }}>
                        <Icon size={24} color={sec.color} />
                      </div>
                      <h4 style={{ margin: '0 0 0.25rem 0', color: '#0f172a', fontSize: '1rem', fontWeight: 'bold' }}>{sec.title}</h4>
                      <p style={{ margin: 0, color: '#64748b', fontSize: '0.85rem' }}>{sec.subtitle}</p>
                    </div>
                  );
                })}
              </div>

            </div>
          )}

          {/* 2. Architecture & Workflow */}
          {activeTab === 'architecture' && (
            <div className="details-card">
              <h3 className="section-title"><Network size={20} style={{ display: 'inline', marginRight: '8px' }} /> Architecture & Workflow (कार्यप्रणाली)</h3>
              
              <div className="arch-section" style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                
                <div 
                  className="arch-card" 
                  style={{ flex: 1, padding: '1.5rem', background: '#f0fdfa', borderRadius: '1rem', border: '1px solid #ccfbf1', cursor: 'pointer', transition: 'all 0.2s ease', display: 'flex', alignItems: 'center', gap: '1rem' }}
                  onClick={() => setShowFullscreenFlowchart(true)}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#14b8a6'; e.currentTarget.style.background = '#e6fffa'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#ccfbf1'; e.currentTarget.style.background = '#f0fdfa'; }}
                >
                  <div style={{ background: '#14b8a6', color: 'white', padding: '0.75rem', borderRadius: '0.75rem' }}>
                    <Network size={24} />
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem 0', color: '#0f172a', fontSize: '1.1rem' }}>View System Architecture</h4>
                    <p style={{ margin: 0, color: '#475569', fontSize: '0.9rem' }}>High-Level Flowchart (कैमरे से लेकर डैशबोर्ड तक)</p>
                  </div>
                </div>

                <div 
                  className="arch-card"
                  style={{ flex: 1, padding: '1.5rem', background: '#fffbeb', borderRadius: '1rem', border: '1px solid #fef3c7', cursor: 'pointer', transition: 'all 0.2s ease', display: 'flex', alignItems: 'center', gap: '1rem' }}
                  onClick={() => setShowFullscreenWorkflow(true)}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#f59e0b'; e.currentTarget.style.background = '#fef3c7'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#fef3c7'; e.currentTarget.style.background = '#fffbeb'; }}
                >
                  <div style={{ background: '#f59e0b', color: 'white', padding: '0.75rem', borderRadius: '0.75rem' }}>
                    <ListOrdered size={24} />
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem 0', color: '#0f172a', fontSize: '1.1rem' }}>View Step-by-Step Workflow</h4>
                    <p style={{ margin: 0, color: '#475569', fontSize: '0.9rem' }}>Detailed execution steps (Biometrics & Analytics)</p>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* 3. Tech Stack */}
          {activeTab === 'tech-stack' && (
            <div className="details-card">
              <h3 className="section-title"><Code size={20} style={{ display: 'inline', marginRight: '8px' }} /> Tech Stack (तकनीकी टूल्स)</h3>
              
              <div className="tech-stack-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div className="tech-category-card">
                  <h4>Facial Landmark & CV</h4>
                  <ul>
                    <li>OpenFace / MediaPipe</li>
                    <li>OpenCV</li>
                    <li>Dlib</li>
                  </ul>
                </div>
                <div className="tech-category-card">
                  <h4>Micro-Expression (AI/ML)</h4>
                  <ul>
                    <li>PyTorch / TensorFlow</li>
                    <li>3D-CNN / LSTM</li>
                    <li>FER+ (Facial Expression Recognition)</li>
                  </ul>
                </div>
                <div className="tech-category-card">
                  <h4>Physiological Analysis</h4>
                  <ul>
                    <li>rPPG (Remote Photoplethysmography)</li>
                    <li>Signal Processing Filters</li>
                  </ul>
                </div>
                <div className="tech-category-card">
                  <h4>Backend & Dashboard</h4>
                  <ul>
                    <li>FastAPI / Python (Backend)</li>
                    <li>React.js (Frontend)</li>
                    <li>WebSockets (Live Stream)</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* 4. Step-by-Step Guide */}
          {activeTab === 'guide' && (
            <div className="details-card">
              <h3 className="section-title"><ListOrdered size={20} style={{ display: 'inline', marginRight: '8px' }} /> Step-by-Step Guide (बनाने का तरीका)</h3>
              <p className="placeholder-text" style={{ marginBottom: '2rem' }}>
                प्रोजेक्ट को स्क्रैच से बनाने के लिए विस्तृत चरण:
              </p>

              <div className="tech-stack-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                {guideSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div 
                      key={step.id} 
                      className="tech-category-card" 
                      style={{ cursor: 'pointer', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.25rem 1rem' }}
                      onClick={() => setSelectedGuideStep(step.id)}
                    >
                      <div style={{ background: `${step.color}15`, padding: '0.75rem', borderRadius: '50%', marginBottom: '0.75rem' }}>
                        <Icon size={24} color={step.color} />
                      </div>
                      <h4 style={{ margin: '0 0 0.25rem 0', color: '#0f172a', fontSize: '1rem', fontWeight: 'bold' }}>{step.title}</h4>
                      <p style={{ margin: 0, color: '#64748b', fontSize: '0.85rem' }}>{step.subtitle}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 5. Resources */}
          {activeTab === 'resources' && (
            <div className="details-card">
              <h3 className="section-title"><BookOpen size={20} style={{ display: 'inline', marginRight: '8px' }} /> Resources & Datasets (जरूरी डेटा)</h3>
              
              <div className="tech-stack-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div className="tech-category-card">
                  <h4>Training Datasets</h4>
                  <ul>
                    <li>Real-Life Trial Datasets (Deception)</li>
                    <li>CASME II (Micro-expressions)</li>
                    <li>CK+ (Facial Expressions)</li>
                  </ul>
                </div>
                <div className="tech-category-card">
                  <h4>Hardware Requirements</h4>
                  <ul>
                    <li>4K / 1080p High FPS Camera</li>
                    <li>Good Studio Lighting (Ring Lights)</li>
                    <li>High-end GPU (RTX 4090/A100)</li>
                  </ul>
                </div>
                <div className="tech-category-card">
                  <h4>Research Papers</h4>
                  <ul>
                    <li>rPPG for Heart Rate Detection</li>
                    <li>Micro-expression Spotting with Deep Learning</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* 6. Evaluation */}
          {activeTab === 'evaluation' && (
            <div className="details-card">
              <h3 className="section-title"><CheckSquare size={20} style={{ display: 'inline', marginRight: '8px' }} /> Submission/Evaluation (चेकलिस्ट)</h3>
              <p className="placeholder-text" style={{ marginBottom: '2rem' }}>
                इस प्रोजेक्ट को सबमिट करने और इसकी गुणवत्ता जांचने के लिए नीचे दिए गए चेकलिस्ट का पालन करें:
              </p>

              <div className="tech-stack-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                {evaluationList.map((evaluation) => {
                  const Icon = evaluation.icon;
                  return (
                    <div 
                      key={evaluation.id} 
                      className="tech-category-card" 
                      style={{ cursor: 'pointer', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.25rem 1rem' }}
                      onClick={() => setSelectedEvaluation(evaluation.id)}
                    >
                      <div style={{ background: `${evaluation.color}15`, padding: '0.75rem', borderRadius: '50%', marginBottom: '0.75rem' }}>
                        <Icon size={24} color={evaluation.color} />
                      </div>
                      <h4 style={{ margin: '0 0 0.25rem 0', color: '#0f172a', fontSize: '1rem', fontWeight: 'bold' }}>{evaluation.title}</h4>
                      <p style={{ margin: 0, color: '#64748b', fontSize: '0.85rem' }}>{evaluation.subtitle}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 7. Settings */}
          {activeTab === 'settings' && (
            <div className="details-card">
              <h3 className="section-title"><Settings size={20} style={{ display: 'inline', marginRight: '8px' }} /> Project Settings</h3>
              <p className="placeholder-text">Configuration options for {project?.name || 'AI Polygraph'} will be available here.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
