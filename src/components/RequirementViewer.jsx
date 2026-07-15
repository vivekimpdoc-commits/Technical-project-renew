import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, FileText, Database, Code, Cpu, Server, Monitor, ShieldCheck, Wrench, Layers, Cloud, Activity } from 'lucide-react';
import { sound } from '../utils/SoundEngine';

export default function RequirementViewer({ requirementName, onClose }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sound.init();
    sound.playClick();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600); // Shorter loading for cleaner feel
    return () => clearTimeout(timer);
  }, [requirementName]);

  const getRequirementDetails = () => {
    let icon = <CheckCircle size={40} color="#10b981" />;
    let desc = "Detailed information regarding this requirement.";
    let points = [];

    switch (requirementName) {
      case "Problem Statement":
        icon = <FileText size={40} color="#3b82f6" />;
        desc = "Defining a clear problem statement is the crucial first step for any AI project.";
        points = [
          "Identify the core issue to be solved using AI.",
          "Determine if AI is actually needed or if a simple rule-based system works.",
          "Set measurable success criteria (e.g., 95% accuracy in facial recognition).",
          "Understand the end-users and the business impact."
        ];
        break;
      case "Data":
        icon = <Database size={40} color="#f59e0b" />;
        desc = "High-quality, relevant data is the fuel for any Machine Learning model.";
        points = [
          "Collect raw data from databases, APIs, or physical records.",
          "Perform Data Cleaning (handling missing values, outliers).",
          "Ensure Data Privacy & Compliance (Anonymization).",
          "Data Labeling for supervised learning models."
        ];
        break;
      case "Programming Language (Python)":
        icon = <Code size={40} color="#10b981" />;
        desc = "Python is the industry standard for AI and Data Science development.";
        points = [
          "Rich ecosystem of libraries (NumPy, Pandas, Matplotlib).",
          "Strong community support and extensive documentation.",
          "Easy integration with C/C++ for performance-critical tasks.",
          "Standard choice for both research and production environments."
        ];
        break;
      case "Machine Learning Frameworks":
        icon = <Layers size={40} color="#8b5cf6" />;
        desc = "Specialized libraries that provide pre-built algorithms and neural network architectures.";
        points = [
          "Scikit-Learn for traditional Machine Learning (Regression, Classification).",
          "TensorFlow & Keras for scalable Deep Learning models.",
          "PyTorch for research, dynamic computation graphs, and GenAI.",
          "Hugging Face Transformers for advanced NLP tasks."
        ];
        break;
      case "GPU/Cloud Infrastructure":
        icon = <Cpu size={40} color="#ec4899" />;
        desc = "Hardware accelerators required for training complex AI models in a reasonable timeframe.";
        points = [
          "NVIDIA GPUs (CUDA) for parallel matrix computations.",
          "Cloud Providers like AWS (SageMaker), Google Cloud, or Azure.",
          "TPUs (Tensor Processing Units) for massive deep learning workloads.",
          "On-premise servers for highly sensitive/classified police data."
        ];
        break;
      case "Database":
        icon = <Server size={40} color="#6366f1" />;
        desc = "Robust storage solutions for handling training datasets and real-time inference data.";
        points = [
          "Relational DBs (PostgreSQL, MySQL) for structured records.",
          "NoSQL DBs (MongoDB) for unstructured or semi-structured data.",
          "Vector Databases (Pinecone, Milvus) for LLM memory and RAG.",
          "Data Lakes (AWS S3) for massive raw data storage."
        ];
        break;
      case "Model Training Environment":
        icon = <Monitor size={40} color="#14b8a6" />;
        desc = "The workspace where data scientists experiment, code, and train models.";
        points = [
          "Jupyter Notebooks for interactive coding and visualization.",
          "Google Colab for quick experiments with free GPU access.",
          "Docker containers for reproducible training environments.",
          "IDE like VS Code with Python extensions for deployment coding."
        ];
        break;
      case "Deployment Platform":
        icon = <Cloud size={40} color="#0ea5e9" />;
        desc = "Systems used to serve the trained AI model so end-users can access it via web or API.";
        points = [
          "Flask or FastAPI for building RESTful model APIs.",
          "Docker & Kubernetes for container orchestration and scaling.",
          "Streamlit or Gradio for quick interactive frontend UI.",
          "Managed services like AWS SageMaker Endpoints."
        ];
        break;
      case "Monitoring System":
        icon = <Activity size={40} color="#f43f5e" />;
        desc = "Continuous observation of the AI model in production to ensure it remains accurate and stable.";
        points = [
          "Track model performance metrics (Latency, Throughput, Error Rate).",
          "Detect Data Drift (when real-world data changes over time).",
          "Monitor Concept Drift (when the relationship between inputs and outputs changes).",
          "Automated alerting systems for system failures."
        ];
        break;
      case "Security & Governance":
        icon = <ShieldCheck size={40} color="#10b981" />;
        desc = "Protocols to ensure AI systems are secure, ethical, and legally compliant.";
        points = [
          "Role-Based Access Control (RBAC) for API endpoints.",
          "Encryption of data at rest and in transit.",
          "Auditing AI decisions to prevent bias and ensure fairness.",
          "Compliance with IT Act, BNS, and data privacy regulations."
        ];
        break;
      case "Maintenance & Support":
        icon = <Wrench size={40} color="#64748b" />;
        desc = "Ongoing processes to keep the AI system relevant, updated, and bug-free.";
        points = [
          "Regular retraining pipelines with fresh incoming data.",
          "Bug fixing and patching security vulnerabilities.",
          "Scaling infrastructure as user load increases.",
          "User support and feedback loop integration."
        ];
        break;
      default:
        break;
    }
    return { icon, desc, points };
  };

  const details = getRequirementDetails();

  if (loading) {
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#ffffff', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#1e293b', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ animation: 'pulse 1.5s infinite', marginBottom: '2rem' }}>
          <CheckCircle size={64} color="#10b981" />
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Loading Information...</h2>
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: '#f8fafc', // Light modern background
      zIndex: 9999, overflowY: 'auto',
      fontFamily: 'system-ui, sans-serif'
    }}>
      {/* Header */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '1.5rem 3rem', display: 'flex', alignItems: 'center', gap: '2rem', position: 'sticky', top: 0, zIndex: 10, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <button 
          onClick={() => { sound.playClick(); onClose(); }}
          style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', color: '#475569', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'all 0.2s', fontWeight: 'bold' }}
          onMouseOver={e => { e.currentTarget.style.background = '#e2e8f0'; sound.playHover(); }}
          onMouseOut={e => e.currentTarget.style.background = '#f1f5f9'}
        >
          <ArrowLeft size={18} /> Back
        </button>
        <div>
          <div style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Requirement Details</div>
          <h1 style={{ color: '#0f172a', margin: 0, fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 'bold' }}>
            {requirementName}
          </h1>
        </div>
      </div>

      <div style={{ padding: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
        
        <div className="animate-fade-in" style={{ background: '#ffffff', borderRadius: '1rem', border: '1px solid #e2e8f0', padding: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #e2e8f0' }}>
            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
              {details.icon}
            </div>
            <p style={{ color: '#475569', fontSize: '1.25rem', lineHeight: '1.6', margin: 0, fontWeight: '500' }}>
              {details.desc}
            </p>
          </div>

          <h3 style={{ color: '#0f172a', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Key Information</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {details.points.map((point, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: '#f8fafc', padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
                <CheckCircle size={24} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#334155', fontSize: '1.1rem', lineHeight: '1.5' }}>{point}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        @keyframes pulse { 0% { opacity: 1; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.1); } 100% { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
}
