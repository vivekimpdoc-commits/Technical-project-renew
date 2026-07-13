import React from 'react';
import { Construction } from 'lucide-react';

export default function Reports() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '60vh', color: 'white', padding: '2rem' }}>
      <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '3rem', borderRadius: '1rem', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', textAlign: 'center' }}>
        <Construction size={64} style={{ color: '#3b82f6', marginBottom: '1.5rem' }} />
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Reports</h2>
        <p style={{ color: 'var(--text-muted)' }}>This module is currently under development.</p>
      </div>
    </div>
  );
}
