import React, { useState } from 'react';
import { 
  ArrowLeft, LayoutDashboard, FileText, Code, ListOrdered, BookOpen, CheckSquare, Settings, Target, Shield, Database, Layout, CheckCircle, Network, Server, Briefcase, Activity, Monitor, BrainCircuit, Search, Zap, AlertTriangle
} from 'lucide-react';
import './ProjectDetailsView.css';

export default function AutonomousLinkerDetails({ project, onBack }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [showFullscreenFlowchart, setShowFullscreenFlowchart] = useState(false);
  const [showFullscreenWorkflow, setShowFullscreenWorkflow] = useState(false);
  const [selectedGuideStep, setSelectedGuideStep] = useState(null);
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);
  const [selectedOverviewSection, setSelectedOverviewSection] = useState(null);

  const overviewSections = [
    { id: 'io-assistance', title: 'IO Assistance', subtitle: 'जांच अधिकारी (IO) के लिए उपयोगिता', icon: Briefcase, color: 'var(--text-muted)' },
    { id: 'objectives', title: 'Project Objectives', subtitle: 'परियोजना के मुख्य उद्देश्य', icon: Target, color: '#2563eb' },
    { id: 'features', title: 'Major Features', subtitle: 'प्रमुख विशेषताएं (AI & Analytics)', icon: Zap, color: '#ec4899' },
  ];

  const guideSteps = [
    { id: 1, title: 'चरण 1: योजना और तैयारी', subtitle: 'Planning & Legal DB', icon: Target, color: '#3b82f6' },
    { id: 2, title: 'चरण 2: AI मॉडल ट्रेनिंग', subtitle: 'AI Model Training', icon: BrainCircuit, color: '#10b981' },
    { id: 3, title: 'चरण 3: बैकएंड और API', subtitle: 'Backend & API', icon: Server, color: '#f59e0b' },
    { id: 4, title: 'चरण 4: फ्रंटएंड डेवलपमेंट', subtitle: 'Frontend (UI/UX)', icon: Monitor, color: '#8b5cf6' },
    { id: 5, title: 'चरण 5: टेस्टिंग और रिव्यू', subtitle: 'Testing & Human Review', icon: Activity, color: '#ec4899' },
    { id: 6, title: 'चरण 6: सुरक्षा और डिप्लॉयमेंट', subtitle: 'Security & Deployment', icon: Shield, color: 'var(--text-muted)' },
  ];

  const evaluationList = [
    { id: 1, title: '1. कार्यात्मक चेकलिस्ट', subtitle: 'Functional Checklist', icon: CheckSquare, color: '#3b82f6' },
    { id: 2, title: '2. तकनीकी और प्रदर्शन', subtitle: 'Technical & Performance', icon: Activity, color: '#10b981' },
    { id: 3, title: '3. सुरक्षा और कानूनी अनुपालन', subtitle: 'Security & Legal', icon: Shield, color: '#f59e0b' },
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
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: 'var(--icon-bg)', minHeight: '100vh', width: '100%' }}>
        <button 
          onClick={() => setShowFullscreenFlowchart(false)} 
          className="thane-back-btn" 
          style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'var(--card-bg)', borderRadius: '0.5rem', color: 'var(--text-main)', border: '1px solid var(--card-border)', fontWeight: 'bold', cursor: 'pointer' }}
        >
          <ArrowLeft size={18} /> Back to Architecture Menu
        </button>

        <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.75rem', color: 'var(--text-main)' }}>System Architecture & Process Flow</h3>
        
        <div className="flowchart-container" style={{ margin: '0 auto', maxWidth: '800px', background: 'var(--card-bg)', padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
          <div className="flow-step">
            <div className="flow-node user-node">Data Sources (FIR, CDR, CCTV, Bank, Social)</div>
          </div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">
            <div className="flow-node">Data Ingestion (Cleaning & Normalization)</div>
          </div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">
            <div className="flow-node">NLP Engine & Entity Extraction</div>
          </div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">
            <div className="flow-node">Knowledge Graph Engine & Entity Resolution</div>
          </div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">
            <div className="flow-node">Relationship Detection & AI Analytics</div>
          </div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">
            <div className="flow-node output-node">Investigation Dashboard (Visualization)</div>
          </div>
        </div>
      </div>
    );
  }

  if (showFullscreenWorkflow) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: 'var(--icon-bg)', minHeight: '100vh', width: '100%' }}>
        <button 
          onClick={() => setShowFullscreenWorkflow(false)} 
          className="thane-back-btn" 
          style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'var(--card-bg)', borderRadius: '0.5rem', color: 'var(--text-main)', border: '1px solid var(--card-border)', fontWeight: 'bold', cursor: 'pointer' }}
        >
          <ArrowLeft size={18} /> Back to Architecture Menu
        </button>

        <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.75rem', color: 'var(--text-main)' }}>विस्तृत कार्यप्रणाली (Step-by-Step Workflow)</h3>
        
        <div className="workflow-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="workflow-step-card" style={{ borderLeftColor: '#3b82f6' }}>
            <div className="workflow-step-number" style={{ background: '#3b82f6' }}>1</div>
            <h4 className="workflow-step-title">Data Upload & Processing</h4>
            <div className="workflow-point">FIR, Case Diary, CDR, CCTV अपलोड करें। फिर OCR और NLP Processing के जरिये डेटा को डिजिटल और रीडेबल बनाया जाता है।</div>
          </div>
          <div className="workflow-step-card" style={{ borderLeftColor: '#10b981' }}>
            <div className="workflow-step-number" style={{ background: '#10b981' }}>2</div>
            <h4 className="workflow-step-title">Extraction & Resolution</h4>
            <div className="workflow-point">Entity Extraction किया जाता है और Duplicate Entity Resolution की मदद से समान डेटा को मिलाया जाता है (जैसे एक ही व्यक्ति के दो अलग-अलग नाम/नंबर)।</div>
          </div>
          <div className="workflow-step-card" style={{ borderLeftColor: '#f59e0b' }}>
            <div className="workflow-step-number" style={{ background: '#f59e0b' }}>3</div>
            <h4 className="workflow-step-title">Graph Generation & Analysis</h4>
            <div className="workflow-point">Knowledge Graph Generate होता है और AI Pattern Analysis के जरिये अपराध के पैटर्न खोजे जाते हैं।</div>
          </div>
          <div className="workflow-step-card" style={{ borderLeftColor: '#8b5cf6' }}>
            <div className="workflow-step-number" style={{ background: '#8b5cf6' }}>4</div>
            <h4 className="workflow-step-title">Visualization & Review</h4>
            <div className="workflow-point">डैशबोर्ड पर ग्राफिकल Visualization प्रस्तुत किया जाता है जिस पर अंततः Human Review & Approval (अधिकारी की समीक्षा) होती है।</div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedGuideStep !== null) {
    const step = guideSteps.find(s => s.id === selectedGuideStep);
    const StepIcon = step.icon;
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: 'var(--icon-bg)', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setSelectedGuideStep(null)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'var(--card-bg)', borderRadius: '0.5rem', color: 'var(--text-main)', border: '1px solid var(--card-border)', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Step-by-Step Guide
        </button>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <StepIcon size={40} color={step.color} />
            <h3 style={{ margin: 0, fontSize: '2rem', color: 'var(--text-main)' }}>{step.title}</h3>
          </div>
          <div className="workflow-container" style={{ padding: 0 }}>
            {(() => {
              switch(step.id) {
                case 1: return (
                  <div className="workflow-step-card" style={{ borderLeftColor: step.color }}>
                    <h4 className="workflow-step-title">योजना और कानूनी डेटाबेस तैयारी</h4>
                    <p className="workflow-point">FIR, CCTNS, ICJS, Prison, Cyber, Vehicle, Arms जैसे डेटा स्रोतों को इकट्ठा करना और BNS, BNSS व साक्ष्य नियमों की मैपिंग करना।</p>
                  </div>
                );
                case 2: return (
                  <div className="workflow-step-card" style={{ borderLeftColor: step.color }}>
                    <h4 className="workflow-step-title">AI Model Selection & Training</h4>
                    <p className="workflow-point">Named Entity Recognition (NER) और रिलेशनशिप एक्सट्रैक्शन मॉडल्स को पुराने FIR, चार्ज शीट, और कोर्ट ऑर्डर्स पर ट्रेन करना।</p>
                  </div>
                );
                case 3: return (
                  <div className="workflow-step-card" style={{ borderLeftColor: step.color }}>
                    <h4 className="workflow-step-title">Backend & API Development</h4>
                    <p className="workflow-point">सर्च, ग्राफ, एंटिटी, एनालिटिक्स और सिक्योरिटी के लिए मजबूत API और माइक्रो-सर्विसेज का निर्माण।</p>
                  </div>
                );
                case 4: return (
                  <div className="workflow-step-card" style={{ borderLeftColor: step.color }}>
                    <h4 className="workflow-step-title">Frontend Development</h4>
                    <p className="workflow-point">State से लेकर IO (Investigation Officer) स्तर के डैशबोर्ड, नेटवर्क ग्राफ, टाइमलाइन और केस सर्च UI तैयार करना।</p>
                  </div>
                );
                case 5: return (
                  <div className="workflow-step-card" style={{ borderLeftColor: step.color }}>
                    <h4 className="workflow-step-title">Testing & Human Review</h4>
                    <p className="workflow-point">AI की सटीकता (Precision, Recall, F1) जांचना और SHO/CO/SP स्तर पर मानवीय समीक्षा (Human-in-the-loop) करना।</p>
                  </div>
                );
                case 6: return (
                  <div className="workflow-step-card" style={{ borderLeftColor: step.color }}>
                    <h4 className="workflow-step-title">Security & Deployment</h4>
                    <p className="workflow-point">AES-256 एनक्रिप्शन, RBAC, और Audit Logs के साथ सुरक्षित ऑन-प्रिमाइस या गवर्नमेंट क्लाउड पर Docker/Kubernetes के जरिए डिप्लॉयमेंट।</p>
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
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: 'var(--icon-bg)', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setSelectedEvaluation(null)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'var(--card-bg)', borderRadius: '0.5rem', color: 'var(--text-main)', border: '1px solid var(--card-border)', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Submission / Evaluation
        </button>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <EvalIcon size={40} color={evalItem.color} />
            <h3 style={{ margin: 0, fontSize: '2rem', color: 'var(--text-main)' }}>{evalItem.title}</h3>
          </div>
          <div className="workflow-container" style={{ padding: 0 }}>
            {(() => {
              switch(evalItem.id) {
                case 1: return (
                  <>
                    <div className="workflow-step-card" style={{ borderLeftColor: evalItem.color }}>
                      <h4 className="workflow-step-title">Entity Extraction</h4>
                      <p className="workflow-point">क्या सिस्टम FIR और CDR से व्यक्ति, वाहन, और नंबर जैसी एंटिटीज को सही ढंग से निकाल पा रहा है?</p>
                    </div>
                    <div className="workflow-step-card" style={{ borderLeftColor: evalItem.color }}>
                      <h4 className="workflow-step-title">Relationship Detection</h4>
                      <p className="workflow-point">क्या दो अपराधियों या बैंक खातों के बीच छिपे संबंध को सिस्टम ग्राफ में दिखा रहा है?</p>
                    </div>
                    <div className="workflow-step-card" style={{ borderLeftColor: evalItem.color }}>
                      <h4 className="workflow-step-title">Similar Case Detection</h4>
                      <p className="workflow-point">क्या सिस्टम पिछले मामलों से मिलती-जुलती घटनाओं (MO) को पहचान पा रहा है?</p>
                    </div>
                  </>
                );
                case 2: return (
                  <>
                    <div className="workflow-step-card" style={{ borderLeftColor: evalItem.color }}>
                      <h4 className="workflow-step-title">API Response & Search</h4>
                      <p className="workflow-point">क्या API का रिस्पांस टाइम 2 सेकंड से कम और सर्च 1 सेकंड से कम में हो रहा है?</p>
                    </div>
                    <div className="workflow-step-card" style={{ borderLeftColor: evalItem.color }}>
                      <h4 className="workflow-step-title">Graph Generation</h4>
                      <p className="workflow-point">क्या नेटवर्क ग्राफ 5 सेकंड से कम समय में स्क्रीन पर रेंडर हो रहा है?</p>
                    </div>
                    <div className="workflow-step-card" style={{ borderLeftColor: evalItem.color }}>
                      <h4 className="workflow-step-title">Uptime & Concurrency</h4>
                      <p className="workflow-point">क्या सिस्टम 99.9% अपटाइम और 10,000+ समवर्ती उपयोगकर्ताओं को संभाल पा रहा है?</p>
                    </div>
                  </>
                );
                case 3: return (
                  <>
                    <div className="workflow-step-card" style={{ borderLeftColor: evalItem.color }}>
                      <h4 className="workflow-step-title">Data Privacy & Security</h4>
                      <p className="workflow-point">क्या सिस्टम DPDP एक्ट का पालन करता है और सभी डेटा AES-256 से एन्क्रिप्टेड है?</p>
                    </div>
                    <div className="workflow-step-card" style={{ borderLeftColor: evalItem.color }}>
                      <h4 className="workflow-step-title">Role-Based Access Control</h4>
                      <p className="workflow-point">क्या अलग-अलग अधिकारियों (IO, SHO, SP) को केवल उनके अधिकार क्षेत्र का डेटा दिख रहा है?</p>
                    </div>
                    <div className="workflow-step-card" style={{ borderLeftColor: evalItem.color }}>
                      <h4 className="workflow-step-title">Human-in-the-Loop</h4>
                      <p className="workflow-point">क्या यह सुनिश्चित किया गया है कि सिस्टम सिर्फ सुझाव देता है और कोई स्वचालित कानूनी निर्णय नहीं लेता?</p>
                    </div>
                  </>
                );
                case 4: return (
                  <>
                    <div className="workflow-step-card" style={{ borderLeftColor: evalItem.color }}>
                      <h4 className="workflow-step-title">Hidden Criminal Network Discovery</h4>
                      <p className="workflow-point">अपराधियों के छिपे हुए नेटवर्क का खुलासा करना।</p>
                    </div>
                    <div className="workflow-step-card" style={{ borderLeftColor: evalItem.color }}>
                      <h4 className="workflow-step-title">Faster Investigation</h4>
                      <p className="workflow-point">जांच में तेजी लाना और अलग-अलग जिलों के बीच इंटेलिजेंस शेयर करना।</p>
                    </div>
                    <div className="workflow-step-card" style={{ borderLeftColor: evalItem.color }}>
                      <h4 className="workflow-step-title">Repeat Offender Detection</h4>
                      <p className="workflow-point">आदतन अपराधियों (Repeat Offenders) की पहचान करना।</p>
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
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: 'var(--icon-bg)', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setSelectedOverviewSection(null)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'var(--card-bg)', borderRadius: '0.5rem', color: 'var(--text-main)', border: '1px solid var(--card-border)', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Project Overview
        </button>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <SecIcon size={40} color={sec.color} />
            <h3 style={{ margin: 0, fontSize: '2rem', color: 'var(--text-main)' }}>{sec.title}</h3>
          </div>
          <div style={{ padding: 0 }}>
            {(() => {
              switch(sec.id) {
                case 'io-assistance': return (
                  <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--card-border)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                      {[
                        'कौन से व्यक्ति पहले भी किसी मामले में शामिल रहे हैं।',
                        'कौन से मोबाइल नंबर, बैंक खाते या वाहन कई मामलों में कॉमन हैं।',
                        'कौन से अपराधी गिरोह (Gang Network) का हिस्सा हैं।',
                        'किन घटनाओं में समान Modus Operandi (MO) है।',
                        'कौन से जिलों में एक ही गैंग सक्रिय है।'
                      ].map((text, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', background: 'var(--icon-bg)', padding: '1rem', borderRadius: '0.75rem', border: '1px solid var(--card-border)' }}>
                          <div style={{ background: '#dbeafe', padding: '0.4rem', borderRadius: '50%', color: '#2563eb', flexShrink: 0 }}><Search size={16} /></div>
                          <span style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.5' }}>{text}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: '#fef2f2', border: '1px dashed #f87171', padding: '1rem 1.5rem', borderRadius: '0.75rem', color: '#b91c1c' }}>
                      <AlertTriangle size={20} />
                      <span style={{ fontWeight: '500' }}>नोट: यह सिस्टम केवल जांच में सहायता करेगा, कोई कानूनी निर्णय नहीं देगा।</span>
                    </div>
                  </div>
                );
                case 'objectives': return (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
                    <div className="tech-category-card" style={{ borderTop: '4px solid #3b82f6' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                        <div style={{ background: '#dbeafe', padding: '0.6rem', borderRadius: '0.5rem', color: '#2563eb' }}><Database size={20} /></div>
                        <h5 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--text-main)' }}>1. Entity Linking</h5>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <span style={{ background: 'var(--icon-bg)', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>• Person, Mobile Number, Bank Account</span>
                        <span style={{ background: 'var(--icon-bg)', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>• Vehicle, Address, Social Media Account</span>
                        <span style={{ background: 'var(--icon-bg)', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>• Email ID, Weapon, CCTV Location</span>
                      </div>
                    </div>
                    <div className="tech-category-card" style={{ borderTop: '4px solid #10b981' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                        <div style={{ background: '#d1fae5', padding: '0.6rem', borderRadius: '0.5rem', color: '#10b981' }}><Network size={20} /></div>
                        <h5 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--text-main)' }}>2. Relationship Discovery</h5>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <span style={{ background: 'var(--icon-bg)', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>• Calls Between Suspects</span>
                        <span style={{ background: 'var(--icon-bg)', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>• Financial Transactions</span>
                        <span style={{ background: 'var(--icon-bg)', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>• Co-Accused Network, Frequent Locations</span>
                      </div>
                    </div>
                    <div className="tech-category-card" style={{ borderTop: '4px solid #f59e0b' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                        <div style={{ background: '#fef3c7', padding: '0.6rem', borderRadius: '0.5rem', color: '#f59e0b' }}><Activity size={20} /></div>
                        <h5 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--text-main)' }}>3. Pattern Analysis</h5>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <span style={{ background: 'var(--icon-bg)', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>• Serial Crimes, Organized Crime</span>
                        <span style={{ background: 'var(--icon-bg)', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>• Repeat Offenders, Fraud Networks</span>
                      </div>
                    </div>
                    <div className="tech-category-card" style={{ borderTop: '4px solid #8b5cf6' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                        <div style={{ background: '#ede9fe', padding: '0.6rem', borderRadius: '0.5rem', color: '#8b5cf6' }}><BrainCircuit size={20} /></div>
                        <h5 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--text-main)' }}>4. Predictive Intelligence</h5>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <span style={{ background: 'var(--icon-bg)', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>• Crime Pattern Similarity</span>
                        <span style={{ background: 'var(--icon-bg)', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>• Potential Associate Identification</span>
                        <span style={{ background: 'var(--icon-bg)', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>• Hotspot Detection</span>
                      </div>
                    </div>
                  </div>
                );
                case 'features': return (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--card-bg)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--card-border)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                      <div style={{ background: 'var(--icon-bg)', padding: '0.75rem', borderRadius: '0.75rem', color: 'var(--text-muted)' }}><FileText size={22} /></div>
                      <div>
                        <h5 style={{ margin: '0 0 0.25rem 0', color: 'var(--text-main)', fontSize: '1rem' }}>AI Entity Extraction</h5>
                        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem' }}>NLP द्वारा स्वतः जानकारी निकालना</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--card-bg)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--card-border)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                      <div style={{ background: 'var(--icon-bg)', padding: '0.75rem', borderRadius: '0.75rem', color: 'var(--text-muted)' }}><Network size={22} /></div>
                      <div>
                        <h5 style={{ margin: '0 0 0.25rem 0', color: 'var(--text-main)', fontSize: '1rem' }}>Autonomous Linking</h5>
                        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem' }}>सभी डेटा स्रोतों को जोड़ना</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--card-bg)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--card-border)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                      <div style={{ background: 'var(--icon-bg)', padding: '0.75rem', borderRadius: '0.75rem', color: 'var(--text-muted)' }}><LayoutDashboard size={22} /></div>
                      <div>
                        <h5 style={{ margin: '0 0 0.25rem 0', color: 'var(--text-main)', fontSize: '1rem' }}>Network Visualization</h5>
                        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem' }}>Graph View में नेटवर्क देखना</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--card-bg)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--card-border)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                      <div style={{ background: 'var(--icon-bg)', padding: '0.75rem', borderRadius: '0.75rem', color: 'var(--text-muted)' }}><CheckCircle size={22} /></div>
                      <div>
                        <h5 style={{ margin: '0 0 0.25rem 0', color: 'var(--text-main)', fontSize: '1rem' }}>Similar Case Detection</h5>
                        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem' }}>पुराने मामलों से समानता निकालना</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--card-bg)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--card-border)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                      <div style={{ background: 'var(--icon-bg)', padding: '0.75rem', borderRadius: '0.75rem', color: 'var(--text-muted)' }}><Activity size={22} /></div>
                      <div>
                        <h5 style={{ margin: '0 0 0.25rem 0', color: 'var(--text-main)', fontSize: '1rem' }}>Timeline Generation</h5>
                        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem' }}>पूरे केस की टाइमलाइन बनाना</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--card-bg)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--card-border)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                      <div style={{ background: 'var(--icon-bg)', padding: '0.75rem', borderRadius: '0.75rem', color: 'var(--text-muted)' }}><Zap size={22} /></div>
                      <div>
                        <h5 style={{ margin: '0 0 0.25rem 0', color: 'var(--text-main)', fontSize: '1rem' }}>Risk Scoring Engine</h5>
                        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem' }}>केवल Analytical Score</p>
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
            <h2 className="details-title">{project?.name || 'स्वायत्त "इन्वेस्टिगेशन लिंकर"'}</h2>
            <span className={`details-status-badge ${project?.status?.toLowerCase() || 'active'}`}>
              {project?.status || 'Active'}
            </span>
          </div>
          <p className="details-subtitle">{project?.description || 'Autonomous Knowledge Graph for hidden criminal network discovery.'}</p>
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
              <div style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', borderRadius: '1rem', padding: '2.5rem', color: 'white', marginBottom: '2.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-10%', right: '-5%', opacity: 0.1 }}>
                  <Network size={200} />
                </div>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.75rem', margin: '0 0 1rem 0', color: '#f8fafc' }}>
                  <Target size={28} color="#38bdf8" /> 
                  Project Overview (परियोजना का परिचय)
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '90%' }}>
                  स्वायत्त <strong>"इन्वेस्टिगेशन लिंकर"</strong> एक AI-संचालित Knowledge Graph Platform है, जिसका उद्देश्य विभिन्न अपराधों, आरोपियों, गवाहों, मोबाइल नंबरों, वाहनों, बैंक खातों, CCTV, CDR, सोशल मीडिया, FIR और अन्य साक्ष्यों के बीच <strong>छिपे संबंध (Hidden Relationships)</strong> को स्वतः खोज निकालना है।
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
                      <h4 style={{ margin: '0 0 0.25rem 0', color: 'var(--text-main)', fontSize: '1rem', fontWeight: 'bold' }}>{sec.title}</h4>
                      <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem' }}>{sec.subtitle}</p>
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
              
              <div className="arch-section" style={{ marginTop: '2rem' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="overview-emoji">🔄</span> आर्किटेक्चर और प्रोसेस फ्लो चार्ट (Process Flow Chart)
                </h4>
                
                <div 
                  onClick={() => setShowFullscreenFlowchart(true)}
                  style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', background: 'var(--icon-bg)', border: '1px dashed #cbd5e1', borderRadius: '0.75rem', padding: '1.25rem 1.5rem', cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#2563eb'; e.currentTarget.style.background = '#eff6ff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.background = '#f8fafc'; }}
                >
                  <span className="overview-emoji" style={{ fontSize: '2.25rem' }}>📈</span>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', color: '#2563eb', margin: '0 0 0.25rem 0' }}>View Interactive Flowchart</h4>
                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>Click here to open the detailed process flow chart in a new fullscreen view.</p>
                  </div>
                </div>
              </div>

              <div className="arch-section" style={{ marginTop: '2rem' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="overview-emoji">📝</span> विस्तृत कार्यप्रणाली (Step-by-Step Workflow)
                </h4>
                
                <div 
                  onClick={() => setShowFullscreenWorkflow(true)}
                  style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', background: 'var(--icon-bg)', border: '1px dashed #cbd5e1', borderRadius: '0.75rem', padding: '1.25rem 1.5rem', cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#16a34a'; e.currentTarget.style.background = '#f0fdf4'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.background = '#f8fafc'; }}
                >
                  <span className="overview-emoji" style={{ fontSize: '2.25rem' }}>📋</span>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', color: '#16a34a', margin: '0 0 0.25rem 0' }}>View Step-by-Step Workflow</h4>
                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>Click here to view the detailed explanation of each step in the AI process.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. Tech Stack */}
          {activeTab === 'tech-stack' && (
            <div className="details-card">
              <h3 className="section-title"><Code size={20} style={{ display: 'inline', marginRight: '8px' }} /> Tech Stack (तकनीकी टूल्स)</h3>
              
              <div className="tech-stack-grid" style={{ marginTop: '2rem' }}>
                <div className="tech-category-card">
                  <div className="tech-category-header">
                    <Monitor className="tech-category-icon" size={24} style={{ background: '#eff6ff', color: '#2563eb' }} />
                    <h4>Frontend</h4>
                  </div>
                  <div className="tech-pills" style={{ marginTop: '1rem' }}>
                    <span className="tech-pill">Angular 18</span>
                    <span className="tech-pill">ReactJS</span>
                    <span className="tech-pill">D3.js / Cytoscape.js</span>
                    <span className="tech-pill">Leaflet Maps</span>
                  </div>
                </div>

                <div className="tech-category-card">
                  <div className="tech-category-header">
                    <Server className="tech-category-icon" size={24} style={{ background: '#ecfdf5', color: '#10b981' }} />
                    <h4>Backend & API</h4>
                  </div>
                  <div className="tech-pills" style={{ marginTop: '1rem' }}>
                    <span className="tech-pill">.NET 9 Web API</span>
                    <span className="tech-pill">ASP.NET Core</span>
                    <span className="tech-pill">SignalR & gRPC</span>
                    <span className="tech-pill">JWT</span>
                  </div>
                </div>

                <div className="tech-category-card">
                  <div className="tech-category-header">
                    <Database className="tech-category-icon" size={24} style={{ background: '#fef3c7', color: '#f59e0b' }} />
                    <h4>Database & Storage</h4>
                  </div>
                  <div className="tech-pills" style={{ marginTop: '1rem' }}>
                    <span className="tech-pill">Neo4j (Graph DB)</span>
                    <span className="tech-pill">PostgreSQL</span>
                    <span className="tech-pill">Elasticsearch</span>
                    <span className="tech-pill">MinIO / Redis</span>
                  </div>
                </div>

                <div className="tech-category-card">
                  <div className="tech-category-header">
                    <BrainCircuit className="tech-category-icon" size={24} style={{ background: '#f3e8ff', color: '#8b5cf6' }} />
                    <h4>AI & NLP Stack</h4>
                  </div>
                  <div className="tech-pills" style={{ marginTop: '1rem' }}>
                    <span className="tech-pill">SpaCy / BERT</span>
                    <span className="tech-pill">Llama 3 / Mistral</span>
                    <span className="tech-pill">Tesseract OCR</span>
                    <span className="tech-pill">PyTorch</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. Step-by-Step Guide */}
          {activeTab === 'guide' && (
            <div className="details-card">
              <h3 className="section-title"><ListOrdered size={20} style={{ display: 'inline', marginRight: '8px' }} /> Step-by-Step Guide (बनाने का तरीका)</h3>
              <p className="overview-intro-text" style={{ marginBottom: '2.5rem' }}>
                इस प्रोजेक्ट को स्क्रैच से बनाने के लिए नीचे दिए गए चरणों (Steps) पर क्लिक करें:
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
                      <h4 style={{ margin: '0 0 0.25rem 0', color: 'var(--text-main)', fontSize: '1rem', fontWeight: 'bold' }}>{step.title}</h4>
                      <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem' }}>{step.subtitle}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 5. Resources & Datasets */}
          {activeTab === 'resources' && (
            <div className="details-card">
              <h3 className="section-title"><BookOpen size={20} style={{ display: 'inline', marginRight: '8px' }} /> Resources & Datasets (जरूरी डेटा)</h3>
              
              <div className="tech-stack-grid" style={{ marginTop: '2rem' }}>
                <div className="tech-category-card" style={{ borderLeft: '4px solid #3b82f6' }}>
                  <h4 style={{ margin: '0 0 1rem 0', color: 'var(--text-main)' }}>Internal Datasets</h4>
                  <ul className="overview-styled-list">
                    <li>FIR Data & Criminal History</li>
                    <li>Charge Sheets</li>
                    <li>Arrest Records</li>
                    <li>Prison Records</li>
                  </ul>
                </div>
                
                <div className="tech-category-card" style={{ borderLeft: '4px solid #10b981' }}>
                  <h4 style={{ margin: '0 0 1rem 0', color: 'var(--text-main)' }}>External Datasets</h4>
                  <ul className="overview-styled-list">
                    <li>Vehicle & RTO Data</li>
                    <li>Bank Fraud Data</li>
                    <li>Cyber Threat Intelligence</li>
                    <li>Missing Persons Database</li>
                  </ul>
                </div>

                <div className="tech-category-card" style={{ borderLeft: '4px solid #f59e0b', gridColumn: '1 / -1' }}>
                  <h4 style={{ margin: '0 0 1rem 0', color: 'var(--text-main)' }}>AI Training Dataset</h4>
                  <ul className="overview-styled-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <li>Historical Cases</li>
                    <li>Crime Patterns Data</li>
                    <li>Gang Networks History</li>
                    <li>Modus Operandi Archives</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* 6. Submission/Evaluation */}
          {activeTab === 'evaluation' && (
            <div className="details-card">
              <h3 className="section-title"><CheckSquare size={20} style={{ display: 'inline', marginRight: '8px' }} /> Submission / Evaluation (चेकलिस्ट)</h3>
              <p className="overview-intro-text" style={{ marginBottom: '2.5rem' }}>
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
                      <h4 style={{ margin: '0 0 0.25rem 0', color: 'var(--text-main)', fontSize: '1rem', fontWeight: 'bold' }}>{evaluation.title}</h4>
                      <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem' }}>{evaluation.subtitle}</p>
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
              <p className="placeholder-text">Configuration options for {project?.name || 'Autonomous Linker'} will be available here.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
