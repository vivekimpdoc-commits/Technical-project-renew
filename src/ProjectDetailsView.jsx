import React, { useState } from 'react';
import { ArrowLeft, LayoutDashboard, FileText, Activity, Users, Settings, Network, Code, Monitor, Server, BrainCircuit, Database, ListOrdered, Shield, CheckCircle, BookOpen, Mic, CheckSquare } from 'lucide-react';
import './ProjectDetailsView.css';
import ThanaDashboardDetails from './ThanaDashboardDetails';
import DigitalBeatBookDetails from './DigitalBeatBookDetails';
import ArmouryAIDetails from './ArmouryAIDetails';
import MalkhanaTrackerDetails from './MalkhanaTrackerDetails';
import SmartRosterDetails from './SmartRosterDetails';
import SafetyAIDetails from './SafetyAIDetails';

export default function ProjectDetailsView({ project, onBack }) {
  if (project?.id === 2) {
    return <ThanaDashboardDetails project={project} onBack={onBack} />;
  }

  if (project?.id === 3) {
    return <DigitalBeatBookDetails project={project} onBack={onBack} />;
  }

  if (project?.id === 4) {
    return <ArmouryAIDetails project={project} onBack={onBack} />;
  }

  if (project?.id === 5) {
    return <MalkhanaTrackerDetails project={project} onBack={onBack} />;
  }

  if (project?.id === 6) {
    return <SmartRosterDetails project={project} onBack={onBack} />;
  }

  if (project?.id === 7) {
    return <SafetyAIDetails project={project} onBack={onBack} />;
  }

  const [activeTab, setActiveTab] = useState('overview');
  const [showFullscreenFlowchart, setShowFullscreenFlowchart] = useState(false);
  const [showFullscreenWorkflow, setShowFullscreenWorkflow] = useState(false);
  const [showFrontendDetails, setShowFrontendDetails] = useState(false);
  const [showBackendDetails, setShowBackendDetails] = useState(false);
  const [showAiDetails, setShowAiDetails] = useState(false);
  const [showDatabaseDetails, setShowDatabaseDetails] = useState(false);
  const [selectedGuideStep, setSelectedGuideStep] = useState(null);
  const [selectedResource, setSelectedResource] = useState(null);
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);

  const guideSteps = [
    { id: 1, title: 'चरण 1: योजना और कानूनी डेटाबेस की तैयारी', subtitle: 'Planning & Data Gathering', icon: FileText, color: '#3b82f6' },
    { id: 2, title: 'चरण 2: एआई मॉडल्स का चयन और ट्रेनिंग', subtitle: 'AI Core Development', icon: BrainCircuit, color: '#10b981' },
    { id: 3, title: 'चरण 3: बैकएंड और API का निर्माण', subtitle: 'Backend Development', icon: Server, color: '#f59e0b' },
    { id: 4, title: 'चरण 4: फ्रंटएंड और यूजर इंटरफेस', subtitle: 'Frontend & UI Design', icon: Monitor, color: '#8b5cf6' },
    { id: 5, title: 'चरण 5: टेस्टिंग और मानवीय समीक्षा', subtitle: 'Testing & Guardrails', icon: CheckCircle, color: '#ec4899' },
    { id: 6, title: 'चरण 6: सुरक्षा और डिप्लॉयमेंट', subtitle: 'Security & Deployment', icon: Shield, color: '#64748b' },
  ];

  const resourcesList = [
    { id: 1, title: '1. कानूनी और धाराओं का डेटा', subtitle: 'Legal & Act Datasets', icon: FileText, color: '#e11d48' },
    { id: 2, title: '2. आवाज और स्पीच-टू-टेक्स्ट डेटा', subtitle: 'Voice & Speech Datasets', icon: Mic, color: '#2563eb' },
    { id: 3, title: '3. सैंपल FIR डेटा कैसे तैयार करें?', subtitle: 'Synthetic FIR Data', icon: Database, color: '#10b981' },
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
        <button 
          onClick={() => setShowFullscreenFlowchart(false)} 
          className="back-button" 
          style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}
        >
          <ArrowLeft size={18} /> Back to Architecture Menu
        </button>

        <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.75rem', color: '#0f172a' }}>आर्किटेक्चर और प्रोसेस फ्लो चार्ट (Process Flow Chart)</h3>
        
        <div className="flowchart-container" style={{ margin: '0 auto', maxWidth: '800px', background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
          <div className="flow-step">
            <div className="flow-node user-node">
              <div className="flow-icon">🗣️</div>
              <div className="flow-content">
                <h4>उपयोगकर्ता (पीड़ित/पुलिस)</h4>
                <p>बोलकर बयान दर्ज करना / Voice Input</p>
              </div>
            </div>
          </div>
          <div className="flow-arrow">↓</div>
          
          <div className="flow-step">
            <div className="flow-node">
              <div className="flow-badge">चरण 1: स्पीच प्रोसेसिंग</div>
              <div className="flow-content">
                <p>Audio Pre-processing & Noise Reduction</p>
              </div>
            </div>
          </div>
          <div className="flow-arrow">↓</div>
          
          <div className="flow-step">
            <div className="flow-node">
              <div className="flow-badge">चरण 2: ट्रांसक्रिप्शन</div>
              <div className="flow-content">
                <p>Automatic Speech Recognition (ASR Model)</p>
              </div>
            </div>
          </div>
          <div className="flow-arrow">↓</div>
          
          <div className="flow-step">
            <div className="flow-node">
              <div className="flow-badge">चरण 3: एनएलपी इंजन</div>
              <div className="flow-content">
                <p>Crime GPT / LLM Core Engine</p>
                <ul className="flow-sublist">
                  <li>Name Entity Recognition (नाम, समय, स्थान)</li>
                  <li>Intent & Context Analysis (अपराध का प्रकार)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flow-arrow">↓</div>
          
          <div className="flow-step">
            <div className="flow-node">
              <div className="flow-badge">चरण 4: लीगल मैपिंग</div>
              <div className="flow-content">
                <p>BNS / IPC Law Database Integration</p>
                <ul className="flow-sublist">
                  <li>सही कानूनी धाराओं का स्वचालित सुझाव</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flow-arrow">↓</div>
          
          <div className="flow-step">
            <div className="flow-node">
              <div className="flow-badge">चरण 5: जनरेशन इंजन</div>
              <div className="flow-content">
                <p>Standardized FIR Formatted Template</p>
              </div>
            </div>
          </div>
          <div className="flow-arrow">↓</div>
          
          <div className="flow-step">
            <div className="flow-node">
              <div className="flow-badge">चरण 6: सत्यापन</div>
              <div className="flow-content">
                <p>पुलिस अधिकारी द्वारा समीक्षा और संपादन (Human-in-the-Loop)</p>
              </div>
            </div>
          </div>
          <div className="flow-arrow">↓</div>
          
          <div className="flow-step">
            <div className="flow-node output-node">
              <div className="flow-icon">📄</div>
              <div className="flow-content">
                <h4>अंतिम आउटपुट</h4>
                <p>डिजिटल हस्ताक्षर + आधिकारिक FIR जनरेट और सेव</p>
              </div>
            </div>
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
          className="back-button" 
          style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}
        >
          <ArrowLeft size={18} /> Back to Architecture Menu
        </button>

        <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.75rem', color: '#0f172a' }}>विस्तृत कार्यप्रणाली (Step-by-Step Workflow)</h3>
        
        <div className="workflow-container">
          {/* Step 1 */}
          <div className="workflow-step-card">
            <div className="workflow-step-number">1</div>
            <h4 className="workflow-step-title">वॉइस इनपुट और प्रोसेसिंग (Voice Input & Processing)</h4>
            <div className="workflow-point">
              <strong>ऑडियो कैप्चर:</strong> पुलिस अधिकारी या पीड़ित ऐप/वेब पोर्टल पर माइक बटन दबाकर घटना का विवरण अपनी भाषा (उदा. हिंदी, हिंग्लिश, भोजपुरी) में बोलता है।
            </div>
            <div className="workflow-point">
              <strong>नॉइज़ कैंसिलेशन:</strong> AI एल्गोरिदम बैकग्राउंड के शोर (थानों की आवाज़, ट्रैफ़िक आदि) को साफ़ करता है ताकि आवाज़ स्पष्ट हो सके।
            </div>
          </div>

          {/* Step 2 */}
          <div className="workflow-step-card">
            <div className="workflow-step-number">2</div>
            <h4 className="workflow-step-title">स्पीच-टू-टेक्स्ट रूपांतरण (ASR - Automatic Speech Recognition)</h4>
            <div className="workflow-point">
              <strong>स्थानीय भाषा प्रसंस्करण:</strong> एक बहुभाषी AI मॉडल (जैसे OpenAI Whisper या Google Speech-to-Text) बोली गई आवाज़ को लिखित टेक्स्ट में बदलता है।
            </div>
            <div className="workflow-point">
              यह मॉडल भारत की क्षेत्रीय बोलियों और मिश्रित भाषाओं (जैसे हिंदी + इंग्लिश) को समझने में सक्षम होता है।
            </div>
          </div>

          {/* Step 3 */}
          <div className="workflow-step-card">
            <div className="workflow-step-number">3</div>
            <h4 className="workflow-step-title">इनफार्मेशन एक्सट्रैक्शन और एनएलपी (Information Extraction & NLP)</h4>
            <div className="workflow-point">
              <strong>Crime GPT (LLM Core):</strong> लिखित टेक्स्ट को कोर AI इंजन प्रोसेस करता है।
            </div>
            <div className="workflow-point">
              <strong>डेटा वर्गीकरण (NER):</strong> AI पूरे टेक्स्ट में से मुख्य कानूनी तत्वों को स्वचालित रूप से पहचान कर अलग करता है:
            </div>
            <div className="workflow-ner-list">
              <div className="ner-item">
                <span className="ner-item-title">कौन (Who)</span>
                <span className="ner-item-desc">पीड़ित, आरोपी, और गवाहों के नाम</span>
              </div>
              <div className="ner-item">
                <span className="ner-item-title">कहाँ (Where)</span>
                <span className="ner-item-desc">घटना का सटीक स्थान या लैंडमार्क</span>
              </div>
              <div className="ner-item">
                <span className="ner-item-title">कब (When)</span>
                <span className="ner-item-desc">तारीख, दिन और समय</span>
              </div>
              <div className="ner-item">
                <span className="ner-item-title">क्या (What)</span>
                <span className="ner-item-desc">अपराध का विवरण (उदा. "बाइक की डिक्की से पैसे निकाले" &rarr; चोरी/Theft)</span>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="workflow-step-card">
            <div className="workflow-step-number">4</div>
            <h4 className="workflow-step-title">कानूनी धाराओं का मिलान (Legal Mapping Engine)</h4>
            <div className="workflow-point">
              <strong>BNS डेटाबेस लिंकेज:</strong> सिस्टम भारतीय न्याय संहिता (BNS) के डिजिटल डेटाबेस से जुड़ा होता है।
            </div>
            <div className="workflow-point">
              <strong>स्मार्ट सुझाव:</strong> अपराध के तरीके (Modus Operandi) का विश्लेषण करके AI स्वचालित रूप से सही धाराओं (Sections) का सुझाव स्क्रीन पर फ्लैश करता है।
            </div>
          </div>

          {/* Step 5 */}
          <div className="workflow-step-card">
            <div className="workflow-step-number">5</div>
            <h4 className="workflow-step-title">FIR ड्राफ्ट जनरेशन (Draft Generation)</h4>
            <div className="workflow-point">
              <strong>मानकीकृत फॉर्मेट:</strong> निकाली गई जानकारी को पुलिस मैनुअल के अनुसार एक संरचित FIR टेम्पलेट (जैसे फॉर्म नंबर, घटना का विवरण, धाराएं) में फिट किया जाता है।
            </div>
            <div className="workflow-point">
              कुछ ही सेकंड में एक विस्तृत कानूनी ड्राफ्ट स्क्रीन पर तैयार हो जाता है।
            </div>
          </div>

          {/* Step 6 */}
          <div className="workflow-step-card">
            <div className="workflow-step-number">6</div>
            <h4 className="workflow-step-title">मानवीय समीक्षा और फाइनल सबमिशन (Human-in-the-Loop Review)</h4>
            <div className="workflow-point">
              <strong>सत्यापन और संपादन:</strong> ड्यूटी ऑफिसर (IO) ड्राफ्ट और सुझाई गई धाराओं की जांच करता है। यदि आवश्यक हो, तो वह कीबोर्ड या दोबारा बोलकर उसमें सुधार कर सकता है।
            </div>
            <div className="workflow-point">
              <strong>डिजिटल लॉक:</strong> अधिकारी की संतुष्टि के बाद, 'Approve' बटन दबाकर FIR को CCTNS (Crime and Criminal Tracking Network & Systems) डेटाबेस में सीधे सिंक कर दिया जाता है।
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showFrontendDetails) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button 
          onClick={() => setShowFrontendDetails(false)} 
          className="back-button" 
          style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}
        >
          <ArrowLeft size={18} /> Back to Tech Stack
        </button>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <Monitor size={40} color="#2563eb" />
            <h3 style={{ margin: 0, fontSize: '2rem', color: '#0f172a' }}>फ्रंटएंड (Frontend) - यूजर इंटरफेस</h3>
          </div>
          
          <p className="overview-intro-text" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.15rem' }}>
            पुलिस थानों और फील्ड ड्यूटी के लिए वेब और मोबाइल दोनों प्लेटफॉर्म जरूरी हैं।
          </p>
          
          <div className="workflow-container" style={{ padding: 0 }}>
            <div className="workflow-step-card" style={{ borderLeftColor: '#3b82f6', paddingLeft: '2rem' }}>
              <h4 className="workflow-step-title" style={{ color: '#1d4ed8' }}>🌐 वेब एप्लिकेशन</h4>
              <div className="workflow-point">
                <strong>React.js या Next.js:</strong> यह यूजर इंटरफेस को बहुत तेज़ और रेस्पॉन्सिव बनाता है।
              </div>
            </div>

            <div className="workflow-step-card" style={{ borderLeftColor: '#10b981', paddingLeft: '2rem' }}>
              <h4 className="workflow-step-title" style={{ color: '#047857' }}>📱 मोबाइल ऐप</h4>
              <div className="workflow-point">
                <strong>Flutter या React Native:</strong> एक ही कोड से एंड्रॉइड और iOS दोनों ऐप तैयार हो जाएंगे, जो पुलिस अधिकारियों के टैबलेट/फोन के लिए सही रहेगा।
              </div>
            </div>

            <div className="workflow-step-card" style={{ borderLeftColor: '#8b5cf6', paddingLeft: '2rem' }}>
              <h4 className="workflow-step-title" style={{ color: '#6d28d9' }}>🎨 स्टाइलिंग</h4>
              <div className="workflow-point">
                <strong>Tailwind CSS:</strong> साफ-सुथरे और सुगमता से पढ़े जाने वाले डैशबोर्ड के लिए।
              </div>
            </div>

            <div className="workflow-step-card" style={{ borderLeftColor: '#f59e0b', paddingLeft: '2rem' }}>
              <h4 className="workflow-step-title" style={{ color: '#b45309' }}>🎙️ ऑडियो रिकॉर्डिंग प्लगइन</h4>
              <div className="workflow-point">
                <strong>Web Audio API या RecordRTC:</strong> ब्राउज़र या ऐप के अंदर बिना किसी रुकावट के आवाज़ रिकॉर्ड करने के लिए।
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showBackendDetails) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button 
          onClick={() => setShowBackendDetails(false)} 
          className="back-button" 
          style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}
        >
          <ArrowLeft size={18} /> Back to Tech Stack
        </button>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <Server size={40} color="#2563eb" />
            <h3 style={{ margin: 0, fontSize: '2rem', color: '#0f172a' }}>बैकएंड (Backend) - कोर लॉजिक और API</h3>
          </div>
          
          <p className="overview-intro-text" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.15rem' }}>
            हाई-परफॉर्मेंस और AI मॉडल्स के साथ आसान इंटीग्रेशन के लिए।
          </p>
          
          <div className="workflow-container" style={{ padding: 0 }}>
            <div className="workflow-step-card" style={{ borderLeftColor: '#f59e0b', paddingLeft: '2rem' }}>
              <h4 className="workflow-step-title" style={{ color: '#b45309' }}>💻 प्रोग्रामिंग लैंग्वेज</h4>
              <div className="workflow-point">
                <strong>Python (FastAPI) या Node.js (Express)</strong>
              </div>
              <div className="workflow-point" style={{ marginTop: '0.75rem', padding: '1rem', background: '#fef3c7', borderRadius: '0.5rem', border: '1px solid #fde68a' }}>
                <strong style={{ color: '#92400e' }}>💡 सुझाव:</strong> FastAPI सबसे बेहतर है क्योंकि यह Python-आधारित है, जिससे AI मॉडल्स को जोड़ना बहुत आसान और सुपर-फ़ास्ट हो जाता है।
              </div>
            </div>

            <div className="workflow-step-card" style={{ borderLeftColor: '#3b82f6', paddingLeft: '2rem' }}>
              <h4 className="workflow-step-title" style={{ color: '#1d4ed8' }}>🔗 ऑर्केस्ट्रेशन / AI पाइपलाइन</h4>
              <div className="workflow-point">
                <strong>LangChain या LlamaIndex:</strong> यह आपके LLM, डेटाबेस और यूजर इनपुट के बीच एक पुल (bridge) का काम करेगा।
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showAiDetails) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button 
          onClick={() => setShowAiDetails(false)} 
          className="back-button" 
          style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}
        >
          <ArrowLeft size={18} /> Back to Tech Stack
        </button>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <BrainCircuit size={40} color="#2563eb" />
            <h3 style={{ margin: 0, fontSize: '2rem', color: '#0f172a' }}>AI और NLP स्टैक</h3>
          </div>
          
          <p className="overview-intro-text" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.15rem' }}>
            Artificial Intelligence & Text Processing (यह इस प्रोजेक्ट का सबसे महत्वपूर्ण हिस्सा है)
          </p>
          
          <div className="workflow-container" style={{ padding: 0 }}>
            <div className="workflow-step-card" style={{ borderLeftColor: '#3b82f6', paddingLeft: '2rem' }}>
              <h4 className="workflow-step-title" style={{ color: '#1d4ed8' }}>🎙️ स्पीच-टू-टेक्स्ट (ASR)</h4>
              <div className="workflow-point">
                <strong>OpenAI Whisper (Large-v3) या Bhashini API:</strong> Bhashini भारत सरकार का टूल है जो भारतीय क्षेत्रीय भाषाओं और बोलियों को सबसे सटीक समझता है।
              </div>
            </div>

            <div className="workflow-step-card" style={{ borderLeftColor: '#10b981', paddingLeft: '2rem' }}>
              <h4 className="workflow-step-title" style={{ color: '#047857' }}>🧠 कोर LLM (Crime GPT Engine)</h4>
              <div className="workflow-point">
                <strong>Llama 3 / 3.1 (70B/8B) या Mistral (Nemo/Large):</strong> इन मॉडल्स को थानों के अपने सर्वर पर ऑफलाइन/लोकल भी चलाया जा सकता है, जिससे डेटा लीक का खतरा नहीं रहता।
              </div>
              <div className="workflow-point" style={{ marginTop: '0.75rem', padding: '1rem', background: '#ecfdf5', borderRadius: '0.5rem', border: '1px solid #a7f3d0' }}>
                <strong style={{ color: '#065f46' }}>🌐 व्यावसायिक विकल्प:</strong> OpenAI GPT-4o या Anthropic Claude 3.5 Sonnet (अगर क्लाउड आधारित सिस्टम बनाना हो)।
              </div>
            </div>
            
            <div className="workflow-step-card" style={{ borderLeftColor: '#8b5cf6', paddingLeft: '2rem' }}>
              <h4 className="workflow-step-title" style={{ color: '#6d28d9' }}>🔍 एंबेडेड और सर्च (RAG)</h4>
              <div className="workflow-point">
                <strong>Hugging Face Transformers:</strong> कानूनी दस्तावेजों और BNS धाराओं के मिलान के लिए।
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showDatabaseDetails) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button 
          onClick={() => setShowDatabaseDetails(false)} 
          className="back-button" 
          style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}
        >
          <ArrowLeft size={18} /> Back to Tech Stack
        </button>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', justifyContent: 'center' }}>
            <Database size={40} color="#2563eb" />
            <h3 style={{ margin: 0, fontSize: '2rem', color: '#0f172a' }}>डेटाबेस और स्टोरेज</h3>
          </div>
          
          <div className="workflow-container" style={{ padding: 0 }}>
            <div className="workflow-step-card" style={{ borderLeftColor: '#f43f5e', paddingLeft: '2rem' }}>
              <h4 className="workflow-step-title" style={{ color: '#e11d48' }}>🗃️ रिलेशनल डेटाबेस</h4>
              <div className="workflow-point">
                <strong>PostgreSQL:</strong> FIR के स्ट्रक्चर्ड डेटा जैसे नाम, पता, समय और धाराओं को सुरक्षित रखने के लिए।
              </div>
            </div>

            <div className="workflow-step-card" style={{ borderLeftColor: '#0ea5e9', paddingLeft: '2rem' }}>
              <h4 className="workflow-step-title" style={{ color: '#0284c7' }}>🧠 वेक्टर डेटाबेस</h4>
              <div className="workflow-point">
                <strong>Pinecone, Milvus, या pgvector:</strong> भारतीय न्याय संहिता (BNS) की धाराओं और पिछले कानूनी मामलों को स्टोर करने के लिए, जिससे AI सही धाराएं ढूंढ सके।
              </div>
            </div>
            
            <div className="workflow-step-card" style={{ borderLeftColor: '#f59e0b', paddingLeft: '2rem' }}>
              <h4 className="workflow-step-title" style={{ color: '#b45309' }}>📁 ऑडियो फाइल स्टोरेज</h4>
              <div className="workflow-point">
                <strong>MinIO (लोकल सर्वर के लिए) या AWS S3 (क्लाउड के लिए):</strong> जहाँ ओरिजिनल वॉइस रिकॉर्डिंग सुरक्षित सेव रहेगी।
              </div>
            </div>
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
        <button 
          onClick={() => setSelectedGuideStep(null)} 
          className="back-button" 
          style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}
        >
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
                case 1:
                  return (
                    <>
                      <p className="overview-intro-text" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.15rem' }}>
                        सबसे पहले सिस्टम के लिए सही कानूनी जानकारी जुटाना जरूरी है।
                      </p>
                      <div className="workflow-step-card" style={{ borderLeftColor: '#3b82f6', paddingLeft: '2rem' }}>
                        <h4 className="workflow-step-title" style={{ color: '#1d4ed8' }}>📚 BNS डेटाबेस तैयार करना</h4>
                        <div className="workflow-point">भारतीय न्याय संहिता (BNS) की सभी धाराओं, परिभाषाओं और सजा के प्रावधानों को एक साफ टेक्स्ट/डिजिटल फॉर्मेट में इकट्ठा करें।</div>
                      </div>
                      <div className="workflow-step-card" style={{ borderLeftColor: '#10b981', paddingLeft: '2rem' }}>
                        <h4 className="workflow-step-title" style={{ color: '#047857' }}>📄 FIR टेम्पलेट डिजाइन</h4>
                        <div className="workflow-point">विभिन्न प्रकार के अपराधों (जैसे चोरी, साइबर क्राइम, दुर्घटना) के लिए आधिकारिक FIR के फॉर्मैट्स (Templates) तय करें।</div>
                      </div>
                      <div className="workflow-step-card" style={{ borderLeftColor: '#f59e0b', paddingLeft: '2rem' }}>
                        <h4 className="workflow-step-title" style={{ color: '#b45309' }}>📖 क्राइम डिक्शनरी</h4>
                        <div className="workflow-point">आम बोलचाल में इस्तेमाल होने वाले शब्दों (जैसे- "हाथपाई", "ताला तोड़ना", "धमकी") को कानूनी शब्दों से जोड़ने की एक मैपिंग शीट बनाएं।</div>
                      </div>
                    </>
                  );
                case 2:
                  return (
                    <>
                      <p className="overview-intro-text" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.15rem' }}>
                        यह इस प्रोजेक्ट का सबसे महत्वपूर्ण तकनीकी हिस्सा है।
                      </p>
                      <div className="workflow-step-card" style={{ borderLeftColor: '#10b981', paddingLeft: '2rem' }}>
                        <h4 className="workflow-step-title" style={{ color: '#047857' }}>🎙️ स्पीच-टू-टेक्स्ट (ASR) सेट करना</h4>
                        <div className="workflow-point">Bhashini API या OpenAI Whisper को इंटीग्रेट करें। इन्हें भारतीय लहजे (Indian Accent) और स्थानीय भाषाओं (जैसे हिंदी, हिंग्लिश) को सटीक रूप से समझने के लिए ट्यून करें।</div>
                      </div>
                      <div className="workflow-step-card" style={{ borderLeftColor: '#8b5cf6', paddingLeft: '2rem' }}>
                        <h4 className="workflow-step-title" style={{ color: '#6d28d9' }}>🔍 RAG सेटअप</h4>
                        <div className="workflow-point">BNS डेटाबेस को pgvector या Pinecone जैसे वेक्टर डेटाबेस में डालें। इससे AI बिना गलती किए सही कानूनी धाराएं खोज पाएगा।</div>
                      </div>
                      <div className="workflow-step-card" style={{ borderLeftColor: '#f43f5e', paddingLeft: '2rem' }}>
                        <h4 className="workflow-step-title" style={{ color: '#e11d48' }}>🤖 LLM प्रॉम्प्ट इंजीनियरिंग</h4>
                        <div className="workflow-point">Llama 3 या GPT-4 जैसे मॉडल को विशेष निर्देश (Prompts) दें कि वह टेक्स्ट में से केवल "कौन, कहाँ, कब, और क्या" जैसी जरूरी जानकारियां ही निकाले।</div>
                      </div>
                    </>
                  );
                case 3:
                  return (
                    <>
                      <p className="overview-intro-text" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.15rem' }}>
                        सभी एआई मॉडल्स और डेटाबेस को आपस में जोड़ने के लिए मजबूत आर्किटेक्चर बनाएं।
                      </p>
                      <div className="workflow-step-card" style={{ borderLeftColor: '#f59e0b', paddingLeft: '2rem' }}>
                        <h4 className="workflow-step-title" style={{ color: '#b45309' }}>⚙️ FastAPI सेटअप</h4>
                        <div className="workflow-point">यूजर के वॉइस इनपुट को रिसीव करने, उसे प्रोसेस करने और फाइनल ड्राफ्ट भेजने के लिए सिक्योर एंडपॉइंट्स (APIs) बनाएं।</div>
                      </div>
                      <div className="workflow-step-card" style={{ borderLeftColor: '#0ea5e9', paddingLeft: '2rem' }}>
                        <h4 className="workflow-step-title" style={{ color: '#0284c7' }}>⛓️ पाइपलाइन मैनेजमेंट</h4>
                        <div className="workflow-point">LangChain का उपयोग करके एक ऐसी कड़ी बनाएं जिसमें:<br/><br/><strong>ऑडियो इनपुट &rarr; टेक्स्ट रूपांतरण &rarr; डेटा एक्सट्रैक्शन &rarr; कानूनी धारा मैपिंग &rarr; फाइनल ड्राफ्ट जनरेशन</strong><br/><br/>एक साथ स्मूथली चले।</div>
                      </div>
                    </>
                  );
                case 4:
                  return (
                    <>
                      <p className="overview-intro-text" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.15rem' }}>
                        पुलिस थानों और अधिकारियों के इस्तेमाल के लिए एक सरल और साफ डैशबोर्ड बनाएं।
                      </p>
                      <div className="workflow-step-card" style={{ borderLeftColor: '#8b5cf6', paddingLeft: '2rem' }}>
                        <h4 className="workflow-step-title" style={{ color: '#6d28d9' }}>🎤 रिकॉर्डिंग स्क्रीन</h4>
                        <div className="workflow-point">एक बड़ा, साफ 'Mic' बटन दें जिसे दबाकर बयान रिकॉर्ड किया जा सके।</div>
                      </div>
                      <div className="workflow-step-card" style={{ borderLeftColor: '#ec4899', paddingLeft: '2rem' }}>
                        <h4 className="workflow-step-title" style={{ color: '#be185d' }}>📝 लाइव ट्रांसक्रिप्शन</h4>
                        <div className="workflow-point">जैसे-जैसे व्यक्ति बोले, उसका टेक्स्ट स्क्रीन पर लाइव दिखाई देना चाहिए।</div>
                      </div>
                      <div className="workflow-step-card" style={{ borderLeftColor: '#14b8a6', paddingLeft: '2rem' }}>
                        <h4 className="workflow-step-title" style={{ color: '#0f766e' }}>🖥️ स्प्लिट-स्क्रीन डैशबोर्ड</h4>
                        <div className="workflow-point">बाईं तरफ पीड़ित का पूरा बयान (Raw Text) और दाईं तरफ AI द्वारा तैयार किया गया स्ट्रक्चर्ड FIR ड्राफ्ट और सुझाई गई धाराएं दिखाई दें।</div>
                      </div>
                    </>
                  );
                case 5:
                  return (
                    <>
                      <p className="overview-intro-text" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.15rem' }}>
                        कानूनी मामलों में गलतियों की कोई गुंजाइश नहीं होती, इसलिए कड़ी टेस्टिंग जरूरी है।
                      </p>
                      <div className="workflow-step-card" style={{ borderLeftColor: '#ec4899', paddingLeft: '2rem' }}>
                        <h4 className="workflow-step-title" style={{ color: '#be185d' }}>🧪 डमी केसेस के साथ टेस्ट</h4>
                        <div className="workflow-point">थानों के पुराने (फर्जी या पुराने सुलझे हुए) मामलों के बयानों को बोलकर टेस्ट करें कि AI सही धाराएं लगा रहा है या नहीं।</div>
                      </div>
                      <div className="workflow-step-card" style={{ borderLeftColor: '#f59e0b', paddingLeft: '2rem' }}>
                        <h4 className="workflow-step-title" style={{ color: '#b45309' }}>👤 ह्यूमन-इन-द-लूप</h4>
                        <div className="workflow-point">एक ऐसा एडिटिंग पैनल बनाएं जहाँ ड्यूटी ऑफिसर AI द्वारा बनाई गई किसी भी लाइन या धारा को फाइनल सबमिट करने से पहले खुद मैन्युअल रूप से बदल सके।</div>
                      </div>
                    </>
                  );
                case 6:
                  return (
                    <>
                      <p className="overview-intro-text" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.15rem' }}>
                        अंतिम चरण में सिस्टम को सुरक्षित और लाइव करना।
                      </p>
                      <div className="workflow-step-card" style={{ borderLeftColor: '#64748b', paddingLeft: '2rem' }}>
                        <h4 className="workflow-step-title" style={{ color: '#334155' }}>🔒 ऑन-प्रिमाइसेस डिप्लॉयमेंट</h4>
                        <div className="workflow-point">संवेदनशीलता को देखते हुए, पूरे सिस्टम को पुलिस विभाग के अपने सुरक्षित लोकल सर्वर पर डिप्लॉय करें ताकि डेटा इंटरनेट पर लीक न हो।</div>
                      </div>
                      <div className="workflow-step-card" style={{ borderLeftColor: '#3b82f6', paddingLeft: '2rem' }}>
                        <h4 className="workflow-step-title" style={{ color: '#1d4ed8' }}>🔑 रोल-बेस्ड एक्सेस (RBAC)</h4>
                        <div className="workflow-point">केवल अधिकृत पुलिस अधिकारियों (जैसे SHO या IO) को ही लॉग इन और FIR सबमिट करने की अनुमति के लिए सुरक्षा लेयर जोड़ें।</div>
                      </div>
                    </>
                  );
                default:
                  return null;
              }
            })()}
          </div>
        </div>
      </div>
    );
  }

  if (selectedResource !== null) {
    const resource = resourcesList.find(r => r.id === selectedResource);
    const ResourceIcon = resource.icon;
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button 
          onClick={() => setSelectedResource(null)} 
          className="back-button" 
          style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}
        >
          <ArrowLeft size={18} /> Back to Resources
        </button>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <ResourceIcon size={40} color={resource.color} />
            <h3 style={{ margin: 0, fontSize: '2rem', color: '#0f172a' }}>{resource.title}</h3>
          </div>
          
          <div className="workflow-container" style={{ padding: 0 }}>
            {(() => {
              switch(resource.id) {
                case 1:
                  return (
                    <>
                      <p className="overview-intro-text" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.15rem' }}>
                        AI को भारतीय कानून (BNS) और FIR का फॉर्मेट सिखाने के लिए इन डेटासेट्स का उपयोग करें:
                      </p>
                      <div className="workflow-step-card" style={{ borderLeftColor: '#e11d48', paddingLeft: '2rem' }}>
                        <h4 className="workflow-step-title" style={{ color: '#be123c' }}>📜 भारतीय न्याय संहिता (BNS) आधिकारिक गजट</h4>
                        <div className="workflow-point"><strong>स्रोत:</strong> भारत सरकार की आधिकारिक वेबसाइट (egazette.gov.in या legislative.gov.in)।</div>
                        <div className="workflow-point"><strong>उपयोग:</strong> यहाँ से नई BNS, BNSS, और BSA की पूरी PDF डाउनलोड करके अपने RAG (Vector Database) सिस्टम को ट्रेन करें।</div>
                      </div>
                      <div className="workflow-step-card" style={{ borderLeftColor: '#f43f5e', paddingLeft: '2rem' }}>
                        <h4 className="workflow-step-title" style={{ color: '#e11d48' }}>📚 India Legal Dataset (Hugging Face)</h4>
                        <div className="workflow-point"><strong>स्रोत:</strong> Hugging Face रिपोजिटरी (Vishwa/Indian-Legal-Dataset या law-in-india)।</div>
                        <div className="workflow-point"><strong>उपयोग:</strong> इसमें भारतीय अदालतों के पुराने फैसले, केस लॉ और कानूनी शब्दावली का विशाल संग्रह है, जो आपके LLM को कानूनी लहजे में लिखना सिखाएगा।</div>
                      </div>
                      <div className="workflow-step-card" style={{ borderLeftColor: '#fb7185', paddingLeft: '2rem' }}>
                        <h4 className="workflow-step-title" style={{ color: '#e11d48' }}>⚖️ OpenNyai (Open-Source Legal AI for India)</h4>
                        <div className="workflow-point"><strong>स्रोत:</strong> opennyai.org</div>
                        <div className="workflow-point"><strong>उपयोग:</strong> यह भारतीय कानूनी टेक्स्ट को प्रोसेस करने के लिए विशेष रूप से बनाए गए एआई टूल्स और डेटासेट्स (जैसे Legal NER) प्रदान करता है। इससे AI टेक्स्ट में से जज, वकील, धारा, और अपराध का नाम आसानी से अलग कर लेता है।</div>
                      </div>
                    </>
                  );
                case 2:
                  return (
                    <>
                      <p className="overview-intro-text" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.15rem' }}>
                        AI को भारतीय लहजे (Indian Accent) और क्षेत्रीय भाषाओं में बोले गए बयानों को समझने के लिए इन डेटासेट्स की जरूरत होगी:
                      </p>
                      <div className="workflow-step-card" style={{ borderLeftColor: '#2563eb', paddingLeft: '2rem' }}>
                        <h4 className="workflow-step-title" style={{ color: '#1d4ed8' }}>🇮🇳 भाषिणी डेटासेट (Bhashini AI / AI4Bharat)</h4>
                        <div className="workflow-point"><strong>स्रोत:</strong> bhashini.gov.in या ai4bharat.iitm.ac.in</div>
                        <div className="workflow-point"><strong>उपयोग:</strong> भारत सरकार का यह सबसे बेहतरीन संसाधन है। इसमें लाखों घंटों का भारतीय भाषाओं का ऑडियो डेटा उपलब्ध है, जो थानों में आने वाले विविध बयानों को समझने में मदद करेगा।</div>
                      </div>
                      <div className="workflow-step-card" style={{ borderLeftColor: '#3b82f6', paddingLeft: '2rem' }}>
                        <h4 className="workflow-step-title" style={{ color: '#2563eb' }}>🌐 Common Voice Dataset (by Mozilla)</h4>
                        <div className="workflow-point"><strong>स्रोत:</strong> commonvoice.mozilla.org</div>
                        <div className="workflow-point"><strong>उपयोग:</strong> इस ओपन-सोर्स डेटासेट में "Common Voice India" के तहत हिंदी और अन्य भारतीय भाषाओं के हजारों लोगों की आवाज के सैंपल मौजूद हैं, जिससे आपका Whisper या ASR मॉडल मजबूत बनेगा।</div>
                      </div>
                      <div className="workflow-step-card" style={{ borderLeftColor: '#60a5fa', paddingLeft: '2rem' }}>
                        <h4 className="workflow-step-title" style={{ color: '#2563eb' }}>🎧 Google FLEURS</h4>
                        <div className="workflow-point"><strong>स्रोत:</strong> Hugging Face (google/fleurs)</div>
                        <div className="workflow-point"><strong>उपयोग:</strong> इसमें हिंदी सहित कई भारतीय भाषाओं का उच्च-गुणवत्ता वाला स्पीच डेटासेट है, जो स्पीच-टू-टेक्स्ट मॉडल को फाइन-ट्यून करने के लिए बेहतरीन है।</div>
                      </div>
                    </>
                  );
                case 3:
                  return (
                    <>
                      <p className="overview-intro-text" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.15rem' }}>
                        सुरक्षा और गोपनीयता (Privacy) के कारण असली थानों का FIR डेटा सार्वजनिक रूप से उपलब्ध नहीं होता है। इसके लिए आप यह तरीका अपना सकते हैं:
                      </p>
                      <div className="workflow-step-card" style={{ borderLeftColor: '#10b981', paddingLeft: '2rem' }}>
                        <h4 className="workflow-step-title" style={{ color: '#047857' }}>🤖 सिंथेटिक डेटा जनरेशन (Synthetic Data)</h4>
                        <div className="workflow-point"><strong>उपयोग:</strong> आप GPT-4 या Llama 3 का उपयोग करके डमी (फर्जी) कहानियों के आधार पर 500-1000 सैंपल "बयान और संबंधित FIR ड्राफ्ट" जनरेट कर सकते हैं।</div>
                        <div className="workflow-point" style={{ marginTop: '0.75rem', padding: '1rem', background: '#ecfdf5', borderRadius: '0.5rem', border: '1px solid #a7f3d0' }}>
                          <strong style={{ color: '#065f46' }}>💡 उदाहरण प्रॉम्प्ट:</strong> "एक पीड़ित की कहानी लिखो जिसकी बाइक चोरी हो गई है, और फिर उसके आधार पर एक कानूनी FIR और सही BNS धारा का सैंपल ड्राफ्ट तैयार करो।"
                        </div>
                      </div>
                      <div className="workflow-step-card" style={{ borderLeftColor: '#34d399', paddingLeft: '2rem' }}>
                        <h4 className="workflow-step-title" style={{ color: '#059669' }}>⚖️ सार्वजनिक अदालती फैसले (Public Court Judgments)</h4>
                        <div className="workflow-point"><strong>स्रोत:</strong> e-Courts पोर्टल</div>
                        <div className="workflow-point"><strong>उपयोग:</strong> पोर्टल से पुराने मामलों के वे हिस्से निकालें जहाँ अपराध का विवरण (Factual Summary) लिखा होता है, यह हूबहू FIR के विवरण जैसा ही होता है।</div>
                      </div>
                    </>
                  );
                default:
                  return null;
              }
            })()}
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
        <button 
          onClick={() => setSelectedEvaluation(null)} 
          className="back-button" 
          style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}
        >
          <ArrowLeft size={18} /> Back to Submission / Evaluation
        </button>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <EvaluationIcon size={40} color={evaluation.color} />
            <h3 style={{ margin: 0, fontSize: '2rem', color: '#0f172a' }}>{evaluation.title}</h3>
          </div>
          
          <p className="overview-intro-text" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.15rem' }}>
            {evaluation.subtitle}
          </p>
          
          <div className="workflow-container" style={{ padding: 0 }}>
            {(() => {
              switch(evaluation.id) {
                case 1:
                  return (
                    <>
                      {renderChecklistItem('सटीक वॉयस रिकॉर्डिंग', 'क्या सिस्टम बिना किसी रुकावट के ऑडियो रिकॉर्ड और प्रोसेस कर रहा है?', evaluation.color)}
                      {renderChecklistItem('स्थानीय भाषा और हिंग्लिश सपोर्ट', 'क्या AI आम बोलचाल की भाषा (जैसे- "मेरा फोन चोरी हो गया है") को सही ढंग से समझ पा रहा है?', evaluation.color)}
                      {renderChecklistItem('एंटी-नॉइज़ फ़िल्टर', 'क्या थानों के बैकग्राउंड शोर (Noise) के बीच भी आवाज़ को साफ़ पकड़ा जा रहा है?', evaluation.color)}
                      {renderChecklistItem('डेटा एक्सट्रैक्शन (NER)', 'क्या सिस्टम टेक्स्ट में से कौन (आरोपी/पीड़ित), कहाँ (स्थान), कब (समय) और क्या (घटना) को सही तरीके से अलग-अलग खानों में भर रहा है?', evaluation.color)}
                      {renderChecklistItem('ऑटो-सजेशन (BNS धाराएं)', 'क्या अपराध के विवरण के आधार पर नई भारतीय न्याय संहिता (BNS) की सही धाराएं स्क्रीन पर दिखाई दे रही हैं?', evaluation.color)}
                      {renderChecklistItem('ह्यूमन-इन-द-लूप (संपादन)', 'क्या पुलिस अधिकारी को सबमिट करने से पहले ड्राफ्ट में बदलाव या मैन्युअल टाइपिंग करने की सुविधा मिल रही है?', evaluation.color)}
                    </>
                  );
                case 2:
                  return (
                    <>
                      {renderChecklistItem('कम लेटेंसी (Response Time)', 'क्या बोलना बंद करने के 5 से 10 सेकंड के भीतर पूरा FIR ड्राफ्ट तैयार हो रहा है?', evaluation.color)}
                      {renderChecklistItem('सटीकता दर (ASR Accuracy)', 'क्या स्पीच-टू-टेक्स्ट का वर्ड एरर रेट (WER) 10% से कम है?', evaluation.color)}
                      {renderChecklistItem('ऑफ़लाइन/लोकल डिप्लॉयमेंट क्षमता', 'क्या सिस्टम को क्लाउड के बिना, थानों के लोकल सर्वर (On-Premises) पर चलाया जा सकता है?', evaluation.color)}
                      {renderChecklistItem('रेस्पॉन्सिव UI/UX', 'क्या मोबाइल, टैबलेट और डेस्कटॉप तीनों स्क्रीन पर इंटरफेस सही से काम कर रहा है?', evaluation.color)}
                    </>
                  );
                case 3:
                  return (
                    <>
                      {renderChecklistItem('डेटा गोपनीयता (Data Privacy)', 'क्या पीड़ित के संवेदनशील बयान और व्यक्तिगत जानकारी पूरी तरह एन्क्रिप्टेड (AES-256) हैं?', evaluation.color)}
                      {renderChecklistItem('रोल-बेस्ड एक्सेस (RBAC)', 'क्या केवल लॉग-इन आईडी वाले अधिकृत पुलिस अधिकारी ही इसे देख और सबमिट कर सकते हैं?', evaluation.color)}
                      {renderChecklistItem('लॉग मैनेजमेंट (Audit Logs)', 'क्या ड्राफ्ट में अधिकारी द्वारा किए गए बदलावों (Edits) का पूरा रिकॉर्ड बैकएंड में सेव हो रहा है?', evaluation.color)}
                      {renderChecklistItem('CCTNS रेडी फॉर्मेट', 'क्या जनरेट हुआ FIR ड्राफ्ट पुलिस विभाग के मौजूदा CCTNS सिस्टम के फॉर्मेट से मेल खाता है?', evaluation.color)}
                    </>
                  );
                case 4:
                  return (
                    <>
                      {renderChecklistItem('वर्किंग प्रोटोटाइप/डेमो', 'लाइव काम करता हुआ वेब या मोबाइल ऐप का लिंक या वीडियो रिकॉर्डिंग।', evaluation.color)}
                      {renderChecklistItem('सोर्स कोड (GitHub/GitLab)', 'साफ कमेंट्स और README.md फाइल के साथ व्यवस्थित कोडबेस।', evaluation.color)}
                      {renderChecklistItem('प्रोजेक्ट रिपोर्ट (SRS Document)', 'आर्किटेक्चर डायग्राम, टेक स्टैक और डेटासेट विवरण के साथ पूरी PDF रिपोर्ट।', evaluation.color)}
                      {renderChecklistItem('यूजर मैनुअल', 'पुलिस अधिकारियों के लिए ऐप का उपयोग करने की 1 पन्ने की सरल गाइड।', evaluation.color)}
                    </>
                  );
                default:
                  return null;
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
        <button className="back-button" onClick={onBack}>
          <ArrowLeft size={18} /> Back to Projects
        </button>
        <div className="details-header-content">
          <div className="details-title-wrapper">
            <h2 className="details-title">{project.name}</h2>
            <span className={`details-status-badge ${project.status.toLowerCase()}`}>{project.status}</span>
          </div>
          <p className="details-subtitle">Project started on {project.date}</p>
        </div>
      </div>

      <div className="details-layout">
        {/* Project Specific Menu */}
        <div className="details-sidebar">
          <h3 className="details-sidebar-title">Project Menu</h3>
          <nav className="details-nav">
            {tabs.map(tab => (
              <button 
                key={tab.id}
                className={`details-nav-item ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="details-content-area">
          {activeTab === 'overview' && (
            <div className="details-card overview-tab-content">
              {project.name.includes('Crime GPT') ? (
                <>
                  <div className="overview-header-custom">
                    <span className="overview-emoji">📋</span>
                    <h3 style={{ marginBottom: 0 }}>प्रोजेक्ट परिचय (Project Overview): Crime GPT / Copilot</h3>
                  </div>
                  <p className="overview-intro-text">
                    यह प्रोजेक्ट एक AI-संचालित वॉइस-टू-टेक्स्ट लीगल असिस्टेंट (Voice-to-Text Legal Assistant) है। यह पुलिस अधिकारियों और पीड़ितों को सिर्फ बोलकर कानूनी रूप से सटीक FIR (First Information Report) ड्राफ्ट करने की सुविधा देता है।
                  </p>

                  <div className="overview-grid">
                    <div className="overview-box">
                      <h4 className="overview-box-title"><span className="overview-emoji">❓</span> प्रोजेक्ट क्या है?</h4>
                      <p>यह एक एडवांस नेचुरल लैंग्वेज प्रोसेसिंग (NLP) और जनरेटिव AI प्लेटफॉर्म है। यह पुलिस थानों में मौखिक बयानों (spoken statements) को सुनता है। इसके बाद, यह उन्हें तुरंत एक संरचित (structured) और कानूनी रूप से मान्य FIR ड्राफ्ट में बदल देता है।</p>
                    </div>

                    <div className="overview-box">
                      <h4 className="overview-box-title"><span className="overview-emoji">💡</span> यह क्यों जरूरी है?</h4>
                      <ul className="overview-styled-list">
                        <li><strong>अत्यधिक कार्यभार:</strong> पुलिस थानों में कागजी कार्रवाई में बहुत समय नष्ट होता है।</li>
                        <li><strong>भाषा की बाधा:</strong> पीड़ित अक्सर अपनी स्थानीय बोली में बात करते हैं, जिसे कानूनी भाषा में लिखना कठिन होता है।</li>
                        <li><strong>धाराओं की जटिलता:</strong> भारतीय न्याय संहिता (BNS) की सही धाराओं को तुरंत लागू करने में मानवीय चूक की संभावना रहती है।</li>
                        <li><strong>देरी से न्याय:</strong> FIR दर्ज होने में देरी से अक्सर महत्वपूर्ण सबूत नष्ट हो जाते हैं।</li>
                      </ul>
                    </div>

                    <div className="overview-box full-width">
                      <h4 className="overview-box-title"><span className="overview-emoji">🎯</span> मुख्य उद्देश्य (Key Objectives)</h4>
                      <ul className="overview-styled-list grid-list">
                        <li><strong>त्वरित दस्तावेज़ीकरण:</strong> FIR ड्राफ्टिंग के समय को 1 घंटे से घटाकर 5 मिनट करना।</li>
                        <li><strong>सटीक धारा निर्धारण:</strong> अपराध के विवरण के आधार पर सही BNS धाराओं का स्वचालित सुझाव देना।</li>
                        <li><strong>पारदर्शिता और सुगमता:</strong> आम जनता के लिए पुलिस रिपोर्टिंग को सरल और तनावमुक्त बनाना।</li>
                        <li><strong>बहुभाषी सहायता:</strong> स्थानीय बोलियों को समझकर उन्हें आधिकारिक कानूनी हिंदी या अंग्रेजी में अनुवाद करना।</li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h3>Project Overview</h3>
                  <p className="placeholder-text">This section will contain the main details, objectives, and current progress of the {project.name} project.</p>
                  
                  <div className="quick-stats-grid">
                    <div className="stat-box">
                      <h4>Completion</h4>
                      <div className="stat-value text-primary">45%</div>
                    </div>
                    <div className="stat-box">
                      <h4>Pending Tasks</h4>
                      <div className="stat-value text-warning">12</div>
                    </div>
                    <div className="stat-box">
                      <h4>Assigned Officers</h4>
                      <div className="stat-value text-success">5</div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="details-card">
              <h3>Architecture & Workflow (कार्यप्रणाली)</h3>
              
              <div className="arch-section" style={{ marginTop: '2rem' }}>
                <h4 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="overview-emoji">🔄</span> आर्किटेक्चर और प्रोसेस फ्लो चार्ट (Process Flow Chart)
                </h4>
                
                <div 
                  onClick={() => setShowFullscreenFlowchart(true)}
                  style={{ background: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: '0.75rem', padding: '3rem 2rem', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#2563eb'; e.currentTarget.style.background = '#eff6ff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.background = '#f8fafc'; }}
                >
                  <span className="overview-emoji" style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>📈</span>
                  <h4 style={{ fontSize: '1.25rem', color: '#2563eb', marginBottom: '0.5rem' }}>View Interactive Flowchart</h4>
                  <p className="placeholder-text" style={{ marginBottom: 0 }}>Click here to open the detailed process flow chart in a new fullscreen view.</p>
                </div>
              </div>

              <div className="arch-section" style={{ marginTop: '3rem' }}>
                <h4 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="overview-emoji">📝</span> विस्तृत कार्यप्रणाली (Step-by-Step Workflow)
                </h4>
                
                <div 
                  onClick={() => setShowFullscreenWorkflow(true)}
                  style={{ background: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: '0.75rem', padding: '3rem 2rem', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#16a34a'; e.currentTarget.style.background = '#f0fdf4'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.background = '#f8fafc'; }}
                >
                  <span className="overview-emoji" style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>📋</span>
                  <h4 style={{ fontSize: '1.25rem', color: '#16a34a', marginBottom: '0.5rem' }}>View Step-by-Step Workflow</h4>
                  <p className="placeholder-text" style={{ marginBottom: 0 }}>Click here to view the detailed explanation of each step in the AI process.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tech-stack' && (
            <div className="details-card">
              <h3>Tech Stack (तकनीकी टूल्स)</h3>
              <p className="overview-intro-text" style={{ marginBottom: '2.5rem' }}>
                इस प्रोजेक्ट को बनाने के लिए निम्नलिखित अत्याधुनिक तकनीकों और टूल्स का उपयोग किया गया है:
              </p>

              <div className="tech-stack-grid">
                <div 
                  className="tech-category-card" 
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShowFrontendDetails(true)}
                >
                  <div className="tech-category-header">
                    <Monitor className="tech-category-icon" size={24} />
                    <h4>1. फ्रंटएंड (Frontend)</h4>
                  </div>
                  <p className="tech-category-subtitle">यूजर इंटरफेस</p>
                  <div className="tech-pills">
                    <span className="tech-pill">React.js</span>
                    <span className="tech-pill">Tailwind CSS</span>
                    <span className="tech-pill">Vite</span>
                  </div>
                </div>

                <div 
                  className="tech-category-card"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShowBackendDetails(true)}
                >
                  <div className="tech-category-header">
                    <Server className="tech-category-icon" size={24} />
                    <h4>2. बैकएंड (Backend)</h4>
                  </div>
                  <p className="tech-category-subtitle">कोर लॉजिक और API</p>
                  <div className="tech-pills">
                    <span className="tech-pill">Node.js</span>
                    <span className="tech-pill">Python (FastAPI)</span>
                    <span className="tech-pill">Express</span>
                  </div>
                </div>

                <div 
                  className="tech-category-card"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShowAiDetails(true)}
                >
                  <div className="tech-category-header">
                    <BrainCircuit className="tech-category-icon" size={24} />
                    <h4>3. AI और NLP स्टैक</h4>
                  </div>
                  <p className="tech-category-subtitle">Artificial Intelligence & Text Processing</p>
                  <div className="tech-pills">
                    <span className="tech-pill">OpenAI Whisper</span>
                    <span className="tech-pill">Crime GPT (LLM)</span>
                    <span className="tech-pill">Hugging Face</span>
                  </div>
                </div>

                <div 
                  className="tech-category-card"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShowDatabaseDetails(true)}
                >
                  <div className="tech-category-header">
                    <Database className="tech-category-icon" size={24} />
                    <h4>4. डेटाबेस और स्टोरेज</h4>
                  </div>
                  <p className="tech-category-subtitle">Database & Storage</p>
                  <div className="tech-pills">
                    <span className="tech-pill">PostgreSQL</span>
                    <span className="tech-pill">MongoDB</span>
                    <span className="tech-pill">AWS S3</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="details-card">
              <h3>Step-by-Step Guide (बनाने का तरीका)</h3>
              <p className="overview-intro-text" style={{ marginBottom: '2.5rem' }}>
                इस प्रोजेक्ट को स्क्रैच से बनाने के लिए नीचे दिए गए चरणों (Steps) पर क्लिक करें:
              </p>

              <div className="tech-stack-grid">
                {guideSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div 
                      key={step.id}
                      className="tech-category-card"
                      style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2rem' }}
                      onClick={() => setSelectedGuideStep(step.id)}
                    >
                      <div style={{ background: `${step.color}15`, padding: '1rem', borderRadius: '50%', marginBottom: '1.25rem' }}>
                        <Icon size={36} color={step.color} />
                      </div>
                      <h4 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '1.1rem', fontWeight: 'bold' }}>{step.title}</h4>
                      <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem' }}>{step.subtitle}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="details-card">
              <h3>Resources & Datasets (जरूरी डेटा)</h3>
              <p className="overview-intro-text" style={{ marginBottom: '2.5rem' }}>
                इस प्रोजेक्ट के लिए आवश्यक डेटासेट्स की जानकारी के लिए नीचे दिए गए विकल्पों पर क्लिक करें:
              </p>

              <div className="tech-stack-grid">
                {resourcesList.map((resource) => {
                  const Icon = resource.icon;
                  return (
                    <div 
                      key={resource.id}
                      className="tech-category-card"
                      style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2rem' }}
                      onClick={() => setSelectedResource(resource.id)}
                    >
                      <div style={{ background: `${resource.color}15`, padding: '1rem', borderRadius: '50%', marginBottom: '1.25rem' }}>
                        <Icon size={36} color={resource.color} />
                      </div>
                      <h4 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '1.1rem', fontWeight: 'bold' }}>{resource.title}</h4>
                      <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem' }}>{resource.subtitle}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'evaluation' && (
            <div className="details-card">
              <h3>Submission/Evaluation (चेकलिस्ट)</h3>
              <p className="overview-intro-text" style={{ marginBottom: '2.5rem' }}>
                इस प्रोजेक्ट को सबमिट करने और इसकी गुणवत्ता जांचने के लिए नीचे दिए गए चेकलिस्ट का पालन करें:
              </p>

              <div className="tech-stack-grid">
                {evaluationList.map((evaluation) => {
                  const Icon = evaluation.icon;
                  return (
                    <div 
                      key={evaluation.id}
                      className="tech-category-card"
                      style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2rem' }}
                      onClick={() => setSelectedEvaluation(evaluation.id)}
                    >
                      <div style={{ background: `${evaluation.color}15`, padding: '1rem', borderRadius: '50%', marginBottom: '1.25rem' }}>
                        <Icon size={36} color={evaluation.color} />
                      </div>
                      <h4 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '1.1rem', fontWeight: 'bold' }}>{evaluation.title}</h4>
                      <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem' }}>{evaluation.subtitle}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          {activeTab === 'settings' && (
            <div className="details-card">
              <h3>Project Settings</h3>
              <p className="placeholder-text">Configuration options for {project.name}.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
