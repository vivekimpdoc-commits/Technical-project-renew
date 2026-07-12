import React, { useState } from 'react';
import { 
  ArrowLeft, LayoutDashboard, FileText, Code, ListOrdered, BookOpen, CheckSquare, Settings, Target, Shield, Database, Layout, CheckCircle, Network, Server, Briefcase, Activity, Monitor, BrainCircuit, Search, Zap, AlertTriangle, Layers, TrendingUp, Users, Cpu, Palette, Smartphone
} from 'lucide-react';
import './ProjectDetailsView.css';

export default function FrontendDetails() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showFullscreenFlowchart, setShowFullscreenFlowchart] = useState(false);
  const [showFullscreenWorkflow, setShowFullscreenWorkflow] = useState(false);
  const [selectedGuideStep, setSelectedGuideStep] = useState(null);
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);
  const [selectedOverviewSection, setSelectedOverviewSection] = useState(null);

  const overviewSections = [
    { id: 'io-assistance', title: 'Why Frontend Matters?', subtitle: 'यूज़र इंटरफेस का महत्व', icon: Target, color: '#475569' },
    { id: 'objectives', title: 'Design Objectives', subtitle: 'डिज़ाइन के मुख्य उद्देश्य', icon: Briefcase, color: '#2563eb' },
    { id: 'features', title: 'Major Features', subtitle: 'प्रमुख विशेषताएँ (UI/UX)', icon: Layers, color: '#ec4899' },
  ];

  const guideSteps = [
    { id: 1, title: 'चरण 1: वायरफ्रेमिंग (Wireframing)', subtitle: 'UI Layout Planning', icon: Layout, color: '#3b82f6' },
    { id: 2, title: 'चरण 2: कंपोनेंट डिजाइन', subtitle: 'React Components', icon: Code, color: '#10b981' },
    { id: 3, title: 'चरण 3: स्टेट मैनेजमेंट', subtitle: 'React State / Redux', icon: Activity, color: '#f59e0b' },
    { id: 4, title: 'चरण 4: रेस्पॉन्सिवनेस', subtitle: 'Mobile Friendly', icon: Smartphone, color: '#8b5cf6' },
    { id: 5, title: 'चरण 5: एपीआई इंटीग्रेशन', subtitle: 'Backend Connection', icon: Network, color: '#ec4899' },
    { id: 6, title: 'चरण 6: परफॉरमेंस ऑप्टिमाइजेशन', subtitle: 'Speed & Accessibility', icon: Zap, color: '#64748b' },
  ];

  const evaluationList = [
    { id: 1, title: '1. एक्सेसिबिलिटी (Accessibility)', subtitle: 'WCAG Standards', icon: Users, color: '#3b82f6' },
    { id: 2, title: '2. लोड टाइम', subtitle: 'Lighthouse Score', icon: Activity, color: '#10b981' },
    { id: 3, title: '3. मोबाइल फ्रेंडली', subtitle: 'Responsive Design', icon: Smartphone, color: '#f59e0b' },
    { id: 4, title: '4. कंसिस्टेंसी', subtitle: 'Design System', icon: Palette, color: '#8b5cf6' },
  ];

  const tabs = [
    { id: 'overview', label: 'Project Overview', icon: LayoutDashboard },
    { id: 'architecture', label: 'Architecture & Workflow', icon: FileText },
    { id: 'tech-stack', label: 'Tech Stack (तकनीकी टूल्स)', icon: Code },
    { id: 'guide', label: 'Step-by-Step Guide', icon: ListOrdered },
    { id: 'resources', label: 'Resources & Datasets', icon: BookOpen },
    { id: 'evaluation', label: 'Submission/Evaluation', icon: CheckSquare },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  if (showFullscreenFlowchart) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setShowFullscreenFlowchart(false)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Architecture Menu
        </button>
        <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.75rem', color: '#0f172a' }}>Frontend Architecture Flow</h3>
        <div className="flowchart-container" style={{ margin: '0 auto', maxWidth: '800px', background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
          <div className="flow-step"><div className="flow-node user-node">1. User Interaction (Click/Input)</div></div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step"><div className="flow-node">2. React Component State Update</div></div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step"><div className="flow-node">3. REST/GraphQL API Call (Axios/Fetch)</div></div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step"><div className="flow-node">4. Backend Processing (Python/Node)</div></div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step"><div className="flow-node">5. JSON Response parsing</div></div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step"><div className="flow-node output-node">6. UI Re-render (Virtual DOM update)</div></div>
        </div>
      </div>
    );
  }

  if (showFullscreenWorkflow) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setShowFullscreenWorkflow(false)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Architecture Menu
        </button>
        <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.75rem', color: '#0f172a' }}>Frontend Workflow (कार्यप्रणाली)</h3>
        <div className="workflow-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="workflow-step-card" style={{ borderLeftColor: '#3b82f6' }}>
            <h4 className="workflow-step-title">UI Design (Figma)</h4>
            <div className="workflow-point">सबसे पहले एप्लीकेशन का रंग, फॉन्ट और लुक (Look and Feel) तय किया जाता है।</div>
          </div>
          <div className="workflow-step-card" style={{ borderLeftColor: '#10b981' }}>
            <h4 className="workflow-step-title">Component Build</h4>
            <div className="workflow-point">React.js का उपयोग करके छोटे-छोटे हिस्से (जैसे बटन, कार्ड्स) बनाये जाते हैं जिन्हें बार-बार इस्तेमाल किया जा सके।</div>
          </div>
          <div className="workflow-step-card" style={{ borderLeftColor: '#f59e0b' }}>
            <h4 className="workflow-step-title">State Management</h4>
            <div className="workflow-point">पेज रिफ्रेश किये बिना डेटा को अपडेट करना (जैसे टैब्स बदलना) React State द्वारा संभाला जाता है।</div>
          </div>
          <div className="workflow-step-card" style={{ borderLeftColor: '#8b5cf6' }}>
            <h4 className="workflow-step-title">API Integration</h4>
            <div className="workflow-point">फ्रंटएंड को डेटाबेस और बैकएंड सर्वर से जोड़ना ताकि असली डेटा स्क्रीन पर दिखाई दे।</div>
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
                  <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                      <div className="workflow-point">• एक अच्छा यूज़र इंटरफेस (UI) जटिल डेटा को आसानी से समझने लायक बनाता है।</div>
                      <div className="workflow-point">• पुलिस अधिकारी बिना किसी तकनीकी ज्ञान के भी सिस्टम को आसानी से चला सकते हैं।</div>
                      <div className="workflow-point">• यह सुनिश्चित करता है कि काम तेजी से हो और कोई जानकारी (Information) छूट न जाए।</div>
                    </div>
                  </div>
                );
                case 'objectives': return (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
                    <div className="tech-category-card" style={{ borderTop: '4px solid #3b82f6' }}>
                      <h5 style={{ margin: '0 0 1rem 0' }}><Layout size={20}/> Zero-scroll Architecture</h5>
                      <span className="workflow-point">पेज को लंबा स्क्रॉल करने की बजाय एक ही स्क्रीन पर क्लिक-आधारित नेविगेशन देना।</span>
                    </div>
                    <div className="tech-category-card" style={{ borderTop: '4px solid #10b981' }}>
                      <h5 style={{ margin: '0 0 1rem 0' }}><Palette size={20}/> Premium Aesthetics</h5>
                      <span className="workflow-point">आधुनिक रंग, ग्रैडिएंट्स और आइकॉन्स का उपयोग करके एक शानदार लुक देना।</span>
                    </div>
                  </div>
                );
                case 'features': return (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                    <div className="tech-category-card"><Monitor size={22} color="#475569"/> <h5>Responsive View</h5><p>डेस्कटॉप और टैबलेट पर सही दिखना</p></div>
                    <div className="tech-category-card"><Zap size={22} color="#475569"/> <h5>Fast Rendering</h5><p>बिना लोडिंग के पेज बदलना</p></div>
                    <div className="tech-category-card"><Search size={22} color="#475569"/> <h5>Intuitive Nav</h5><p>आसानी से मेनू खोजना</p></div>
                    <div className="tech-category-card"><Layers size={22} color="#475569"/> <h5>Component Reusability</h5><p>एक ही कोड का बार-बार उपयोग</p></div>
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

  if (selectedGuideStep !== null) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setSelectedGuideStep(null)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold' }}>
          <ArrowLeft size={18} /> Back
        </button>
        <div className="workflow-container"><h3 style={{textAlign: 'center'}}>Refer to Architecture section for guide details.</h3></div>
      </div>
    );
  }
  
  if (selectedEvaluation !== null) {
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setSelectedEvaluation(null)} className="thane-back-btn" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold' }}>
          <ArrowLeft size={18} /> Back
        </button>
        <div className="workflow-container"><h3 style={{textAlign: 'center'}}>Evaluation Metrics active.</h3></div>
      </div>
    );
  }

  return (
    <div className="project-details-container">
      <div className="details-header-bar">
        <div className="details-header-content">
          <div className="details-title-wrapper">
            <h2 className="details-title">Frontend Architecture & UI/UX Design</h2>
            <span className="details-status-badge active">Active</span>
          </div>
          <p className="details-subtitle">एप्लीकेशन का यूजर इंटरफेस और फ्रंटएंड डेवलपमेंट की कार्यप्रणाली</p>
        </div>
      </div>

      <div className="details-layout">
        <div className="details-sidebar">
          <h3 className="details-sidebar-title">PROJECT MENU</h3>
          <nav className="details-nav">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button key={tab.id} className={`details-nav-item ${activeTab === tab.id ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)}>
                  <Icon size={18} /><span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="details-content-area">
          {activeTab === 'overview' && (
            <div className="details-card" style={{ border: 'none', padding: 0 }}>
              <div style={{ background: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)', borderRadius: '1rem', padding: '2.5rem', color: 'white', marginBottom: '2.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-10%', right: '-5%', opacity: 0.1 }}><Layout size={200} /></div>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.75rem', margin: '0 0 1rem 0' }}>
                  <Layout size={28} color="#c4b5fd" /> Project Overview
                </h3>
                <p style={{ color: '#ede9fe', fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '90%' }}>
                  <strong>"Frontend Design System"</strong> यह सुनिश्चित करता है कि पूरा सिस्टम इस्तेमाल करने में आसान हो, तेज़ हो और देखने में एक प्रीमियम और आधुनिक एप्लिकेशन (Modern Application) जैसा लगे।
                </p>
              </div>
              <div className="tech-stack-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                {overviewSections.map((sec) => {
                  const Icon = sec.icon;
                  return (
                    <div key={sec.id} className="tech-category-card" style={{ cursor: 'pointer', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.25rem 1rem' }} onClick={() => setSelectedOverviewSection(sec.id)}>
                      <div style={{ background: `${sec.color}15`, padding: '0.75rem', borderRadius: '50%', marginBottom: '0.75rem' }}><Icon size={24} color={sec.color} /></div>
                      <h4 style={{ margin: '0 0 0.25rem 0', color: '#0f172a', fontSize: '1rem', fontWeight: 'bold' }}>{sec.title}</h4>
                      <p style={{ margin: 0, color: '#64748b', fontSize: '0.85rem' }}>{sec.subtitle}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="details-card">
              <h3 className="section-title"><Network size={20} style={{ display: 'inline', marginRight: '8px' }} /> Architecture & Workflow (कार्यप्रणाली)</h3>
              <div className="arch-section" style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                <div className="arch-card" style={{ flex: 1, padding: '1.5rem', background: '#f0fdfa', borderRadius: '1rem', border: '1px solid #ccfbf1', cursor: 'pointer' }} onClick={() => setShowFullscreenFlowchart(true)}>
                  <h4 style={{ margin: '0 0 0.25rem 0' }}>View Lifecycle Flowchart</h4>
                </div>
                <div className="arch-card" style={{ flex: 1, padding: '1.5rem', background: '#fffbeb', borderRadius: '1rem', border: '1px solid #fef3c7', cursor: 'pointer' }} onClick={() => setShowFullscreenWorkflow(true)}>
                  <h4 style={{ margin: '0 0 0.25rem 0' }}>View Step-by-Step Details</h4>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tech-stack' && (
            <div className="details-card">
              <h3 className="section-title"><Code size={20} style={{ display: 'inline', marginRight: '8px' }} /> Tech Stack (तकनीकी टूल्स)</h3>
              <div className="tech-stack-grid">
                <div className="tech-category-card">
                  <h4><Code size={18} /> Core Frameworks</h4>
                  <ul className="tech-list">
                    <li>React.js (Library)</li>
                    <li>Vite (Build Tool)</li>
                    <li>React Router (Navigation)</li>
                  </ul>
                </div>
                <div className="tech-category-card">
                  <h4><Palette size={18} /> Styling & UI</h4>
                  <ul className="tech-list">
                    <li>Vanilla CSS3</li>
                    <li>Lucide React (Icons)</li>
                    <li>Flexbox & Grid Layouts</li>
                  </ul>
                </div>
                <div className="tech-category-card">
                  <h4><Activity size={18} /> State & APIs</h4>
                  <ul className="tech-list">
                    <li>React Context API / Hooks</li>
                    <li>Axios (Network Requests)</li>
                    <li>JSON Data Parsing</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="details-card">
              <h3 className="section-title"><ListOrdered size={20} style={{ display: 'inline', marginRight: '8px' }} /> Step-by-Step Guide (बनाने का तरीका)</h3>
              <div className="guide-timeline">
                {guideSteps.map((step, index) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={step.id} className="guide-step-card" onClick={() => setSelectedGuideStep(step.id)}>
                      <div className="step-number">{index + 1}</div>
                      <div className="step-icon-wrapper" style={{ background: `${step.color}15`, color: step.color }}>
                        <StepIcon size={24} />
                      </div>
                      <div className="step-content">
                        <h4 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '1.1rem' }}>{step.title}</h4>
                        <p style={{ margin: 0, color: '#64748b' }}>{step.subtitle}</p>
                      </div>
                      <div className="step-action">
                        <span style={{ fontSize: '0.875rem', color: '#3b82f6', fontWeight: '500' }}>View Details &rarr;</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="details-card">
              <h3 className="section-title"><BookOpen size={20} style={{ display: 'inline', marginRight: '8px' }} /> Resources & Datasets</h3>
              <div className="tech-stack-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                <div className="tech-category-card" style={{ borderLeft: '4px solid #3b82f6' }}>
                  <h4>Design Inspiration</h4>
                  <ul className="tech-list">
                    <li>Dribbble / Behance (UI/UX)</li>
                    <li>Material Design Guidelines</li>
                  </ul>
                </div>
                <div className="tech-category-card" style={{ borderLeft: '4px solid #10b981' }}>
                  <h4>Developer Docs</h4>
                  <ul className="tech-list">
                    <li>React Official Documentation</li>
                    <li>MDN Web Docs (CSS/JS)</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'evaluation' && (
            <div className="details-card">
              <h3 className="section-title"><CheckSquare size={20} style={{ display: 'inline', marginRight: '8px' }} /> Submission / Evaluation (चेकलिस्ट)</h3>
              <div className="guide-timeline">
                {evaluationList.map((item, index) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={item.id} className="guide-step-card" onClick={() => setSelectedEvaluation(item.id)}>
                      <div className="step-icon-wrapper" style={{ background: `${item.color}15`, color: item.color }}>
                        <ItemIcon size={24} />
                      </div>
                      <div className="step-content">
                        <h4 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '1.1rem' }}>{item.title}</h4>
                        <p style={{ margin: 0, color: '#64748b' }}>{item.subtitle}</p>
                      </div>
                      <div className="step-action">
                        <span style={{ fontSize: '0.875rem', color: '#3b82f6', fontWeight: '500' }}>View Metrics &rarr;</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
