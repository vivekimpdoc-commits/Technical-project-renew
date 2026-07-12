import React from 'react';
import { 
  BookOpen, GraduationCap, Code, Activity, 
  GlobeLock, BrainCircuit, Shield, Building2, 
  Presentation, ArrowRight, ShieldCheck
} from 'lucide-react';

export default function Overview({ onNavigate }) {
  const sections = [
    {
      title: "1. Education & IT Capacity Building (शिक्षा और तकनीकी क्षमता विकास)",
      color: "#3b82f6",
      items: [
        {
          id: 'step-up',
          subTab: 'phases',
          title: 'Step Up Literacy Software',
          titleHi: 'स्टेप अप साक्षरता सॉफ्टवेयर',
          desc: 'Basic to advanced software development lifecycle phases, Agile models, and CI/CD pipelines.',
          icon: BookOpen,
          color: '#64748b'
        },
        {
          id: 'ai-course',
          title: 'Artificial Intelligence (AI) Course',
          titleHi: 'आर्टिफिशियल इंटेलिजेंस (AI) कोर्स',
          desc: 'Comprehensive training course covering fundamental AI concepts, history, and neural networks.',
          icon: GraduationCap,
          color: '#3b82f6'
        },
        {
          id: 'masterclass',
          title: 'Software Masterclass',
          titleHi: 'सॉफ्टवेयर मास्टरक्लास',
          desc: 'System design, modern tech stacks (React, Node.js), version control, and interview prep.',
          icon: Code,
          color: '#0ea5e9'
        }
      ]
    },
    {
      title: "2. Advanced AI & Operations Command (एडवांस्ड एआई और ऑपरेशन्स कमांड)",
      color: "#10b981",
      items: [
        {
          id: 'mlops',
          title: 'AI Operations - MLOps',
          titleHi: 'AI ऑपरेशन्स (MLOps)',
          desc: 'Data pipelines, model training, serverless deployment, drift analysis, and LLMOps lifecycle.',
          icon: Activity,
          color: '#8b5cf6'
        },
        {
          id: 'advanced-ai',
          title: 'Advanced AI & Cyber Command',
          titleHi: 'एडवांस्ड AI और साइबर सुरक्षा',
          desc: 'AI forensics, predictive policing, autonomous agents, and ethics/compliance standards.',
          icon: GlobeLock,
          color: '#10b981'
        },
        {
          id: 'police-functioning',
          title: 'Police Functioning',
          titleHi: 'AI पुलिस की कार्यप्रणाली',
          desc: 'AI-assisted case analysis, smart checklists, investigation quality checks, and ranking boards.',
          icon: BrainCircuit,
          color: '#f59e0b'
        }
      ]
    },
    {
      title: "3. Administrative & Field Levels (प्रशासनिक और फील्ड स्तर)",
      color: "#ef4444",
      items: [
        {
          id: 'thane-level',
          title: 'Thane Level Operations',
          titleHi: 'पुलिस थाना स्तर (Kotwali / Beat)',
          desc: 'Voice FIR drafting, real-time station tracker, digital beat books, and smart lockup guards.',
          icon: Shield,
          color: '#ef4444'
        },
        {
          id: 'district-level',
          title: 'District Level SP Office',
          titleHi: 'जिला स्तर (SP/SSP कार्यालय)',
          desc: 'Integrated Command Centers (D-LICC), district resources, and security patrol dashboards.',
          icon: Building2,
          color: '#b91c1c'
        },
        {
          id: 'project-ppt',
          title: 'Project PPT & Slides',
          titleHi: 'प्रोजेक्ट पीपीटी (Presentations)',
          desc: 'High-quality slideshow presentations detailing the complete project goals and development life cycle.',
          icon: Presentation,
          color: '#475569'
        }
      ]
    }
  ];

  return (
    <div className="thane-dashboard-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      
      {/* Title */}
      <div className="thane-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ display: 'inline-flex', padding: '0.75rem', background: '#3b82f615', color: '#3b82f6', borderRadius: '1rem', marginBottom: '1rem' }}>
          <ShieldCheck size={40} />
        </div>
        <h2 className="thane-title" style={{ fontSize: '2.5rem', fontWeight: '800', background: 'linear-gradient(to right, #1e3a8a, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Central Navigation & Project Overview
        </h2>
        <p className="thane-subtitle" style={{ fontSize: '1.15rem', marginTop: '0.5rem' }}>
          मुख्य अवलोकन: उत्तर प्रदेश पुलिस एआई प्रोजेक्ट के सभी स्तंभों का सारांश
        </p>
      </div>

      {/* Intro Summary */}
      <div style={{ 
        background: 'white', borderRadius: '1.25rem', padding: '2rem', border: '1px solid #e2e8f0', 
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '3rem', textAlign: 'center'
      }}>
        <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.7', margin: 0 }}>
          यह डैशबोर्ड उत्तर प्रदेश पुलिस विभाग के आधुनिकीकरण का एक संपूर्ण नक्शा है। नीचे दिए गए तीन मुख्य क्षेत्रों में विभाजित किसी भी मॉड्यूल पर क्लिक करके सीधे उसके कार्यप्रणाली विवरण को देखें।
        </p>
      </div>

      {/* Sections rendering */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {sections.map((section, idx) => (
          <div key={idx} style={{ 
            background: 'white', padding: '2.5rem 2rem', borderRadius: '1.5rem', 
            border: '1px solid #e2e8f0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.02)'
          }}>
            <h3 style={{ 
              margin: '0 0 2rem 0', color: '#0f172a', fontSize: '1.35rem', fontWeight: '800',
              display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '2px solid #f1f5f9',
              paddingBottom: '0.75rem'
            }}>
              <span style={{ width: '4px', height: '24px', background: section.color, display: 'inline-block', borderRadius: '2px' }}></span>
              {section.title}
            </h3>

            {/* Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
              {section.items.map(item => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    onClick={() => onNavigate(item.id, item.subTab || 'phases')}
                    style={{
                      background: '#f8fafc', borderRadius: '1rem', padding: '1.5rem', border: '1px solid #e2e8f0',
                      borderTop: `4px solid ${item.color}`, display: 'flex', flexDirection: 'column',
                      cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      minHeight: '160px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.boxShadow = `0 10px 20px -5px ${item.color}33`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.background = '#f8fafc';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <div style={{ background: `${item.color}15`, padding: '0.6rem', borderRadius: '0.5rem', color: item.color }}>
                        <Icon size={22} />
                      </div>
                      <div>
                        <h4 style={{ margin: 0, color: '#0f172a', fontSize: '1.05rem', fontWeight: '700' }}>{item.title}</h4>
                        <span style={{ color: item.color, fontSize: '0.8rem', fontWeight: '600' }}>{item.titleHi}</span>
                      </div>
                    </div>

                    <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: '1.5', margin: '0 0 1rem 0', flexGrow: 1 }}>
                      {item.desc}
                    </p>

                    <div style={{ 
                      marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.25rem', 
                      color: item.color, fontWeight: 'bold', fontSize: '0.85rem' 
                    }}>
                      Open Dashboard <ArrowRight size={14} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
