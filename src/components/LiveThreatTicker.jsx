import React from 'react';
import { AlertTriangle, Wifi } from 'lucide-react';

const LiveThreatTicker = () => {
  return (
    <div style={{
      width: '100%',
      backgroundColor: '#7f1d1d', // Deep dark red
      color: '#fca5a5',
      padding: '0.4rem 1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      fontSize: '0.85rem',
      fontWeight: 'bold',
      letterSpacing: '1px',
      overflow: 'hidden',
      position: 'relative',
      borderBottom: '2px solid #b91c1c',
      zIndex: 100
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0, animation: 'pulse 2s infinite' }}>
        <AlertTriangle size={16} color="#fef08a" />
        <span style={{ color: '#fef08a' }}>LIVE INTEL</span>
      </div>
      
      <div style={{ flex: 1, overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{ 
          display: 'inline-block',
          animation: 'ticker 25s linear infinite',
          paddingLeft: '100%'
        }}>
          [CRITICAL] Ransomware variant detected in Kanpur sector (IP: 192.168.45.22) &nbsp;&nbsp;&bull;&nbsp;&nbsp; 
          [ALERT] Suspect vehicle spotted on Highway 19 via ANPR Network &nbsp;&nbsp;&bull;&nbsp;&nbsp;
          [INTEL] Dark Web activity surge: Illegal arms forum chatter increasing &nbsp;&nbsp;&bull;&nbsp;&nbsp;
          [SUCCESS] Crypto-wallet tracing complete. Arrest warrant issued for Node Alpha.
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
        <Wifi size={14} className="animate-pulse" />
        <span>SECURE LINE</span>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default LiveThreatTicker;
