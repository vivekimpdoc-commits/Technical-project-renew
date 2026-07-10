import React, { useState } from 'react';
import { 
  ArrowLeft, RefreshCw, GitMerge, Settings, Activity, ShieldCheck, FastForward, CheckCircle, Infinity, FileText, Layers
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function SDLCModels({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const models = [
    {
      id: 1,
      title: 'Waterfall Model (वॉटरफॉल मॉडल)',
      subtitle: 'The Traditional Linear Approach',
      icon: GitMerge,
      color: '#3b82f6',
      items: [
        'इसमें एक चरण पूरा होने के बाद ही अगला चरण शुरू होता है।',
        'यह एक सीधी लाइन (Linear) में चलता है।',
        'Requirements पूरी तरह फिक्स होने पर ही इसका उपयोग किया जाता है।',
        'फायदे: समझने और मैनेज करने में आसान।',
        'नुकसान: बीच में बदलाव करना बहुत मुश्किल होता है।'
      ]
    },
    {
      id: 2,
      title: 'Agile Model (एजाइल मॉडल)',
      subtitle: 'The Flexible & Iterative Approach',
      icon: RefreshCw,
      color: '#10b981',
      items: [
        'यह प्रोजेक्ट को छोटे-छोटे हिस्सों (Sprints) में बांटता है।',
        'हर 2-3 हफ्ते में क्लाइंट को कुछ नया बनाकर दिखाया जाता है।',
        'बदलाव (Changes) को किसी भी समय स्वीकार किया जा सकता है।',
        'फायदे: बहुत लचीला, यूज़र फीडबैक पर आधारित।',
        'नुकसान: अगर विज़न क्लियर न हो तो प्रोजेक्ट भटक सकता है।'
      ]
    },
    {
      id: 3,
      title: 'V-Model (Verification & Validation)',
      subtitle: 'Testing in Parallel',
      icon: ShieldCheck,
      color: '#f59e0b',
      items: [
        'इसे Waterfall का अपग्रेडेड वर्ज़न माना जाता है।',
        'इसमें हर डेवलपमेंट फेज़ के साथ उसका टेस्टिंग फेज़ भी जुड़ा होता है।',
        'जैसे ही कोडिंग शुरू होती है, टेस्ट केस भी बनने शुरू हो जाते हैं।',
        'फायदे: गलतियां बहुत जल्दी पकड़ में आ जाती हैं।',
        'नुकसान: Waterfall की तरह ही बदलाव करना मुश्किल।'
      ]
    },
    {
      id: 4,
      title: 'Spiral Model (स्पाइरल मॉडल)',
      subtitle: 'Risk-Driven Approach',
      icon: Activity,
      color: '#ec4899',
      items: [
        'यह बड़े और रिस्की (High Risk) प्रोजेक्ट्स के लिए इस्तेमाल होता है।',
        'प्रोजेक्ट एक चक्र (Spiral) में घूमता है, जहाँ हर चक्र में रिस्क को कम किया जाता है।',
        'बार-बार प्रोटोटाइप (Prototype) बनाकर रिस्क चेक किया जाता है।',
        'फायदे: रिस्क मैनेजमेंट बहुत अच्छा होता है।',
        'नुकसान: बहुत महंगा और ज़्यादा समय लेने वाला।'
      ]
    },
    {
      id: 5,
      title: 'DevOps Lifecycle',
      subtitle: 'Continuous Integration & Deployment',
      icon: Infinity,
      color: '#8b5cf6',
      items: [
        'Development (Dev) और Operations (Ops) टीम मिलकर काम करती है।',
        'कोडिंग, टेस्टिंग और डिप्लॉयमेंट को ऑटोमेट (Automate) कर दिया जाता है।',
        'दिन में कई बार सॉफ्टवेयर को लाइव किया जा सकता है।',
        'फायदे: बहुत तेज़ी से काम होता है और क्वालिटी बनी रहती है।',
        'नुकसान: सेटअप करना और सीखना मुश्किल हो सकता है।'
      ]
    },
    {
      id: 6,
      title: 'RAD Model (Rapid App Development)',
      subtitle: 'Fast Prototyping',
      icon: FastForward,
      color: '#14b8a6',
      items: [
        'प्लानिंग पर कम और तुरंत काम (Prototyping) पर ज़्यादा ध्यान दिया जाता है।',
        'यूज़र को बहुत जल्दी सॉफ्टवेयर का एक वर्किंग मॉडल दे दिया जाता है।',
        'फायदे: डिलीवरी का समय बहुत कम हो जाता है।',
        'नुकसान: बड़े और जटिल प्रोजेक्ट्स के लिए सही नहीं है।'
      ]
    }
  ];

  return (
    <div className="thane-dashboard-container" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
      
      {/* Header with Back Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
        <button 
          onClick={onBack} 
          style={{ 
            display: 'flex', alignItems: 'center', gap: '0.5rem', 
            padding: '0.75rem 1.5rem', background: 'white', 
            borderRadius: '0.75rem', border: '1px solid #e2e8f0',
            color: '#0f172a', fontWeight: 'bold', cursor: 'pointer',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.color = '#2563eb'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; }}
        >
          <ArrowLeft size={18} /> Back to SDLC
        </button>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.75rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Layers size={28} color="#3b82f6" />
            SDLC मॉडल्स (सॉफ्टवेयर बनाने के तरीके)
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            विभिन्न पद्धतियां (Methodologies) जिनका उपयोग करके सॉफ्टवेयर का निर्माण किया जाता है।
          </p>
        </div>
      </div>

      {/* Grid of Boxes */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
        {models.map(box => {
          const Icon = box.icon;
          return (
            <div key={box.id} style={{
              background: 'white', borderRadius: '1rem', padding: '1.5rem',
              border: '1px solid #e2e8f0', borderTop: `4px solid ${box.color}`,
              boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
              display: 'flex', flexDirection: 'column',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = `0 10px 25px ${box.color}33`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)';
            }}>
              {/* Header (Clickable) */}
              <div 
                onClick={() => setExpandedCard(expandedCard === box.id ? null : box.id)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: `${box.color}15`, padding: '0.75rem', borderRadius: '0.75rem', color: box.color }}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#0f172a', fontWeight: 'bold', lineHeight: '1.3' }}>{box.title}</h3>
                    <p style={{ margin: '0.2rem 0 0 0', color: '#64748b', fontSize: '0.85rem' }}>{box.subtitle}</p>
                  </div>
                </div>
                <span style={{ color: box.color, fontWeight: 'bold', fontSize: '1.5rem', lineHeight: '1' }}>
                  {expandedCard === box.id ? '−' : '+'}
                </span>
              </div>

              {/* Expanded Content */}
              {expandedCard === box.id && (
                <div className="animate-fade-in" style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1.5rem', flex: 1 }}>
                    {box.items.map((item, idx) => (
                      <div key={idx} style={{ 
                        background: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.5rem 0.75rem', 
                        borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
                        fontSize: '0.85rem', color: '#334155', fontWeight: '500'
                      }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: box.color, flexShrink: 0 }}></div>
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* View Details Button */}
                  <button style={{
                    width: '100%', padding: '0.75rem', background: box.color, color: 'white',
                    border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '0.95rem',
                    cursor: 'pointer', transition: 'opacity 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = 0.9}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = 1}
                  >
                    Click to View Details
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
    </div>
  );
}
