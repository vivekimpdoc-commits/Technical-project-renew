import React, { useState } from 'react';
import { 
  ChevronLeft, ChevronRight, Presentation, BookOpen, Search, 
  Layout, Code, Activity, Server, Shield, Brain, Target, 
  GraduationCap, Lightbulb, ShieldAlert, Cpu, Lock, Globe,
  Eye, TrendingUp, Users, CheckCircle, Maximize, Minimize,
  Building, Building2, Map, Bot, FileText, Siren, Briefcase, Network
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function ProjectPPTDashboard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState('en');
  const [activePpt, setActivePpt] = useState('step-up');
  const [isFullscreen, setIsFullscreen] = useState(false);

  // -------------------------
  // 1. STEP UP LITERACY SLIDES
  // -------------------------
  const slides = [
    {
      id: 1,
      titleEn: "Step Up Literacy Software",
      titleHi: "स्टेप अप साक्षरता सॉफ्टवेयर",
      subtitleEn: "AI Project Lifecycle & Complete SDLC Overview",
      subtitleHi: "एआई प्रोजेक्ट लाइफसाइकिल और संपूर्ण SDLC का विस्तृत अवलोकन",
      contentEn: [
        "Welcome to the official presentation for the Step Up Literacy Software.",
        "This presentation outlines our complete Software Development Life Cycle (SDLC) from ideation to launch.",
        "We are integrating modern AI technologies, Cloud Infrastructure, and DevSecOps to build a highly secure and robust platform.",
        "Use the Next button to navigate through the 10 distinct phases of our engineering process."
      ],
      contentHi: [
        "स्टेप अप साक्षरता सॉफ्टवेयर की आधिकारिक प्रस्तुति में आपका स्वागत है।",
        "यह प्रेजेंटेशन हमारे पूरे सॉफ्टवेयर डेवलपमेंट लाइफ साइकिल (SDLC) को शुरुआत से अंत तक दर्शाता है।",
        "हम एक सुरक्षित और मजबूत प्लेटफॉर्म बनाने के लिए आधुनिक AI तकनीक, क्लाउड और DevSecOps का उपयोग कर रहे हैं।",
        "हमारी इंजीनियरिंग प्रक्रिया के 10 अलग-अलग चरणों को देखने के लिए 'Next' (अगली स्लाइड) बटन का उपयोग करें।"
      ],
      icon: Presentation,
      color: "#3b82f6",
      image: "/assets/step_up_intro_1783686424622.png"
    },
    {
      id: 2,
      titleEn: "The Problem Statement",
      titleHi: "समस्या का विवरण (Problem Statement)",
      subtitleEn: "Why do we need this software?",
      subtitleHi: "हमें इस सॉफ्टवेयर की आवश्यकता क्यों है?",
      contentEn: [
        "Current Manual Processes: Excessive paperwork slows down administrative tasks and data retrieval.",
        "Data Silos: Information is scattered across different departments making collaboration difficult.",
        "Lack of Real-time Insights: Officers cannot quickly access historical data to make fast decisions.",
        "Security Risks: Physical files are prone to loss, damage, or unauthorized access."
      ],
      contentHi: [
        "वर्तमान मैन्युअल प्रक्रिया: अत्यधिक कागजी कार्रवाई प्रशासनिक कार्यों और डेटा खोजने को धीमा कर देती है।",
        "डेटा बिखराव: जानकारी अलग-अलग विभागों में फैली हुई है जिससे टीम वर्क मुश्किल हो जाता है।",
        "रियल-टाइम डेटा की कमी: अधिकारी तुरंत निर्णय लेने के लिए पुराने रिकॉर्ड जल्दी नहीं देख पाते।",
        "सुरक्षा जोखिम: भौतिक फाइलों (Physical files) के खोने, खराब होने या चोरी होने का खतरा रहता है।"
      ],
      icon: Search,
      color: "#ef4444",
      image: "/assets/step_up_police_1783686435426.png"
    },
    {
      id: 3,
      titleEn: "Our Solution & Vision",
      titleHi: "हमारा समाधान और विज़न",
      subtitleEn: "A centralized, AI-driven platform",
      subtitleHi: "एक केंद्रीकृत, एआई-संचालित प्लेटफॉर्म",
      contentEn: [
        "Digital Transformation: Converting all paperwork into a secure, searchable digital format.",
        "Centralized Database: A single source of truth for the entire department.",
        "AI-Powered Insights: Using Machine Learning to predict trends and automate repetitive tasks.",
        "Enhanced Security: Enterprise-grade encryption to protect sensitive data at all times."
      ],
      contentHi: [
        "डिजिटल ट्रांसफॉर्मेशन: सभी कागजी कार्रवाई को सुरक्षित, खोजने योग्य डिजिटल प्रारूप में बदलना।",
        "केंद्रीकृत डेटाबेस: पूरे विभाग के लिए डेटा का एक सुरक्षित और केंद्रीय स्रोत।",
        "AI-संचालित इनसाइट्स: प्रवृत्तियों (Trends) की भविष्यवाणी करने और बार-बार होने वाले कार्यों को ऑटोमेट करने के लिए मशीन लर्निंग।",
        "बेहतर सुरक्षा: संवेदनशील डेटा की सुरक्षा के लिए एंटरप्राइज़-ग्रेड एन्क्रिप्शन।"
      ],
      icon: Lightbulb,
      color: "#f59e0b"
    },
    {
      id: 4,
      titleEn: "Phase 1: Requirements Gathering",
      titleHi: "चरण 1: ज़रूरतों को समझना (Requirements)",
      subtitleEn: "Understanding needs at the ground level",
      subtitleHi: "ज़मीनी स्तर पर ज़रूरतों को समझना",
      contentEn: [
        "Stakeholder Meetings: Regular discussions with officers to understand their daily challenges.",
        "User Roles Definition: Creating custom access levels for Admin, SP, Inspector, and Constables.",
        "Functional Requirements: Listing exact features (e.g., FIR Upload, Search, Case Tracking).",
        "Non-Functional Requirements: Defining speed parameters, server uptime (99.9%), and load capacity."
      ],
      contentHi: [
        "अधिकारियों के साथ बैठकें: उनकी दैनिक चुनौतियों को समझने के लिए नियमित चर्चा।",
        "उपयोगकर्ता की भूमिकाएँ: SP, इंस्पेक्टर और कॉन्स्टेबल के लिए अलग-अलग एक्सेस लेवल (Access Levels) बनाना।",
        "कार्यात्मक आवश्यकताएं: सटीक फीचर्स तय करना (जैसे, FIR अपलोड, सर्च, केस ट्रैकिंग)।",
        "गैर-कार्यात्मक आवश्यकताएं: गति (Speed), सर्वर अपटाइम (99.9%) और लोड क्षमता तय करना।"
      ],
      icon: Users,
      color: "#10b981"
    },
    {
      id: 5,
      titleEn: "Phase 2: UI/UX Design",
      titleHi: "चरण 2: UI/UX डिज़ाइन (Design)",
      subtitleEn: "User experience and interface creation",
      subtitleHi: "उपयोगकर्ता अनुभव और इंटरफेस का निर्माण",
      contentEn: [
        "Wireframing (Figma): Creating the structural blueprint of screens without colors.",
        "Prototyping: Building clickable models so users can feel the navigation before coding begins.",
        "Visual Design: Applying the official department color scheme, typography, and premium aesthetics.",
        "Accessibility: Ensuring the app is easy to use for everyone, including those with poor eyesight."
      ],
      contentHi: [
        "वायरफ्रेमिंग (Figma): बिना रंग के स्क्रीन्स का बुनियादी ढांचा (Blueprint) बनाना।",
        "प्रोटोटाइपिंग: क्लिक करने योग्य मॉडल बनाना ताकि कोडिंग से पहले यूज़र्स इसे चला कर देख सकें।",
        "विज़ुअल डिज़ाइन: विभाग के आधिकारिक रंगों, टाइपोग्राफी और प्रीमियम लुक का उपयोग करना।",
        "सरल उपयोग (Accessibility): यह सुनिश्चित करना कि ऐप सभी के लिए उपयोग में आसान हो।"
      ],
      icon: Layout,
      color: "#8b5cf6"
    },
    {
      id: 6,
      titleEn: "Phase 3 & 4: Core Development",
      titleHi: "चरण 3 और 4: कोर डेवलपमेंट",
      subtitleEn: "Frontend and Backend programming",
      subtitleHi: "फ्रंटेंड और बैकेंड प्रोग्रामिंग",
      contentEn: [
        "Frontend (React.js): Building dynamic, responsive user interfaces that work perfectly on mobile and desktop.",
        "Backend (Node.js/Python): Writing robust business logic and secure API endpoints.",
        "Database Architecture (PostgreSQL/MongoDB): Structuring data for fast retrieval and secure storage.",
        "API Integration: Connecting the visual frontend with the backend servers seamlessly."
      ],
      contentHi: [
        "फ्रंटेंड (React.js): डायनामिक और रेस्पॉन्सिव यूज़र इंटरफेस बनाना जो मोबाइल और कंप्यूटर दोनों पर चले।",
        "बैकेंड (Node.js/Python): मजबूत बिज़नेस लॉजिक और सुरक्षित API एंडपॉइंट लिखना।",
        "डेटाबेस आर्किटेक्चर: तेज़ गति और सुरक्षित स्टोरेज के लिए डेटा को सही ढंग से व्यवस्थित करना।",
        "API इंटीग्रेशन: विज़ुअल फ्रंटेंड को बैकेंड सर्वर के साथ निर्बाध रूप से जोड़ना।"
      ],
      icon: Code,
      color: "#ec4899",
      image: "/assets/step_up_dev_1783686446734.png"
    },
    {
      id: 7,
      titleEn: "Phase 5: Testing & QA",
      titleHi: "चरण 5: टेस्टिंग और QA (Testing)",
      subtitleEn: "In-depth software evaluation",
      subtitleHi: "सॉफ्टवेयर की गहन जांच",
      contentEn: [
        "Unit Testing: Testing individual functions and components for correctness.",
        "Integration Testing: Ensuring all modules communicate with each other flawlessly.",
        "User Acceptance Testing (UAT): Final testing phase done by actual police officers.",
        "Performance Testing: Stress-testing the servers to handle thousands of users simultaneously."
      ],
      contentHi: [
        "यूनिट टेस्टिंग: सत्यता के लिए अलग-अलग फ़ंक्शंस और घटकों (components) का परीक्षण करना।",
        "इंटीग्रेशन टेस्टिंग: यह सुनिश्चित करना कि सभी मॉड्यूल एक-दूसरे के साथ ठीक से काम करें।",
        "UAT (यूज़र टेस्टिंग): असल पुलिस अधिकारियों द्वारा की जाने वाली अंतिम जाँच।",
        "परफॉरमेंस टेस्टिंग: एक साथ हजारों यूज़र्स का लोड संभालने के लिए सर्वर की टेस्टिंग।"
      ],
      icon: Activity,
      color: "#f97316"
    },
    {
      id: 8,
      titleEn: "Phase 6 & 7: Deployment & Maintenance",
      titleHi: "चरण 6 और 7: डिप्लॉयमेंट और सपोर्ट",
      subtitleEn: "Launch and continuous maintenance",
      subtitleHi: "सॉफ्टवेयर का लॉन्च और निरंतर रखरखाव",
      contentEn: [
        "CI/CD Pipeline: Automating code deployment for faster, error-free updates (Jenkins/GitHub Actions).",
        "Cloud Hosting (AWS/Azure): Deploying on scalable government-approved cloud servers.",
        "24/7 Monitoring: Using tools like Datadog or Prometheus to track server health and crash reports.",
        "Continuous Maintenance: Releasing monthly security patches, bug fixes, and new features."
      ],
      contentHi: [
        "CI/CD पाइपलाइन: तेज़ और त्रुटि-मुक्त अपडेट के लिए कोड डिप्लॉयमेंट को ऑटोमेट करना।",
        "क्लाउड होस्टिंग: सरकार द्वारा अप्रूव्ड स्केलेबल क्लाउड सर्वर (AWS/Azure) पर लाइव करना।",
        "24/7 मॉनिटरिंग: सर्वर के स्वास्थ्य और क्रैश रिपोर्ट को ट्रैक करने के लिए विशेष टूल का उपयोग।",
        "निरंतर रखरखाव: हर महीने सुरक्षा पैच (Security patches), बग फिक्स और नए फीचर्स जारी करना।"
      ],
      icon: Server,
      color: "#14b8a6"
    },
    {
      id: 9,
      titleEn: "Advanced Tech: AI & DevSecOps",
      titleHi: "आधुनिक तकनीक: AI और DevSecOps",
      subtitleEn: "Future-proofing the software architecture",
      subtitleHi: "सॉफ्टवेयर आर्किटेक्चर को भविष्य के लिए तैयार करना",
      contentEn: [
        "DevSecOps Integration: Embedding security protocols directly into the code from day one.",
        "AI Smart Search: Allowing users to search databases using natural language queries.",
        "Microservices Architecture: Breaking down the app into small services so one crash doesn't bring down the whole system.",
        "Data Analytics Dashboard: Visualizing crime trends via interactive charts and heatmaps."
      ],
      contentHi: [
        "DevSecOps इंटीग्रेशन: पहले दिन से ही कोड के अंदर सुरक्षा प्रोटोकॉल (Security) को शामिल करना।",
        "AI स्मार्ट सर्च: यूज़र्स को सामान्य भाषा (Natural language) में डेटाबेस खोजने की सुविधा देना।",
        "माइक्रो-सर्विसेज: ऐप को छोटी सेवाओं में बाँटना ताकि एक खराबी पूरे सिस्टम को बंद न कर दे।",
        "डेटा एनालिटिक्स डैशबोर्ड: इंटरैक्टिव चार्ट्स और हीटमैप्स के जरिए अपराध के रुझान (Trends) दिखाना।"
      ],
      icon: Shield,
      color: "#06b6d4"
    },
    {
      id: 10,
      titleEn: "Conclusion & Future Scope",
      titleHi: "निष्कर्ष और भविष्य की योजनाएँ",
      subtitleEn: "What's next for Step Up Literacy?",
      subtitleHi: "स्टेप अप साक्षरता के लिए आगे क्या है?",
      contentEn: [
        "Scalability to Other Districts: Ready to be deployed state-wide seamlessly.",
        "Mobile App Version: Planning a native iOS and Android app for on-the-go officers.",
        "IoT Integration: Connecting with smart city cameras and IoT devices in the future.",
        "End of Presentation: Thank you for exploring the complete SDLC with us."
      ],
      contentHi: [
        "अन्य जिलों में विस्तार: पूरे राज्य (State-wide) में आसानी से लागू करने के लिए तैयार।",
        "मोबाइल ऐप वर्ज़न: फील्ड पर मौजूद अधिकारियों के लिए iOS और Android ऐप की योजना।",
        "IoT इंटीग्रेशन: भविष्य में स्मार्ट सिटी कैमरों और IoT डिवाइस के साथ जोड़ना।",
        "प्रस्तुति का अंत: हमारे साथ पूरी SDLC प्रक्रिया को समझने के लिए आपका धन्यवाद।"
      ],
      icon: TrendingUp,
      color: "#6366f1"
    }
  ];

  // -------------------------
  // 2. AI COURSE SLIDES
  // -------------------------
  const aiCourseSlides = [
    {
      id: 1,
      titleEn: "Artificial Intelligence (AI) Course",
      titleHi: "आर्टिफिशियल इंटेलिजेंस (AI) कोर्स",
      subtitleEn: "Empowering UP Police with AI Knowledge",
      subtitleHi: "यूपी पुलिस को एआई के ज्ञान से सशक्त बनाना",
      contentEn: [
        "Welcome to the comprehensive AI Training Course presentation.",
        "This course is specifically designed to train police officers in modern AI technologies.",
        "We cover everything from the basics of AI to its advanced applications in crime investigation.",
        "Navigate through to see the 10 detailed modules of this training program."
      ],
      contentHi: [
        "विस्तृत AI ट्रेनिंग कोर्स प्रेजेंटेशन में आपका स्वागत है।",
        "यह कोर्स विशेष रूप से पुलिस अधिकारियों को आधुनिक AI तकनीकों में प्रशिक्षित करने के लिए बनाया गया है।",
        "हम AI के मूल सिद्धांतों से लेकर अपराध जांच में इसके एडवांस उपयोग तक सब कुछ कवर करते हैं।",
        "इस ट्रेनिंग प्रोग्राम के 10 विस्तृत मॉड्यूल देखने के लिए आगे बढ़ें।"
      ],
      icon: GraduationCap,
      color: "#8b5cf6",
      image: "/assets/ai_course_intro_1783686457100.png"
    },
    {
      id: 2,
      titleEn: "Why AI in Policing?",
      titleHi: "पुलिसिंग में AI की आवश्यकता क्यों?",
      subtitleEn: "The need for modernization",
      subtitleHi: "आधुनिकीकरण की तत्काल आवश्यकता",
      contentEn: [
        "Volume of Data: Modern crimes generate massive digital footprints that humans can't process alone.",
        "Speed of Investigation: AI can scan 1000 hours of CCTV footage in minutes.",
        "Proactive vs Reactive: Shifting from responding to crimes to predicting and preventing them.",
        "Resource Optimization: Doing more with fewer personnel by automating repetitive tasks."
      ],
      contentHi: [
        "डेटा की भारी मात्रा: आधुनिक अपराधों में इतना डिजिटल डेटा होता है जिसे इंसान अकेले नहीं पढ़ सकता।",
        "जांच की गति: AI कुछ ही मिनटों में 1000 घंटे की CCTV फुटेज स्कैन कर सकता है।",
        "सक्रिय दृष्टिकोण: अपराध होने के बाद कार्रवाई करने की बजाय उसे पहले ही रोकने की ओर बढ़ना।",
        "संसाधन अनुकूलन: बार-बार होने वाले काम को ऑटोमेट करके कम कर्मचारियों के साथ ज्यादा काम करना।"
      ],
      icon: Brain,
      color: "#ef4444"
    },
    {
      id: 3,
      titleEn: "Module 1: AI Fundamentals",
      titleHi: "मॉड्यूल 1: एआई के मूल सिद्धांत",
      subtitleEn: "What is AI, ML, and Deep Learning?",
      subtitleHi: "AI, मशीन लर्निंग और डीप लर्निंग क्या है?",
      contentEn: [
        "AI Defined: Teaching computers to mimic human intelligence and decision making.",
        "Machine Learning (ML): Algorithms that learn from historical crime data without being explicitly programmed.",
        "Deep Learning: Neural networks that act like the human brain to process images and audio.",
        "Generative AI: Using AI to generate reports, translate languages, and draft FIRs automatically."
      ],
      contentHi: [
        "AI की परिभाषा: कंप्यूटर को इंसानी बुद्धि और निर्णय लेने की क्षमता सिखाना।",
        "मशीन लर्निंग (ML): ऐसे एल्गोरिदम जो पुराने अपराध डेटा से खुद सीखते हैं।",
        "डीप लर्निंग (Deep Learning): इमेज और ऑडियो प्रोसेस करने के लिए इंसानी दिमाग की तरह काम करने वाले नेटवर्क।",
        "जेनरेटिव AI: रिपोर्ट बनाने, भाषा अनुवाद करने और ऑटोमैटिक FIR ड्राफ्ट करने के लिए AI का उपयोग।"
      ],
      icon: BookOpen,
      color: "#f59e0b"
    },
    {
      id: 4,
      titleEn: "Module 2: Computer Vision",
      titleHi: "मॉड्यूल 2: कंप्यूटर विज़न और फेशियल रिकग्निशन",
      subtitleEn: "Giving eyes to the system",
      subtitleHi: "सिस्टम को देखने की क्षमता देना",
      contentEn: [
        "Facial Recognition: Identifying suspects in crowds using real-time camera feeds.",
        "License Plate Reading (ANPR): Automatically tracking stolen or suspicious vehicles across the city.",
        "Behavioral Analysis: Detecting unusual crowd movements or violent actions in public spaces.",
        "Video Summarization: Creating a 5-minute summary of a 24-hour security footage."
      ],
      contentHi: [
        "फेशियल रिकग्निशन (Facial Recognition): लाइव कैमरे से भीड़ में संदिग्धों की पहचान करना।",
        "नंबर प्लेट रीडिंग (ANPR): पूरे शहर में चोरी हुए या संदिग्ध वाहनों को अपने आप ट्रैक करना।",
        "व्यवहार विश्लेषण: सार्वजनिक स्थानों पर भीड़ की असामान्य हलचल या हिंसा का पता लगाना।",
        "वीडियो संक्षिप्तीकरण: 24 घंटे की सुरक्षा फुटेज को सिर्फ 5 मिनट के सारांश में बदलना।"
      ],
      icon: Eye,
      color: "#10b981",
      image: "/assets/ai_course_vision_1783686468295.png"
    },
    {
      id: 5,
      titleEn: "Module 3: NLP & Cyber Analysis",
      titleHi: "मॉड्यूल 3: NLP और साइबर विश्लेषण",
      subtitleEn: "Understanding text and fighting digital crime",
      subtitleHi: "टेक्स्ट को समझना और डिजिटल अपराध से लड़ना",
      contentEn: [
        "Natural Language Processing (NLP): Scanning millions of social media posts for threat words.",
        "Sentiment Analysis: Gauging public mood during riots or sensitive events.",
        "Cyber Fraud Detection: Using AI to trace complex financial frauds and cryptocurrency trails.",
        "Dark Web Monitoring: Automated bots scanning the dark web for illegal arms or data leaks."
      ],
      contentHi: [
        "NLP: धमकियों या भड़काऊ शब्दों के लिए लाखों सोशल मीडिया पोस्ट को एक साथ स्कैन करना।",
        "सेंटीमेंट एनालिसिस: दंगों या संवेदनशील घटनाओं के दौरान जनता के मूड का अंदाजा लगाना।",
        "साइबर फ्रॉड डिटेक्शन: जटिल वित्तीय धोखाधड़ी और क्रिप्टोकरेंसी ट्रेल को ट्रेस करने के लिए AI का उपयोग।",
        "डार्क वेब मॉनिटरिंग: अवैध हथियारों या डेटा लीक के लिए डार्क वेब को स्कैन करने वाले ऑटोमेटेड बॉट्स।"
      ],
      icon: ShieldAlert,
      color: "#3b82f6"
    },
    {
      id: 6,
      titleEn: "Module 4: Predictive Policing",
      titleHi: "मॉड्यूल 4: प्रेडिक्टिव पुलिसिंग",
      subtitleEn: "Stopping crime before it happens",
      subtitleHi: "अपराध होने से पहले उसे रोकना",
      contentEn: [
        "Crime Hotspot Mapping: Predicting which areas are most likely to experience crime this weekend.",
        "Resource Allocation: Suggesting where to deploy patrol cars based on AI risk scores.",
        "Repeat Offender Tracking: Calculating the probability of a criminal re-offending.",
        "Seasonal Trends: Analyzing how weather, festivals, or holidays impact crime rates."
      ],
      contentHi: [
        "क्राइम हॉटस्पॉट मैपिंग: यह भविष्यवाणी करना कि इस सप्ताह के अंत में किन क्षेत्रों में अपराध होने की सबसे अधिक संभावना है।",
        "संसाधन आवंटन: AI रिस्क स्कोर के आधार पर सुझाव देना कि गश्त (Patrol) वाली गाड़ियाँ कहाँ तैनात की जाएँ।",
        "रिपीट ऑफेंडर ट्रैकिंग: किसी अपराधी के दोबारा अपराध करने की संभावना की गणना करना।",
        "मौसमी रुझान: मौसम, त्योहारों या छुट्टियों का अपराध दर पर क्या प्रभाव पड़ता है, इसका विश्लेषण।"
      ],
      icon: Target,
      color: "#8b5cf6",
      image: "/assets/ai_course_predictive_1783686478570.png"
    },
    {
      id: 7,
      titleEn: "Module 5: Data Analytics & OSINT",
      titleHi: "मॉड्यूल 5: डेटा एनालिटिक्स और OSINT",
      subtitleEn: "Open Source Intelligence gathering",
      subtitleHi: "ओपन सोर्स इंटेलिजेंस और जानकारी इकट्ठा करना",
      contentEn: [
        "OSINT Tools: Extracting public data from the internet to profile a suspect.",
        "Link Analysis: Creating visual graphs connecting suspects, phone numbers, and bank accounts.",
        "Call Detail Record (CDR) Analysis: AI tools to find hidden patterns in thousands of phone calls.",
        "Location Tracking: Correlating mobile tower dumps with crime timelines automatically."
      ],
      contentHi: [
        "OSINT टूल्स: संदिग्ध की प्रोफ़ाइल बनाने के लिए इंटरनेट से पब्लिक डेटा निकालना।",
        "लिंक विश्लेषण: संदिग्धों, फोन नंबरों और बैंक खातों को जोड़ने वाले विज़ुअल ग्राफ़ बनाना।",
        "CDR एनालिसिस: हजारों फोन कॉल्स में छिपे पैटर्न खोजने के लिए AI टूल्स का उपयोग।",
        "लोकेशन ट्रैकिंग: मोबाइल टावर डंप (Tower dump) को अपराध के समय के साथ स्वचालित रूप से जोड़ना।"
      ],
      icon: Globe,
      color: "#0ea5e9"
    },
    {
      id: 8,
      titleEn: "Module 6: Ethics & Privacy",
      titleHi: "मॉड्यूल 6: नैतिकता और निजता (Privacy)",
      subtitleEn: "Using AI responsibly",
      subtitleHi: "जिम्मेदारी के साथ एआई का उपयोग करना",
      contentEn: [
        "Bias in AI: Ensuring facial recognition models are fair and not racially or gender biased.",
        "Data Privacy Laws: Understanding the legal boundaries of data collection in India.",
        "Audit Trails: Keeping transparent records of who accessed AI tools and why.",
        "Human in the Loop: AI advises, but the final decision to arrest remains with the human officer."
      ],
      contentHi: [
        "AI में भेदभाव: यह सुनिश्चित करना कि फेशियल रिकग्निशन मॉडल निष्पक्ष हैं और किसी भी तरह का भेदभाव नहीं करते।",
        "डेटा गोपनीयता कानून: भारत में डेटा संग्रह की कानूनी सीमाओं को समझना।",
        "ऑडिट ट्रेल्स: इसका पारदर्शी रिकॉर्ड रखना कि AI टूल का उपयोग किसने और क्यों किया।",
        "ह्यूमन इन द लूप: AI केवल सलाह देता है, लेकिन गिरफ्तारी का अंतिम निर्णय इंसान (अधिकारी) का ही होता है।"
      ],
      icon: Lock,
      color: "#f43f5e"
    },
    {
      id: 9,
      titleEn: "Hands-on Training Labs",
      titleHi: "हैंड्स-ऑन ट्रेनिंग और सिमुलेशन लैब्स",
      subtitleEn: "Practical experience for officers",
      subtitleHi: "अधिकारियों के लिए व्यावहारिक अनुभव",
      contentEn: [
        "Mock Crime Scenes: Using VR and AI tools to investigate simulated murder or theft scenes.",
        "Software Navigation: Step-by-step guidance on how to use the UP Police AI dashboards.",
        "Report Generation: Practice creating AI-assisted FIRs and charge sheets.",
        "Live Q&A: Interactive sessions with data scientists and AI experts."
      ],
      contentHi: [
        "मॉक क्राइम सीन: नकली अपराध दृश्यों की जांच के लिए VR और AI टूल का उपयोग करना।",
        "सॉफ्टवेयर नेविगेशन: UP पुलिस AI डैशबोर्ड का उपयोग कैसे करें, इस पर स्टेप-बाय-स्टेप मार्गदर्शन।",
        "रिपोर्ट जनरेशन: AI की मदद से FIR और चार्जशीट बनाने का अभ्यास करना।",
        "लाइव Q&A: डेटा वैज्ञानिकों और AI विशेषज्ञों के साथ इंटरैक्टिव सवाल-जवाब सत्र।"
      ],
      icon: Cpu,
      color: "#ec4899"
    },
    {
      id: 10,
      titleEn: "Expected Outcomes & Certification",
      titleHi: "अपेक्षित परिणाम और सर्टिफिकेशन",
      subtitleEn: "The final goal of the training",
      subtitleHi: "ट्रेनिंग का अंतिम लक्ष्य",
      contentEn: [
        "Certified AI Officers: Graduation and certification for all attending personnel.",
        "Faster Investigations: An expected 40% reduction in time taken to solve complex cases.",
        "Tech-Savvy Force: Transforming the department into a modern, data-driven organization.",
        "End of Presentation: Thank you for participating in the AI Training Course."
      ],
      contentHi: [
        "प्रमाणित AI अधिकारी: ट्रेनिंग में भाग लेने वाले सभी कर्मियों को सर्टिफिकेशन (प्रमाणपत्र) देना।",
        "तेज़ जाँच: जटिल केस सुलझाने में लगने वाले समय में 40% की कमी की उम्मीद।",
        "टेक-सेवी फोर्स: विभाग को एक आधुनिक और डेटा-संचालित (Data-driven) संगठन में बदलना।",
        "प्रस्तुति का अंत: AI ट्रेनिंग कोर्स में भाग लेने के लिए आपका धन्यवाद।"
      ],
      icon: CheckCircle,
      color: "#14b8a6"
    }
  ];

  // -------------------------
  // 3. AI POLICE FUNCTIONING
  // -------------------------
  const aiPoliceSlides = [
    {
      id: 1,
      titleEn: "AI Police Functioning",
      titleHi: "AI पुलिस की कार्यप्रणाली",
      subtitleEn: "How AI transforms daily police operations",
      subtitleHi: "AI दैनिक पुलिस कार्यों को कैसे बदल रहा है",
      contentEn: [
        "Welcome to the presentation on AI-Driven Police Functioning.",
        "We explore how Artificial Intelligence is integrated into everyday law enforcement.",
        "From smart patrolling to automated reporting, AI is changing the landscape of policing.",
        "Let's see the key technological advancements."
      ],
      contentHi: [
        "AI-संचालित पुलिस कार्यप्रणाली की प्रस्तुति में आपका स्वागत है।",
        "हम देखेंगे कि आर्टिफिशियल इंटेलिजेंस (AI) को रोज़मर्रा के पुलिस कार्यों में कैसे जोड़ा जा रहा है।",
        "स्मार्ट पेट्रोलिंग से लेकर ऑटोमैटिक रिपोर्टिंग तक, AI पुलिसिंग के परिदृश्य को बदल रहा है।",
        "आइए कुछ प्रमुख तकनीकी प्रगतियों को देखें।"
      ],
      icon: Bot,
      color: "#3b82f6",
      image: "/assets/ai_course_predictive_1783686478570.png"
    },
    {
      id: 2,
      titleEn: "Smart Patrolling & Drones",
      titleHi: "स्मार्ट पेट्रोलिंग और AI ड्रोन",
      subtitleEn: "Eyes in the sky and on the ground",
      subtitleHi: "आसमान और ज़मीन पर चौकन्नी नज़र",
      contentEn: [
        "AI Drones: Autonomous drones mapping crowds and detecting unusual activities during festivals.",
        "Smart Vehicles: Patrol cars equipped with 360-degree AI cameras for automatic number plate reading.",
        "Route Optimization: AI suggesting the fastest and safest routes for quick emergency response.",
        "Real-time Alerts: Instant notifications sent to patrol units if a wanted criminal is detected nearby."
      ],
      contentHi: [
        "AI ड्रोन: त्योहारों के दौरान भीड़ की मैपिंग और असामान्य गतिविधियों का पता लगाने वाले ऑटोमैटिक ड्रोन।",
        "स्मार्ट वाहन: नंबर प्लेट को अपने आप पढ़ने के लिए 360-डिग्री AI कैमरों से लैस गश्ती (Patrol) गाड़ियाँ।",
        "मार्ग अनुकूलन (Route Optimization): आपातकाल में जल्दी पहुँचने के लिए AI द्वारा सबसे तेज़ रास्तों का सुझाव।",
        "रियल-टाइम अलर्ट: यदि कोई वांछित अपराधी (Wanted criminal) आसपास है तो गश्ती इकाई को तुरंत सूचना।"
      ],
      icon: Siren,
      color: "#ef4444"
    },
    {
      id: 3,
      titleEn: "Automated FIR & Digital Records",
      titleHi: "ऑटोमैटिक FIR और डिजिटल रिकॉर्ड्स",
      subtitleEn: "Eliminating manual paperwork",
      subtitleHi: "कागजी कार्रवाई (Paperwork) को खत्म करना",
      contentEn: [
        "Voice-to-Text FIR: Officers can dictate the incident and AI automatically drafts a formal FIR.",
        "Multilingual Support: AI translates statements given in local dialects into standard Hindi/English.",
        "Digital Vault: All case files, evidence, and statements stored securely on the blockchain cloud.",
        "Auto-categorization: AI assigns IPC sections automatically based on the description of the crime."
      ],
      contentHi: [
        "वॉयस-टू-टेक्स्ट FIR: अधिकारी घटना बोलकर बताते हैं और AI अपने आप औपचारिक FIR टाइप कर देता है।",
        "बहुभाषी समर्थन (Multilingual): AI स्थानीय बोलियों में दिए गए बयानों को मानक हिंदी/अंग्रेजी में अनुवाद करता है।",
        "डिजिटल वॉल्ट: सभी केस फाइलें, सबूत और बयान ब्लॉकचेन क्लाउड पर सुरक्षित रूप से जमा होते हैं।",
        "ऑटो-कैटेगराइजेशन: अपराध के विवरण के आधार पर AI अपने आप सही IPC धाराएं (Sections) लगा देता है।"
      ],
      icon: FileText,
      color: "#10b981"
    },
    {
      id: 4,
      titleEn: "Real-time Crime Dashboard",
      titleHi: "रियल-टाइम क्राइम डैशबोर्ड",
      subtitleEn: "Centralized monitoring for quick action",
      subtitleHi: "त्वरित कार्रवाई के लिए केंद्रीय निगरानी",
      contentEn: [
        "Live Heatmaps: Visual representation of crime rates across the city updated by the minute.",
        "Resource Tracker: Tracking the GPS location of every officer and vehicle on duty.",
        "Incident Triage: AI prioritizes emergency calls, ensuring severe crimes get immediate attention.",
        "Predictive Alerts: Warning officers about potential clashes before they escalate."
      ],
      contentHi: [
        "लाइव हीटमैप्स: पूरे शहर में अपराध दर का विज़ुअल ग्राफ़ (Visual Graph) जो हर मिनट अपडेट होता है।",
        "संसाधन ट्रैकर (Resource Tracker): ड्यूटी पर मौजूद हर अधिकारी और वाहन की GPS लोकेशन ट्रैक करना।",
        "घटना प्राथमिकता (Triage): AI आपातकालीन कॉलों को प्राथमिकता देता है, ताकि गंभीर अपराधों पर तुरंत ध्यान दिया जा सके।",
        "भविष्यवाणी अलर्ट: संभावित संघर्ष या दंगों के बढ़ने से पहले अधिकारियों को चेतावनी देना।"
      ],
      icon: Layout,
      color: "#f59e0b"
    },
    {
      id: 5,
      titleEn: "Public Grievance Redressal",
      titleHi: "जन शिकायत निवारण (Public Grievance)",
      subtitleEn: "AI Chatbots for public assistance",
      subtitleHi: "जनता की सहायता के लिए AI चैटबॉट्स",
      contentEn: [
        "24/7 AI Chatbots: Citizens can report minor issues or ask for help via WhatsApp AI bots.",
        "Status Tracking: Public can track the status of their FIRs or passport verifications online.",
        "Feedback Analysis: AI analyzes citizen feedback to grade the performance of different police stations.",
        "Automated Follow-ups: The system automatically messages victims to update them on case progress."
      ],
      contentHi: [
        "24/7 AI चैटबॉट्स: नागरिक WhatsApp AI बॉट्स के ज़रिए छोटी-मोटी समस्याएँ दर्ज़ करा सकते हैं।",
        "स्थिति ट्रैकिंग (Status Tracking): जनता अपनी FIR या पासपोर्ट वेरिफिकेशन का स्टेटस ऑनलाइन ट्रैक कर सकती है।",
        "फीडबैक विश्लेषण: AI विभिन्न थानों के प्रदर्शन (Performance) को ग्रेड देने के लिए नागरिक फीडबैक का विश्लेषण करता है।",
        "स्वचालित फॉलो-अप: सिस्टम अपने आप पीड़ितों को मैसेज भेजकर केस की प्रगति (Progress) की जानकारी देता है।"
      ],
      icon: Users,
      color: "#8b5cf6"
    }
  ];

  // -------------------------
  // 4. THANE LEVEL OPERATIONS
  // -------------------------
  const thaneLevelSlides = [
    {
      id: 1,
      titleEn: "Thane (Police Station) Level Operations",
      titleHi: "थाना (Police Station) स्तर के ऑपरेशन्स",
      subtitleEn: "Ground zero of law enforcement",
      subtitleHi: "कानून व्यवस्था का जमीनी स्तर",
      contentEn: [
        "The Police Station (Thane) is the primary unit of law enforcement.",
        "This presentation covers the daily operations, duties, and technology used at the local level.",
        "From public dealing to localized investigations, the Thane is the heart of policing.",
        "Let's explore how a modern police station functions."
      ],
      contentHi: [
        "पुलिस स्टेशन (थाना) कानून व्यवस्था की प्राथमिक (Primary) इकाई है।",
        "यह प्रेजेंटेशन स्थानीय स्तर पर दैनिक कार्यों, ड्यूटी और उपयोग की जाने वाली तकनीक को कवर करती है।",
        "जनता से सीधे संपर्क से लेकर स्थानीय जांच तक, थाना पुलिसिंग का मुख्य केंद्र है।",
        "आइए देखें कि एक आधुनिक थाना कैसे काम करता है।"
      ],
      icon: Building,
      color: "#14b8a6",
      image: "/assets/step_up_police_1783686435426.png"
    },
    {
      id: 2,
      titleEn: "Daily Station Diary & Roster",
      titleHi: "दैनिक स्टेशन डायरी और ड्यूटी रोस्टर",
      subtitleEn: "Managing the workforce locally",
      subtitleHi: "स्थानीय स्तर पर कार्यबल का प्रबंधन",
      contentEn: [
        "General Diary (GD): Digital recording of every single event, departure, and arrival at the station.",
        "Duty Roster: Automated software assigning day/night shifts fairly among constables and officers.",
        "Weapon Issued: Digital tracking of firearms and ammunition handed out for duty.",
        "Vehicle Logs: Maintaining strict digital logs of fuel and mileage for patrol cars."
      ],
      contentHi: [
        "जनरल डायरी (GD): थाने में होने वाली हर घटना, प्रस्थान और आगमन का डिजिटल रिकॉर्ड।",
        "ड्यूटी रोस्टर: कॉन्स्टेबल और अधिकारियों के बीच दिन/रात की शिफ्ट बाँटने वाला ऑटोमैटिक सॉफ्टवेयर।",
        "हथियार जारी करना (Weapon Issue): ड्यूटी के लिए दिए गए हथियारों और गोलियों की डिजिटल ट्रैकिंग।",
        "वाहन लॉग: गश्ती कारों के लिए ईंधन (Fuel) और माइलेज का सख्त डिजिटल लॉग बनाए रखना।"
      ],
      icon: Briefcase,
      color: "#f59e0b"
    },
    {
      id: 3,
      titleEn: "FIR Registration & Investigation",
      titleHi: "FIR पंजीकरण और जांच (Investigation)",
      subtitleEn: "The core duty of a police station",
      subtitleHi: "थाने का मुख्य कर्तव्य",
      contentEn: [
        "Complaint Reception: Welcoming citizens at the Help Desk and recording their initial statements.",
        "FIR Generation: Creating formal First Information Reports using the digital CCTNS system.",
        "Investigating Officer (IO) Assignment: The SHO assigns cases to sub-inspectors based on workload.",
        "Evidence Collection: Gathering physical evidence, witness statements, and CCTV footage locally."
      ],
      contentHi: [
        "शिकायत प्राप्ति: हेल्प डेस्क पर नागरिकों का स्वागत करना और उनके शुरुआती बयान दर्ज़ करना।",
        "FIR जनरेशन: डिजिटल CCTNS सिस्टम का उपयोग करके औपचारिक (Formal) 'प्रथम सूचना रिपोर्ट' बनाना।",
        "जांच अधिकारी (IO) की नियुक्ति: SHO काम के बोझ (Workload) के आधार पर सब-इंस्पेक्टरों को केस सौंपते हैं।",
        "सबूत इकट्ठा करना: भौतिक सबूत, गवाहों के बयान और CCTV फुटेज स्थानीय स्तर पर इकट्ठा करना।"
      ],
      icon: Search,
      color: "#ef4444"
    },
    {
      id: 4,
      titleEn: "Local Patrolling & Beat Management",
      titleHi: "स्थानीय पेट्रोलिंग और बीट (Beat) मैनेजमेंट",
      subtitleEn: "Maintaining visible police presence",
      subtitleHi: "पुलिस की दृश्यता (Presence) बनाए रखना",
      contentEn: [
        "Beat System: Dividing the police station's area into smaller beats for intensive monitoring.",
        "Foot Patrolling: Constables walking through sensitive or crowded areas to build public trust.",
        "Night PCR Patrols: Police Control Room vans securing the streets during night hours.",
        "Verification: Regular checking of criminals with history sheets living in the beat area."
      ],
      contentHi: [
        "बीट सिस्टम (Beat System): गहन निगरानी के लिए थाने के क्षेत्र को छोटी 'बीट्स' में बाँटना।",
        "पैदल गश्त (Foot Patrolling): जनता का विश्वास जीतने के लिए संवेदनशील या भीड़भाड़ वाले इलाकों में कॉन्स्टेबल की पैदल गश्त।",
        "नाइट PCR पेट्रोलिंग: रात के समय सड़कों को सुरक्षित करने वाली पुलिस कंट्रोल रूम की गाड़ियाँ।",
        "वेरिफिकेशन: बीट क्षेत्र में रहने वाले हिस्ट्रीशीटर (पुराने अपराधियों) की नियमित जाँच।"
      ],
      icon: Map,
      color: "#8b5cf6"
    },
    {
      id: 5,
      titleEn: "Community Policing",
      titleHi: "कम्युनिटी पुलिसिंग (Community Policing)",
      subtitleEn: "Building bridges with the public",
      subtitleHi: "जनता के साथ बेहतर संबंध बनाना",
      contentEn: [
        "Peace Committees (Aman Committee): Regular meetings with local religious and community leaders.",
        "Awareness Campaigns: Educating youth about drug abuse and cyber safety in local schools.",
        "Senior Citizen Care: Special initiatives to regularly visit and assist elderly residents living alone.",
        "Dispute Resolution: Solving minor neighborhood quarrels amicably without filing formal cases."
      ],
      contentHi: [
        "शांति समितियाँ (अमन कमेटी): स्थानीय धार्मिक और सामुदायिक नेताओं के साथ नियमित बैठकें।",
        "जागरूकता अभियान: स्थानीय स्कूलों में युवाओं को नशीली दवाओं (Drugs) और साइबर सुरक्षा के बारे में शिक्षित करना।",
        "वरिष्ठ नागरिक देखभाल: अकेले रहने वाले बुजुर्गों से नियमित रूप से मिलने और उनकी सहायता करने की विशेष पहल।",
        "विवाद समाधान: पड़ोस के छोटे-मोटे झगड़ों को औपचारिक केस दर्ज़ किए बिना शांति से सुलझाना।"
      ],
      icon: Users,
      color: "#3b82f6"
    }
  ];

  // -------------------------
  // 5. DISTRICT LEVEL OPERATIONS
  // -------------------------
  const districtLevelSlides = [
    {
      id: 1,
      titleEn: "District (SP/SSP Office) Operations",
      titleHi: "ज़िला (SP/SSP कार्यालय) स्तर के ऑपरेशन्स",
      subtitleEn: "Command and control of the entire district",
      subtitleHi: "पूरे ज़िले का कमान और नियंत्रण",
      contentEn: [
        "Welcome to the District Level Operations overview.",
        "The SP/SSP office is the central nervous system of law enforcement for a district.",
        "It handles high-level analytics, resource distribution, and inter-departmental coordination.",
        "Let's look at how the entire district is managed."
      ],
      contentHi: [
        "ज़िला स्तर के ऑपरेशन्स के अवलोकन में आपका स्वागत है।",
        "SP/SSP कार्यालय किसी भी ज़िले की कानून व्यवस्था का मुख्य नियंत्रण केंद्र (Central Hub) होता है।",
        "यह उच्च-स्तरीय एनालिटिक्स, संसाधनों के वितरण और अंतर-विभागीय समन्वय को संभालता है।",
        "आइए देखें कि पूरे ज़िले का प्रबंधन कैसे किया जाता है।"
      ],
      icon: Building2,
      color: "#6366f1",
      image: "/assets/step_up_intro_1783686424622.png"
    },
    {
      id: 2,
      titleEn: "District Crime Monitoring",
      titleHi: "ज़िला अपराध निगरानी (Crime Monitoring)",
      subtitleEn: "Macro-level analysis and strategy",
      subtitleHi: "व्यापक स्तर पर विश्लेषण और रणनीति",
      contentEn: [
        "Crime Review Meetings (Crime Goashthi): Monthly analysis of crime graphs across all police stations.",
        "Special Task Forces (SOG/Crime Branch): Dedicated teams handling complex, unsolved, or organized crimes.",
        "Data Analytics: Using district-wide data to identify emerging crime trends and syndicates.",
        "Performance Evaluation: Grading SHOs (Station House Officers) based on their crime resolution rate."
      ],
      contentHi: [
        "अपराध समीक्षा बैठकें (क्राइम गोष्ठी): सभी थानों के अपराध ग्राफ का मासिक विश्लेषण (Monthly Review)।",
        "स्पेशल टास्क फोर्स (SOG/क्राइम ब्रांच): जटिल, अनसुलझे या संगठित (Organized) अपराधों को संभालने वाली विशेष टीमें।",
        "डेटा एनालिटिक्स: उभरते अपराध के रुझानों और गैंग्स की पहचान करने के लिए ज़िला-स्तरीय डेटा का उपयोग।",
        "प्रदर्शन मूल्यांकन: केस सुलझाने की दर के आधार पर थाना प्रभारियों (SHOs) को ग्रेड देना।"
      ],
      icon: Activity,
      color: "#f43f5e"
    },
    {
      id: 3,
      titleEn: "Resource Allocation",
      titleHi: "संसाधन आवंटन (Resource Allocation)",
      subtitleEn: "Distributing manpower and funds",
      subtitleHi: "जनशक्ति (Manpower) और फंड का वितरण",
      contentEn: [
        "Force Deployment: Moving armed reserves (PAC) to sensitive zones during elections or festivals.",
        "Budget Management: Distributing funds for station maintenance, fuel, and new technology.",
        "Fleet Management: Assigning new vehicles and tracking the health of the entire district's police fleet.",
        "Transfer & Postings: Managing the logistics of transferring officers between different stations."
      ],
      contentHi: [
        "फोर्स की तैनाती (Deployment): चुनाव या त्योहारों के दौरान संवेदनशील (Sensitive) क्षेत्रों में सशस्त्र बलों (PAC) को भेजना।",
        "बजट प्रबंधन: थानों के रखरखाव, ईंधन और नई तकनीक के लिए फंड (Funds) का वितरण करना।",
        "फ्लीट मैनेजमेंट: नए वाहन सौंपना और पूरे जिले के पुलिस वाहनों की स्थिति पर नज़र रखना।",
        "तबादला और पोस्टिंग (Transfer): विभिन्न थानों के बीच अधिकारियों के तबादले की प्रक्रिया (Logistics) का प्रबंधन करना।"
      ],
      icon: Network,
      color: "#0ea5e9"
    },
    {
      id: 4,
      titleEn: "Inter-District Coordination",
      titleHi: "अंतर-ज़िला समन्वय (Inter-District Coordination)",
      subtitleEn: "Working beyond borders",
      subtitleHi: "सीमाओं के पार काम करना",
      contentEn: [
        "Border Sealing: Coordinating with neighboring districts to set up barricades for fleeing criminals.",
        "Intelligence Sharing: Secure communication channels to share data about inter-state gangs.",
        "Joint Operations: Conducting massive raids requiring police forces from multiple districts.",
        "Highway Patrols: Integrated monitoring of long highways that cross multiple jurisdictions."
      ],
      contentHi: [
        "सीमा सील करना (Border Sealing): भागते अपराधियों को पकड़ने के लिए पड़ोसी ज़िलों के साथ समन्वय कर बैरिकेड्स लगाना।",
        "खुफिया जानकारी साझा करना: अंतर-राज्यीय गैंग्स (Gangs) के बारे में डेटा साझा करने के लिए सुरक्षित संचार माध्यम।",
        "संयुक्त अभियान (Joint Operations): कई ज़िलों की पुलिस फोर्स के साथ मिलकर बड़ी छापेमारी (Raids) करना।",
        "हाईवे पेट्रोलिंग: लंबे राजमार्गों (Highways) की एकीकृत निगरानी जो कई ज़िलों से होकर गुज़रते हैं।"
      ],
      icon: Shield,
      color: "#8b5cf6"
    },
    {
      id: 5,
      titleEn: "Media & Public Relations",
      titleHi: "मीडिया और जनसंपर्क (Public Relations)",
      subtitleEn: "Managing the district's public image",
      subtitleHi: "ज़िले में पुलिस की छवि का प्रबंधन",
      contentEn: [
        "Press Conferences: Addressing the media to reveal breakthroughs in major high-profile cases.",
        "Social Media Handles: Actively managing the District Police Twitter/Facebook to quash fake news.",
        "Public Advisories: Issuing warnings about new cyber frauds or traffic diversions.",
        "Transparency: Ensuring the public feels safe and informed about the police's actions."
      ],
      contentHi: [
        "प्रेस कॉन्फ्रेंस: प्रमुख और हाई-प्रोफाइल मामलों के सुलझने की जानकारी मीडिया को देना।",
        "सोशल मीडिया हैंडल: फेक न्यूज़ (Fake news) को रोकने के लिए ज़िला पुलिस के ट्विटर/फेसबुक का सक्रिय प्रबंधन।",
        "सार्वजनिक परामर्श (Advisories): नए साइबर फ्रॉड या ट्रैफिक डायवर्जन के बारे में जनता को चेतावनी जारी करना।",
        "पारदर्शिता (Transparency): यह सुनिश्चित करना कि जनता पुलिस की कार्रवाइयों के बारे में सुरक्षित और सूचित महसूस करे।"
      ],
      icon: Presentation,
      color: "#10b981"
    }
  ];

  const getActiveSlides = () => {
    switch(activePpt) {
      case 'step-up': return slides;
      case 'ai-course': return aiCourseSlides;
      case 'ai-functioning': return aiPoliceSlides;
      case 'thane-level': return thaneLevelSlides;
      case 'district-level': return districtLevelSlides;
      default: return slides;
    }
  };

  const activeSlides = getActiveSlides();

  const nextSlide = () => {
    if (currentSlide < activeSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const current = activeSlides[currentSlide];
  const CurrentIcon = current.icon;

  return (
    <div className="dashboard-container">
      
      {/* Header */}
      <div className="ppt-header-row">
        <div className="ppt-header-content" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="ppt-header-icon-box" style={{ background: '#3b82f615', padding: '1rem', borderRadius: '1rem' }}>
            <Presentation size={32} color="#3b82f6" />
          </div>
          <div>
            <h2 className="ppt-header-title" style={{ margin: 0, fontSize: '1.75rem', color: 'var(--text-main)' }}>
              {language === 'en' ? 'Project PPT' : 'प्रोजेक्ट पीपीटी'}
            </h2>
            <p className="ppt-header-subtitle" style={{ margin: '0.25rem 0 0 0', color: 'var(--text-muted)' }}>
              {language === 'en' ? 'Interactive Presentations & Training Modules' : 'इंटरैक्टिव प्रेजेंटेशन और ट्रेनिंग मॉड्यूल'}
            </p>
          </div>
        </div>

        {/* Language Toggle */}
        <div className="language-toggle" style={{ display: 'flex', background: 'var(--icon-bg)', borderRadius: '0.75rem', padding: '0.25rem' }}>
          <button 
            onClick={() => setLanguage('en')}
            style={{
              padding: '0.5rem 1.25rem', borderRadius: '0.5rem', border: 'none', fontWeight: 'bold', cursor: 'pointer',
              background: language === 'en' ? 'white' : 'transparent',
              color: language === 'en' ? '#0f172a' : '#64748b',
              boxShadow: language === 'en' ? '0 2px 5px rgba(0,0,0,0.05)' : 'none',
              transition: 'all 0.2s'
            }}
          >
            English
          </button>
          <button 
            onClick={() => setLanguage('hi')}
            style={{
              padding: '0.5rem 1.25rem', borderRadius: '0.5rem', border: 'none', fontWeight: 'bold', cursor: 'pointer',
              background: language === 'hi' ? 'white' : 'transparent',
              color: language === 'hi' ? '#0f172a' : '#64748b',
              boxShadow: language === 'hi' ? '0 2px 5px rgba(0,0,0,0.05)' : 'none',
              transition: 'all 0.2s'
            }}
          >
            हिंदी
          </button>
        </div>
      </div>

      {/* PPT Selection Tabs */}
      <div className="ppt-tabs-row" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <button 
          onClick={() => { setActivePpt('step-up'); setCurrentSlide(0); }}
          style={{
            padding: '1rem 1.5rem', borderRadius: '1rem', border: 'none', fontWeight: 'bold', cursor: 'pointer',
            background: activePpt === 'step-up' ? '#3b82f6' : 'white',
            color: activePpt === 'step-up' ? 'white' : '#64748b',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
            transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem'
          }}
        >
          <BookOpen size={18} />
          {language === 'en' ? 'Step Up PPT' : 'स्टेप अप PPT'}
        </button>

        <button 
          onClick={() => { setActivePpt('ai-course'); setCurrentSlide(0); }}
          style={{
            padding: '1rem 1.5rem', borderRadius: '1rem', border: 'none', fontWeight: 'bold', cursor: 'pointer',
            background: activePpt === 'ai-course' ? '#3b82f6' : 'white',
            color: activePpt === 'ai-course' ? 'white' : '#64748b',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
            transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem'
          }}
        >
          <GraduationCap size={18} />
          {language === 'en' ? 'AI Course' : 'AI कोर्स PPT'}
        </button>

        <button 
          onClick={() => { setActivePpt('ai-functioning'); setCurrentSlide(0); }}
          style={{
            padding: '1rem 1.5rem', borderRadius: '1rem', border: 'none', fontWeight: 'bold', cursor: 'pointer',
            background: activePpt === 'ai-functioning' ? '#3b82f6' : 'white',
            color: activePpt === 'ai-functioning' ? 'white' : '#64748b',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
            transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem'
          }}
        >
          <Bot size={18} />
          {language === 'en' ? 'AI Police Ops' : 'AI पुलिसिंग PPT'}
        </button>

        <button 
          onClick={() => { setActivePpt('thane-level'); setCurrentSlide(0); }}
          style={{
            padding: '1rem 1.5rem', borderRadius: '1rem', border: 'none', fontWeight: 'bold', cursor: 'pointer',
            background: activePpt === 'thane-level' ? '#3b82f6' : 'white',
            color: activePpt === 'thane-level' ? 'white' : '#64748b',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
            transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem'
          }}
        >
          <Building size={18} />
          {language === 'en' ? 'Thane Level' : 'थाना स्तर PPT'}
        </button>

        <button 
          onClick={() => { setActivePpt('district-level'); setCurrentSlide(0); }}
          style={{
            padding: '1rem 1.5rem', borderRadius: '1rem', border: 'none', fontWeight: 'bold', cursor: 'pointer',
            background: activePpt === 'district-level' ? '#3b82f6' : 'white',
            color: activePpt === 'district-level' ? 'white' : '#64748b',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
            transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem'
          }}
        >
          <Building2 size={18} />
          {language === 'en' ? 'District Level' : 'ज़िला स्तर PPT'}
        </button>
      </div>
      
      {/* PPT Viewer Area */}
      <div className={`ppt-viewer-container ${isFullscreen ? 'fullscreen' : ''}`}>
        
        {/* Fullscreen Toggle Button (Inside PPT Area) */}
        <button 
          className="fullscreen-toggle"
          onClick={() => setIsFullscreen(!isFullscreen)}
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        >
          {isFullscreen ? <Minimize size={24} /> : <Maximize size={24} />}
        </button>

        {/* Slide Content */}
        <div className={`animate-fade-in ppt-slide-content ${current.image ? 'has-image' : ''}`} key={current.id}>
          
          {/* Left Text Side */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div className="slide-header" style={{ borderBottom: `3px solid ${current.color}33` }}>
              <div className="slide-icon-box" style={{ background: `${current.color}15` }}>
                <CurrentIcon size={48} color={current.color} />
              </div>
              <div>
                <h1 className="ppt-slide-title">
                  {language === 'en' ? current.titleEn : current.titleHi}
                </h1>
                <h3 className="ppt-slide-subtitle" style={{ color: current.color }}>
                  {language === 'en' ? current.subtitleEn : current.subtitleHi}
                </h3>
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <ul className="slide-list">
                {(language === 'en' ? current.contentEn : current.contentHi).map((point, idx) => (
                  <li key={idx} className="slide-list-item">
                    <div className="list-dot" style={{ background: current.color }}></div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Image Side (Optional) */}
          {current.image && (
            <div className="ppt-image-container">
              <img src={current.image} alt="Slide visual" />
            </div>
          )}
        </div>

        {/* PPT Controls Bar */}
        <div className="ppt-controls-bar">
          
          <button 
            className="ppt-nav-btn prev"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <ChevronLeft size={20} /> {language === 'en' ? 'Previous' : 'पिछला'}
          </button>

          {/* Slide Indicators */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '400px' }}>
            {activeSlides.map((_, idx) => (
              <div 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                style={{ 
                  width: idx === currentSlide ? '30px' : '10px', 
                  height: '10px', 
                  borderRadius: '5px',
                  background: idx === currentSlide ? '#3b82f6' : '#cbd5e1',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                title={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            className="ppt-nav-btn next"
            onClick={nextSlide}
            disabled={currentSlide === activeSlides.length - 1}
          >
            {language === 'en' ? 'Next' : 'अगला'} <ChevronRight size={20} />
          </button>

        </div>

      </div>

    </div>
  );
}
