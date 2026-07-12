import os

filepath = r'c:\Users\DELL\OneDrive\Desktop\AI\technical project renew\Technical-project-renew\src\ModuleDetail.jsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

start_idx = content.find('  useEffect(() => {\n    if (!selectedTopicName) return;\n\n    let htmlPdf = "";\n\n    // Helper fragments')
end_idx = content.find('  }, [selectedTopicName, pdfSelect, pdfLanguage, module]);\n', start_idx) + len('  }, [selectedTopicName, pdfSelect, pdfLanguage, module]);\n')

new_use_effect = """  useEffect(() => {
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
"""

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + new_use_effect + content[end_idx:]
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Successfully updated ModuleDetail.jsx with dynamic PDF content")
else:
    print("Could not find the target useEffect block")
