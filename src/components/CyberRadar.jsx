import React from 'react';
import '../AIWebsite.css';

export default function CyberRadar() {
  return (
    <div className="ai-cyber-radar-container">
      {/* Map overlay (mock visual) */}
      <div className="ai-radar-map-overlay"></div>
      
      {/* The scanning sweep */}
      <div className="ai-radar-sweep"></div>
      
      {/* Concentric rings */}
      <div className="ai-radar-ring ring-1"></div>
      <div className="ai-radar-ring ring-2"></div>
      <div className="ai-radar-ring ring-3"></div>
      
      {/* Node targets on the radar */}
      <div className="ai-radar-target target-1"><span className="target-label">LKO-01</span></div>
      <div className="ai-radar-target target-2"><span className="target-label">KNP-04</span></div>
      <div className="ai-radar-target target-3"><span className="target-label">VNS-02</span></div>
      <div className="ai-radar-target target-4"><span className="target-label">PRY-09</span></div>
      
      {/* Center dot */}
      <div className="ai-radar-center-dot"></div>
    </div>
  );
}
