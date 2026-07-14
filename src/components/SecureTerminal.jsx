import React, { useState, useEffect } from 'react';
import { sound } from '../utils/SoundEngine';

const SecureTerminal = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [isHacking, setIsHacking] = useState(true);

  const bootSequence = [
    "INITIALIZING K.A.V.A.C.H. SECURE PROTOCOL...",
    "ESTABLISHING ENCRYPTED TUNNEL TO UP POLICE HQ...",
    "HANDSHAKE ACCEPTED. PING: 12ms",
    "VERIFYING BIOMETRICS AND OFFICER ID [ALPHA-77]...",
    "ACCESS GRANTED.",
    "LOADING CYBER COMMAND MODULES...",
    "DECRYPTING MISSION FILES (AES-256)...",
    "INITIALIZING THREAT RADAR...",
    "SYSTEM ONLINE. WELCOME, OFFICER."
  ];

  useEffect(() => {
    let delay = 0;
    bootSequence.forEach((text, index) => {
      delay += Math.random() * 400 + 300; // Random delay between 300ms - 700ms
      setTimeout(() => {
        sound.init(); sound.playTyping();
        setLines(prev => [...prev, text]);
        if (index === bootSequence.length - 1) {
          setTimeout(() => {
            sound.playAccessGranted();
            setIsHacking(false);
            setTimeout(onComplete, 800); // Fade out then trigger complete
          }, 1000);
        }
      }, delay);
    });
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#020617', // Deep dark slate
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      padding: '3rem',
      fontFamily: '"Courier New", Courier, monospace',
      color: '#10b981', // Hacker green
      opacity: isHacking ? 1 : 0,
      transition: 'opacity 0.8s ease-in-out',
      pointerEvents: isHacking ? 'all' : 'none'
    }}>
      <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ width: '40px', height: '40px', border: '2px solid #10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'spin 4s linear infinite' }}>
          <div style={{ width: '20px', height: '20px', backgroundColor: '#10b981' }}></div>
        </div>
        <h1 style={{ margin: 0, fontSize: '2rem', letterSpacing: '4px', textShadow: '0 0 10px #10b981' }}>KAVACH OS v2.4</h1>
      </div>
      
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {lines.map((line, idx) => (
          <div key={idx} style={{ 
            fontSize: '1.2rem', 
            marginBottom: '0.8rem', 
            textShadow: '0 0 5px #10b981',
            animation: 'fadeIn 0.2s ease-out' 
          }}>
            <span style={{ color: '#38bdf8' }}>[{new Date().toISOString().split('T')[1].slice(0, 8)}]</span> {line}
          </div>
        ))}
        {isHacking && (
          <div style={{ fontSize: '1.2rem', marginTop: '0.5rem', animation: 'blink 1s infinite' }}>_</div>
        )}
      </div>

      <style>{`
        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </div>
  );
};

export default SecureTerminal;
