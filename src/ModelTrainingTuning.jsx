import React, { useState } from 'react';
import { ArrowLeft, Cpu, Zap, BarChart3, Settings, BookOpen } from 'lucide-react';
import ModuleDetail from './ModuleDetail';
import './ThaneLevelDashboard.css';

export default function ModelTrainingTuning({ onBack }) {
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isPopupMaximized, setIsPopupMaximized] = useState(false);

  const reqData = [
    {
      id: 'gpu-tpu', title: 'GPU/TPU Infrastructure', subtitle: 'Hardware for AI (AI के लिए हार्डवेयर)',
      icon: Cpu, color: '#8b5cf6',
      items: ['NVIDIA GPUs (A100, H100, RTX Series)', 'Google TPUs (Tensor Processing Units)', 'Cloud GPU Providers (AWS, GCP, Azure)', 'CUDA Programming Basics', 'Cost Optimization Strategies'],
      example: 'To leverage specialized hardware that can process millions of calculations in parallel, making AI training 100x faster than regular CPUs.',
      deepDive: [
        { heading: 'Why GPUs for AI?', text: 'GPUs have thousands of small cores designed for parallel processing. Training a neural network involves millions of matrix multiplications — GPUs handle these simultaneously.' },
        { heading: 'NVIDIA A100 vs H100', text: 'A100 was the industry standard for AI training. H100 (Hopper) is its successor with 3x faster AI performance and dedicated Transformer Engine for LLMs.' }
      ]
    },
    {
      id: 'hyperparameter', title: 'Hyperparameter Tuning', subtitle: 'Optimizing the Model (मॉडल को ऑप्टिमाइज़ करना)',
      icon: Settings, color: '#0ea5e9',
      items: ['What are Hyperparameters?', 'Grid Search vs Random Search', 'Bayesian Optimization (Optuna)', 'Learning Rate Scheduling', 'Early Stopping & Regularization'],
      example: 'To find the perfect "settings" (like learning rate, batch size) that make an AI model achieve maximum accuracy.',
      deepDive: [
        { heading: 'Learning Rate', text: 'The most important hyperparameter. Too high → model overshoots and never converges. Too low → training takes forever. Finding the sweet spot is crucial.' },
        { heading: 'Bayesian Optimization', text: 'Instead of blindly trying all combinations (Grid Search), Bayesian Optimization learns from previous trials and intelligently picks the next set of hyperparameters to try.' }
      ]
    },
    {
      id: 'distributed-training', title: 'Distributed Training', subtitle: 'Training Across Machines (कई मशीनों पर ट्रेनिंग)',
      icon: Zap, color: '#10b981',
      items: ['Data Parallelism vs Model Parallelism', 'PyTorch Distributed (DDP)', 'Horovod & DeepSpeed', 'Mixed Precision Training (FP16)', 'Gradient Accumulation'],
      example: 'To train massive AI models (billions of parameters) by splitting the work across dozens of GPUs simultaneously, reducing days to hours.',
      deepDive: [
        { heading: 'Data Parallelism', text: 'The same model is copied to every GPU. Each GPU processes a different batch of data. Gradients are averaged across all GPUs. The most common approach.' },
        { heading: 'DeepSpeed (Microsoft)', text: 'A library by Microsoft that enables training models with trillions of parameters. It uses ZeRO (Zero Redundancy Optimizer) to shard model states across GPUs.' }
      ]
    },
    {
      id: 'experiment-tracking', title: 'Experiment Tracking', subtitle: 'Logging Every Run (हर एक्सपेरिमेंट को ट्रैक करना)',
      icon: BarChart3, color: '#f59e0b',
      items: ['MLflow Experiment Tracking', 'Weights & Biases (W&B)', 'Logging Metrics, Parameters & Artifacts', 'Comparing Model Runs', 'Model Registry & Versioning'],
      example: 'To track every single training run — its parameters, metrics, and results — so you can compare 100+ experiments and pick the best model.',
      deepDive: [
        { heading: 'MLflow', text: 'An open-source platform that tracks experiments, packages models, and manages deployment. Every run logs its parameters (learning rate), metrics (accuracy), and artifacts (model file).' },
        { heading: 'Weights & Biases (W&B)', text: 'A popular cloud-based experiment tracking tool with beautiful dashboards. Teams use it to visualize training curves, compare runs, and share results.' }
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
          <ArrowLeft size={20} /> Back to MLOps
        </button>
      <div className="thane-header">
        <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}><Cpu size={32} color="#8b5cf6" /> Model Training & Tuning (मॉडल ट्रेनिंग)</h2>
        <p className="thane-subtitle">Training AI models on powerful hardware with optimized hyperparameters and distributed computing.</p>
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
