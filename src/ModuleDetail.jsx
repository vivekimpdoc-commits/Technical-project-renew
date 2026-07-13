import React, { useState, useEffect } from 'react';
import { ArrowLeft, PlayCircle, FileText, CheckCircle, FileDown, Link as LinkIcon, Video } from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function ModuleDetail({ module, onBack, isMaximized }) {
  const [activeResourceTab, setActiveResourceTab] = useState('pdf');
  const [expandedTopic, setExpandedTopic] = useState(0);

  // New state variables for viewing
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [uploadedPdf, setUploadedPdf] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  const [newLinkInput, setNewLinkInput] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const [externalLinkUrl, setExternalLinkUrl] = useState('');
  const [externalLinkLabel, setExternalLinkLabel] = useState('Open Web Search');

  // Controlled states for dropdowns to ensure they reset on topic change
  const [videoSelect, setVideoSelect] = useState("");
  const [pdfSelect, setPdfSelect] = useState("");
  const [linkSelect, setLinkSelect] = useState("wiki");
  const [pdfLanguage, setPdfLanguage] = useState("both");

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setUploadedVideo(URL.createObjectURL(file));
  };

  const handlePdfUpload = (e) => {
    const file = e.target.files[0];
    if (file) setUploadedPdf(URL.createObjectURL(file));
  };

  const handleAddLink = () => {
    if (newLinkInput) {
      let url = newLinkInput;
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
      }
      setActiveLink(url);
      setNewLinkInput("");
    }
  };

  if (!module) return null;

  const selectedTopicName = expandedTopic !== null ? module.items[expandedTopic] : module.title;

  useEffect(() => {
    if (selectedTopicName) {
      // Reset dropdowns to ensure strict relation to new topic
      setVideoSelect("");
      setPdfSelect("");
      setLinkSelect("wiki");

      // Clear video until an option is selected from the dropdown
      setUploadedVideo(null);

      setActiveLink(`https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(selectedTopicName)}`);
      setExternalLinkUrl(`https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(selectedTopicName)}`);
      setExternalLinkLabel('Open Wikipedia');
    }
  }, [selectedTopicName]);

  useEffect(() => {
    if (!selectedTopicName) return;

    let htmlPdf = "";
    
    // Default Introduction for when nothing is selected
    if (pdfSelect === "") {
      const enDefaultIntro = `<p>This is the official study material and notes for <strong>${selectedTopicName}</strong>.</p><p>In this module, you will learn the core concepts, practical applications, and advanced techniques related to this topic.</p>`;
      const hiDefaultIntro = `<p style="color: #475569;">यह <strong>${selectedTopicName}</strong> के लिए आधिकारिक अध्ययन सामग्री (Study Material) है।</p><p style="color: #475569;">इस मॉड्यूल में, आप इस विषय से संबंधित मुख्य अवधारणाओं (Core Concepts), व्यावहारिक अनुप्रयोगों (Practical Applications) और उन्नत तकनीकों (Advanced Techniques) के बारे में सीखेंगे।</p>`;
      const defaultIntro = pdfLanguage === "en" ? enDefaultIntro : pdfLanguage === "hi" ? hiDefaultIntro : (enDefaultIntro + hiDefaultIntro);
      htmlPdf = `<html><body style="font-family: sans-serif; padding: 40px; line-height: 1.6; color: #333;"><h1 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">${selectedTopicName} - Study Material</h1>${defaultIntro}<div style="margin-top: 50px; padding: 20px; background: #f1f5f9; border-left: 4px solid #3b82f6;"><em>Confidential Material - KARTAVYA Portal</em></div></body></html>`;
    } else {
      const docNameMap = {
        "notes": `Complete Theory Guide - ${selectedTopicName}.pdf`,
        "cheatsheet": `Summary & Cheat Sheet - ${selectedTopicName}.pdf`,
        "assignment": `Practical Assignment & Questions - ${selectedTopicName}.pdf`,
        "casestudy": `Industry Case Study - ${selectedTopicName}.pdf`
      };
      const docName = docNameMap[pdfSelect] || `${selectedTopicName} PDF`;

      const enWarn = `This document is generated dynamically for authorized users learning about ${selectedTopicName}. Unauthorized distribution or sharing of this document is strictly prohibited under organizational guidelines.`;
      const hiWarn = `<br/>(यह दस्तावेज़ अधिकृत उपयोगकर्ताओं (Authorized Users) के लिए गतिशील रूप से (Dynamically) उत्पन्न किया गया है। इसे अनधिकृत रूप से शेयर करना सख्त मना है।)`;
      const warn = pdfLanguage === "en" ? enWarn : pdfLanguage === "hi" ? hiWarn.replace('<br/>', '') : (enWarn + hiWarn);

      let bodyContent = "";

      if (pdfSelect === "notes") {
          const enIntro = `<p style="font-size: 16px; line-height: 1.8;">This document provides an in-depth understanding of <strong>${selectedTopicName}</strong>. It covers the core principles, underlying architecture, and the foundational concepts necessary to master this subject.</p>`;
          const hiIntro = `<p style="font-size: 15px; line-height: 1.8; color: #475569;">यह दस्तावेज़ <strong>${selectedTopicName}</strong> की गहन समझ प्रदान करता है। इसमें इस विषय को पूरी तरह से समझने के लिए आवश्यक मूल सिद्धांत और बुनियादी अवधारणाएं शामिल हैं।</p>`;
          const intro = pdfLanguage === "en" ? enIntro : pdfLanguage === "hi" ? hiIntro : (enIntro + hiIntro);

          const enLi1 = `<strong>Fundamental Mechanisms:</strong> Exploring the algorithms, mathematics, and data structures that power ${selectedTopicName}.`;
          const hiLi1 = `<br/><span style="color: #475569; font-size: 14.5px;">(उन एल्गोरिदम और डेटा संरचनाओं की खोज जो ${selectedTopicName} को चलाते हैं।)</span>`;
          const li1 = pdfLanguage === "en" ? enLi1 : pdfLanguage === "hi" ? hiLi1.replace('<br/>', '') : (enLi1 + hiLi1);

          const enImpl = `<p style="font-size: 16px; line-height: 1.8;">When developing models or writing code related to <strong>${selectedTopicName}</strong>, it is crucial to ensure proper data sanitization, handle edge cases effectively, and monitor system performance over time.</p>`;
          const hiImpl = `<p style="font-size: 15px; line-height: 1.8; color: #475569;"><strong>${selectedTopicName}</strong> से संबंधित कोड लिखते समय, उचित डेटा सफाई सुनिश्चित करना महत्वपूर्ण है।</p>`;
          const impl = pdfLanguage === "en" ? enImpl : pdfLanguage === "hi" ? hiImpl : (enImpl + hiImpl);

          bodyContent = `
            <h2 style="color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; font-size: 24px;">1. Introduction to ${selectedTopicName}</h2>
            ${intro}
            <h2 style="color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-top: 40px; font-size: 24px;">2. Key Concepts & Architecture</h2>
            <ul style="font-size: 16px; line-height: 1.8; padding-left: 20px;">
              <li style="margin-bottom: 12px;">${li1}</li>
            </ul>
            <h2 style="color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-top: 40px; font-size: 24px;">3. Practical Implementation</h2>
            ${impl}
          `;
      } else if (pdfSelect === "cheatsheet") {
          const enCS = `<p><strong>Quick Summary:</strong> ${selectedTopicName} is essential for modern AI solutions, allowing rapid deployment and efficient processing.</p>
          <div style="display:flex; gap: 20px; flex-wrap: wrap; margin-top: 20px;">
            <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; flex: 1; min-width: 250px;">
              <h3 style="margin-top: 0; color: #2563eb;">Key Terminology</h3>
              <ul style="margin: 0; padding-left: 20px; font-size: 15px; line-height: 1.6;">
                <li><strong>Entity:</strong> The core object in ${selectedTopicName}.</li>
                <li><strong>Optimization:</strong> Reducing cost and latency.</li>
              </ul>
            </div>
            <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; flex: 1; min-width: 250px;">
              <h3 style="margin-top: 0; color: #2563eb;">Top Commands / Formulas</h3>
              <ul style="margin: 0; padding-left: 20px; font-size: 15px; line-height: 1.6;">
                <li><code>init ${selectedTopicName.toLowerCase().replace(/ /g, '_')}</code></li>
                <li><code>deploy --production</code></li>
              </ul>
            </div>
          </div>`;
          const hiCS = `<p style="color: #475569; margin-top: 20px;"><strong>त्वरित सारांश (Quick Summary):</strong> ${selectedTopicName} आधुनिक AI समाधानों के लिए आवश्यक है, जो तीव्र तैनाती (Rapid Deployment) की अनुमति देता है।</p>`;
          bodyContent = `
            <h2 style="color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; font-size: 24px;">${selectedTopicName} - Cheat Sheet</h2>
            ${pdfLanguage === 'en' ? enCS : pdfLanguage === 'hi' ? hiCS : enCS + hiCS}
          `;
      } else if (pdfSelect === "assignment") {
          const enAss = `
            <h3 style="color: #1e293b;">Task 1: Basic Implementation</h3>
            <p>Implement a basic working model of ${selectedTopicName}. Document the steps you took to initialize the environment.</p>
            <h3 style="color: #1e293b; margin-top: 20px;">Task 2: Error Handling</h3>
            <p>Introduce common faults into your ${selectedTopicName} pipeline and write robust error handlers for them.</p>
            <h3 style="color: #1e293b; margin-top: 20px;">Review Questions</h3>
            <ol style="font-size: 15px; line-height: 1.6;">
              <li>What are the top 3 challenges when scaling ${selectedTopicName}?</li>
              <li>How does ${selectedTopicName} compare to legacy approaches?</li>
            </ol>
          `;
          const hiAss = `
            <h3 style="color: #1e293b;">कार्य 1: बुनियादी कार्यान्वयन (Basic Implementation)</h3>
            <p>${selectedTopicName} का एक बुनियादी कार्यशील मॉडल लागू करें।</p>
            <h3 style="color: #1e293b; margin-top: 20px;">समीक्षा प्रश्न (Review Questions)</h3>
            <ol style="font-size: 15px; line-height: 1.6; color: #475569;">
              <li>${selectedTopicName} को स्केल करते समय शीर्ष 3 चुनौतियां क्या हैं?</li>
            </ol>
          `;
          bodyContent = `
            <h2 style="color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; font-size: 24px;">${selectedTopicName} - Assignments & Questions</h2>
            ${pdfLanguage === 'en' ? enAss : pdfLanguage === 'hi' ? hiAss : enAss + hiAss}
          `;
      } else if (pdfSelect === "casestudy") {
          const enCS = `
            <h3 style="color: #1e293b;">Industry Scenario</h3>
            <p>A Fortune 500 company was struggling with high latency and data inconsistency in their old architecture. They decided to migrate their core systems to leverage <strong>${selectedTopicName}</strong>.</p>
            <h3 style="color: #1e293b; margin-top: 20px;">The Solution</h3>
            <p>By implementing a robust ${selectedTopicName} framework, the engineering team decoupled their monolithic architecture. They utilized standard design patterns to ensure fault tolerance.</p>
            <h3 style="color: #1e293b; margin-top: 20px;">Business Impact</h3>
            <ul style="font-size: 15px; line-height: 1.6;">
              <li><strong>Performance:</strong> 40% reduction in query latency.</li>
              <li><strong>Cost:</strong> $1.2M saved annually in infrastructure costs.</li>
              <li><strong>Scalability:</strong> Successfully handled 3x traffic during peak season.</li>
            </ul>
          `;
          const hiCS = `
            <h3 style="color: #1e293b; margin-top: 20px;">उद्योग परिदृश्य (Industry Scenario)</h3>
            <p style="color: #475569;">एक शीर्ष कंपनी अपने पुराने आर्किटेक्चर में उच्च विलंबता (High Latency) से जूझ रही थी। उन्होंने <strong>${selectedTopicName}</strong> का लाभ उठाने का निर्णय लिया।</p>
            <h3 style="color: #1e293b; margin-top: 20px;">व्यावसायिक प्रभाव (Business Impact)</h3>
            <ul style="font-size: 15px; line-height: 1.6; color: #475569;">
              <li>प्रदर्शन में 40% का सुधार।</li>
              <li>बुनियादी ढांचे की लागत में सालाना भारी बचत।</li>
            </ul>
          `;
          bodyContent = `
            <h2 style="color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; font-size: 24px;">${selectedTopicName} - Industry Case Study</h2>
            ${pdfLanguage === 'en' ? enCS : pdfLanguage === 'hi' ? hiCS : enCS + hiCS}
          `;
      }

      htmlPdf = `
          <html>
          <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 20px; background: #e2e8f0; color: #334155;">
            <div style="max-width: 800px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
              <div style="background: ${module.color || '#2563eb'}; color: white; padding: 40px 30px; text-align: center;">
                <h1 style="margin: 0; font-size: 32px; letter-spacing: 0.5px;">${docName}</h1>
                <p style="margin: 15px 0 0 0; opacity: 0.9; font-size: 18px;">Comprehensive Study Material for: <strong>${selectedTopicName}</strong></p>
              </div>
              <div style="padding: 40px 50px;">
                ${bodyContent}

                <div style="margin-top: 60px; padding: 25px; background: #f8fafc; border-left: 5px solid ${module.color || '#3b82f6'}; border-radius: 8px;">
                  <h4 style="margin: 0 0 10px 0; color: #0f172a; font-size: 18px;">Confidential Material - KARTAVYA Portal</h4>
                  <p style="margin: 0; font-size: 14px; color: #64748b;">${warn}</p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `;
    }

    setUploadedPdf(`data:text/html;charset=utf-8,${encodeURIComponent(htmlPdf)}`);
  }, [selectedTopicName, pdfSelect, pdfLanguage, module]);

  return (
    <div className="thane-dashboard-container" style={{ padding: '0.25rem', background: 'transparent', width: '100%', maxWidth: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <button onClick={onBack} className="thane-back-btn">
          <ArrowLeft size={20} />
          Back to Modules
        </button>
      </div>

      <div style={{ background: 'var(--card-bg)', padding: '1rem', borderRadius: '0.75rem', border: `1px solid #e2e8f0`, borderTop: `4px solid ${module.color}`, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ padding: '0.5rem', background: `${module.color}15`, color: module.color, borderRadius: '0.5rem' }}>
              <module.icon size={24} />
            </div>
            <div>
              <h1 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.15rem', fontWeight: '800' }}>
                {module.title}
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
                Detailed topics and learning materials for this module.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsAdmin(!isAdmin)}
            style={{
              padding: '0.5rem 1rem', background: isAdmin ? '#10b981' : '#64748b', color: 'white',
              borderRadius: '2rem', border: 'none', fontWeight: 'bold', fontSize: '0.8rem', cursor: 'pointer',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
          >
            {isAdmin ? 'Admin View (Upload Allowed)' : 'User View (Read-Only)'}
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMaximized ? '350px 1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '1.5rem', alignItems: 'start' }}>

          {/* Topics List with Accordion (Expandable Cards) */}
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileText size={20} color={module.color} /> Topics Covered
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {module.items.map((item, index) => {
                const isExpanded = expandedTopic === index;
                return (
                  <div
                    key={index}
                    onClick={() => setExpandedTopic(isExpanded ? null : index)}
                    style={{
                      padding: '1.25rem', background: 'var(--icon-bg)', borderRadius: '1rem', border: '1px solid var(--card-border)',
                      cursor: 'pointer', transition: 'all 0.2s',
                      boxShadow: isExpanded ? `0 0 0 2px ${module.color}` : '0 2px 5px rgba(0,0,0,0.02)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ padding: '0.6rem', background: 'var(--card-bg)', borderRadius: '0.5rem', color: module.color, boxShadow: '0 2px 5px rgba(0,0,0,0.05)', flexShrink: 0 }}>
                        <CheckCircle size={20} strokeWidth={2.5} />
                      </div>
                      <div>
                        <h4 style={{ color: 'var(--text-main)', fontSize: '1rem', fontWeight: 'bold', margin: 0, lineHeight: '1.3' }}>{item}</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: '0.25rem 0 0 0' }}>क्लिक करके विस्तृत जानकारी देखें</p>
                      </div>
                    </div>
                    {isExpanded && (
                      <div className="animate-fade-in" style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--card-border)', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                        इस सेक्शन में हम <strong>"{item}"</strong> के सभी महत्वपूर्ण पहलुओं पर गहराई से चर्चा करेंगे। इसमें थ्योरी, प्रैक्टिकल उदाहरण और रियल-वर्ल्ड एप्लीकेशन शामिल हैं।
                        <br /><br />
                        अधिक जानकारी और नोट्स के लिए नीचे दिए गए 'Study Material (PDF)' या 'Video' सेक्शन का उपयोग करें।
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Resource Content Area */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {/* Resource Menu */}
            <div style={{ display: 'flex', gap: '0.5rem', background: 'var(--icon-bg)', padding: '0.5rem', borderRadius: '0.75rem', border: '1px solid var(--card-border)' }}>
              <button
                onClick={() => setActiveResourceTab('pdf')}
                style={{
                  flex: 1, padding: '0.6rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem',
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
                  flex: 1, padding: '0.6rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem',
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
                  flex: 1, padding: '0.6rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem',
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
            <div style={{ background: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--card-border)', minHeight: '250px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

              {activeResourceTab === 'video' && (
                <div style={{ background: 'var(--icon-bg)', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
                  <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '0.75rem', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', width: '100%' }}>

                    {/* Download/Select Section - MOVED ABOVE VIEWER */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-main)' }}>Choose a Related Video to Watch:</label>
                      <div style={{ display: 'flex', gap: '1rem' }}>
                        <select
                          value={videoSelect}
                          onChange={(e) => {
                            const val = e.target.value;
                            setVideoSelect(val);
                            if (val) {
                              setUploadedVideo(`https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(selectedTopicName + ' ' + e.target.options[e.target.selectedIndex].text)}`);
                            } else {
                              setUploadedVideo(null);
                            }
                          }}
                          style={{
                            flex: 1, padding: '0.5rem 0.75rem', borderRadius: '0.5rem',
                            border: '1px solid var(--card-border)', outline: 'none', fontSize: '0.85rem',
                            color: 'var(--text-main)', background: 'var(--card-bg)', cursor: 'pointer'
                          }}
                        >
                          <option value="">-- Select Video Topic --</option>
                          <option value="vid1">Part 1: Beginner's Guide to {selectedTopicName}</option>
                          <option value="vid2">Part 2: Advanced Techniques in {selectedTopicName}</option>
                          <option value="vid3">Part 3: Real-World Project using {selectedTopicName}</option>
                          <option value="vid4">Top Interview Questions on {selectedTopicName}</option>
                        </select>

                        <button
                          onClick={() => window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(selectedTopicName)}`, '_blank')}
                          style={{
                            background: module.color, color: 'white', border: 'none',
                            padding: '0 1rem', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '0.85rem',
                            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem',
                            boxShadow: `0 2px 5px ${module.color}44`, transition: 'transform 0.2s'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                          onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
                        >
                          <PlayCircle size={18} /> Search on YouTube
                        </button>
                      </div>
                    </div>

                    {/* Video Player Header Placeholder */}
                    <div style={{ background: 'black', borderRadius: '0.75rem', overflow: 'hidden', position: 'relative', minHeight: isMaximized ? 'calc(90vh - 250px)' : '450px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                      {uploadedVideo ? (
                        uploadedVideo.includes('youtube.com') ? (
                          <iframe width="100%" height="100%" style={{ minHeight: isMaximized ? 'calc(90vh - 250px)' : '450px' }} src={uploadedVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        ) : (
                          <video src={uploadedVideo} controls style={{ width: '100%', height: '100%', minHeight: isMaximized ? 'calc(90vh - 250px)' : '450px', objectFit: 'contain' }} />
                        )
                      ) : (
                        <>
                          <PlayCircle size={48} color="white" style={{ opacity: 0.8 }} />
                          <p style={{ color: '#cbd5e1', marginTop: '1rem', fontSize: '1rem' }}>Select a video option from the dropdown for {selectedTopicName}</p>
                        </>
                      )}
                    </div>

                    {isAdmin && (
                      <>
                        <hr style={{ border: 'none', borderTop: '1px solid var(--card-border)', marginBottom: '1.5rem' }} />

                        {/* Upload Section (Admin Only) */}
                        <div style={{ marginBottom: '0.5rem', padding: '1rem', border: `2px dashed ${module.color}66`, borderRadius: '0.5rem', textAlign: 'center', background: `${module.color}05` }}>
                          <label style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ background: module.color, color: 'white', padding: '0.4rem 1rem', borderRadius: '2rem', fontWeight: '600', fontSize: '0.8rem' }}>
                              Upload Custom Video (Admin)
                            </span>
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.25rem' }}>MP4, WebM up to 500MB</span>
                            <input type="file" accept="video/*" style={{ display: 'none' }} onChange={handleVideoUpload} />
                          </label>
                        </div>
                      </>
                    )}

                  </div>
                </div>
              )}

              {activeResourceTab === 'pdf' && (
                <div style={{ background: 'var(--icon-bg)', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
                  <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '0.75rem', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', width: '100%' }}>

                    <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                      <h3 style={{ color: 'var(--text-main)', fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.25rem' }}>Study Material (PDF)</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>इस मॉड्यूल के नोट्स यहाँ से मैनेज करें।</p>
                    </div>

                    {/* Download Section with Dropdown - MOVED ABOVE VIEWER */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-main)' }}>Choose Related PDF Notes to Read:</label>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <select
                          value={pdfLanguage}
                          onChange={(e) => setPdfLanguage(e.target.value)}
                          style={{
                            width: '130px', padding: '0.5rem', borderRadius: '0.5rem',
                            border: '1px solid var(--card-border)', outline: 'none', fontSize: '0.85rem',
                            color: 'var(--text-main)', background: 'var(--card-bg)', cursor: 'pointer'
                          }}
                        >
                          <option value="both">Eng + Hindi</option>
                          <option value="en">English Only</option>
                          <option value="hi">Hindi Only</option>
                        </select>
                        <select
                          value={pdfSelect}
                          onChange={(e) => setPdfSelect(e.target.value)}
                          style={{
                            flex: 1, padding: '0.5rem 0.75rem', borderRadius: '0.5rem',
                            border: '1px solid var(--card-border)', outline: 'none', fontSize: '0.85rem',
                            color: 'var(--text-main)', background: 'var(--card-bg)', cursor: 'pointer'
                          }}
                        >
                          <option value="">-- Select PDF Material --</option>
                          <option value="notes">Complete Theory Guide - {selectedTopicName}.pdf</option>
                          <option value="cheatsheet">Summary & Cheat Sheet - {selectedTopicName}.pdf</option>
                          <option value="assignment">Practical Assignment & Questions - {selectedTopicName}.pdf</option>
                          <option value="casestudy">Industry Case Study - {selectedTopicName}.pdf</option>
                        </select>

                        <button
                          onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(selectedTopicName)}+filetype:pdf`, '_blank')}
                          style={{
                            background: module.color, color: 'white', border: 'none',
                            padding: '0 1rem', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '0.85rem',
                            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem',
                            boxShadow: `0 2px 5px ${module.color}44`, transition: 'transform 0.2s'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                          onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
                        >
                          <FileDown size={18} /> Search Web PDF
                        </button>
                      </div>
                    </div>

                    {/* PDF Viewer Placeholder */}
                    <div style={{ background: 'var(--icon-bg)', borderRadius: '0.75rem', overflow: 'hidden', position: 'relative', minHeight: isMaximized ? 'calc(90vh - 250px)' : '600px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', width: '100%', border: '1px solid var(--card-border)', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                      {uploadedPdf ? (
                        <iframe src={uploadedPdf} width="100%" height="100%" style={{ minHeight: isMaximized ? 'calc(90vh - 250px)' : '600px', border: 'none' }} title="PDF Viewer" />
                      ) : (
                        <>
                          <FileText size={64} color="#cbd5e1" style={{ opacity: 0.8 }} />
                          <p style={{ color: 'var(--text-muted)', marginTop: '1rem', fontSize: '1.1rem' }}>Select or upload a PDF to read notes for {selectedTopicName}</p>
                        </>
                      )}
                    </div>

                    {isAdmin && (
                      <>
                        <hr style={{ border: 'none', borderTop: '1px solid var(--card-border)', marginBottom: '1.5rem' }} />

                        {/* Upload Section (Admin Only) */}
                        <div style={{ marginBottom: '0.5rem', padding: '1rem', border: `2px dashed ${module.color}66`, borderRadius: '0.5rem', textAlign: 'center', background: `${module.color}05` }}>
                          <label style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ background: module.color, color: 'white', padding: '0.4rem 1rem', borderRadius: '2rem', fontWeight: '600', fontSize: '0.8rem' }}>
                              Upload Custom PDF (Admin)
                            </span>
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.25rem' }}>or drag and drop here</span>
                            <input type="file" accept=".pdf" style={{ display: 'none' }} onChange={handlePdfUpload} />
                          </label>
                        </div>
                      </>
                    )}

                  </div>
                </div>
              )}

              {activeResourceTab === 'link' && (
                <div style={{ background: 'var(--icon-bg)', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
                  <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '0.75rem', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', width: '100%' }}>

                    <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                      <h3 style={{ color: 'var(--text-main)', fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.25rem' }}>Reference Links</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>इस मॉड्यूल से जुड़े महत्वपूर्ण लिंक्स मैनेज करें।</p>
                    </div>

                    {/* Download/Select Section - MOVED ABOVE VIEWER */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                      <label style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-main)' }}>Choose a Related Reference Site to Open:</label>
                      <div style={{ display: 'flex', gap: '1rem' }}>
                        <select
                          value={linkSelect}
                          onChange={(e) => {
                            const val = e.target.value;
                            setLinkSelect(val);
                            if (val === "wiki") {
                              setActiveLink(`https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(selectedTopicName)}`);
                              setExternalLinkUrl(`https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(selectedTopicName)}`);
                              setExternalLinkLabel('Open Wikipedia');
                            } else if (val === "google") {
                              const html = `<html><body style="font-family: sans-serif; padding: 40px; text-align: center;"><h1 style="color: #2563eb;">Google Search</h1><p>Searching for <strong>${selectedTopicName}</strong>...</p><p><a href="https://www.google.com/search?q=${encodeURIComponent(selectedTopicName)}" target="_blank" style="padding: 10px 20px; background: #3b82f6; color: white; text-decoration: none; border-radius: 5px;">Open Google Search</a></p></body></html>`;
                              setActiveLink(`data:text/html;charset=utf-8,${encodeURIComponent(html)}`);
                              setExternalLinkUrl(`https://www.google.com/search?q=${encodeURIComponent(selectedTopicName)}`);
                              setExternalLinkLabel('Open Google');
                            } else if (val === "github") {
                              const html = `<html><body style="font-family: sans-serif; padding: 40px; text-align: center;"><h1 style="color: #2563eb;">GitHub Repositories</h1><p>Searching GitHub for open-source projects related to <strong>${selectedTopicName}</strong>...</p><p><a href="https://github.com/search?q=${encodeURIComponent(selectedTopicName)}" target="_blank" style="padding: 10px 20px; background: #333; color: white; text-decoration: none; border-radius: 5px;">Open GitHub</a></p></body></html>`;
                              setActiveLink(`data:text/html;charset=utf-8,${encodeURIComponent(html)}`);
                              setExternalLinkUrl(`https://github.com/search?q=${encodeURIComponent(selectedTopicName)}`);
                              setExternalLinkLabel('Open GitHub');
                            } else if (val === "medium") {
                              const html = `<html><body style="font-family: sans-serif; padding: 40px; text-align: center;"><h1 style="color: #111;">Medium Articles</h1><p>Reading tech blogs about <strong>${selectedTopicName}</strong>...</p><p><a href="https://medium.com/search?q=${encodeURIComponent(selectedTopicName)}" target="_blank" style="padding: 10px 20px; background: #111; color: white; text-decoration: none; border-radius: 5px;">Open Medium</a></p></body></html>`;
                              setActiveLink(`data:text/html;charset=utf-8,${encodeURIComponent(html)}`);
                              setExternalLinkUrl(`https://medium.com/search?q=${encodeURIComponent(selectedTopicName)}`);
                              setExternalLinkLabel('Open Medium');
                            } else if (val === "scholar") {
                              const html = `<html><body style="font-family: sans-serif; padding: 40px; text-align: center;"><h1 style="color: #4285F4;">Google Scholar</h1><p>Finding research papers and journals on <strong>${selectedTopicName}</strong>...</p><p><a href="https://scholar.google.com/scholar?q=${encodeURIComponent(selectedTopicName)}" target="_blank" style="padding: 10px 20px; background: #4285F4; color: white; text-decoration: none; border-radius: 5px;">Open Google Scholar</a></p></body></html>`;
                              setActiveLink(`data:text/html;charset=utf-8,${encodeURIComponent(html)}`);
                              setExternalLinkUrl(`https://scholar.google.com/scholar?q=${encodeURIComponent(selectedTopicName)}`);
                              setExternalLinkLabel('Open Google Scholar');
                            } else {
                              setExternalLinkUrl(`https://www.google.com/search?q=${encodeURIComponent(selectedTopicName)}`);
                              setExternalLinkLabel('Open Web Search');
                            }
                          }}
                          style={{
                            flex: 1, padding: '0.75rem 1rem', borderRadius: '0.5rem',
                            border: '1px solid var(--card-border)', outline: 'none', fontSize: '0.95rem',
                            color: 'var(--text-main)', background: 'var(--card-bg)', cursor: 'pointer'
                          }}
                        >
                          <option value="">-- Select Web Source --</option>
                          <option value="wiki">Read Complete Wikipedia Article: {selectedTopicName}</option>
                          <option value="google">Search Latest News & Articles: {selectedTopicName}</option>
                          <option value="github">Explore Open Source GitHub Repos: {selectedTopicName}</option>
                          <option value="medium">Search Tech Blogs on Medium: {selectedTopicName}</option>
                          <option value="scholar">Google Scholar Research Papers: {selectedTopicName}</option>
                        </select>

                        <button
                          onClick={() => window.open(externalLinkUrl || `https://www.google.com/search?q=${encodeURIComponent(selectedTopicName)}`, '_blank')}
                          style={{
                            background: 'var(--card-bg)', color: module.color, border: `1px solid ${module.color}`,
                            padding: '0 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold',
                            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem',
                            transition: 'all 0.2s', whiteSpace: 'nowrap'
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = module.color; e.currentTarget.style.color = 'white'; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = module.color; }}
                        >
                          <LinkIcon size={18} /> {externalLinkLabel || 'Open Web Search'}
                        </button>
                      </div>
                    </div>

                    {/* Link Preview / iframe */}
                    <div style={{ background: 'var(--icon-bg)', borderRadius: '0.75rem', overflow: 'hidden', position: 'relative', minHeight: isMaximized ? 'calc(90vh - 250px)' : '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', width: '100%', border: '1px solid var(--card-border)', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                      {activeLink ? (
                        <iframe src={activeLink} width="100%" height="100%" style={{ minHeight: isMaximized ? 'calc(90vh - 250px)' : '500px', border: 'none' }} title="Website Viewer" onError={() => alert('This website cannot be embedded.')} />
                      ) : (
                        <>
                          <LinkIcon size={64} color="#cbd5e1" style={{ opacity: 0.8 }} />
                          <p style={{ color: 'var(--text-muted)', marginTop: '1rem', fontSize: '1.1rem' }}>Select a web resource to preview for {selectedTopicName}</p>
                          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>(Note: Some sites block embedding via iframe)</p>
                        </>
                      )}
                    </div>

                    {isAdmin && (
                      <>
                        <hr style={{ border: 'none', borderTop: '1px solid var(--card-border)', marginBottom: '1.5rem' }} />

                        {/* Upload/Add Link Section (Admin Only) */}
                        <div style={{ marginBottom: '0.5rem', padding: '1.5rem', border: `2px dashed ${module.color}66`, borderRadius: '0.5rem', textAlign: 'center', background: `${module.color}05` }}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <input
                              type="url"
                              placeholder="Paste new URL here (https://...)"
                              value={newLinkInput}
                              onChange={(e) => setNewLinkInput(e.target.value)}
                              style={{ padding: '0.6rem', borderRadius: '0.5rem', border: '1px solid var(--card-border)', outline: 'none', fontSize: '0.85rem' }}
                            />
                            <button onClick={handleAddLink} style={{ background: module.color, color: 'white', border: 'none', padding: '0.5rem 1.25rem', borderRadius: '2rem', fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer', alignSelf: 'center' }}>
                              Preview Custom Link (Admin)
                            </button>
                          </div>
                        </div>
                      </>
                    )}

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
