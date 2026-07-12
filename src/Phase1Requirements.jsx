import React, { useState } from 'react';
import { 
  ArrowLeft, Target, Users, Settings, Zap, Smartphone, Code, BrainCircuit, Shield, Network, FileText, CheckCircle, ListOrdered, FileSignature, Search, Layers, Activity, Database, TrendingUp
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function Phase1Requirements({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);
  const reqData = [
    {
      id: 1,
      title: '1. Project Goals & Objectives',
      subtitle: 'प्रोजेक्ट का मुख्य उद्देश्य',
      icon: Target,
      color: '#3b82f6',
      items: [
        'AI आधारित स्मार्ट पुलिसिंग (Smart Policing) सिस्टम का निर्माण।',
        'अपराध की भविष्यवाणी और केस की जांच को फास्ट करना।',
        'पुलिस रिकॉर्ड्स और FIR का डिजिटल/सुरक्षित मैनेजमेंट।',
        'आम जनता के लिए त्वरित न्याय (Quick Justice) सुनिश्चित करना।'
      ],
      example: 'लक्ष्य: यूपी पुलिस (UP Police) के लिए एक एडवांस्ड AI इन्वेस्टिगेशन सिस्टम बनाना।'
    },
    {
      id: 2,
      title: '2. Police Department Users',
      subtitle: 'सिस्टम को चलाने वाले अधिकारी (Roles)',
      icon: Users,
      color: '#10b981',
      items: [
        'State Level Admin (DGP / IG Level): पूरे राज्य का डैशबोर्ड देखना, सभी जिलों की क्राइम रिपोर्ट का विश्लेषण करना और बड़े फैसले लेना।',
        'District Officers (SP / DSP Level): अपने जिले के सभी थानों की गतिविधियों पर नज़र रखना और महत्वपूर्ण मामलों में सीधा निर्देश देना।',
        'Thane Level (SHO / Inspector Level): थाने के सभी केसों की समीक्षा करना, IO को कार्य सौंपना और डेली रिपोर्टिंग सुनिश्चित करना।',
        'Investigation Officers (IO) & Beat Constables: डिजिटल FIR दर्ज करना, एविडेंस अपलोड करना और केस की ज़मीनी स्तर पर जाँच करना।'
      ],
      example: 'लक्ष्य: हर स्तर के अधिकारी को उसकी भूमिका (Role) के अनुसार सही जानकारी (Access) देना।'
    },
    {
      id: 3,
      title: '3. Functional Requirements',
      subtitle: 'कार्यात्मक आवश्यकताएँ',
      icon: Settings,
      color: '#f59e0b',
      items: [
        'कंप्यूटर एप्लिकेशन (Computer Application): पुलिस अधिकारियों के लिए सुरक्षित लॉगिन, मल्टी-डैशबोर्ड और नेविगेशन सिस्टम।',
        'यूजर मैनेजमेंट और सर्च (User Management & Search): किसी भी क्रिमिनल रिकॉर्ड या FIR को पलक झपकते ही सर्च करने की सुविधा।',
        'रिपोर्ट और सूचनाएं (Reports & Notifications): नए केस, पेंडिंग केस और इमरजेंसी अलर्ट के लिए रियल-टाइम नोटिफिकेशन्स।',
        'AI आधारित स्मार्ट फीचर्स (AI Smart Features): क्रिमिनल पैटर्न रिकॉग्निशन, चेहरे की पहचान (Facial Recognition) और क्राइम हॉटस्पॉट प्रेडिक्शन।'
      ],
      example: 'लक्ष्य: सिस्टम को इतना स्मार्ट बनाना कि वह पुलिस का काम 10 गुना तेज़ कर सके।'
    },
    {
      id: 4,
      title: '4. Non-Functional Requirements',
      subtitle: 'गैर-कार्यात्मक आवश्यकताएँ',
      icon: Zap,
      color: '#8b5cf6',
      items: [
        'तेज़ रिस्पॉन्स टाइम (Performance): सिस्टम 2 सेकंड के अंदर किसी भी सर्च क्वेरी का रिजल्ट दे सके।',
        'हाई सिक्योरिटी (Security): 256-bit एन्क्रिप्शन और मल्टी-फैक्टर ऑथेंटिकेशन (MFA) के साथ डेटा सुरक्षा।',
        'विश्वसनीयता (Reliability): 99.99% अपटाइम के साथ सिस्टम 24x7 उपलब्ध रहना चाहिए।',
        'बैकअप और रिकवरी (Backup & Recovery): ऑटोमैटिक क्लाउड बैकअप ताकि कोई भी FIR या सबूत कभी डिलीट न हो।'
      ],
      example: 'लक्ष्य: सिस्टम को तेज़, सुरक्षित और हमेशा उपलब्ध (Highly Available) रखना।'
    },
    {
      id: 5,
      title: '5. User Requirements',
      subtitle: 'उपयोगकर्ता आवश्यकताएँ',
      icon: Smartphone,
      color: '#ec4899',
      items: [
        'यूजर-फ्रेंडली इंटरफेस (User-friendly Interface): एक ऐसा डैशबोर्ड जिसे कोई भी साधारण सिपाही बिना ज्यादा ट्रेनिंग के चला सके।',
        'मोबाइल सपोर्ट (Mobile Support): इन्वेस्टिगेशन ऑफिसर्स (IO) के लिए मोबाइल फ्रेंडली वेब ऐप, ताकि वे फील्ड से भी फोटो/सबूत अपलोड कर सकें।',
        'बहुभाषी सपोर्ट (Multi-language Support): हिंदी और अंग्रेजी दोनों भाषाओं में आसानी से काम करने की सुविधा।',
        'आसान नेविगेशन (Easy Navigation): कम से कम क्लिक्स में महत्वपूर्ण जानकारी तक पहुँच।'
      ],
      example: 'लक्ष्य: पुलिस बल के लिए इस्तेमाल में सबसे आसान और प्रभावी टूल बनाना।'
    },
    {
      id: 6,
      title: '6. Technical Requirements',
      subtitle: 'तकनीकी आवश्यकताएँ',
      icon: Code,
      color: '#64748b',
      items: [
        'फ्रंटएंड तकनीक (Frontend Tech): React.js का उपयोग करके एक तेज़ और रेस्पॉन्सिव UI तैयार करना।',
        'बैकएंड तकनीक (Backend Tech): Node.js या Python FastAPI द्वारा सुरक्षित और स्केलेबल API का निर्माण।',
        'डेटाबेस (Database): भारी मात्रा में क्रिमिनल डेटा को सुरक्षित रखने के लिए PostgreSQL या MongoDB का इस्तेमाल।',
        'क्लाउड और होस्टिंग (Cloud Hosting): डेटा सिक्योरिटी के लिए सरकारी गाइडलाइन्स के तहत AWS या Azure क्लाउड का उपयोग।'
      ],
      example: 'लक्ष्य: मॉडर्न और सुरक्षित टेक्नोलॉजी स्टैक का इस्तेमाल करना।'
    },
    {
      id: 7,
      title: '7. AI Specific Requirements',
      subtitle: 'AI के लिए विशेष आवश्यकताएँ',
      icon: BrainCircuit,
      color: '#0ea5e9',
      items: [
        'डेटा सोर्स और क्वालिटी (Data Quality): पुराने पुलिस रिकॉर्ड्स, FIR और CCTV फुटेज को AI मॉडल के लिए तैयार करना।',
        'मॉडल की सटीकता (Model Accuracy): चेहरे की पहचान और अपराध की भविष्यवाणी में कम से कम 95% एक्यूरेसी सुनिश्चित करना।',
        'ऑटोमैटिक अपडेट्स (Training Frequency): हर महीने नए क्रिमिनल डेटा के साथ AI मॉडल को री-ट्रेन करना।',
        'AI इंफ्रास्ट्रक्चर (AI Infrastructure): वीडियो और इमेज प्रोसेसिंग के लिए शक्तिशाली GPU सर्वर्स का इस्तेमाल।'
      ],
      example: 'लक्ष्य: AI मॉडल्स को पुलिस की वास्तविक ज़रूरतों के अनुसार सटीक बनाना।'
    },
    {
      id: 8,
      title: '8. Security Requirements',
      subtitle: 'सुरक्षा आवश्यकताएँ',
      icon: Shield,
      color: '#ef4444',
      items: [
        'रोल-बेस्ड एक्सेस कंट्रोल (RBAC): सिर्फ ऑथराइज़्ड अधिकारी ही संवेदनशील केस और FIR की जानकारी देख सकें।',
        'डेटा एन्क्रिप्शन (Encryption): डेटाबेस में सेव होने वाला हर रिकॉर्ड और फाइल पूरी तरह से एन्क्रिप्टेड हो।',
        'ऑडिट लॉग्स (Audit Logs): सिस्टम में किसने, कब और क्या बदलाव किया, इसका पूरा रिकॉर्ड (Log) रखा जाए।',
        'API सिक्योरिटी (API Security): बाहरी सिस्टम्स के साथ डेटा शेयर करते समय सुरक्षित API गेटवे का उपयोग।'
      ],
      example: 'लक्ष्य: पुलिस डेटा को किसी भी प्रकार की साइबर हैकिंग और लीक से बचाना।'
    },
    {
      id: 9,
      title: '9. Integration Requirements',
      subtitle: 'एकीकरण आवश्यकताएँ',
      icon: Network,
      color: '#14b8a6',
      items: [
        'सरकारी पोर्टल्स से जुड़ाव (Gov Systems Integration): VAHAN, CCTNS और आधार डेटाबेस के साथ सुरक्षित रूप से जुड़ना।',
        'SMS और ईमेल सेवा (SMS/Email Alerts): महत्वपूर्ण अलर्ट्स और OTP के लिए थर्ड-पार्टी SMS गेटवे का एकीकरण।',
        'सीसीटीवी नेटवर्क (CCTV Integration): शहर के मुख्य चौराहों के CCTV कैमरों के साथ लाइव कनेक्टिविटी।',
        'थर्ड-पार्टी API (Third-Party APIs): फेशियल रिकग्निशन और मैप (Map) सर्विसेज के लिए बाहरी API का उपयोग।'
      ],
      example: 'लक्ष्य: सभी पुलिस सिस्टम्स को एक ही सेंट्रलाइज़्ड प्लेटफ़ॉर्म पर लाना।'
    },
    {
      id: 10,
      title: '10. Reporting Requirements',
      subtitle: 'रिपोर्टिंग आवश्यकताएँ',
      icon: FileText,
      color: '#f97316',
      items: [
        'लाइव डैशबोर्ड (Live Dashboard): जिलेवार और थानेवार क्राइम रेट्स का रियल-टाइम ग्राफिकल रिप्रेजेंटेशन।',
        'ऑटोमैटिक रिपोर्ट्स (Automated Reports): हर हफ्ते और महीने के अंत में ऑटोमैटिक क्राइम रिपोर्ट जेनरेट करना।',
        'एक्सपोर्ट सुविधा (Export Options): किसी भी रिपोर्ट या केस फाइल को एक क्लिक में PDF या Excel में डाउनलोड करना।',
        'पेंडेंसी ट्रैकिंग (Pendency Tracking): कितने केस अनसुलझे (Pending) हैं, उसकी पूरी लिस्ट और अलर्ट।'
      ],
      example: 'लक्ष्य: उच्च अधिकारियों (DGP/SP) को तुरंत और सटीक रिपोर्टिंग सुविधा देना।'
    },
    {
      id: 11,
      title: '11. Compliance Requirements',
      subtitle: 'अनुपालन आवश्यकताएँ',
      icon: CheckCircle,
      color: '#22c55e',
      items: [
        'डेटा प्रोटेक्शन कानून (Data Protection Laws): भारत सरकार के पर्सनल डेटा प्रोटेक्शन (DPDP) बिल का पूरी तरह से पालन करना।',
        'साइबर सिक्योरिटी स्टैंडर्ड्स (Cyber Standards): CERT-In के दिशा-निर्देशों के अनुसार सिस्टम का सुरक्षा परीक्षण (Security Audit)।',
        'सरकारी गाइडलाइन्स (Government Guidelines): पुलिस और गृह मंत्रालय के IT नियमों का कड़ाई से अनुपालन।',
        'डिजिटल एविडेंस एक्ट (Digital Evidence): अदालत में पेश किए जा सकने वाले डिजिटल सबूतों के नियमों (IT Act) का पालन।'
      ],
      example: 'लक्ष्य: पूरा सिस्टम कानूनी रूप से 100% सुरक्षित और मान्य (Compliant) हो।'
    }
  ];

  const processList = [
    'Problem Identification',
    'Stakeholder Meeting',
    'Requirement Collection',
    'Requirement Analysis',
    'Feasibility Study',
    'Documentation & Approval',
    'Development Planning'
  ];

  const deliverables = [
    'Business Requirement Document (BRD)',
    'Software Requirement Specification (SRS)',
    'Use Case Document',
    'Process Flow Diagram',
    'Data Flow Diagram (DFD)',
    'Wireframes & Database Design',
    'AI Architecture Document',
    'Risk Assessment Report & Project Plan'
  ];

  if (selectedDetail !== null) {
    const detailItem = reqData.find(item => item.id === selectedDetail);
    if (!detailItem) return null;
    const DetailIcon = detailItem.icon;
    
    // Custom beautiful layout specifically for Point 1
    if (selectedDetail === 1) {
      return (
        <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
          <button onClick={() => setSelectedDetail(null)} className="back-button" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
            <ArrowLeft size={18} /> Back to Phase 1
          </button>
          
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
              <Target size={40} color="#3b82f6" />
              <h3 style={{ margin: 0, fontSize: '2.2rem', color: '#0f172a' }}>1. Project Goals & Objectives</h3>
            </div>
            
            <div style={{ background: 'white', padding: '2.5rem', borderRadius: '1rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
              
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {/* Point 1 */}
                <div style={{ padding: '1.5rem', background: '#eff6ff', borderRadius: '0.75rem', borderLeft: '5px solid #3b82f6' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <Network size={24} color="#1d4ed8" />
                    <h4 style={{ margin: 0, fontSize: '1.25rem', color: '#1e40af' }}>1. आर्किटेक्चर और टेक्नोलॉजी स्टैक (Architecture & Tech Stack)</h4>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#334155', lineHeight: '1.6', fontSize: '1.05rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>इस्तेमाल होने वाले AI/ML मॉडल्स:</strong> (जैसे Predictive Analytics, NLP)।</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>डेटाबेस और क्लाउड इंफ्रास्ट्रक्चर:</strong> (जैसे सुरक्षित AWS/Azure या सरकारी क्लाउड)।</li>
                    <li><strong>डेटा सिक्योरिटी और एन्क्रिप्शन के तरीके:</strong> (FIR और पुलिस रिकॉर्ड्स की सुरक्षा के लिए)।</li>
                  </ul>
                </div>

                {/* Point 2 */}
                <div style={{ padding: '1.5rem', background: '#ecfdf5', borderRadius: '0.75rem', borderLeft: '5px solid #10b981' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <Layers size={24} color="#047857" />
                    <h4 style={{ margin: 0, fontSize: '1.25rem', color: '#065f46' }}>2. मुख्य फीचर्स का विस्तृत विवरण (Detailed Features)</h4>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#334155', lineHeight: '1.6', fontSize: '1.05rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>स्मार्ट पुलिसिंग:</strong> लाइव डैशबोर्ड, सीसीटीवी (CCTV) इंटीग्रेशन और फेशियल रिकग्निशन की जानकारी।</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>अपराध की भविष्यवाणी:</strong> हॉटस्पॉट मैपिंग (Hotspot Mapping) और क्राइम ट्रेंड एनालिसिस कैसे काम करेगा।</li>
                    <li><strong>डिजिटल FIR:</strong> क्लाउड स्टोरेज, ब्लॉकचेन या सुरक्षित बैकअप सिस्टम की कार्यप्रणाली।</li>
                  </ul>
                </div>

                {/* Point 3 */}
                <div style={{ padding: '1.5rem', background: '#fffbeb', borderRadius: '0.75rem', borderLeft: '5px solid #f59e0b' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <Activity size={24} color="#b45309" />
                    <h4 style={{ margin: 0, fontSize: '1.25rem', color: '#92400e' }}>3. प्रोजेक्ट की समय-सीमा और चरण (Roadmap & Phases)</h4>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#334155', lineHeight: '1.6', fontSize: '1.05rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>चरण 1:</strong> डेटा कलेक्शन और पुलिस डेटाबेस का डिजिटलीकरण।</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>चरण 2:</strong> AI मॉडल की ट्रेनिंग और टेस्टिंग।</li>
                    <li><strong>चरण 3:</strong> यूपी पुलिस (UP Police) के साथ पायलट रन और फाइनल रोलआउट।</li>
                  </ul>
                </div>

                {/* Point 4 */}
                <div style={{ padding: '1.5rem', background: '#f5f3ff', borderRadius: '0.75rem', borderLeft: '5px solid #8b5cf6' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <Database size={24} color="#6d28d9" />
                    <h4 style={{ margin: 0, fontSize: '1.25rem', color: '#5b21b6' }}>4. बजट और संसाधन (Budget & Resource Allocation)</h4>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#334155', lineHeight: '1.6', fontSize: '1.05rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>प्रोजेक्ट की अनुमानित लागत:</strong> (Estimated Cost)।</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>आवश्यक हार्डवेयर और सॉफ्टवेयर:</strong> सिस्टम चलाने के लिए जरुरी संसाधन।</li>
                    <li><strong>टीम का विवरण:</strong> डेवलपर्स, डेटा साइंटिस्ट और पुलिस अधिकारियों की टीम का विवरण।</li>
                  </ul>
                </div>

                {/* Point 5 */}
                <div style={{ padding: '1.5rem', background: '#fdf2f8', borderRadius: '0.75rem', borderLeft: '5px solid #ec4899' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <TrendingUp size={24} color="#be185d" />
                    <h4 style={{ margin: 0, fontSize: '1.25rem', color: '#9d174d' }}>5. प्रभाव और लाभ (Impact & Benefits)</h4>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#334155', lineHeight: '1.6', fontSize: '1.05rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>केस सुलझाने के समय में कमी:</strong> संभावित कमी (ग्राफ या प्रतिशत में)।</li>
                    <li><strong>आम जनता को मिलने वाली सुविधाएं:</strong> और सिस्टम में पारदर्शिता (Transparency)।</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      );
    }

    // Dynamic renderer for points 2 through 11
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setSelectedDetail(null)} className="back-button" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Phase 1
        </button>
        
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <DetailIcon size={40} color={detailItem.color} />
            <h3 style={{ margin: 0, fontSize: '2rem', color: '#0f172a' }}>{detailItem.title}</h3>
          </div>
          
          <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
            <h4 style={{ fontSize: '1.25rem', color: '#1e293b', marginBottom: '1rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem' }}>
              {detailItem.subtitle}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {detailItem.items.map((bullet, idx) => {
                const parts = bullet.split(':');
                const hasColon = parts.length > 1;
                return (
                  <div key={idx} style={{ padding: '1.25rem', background: `${detailItem.color}0a`, borderRadius: '0.75rem', borderLeft: `4px solid ${detailItem.color}` }}>
                    {hasColon ? (
                      <>
                        <strong style={{ fontSize: '1.1rem', color: '#1e293b' }}>{parts[0]}:</strong>
                        <p style={{ margin: '0.5rem 0 0 0', color: '#334155', lineHeight: '1.6' }}>{parts.slice(1).join(':')}</p>
                      </>
                    ) : (
                      <p style={{ margin: 0, color: '#1e293b', fontSize: '1.1rem', fontWeight: '500' }}>{bullet}</p>
                    )}
                  </div>
                );
              })}
            </div>

            {detailItem.example && (
              <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f0fdf4', borderRadius: '0.75rem', border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: '#dcfce7', padding: '1rem', borderRadius: '50%' }}><Target size={28} color="#16a34a" /></div>
                <div>
                  <h4 style={{ color: '#166534', margin: '0 0 0.25rem 0', fontSize: '1.1rem' }}>Ultimate Goal (अंतिम लक्ष्य)</h4>
                  <p style={{ margin: 0, color: '#15803d', fontSize: '1rem', fontStyle: 'italic', fontWeight: '500' }}>
                    {detailItem.example}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

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
          <ArrowLeft size={18} /> Back to Phases
        </button>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.75rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Search size={28} color="#3b82f6" />
            Phase 1: Requirements Gathering & Analysis
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>ज़रूरतों को समझना और विश्लेषण - Detailed breakdown of all requirements</p>
        </div>
      </div>

      {/* Grid of Boxes */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
        {reqData.map(box => {
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
                  {box.example && (
                    <div style={{ marginBottom: '1.5rem', padding: '0.75rem', background: '#f1f5f9', borderRadius: '0.5rem', fontSize: '0.85rem', color: '#475569', fontStyle: 'italic', borderLeft: `3px solid ${box.color}` }}>
                      {box.example}
                    </div>
                  )}
                  
                  {/* View Details Button */}
                  <button style={{
                    width: '100%', padding: '0.75rem', background: box.color, color: 'white',
                    border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '0.95rem',
                    cursor: 'pointer', transition: 'opacity 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = 0.9}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = 1}
                  onClick={() => setSelectedDetail(box.id)}
                  >
                    Click to View Details
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Sections: Process and Deliverables */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
        
        {/* Process */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#3b82f615', padding: '0.75rem', borderRadius: '0.5rem', color: '#3b82f6' }}><ListOrdered size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Requirements Gathering Process (चरण)</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {processList.map((step, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 1rem', background: '#f8fafc', borderRadius: '0.5rem', border: '1px solid #f1f5f9' }}>
                <div style={{ width: '24px', height: '24px', background: '#3b82f6', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>{idx + 1}</div>
                <span style={{ color: '#334155', fontWeight: '500' }}>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#10b98115', padding: '0.75rem', borderRadius: '0.5rem', color: '#10b981' }}><FileSignature size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Deliverables (अंतिम दस्तावेज)</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {deliverables.map((doc, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '1rem', background: '#f0fdf4', borderRadius: '0.75rem', border: '1px solid #dcfce7' }}>
                <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                <span style={{ color: '#166534', fontSize: '0.9rem', fontWeight: '500', lineHeight: '1.4' }}>{doc}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
