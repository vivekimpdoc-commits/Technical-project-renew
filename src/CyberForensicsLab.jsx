import React, { useState, useEffect } from 'react';
import { ShieldAlert, Fingerprint, HardDrive, Bitcoin, Search, Terminal as TerminalIcon, AlertTriangle, CheckCircle, SearchCode, ChevronRight, Activity, ArrowRight, XCircle } from 'lucide-react';
import './CyberForensicsLab.css';

export default function CyberForensicsLab() {
  const [activeTab, setActiveTab] = useState('darkweb');
  const [isScanning, setIsScanning] = useState(false);
  const [scanLogs, setScanLogs] = useState([]);
  const [scanProgress, setScanProgress] = useState(0);

  // Simulated Scanning Logic
  const startScan = (type) => {
    setIsScanning(true);
    setScanLogs([]);
    setScanProgress(0);

    const logSequence = type === 'darkweb' ? [
      "INITIATING SECURE ONION ROUTING PROTOCOL...",
      "CONNECTING TO TOR NODES [192.168.0.x]...",
      "SCANNING FORUMS FOR U.P. POLICE LEAKED DATA...",
      "ANALYZING DUMP 'UP_CITIZEN_DB_2026.sql'...",
      "ALERT: MATCH FOUND IN DATABASE DUMP",
      "EXTRACTING THREAT ACTOR IP ADDRESS...",
      "TRACE COMPLETE. LOCATION VERIFIED."
    ] : type === 'crypto' ? [
      "CONNECTING TO BLOCKCHAIN LEDGER...",
      "TRACING TXID: 9a8b7c6d5e4f3g2h1...",
      "ANALYZING WALLET HOPPING BEHAVIOR...",
      "IDENTIFIED TUMBLER SERVICE USED...",
      "BYPASSING ANONYMIZATION LAYERS...",
      "MATCHED EXCHANGE KYC DATA...",
      "SUSPECT IDENTITY UNCOVERED."
    ] : [
      "MOUNTING SEIZED DEVICE DRIVE [sdb1]...",
      "BYPASSING LOCK SCREEN ENCRYPTION...",
      "EXTRACTING DELETED WHATSAPP MEDIA...",
      "CARVING HEX DATA FOR FRAGMENTS...",
      "REBUILDING CORRUPT JPEG FILES...",
      "ANALYZING GPS EXIF METADATA...",
      "EVIDENCE RECOVERY SUCCESSFUL."
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < logSequence.length) {
        setScanLogs(prev => [...prev, logSequence[currentStep]]);
        setScanProgress(Math.floor(((currentStep + 1) / logSequence.length) * 100));
        currentStep++;
      } else {
        clearInterval(interval);
        setIsScanning(false);
      }
    }, 1200);
  };

  return (
    <div className="cf-lab-container">
      {/* Header */}
      <div className="cf-header">
        <div className="cf-header-title">
          <ShieldAlert size={32} className="cf-pulse-icon" />
          <div>
            <h1>CYBER FORENSICS LAB</h1>
            <p>Advanced Digital Investigation & Threat Intelligence</p>
          </div>
        </div>
        <div className="cf-status">
          <span className="cf-dot green"></span> SECURE CONNECTION ACTIVE
        </div>
      </div>

      {/* Navigation */}
      <div className="cf-tabs">
        <button 
          className={`cf-tab ${activeTab === 'darkweb' ? 'active' : ''}`}
          onClick={() => setActiveTab('darkweb')}
        >
          <SearchCode size={18} /> Dark Web Scanner
        </button>
        <button 
          className={`cf-tab ${activeTab === 'crypto' ? 'active' : ''}`}
          onClick={() => setActiveTab('crypto')}
        >
          <Bitcoin size={18} /> Crypto Flow Tracker
        </button>
        <button 
          className={`cf-tab ${activeTab === 'malware' ? 'active' : ''}`}
          onClick={() => setActiveTab('malware')}
        >
          <HardDrive size={18} /> Device Forensics
        </button>
      </div>

      {/* Main Content Area */}
      <div className="cf-content-area">
        
        {/* Left Panel: Input & Control */}
        <div className="cf-panel cf-control-panel">
          <h2>
            {activeTab === 'darkweb' && 'Deep Search Query'}
            {activeTab === 'crypto' && 'Transaction Tracing'}
            {activeTab === 'malware' && 'Seized Device Extraction'}
          </h2>
          
          <div className="cf-input-group">
            <label>
              {activeTab === 'darkweb' && 'Target Keyword / SQL Dump'}
              {activeTab === 'crypto' && 'Blockchain TxID / Wallet Address'}
              {activeTab === 'malware' && 'Device ID / Image Path'}
            </label>
            <div className="cf-search-box">
              <Search size={18} />
              <input 
                type="text" 
                placeholder={
                  activeTab === 'darkweb' ? 'e.g., "UP_Police_Leak"' :
                  activeTab === 'crypto' ? 'e.g., 0x8a9B...7fC' :
                  'e.g., /dev/sdb1 (iPhone 14 Pro)'
                }
              />
            </div>
          </div>

          <button 
            className={`cf-btn-execute ${isScanning ? 'scanning' : ''}`}
            onClick={() => startScan(activeTab)}
            disabled={isScanning}
          >
            {isScanning ? (
              <><Activity size={18} className="cf-spin" /> EXECUTING PROTOCOL...</>
            ) : (
              <><TerminalIcon size={18} /> INITIATE INVESTIGATION</>
            )}
          </button>

          {/* Visual Simulation Widgets */}
          <div className="cf-widget-box">
            {activeTab === 'darkweb' && (
              <div className="cf-onion-route">
                <div className="cf-node source">Local</div>
                <div className="cf-route-line"><div className={`cf-packet ${isScanning ? 'active' : ''}`}></div></div>
                <div className="cf-node tor">Tor Node 1</div>
                <div className="cf-route-line"><div className={`cf-packet ${isScanning ? 'active' : ''}`} style={{animationDelay: '0.2s'}}></div></div>
                <div className="cf-node tor">Tor Node 2</div>
                <div className="cf-route-line"><div className={`cf-packet ${isScanning ? 'active' : ''}`} style={{animationDelay: '0.4s'}}></div></div>
                <div className="cf-node dest">Target DB</div>
              </div>
            )}
            
            {activeTab === 'crypto' && (
              <div className="cf-crypto-graph">
                <div className="cf-wallet suspect">Suspect Wallet</div>
                <ArrowRight size={20} className="cf-flow-arrow" />
                <div className="cf-wallet tumbler">Tumbler (Mixer)</div>
                <ArrowRight size={20} className="cf-flow-arrow" />
                <div className="cf-wallet exchange">Binance (KYC Match)</div>
              </div>
            )}

            {activeTab === 'malware' && (
              <div className="cf-hex-dump">
                <div className="hex-line">0x0000: 4D 5A 90 00 03 00 00 00  MZ......</div>
                <div className="hex-line">0x0010: 04 00 00 00 FF FF 00 00  ........</div>
                <div className="hex-line">0x0020: B8 00 00 00 00 00 00 00  ........</div>
                <div className="hex-line">0x0030: 40 00 00 00 00 00 00 00  @.......</div>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel: Terminal Output */}
        <div className="cf-panel cf-terminal-panel">
          <div className="cf-terminal-header">
            <span>root@kavach-intel:~#</span>
            <div className="cf-terminal-actions">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
          </div>
          
          <div className="cf-terminal-body">
            {scanLogs.length === 0 && !isScanning && (
              <div className="cf-terminal-placeholder">
                Waiting for target input. System standing by...
              </div>
            )}
            
            {scanLogs.map((log, index) => (
              <div key={index} className={`cf-log-line ${log.includes('ALERT') ? 'alert' : log.includes('SUCCESS') || log.includes('COMPLETE') ? 'success' : ''}`}>
                <ChevronRight size={14} /> {log}
              </div>
            ))}
            
            {isScanning && (
              <div className="cf-loading-bar-container">
                <div className="cf-loading-bar" style={{ width: `${scanProgress}%` }}></div>
                <span className="cf-progress-text">{scanProgress}%</span>
              </div>
            )}
            
            {scanProgress === 100 && !isScanning && (
              <div className="cf-final-report">
                <h4><CheckCircle size={18} /> INVESTIGATION REPORT GENERATED</h4>
                <p>Evidence package encrypted and saved to case file.</p>
                <button className="cf-btn-download">EXPORT .PDF REPORT</button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
