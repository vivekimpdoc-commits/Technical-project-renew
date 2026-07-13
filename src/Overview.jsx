import React from 'react';
import { 
  BookOpen, GraduationCap, Code, Activity, 
  GlobeLock, BrainCircuit, Shield, Building2, 
  Presentation, ArrowRight, ShieldCheck, Home
} from 'lucide-react';

export default function Overview({ onNavigate, filterCategory }) {
  const sections = [
    {
      titleEn: "1. Education & IT Capacity Building",
      titleHi: "शिक्षा और तकनीकी क्षमता विकास",
      title: "1. Education & IT Capacity Building (शिक्षा और तकनीकी क्षमता विकास)",
      color: "#3b82f6",
      textColor: "#2563eb",
      items: [
        {
          id: 'step-up',
          subTab: 'phases',
          title: 'Step Up Literacy Software',
          titleHi: 'स्टेप अप साक्षरता सॉफ्टवेयर',
          desc: 'Basic to advanced software development lifecycle phases, Agile models, and CI/CD pipelines.',
          icon: BookOpen,
          color: '#d946ef'
        },
        {
          id: 'ai-course',
          title: 'Artificial Intelligence (AI) Course',
          titleHi: 'आर्टिफिशियल इंटेलिजेंस (AI) कोर्स',
          desc: 'Comprehensive training course covering fundamental AI concepts, history, and neural networks.',
          icon: GraduationCap,
          color: '#2563eb'
        },
        {
          id: 'masterclass',
          title: 'Software Masterclass',
          titleHi: 'सॉफ्टवेयर मास्टरक्लास',
          desc: 'System design, modern tech stacks (React, Node.js), version control, and interview prep.',
          icon: Code,
          color: '#06b6d4'
        }
      ]
    },
    {
      titleEn: "2. Advanced AI & Operations Command",
      titleHi: "एडवांस्ड एआई और ऑपरेशन्स कमांड",
      title: "2. Advanced AI & Operations Command (एडवांस्ड एआई और ऑपरेशन्स कमांड)",
      color: "#10b981",
      textColor: "#0d9488",
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
          color: '#06b6d4'
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
      titleEn: "3. Administrative & Field Levels",
      titleHi: "प्रशासनिक और फील्ड स्तर",
      title: "3. Administrative & Field Levels (प्रशासनिक और फील्ड स्तर)",
      color: "#ef4444",
      textColor: "#dc2626",
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
          color: '#0ea5e9'
        },
        {
          id: 'project-ppt',
          title: 'Project PPT & Slides',
          titleHi: 'प्रोजेक्ट पीपीटी (Presentations)',
          desc: 'High-quality slideshow presentations detailing the complete project goals and development life cycle.',
          icon: Presentation,
          color: 'var(--text-muted)'
        }
      ]
    }
  ];

  const displaySections = filterCategory 
    ? sections.filter(s => s.titleEn.toLowerCase().includes(filterCategory.toLowerCase()))
    : sections;

  return (
    <div className="thane-dashboard-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
      
      {/* Back to Home Button (Only visible on Category Pages) */}
      {filterCategory && (
        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'flex-start' }}>
          <button 
            onClick={() => onNavigate('overview')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.6rem 1.25rem',
              background: 'linear-gradient(to right, #2563eb, #3b82f6)',
              color: 'white',
              border: 'none',
              borderRadius: '2rem',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.9rem',
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(37, 99, 235, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.25)';
            }}
          >
            <Home size={16} /> Back to Home
          </button>
        </div>
      )}

      {/* Title */}
      <div className="thane-header" style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
        <h2 className="thane-title" style={{ 
          fontSize: '1.65rem', 
          fontWeight: '800', 
          background: 'linear-gradient(to right, #1e3a8a, #3b82f6)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}>
          <ShieldCheck size={28} style={{ color: '#2563eb', flexShrink: 0 }} />
          {filterCategory ? `${filterCategory} Category Portal` : 'Home & Central Command Portal (मुख्य पोर्टल)'}
        </h2>
        <p className="thane-subtitle" style={{ fontSize: '0.9rem', marginTop: '0.25rem', color: 'var(--text-muted)' }}>
          {filterCategory ? `Modules under ${filterCategory} category` : 'उत्तर प्रदेश पुलिस एआई प्रोजेक्ट के सभी मुख्य स्तंभों का पोर्टल गेटवे'}
        </p>
      </div>

      {/* Intro Summary */}
      {!filterCategory && (
        <div style={{ 
          background: 'var(--card-bg)', borderRadius: '0.75rem', padding: '0.75rem 1.25rem', border: '1px solid var(--card-border)', 
          boxShadow: '0 2px 4px rgba(0,0,0,0.02)', marginBottom: '1.5rem', textAlign: 'center'
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
            यह डैशबोर्ड उत्तर प्रदेश पुलिस विभाग के आधुनिकीकरण का एक संपूर्ण नक्शा है। नीचे दिए गए तीन मुख्य क्षेत्रों में विभाजित किसी भी मॉड्यूल पर क्लिक करके सीधे उसके कार्यप्रणाली विवरण को देखें।
          </p>
        </div>
      )}

      {/* Sections rendering */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {displaySections.map((section, idx) => (
          <div key={idx} style={{ 
            background: 'var(--card-bg)', padding: '1.75rem 1.5rem', borderRadius: '1.25rem', 
            border: '1px solid var(--card-border)', borderTop: `4px solid ${section.color}`,
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.02)'
          }}>
            <h3 style={{ 
              margin: '0 0 1.25rem 0', fontSize: '1.2rem', fontWeight: '800',
              display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '2px solid #f1f5f9',
              paddingBottom: '0.6rem'
            }}>
              <span style={{ width: '4px', height: '20px', background: section.color, display: 'inline-block', borderRadius: '2px' }}></span>
              <span style={{ display: 'inline-flex', flexWrap: 'wrap', alignItems: 'baseline', color: section.textColor }}>
                <span>{section.titleEn}</span>
                <span style={{ fontSize: '0.95rem', fontWeight: '600', marginLeft: '0.5rem' }}>
                  ({section.titleHi})
                </span>
              </span>
            </h3>

            {/* Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', alignItems: 'start' }}>
              {section.items.map(item => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    onClick={() => onNavigate(item.id, item.subTab || 'phases')}
                    style={{
                      background: 'var(--icon-bg)', borderRadius: '0.75rem', padding: '1.25rem', border: '1px solid var(--card-border)',
                      borderTop: `4px solid ${item.color}`, display: 'flex', flexDirection: 'column',
                      cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      minHeight: '145px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.boxShadow = `0 8px 16px -4px ${item.color}25`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.background = '#f8fafc';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <div style={{ background: `${item.color}12`, padding: '0.5rem', borderRadius: '0.4rem', color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 style={{ margin: 0, color: item.color, fontSize: '0.95rem', fontWeight: '800' }}>{item.title}</h4>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: '600' }}>{item.titleHi}</span>
                      </div>
                    </div>

                    <p style={{ color: 'var(--text-main)', fontSize: '0.8rem', lineHeight: '1.45', margin: '0 0 0.75rem 0', flexGrow: 1, fontWeight: '500' }}>
                      {item.desc}
                    </p>

                    <div style={{ 
                      marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.25rem', 
                      color: item.color, fontWeight: 'bold', fontSize: '0.8rem' 
                    }}>
                      Open Dashboard <ArrowRight size={12} />
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
