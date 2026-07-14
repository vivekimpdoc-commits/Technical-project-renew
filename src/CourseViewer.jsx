import React, { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, CheckCircle, Code, Shield, Terminal, Play, CheckCircle2, ChevronRight, Lock } from 'lucide-react';

import { generateCourseMaterial } from './courseContentDB';

export default function CourseViewer({ courseData, onBack, onTakeQuiz }) {
  const [activeChapterIdx, setActiveChapterIdx] = useState(0);
  const [completedChapters, setCompletedChapters] = useState([]);
  const [animating, setAnimating] = useState(false);
  const [typedText, setTypedText] = useState("");

  const chapters = courseData?.details?.features || [];
  const currentChapter = chapters[activeChapterIdx];
  const modColor = courseData?.color || '#38bdf8';

  const chapterContent = currentChapter ? generateCourseMaterial(currentChapter.title || currentChapter, courseData.id) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    setAnimating(true);
    setTypedText("");
    
    // Sci-Fi Typing Effect
    if (currentChapter) {
      let i = 0;
      const title = typeof currentChapter === 'string' ? currentChapter : currentChapter.title;
      const typingInterval = setInterval(() => {
        if (i < title.length) {
          setTypedText(prev => prev + title.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);
      return () => clearInterval(typingInterval);
    }
  }, [activeChapterIdx, currentChapter]);

  const markComplete = () => {
    if (!completedChapters.includes(activeChapterIdx)) {
      setCompletedChapters([...completedChapters, activeChapterIdx]);
    }
    if (activeChapterIdx < chapters.length - 1) {
      setActiveChapterIdx(activeChapterIdx + 1);
    }
  };

  if (!courseData || chapters.length === 0) return <div>No Course Data</div>;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#020617', color: 'white', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Sci-Fi Sidebar (Table of Contents) */}
      <div style={{ 
        width: '320px', 
        borderRight: `1px solid ${modColor}44`, 
        background: '#0f172a',
        display: 'flex', 
        flexDirection: 'column',
        boxShadow: `5px 0 30px ${modColor}11`
      }}>
        <div style={{ padding: '1.5rem', borderBottom: `1px solid ${modColor}44` }}>
          <button 
            onClick={onBack}
            style={{ 
              display: 'flex', alignItems: 'center', gap: '0.5rem', 
              background: 'transparent', border: 'none', color: '#94a3b8', 
              cursor: 'pointer', fontSize: '0.9rem', fontWeight: 'bold',
              marginBottom: '1rem', transition: 'color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'white'}
            onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}
          >
            <ArrowLeft size={16} /> EXIT MASTERCLASS
          </button>
          <h2 style={{ fontSize: '1.2rem', margin: 0, color: modColor, letterSpacing: '1px', textTransform: 'uppercase' }}>
            {courseData.title}
          </h2>
          <div style={{ width: '100%', height: '4px', background: '#1e293b', marginTop: '1rem', borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{ width: `${(completedChapters.length / chapters.length) * 100}%`, height: '100%', background: modColor, transition: 'width 0.5s' }}></div>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.5rem', textAlign: 'right' }}>
            {completedChapters.length} / {chapters.length} COMPLETED
          </p>
        </div>

        <div style={{ overflowY: 'auto', flex: 1, padding: '1rem' }}>
          {chapters.map((chapter, idx) => {
            const isCompleted = completedChapters.includes(idx);
            const isActive = activeChapterIdx === idx;
            const title = typeof chapter === 'string' ? chapter : chapter.title;
            
            return (
              <div 
                key={idx}
                onClick={() => setActiveChapterIdx(idx)}
                style={{
                  padding: '1rem',
                  marginBottom: '0.5rem',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  background: isActive ? `${modColor}22` : 'transparent',
                  border: isActive ? `1px solid ${modColor}88` : '1px solid transparent',
                  borderLeft: isActive ? `4px solid ${modColor}` : isCompleted ? '4px solid #10b981' : '4px solid transparent',
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => !isActive && (e.currentTarget.style.background = '#1e293b')}
                onMouseOut={(e) => !isActive && (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.9rem', color: isActive ? 'white' : '#94a3b8', fontWeight: isActive ? 'bold' : 'normal', lineHeight: '1.4' }}>
                    {idx + 1}. {title}
                  </span>
                  <div style={{ minWidth: '20px', marginLeft: '0.5rem' }}>
                    {isCompleted ? <CheckCircle2 size={16} color="#10b981" /> : isActive ? <Terminal size={16} color={modColor} /> : <Lock size={16} color="#475569" />}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Main Content Area (Reading / Study) */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '3rem', position: 'relative' }}>
        
        {/* Background Grid for Sci-Fi feel */}
        <div style={{ 
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 1px, transparent 1px)', 
          backgroundSize: '30px 30px', zIndex: 0, pointerEvents: 'none' 
        }}></div>

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: `${modColor}22`, padding: '0.5rem 1rem', borderRadius: '1rem', color: modColor, fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '2px', border: `1px solid ${modColor}44` }}>
              CHAPTER {activeChapterIdx + 1}
            </div>
            <span style={{ color: '#64748b', fontSize: '0.9rem', letterSpacing: '1px' }}>UP POLICE NEURAL DB // CLASSIFIED</span>
          </div>

          <h1 style={{ fontSize: '3rem', margin: '0 0 1.5rem 0', lineHeight: '1.2', color: 'white', textShadow: `0 0 20px ${modColor}66` }}>
            {typedText}<span style={{ animation: 'blink 1s infinite' }}>_</span>
          </h1>

          <p style={{ fontSize: '1.2rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '3rem', borderLeft: `4px solid ${modColor}`, paddingLeft: '1.5rem', background: '#0f172a88', padding: '1rem 1rem 1rem 1.5rem', borderRadius: '0 0.5rem 0.5rem 0' }}>
            {typeof currentChapter === 'string' ? "Technical analysis of the requested subject matter." : currentChapter.desc}
          </p>

          {chapterContent && (
            <div className={animating ? "animate-fade-in" : ""} style={{ animation: 'fadeIn 0.5s ease-out' }}>
              
              {/* Theory Block */}
              <div style={{ background: '#0f172a', padding: '2.5rem', borderRadius: '1rem', border: '1px solid #1e293b', marginBottom: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: modColor }}></div>
                <h3 style={{ color: modColor, display: 'flex', alignItems: 'center', gap: '1rem', margin: 0, fontSize: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #1e293b' }}>
                  <BookOpen size={28} /> Phase I: Intelligence & Architecture
                </h3>
                <div 
                  style={{ color: '#cbd5e1', fontSize: '1.15rem', lineHeight: '1.8', margin: 0, paddingTop: '1.5rem', wordWrap: 'break-word' }}
                  dangerouslySetInnerHTML={{ __html: chapterContent.coreDetails }}
                />
              </div>

              {/* Practical App Block */}
              <div style={{ background: '#0f172a', padding: '2.5rem', borderRadius: '1rem', border: '1px solid #1e293b', marginBottom: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#38bdf8' }}></div>
                <h3 style={{ color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '1rem', margin: 0, fontSize: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #1e293b' }}>
                  <Terminal size={28} /> Phase II: Tactical Execution (Field Ops)
                </h3>
                <div 
                  style={{ color: '#cbd5e1', fontSize: '1.15rem', lineHeight: '1.8', margin: 0, paddingTop: '1.5rem', wordWrap: 'break-word' }}
                  dangerouslySetInnerHTML={{ __html: chapterContent.practicalDetails }}
                />
              </div>

              {/* Case Study Block */}
              <div style={{ background: '#0f172a', padding: '2.5rem', borderRadius: '1rem', border: '1px solid #1e293b', marginBottom: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#f59e0b' }}></div>
                <h3 style={{ color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '1rem', margin: 0, fontSize: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #1e293b' }}>
                  <Shield size={28} /> Phase III: High-Profile Case Studies & Strategy
                </h3>
                <div 
                  style={{ color: '#cbd5e1', fontSize: '1.15rem', lineHeight: '1.8', margin: 0, paddingTop: '1.5rem', wordWrap: 'break-word' }}
                  dangerouslySetInnerHTML={{ __html: chapterContent.advancedDetails }}
                />
              </div>

            </div>
          )}

          {/* Navigation Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #334155', paddingTop: '2.5rem', paddingBottom: '4rem' }}>
            <button 
              onClick={() => activeChapterIdx > 0 && setActiveChapterIdx(activeChapterIdx - 1)}
              style={{ 
                padding: '1rem 2rem', background: 'transparent', border: '1px solid #334155', color: '#94a3b8', 
                borderRadius: '0.5rem', cursor: activeChapterIdx === 0 ? 'not-allowed' : 'pointer', fontSize: '1rem', fontWeight: 'bold',
                opacity: activeChapterIdx === 0 ? 0.5 : 1, transition: 'all 0.2s'
              }}
              onMouseOver={(e) => activeChapterIdx > 0 && (e.currentTarget.style.background = '#1e293b')}
              onMouseOut={(e) => activeChapterIdx > 0 && (e.currentTarget.style.background = 'transparent')}
            >
              PREVIOUS LESSON
            </button>
            
            {activeChapterIdx === chapters.length - 1 && completedChapters.includes(activeChapterIdx) ? (
              <button 
                onClick={onTakeQuiz}
                style={{ 
                  padding: '1rem 3rem', background: '#f59e0b', 
                  border: 'none', color: '#000', 
                  borderRadius: '0.5rem', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  boxShadow: '0 0 20px #f59e0b88',
                  transition: 'all 0.3s'
                }}
              >
                TAKE MODULE ASSESSMENT <ChevronRight size={18} />
              </button>
            ) : (
              <button 
                onClick={markComplete}
                style={{ 
                  padding: '1rem 3rem', background: completedChapters.includes(activeChapterIdx) ? '#10b981' : modColor, 
                  border: 'none', color: '#000', 
                  borderRadius: '0.5rem', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  boxShadow: completedChapters.includes(activeChapterIdx) ? '0 0 20px #10b98188' : `0 0 20px ${modColor}88`,
                  transition: 'all 0.3s'
                }}
              >
                {completedChapters.includes(activeChapterIdx) ? '✓ COMPLETED' : 'MARK COMPLETE & NEXT'} <ChevronRight size={18} />
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
