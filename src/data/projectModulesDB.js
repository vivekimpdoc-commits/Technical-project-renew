import { BookOpen, GraduationCap, Code, Activity, GlobeLock, BrainCircuit, MapPin, Camera, Database, Search, Scale, Cloud, Lock, Server, Shield } from 'lucide-react';

export const projectModules = [
  { 
    id: 'step-up', title: 'Step Up Literacy Software', desc: 'Basic computer education bridging the digital divide.', icon: BookOpen, color: '#d946ef', category: 'Education',
    details: {
      hindiSummary: "पुलिस कर्मियों के लिए बेसिक कंप्यूटर और टाइपिंग की आसान ट्रेनिंग।",
      realWorldImpact: "Before: Officers feared making mistakes on computers. After: Confidently typing digital FIRs and searching online records independently.",
      longDesc: "Why is this necessary? A significant portion of our ground staff lacks basic computer skills, creating bottlenecks in filing digital FIRs. This provides step-by-step, easy computer education.",
      features: [
        { title: "Step 1: Introduction to Computers", desc: "Understanding hardware components (Mouse, Keyboard, CPU)." },
        { title: "Step 2: Operating System Basics", desc: "Navigating Windows, managing files, and folder structures." },
        { title: "Step 3: Typing Proficiency", desc: "Learning touch typing in English and Hindi (Mangal Font)." },
        { title: "Step 4: Internet Fundamentals", desc: "Using web browsers safely, searching on Google." },
        { title: "Step 5: Email Communication", desc: "Drafting, sending, and organizing official emails." },
        { title: "Step 6: Office Suite (Word/Excel)", desc: "Drafting basic documents and entering data in spreadsheets." },
        { title: "Step 7: CCTNS Familiarization", desc: "Basic overview of the Crime and Criminal Tracking Network system." },
        { title: "Step 8: Digital Security Basics", desc: "Setting strong passwords and identifying basic phishing traps." }
      ],
      stats: { "Target Audience": "Constables & Head Constables", "Primary Goal": "Eliminate digital fear", "Prerequisites": "None", "Outcome": "Independent operation" }
    }
  },
  { 
    id: 'ai-course', title: 'Artificial Intelligence (AI) Course', desc: 'Step-by-step training on how AI models are built and trained.', icon: GraduationCap, color: '#818cf8', category: 'Education',
    details: {
      hindiSummary: "AI मॉडल कैसे काम करता है और खुद का AI मॉडल कैसे बनाएं, इसकी पूरी ट्रेनिंग।",
      realWorldImpact: "Before: Relying on expensive external AI tools. After: Building custom Neural Networks using UP Police's own secure data.",
      longDesc: "This course goes beyond just using AI. It teaches our officers exactly how to construct, train, and test custom Artificial Intelligence models from scratch.",
      features: [
        { title: "Step 1: Foundations of AI & ML", desc: "Understanding the difference between AI, Machine Learning, and Deep Learning." },
        { title: "Step 2: Python for AI", desc: "Learning Python syntax, variables, and essential libraries (NumPy, Pandas)." },
        { title: "Step 3: Data Preprocessing", desc: "Cleaning messy police datasets and handling missing values." },
        { title: "Step 4: Supervised Learning", desc: "Building Linear Regression and Classification models for crime prediction." },
        { title: "Step 5: Unsupervised Learning", desc: "Using clustering algorithms to identify hidden criminal syndicates." },
        { title: "Step 6: Neural Networks (Deep Learning)", desc: "Understanding perceptrons, backpropagation, and hidden layers." },
        { title: "Step 7: Computer Vision (CV)", desc: "Training image recognition models for suspect face matching." },
        { title: "Step 8: Natural Language Processing (NLP)", desc: "Building AI that can read and summarize raw FIR text." }
      ],
      stats: { "Target Audience": "Technical Cell Officers", "Primary Goal": "Build Custom AI Models", "Duration": "12 Weeks", "Outcome": "In-house AI Developers" }
    }
  },
  { 
    id: 'masterclass', title: 'Software Masterclass', desc: 'Full lifecycle training: How robust software is actually engineered.', icon: Code, color: '#06b6d4', category: 'Education',
    details: {
      hindiSummary: "सॉफ्टवेयर कैसे बनता है? कोडिंग से लेकर डिप्लॉयमेंट (SDLC) तक का पूरा मास्टरक्लास।",
      realWorldImpact: "Before: Treating software as a 'black box'. After: Understanding the architecture, coding, testing, and deployment from scratch.",
      longDesc: "To stop relying on external vendors, our officers must learn the actual engineering behind software creation. This masterclass covers the full SDLC.",
      features: [
        { title: "Step 1: Software Development Life Cycle", desc: "Understanding Agile, Scrum, and requirement gathering." },
        { title: "Step 2: UI/UX Design Principles", desc: "Designing accessible and user-friendly interfaces (Figma)." },
        { title: "Step 3: Frontend Engineering (React)", desc: "Building dynamic single-page applications for fast data loading." },
        { title: "Step 4: Backend Engineering (Node.js)", desc: "Writing secure server logic and RESTful APIs." },
        { title: "Step 5: Database Architecture", desc: "Designing normalized SQL databases and NoSQL structures." },
        { title: "Step 6: Version Control (Git/GitHub)", desc: "Collaborating on code and managing pull requests." },
        { title: "Step 7: Quality Assurance (QA)", desc: "Writing automated unit and integration tests." },
        { title: "Step 8: CI/CD & Deployment", desc: "Automating builds and deploying to secure cloud servers." }
      ],
      stats: { "Target Audience": "Technical Cell Officers", "Primary Goal": "Master Software Engineering", "Level": "Advanced", "Outcome": "Full-Stack Police Developers" }
    }
  },
  { 
    id: 'mlops', title: 'AI Operations - MLOps', desc: 'Teaching how to deploy and manage AI systems.', icon: Activity, color: '#8b5cf6', category: 'Operations',
    details: {
      hindiSummary: "AI सिस्टम्स को बिना क्रैश हुए 24/7 चलाने की टेक्निकल ट्रेनिंग।",
      realWorldImpact: "Before: AI camera systems crashed during heavy traffic. After: MLOps ensures automated servers balance the load and stay online 24/7.",
      longDesc: "Creating an AI model is only half the battle. Tech division officers need to learn how to keep AI systems running 24/7 without crashing.",
      features: [
        { title: "Step 1: Introduction to MLOps", desc: "Bridging Machine Learning with Operations (DevOps for AI)." },
        { title: "Step 2: Model Versioning", desc: "Tracking different versions of AI models (e.g., using MLflow)." },
        { title: "Step 3: Containerization (Docker)", desc: "Packaging AI models into isolated, portable containers." },
        { title: "Step 4: Orchestration (Kubernetes)", desc: "Managing thousands of containers automatically based on server load." },
        { title: "Step 5: Continuous Integration (CI) for ML", desc: "Automated testing of new model training code." },
        { title: "Step 6: Continuous Deployment (CD)", desc: "Seamlessly pushing updated models to production without downtime." },
        { title: "Step 7: Monitoring & Data Drift", desc: "Detecting when an AI model's accuracy drops over time." },
        { title: "Step 8: Infrastructure as Code (IaC)", desc: "Automating server provisioning using Terraform or Ansible." }
      ],
      stats: { "Target Audience": "System Administrators", "Primary Goal": "Maintain 100% Uptime", "Focus Area": "Infrastructure", "Outcome": "Stable AI Operations" }
    }
  },
  { 
    id: 'advanced-ai', title: 'Advanced AI & Cyber Command', desc: 'High-level education on dark web and global cyber threats.', icon: GlobeLock, color: '#10b981', category: 'Operations',
    details: {
      hindiSummary: "अंतर्राष्ट्रीय साइबर क्राइम और डार्क वेब के अपराधियों को ट्रैक करने की कमांड।",
      realWorldImpact: "Before: Impossible to trace Bitcoin ransoms. After: Advanced tools trace crypto wallets globally to identify the syndicates.",
      longDesc: "Cybercrime has no borders. Officers must be educated on how international syndicates operate on the Dark Web, and how to use advanced AI to track cryptocurrency.",
      features: [
        { title: "Step 1: Global Threat Landscape", desc: "Understanding state-sponsored attacks and international cyber cartels." },
        { title: "Step 2: Advanced Encryption", desc: "Breaking down AES-256, RSA, and Quantum-resistant algorithms." },
        { title: "Step 3: Dark Web Marketplaces", desc: "Analyzing the economy of illicit forums on the Tor network." },
        { title: "Step 4: Cryptocurrency Tumblers", desc: "How syndicates launder Bitcoin and how AI traces it." },
        { title: "Step 5: Zero-Day Vulnerabilities", desc: "Understanding exploits before software patches are released." },
        { title: "Step 6: Ransomware Negotiation Strategy", desc: "Tactics for stalling attackers while tracing their infrastructure." },
        { title: "Step 7: AI-Driven Cyber Defense", desc: "Using autonomous AI agents to defend police networks in real-time." },
        { title: "Step 8: Interpol & Cross-Border Legalities", desc: "Issuing MLATs (Mutual Legal Assistance Treaties) for offshore server seizures." }
      ],
      stats: { "Target Audience": "STF & Cyber Command", "Primary Goal": "Tackle organized crime", "Requirement": "Top Secret Clearance", "Outcome": "Global Cyber Readiness" }
    }
  },
  { 
    id: 'police-functioning', title: 'Police Functioning (AI)', desc: 'Training on integrating AI into daily police duties.', icon: BrainCircuit, color: '#f59e0b', category: 'Operations',
    details: {
      hindiSummary: "रोजमर्रा के पुलिस काम (FIR, पेट्रोलिंग) को AI की मदद से तेज और आसान बनाना।",
      realWorldImpact: "Before: Typing an FIR took 45 minutes of paperwork. After: Voice-to-Text AI drafts the entire FIR in 5 minutes by just speaking.",
      longDesc: "AI should help the everyday officer. This module educates officers on how to use AI tools to reduce paperwork and patrol efficiently.",
      features: [
        { title: "Step 1: AI in Thana Operations", desc: "Overview of how AI simplifies daily administrative tasks." },
        { title: "Step 2: Smart FIR Drafting", desc: "Using Voice-to-Text NLP for rapid, accurate FIR creation." },
        { title: "Step 3: Predictive Patrolling", desc: "Analyzing AI Heatmaps to identify high-probability crime zones." },
        { title: "Step 4: Automated Resource Allocation", desc: "Optimizing vehicle deployments based on real-time traffic and incidents." },
        { title: "Step 5: Suspect Matching Systems", desc: "Cross-referencing CCTV feeds with facial recognition databases." },
        { title: "Step 6: Sentiment Analysis", desc: "Using AI to monitor local social media for potential riot triggers." },
        { title: "Step 7: Digital Case Diaries", desc: "Automating the structuring of daily investigation logs." },
        { title: "Step 8: Public Interaction AI (Chatbots)", desc: "Deploying basic citizen-facing bots to answer routine queries." }
      ],
      stats: { "Target Audience": "Station House Officers (SHO)", "Primary Goal": "Reduce paperwork", "Benefit": "More time for policing", "Outcome": "Smart Police Stations" }
    }
  },
  { 
    id: 'analytics', title: 'Live Analytics & Metrics', desc: 'Educating officers on reading live performance metrics.', icon: MapPin, color: '#3b82f6', category: 'Operations',
    details: {
      hindiSummary: "पुलिस के काम का लाइव रिजल्ट और रैंकिंग देखना ताकि काम में सुधार हो सके।",
      realWorldImpact: "Before: Officers didn't know their district's rank until year-end. After: Live leaderboards motivate officers to improve daily response times.",
      longDesc: "Without understanding performance metrics, officers cannot improve. This teaches how the department evaluates response times and case solving rates using live analytics.",
      features: [
        { title: "Step 1: Introduction to Data-Driven Policing", desc: "Why metrics matter more than intuition." },
        { title: "Step 2: KPI Dashboards", desc: "Reading and interpreting Key Performance Indicators." },
        { title: "Step 3: Response Time Analytics", desc: "How Dial 112 dispatch times are calculated and optimized." },
        { title: "Step 4: Crime Trend Forecasting", desc: "Understanding statistical models for seasonal crime spikes." },
        { title: "Step 5: Officer Performance Metrics", desc: "How individual investigation speeds are tracked." },
        { title: "Step 6: Geospatial Analytics (GIS)", desc: "Reading layered maps showing crime density vs. police presence." },
        { title: "Step 7: Public Sentiment Metrics", desc: "Tracking citizen feedback and trust scores in specific jurisdictions." },
        { title: "Step 8: Actionable Insights", desc: "Converting raw dashboard data into immediate operational orders." }
      ],
      stats: { "Target Audience": "All Commanding Officers", "Primary Goal": "Performance improvement", "Focus Area": "Accountability", "Outcome": "Transparent Evaluation" }
    }
  },
  { 
    id: 'first-responder', title: 'Digital First Responder', desc: 'Training for securing digital evidence at crime scenes.', icon: Camera, color: '#f43f5e', category: 'Education',
    details: {
      hindiSummary: "डिजिटल सबूतों (मोबाइल, लैपटॉप) को सही तरीके से सील और सुरक्षित करने की ट्रेनिंग।",
      realWorldImpact: "Before: Phones seized were turned on, overwriting data. After: Devices are isolated in Faraday bags preserving court-admissible evidence.",
      longDesc: "When police arrive at a scene, securing digital devices without corrupting data is critical. This module teaches officers how to act as a Digital First Responder.",
      features: [
        { title: "Step 1: Identifying Digital Evidence", desc: "Recognizing hidden devices, IoT gadgets, and routers at a scene." },
        { title: "Step 2: Power State Decisions", desc: "Knowing when to pull the plug vs. capturing live RAM." },
        { title: "Step 3: Network Isolation", desc: "Using Faraday bags to block remote wipe signals immediately." },
        { title: "Step 4: Photography & Documentation", desc: "Photographing screen states and cable connections before touching." },
        { title: "Step 5: Seizure & Packaging", desc: "Properly labeling and sealing hard drives in anti-static materials." },
        { title: "Step 6: Chain of Custody Forms", desc: "Drafting the legal paperwork required for evidence transfer." },
        { title: "Step 7: On-Site Triage Tools", desc: "Using portable USB tools to quickly check for illicit files." },
        { title: "Step 8: Transfer to Lab", desc: "Secure protocols for handing evidence over to the Forensic Science Lab." }
      ],
      stats: { "Target Audience": "Sub-Inspectors (SI)", "Primary Goal": "Preserve Evidence", "Skill Level": "Intermediate", "Outcome": "Court-Admissible Data" }
    }
  },
  { 
    id: 'excel-mastery', title: 'Data & Excel Mastery', desc: 'Managing massive crime records using advanced spreadsheets.', icon: Database, color: '#14b8a6', category: 'Education',
    details: {
      hindiSummary: "लाखों क्रिमिनल रिकॉर्ड्स वाली एक्सेल शीट में से 2 मिनट में जानकारी निकालना।",
      realWorldImpact: "Before: Manually searching thousands of rows took days. After: Pivot tables instantly highlight repeat offenders in specific areas.",
      longDesc: "Data is useless if you can't read it. This course trains administrative staff and cyber cell operators on advanced data handling techniques using Excel and SQL basics.",
      features: [
        { title: "Step 1: Data Structuring", desc: "How to properly format raw dumps from CCTNS." },
        { title: "Step 2: Advanced Filtering", desc: "Using multi-level sorting and custom filters to find specific cases." },
        { title: "Step 3: VLOOKUP & XLOOKUP", desc: "Cross-referencing suspect lists across multiple workbooks." },
        { title: "Step 4: Data Cleaning", desc: "Removing duplicates and fixing formatting errors using text-to-columns." },
        { title: "Step 5: Pivot Tables", desc: "Instantly summarizing thousands of rows by Thana, Date, or Crime Type." },
        { title: "Step 6: Conditional Formatting", desc: "Creating heatmaps inside Excel to visually spot anomalies." },
        { title: "Step 7: Macro Automation", desc: "Recording VBA scripts to automate repetitive daily reports." },
        { title: "Step 8: Intro to SQL Queries", desc: "Transitioning from Excel to basic database queries for massive datasets." }
      ],
      stats: { "Target Audience": "Analysts & Clerks", "Primary Goal": "Fast Information Retrieval", "Skill Level": "Basic to Advanced", "Outcome": "Data Efficiency" }
    }
  },
  { 
    id: 'cyber-101', title: 'Cyber Investigation 101', desc: 'Basic training on tracing IPs and catching digital frauds.', icon: Search, color: '#8b5cf6', category: 'Education',
    details: {
      hindiSummary: "IP एड्रेस ट्रेस करना, फेक ईमेल पकड़ना और साइबर फ्रॉड की बुनियादी जांच।",
      realWorldImpact: "Before: Every online fraud case was forwarded to the state cyber cell. After: Local Thanas solve 70% of basic financial frauds themselves.",
      longDesc: "Empowering the local officer is key. Cyber Investigation 101 teaches the absolute basics of tracking online criminals, from understanding IP logs to requesting data from social media companies correctly.",
      features: [
        { title: "Step 1: Introduction to Cyber Crime", desc: "Understanding the difference between phishing, vishing, and malware." },
        { title: "Step 2: IP Address Fundamentals", desc: "How IPv4 works, what NAT is, and why timestamps are critical." },
        { title: "Step 3: Tracking Phishing Links", desc: "Using URL expanders and WHOIS lookups to find website owners." },
        { title: "Step 4: Email Header Analysis", desc: "Tracing spoofed emails back to their originating server IP." },
        { title: "Step 5: Financial Fraud Recovery", desc: "Protocols for freezing mule accounts via banking portals." },
        { title: "Step 6: Social Media Notices", desc: "How to draft a valid request to Facebook/Google for user data." },
        { title: "Step 7: Basic OSINT", desc: "Using Google Dorks to find publicly exposed suspect information." },
        { title: "Step 8: Filing the E-FIR", desc: "Properly classifying the crime under the correct IT Act sections." }
      ],
      stats: { "Target Audience": "All Officers", "Primary Goal": "Solve basic cyber crimes", "Skill Level": "Beginner", "Outcome": "Faster local resolution" }
    }
  },
  { 
    id: 'legal-tech', title: 'IT Act & Legal Framework', desc: 'Understanding BNS and IT Act for digital evidence in court.', icon: Scale, color: '#eab308', category: 'Education',
    details: {
      hindiSummary: "डिजिटल सबूतों को कोर्ट में कानूनी रूप से (IT Act, BNS) कैसे पेश करना है।",
      realWorldImpact: "Before: Cases dismissed due to improper digital evidence handling. After: 100% compliance with Section 65B of the Evidence Act.",
      longDesc: "The best investigation fails if it doesn't hold up in court. This module bridges the gap between technology and the law, teaching officers exactly how to file charges under the IT Act.",
      features: [
        { title: "Step 1: The IT Act 2000 Overview", desc: "Understanding sections relating to hacking, data theft, and obscenity." },
        { title: "Step 2: BNS Digital Provisions", desc: "Navigating the new Bharatiya Nyaya Sanhita codes for cybercrimes." },
        { title: "Step 3: Section 65B Requirements", desc: "The strict legal mandate for certifying electronic evidence." },
        { title: "Step 4: Drafting Digital Search Warrants", desc: "Specific language needed to legally seize cloud servers or emails." },
        { title: "Step 5: Seizure Memos & Hashing", desc: "Documenting MD5 hashes on-site to prove data integrity." },
        { title: "Step 6: Intermediary Guidelines", desc: "The laws governing ISPs and social media platforms' liability." },
        { title: "Step 7: Data Privacy Laws", desc: "Understanding what data can and cannot be accessed legally." },
        { title: "Step 8: Courtroom Testimony", desc: "How investigating officers should present technical facts to a judge." }
      ],
      stats: { "Target Audience": "Investigating Officers", "Primary Goal": "Legal Convictions", "Skill Level": "Advanced", "Outcome": "Bulletproof Cases" }
    }
  },
  { 
    id: 'cloud-police', title: 'Cloud Computing (Police)', desc: 'Understanding AWS, Azure, and secure police cloud servers.', icon: Cloud, color: '#38bdf8', category: 'Education',
    details: {
      hindiSummary: "पुलिस का डेटा सर्वर और क्लाउड (AWS, Azure) कैसे काम करता है, इसकी पढ़ाई।",
      realWorldImpact: "Before: Officers feared moving local files to the internet. After: Fully understanding secure encrypted cloud storage systems.",
      longDesc: "Modern policing relies on cloud architecture. Officers need to know what 'The Cloud' actually is, how CCTNS connects globally, and how data is kept secure.",
      features: [
        { title: "Step 1: What is The Cloud?", desc: "Demystifying servers, data centers, and virtualization." },
        { title: "Step 2: Public vs. Private Clouds", desc: "Why police use hybrid architectures (AWS + On-Premise)." },
        { title: "Step 3: Storage Solutions (S3)", desc: "How petabytes of CCTV footage are stored securely." },
        { title: "Step 4: Virtual Private Clouds (VPC)", desc: "Creating isolated network environments that hackers cannot access." },
        { title: "Step 5: Identity & Access Management (IAM)", desc: "Enforcing strict permission policies for officers." },
        { title: "Step 6: Data Encryption (AES-256)", desc: "Securing files at rest and in transit across the cloud." },
        { title: "Step 7: Disaster Recovery (DR)", desc: "Automated backups preventing data loss during natural disasters." },
        { title: "Step 8: Cloud Security Audits", desc: "Monitoring cloud logs for unauthorized access attempts." }
      ],
      stats: { "Target Audience": "Technical Cell", "Primary Goal": "Modernize Infrastructure", "Skill Level": "Intermediate", "Outcome": "Cloud Confidence" }
    }
  },
  { 
    id: 'ethical-hacking', title: 'Ethical Hacking Intro', desc: 'Thinking like a hacker to better secure police networks.', icon: Lock, color: '#ec4899', category: 'Education',
    details: {
      hindiSummary: "हैकर्स कैसे सोचते हैं और पुलिस को अपना कंप्यूटर कितना सुरक्षित रखना चाहिए।",
      realWorldImpact: "Before: Officers used '123456' as passwords. After: Implementing 2FA and strong passphrases after seeing how easily they can be cracked.",
      longDesc: "To catch a hacker, you must think like one. This introductory course demonstrates basic hacking techniques to teach officers why strict security protocols are mandatory.",
      features: [
        { title: "Step 1: The Hacker Mindset", desc: "Understanding the motivations and phases of a cyber attack (Recon to Exploitation)." },
        { title: "Step 2: Social Engineering", desc: "Manipulating humans (Phishing, Pretexting, Baiting)." },
        { title: "Step 3: Password Cracking", desc: "Demonstrating Brute Force and Dictionary attacks using Hashcat." },
        { title: "Step 4: Network Sniffing", desc: "Using Wireshark to intercept unencrypted data on public Wi-Fi." },
        { title: "Step 5: Vulnerability Scanning", desc: "Using tools like Nmap to find open ports on police servers." },
        { title: "Step 6: Exploitation Basics", desc: "Understanding how outdated software leads to system compromise." },
        { title: "Step 7: Physical Security", desc: "The dangers of 'found' USB drives (Rubber Duckies)." },
        { title: "Step 8: Implementing Defenses", desc: "Enforcing Multi-Factor Authentication (MFA) and VPN usage." }
      ],
      stats: { "Target Audience": "All Officers", "Primary Goal": "Increase Security Awareness", "Skill Level": "Beginner", "Outcome": "Hardened Human Firewall" }
    }
  },
  { 
    id: 'hardware-network', title: 'Hardware & Networking', desc: 'Fixing basic router, PC, and local network issues.', icon: Server, color: '#f97316', category: 'Education',
    details: {
      hindiSummary: "थाने का इंटरनेट या कंप्यूटर खराब होने पर खुद उसे ठीक करना सीखना।",
      realWorldImpact: "Before: Waiting 3 days for a technician to fix a loose cable. After: Officers troubleshoot and fix local IT issues in 10 minutes.",
      longDesc: "When a Thana's internet goes down, crucial work stops. This practical module teaches officers how to troubleshoot their own PCs and secure local Wi-Fi.",
      features: [
        { title: "Step 1: PC Components Overview", desc: "Identifying Motherboards, RAM, CPUs, and Storage Drives." },
        { title: "Step 2: Assembly & Maintenance", desc: "How to safely open a PC case, clean dust, and reseat RAM." },
        { title: "Step 3: OS Installation & Boot Menus", desc: "Flashing Windows/Linux onto a fresh hard drive via USB." },
        { title: "Step 4: Local Area Networks (LAN)", desc: "Understanding Switches, Ethernet Cables (Cat6), and Hubs." },
        { title: "Step 5: IP Addressing & Subnets", desc: "Configuring static IPs for police station printers and servers." },
        { title: "Step 6: Router Configuration", desc: "Accessing the admin panel and changing default passwords." },
        { title: "Step 7: Wireless Security", desc: "Setting up WPA3 encryption and hiding the Thana's SSID." },
        { title: "Step 8: Troubleshooting Methodology", desc: "The ping command, traceroute, and isolating hardware vs. software faults." }
      ],
      stats: { "Target Audience": "Thana Staff", "Primary Goal": "Zero Downtime", "Skill Level": "Beginner", "Outcome": "Self-Sufficient Thanas" }
    }
  },
  { 
    id: 'advanced-forensics', title: 'Advanced Cyber Forensics', desc: 'Deep dive into memory analysis, malware reverse engineering, and mobile extraction.', icon: Shield, color: '#8b5cf6', category: 'Masterclass',
    details: {
      hindiSummary: "हार्ड डिस्क से डिलीटेड डेटा निकालना और मोबाइल फोन की गहराई से जांच (Forensics) करना सीखें।",
      realWorldImpact: "Before: Relying entirely on FSL (Forensic Science Lab) causing 6-month delays. After: Cyber Cell extracts preliminary crucial data within 24 hours.",
      longDesc: "Digital forensics is the cornerstone of cyber conviction. This advanced masterclass trains officers on volatile memory (RAM) capture, breaking Android/iOS encryption, recovering permanently deleted logs, and understanding hex editors.",
      features: [
        { title: "Step 1: IT Act & Digital Custody", desc: "Understanding BNS equivalents and strict chain of custody protocols." },
        { title: "Step 2: Securing the Digital Scene", desc: "Using Faraday bags and preventing remote wipe attacks." },
        { title: "Step 3: Storage Imaging & Hashing", desc: "Bit-by-bit cloning with Write-Blockers and generating SHA-256 hashes." },
        { title: "Step 4: Mobile Device Forensics", desc: "Bypassing locks with Cellebrite to extract deleted WhatsApp chats." },
        { title: "Step 5: Volatile Memory Capture", desc: "Extracting RAM dumps from live systems using FTK Imager before shutdown." },
        { title: "Step 6: Malware Reverse Engineering", desc: "Analyzing ransomware payloads in isolated sandboxes using Ghidra." },
        { title: "Step 7: Network Packet Forensics", desc: "Reconstructing deleted emails and passwords from intercepted PCAP files." },
        { title: "Step 8: Court Presentation (Section 65B)", desc: "Drafting the final forensic report and defending the MD5 hashes in front of a judge." }
      ],
      stats: { "Target Audience": "Cyber Cell Investigators", "Primary Goal": "In-house Forensics", "Skill Level": "Expert", "Outcome": "Rapid Evidence Extraction" }
    }
  },
  { 
    id: 'osint-mastery', title: 'OSINT & Intelligence Gathering', desc: 'Mastering Open Source Intelligence to track suspects globally without warrants.', icon: GlobeLock, color: '#10b981', category: 'Masterclass',
    details: {
      hindiSummary: "इंटरनेट और सोशल मीडिया (Facebook, Instagram) से अपराधियों की सीक्रेट जानकारी कैसे निकालें।",
      realWorldImpact: "Before: Waiting weeks for social media companies to reply to notices. After: Tracking suspects instantly using public metadata and shadow profiles.",
      longDesc: "People leave digital footprints everywhere. This course teaches advanced OSINT (Open Source Intelligence). You will learn how to use Maltego, analyze EXIF data in photos, track cryptocurrency wallets, and uncover hidden connections on the dark web.",
      features: [
        { title: "Step 1: OSINT Fundamentals & OPSEC", desc: "Setting up secure burner profiles (Sockpuppets) and VPNs to stay hidden." },
        { title: "Step 2: Advanced Google Dorking", desc: "Using advanced search operators to find exposed passwords and databases." },
        { title: "Step 3: Social Media Intelligence (SOCMINT)", desc: "Linking fake aliases to real identities using Facebook and Instagram graph search." },
        { title: "Step 4: Image & Video Forensics", desc: "Extracting hidden EXIF GPS metadata from suspect photos." },
        { title: "Step 5: Corporate & Domain Reconnaissance", desc: "Tracking shell companies and server IP histories using WHOIS data." },
        { title: "Step 6: Dark Web Reconnaissance", desc: "Monitoring illicit forums on the Tor network without exposing police IPs." },
        { title: "Step 7: Crypto-Wallet Tracing", desc: "Following illicit funds through the blockchain using Chainalysis tools." },
        { title: "Step 8: Automated Link Analysis (Maltego)", desc: "Visually mapping the entire criminal syndicate's network in one graph." }
      ],
      stats: { "Target Audience": "Intelligence Wing", "Primary Goal": "Proactive Tracking", "Skill Level": "Advanced", "Outcome": "Instant Intelligence" }
    }
  }
];
