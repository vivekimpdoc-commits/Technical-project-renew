import React, { useState } from 'react';
import { ArrowLeft, PlayCircle, FileText, CheckCircle, FileDown, Link as LinkIcon, Video } from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function ModuleDetail({ module, onBack }) {
  const [activeResourceTab, setActiveResourceTab] = useState('video');

  if (!module) return null;

  return (
    <div className="thane-dashboard-container" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
        <button 
          onClick={onBack} 
          style={{ 
            display: 'flex', alignItems: 'center', gap: '0.5rem', 
            padding: '0.75rem 1.5rem', background: 'white', 
            borderRadius: '0.75rem', border: '1px solid #e2e8f0',
            color: '#0f172a', fontWeight: 'bold', cursor: 'pointer',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = module.color; e.currentTarget.style.color = module.color; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; }}
        >
          <ArrowLeft size={20} />
          Back to Modules
        </button>
      </div>

      <div style={{ background: 'white', padding: '3rem', borderRadius: '1rem', border: `1px solid #e2e8f0`, borderTop: `6px solid ${module.color}`, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ padding: '1rem', background: `${module.color}15`, color: module.color, borderRadius: '1rem' }}>
            <module.icon size={48} />
          </div>
          <div>
            <h1 style={{ fontSize: '2.25rem', color: '#0f172a', marginBottom: '0.5rem', fontWeight: '800' }}>
              {module.title}
            </h1>
            <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
              Detailed topics and learning materials for this module.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
          
          {/* Topics List */}
          <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <FileText size={24} color={module.color} /> Topics Covered (कवर किए गए विषय)
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {module.items.map((item, index) => (
                <li key={index} style={{ color: '#334155', fontSize: '1.1rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontWeight: '500' }}>
                  <CheckCircle size={20} color={module.color} style={{ marginTop: '3px', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Resource Content Area */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Resource Menu */}
            <div style={{ display: 'flex', gap: '1rem', background: '#f8fafc', padding: '0.75rem', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
              <button 
                onClick={() => setActiveResourceTab('pdf')}
                style={{
                  flex: 1, padding: '0.75rem', borderRadius: '0.75rem', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 'bold',
                  background: activeResourceTab === 'pdf' ? module.color : 'transparent',
                  color: activeResourceTab === 'pdf' ? 'white' : '#64748b',
                  transition: 'all 0.2s',
                  boxShadow: activeResourceTab === 'pdf' ? `0 4px 10px ${module.color}66` : 'none'
                }}
              >
                <FileDown size={18} /> 1. PDF
              </button>
              <button 
                onClick={() => setActiveResourceTab('video')}
                style={{
                  flex: 1, padding: '0.75rem', borderRadius: '0.75rem', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 'bold',
                  background: activeResourceTab === 'video' ? module.color : 'transparent',
                  color: activeResourceTab === 'video' ? 'white' : '#64748b',
                  transition: 'all 0.2s',
                  boxShadow: activeResourceTab === 'video' ? `0 4px 10px ${module.color}66` : 'none'
                }}
              >
                <Video size={18} /> 2. Video
              </button>
              <button 
                onClick={() => setActiveResourceTab('link')}
                style={{
                  flex: 1, padding: '0.75rem', borderRadius: '0.75rem', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 'bold',
                  background: activeResourceTab === 'link' ? module.color : 'transparent',
                  color: activeResourceTab === 'link' ? 'white' : '#64748b',
                  transition: 'all 0.2s',
                  boxShadow: activeResourceTab === 'link' ? `0 4px 10px ${module.color}66` : 'none'
                }}
              >
                <LinkIcon size={18} /> 3. Website Link
              </button>
            </div>

            {/* Content Display based on active tab */}
            <div style={{ background: 'white', borderRadius: '1rem', border: '1px solid #e2e8f0', minHeight: '300px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              
              {activeResourceTab === 'video' && (
                <div style={{ background: '#f1f5f9', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                  <div style={{ background: 'white', padding: '2.5rem', borderRadius: '1rem', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', width: '100%', maxWidth: '600px' }}>
                    
                    {/* Video Player Header Placeholder */}
                    <div style={{ background: 'black', borderRadius: '0.75rem', overflow: 'hidden', position: 'relative', minHeight: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', boxShadow: '0 4px 15px rgba(0,0,0,0.15)' }}>
                      <PlayCircle size={48} color="white" style={{ opacity: 0.8 }} />
                      <p style={{ color: '#cbd5e1', marginTop: '0.5rem', fontSize: '0.9rem' }}>Select a video below to play</p>
                    </div>

                    {/* Upload Section */}
                    <div style={{ marginBottom: '2rem', padding: '1.5rem', border: `2px dashed ${module.color}66`, borderRadius: '0.75rem', textAlign: 'center', background: `${module.color}05` }}>
                      <label style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ background: module.color, color: 'white', padding: '0.5rem 1.5rem', borderRadius: '2rem', fontWeight: '600', fontSize: '0.9rem' }}>
                          Upload New Video
                        </span>
                        <span style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '0.5rem' }}>MP4, WebM up to 500MB</span>
                        <input type="file" accept="video/*" style={{ display: 'none' }} />
                      </label>
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', marginBottom: '2rem' }} />

                    {/* Download/Select Section */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <label style={{ fontSize: '0.95rem', fontWeight: '600', color: '#334155' }}>Select a video lecture:</label>
                      <div style={{ display: 'flex', gap: '1rem' }}>
                        <select 
                          style={{ 
                            flex: 1, padding: '0.75rem 1rem', borderRadius: '0.5rem', 
                            border: '1px solid #cbd5e1', outline: 'none', fontSize: '0.95rem',
                            color: '#0f172a', background: 'white', cursor: 'pointer'
                          }}
                        >
                          <option value="">-- Select Lecture --</option>
                          <option value="vid1">Lecture 1: Introduction to {module.title}</option>
                          <option value="vid2">Lecture 2: Core Concepts Explained</option>
                          <option value="vid3">Lecture 3: Practical Demonstration</option>
                        </select>
                        
                        <button style={{ 
                          background: module.color, color: 'white', border: 'none', 
                          padding: '0 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', 
                          cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem',
                          boxShadow: `0 4px 10px ${module.color}44`, transition: 'transform 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
                        >
                          <PlayCircle size={18} /> Play
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {activeResourceTab === 'pdf' && (
                <div style={{ background: '#f1f5f9', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                  <div style={{ background: 'white', padding: '2.5rem', borderRadius: '1rem', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', width: '100%', maxWidth: '500px' }}>
                    
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                      <FileDown size={48} color={module.color} style={{ marginBottom: '1rem' }} />
                      <h3 style={{ color: '#0f172a', fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>Study Material (PDF)</h3>
                      <p style={{ color: '#64748b', fontSize: '0.95rem' }}>इस मॉड्यूल के नोट्स और असाइनमेंट्स यहाँ से मैनेज करें।</p>
                    </div>

                    {/* Upload Section */}
                    <div style={{ marginBottom: '2rem', padding: '1.5rem', border: `2px dashed ${module.color}66`, borderRadius: '0.75rem', textAlign: 'center', background: `${module.color}05` }}>
                      <label style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ background: module.color, color: 'white', padding: '0.5rem 1.5rem', borderRadius: '2rem', fontWeight: '600', fontSize: '0.9rem' }}>
                          Upload New PDF
                        </span>
                        <span style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '0.5rem' }}>or drag and drop here</span>
                        <input type="file" accept=".pdf" style={{ display: 'none' }} />
                      </label>
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', marginBottom: '2rem' }} />

                    {/* Download Section with Dropdown */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <label style={{ fontSize: '0.95rem', fontWeight: '600', color: '#334155' }}>Select a file to download:</label>
                      <div style={{ display: 'flex', gap: '1rem' }}>
                        <select 
                          style={{ 
                            flex: 1, padding: '0.75rem 1rem', borderRadius: '0.5rem', 
                            border: '1px solid #cbd5e1', outline: 'none', fontSize: '0.95rem',
                            color: '#0f172a', background: 'white', cursor: 'pointer'
                          }}
                        >
                          <option value="">-- Select Document --</option>
                          <option value="notes">{module.title} - Full Notes.pdf</option>
                          <option value="cheatsheet">Quick Revision Cheat Sheet.pdf</option>
                          <option value="assignment">Practical Assignment.pdf</option>
                        </select>
                        
                        <button style={{ 
                          background: module.color, color: 'white', border: 'none', 
                          padding: '0 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', 
                          cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem',
                          boxShadow: `0 4px 10px ${module.color}44`, transition: 'transform 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
                        >
                          <FileDown size={18} /> Download
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {activeResourceTab === 'link' && (
                <div style={{ background: '#f1f5f9', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                  <div style={{ background: 'white', padding: '2.5rem', borderRadius: '1rem', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', width: '100%', maxWidth: '500px' }}>
                    
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                      <LinkIcon size={48} color={module.color} style={{ marginBottom: '1rem' }} />
                      <h3 style={{ color: '#0f172a', fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>Reference Links</h3>
                      <p style={{ color: '#64748b', fontSize: '0.95rem' }}>इस मॉड्यूल से जुड़े महत्वपूर्ण लिंक्स मैनेज करें।</p>
                    </div>

                    {/* Upload/Add Link Section */}
                    <div style={{ marginBottom: '2rem', padding: '1.5rem', border: `2px dashed ${module.color}66`, borderRadius: '0.75rem', textAlign: 'center', background: `${module.color}05` }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <input 
                          type="text" 
                          placeholder="Paste new URL here (https://...)" 
                          style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none', fontSize: '0.9rem' }} 
                        />
                        <button style={{ background: module.color, color: 'white', border: 'none', padding: '0.6rem 1.5rem', borderRadius: '2rem', fontWeight: '600', cursor: 'pointer', alignSelf: 'center' }}>
                          Add Link
                        </button>
                      </div>
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', marginBottom: '2rem' }} />

                    {/* Download/Select Section */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <label style={{ fontSize: '0.95rem', fontWeight: '600', color: '#334155' }}>Select a resource link:</label>
                      <div style={{ display: 'flex', gap: '1rem' }}>
                        <select 
                          style={{ 
                            flex: 1, padding: '0.75rem 1rem', borderRadius: '0.5rem', 
                            border: '1px solid #cbd5e1', outline: 'none', fontSize: '0.95rem',
                            color: '#0f172a', background: 'white', cursor: 'pointer'
                          }}
                        >
                          <option value="">-- Select Website --</option>
                          <option value="wiki">Wikipedia: Introduction</option>
                          <option value="doc">Official Documentation & API</option>
                          <option value="github">GitHub Open Source Repo</option>
                        </select>
                        
                        <button style={{ 
                          background: 'white', color: module.color, border: `1px solid ${module.color}`, 
                          padding: '0 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', 
                          cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = module.color; e.currentTarget.style.color = 'white'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = module.color; }}
                        >
                          <LinkIcon size={18} /> Visit
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
