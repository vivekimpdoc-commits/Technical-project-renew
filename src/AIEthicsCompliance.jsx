import React, { useState } from 'react';
import { ArrowLeft, Scale, ShieldCheck, FileCheck, EyeOff, BookOpen } from 'lucide-react';
import ModuleDetail from './ModuleDetail';
import './ThaneLevelDashboard.css';

export default function AIEthicsCompliance({ onBack }) {
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isPopupMaximized, setIsPopupMaximized] = useState(false);

  const reqData = [
    {
      id: 'xai', title: 'Explainable AI (XAI)', subtitle: 'Why AI Made That Choice (AI ने यह फैसला क्यों लिया)',
      icon: EyeOff, color: '#0ea5e9',
      items: ['Black Box vs White Box Models', 'SHAP & LIME Algorithms', 'Feature Importance Scoring', 'Legal Admissibility of AI Decisions', 'User-Friendly Explanations'],
      example: 'To prove in a court of law exactly why an AI system flagged a specific bank transaction as fraudulent, removing the "Black Box" mystery.',
      deepDive: [
        { heading: 'The Black Box Problem', text: 'Deep Learning models are incredibly accurate but cannot explain their logic. If an AI denies someone a loan, the law (like GDPR) requires a human-readable explanation.' },
        { heading: 'LIME (Local Interpretable Model-agnostic Explanations)', text: 'An algorithm that tweaks the input data slightly to see how the AI\'s prediction changes, thereby deducing which features the AI cares about the most.' }
      ]
    },
    {
      id: 'data-privacy', title: 'Data Privacy & Laws', subtitle: 'Protecting Citizen Data (नागरिकों का डेटा बचाना)',
      icon: ShieldCheck, color: '#10b981',
      items: ['DPDP Act 2023 (India) & GDPR (Europe)', 'Data Anonymization Techniques', 'Right to be Forgotten', 'Secure Multi-Party Computation', 'Differential Privacy'],
      example: 'To ensure that the police AI system can analyze millions of citizen records without actually violating their fundamental right to privacy.',
      deepDive: [
        { heading: 'Differential Privacy', text: 'A mathematical technique that adds "noise" to a dataset. The AI can still learn broad patterns (e.g., "crime is up 10%"), but it is mathematically impossible to identify any specific individual in that data.' },
        { heading: 'Anonymization vs Pseudonymization', text: 'Anonymization irreversibly destroys identifying data. Pseudonymization replaces names with IDs, meaning data can be traced back if you have the secret key.' }
      ]
    },
    {
      id: 'bias-detection', title: 'Algorithmic Bias Detection', subtitle: 'Fairness in AI (AI में निष्पक्षता)',
      icon: Scale, color: '#f59e0b',
      items: ['Historical Data Bias', 'Racial & Gender Profiling Risks', 'Fairness Metrics (Demographic Parity)', 'De-biasing Algorithms', 'Inclusive Dataset Generation'],
      example: 'To prevent the AI from automatically flagging certain neighborhoods or communities as "high risk" simply because of biased historical arrest records.',
      deepDive: [
        { heading: 'How Bias Enters AI', text: 'AI is not inherently racist or sexist, but it learns from historical human data. If police historically arrested more people in Area X, the AI will incorrectly predict Area X is inherently more dangerous.' },
        { heading: 'Demographic Parity', text: 'A fairness metric ensuring that a model\'s positive prediction rate is exactly the same across different demographics (e.g., Age, Gender, Religion).' }
      ]
    },
    {
      id: 'ai-audits', title: 'AI Audits & Governance', subtitle: 'Checking the AI (AI का ऑडिट करना)',
      icon: FileCheck, color: '#8b5cf6',
      items: ['Third-Party AI Auditing', 'Model Cards (Documentation)', 'Compliance Checklists', 'AI Risk Assessment Frameworks', 'Establishing an AI Ethics Board'],
      example: 'To set up a formal, standardized process for testing, documenting, and approving an AI model before it is ever allowed to be used by the police force.',
      deepDive: [
        { heading: 'Model Cards', text: 'Just like nutritional labels on food, every AI model must have a "Model Card" detailing its intended use cases, known biases, training data, and performance limitations.' },
        { heading: 'AI Ethics Board', text: 'A diverse panel of technologists, lawyers, sociologists, and citizens who review high-risk AI deployments to ensure they align with human rights and societal values.' }
      ]
    }
  ];

  const selectedModule = reqData.find(m => m.id === selectedModuleId);

  return (
    <div className="thane-dashboard-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      {selectedModule && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: isPopupMaximized ? '1rem' : '2rem' }}>
          <div className="animate-fade-in" style={{ background: '#f8fafc', width: '100%', maxWidth: isPopupMaximized ? '98%' : '1000px', height: isPopupMaximized ? '96vh' : '75vh', overflowY: 'auto', borderRadius: isPopupMaximized ? '0.75rem' : '1.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', position: 'relative', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
            <div style={{ position: 'absolute', top: '1rem', right: '1.5rem', display: 'flex', gap: '0.75rem', zIndex: 100 }}>
              <button onClick={() => setIsPopupMaximized(!isPopupMaximized)} style={{ background: '#e2e8f0', color: '#0f172a', border: 'none', padding: '0.5rem 1rem', borderRadius: '2rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>{isPopupMaximized ? '🗗 Restore' : '🗖 Maximize'}</button>
              <button onClick={() => { setSelectedModuleId(null); setIsPopupMaximized(false); }} style={{ background: '#ef4444', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '2rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>✕ Close</button>
            </div>
            <ModuleDetail module={selectedModule} onBack={() => { setSelectedModuleId(null); setIsPopupMaximized(false); }} isMaximized={isPopupMaximized} />
          </div>
        </div>
      )}

      <button onClick={onBack} className="thane-back-btn">
          <ArrowLeft size={20} /> Back to Advanced AI Command
        </button>
      <div className="thane-header">
        <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}><Scale size={32} color="#10b981" /> AI Ethics & Legal Compliance (एथिक्स और कानून)</h2>
        <p className="thane-subtitle">Ensuring AI systems are fair, transparent, unbiased, and legally compliant with data privacy laws.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginTop: '2rem', alignItems: 'flex-start' }}>
        {reqData.map((module) => (
          <div key={module.id} style={{ background: 'white', borderRadius: '1rem', padding: '1.5rem', border: '1px solid #e2e8f0', borderTop: `4px solid ${module.color}`, boxShadow: '0 4px 15px rgba(0,0,0,0.02)', transition: 'transform 0.3s, box-shadow 0.3s', display: 'flex', flexDirection: 'column' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 10px 25px ${module.color}33`; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)'; }}
          >
            <div onClick={() => setExpandedCard(expandedCard === module.id ? null : module.id)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', background: `${module.color}15`, color: module.color, borderRadius: '0.75rem' }}><module.icon size={24} /></div>
                <h4 style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: '700', lineHeight: '1.3', maxWidth: '70%' }}>{module.title}</h4>
              </div>
            </div>
            {expandedCard === module.id && (
              <div className="animate-fade-in" style={{ marginTop: '1.5rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {module.items.map((item, index) => (
                    <div key={index} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#334155', fontWeight: '500' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: module.color, flexShrink: 0 }}></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <button onClick={(e) => { e.stopPropagation(); setSelectedModuleId(module.id); }} style={{ width: '100%', padding: '0.75rem', background: module.color, color: 'white', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', boxShadow: `0 4px 10px ${module.color}66`, transition: 'opacity 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                ><BookOpen size={18} /> Click to View Detailed Modules</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
