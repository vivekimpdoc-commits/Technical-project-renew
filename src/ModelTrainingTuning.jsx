import React, { useState } from 'react';
import { ArrowLeft, Cpu, Zap, BarChart3, Settings, Layers } from 'lucide-react';
import ModuleDetail from './ModuleDetail';
import './ThaneLevelDashboard.css';

export default function ModelTrainingTuning({ onBack }) {
  const [selectedDetail, setSelectedDetail] = useState(null);

  const reqData = [
    {
      id: 'gpu-tpu',
      title: 'GPU/TPU Infrastructure',
      subtitle: 'Hardware for AI (AI के लिए हार्डवेयर)',
      icon: Cpu,
      color: '#8b5cf6',
      items: [
        'NVIDIA GPUs (A100, H100, RTX Series)',
        'Google TPUs (Tensor Processing Units)',
        'Cloud GPU Providers (AWS, GCP, Azure)',
        'CUDA Programming Basics',
        'Cost Optimization Strategies'
      ],
      example: 'To leverage specialized hardware that can process millions of calculations in parallel, making AI training 100x faster than regular CPUs.',
      deepDive: [
        {
          heading: 'Why GPUs for AI?',
          text: 'GPUs have thousands of small cores designed for parallel processing. Training a neural network involves millions of matrix multiplications — GPUs handle these simultaneously.'
        },
        {
          heading: 'NVIDIA A100 vs H100',
          text: 'A100 was the industry standard for AI training. H100 (Hopper) is its successor with 3x faster AI performance and dedicated Transformer Engine for LLMs.'
        }
      ]
    },
    {
      id: 'hyperparameter',
      title: 'Hyperparameter Tuning',
      subtitle: 'Optimizing the Model (मॉडल को ऑप्टिमाइज़ करना)',
      icon: Settings,
      color: '#0ea5e9',
      items: [
        'What are Hyperparameters?',
        'Grid Search vs Random Search',
        'Bayesian Optimization (Optuna)',
        'Learning Rate Scheduling',
        'Early Stopping & Regularization'
      ],
      example: 'To find the perfect "settings" (like learning rate, batch size) that make an AI model achieve maximum accuracy.',
      deepDive: [
        {
          heading: 'Learning Rate',
          text: 'The most important hyperparameter. Too high → model overshoots and never converges. Too low → training takes forever. Finding the sweet spot is crucial.'
        },
        {
          heading: 'Bayesian Optimization',
          text: 'Instead of blindly trying all combinations (Grid Search), Bayesian Optimization learns from previous trials and intelligently picks the next set of hyperparameters to try.'
        }
      ]
    },
    {
      id: 'distributed-training',
      title: 'Distributed Training',
      subtitle: 'Training Across Machines (कई मशीनों पर ट्रेनिंग)',
      icon: Zap,
      color: '#10b981',
      items: [
        'Data Parallelism vs Model Parallelism',
        'PyTorch Distributed (DDP)',
        'Horovod & DeepSpeed',
        'Mixed Precision Training (FP16)',
        'Gradient Accumulation'
      ],
      example: 'To train massive AI models (billions of parameters) by splitting the work across dozens of GPUs simultaneously, reducing days to hours.',
      deepDive: [
        {
          heading: 'Data Parallelism',
          text: 'The same model is copied to every GPU. Each GPU processes a different batch of data. Gradients are averaged across all GPUs. The most common approach.'
        },
        {
          heading: 'DeepSpeed (Microsoft)',
          text: 'A library by Microsoft that enables training models with trillions of parameters. It uses ZeRO (Zero Redundancy Optimizer) to shard model states across GPUs.'
        }
      ]
    },
    {
      id: 'experiment-tracking',
      title: 'Experiment Tracking',
      subtitle: 'Logging Every Run (हर एक्सपेरिमेंट को ट्रैक करना)',
      icon: BarChart3,
      color: '#f59e0b',
      items: [
        'MLflow Experiment Tracking',
        'Weights & Biases (W&B)',
        'Logging Metrics, Parameters & Artifacts',
        'Comparing Model Runs',
        'Model Registry & Versioning'
      ],
      example: 'To track every single training run — its parameters, metrics, and results — so you can compare 100+ experiments and pick the best model.',
      deepDive: [
        {
          heading: 'MLflow',
          text: 'An open-source platform that tracks experiments, packages models, and manages deployment. Every run logs its parameters (learning rate), metrics (accuracy), and artifacts (model file).'
        },
        {
          heading: 'Weights & Biases (W&B)',
          text: 'A popular cloud-based experiment tracking tool with beautiful dashboards. Teams use it to visualize training curves, compare runs, and share results.'
        }
      ]
    }
  ];

  if (selectedDetail) {
    return <ModuleDetail module={selectedDetail} onBack={() => setSelectedDetail(null)} />;
  }

  return (
    <div className="thane-dashboard-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <button onClick={onBack} className="thane-back-btn" style={{ marginBottom: '1rem' }}>
        <ArrowLeft size={20} /> Back to MLOps
      </button>

      <div className="thane-header">
        <h2 className="thane-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
          <Cpu size={32} color="#8b5cf6" />
          Model Training & Tuning (मॉडल ट्रेनिंग)
        </h2>
        <p className="thane-subtitle">Training AI models on powerful hardware with optimized hyperparameters and distributed computing.</p>
      </div>

      <div className="thane-projects-grid">
        {reqData.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="thane-project-card" style={{ borderTop: `4px solid ${item.color}` }}>
              <div className="thane-card-header">
                <div className="thane-card-icon" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="thane-card-title" style={{ fontSize: '1.15rem', marginBottom: '0.4rem', color: '#0f172a' }}>{item.title}</h3>
                  <div style={{ display: 'inline-block', backgroundColor: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30`, padding: '0.3rem 0.6rem', borderRadius: '0.5rem', fontSize: '0.8rem', fontWeight: '600', lineHeight: '1.3' }}>
                    {item.subtitle}
                  </div>
                </div>
              </div>
              
              <div className="thane-card-content" style={{ marginTop: '1rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {item.items.map((li, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: '#475569', lineHeight: '1.4' }}>
                      <span style={{ minWidth: '6px', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: item.color, marginTop: '0.4rem', flexShrink: 0 }}></span>
                      <span style={{ flex: 1 }}>{li}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="thane-card-footer">
                <button 
                  className="thane-view-btn" 
                  onClick={() => setSelectedDetail(item)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Layers size={18} />
                  Click to View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
