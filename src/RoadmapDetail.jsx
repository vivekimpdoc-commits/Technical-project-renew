import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, BookOpen, Code, Activity, 
  Terminal, Play, RotateCcw, CheckCircle2,
  FileText, Video, Layout, Database, Search, Shield
} from 'lucide-react';

export default function RoadmapDetail({ feature, modColor, modTitle, onBack }) {
  const [activeTab, setActiveTab] = useState('read');
  const [animationClass, setAnimationClass] = useState('opacity-0 translate-y-10');

  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => {
      setAnimationClass('opacity-100 translate-y-0');
    }, 100);
  }, []);

  // Determine Icon and Content based on title keywords
  const titleLower = typeof feature === 'string' ? feature.toLowerCase() : feature.title.toLowerCase();
  
  let TopicIcon = BookOpen;
  let topicIntro = "";
  let topicDeepDive = "";
  let keyTopics = [];
  let codeSnippet = "";

  if (titleLower.includes('requirement') || titleLower.includes('analysis')) {
    TopicIcon = Search;
    topicIntro = "This phase is the foundation of any software project. Before writing a single line of code, we must clearly define what the software needs to do, who will use it, and what problems it solves.";
    topicDeepDive = "In UP Police projects, requirements gathering involves meeting with ground staff (Constables, SHOs) to understand their daily challenges. We document 'Use Cases' (e.g., How does an officer log an FIR digitally?). This documentation becomes the blueprint for the developers. We analyze system constraints, security requirements, and data privacy laws to ensure the final product is legally compliant and technically feasible.";
    keyTopics = [
      { title: "Stakeholder Interviews", desc: "Talking to end-users to understand needs." },
      { title: "Feasibility Study", desc: "Checking if the solution is technically possible." },
      { title: "Requirement Specification (SRS)", desc: "Creating the official document." }
    ];
    codeSnippet = `// Example: Requirements Checklist Array\nconst projectRequirements = [\n  "Must be mobile responsive for field officers",\n  "Must have Hindi language support",\n  "Must encrypt sensitive suspect data",\n  "Must load under 2 seconds on 3G networks"\n];\n\nconsole.log("Analyzing Requirements...");\nprojectRequirements.forEach((req, idx) => {\n  console.log(\`[Req \${idx+1}] \${req}\`);\n});`;
  } 
  else if (titleLower.includes('design') || titleLower.includes('ui')) {
    TopicIcon = Layout;
    topicIntro = "UI/UX Design is about making the software visually appealing and easy to use. A confusing interface can cause critical delays in police operations.";
    topicDeepDive = "During this phase, designers create Wireframes (skeletons of the app) and Mockups (high-fidelity visual designs). We focus on 'User Experience' (UX)—ensuring that buttons are large enough, colors are clear, and workflows are intuitive. For law enforcement software, dark modes are often preferred to reduce eye strain during night shifts, and critical alerts are designed to be highly visible.";
    keyTopics = [
      { title: "Wireframing", desc: "Creating basic layouts using Figma or Adobe XD." },
      { title: "Prototyping", desc: "Linking screens to simulate the app flow." },
      { title: "Accessibility (a11y)", desc: "Ensuring the app is usable by everyone." }
    ];
    codeSnippet = `/* Example: CSS for a High-Priority Alert Button */\n.alert-button {\n  background-color: #ef4444; /* Red for high alert */\n  color: white;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: bold;\n  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);\n  transition: all 0.2s ease;\n}\n\n.alert-button:hover {\n  transform: scale(1.05);\n  background-color: #dc2626;\n}`;
  }
  else if (titleLower.includes('frontend') || titleLower.includes('react') || titleLower.includes('vision') || titleLower.includes('nlp')) {
    TopicIcon = Code;
    topicIntro = "This phase brings the technical models and designs to life. It is the code that interacts directly with users or processes complex data inputs.";
    topicDeepDive = "Whether building React.js interfaces or processing Natural Language for AI bots, this phase focuses on live execution. The system connects via APIs to fetch live data (like crime statistics or FIR statuses) and displays or processes it dynamically. High performance and responsiveness are ensured so that officers experience zero lag during critical operations.";
    keyTopics = [
      { title: "Dynamic Architecture", desc: "Building reusable UI components and fast processors." },
      { title: "State Management", desc: "Handling live data changes instantly." },
      { title: "API Integration", desc: "Connecting the user interface to backend servers." }
    ];
    codeSnippet = `// Example: Fetching Live Data\nimport React, { useState, useEffect } from 'react';\n\nfunction LiveDataDashboard() {\n  const [data, setData] = useState([]);\n\n  useEffect(() => {\n    fetch('/api/v1/secure/live-updates')\n      .then(res => res.json())\n      .then(updates => setData(updates));\n  }, []);\n\n  return (\n    <div className="dashboard">\n      <h2>Live System Updates</h2>\n      {data.map(item => (\n        <div key={item.id} className="item-card">\n           {item.message} - Status: {item.status}\n        </div>\n      ))}\n    </div>\n  );\n}`;
  }
  else if (titleLower.includes('backend') || titleLower.includes('database') || titleLower.includes('math') || titleLower.includes('ml')) {
    TopicIcon = Database;
    topicIntro = "The Backend / Core Logic is the brain of the application. It handles heavy computations, database operations, and deep machine learning algorithms.";
    topicDeepDive = "For UP Police systems, security and accuracy are paramount. This involves writing robust logic (in Node.js, Python, or Java) and connecting to secure databases. For AI models, this includes cleaning datasets, running regressions, and training Neural Networks. We validate every request, encrypt sensitive data using AES-256, and ensure the system scales under load.";
    keyTopics = [
      { title: "Core Logic & APIs", desc: "Creating secure endpoints and algorithms." },
      { title: "Data Processing", desc: "Cleaning and storing data efficiently." },
      { title: "Model Training", desc: "Optimizing neural networks for accuracy." }
    ];
    codeSnippet = `// Example: Secure Route for Data Access\nconst express = require('express');\nconst app = express();\n\n// Middleware to verify clearance\nfunction verifySecurityToken(req, res, next) {\n  const token = req.headers['authorization'];\n  if (!token) return res.status(403).send("Access Denied");\n  // Token validation logic here...\n  next();\n}\n\napp.get('/api/secure/data', verifySecurityToken, (req, res) => {\n  console.log("Authorized access granted.");\n  res.json({ status: 'Confidential Data retrieved safely.' });\n});`;
  }
  else if (titleLower.includes('test') || titleLower.includes('qa')) {
    TopicIcon = Shield;
    topicIntro = "Testing and Quality Assurance (QA) ensures the system is completely bug-free and secure before going live.";
    topicDeepDive = "A bug in a law enforcement app can lead to catastrophic failures. QA engineers perform Unit Testing, Integration Testing, and Penetration Testing (hacking the system to find vulnerabilities). We automate these tests so they run every time a developer changes the code, ensuring high reliability.";
    keyTopics = [
      { title: "Unit Testing", desc: "Testing small, isolated pieces of code." },
      { title: "Automated Testing", desc: "Scripts running continuously to prevent breaks." },
      { title: "Security Auditing", desc: "Finding and patching vulnerabilities." }
    ];
    codeSnippet = `// Example: Jest Unit Test for Security\nconst { validateAccess } = require('./securityUtils');\n\ntest('Access denied for low clearance level', () => {\n  expect(validateAccess('level_1_user')).toBe(false);\n});\n\ntest('Access granted for Commander', () => {\n  expect(validateAccess('commander_auth')).toBe(true);\n});\n\nconsole.log("Running Security Suite...");\nconsole.log("✓ All tests passed.");`;
  }
  else if (titleLower.includes('deploy') || titleLower.includes('support') || titleLower.includes('ci')) {
    TopicIcon = Activity;
    topicIntro = "Deployment is the process of launching the software to live servers so it can be actively used by the department.";
    topicDeepDive = "We use MLOps and DevOps practices. This involves containerizing the app using Docker, ensuring it runs identically on developer laptops and live secure servers. Load Balancers are configured to handle thousands of officers logging in during emergencies without crashing. Post-deployment support involves monitoring error logs and releasing patches seamlessly.";
    keyTopics = [
      { title: "CI/CD Pipelines", desc: "Automating the build and deploy process." },
      { title: "Containerization", desc: "Using Docker to isolate the application." },
      { title: "Server Monitoring", desc: "Tracking CPU usage and server health 24/7." }
    ];
    codeSnippet = `# Example: Dockerfile for Secure Deployment\nFROM node:18-alpine\n\nWORKDIR /app\n\n# Install dependencies securely\nCOPY package.json package-lock.json ./\nRUN npm ci --only=production\n\nCOPY . .\n\nEXPOSE 443\n\nCMD ["npm", "start"]`;
  }
  else {
    TopicIcon = BookOpen;
    topicIntro = "This module provides specialized training and insights tailored for advanced law enforcement operations.";
    topicDeepDive = "Our curriculum is designed by industry experts to bridge the gap between traditional policing and modern technological requirements. You will explore theoretical frameworks, practical use cases, and advanced methodologies that are directly applicable to your daily duties and strategic goals.";
    keyTopics = [
      { title: "Core Theory", desc: "Understanding the foundational concepts." },
      { title: "Practical Application", desc: "Applying theories to real-world police scenarios." },
      { title: "Advanced Analysis", desc: "Deep diving into complex case studies." }
    ];
    codeSnippet = `// Initializing Learning Module\nconsole.log("Loading secure resources...");\n\nfunction startPhase(phaseName) {\n  console.log(\`Initiating phase: \${phaseName}\`);\n  console.log("Decrypting study materials... Done.");\n}\n\nstartPhase("${typeof feature === 'string' ? feature : feature.title}");`;
  }

  const featureTitle = typeof feature === 'string' ? feature : feature.title;
  const featureDesc = typeof feature === 'string' ? "Detailed overview and technical breakdown of this phase." : feature.desc;

  return (
    <div style={{ padding: '2rem', minHeight: '100vh', background: '#0f172a', color: 'white', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Navbar */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #334155', paddingBottom: '1rem' }}>
        <button 
          onClick={onBack}
          style={{ 
            display: 'flex', alignItems: 'center', gap: '0.5rem', 
            background: 'transparent', border: 'none', color: '#94a3b8', 
            cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' 
          }}
        >
          <ArrowLeft size={20} /> Return to {modTitle} Roadmap
        </button>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', transition: 'all 0.5s ease', transform: activeTab ? 'translateY(0)' : 'translateY(10px)', opacity: 1 }} className={animationClass}>
        
        {/* Animated Hero */}
        <div style={{ 
          background: `linear-gradient(135deg, ${modColor}22 0%, #0f172a 100%)`, 
          border: `1px solid ${modColor}44`,
          borderRadius: '1.5rem', 
          padding: '3rem', 
          marginBottom: '2rem',
          display: 'flex', gap: '2rem', alignItems: 'center',
          boxShadow: `0 10px 40px ${modColor}15`
        }}>
          <div style={{ 
            background: `${modColor}22`, 
            padding: '1.5rem', 
            borderRadius: '1rem',
            color: modColor,
            boxShadow: `0 0 30px ${modColor}44`
          }}>
            <TopicIcon size={64} strokeWidth={1.5} />
          </div>
          <div>
            <span style={{ color: modColor, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Phase Details & Curriculum</span>
            <h1 style={{ fontSize: '2.5rem', margin: '0.5rem 0', lineHeight: '1.2' }}>{featureTitle}</h1>
            <p style={{ fontSize: '1.1rem', color: '#cbd5e1', margin: 0, opacity: 0.9 }}>{featureDesc}</p>
          </div>
        </div>

        {/* Custom Tabs */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <button 
            onClick={() => setActiveTab('read')}
            style={{ 
              padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer',
              background: activeTab === 'read' ? modColor : '#1e293b',
              color: activeTab === 'read' ? 'white' : '#94a3b8',
              border: 'none', transition: 'all 0.2s',
              display: 'flex', alignItems: 'center', gap: '0.5rem'
            }}
          >
            <FileText size={18} /> Detailed Explanation
          </button>
          <button 
            onClick={() => setActiveTab('code')}
            style={{ 
              padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer',
              background: activeTab === 'code' ? modColor : '#1e293b',
              color: activeTab === 'code' ? 'white' : '#94a3b8',
              border: 'none', transition: 'all 0.2s',
              display: 'flex', alignItems: 'center', gap: '0.5rem'
            }}
          >
            <Code size={18} /> Practical Implementation
          </button>
        </div>

        {/* Tab Content */}
        <div style={{ background: '#1e293b', borderRadius: '1.5rem', padding: '2.5rem', border: '1px solid #334155' }}>
          
          {activeTab === 'read' && (
            <div className="animate-fade-in" style={{ animation: 'fadeIn 0.3s ease-in-out' }}>
              <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.75rem' }}>Overview</h2>
              <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                {topicIntro}
              </p>

              <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.75rem' }}>Deep Dive & Real-World Application</h2>
              <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                {topicDeepDive}
              </p>

              <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.75rem' }}>Key Components Mastered</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                {keyTopics.map((topic, idx) => (
                  <div key={idx} style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '1rem', borderLeft: `4px solid ${modColor}` }}>
                    <h3 style={{ color: 'white', margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>{topic.title}</h3>
                    <p style={{ color: '#94a3b8', margin: 0, lineHeight: '1.5' }}>{topic.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="animate-fade-in" style={{ animation: 'fadeIn 0.3s ease-in-out' }}>
              <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Terminal size={24} color={modColor} /> Technical Example & Syntax
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Review the code snippet below to understand how this phase is practically implemented in a secure, real-world scenario.
              </p>
              
              <div style={{ background: '#0f172a', borderRadius: '1rem', overflow: 'hidden', border: '1px solid #334155' }}>
                <div style={{ background: '#1e293b', padding: '0.75rem 1.5rem', borderBottom: '1px solid #334155', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }}></div>
                  <span style={{ marginLeft: '1rem', color: '#94a3b8', fontSize: '0.9rem', fontFamily: 'monospace' }}>implementation_demo.js</span>
                </div>
                <pre style={{ padding: '1.5rem', margin: 0, color: '#e2e8f0', fontFamily: 'monospace', fontSize: '0.95rem', overflowX: 'auto', whiteSpace: 'pre-wrap' }}>
                  {codeSnippet}
                </pre>
              </div>
            </div>
          )}

        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
