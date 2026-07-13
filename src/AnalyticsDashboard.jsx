import React, { useEffect, useState } from 'react';
import { LineChart, BarChart2, PieChart, Activity, TrendingUp, Users, ShieldAlert } from 'lucide-react';

export default function AnalyticsDashboard() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animations slightly after mount for a smooth reveal
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const barData = [
    { label: 'Jan', value: 65 },
    { label: 'Feb', value: 82 },
    { label: 'Mar', value: 45 },
    { label: 'Apr', value: 90 },
    { label: 'May', value: 75 },
    { label: 'Jun', value: 95 },
  ];

  const progressData = [
    { title: 'Training Completion', percent: 88, color: '#10b981' },
    { title: 'System Uptime', percent: 99, color: '#3b82f6' },
    { title: 'Case Resolution', percent: 76, color: '#f59e0b' },
  ];

  const stats = [
    { label: 'Total Active Officers', value: '1,245', icon: Users, color: '#3b82f6' },
    { label: 'Pending Investigations', value: '342', icon: ShieldAlert, color: '#ef4444' },
    { label: 'AI Detections', value: '8,901', icon: Activity, color: '#8b5cf6' },
    { label: 'Success Rate', value: '92.4%', icon: TrendingUp, color: '#10b981' },
  ];

  return (
    <div className="animate-fade-in" style={{ padding: '2rem', color: 'var(--text-main)' }}>
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <LineChart size={32} color="#3b82f6" />
            Live Analytics & Metrics
          </h1>
          <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Real-time visualization of UP Police operational and training data.
          </p>
        </div>
      </div>

      {/* Top Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
        {stats.map((stat, idx) => (
          <div key={idx} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '1rem', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', transition: 'transform 0.2s', cursor: 'pointer' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'none'}
          >
            <div style={{ background: `${stat.color}15`, padding: '1rem', borderRadius: '0.75rem', color: stat.color }}>
              <stat.icon size={28} />
            </div>
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem', fontWeight: '600' }}>{stat.label}</div>
              <div style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--text-main)' }}>{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
        
        {/* Monthly Trend Bar Chart (CSS) */}
        <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <h3 style={{ margin: '0 0 2rem 0', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BarChart2 size={20} color="#3b82f6" />
            Crime Resolution Trend (Last 6 Months)
          </h3>
          
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '250px', paddingBottom: '1rem', borderBottom: '2px solid var(--card-border)' }}>
            {barData.map((data, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40px', gap: '0.5rem' }}>
                {/* Tooltip representation */}
                <div style={{ opacity: animate ? 1 : 0, transition: `opacity 0.3s ease ${idx * 0.1 + 0.5}s`, fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-main)' }}>
                  {data.value}%
                </div>
                {/* Animated Bar */}
                <div style={{ 
                  width: '100%', 
                  background: 'linear-gradient(to top, #2563eb, #60a5fa)', 
                  borderRadius: '0.25rem 0.25rem 0 0',
                  height: animate ? `${(data.value / 100) * 200}px` : '0px',
                  transition: `height 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${idx * 0.1}s`,
                  boxShadow: '0 4px 10px rgba(59,130,246,0.3)'
                }}></div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600' }}>{data.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Circular Progress Goals (CSS) */}
        <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <h3 style={{ margin: '0 0 2rem 0', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <PieChart size={20} color="#8b5cf6" />
            Strategic Goals Completion
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {progressData.map((item, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>{item.title}</span>
                  <span style={{ fontWeight: '800', color: item.color }}>{item.percent}%</span>
                </div>
                <div style={{ width: '100%', height: '12px', background: 'var(--icon-bg)', borderRadius: '1rem', overflow: 'hidden' }}>
                  <div style={{ 
                    height: '100%', 
                    background: item.color, 
                    borderRadius: '1rem',
                    width: animate ? `${item.percent}%` : '0%',
                    transition: `width 1s cubic-bezier(0.4, 0, 0.2, 1) ${idx * 0.2}s`,
                    boxShadow: `0 0 10px ${item.color}88`
                  }}></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Legend Area */}
          <div style={{ marginTop: '3rem', padding: '1rem', background: 'var(--icon-bg)', borderRadius: '0.75rem', border: '1px solid var(--card-border)' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Insights</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.5' }}>
              Training completion is on track to hit 95% by Q3. System uptime has remained flawless over the last 30 days. Case resolution rates show a marked improvement following AI deployment.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
