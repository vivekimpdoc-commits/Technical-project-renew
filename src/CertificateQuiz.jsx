import React, { useState, useEffect } from 'react';
import { Shield, Award, CheckCircle2, XCircle, ChevronRight, User, Loader2, Download, Check } from 'lucide-react';

export default function CertificateQuiz({ moduleTitle, modColor, onClose }) {
  const [step, setStep] = useState('intro'); // intro -> quiz -> processing -> certificate
  const [officerName, setOfficerName] = useState('');
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [processText, setProcessText] = useState('ANALYZING RESPONSES...');

  // 25 Comprehensive Questions
  const questions = [
    { q: "What does FIR stand for?", options: ["First Information Report", "Final Investigation Report", "Fast Incident Response", "Federal Investigation Request"], ans: 0 },
    { q: "Under which section of the IT Act is digital evidence admissible?", options: ["Section 420", "Section 65B", "Section 144", "Section 66A"], ans: 1 },
    { q: "What is the primary purpose of a Faraday Bag?", options: ["Carrying lunch", "Blocking all wireless signals to a seized device", "Storing physical weapons", "Charging a laptop"], ans: 1 },
    { q: "What is 'Phishing'?", options: ["Fishing in a river", "Fraudulent emails intended to steal credentials", "A type of firewall", "A secure network protocol"], ans: 1 },
    { q: "What does CDR stand for in police investigations?", options: ["Call Detail Record", "Criminal Data Registry", "Central Dispatch Room", "Cyber Defense Response"], ans: 0 },
    { q: "Which technology is used to secure cryptocurrency transactions?", options: ["Bluetooth", "Blockchain", "Broadband", "BitLocker"], ans: 1 },
    { q: "In AI, what does 'Machine Learning' primarily involve?", options: ["Making robots run", "Training algorithms on historical data", "Installing antivirus", "Upgrading RAM"], ans: 1 },
    { q: "What is the role of an IP Address in cyber crime?", options: ["It fixes computers", "It identifies a device on a network", "It speeds up internet", "It deletes viruses"], ans: 1 },
    { q: "Which tool is commonly used to extract data from a locked smartphone?", options: ["Microsoft Excel", "Cellebrite / UFED", "Adobe Photoshop", "VLC Player"], ans: 1 },
    { q: "What is 'Ransomware'?", options: ["Malware that encrypts data and demands payment", "A software that speeds up PC", "A type of physical lock", "An email client"], ans: 0 },
    { q: "Which law recently replaced the Indian Penal Code (IPC)?", options: ["Motor Vehicles Act", "Bharatiya Nyaya Sanhita (BNS)", "IT Act 2000", "Cyber Security Act"], ans: 1 },
    { q: "What does OSINT stand for?", options: ["Open Source Intelligence", "Operating System Interface", "Online Security Investigation", "Optical Sensor Integration"], ans: 0 },
    { q: "How does 'Predictive Policing' help law enforcement?", options: ["By replacing police officers", "By forecasting crime hotspots using historical data", "By printing FIRs faster", "By washing police vehicles"], ans: 1 },
    { q: "What is a 'Hash Value' in digital forensics?", options: ["A hashtag on Twitter", "A digital fingerprint of a file", "A type of drug", "A secret password"], ans: 1 },
    { q: "What is the function of a VPN?", options: ["To make the computer faster", "To encrypt internet traffic and hide IP address", "To download games", "To clean the screen"], ans: 1 },
    { q: "What is 'Deepfake' technology primarily used for in cybercrime?", options: ["Creating highly realistic fake videos or audio", "Deep cleaning a hard drive", "Taking underwater photos", "Improving internet speed"], ans: 0 },
    { q: "What is 'Social Engineering' in hacking?", options: ["Building a bridge", "Manipulating humans into revealing confidential info", "Creating social media profiles", "Hosting a party"], ans: 1 },
    { q: "Which network protocol is considered secure for web browsing?", options: ["HTTP", "FTP", "HTTPS", "SMTP"], ans: 2 },
    { q: "What is the primary function of a Firewall?", options: ["To stop physical fires", "To block unauthorized network access", "To cool down the CPU", "To increase monitor brightness"], ans: 1 },
    { q: "In mobile forensics, what does IMEI stand for?", options: ["International Mobile Equipment Identity", "Internal Memory Extractor Interface", "Internet Media Exchange Index", "Instant Messaging Encryption ID"], ans: 0 },
    { q: "What is the main characteristic of the 'Dark Web'?", options: ["It uses a dark theme", "It requires special software like Tor to access", "It is only available at night", "It is faster than normal web"], ans: 1 },
    { q: "What does 'Two-Factor Authentication' (2FA) provide?", options: ["Two passwords", "An extra layer of security beyond just a password", "Two user accounts", "Faster login"], ans: 1 },
    { q: "What is a 'Zero-Day' vulnerability?", options: ["A software flaw unknown to the vendor", "A computer that doesn't turn on", "A virus that lasts for zero days", "A fast internet connection"], ans: 0 },
    { q: "Which of the following is a key feature of 'Cloud Computing'?", options: ["Storing data in physical hard drives", "Storing and accessing data over the internet", "Creating clouds in the sky", "Printing documents remotely"], ans: 1 },
    { q: "What is the most critical first step when seizing a computer at a crime scene?", options: ["Restart it to see if it works", "Photograph the screen and isolate it from the network", "Install an antivirus", "Change the wallpaper"], ans: 1 }
  ];

  const handleNext = () => {
    if (selectedAnswer === questions[currentQ].ans) {
      setScore(s => s + 1);
    }
    setShowResult(true);
    
    setTimeout(() => {
      setShowResult(false);
      setSelectedAnswer(null);
      if (currentQ < questions.length - 1) {
        setCurrentQ(q => q + 1);
      } else {
        setStep('processing');
      }
    }, 1500);
  };

  useEffect(() => {
    if (step === 'processing') {
      setTimeout(() => setProcessText('ANALYZING RESULTS...'), 1000);
      setTimeout(() => setProcessText('CALCULATING SCORE...'), 2000);
      setTimeout(() => setStep('result'), 3000);
    }
  }, [step]);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(15, 23, 42, 0.95)', backdropFilter: 'blur(10px)',
      zIndex: 9999999, display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'system-ui, sans-serif'
    }}>
      
      {/* INTRO STEP */}
      {step === 'intro' && (
        <div className="animate-fade-in" style={{
          background: '#1e293b', border: `1px solid ${modColor}55`, borderRadius: '1.5rem',
          padding: '3rem', width: '90%', maxWidth: '500px', textAlign: 'center',
          boxShadow: `0 20px 50px ${modColor}22`
        }}>
          <Award size={64} color={modColor} style={{ margin: '0 auto 1.5rem auto' }} />
          <h2 style={{ color: 'white', fontSize: '2rem', margin: '0 0 1rem 0' }}>Module Assessment</h2>
          <p style={{ color: '#cbd5e1', marginBottom: '2rem', lineHeight: '1.6' }}>
            Complete this quick assessment to verify your knowledge for <b>{moduleTitle}</b>.
          </p>
          
          <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <label style={{ color: '#94a3b8', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '0.5rem', display: 'block' }}>OFFICER NAME / ID</label>
            <div style={{ position: 'relative' }}>
              <User size={20} color="#94a3b8" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="text" 
                value={officerName}
                onChange={(e) => setOfficerName(e.target.value)}
                placeholder="Enter your name (e.g. Insp. Rajesh Kumar)"
                style={{
                  width: '100%', padding: '1rem 1rem 1rem 3rem', borderRadius: '0.75rem',
                  background: '#0f172a', border: '1px solid #334155', color: 'white',
                  fontSize: '1rem', outline: 'none'
                }}
              />
            </div>
          </div>

          <button 
            disabled={!officerName.trim()}
            onClick={() => setStep('quiz')}
            style={{
              width: '100%', padding: '1rem', borderRadius: '0.75rem',
              background: officerName.trim() ? modColor : '#334155',
              color: officerName.trim() ? 'white' : '#94a3b8',
              border: 'none', fontSize: '1.1rem', fontWeight: 'bold',
              cursor: officerName.trim() ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
            }}
          >
            Start Assessment <ChevronRight size={20} />
          </button>
          
          <button 
            onClick={onClose}
            style={{
              marginTop: '1rem', background: 'transparent', border: 'none', color: '#94a3b8',
              cursor: 'pointer', fontSize: '0.9rem'
            }}
          >
            Cancel
          </button>
        </div>
      )}

      {/* QUIZ STEP */}
      {step === 'quiz' && (
        <div className="animate-fade-in" style={{
          background: '#1e293b', border: `1px solid ${modColor}55`, borderRadius: '1.5rem',
          padding: '3rem', width: '90%', maxWidth: '700px',
          boxShadow: `0 20px 50px ${modColor}22`
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <span style={{ color: modColor, fontWeight: 'bold' }}>Question {currentQ + 1} of {questions.length}</span>
            <span style={{ color: '#94a3b8' }}>{moduleTitle}</span>
          </div>
          
          <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '2rem', lineHeight: '1.4' }}>
            {questions[currentQ].q}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {questions[currentQ].options.map((opt, idx) => {
              let bg = '#0f172a';
              let border = '1px solid #334155';
              let icon = null;

              if (showResult) {
                if (idx === questions[currentQ].ans) {
                  bg = '#10b98122'; border = '1px solid #10b981'; icon = <CheckCircle2 color="#10b981" />;
                } else if (idx === selectedAnswer) {
                  bg = '#ef444422'; border = '1px solid #ef4444'; icon = <XCircle color="#ef4444" />;
                }
              } else if (selectedAnswer === idx) {
                bg = `${modColor}22`; border = `1px solid ${modColor}`;
              }

              return (
                <button
                  key={idx}
                  disabled={showResult}
                  onClick={() => setSelectedAnswer(idx)}
                  style={{
                    padding: '1.25rem 1.5rem', borderRadius: '0.75rem', background: bg, border: border,
                    color: 'white', fontSize: '1.1rem', textAlign: 'left', cursor: showResult ? 'default' : 'pointer',
                    transition: 'all 0.2s', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                  }}
                >
                  {opt}
                  {icon}
                </button>
              );
            })}
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button 
              onClick={onClose}
              style={{
                padding: '0.75rem 1.5rem', borderRadius: '0.75rem',
                background: 'transparent', color: '#ef4444',
                border: '1px solid #ef4444', fontSize: '1rem', fontWeight: 'bold',
                cursor: 'pointer', transition: 'all 0.2s'
              }}
            >
              Cancel Assessment
            </button>
            <button 
              disabled={selectedAnswer === null || showResult}
              onClick={handleNext}
              style={{
                padding: '0.75rem 2rem', borderRadius: '0.75rem',
                background: (selectedAnswer !== null && !showResult) ? modColor : '#334155',
                color: (selectedAnswer !== null && !showResult) ? 'white' : '#94a3b8',
                border: 'none', fontSize: '1rem', fontWeight: 'bold',
                cursor: (selectedAnswer !== null && !showResult) ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s'
              }}
            >
              Submit Answer
            </button>
          </div>
        </div>
      )}

      {/* PROCESSING STEP */}
      {step === 'processing' && (
        <div className="animate-fade-in" style={{ textAlign: 'center' }}>
          <Loader2 size={64} color={modColor} className="spin-animation" style={{ margin: '0 auto 2rem auto' }} />
          <h2 style={{ color: 'white', fontSize: '1.5rem', letterSpacing: '2px', fontFamily: 'monospace' }}>
            {processText}
          </h2>
        </div>
      )}

      {/* RESULT STEP */}
      {step === 'result' && (
        <div className="animate-fade-in" style={{
          background: '#1e293b', border: `1px solid ${modColor}55`, borderRadius: '1.5rem',
          padding: '3rem', width: '90%', maxWidth: '500px', textAlign: 'center',
          boxShadow: `0 20px 50px ${modColor}22`
        }}>
          {score >= Math.ceil(questions.length / 2) ? (
            <CheckCircle2 size={80} color="#10b981" style={{ margin: '0 auto 1.5rem auto' }} />
          ) : (
            <XCircle size={80} color="#ef4444" style={{ margin: '0 auto 1.5rem auto' }} />
          )}
          <h2 style={{ color: 'white', fontSize: '2.5rem', margin: '0 0 1rem 0' }}>{score} / {questions.length}</h2>
          <p style={{ color: '#cbd5e1', marginBottom: '2rem', fontSize: '1.2rem', lineHeight: '1.6' }}>
            Officer <b>{officerName}</b>, you have completed the assessment for <b>{moduleTitle}</b>.
          </p>
          <button 
            onClick={onClose}
            style={{
              width: '100%', padding: '1rem', borderRadius: '0.75rem',
              background: modColor, color: 'white',
              border: 'none', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer',
              transition: 'all 0.2s', display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}
          >
            Close Assessment
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin-animation {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
}
