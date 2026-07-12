import React, { useState } from 'react';
import { 
  ArrowLeft, Database, Server, Settings, Lock, Network, Shield, HardDrive, FileText, Activity, BrainCircuit, Code, Layers, FileSignature, CheckCircle, Zap, Target, Info
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function Phase4Requirements({ onBack }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const reqData = [
    {
      id: 1,
      title: 'Technology Stack',
      subtitle: 'बैकएंड प्रोग्रामिंग और फ्रेमवर्क्स',
      icon: Code,
      color: '#3b82f6',
      items: [
        'प्रोग्रामिंग भाषाएँ (Languages): सिस्टम की नींव के लिए .NET (सुझाया गया), Java, Python या Node.js का उपयोग।',
        'फ्रेमवर्क्स (Frameworks): मज़बूत और सुरक्षित बैकएंड के लिए ASP.NET Core Web API, Spring Boot, FastAPI या Express.js।',
        'डेटाबेस (Database): पुलिस के करोड़ों रिकॉर्ड्स सुरक्षित रखने के लिए SQL Server या PostgreSQL।',
        'क्लाउड और सर्वर (Cloud & Server): AWS, Azure या प्राइवेट गवर्नमेंट क्लाउड इंफ्रास्ट्रक्चर।'
      ],
      example: 'लक्ष्य: एक ऐसा बैकएंड बनाना जो एक साथ लाखों रिक्वेस्ट्स (Searches) बिना क्रैश हुए संभाल सके।',
      deepDive: [
        {
          heading: '.NET Core (C#)',
          content: 'भारत सरकार और पुलिस विभाग के अधिकांश पुराने सिस्टम्स .NET पर बने हैं। इसलिए .NET Core का उपयोग करने से नए सिस्टम को पुराने सिस्टम (Legacy) के साथ जोड़ना सबसे आसान और सुरक्षित होगा।'
        },
        {
          heading: 'एंटरप्राइज ग्रेड (Enterprise Grade)',
          content: 'हम माइक्रो-सर्विसेस (Microservices) आर्किटेक्चर का इस्तेमाल करेंगे। इसका मतलब है कि अगर रिपोर्टिंग सर्वर डाउन हो भी जाये, तो FIR सर्च का काम बिना रुके चलता रहेगा।'
        }
      ]
    },
    {
      id: 2,
      title: 'Core Backend Modules',
      subtitle: 'मुख्य बैकएंड हिस्से',
      icon: Layers,
      color: '#10b981',
      items: [
        'ऑथेंटिकेशन (Authentication): सुरक्षित लॉगिन (Login), पासवर्ड रीसेट (Password Reset), OTP जनरेशन और सेशन को कंट्रोल करना।',
        'यूजर मैनेजमेंट (User Management): नए अधिकारियों का रजिस्ट्रेशन, प्रोफाइल अपडेट और उनके अधिकार (Permissions) तय करना।',
        'अलर्ट्स और नोटिफिकेशन्स (Notifications): इमरजेंसी में तुरंत Email, SMS और पुश नोटिफिकेशन्स भेजना।',
        'रिपोर्ट और डेटा (Reports & Data): भारी मात्रा में डेटा से सेकंड्स में PDF या Excel रिपोर्ट तैयार करना।'
      ],
      example: 'लक्ष्य: सिस्टम के सभी महत्वपूर्ण कामों (ऑपरेशन्स) को बैकएंड में सुरक्षित तरीके से प्रोसेस करना।',
      deepDive: [
        {
          heading: 'आईडेंटिटी सर्वर (Identity Server)',
          content: 'ऑथेंटिकेशन के लिए एक अलग सेंट्रलाइज़्ड सर्वर होगा (OAuth 2.0 / OpenID Connect) जो किसी भी डिवाइस (वेब या मोबाइल) से लॉगिन करने पर सिक्यूरिटी को मैनेज करेगा।'
        },
        {
          heading: 'बैकग्राउंड प्रोसेस (Background Tasks)',
          content: 'भारी काम जैसे महीने की पूरी क्राइम रिपोर्ट का PDF बनाना, बैकग्राउंड में चलेगा (Hangfire के ज़रिये) ताकि पुलिसकर्मी को कंप्यूटर स्क्रीन पर इंतज़ार न करना पड़े।'
        }
      ]
    },
    {
      id: 3,
      title: 'API Development',
      subtitle: 'डेटा संचार के लिए API',
      icon: Network,
      color: '#f59e0b',
      items: [
        'REST API डिज़ाइन (REST APIs): फ्रंटएंड और डेटाबेस के बीच सुरक्षित रूप से डेटा का लेन-देन (GET, POST, PUT, DELETE)।',
        'API डॉक्यूमेंटेशन (Documentation): डेवलपर्स के लिए Swagger या OpenAPI के ज़रिए साफ़ और स्पष्ट API डॉक्स बनाना।',
        'API वर्ज़निंग (API Versioning): भविष्य के अपडेट्स (v1, v2) के लिए API को तैयार रखना ताकि पुराना सिस्टम न रुके।',
        'API सिक्योरिटी (API Security): हर API रिक्वेस्ट को टोकन (Token) द्वारा वेरीफाई करना।'
      ],
      example: 'लक्ष्य: ऐप, वेबसाइट और अन्य सरकारी पोर्टल्स (जैसे CCTNS) को आपस में सुरक्षित तरीके से जोड़ना।',
      deepDive: [
        {
          heading: 'API रेट लिमिटिंग (Rate Limiting)',
          content: 'एक ही अधिकारी 1 सेकंड में 100 से ज्यादा सर्च नहीं कर पाएगा। इससे सर्वर को हैकर्स के DDoS अटैक से बचाया जा सकेगा।'
        },
        {
          heading: 'स्वैगर इंटीग्रेशन (Swagger UI)',
          content: 'API डॉक्यूमेंटेशन के लिए Swagger का उपयोग किया जायेगा, जिससे कोई भी थर्ड-पार्टी डेवलपर बिना कोड पढ़े समझ जाएगा कि डेटा कैसे भेजना और मंगाना है।'
        }
      ]
    },
    {
      id: 4,
      title: 'Business Logic Layer',
      subtitle: 'मुख्य नियम और प्रक्रियाएं',
      icon: Settings,
      color: '#ec4899',
      items: [
        'नियमों की जाँच (Validation Rules): सुनिश्चित करना कि दर्ज की गई FIR या सबूत कानूनी रूप से सही फॉर्मेट में हों।',
        'वर्कफ़्लो (Workflow Engine): एक केस के दर्ज होने से लेकर SP तक पहुँचने तक का ऑटोमैटिक रूट तय करना।',
        'अप्रूवल प्रोसेस (Approval Process): जूनियर अधिकारी द्वारा दी गई रिपोर्ट को सीनियर अधिकारी द्वारा मंज़ूरी देना।',
        'टास्क शेड्यूलिंग (Scheduling): रात के समय ऑटोमैटिक बैकअप और सुबह तक क्राइम रिपोर्ट तैयार करना।'
      ],
      example: 'लक्ष्य: पुलिस विभाग के असल नियमों और कार्यप्रणाली (Rules) को कोड (Code) में बदलना।',
      deepDive: [
        {
          heading: 'वैलिडेशन रूल्स (Complex Validations)',
          content: 'उदाहरण: अगर किसी ने "हत्या" की धारा (Section 302) सेलेक्ट की है, तो सिस्टम अनिवार्य रूप से क्राइम सीन की फोटो मांगेगा, वरना FIR सेव नहीं होगी।'
        },
        {
          heading: 'हाइरार्की वर्कफ़्लो (Hierarchy Workflow)',
          content: 'सिस्टम पुलिस विभाग की रैंक (Rank) समझता है। इंस्पेक्टर की रिपोर्ट सीधा SP को नहीं जाएगी, वह पहले DSP/CO की स्क्रीन पर अप्रूवल के लिए रुकेगी।'
        }
      ]
    },
    {
      id: 5,
      title: 'Security Requirements',
      subtitle: 'बैकएंड सुरक्षा',
      icon: Shield,
      color: '#ef4444',
      items: [
        'मल्टी-फैक्टर ऑथेंटिकेशन (MFA): पासवर्ड के अलावा OTP या बायोमेट्रिक से अतिरिक्त सुरक्षा (JWT, OAuth2)।',
        'रोल-बेस्ड एक्सेस (RBAC): सुनिश्चित करना कि कॉन्स्टेबल SP की रिपोर्ट न देख सके और SP सब कुछ देख सके।',
        'डेटा एन्क्रिप्शन (Encryption): डेटाबेस में रखे गए संवेदनशील केस रिकॉर्ड्स को एन्क्रिप्ट (Encrypt) करके लॉक करना।',
        'साइबर हमलों से बचाव (Protection): API रेट लिमिटिंग, SQL Injection और XSS अटैक्स से सिस्टम को बचाना।'
      ],
      example: 'लक्ष्य: पुलिस डेटा को किसी भी हैकिंग या अनधिकृत एक्सेस (Unauthorized Access) से 100% सुरक्षित रखना।',
      deepDive: [
        {
          heading: 'डेटा एन्क्रिप्शन (At Rest & In Transit)',
          content: 'डेटाबेस में सेव होने वाला हर पासवर्ड और केस डायरी AES-256 एन्क्रिप्शन से लॉक होगी, और सर्वर से मोबाइल तक का डेटा TLS 1.3 टनल से गुज़रेगा।'
        },
        {
          heading: 'एसक्यूएल इंजेक्शन बचाव (SQL Injection)',
          content: 'Entity Framework Core (ORM) का इस्तेमाल करके सभी डेटाबेस क्वेरीज (Queries) को सुरक्षित बनाया जायेगा ताकि कोई सर्च बॉक्स में कमांड टाइप करके डेटा उड़ा न सके।'
        }
      ]
    },
    {
      id: 6,
      title: 'File Management',
      subtitle: 'फाइल स्टोरेज',
      icon: HardDrive,
      color: '#8b5cf6',
      items: [
        'फाइल अपलोड (File Uploads): CCTV फुटेज, क्राइम सीन की तस्वीरें और PDF दस्तावेज़ों को तेज़ी से अपलोड करना।',
        'क्लाउड स्टोरेज (Storage): भारी वीडियो और इमेजेज को सुरक्षित AWS S3 या Azure Blob स्टोरेज में सेव करना।',
        'डिजिटल सिग्नेचर (Digital Sign): ऑनलाइन FIR और रिपोर्ट्स पर अधिकारियों के ई-हस्ताक्षर (E-signature) को मान्य करना।'
      ],
      example: 'लक्ष्य: डिजिटल सबूतों (Evidence) को कानूनी रूप से सुरक्षित रखना ताकि वे कोर्ट में मान्य हों।',
      deepDive: [
        {
          heading: 'ऑब्जेक्ट स्टोरेज (S3 / Blob)',
          content: 'फोटो और वीडियो को डेटाबेस में सेव करने के बजाय क्लाउड के S3 स्टोरेज में रखा जायेगा। डेटाबेस में केवल उसका लिंक (URL) होगा, इससे सर्वर कभी फुल नहीं होगा।'
        },
        {
          heading: 'वायरस स्कैन (Anti-Virus Scan)',
          content: 'जैसे ही कोई अधिकारी सबूत (PDF/Image) अपलोड करेगा, बैकएंड उसे 2 सेकंड में स्कैन करेगा ताकि सर्वर में कोई वायरस न आ जाए।'
        }
      ]
    },
    {
      id: 7,
      title: 'Caching',
      subtitle: 'रफ़्तार बढ़ाने के लिए',
      icon: Zap,
      color: '#14b8a6',
      items: [
        'रेडिस कैश (Redis Cache): बार-बार सर्च की जाने वाली जानकारी (जैसे - शहर का नाम, धाराओं की लिस्ट) को मेमोरी में सेव करना।',
        'फास्ट रिस्पांस (Fast Response): डेटाबेस तक जाए बिना ही यूज़र को मिलीसेकंड्स (Milliseconds) में डेटा वापस कर देना।',
        'डिस्ट्रीब्यूटेड कैश (Distributed): अगर 10,000 पुलिसकर्मी एक साथ लॉगिन करें, तो भी सर्वर की स्पीड धीमी न पड़े।'
      ],
      example: 'लक्ष्य: पुलिस के लिए सॉफ्टवेयर को रॉकेट (Rocket) की तरह तेज़ बनाना, चाहे कितना भी लोड हो।',
      deepDive: [
        {
          heading: 'रेडिस कैशिंग (Redis In-Memory)',
          content: 'थाने के नाम, IPC/BNS की धाराएं, और शहर के पिनकोड जैसी चीजें जो कभी नहीं बदलतीं, उन्हें रैम (RAM) में रखा जायेगा ताकि वे 0.1 सेकंड में खुल जाएँ।'
        },
        {
          heading: 'क्वेरी रिजल्ट कैशिंग (Query Cache)',
          content: 'अगर SP साहब ने सुबह जिले की पूरी रिपोर्ट मंगा ली है, तो वही रिपोर्ट 1 घंटे तक कैश (Cache) में रहेगी ताकि दोबारा मंगाने पर सर्वर पर लोड न पड़े।'
        }
      ]
    },
    {
      id: 8,
      title: 'Background Services',
      subtitle: 'बैकग्राउंड टास्क',
      icon: Server,
      color: '#f97316',
      items: [
        'शेड्यूल्ड जॉब्स (Scheduled Jobs): हर रात 12 बजे ऑटोमैटिक रूप से सभी थानों का डेटा बैकअप (Backup) लेना।',
        'नोटिफिकेशन सर्विस (Notification): बैकग्राउंड में ईमेल, SMS और अलर्ट्स भेजना ताकि ऐप स्लो न हो।',
        'ऑटोमैटिक रिपोर्ट (Auto Report): महीने के अंत में खुद-ब-खुद पूरे जिले की क्राइम रिपोर्ट जनरेट करके SP को भेजना।',
        'डेटा सिंक (Data Sync): लोकल सर्वर का डेटा मुख्य स्टेट (State) सर्वर के साथ सिंक करना।'
      ],
      example: 'लक्ष्य: बैकग्राउंड में होने वाले रूटीन कामों को ऑटोमैटिक (Automatic) बनाना ताकि समय बचे।',
      deepDive: [
        {
          heading: 'हैंगफायर (Hangfire Integration)',
          content: 'Hangfire नाम के टूल से जॉब्स को शेड्यूल किया जाएगा (जैसे अलार्म लगाना)। अगर बीच में सर्वर बंद भी हो जाए, तो चालू होने पर बैकअप का काम वहीं से शुरू होगा जहाँ से रुका था।'
        },
        {
          heading: 'मैसेज क्यू (RabbitMQ / Kafka)',
          content: 'जब एक साथ 1000 SMS भेजने हों, तो सर्वर रुकेगा नहीं। वह सारे SMS एक कतार (Queue) में डाल देगा और बैकग्राउंड सर्विस उन्हें एक-एक करके भेजती रहेगी।'
        }
      ]
    },
    {
      id: 9,
      title: 'Logging & Monitoring',
      subtitle: 'सिस्टम मॉनिटरिंग',
      icon: Activity,
      color: '#6366f1',
      items: [
        'ऑडिट ट्रेल (Audit Trail): कौन से अधिकारी ने, कितने बजे, किस केस फाइल में क्या बदलाव किया—इसकी पूरी ट्रैकिंग।',
        'एरर लॉग्स (Error Logs): अगर सिस्टम में कोई तकनीकी गड़बड़ी आती है, तो उसे चुपचाप लॉग में सेव करना ताकि डेवलपर्स ठीक कर सकें।',
        'परफॉरमेंस मॉनिटरिंग (Performance): सर्वर की हेल्थ (Health), CPU इस्तेमाल और मेमोरी (RAM) पर रियल-टाइम नज़र रखना।'
      ],
      example: 'लक्ष्य: सिस्टम में होने वाली हर छोटी-बड़ी गतिविधि पर पैनी नज़र (Monitoring) रखना।',
      deepDive: [
        {
          heading: 'ऑडिट ट्रेल (Strict Audit Log)',
          content: 'सिस्टम में कुछ भी डिलीट नहीं होगा (Soft Delete)। अगर कोई पुरानी FIR में बदलाव करता है, तो पुरानी और नई लाइन का पूरा रिकॉर्ड टाइमस्टैम्प (Timestamp) के साथ सेव होगा।'
        },
        {
          heading: 'सेरीलॉग और किबाना (Serilog + ELK)',
          content: 'सर्वर में आने वाले सारे एरर (Errors) एक सेंट्रलाइज़्ड डैशबोर्ड (Kibana) पर दिखाई देंगे। जिससे डेवलपर्स पुलिस को बिना बताए समस्या हल कर सकेंगे।'
        }
      ]
    }
  ];

  const techStack = [
    { cat: 'Backend Framework', tool: 'ASP.NET Core Web API' },
    { cat: 'Database & ORM', tool: 'SQL Server, Entity Framework Core' },
    { cat: 'Caching & Jobs', tool: 'Redis, Hangfire' },
    { cat: 'Authentication', tool: 'JWT, Identity Server' },
    { cat: 'Documentation', tool: 'Swagger' },
    { cat: 'Logging', tool: 'Serilog' },
    { cat: 'Containerization', tool: 'Docker' }
  ];

  const deliverables = [
    'API Architecture',
    'Database Integration',
    'Authentication System',
    'Business Logic',
    'Security Implementation',
    'Logging & Monitoring',
    'AI Service Integration',
    'Documentation',
    'Deployment Package',
    'Production APIs'
  ];

  if (selectedDetail !== null) {
    const detailItem = reqData.find(item => item.id === selectedDetail);
    if (!detailItem) return null;
    const DetailIcon = detailItem.icon;
    
    return (
      <div className="fullscreen-flow-view" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
        <button onClick={() => setSelectedDetail(null)} className="back-button" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'white', borderRadius: '0.5rem', color: '#0f172a', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Phase 4
        </button>
        
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <DetailIcon size={40} color={detailItem.color} />
            <h3 style={{ margin: 0, fontSize: '2rem', color: '#0f172a' }}>{detailItem.title}</h3>
          </div>
          
          <div style={{ background: 'white', padding: '2.5rem', borderRadius: '1.5rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
            <h4 style={{ fontSize: '1.25rem', color: '#1e293b', marginBottom: '1.5rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.75rem' }}>
              {detailItem.subtitle} - विस्तृत जानकारी (Overview)
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
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

            {/* Deep Dive Extra Details Section */}
            {detailItem.deepDive && detailItem.deepDive.length > 0 && (
              <div style={{ marginTop: '2.5rem' }}>
                <h4 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Info size={22} color={detailItem.color} />
                  गहराई से जानकारी (Deep Dive Details)
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                  {detailItem.deepDive.map((dive, idx) => (
                    <div key={idx} style={{ 
                      background: '#f8fafc', padding: '1.5rem', borderRadius: '1rem', 
                      border: '1px solid #e2e8f0', boxShadow: 'inset 0 2px 4px 0 rgba(0,0,0,0.02)'
                    }}>
                      <h5 style={{ margin: '0 0 0.75rem 0', fontSize: '1.1rem', color: detailItem.color, fontWeight: 'bold' }}>
                        {dive.heading}
                      </h5>
                      <p style={{ margin: 0, color: '#475569', lineHeight: '1.6', fontSize: '0.95rem' }}>
                        {dive.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {detailItem.example && (
              <div style={{ marginTop: '2.5rem', padding: '1.75rem', background: '#f0fdf4', borderRadius: '1rem', border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ background: '#dcfce7', padding: '1.25rem', borderRadius: '50%' }}><Target size={32} color="#16a34a" /></div>
                <div>
                  <h4 style={{ color: '#166534', margin: '0 0 0.25rem 0', fontSize: '1.2rem' }}>Ultimate Goal (अंतिम लक्ष्य)</h4>
                  <p style={{ margin: 0, color: '#15803d', fontSize: '1.1rem', fontStyle: 'italic', fontWeight: '500' }}>
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
            <Server size={28} color="#f59e0b" />
            Phase 4: Backend Development
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            बैकएंड डेवलपमेंट - सॉफ़्टवेयर का वह भाग जो Business Logic, APIs, Database और Authentication को संभालता है।
          </p>
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
                    {box.items.map((item, idx) => {
                      const title = item.split(':')[0];
                      return (
                        <div key={idx} style={{ 
                          background: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.5rem 0.75rem', 
                          borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
                          fontSize: '0.85rem', color: '#334155', fontWeight: '500'
                        }}>
                          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: box.color, flexShrink: 0 }}></div>
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</span>
                        </div>
                      );
                    })}
                  </div>
                  
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

      {/* Architecture Flows & Diagrams */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        
        {/* Basic Architecture Flow */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#3b82f615', padding: '0.75rem', borderRadius: '0.5rem', color: '#3b82f6' }}><Server size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Backend Architecture Flow</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
            <div style={{ background: '#dbeafe', color: '#1e40af', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold' }}>Client (Web/Mobile)</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#fef3c7', color: '#b45309', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold' }}>API Gateway</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#fce7f3', color: '#9d174d', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold' }}>Authentication</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#e0e7ff', color: '#3730a3', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold' }}>Business Logic</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#d1fae5', color: '#047857', padding: '0.6rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold' }}>Data Access Layer</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#f3f4f6', color: '#1f2937', padding: '0.6rem 2rem', borderRadius: '0.5rem', border: '2px solid #9ca3af', fontWeight: 'bold' }}>Database</div>
          </div>
        </div>

        {/* Enterprise Architecture (.NET + AI) */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#8b5cf615', padding: '0.75rem', borderRadius: '0.5rem', color: '#8b5cf6' }}><Network size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Enterprise Architecture (.NET + AI)</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
            <div style={{ width: '80%', textAlign: 'center', background: '#f1f5f9', color: '#334155', padding: '0.6rem 1rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #cbd5e1' }}>Presentation Layer</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ width: '80%', textAlign: 'center', background: '#eff6ff', color: '#1d4ed8', padding: '0.6rem 1rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #bfdbfe' }}>API Layer</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ width: '80%', textAlign: 'center', background: '#fdf4ff', color: '#a21caf', padding: '0.6rem 1rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #f5d0fe' }}>Business Layer</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ width: '80%', textAlign: 'center', background: '#ecfdf5', color: '#047857', padding: '0.6rem 1rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #a7f3d0' }}>Repository Layer</div>
            <div style={{ display: 'flex', gap: '1rem', width: '80%', justifyContent: 'center', marginTop: '0.5rem' }}>
              <div style={{ flex: 1, textAlign: 'center', background: '#fef2f2', color: '#b91c1c', padding: '0.6rem 1rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #fecaca' }}>Database Layer</div>
              <div style={{ flex: 1, textAlign: 'center', background: '#fffbeb', color: '#b45309', padding: '0.6rem 1rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #fde68a' }}>AI Services Layer</div>
            </div>
          </div>
        </div>

        {/* AI Backend Requirements Flow */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#ec489915', padding: '0.75rem', borderRadius: '0.5rem', color: '#ec4899' }}><BrainCircuit size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>AI Backend Requirements</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div style={{ background: '#f8fafc', color: '#334155', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #e2e8f0' }}>Application</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#fdf2f8', color: '#be185d', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #fbcfe8' }}>AI Service</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#f0fdf4', color: '#15803d', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #bbf7d0' }}>Machine Learning Model</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#fff7ed', color: '#c2410c', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #ffedd5' }}>Prediction Engine</div>
            <div style={{ color: '#94a3b8' }}>↓</div>
            <div style={{ background: '#eff6ff', color: '#1d4ed8', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #bfdbfe' }}>Results API</div>
          </div>
          <div style={{ background: '#f1f5f9', padding: '1rem', borderRadius: '0.5rem' }}>
            <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold', color: '#334155', fontSize: '0.9rem' }}>AI Features:</p>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#475569', fontSize: '0.85rem' }}>
              <li>Model Inference & Prediction API</li>
              <li>Recommendation API</li>
              <li>OCR & NLP Service</li>
              <li>Speech Processing Service</li>
            </ul>
          </div>
        </div>
        
        {/* Database Integration Flow */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#10b98115', padding: '0.75rem', borderRadius: '0.5rem', color: '#10b981' }}><Database size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Database Integration</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <div style={{ background: '#eff6ff', color: '#1e40af', padding: '1rem 3rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '70%', textAlign: 'center' }}>Backend</div>
            <div style={{ color: '#94a3b8', fontSize: '1.5rem', margin: '-0.5rem 0' }}>↓</div>
            <div style={{ background: '#f5f3ff', color: '#5b21b6', padding: '1rem 3rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '70%', textAlign: 'center' }}>Repository Layer</div>
            <div style={{ color: '#94a3b8', fontSize: '1.5rem', margin: '-0.5rem 0' }}>↓</div>
            <div style={{ background: '#ecfdf5', color: '#065f46', padding: '1rem 3rem', borderRadius: '0.5rem', fontWeight: 'bold', width: '70%', textAlign: 'center' }}>ORM (Entity Framework)</div>
            <div style={{ color: '#94a3b8', fontSize: '1.5rem', margin: '-0.5rem 0' }}>↓</div>
            <div style={{ background: '#fef2f2', color: '#991b1b', padding: '1rem 3rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '2px solid #fca5a5', width: '70%', textAlign: 'center' }}>SQL Server</div>
          </div>
        </div>

      </div>

      {/* Lists (Deliverables & Recommended Stack) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
        
        {/* Suggested Tech Stack */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#f59e0b15', padding: '0.75rem', borderRadius: '0.5rem', color: '#f59e0b' }}><FileText size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Recommended Tech Stack</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {techStack.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 1rem', background: '#f8fafc', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                <span style={{ color: '#64748b', fontWeight: '500', fontSize: '0.9rem' }}>{item.cat}</span>
                <span style={{ color: '#0f172a', fontWeight: 'bold', fontSize: '0.9rem' }}>{item.tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#10b98115', padding: '0.75rem', borderRadius: '0.5rem', color: '#10b981' }}><FileSignature size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Backend Deliverables</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {deliverables.map((doc, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', background: '#f0fdf4', borderRadius: '0.5rem', border: '1px solid #dcfce7' }}>
                <CheckCircle size={16} color="#10b981" />
                <span style={{ color: '#166534', fontSize: '0.85rem', fontWeight: '500' }}>{doc}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
